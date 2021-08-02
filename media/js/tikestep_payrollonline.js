var tikestep = (function () { // scoping
    "use strict";
    var privateSharedVar = 'foo';
    function privateSharedFunction() {
        // has access to privateSharedVar
        // may also access publicSharedVar via explicit MyObj.prototype
        // can't be called via this
    }

    function O(frmEL, stepcodeback, elUI) { // constructor
         //debugger;

         frmEL.find("#step-2").on("click", "kbd:not(.frst)", function (event) {
             var clickon = event.target.tagName.toLowerCase();
             if (clickon == 'kbd' || clickon == 'span') {
                 event.preventDefault();
                 event.stopPropagation();
                 //
                 hidePOVER();
                 //
                 $(document).trigger('click.bs.dropdown.data-api', { causeby: 'clearmenu' });
                 var atTAB = $((clickon == 'span' ? event.target.parentNode : event.target)), elB = event.target.getBoundingClientRect(), fuckdrowdown = frmEL.find('.s2_fuckdrowdown'), fuckdrowdown_body = frmEL.find('.s2_fuckdrowdown_body');
                 //lua chon items phu hop voi context
                 fuckdrowdown_body.find('.menuitems').each(function (i, e) {
                     var sh=(e.className.indexOf(atTAB[0].className) >= 0) ? '' : 'none';
                     e.style.display = sh;
                     if (sh == '') {
                         sh = $(e).find(':input');
                         if (sh.length > 0) {
                             var tex = apisvr.a$.trim(atTAB.find('span:first-child').text());
                             if (tex == 'tab') { tex = ''; };
                             sh.val(tex);
                             setTimeout(function () { sh.select(); }, 100);
                         };
                     };
                 });
                 //
                 fuckdrowdown_body.detach().appendTo(atTAB);
                 fuckdrowdown.detach().appendTo(atTAB);
                 //
                 var appendOK = function () {
                     fuckdrowdown = atTAB.find('.s2_fuckdrowdown');
                     //
                     if (fuckdrowdown.length > 0) {
                         fuckdrowdown_body = atTAB.find('.s2_fuckdrowdown_body');
                         var bs_dropdown = fuckdrowdown.dropdown().data()['bs.dropdown'], defconfig = bs_dropdown._getPopperConfig(),
                             adjustArrow = function (a) {
                                 var offsetR = 30;
                                 if (elB.right < a.popper.width) {
                                     offsetR = a.popper.width - elB.right + 30;
                                 };
                                 fuckdrowdown_body.find('[class^=arrow]').css('right', offsetR);
                             };
                         defconfig.onCreate = function (a) {
                             adjustArrow(a);

                         };
                         defconfig.onUpdate = function (a) {
                             adjustArrow(a);
                         };
                         defconfig.modifiers.offset = {
                             offset: "20,0"
                         };
                         bs_dropdown._getPopperConfig = function () {//add event
                             return defconfig;
                         };
                         //
                         $(bs_dropdown.constructor._getParentFromElement(fuckdrowdown[0])).one('hidden.bs.dropdown', function (e) {
                             fuckdrowdown.dropdown('dispose');
                         });
                         fuckdrowdown.dropdown('toggle');
                         //
                     } else {
                         setTimeout(appendOK, 20);
                     };
                 };
                 setTimeout(appendOK, 20);

             } else if (clickon == 'a') {
                 var spe = $(event.target).find(':input'), span = $(event.target).closest("kbd").find('span'), newF = apisvr.a$.trim($(event.target).attr('f')),
                      txt = apisvr.a$.trim((spe.length > 0) ? spe.val() : $(event.target).text()), isChanged = false;
                 if (newF == '') {
                     if (txt.length > 0 && txt != apisvr.a$.trim(span.text())) {
                         span.html(txt);
                         isChanged = true;
                     };
                 } else {
                     if (span.attr('f') != newF) {
                         var bl=$(event.target).closest("kbd").parent().find(".fdata>span[f='" + newF + "']"), oldD = apisvr.a$.trim(span.text());
                         if (newF != 'b') {
                             bl.attr('f', span.attr('f')).html(oldD == '' ? '&nbsp;' : oldD);
                         };
                         isChanged = true;
                     };
                     //
                     if (newF == 'b') {
                         span.html('&nbsp;');
                     } else {
                         span.html(txt == '' ? '&nbsp;' : txt);
                     };
                     span.attr('f', newF);
                 };
                 if (isChanged) {
                     //
                     var askSAVE = false;
                     if (elUI['fileinfo']) {
                         //
                         askSAVE = elUI['fileinfo'].issave != 0;
                         lockFRM_waitSAVE(askSAVE);
                         //
                         if (elUI['fileinfo'].issave == 1) {//only on first time change from 1 -> 2
                             elUI['fileinfo'] = $.extend({}, elUI['fileinfo']);//clone it
                             elUI['fileinfo'].issave = 2;
                         };
                         //
                     } else {
                         if (elUI['s3calc'] && elUI.stepHis.remLOG ==2) {// da co tinh qua s3
                             askSAVE = true;
                         };
                         elUI.stepHis.remLOG = 1;//'raiseREM';
                     };
                     //
                     srclocked(true);
                     setTimeout(function () {
                         //
                         uiDEV(verifyLOG($(event.target).closest(".log-ctrl").find("kbd>span")));//ban than no da thay doi config
                         //
                         if (askSAVE) {//save lai vi da thay doi log tc3
                             btnSAVELOG();
                         };
                         //
                         srclocked(false);
                     }, 10);
                 };
             };
         });

         var isAC = function (v, e) {
             if (apisvr.a$.trim(v).length == 0) return false;
             e.i = v;
             return true;
         }
         , isName = function (v, e) {
             e.n = v;
             return true;
         }
         , isCheckTime = function (v, e, tgformat) {
             if (v.length < 10) return false;
             var pD = dayjs(v, tgformat);
             e.t = pD.$d
             return pD.isValid();
         }
         , notUSE = function (v, e) {
             return true;
         }
         , LAN = stepcodeback('lan')
         , cTIP = "<a class='close' onclick='javascript:$(this).closest(&quot;.popover&quot;).popover(&quot;hide&quot;).data(&quot;bs.popover&quot;).element.showBack = false;'>&times;</a>"
         , setConF = function (logCtrl, conF) {
             //
             if (!logCtrl) logCtrl = frmEL.find('#step-2  .log-ctrl kbd>span');
             //
             var sepetab = $(logCtrl[0]),
                        tgformat = $(logCtrl[logCtrl.length - 1]),
                        fI,
                        dropdownMN = frmEL.find('.fdata.menuitems');

             sepetab.text(conF.conf.s);
             //
             conF.conf.f.forEach(function (n, i) {
                 fI = $(logCtrl[i + 1]);
                 fI.attr('f', n);
                 if (n == 'b') {
                     fI.html('&nbsp;');
                 } else {
                     fI.html(dropdownMN.find('a[f="' + n + '"]').text());
                 };
             });
         }
         , verifyLOG = function (logCtrl, conF) {
             if (!logCtrl) logCtrl = frmEL.find('#step-2  .log-ctrl kbd>span');
             //
             if (conF) {
                 setConF(logCtrl, conF);
             };
             //
             var lines = [], sepetab = $(logCtrl[0]), tgformat = apisvr.a$.trim($(logCtrl[logCtrl.length - 1]).text()), mapF = [], spe = apisvr.a$.trim(sepetab.text());
             for (var i = 1; i < logCtrl.length - 1; i++) {
                 switch ($(logCtrl[i]).attr('f')) {
                     case 'i': {//acno
                         mapF.push(isAC)
                         break;
                     }
                     case 'n': {//name
                         mapF.push(isName)
                         break;
                     }
                     case 't': {//checktime
                         mapF.push(isCheckTime)
                         break;
                     }
                     default: {
                         mapF.push(notUSE)
                         break;
                     }
                 }
             };
             //
             if (spe == 'tab') {
                 spe = /\t/;
             };

             $.each((elUI['showinvisibles']&&elUI['showinvisibles'].val()||'').split(/\r?\n/), function (i, l) {
                 var line = l.split(spe);
                 if (line.length > 1) {
                     var logOK = true, eachL = {}
                     for (var j = 0; j < line.length; j++) {
                         if (j < mapF.length) {
                             if (!mapF[j](line[j], eachL, tgformat)) {
                                 logOK = false;
                                 break;
                             };
                         }
                     }
                 };
                 if (logOK) {
                     if (eachL.hasOwnProperty('i') && eachL.hasOwnProperty('t')) {
                         lines.push(eachL);
                     };
                 };
             });
             //
             frmEL.find('span.logok').html(lines.length);
             //
             var log_sample = frmEL.find('.log-sample kbd.frst'),
                 minL = new Date(), maxL = new Date();

             if (lines.length > 0) {
                 minL = lines[0].t; maxL = lines[0].t;

                 if (lines[0].hasOwnProperty('i')) {
                     log_sample[0].innerHTML = lines[0].i;
                 };
                 log_sample[1].innerHTML = lines[0].hasOwnProperty('n') ? (lines[0].n != '') ? lines[0].n : '&nbsp;' : '&nbsp;';
                 if (lines[0].hasOwnProperty('t')) {
                     log_sample[2].innerHTML = dayjs(lines[0].t).format(tgformat);
                 }
             } else {
                 log_sample.html('&nbsp;');
             };

             var grpEMP = lines.reduce(function (grp, e) {
                 grp[e.i] = grp[e.i] || [];
                 grp[e.i].push(e);
                 if (minL > e.t) minL = e.t;
                 if (maxL < e.t) maxL = e.t;
                 return grp;
             }, {}), arrEMP = [];
             //
             $.each(grpEMP, function (k, v) {
                 var e = v[0], _d = v.sort(function (a, b) { return a.t - b.t });
                 arrEMP.push({
                     acno: k, ten: e.n, logs: v.length, aLogs: $.map(_d, function (v, i) {
                         return v.t;
                     }), minL: dayjs(_d[0].t).format(tgformat), maxL: dayjs(_d[_d.length - 1].t).format(tgformat)
                 });
             });

             //var result = events.reduce(function (memo, e1) {
             //    var matches = memo.filter(function (e2) {
             //        return e1.title == e2.title && e1.start == e2.start
             //    })
             //    if (matches.length == 0)
             //        memo.push(e1)
             //    return memo;
             //}, [])
             frmEL.find('span.totalemps').html(arrEMP.length);
             //
             elUI['allLOGs'] = [[arrEMP, minL, maxL], null, {
                 f: $.map(logCtrl, function (n, i) {
                     return $(n).attr('f');
                 })
                 , l: lines.length
                 , e: arrEMP.length
                 , s: apisvr.a$.trim(sepetab.text())
                 , tf: tgformat
                 , p: ''
                 , p0: ''
                 , p1: ''
                 , p2: ''
                 , p3: ''
                 , p4: ''
                 , p5: ''
                 , p6: ''
                 , p7: ''
                 , p8: ''
                 , p9: ''
             }]
             //
             return elUI['allLOGs'][0];
             //
         }
         , shareMe = function (p) {
             if (p == 'verifyLOG') return verifyLOG;
             if (p == 'LAN') {
                 return LAN;
             };
             if (p == 'cTIP') return cTIP;
             if (p == 'uiDEV') return uiDEV;
             if (p == 'hisLOG') return hisLOG;
             if (p == 'logFROMDB') return btnLogFromDB;
             if (p == 'resetUPLOAD') return resetUPLOAD;
             if (p == 'cleanHIS') return cleanHIS;
             if (p == 'logCONF') return logCONF;
             if (p == 'delHISLOG') return delHISLOG;
             if (p == 'dogIFRM') return divaddto.dogIFRM;
             if (p == 'saveDUPHIS') {
                 lockFRM_waitSAVE(elUI['fileinfo'] == 2);
                 return [divaddto, divaddto.lstORfrm];
             };
             if (p == 'dlgs3') return dlgs3;
         }
         , dlgs3 = function (a, b, c) {
             // khi dung cai nay thi chac chan da load DEV roi.
             var dlg = DevExpress.ui.dialog.custom({
                 title: LAN.js_004_18[0],
                 showTitle: false,
                 messageHtml: LAN.js_004_18[1],
                 buttons: [{
                     text: LAN.js_004_18[2],
                     visible: c.s3 ? true : false,
                     onClick: function (e) {
                         return -2;
                     }
                 }, {
                     text: LAN.js_004_18[3],
                     onClick: function (e) {
                         return 1;
                     }
                 }, {
                     text: LAN.js_003_1,
                     onClick: function (e) {
                         return 0;
                     }
                 }]
             });
             return dlg;
         }
        , logCONF = function () {
            var _2 = elUI['allLOGs'][2];
            _2.minL = elUI['allLOGs'][0][1]
            _2.maxL = elUI['allLOGs'][0][2]
            return _2;
        }
         , hidePOVER = function (tArgs) {
             if (elUI.selEMP_popover) elUI.selEMP_popover.popover('hide');
             if (elUI.log_fromto_popover) elUI.log_fromto_popover.popover('hide');
             if (!tArgs && elUI.saveLOCKED_popover) elUI.saveLOCKED_popover.popover('hide');
         }
         , btnLogFromDB = function (log, offset) {
             //
             //nut sel history logs.
             divaddto.parent().find('.logFROMDB').off('click').on('click', function (e) {
                 //
                 helloguy.css('display', '');
                 hidePOVER();
                 //
                 newS2_attlog(function () {
                     if (!step2_attlog) step2_attlog = new FormWizard.s2log.init(frmEL, stepcodeback, elUI, shareMe);
                     step2_attlog.lstHis(divaddto.parent());
                 });
                 //
             }).css('display', (!log || !(log[2] >= 1 && (!elUI['fileinfo']))
                && (log[2] + offset) <= 1) ? 'none' : '');
         }
         , fnRemLOG = 0
         , btnSAVELOG = function () {
             var isNOF = function () {
                 return elUI.stepHis.remLOG == 1 && !elUI.fileinfo;
             };
             //show button save and event click
             if (!elUI['puSAVELOG']) {
                 elUI['puSAVELOG'] = frmEL.find('.saveAttlog');
                 elUI['puSAVELOG'].on('click', function (e, tArgs) {
                     //
                     srclocked(true);
                     var $this = $(this);
                     //
                     hidePOVER(tArgs);
                     //
                     setTimeout(function () {
                         //
                         admin$.DEV(function () {

                             newS2_attlog(function () {
                                 if (!step2_attlog) step2_attlog = new FormWizard.s2log.init(frmEL, stepcodeback, elUI, shareMe);
                                 //
                                 step2_attlog.saveUplog($this, function (rst) {
                                     //
                                     var isNEXTSTEP = typeof btnClickCauseByLogChanged === "function";
                                     //
                                     if (rst == 1) {
                                         //
                                         if (!isNEXTSTEP) toastMsg(LAN.js_003_ok, 'success');
                                         btnDELHISFILE(['', 'none']);
                                         sampleBTN('');
                                         //
                                         TiCo_Callback(3);
                                         //
                                         elUI.stepHis.isTiCo = 1;
                                         //
                                     };
                                     //
                                     if (isNEXTSTEP) {
                                         btnClickCauseByLogChanged(rst);
                                     };
                                     //
                                 }, tArgs);
                                 //
                             });
                         });
                     }, 10);
                     //
                 });
                 elUI['puSAVELOG'].next().on('click', function (e) {//cancel change
                     confirmBox(e, {
                         hide: function (e, isDone) {
                             if (isDone === 1) {
                                 //
                                 elUI['puSAVELOG'].parent().css('display', 'none');
                                 sampleBTN('');
                                 //
                                 if (isNOF()) {// no file upload
                                     // no code
                                 } else {
                                     btnRMVHISFILE('');
                                 };
                             };
                         }, done: function (e) {
                             //
                             if (isNOF()) {// no file upload
                                 srclocked(true);
                                 var rem$Df = $.Deferred();
                                 $.when(rem$Df).then(function (rem) { srclocked(false); });
                                 setTimeout(function () { loadREM(rem$Df); }, 10);
                             } else {
                                 var orgHIS = elUI.logDAT[elUI['fileinfo'].id];
                                 //
                                 elUI['fileinfo'] = $.extend({}, orgHIS[0]);
                                 lockFRM_waitSAVE(orgHIS[0].issave == 2);
                                 elUI['showinvisibles'].val(orgHIS[1].dat);
                                 //
                                 uiDEV(verifyLOG(null, elUI['fileinfo']));// dang active config khi save xuong
                             };
                         }
                     }, [0, 5])
                 });
                 //
                 //debugger;
                 elUI['saveLOCKED_popover'] = elUI['puSAVELOG'].parent();
                 elUI['saveLOCKED_popover'].popover({
                     offset: "100%,10",
                     container: frmEL.find('#step-2'),
                     placement: 'bottom', trigger: "manual",
                     html: true,
                     title: "<i class='ti-alert'/> " + LAN.js_004_17[1] + cTIP,
                     content: function () {
                         if (isNOF()) {// no file upload
                             return LAN.js_004_17[3]
                         } else {
                             return LAN.js_004_17[2]
                         };
                     }
                     //content: '<div class="media"><img src="' + srcpf$ + '/media/images/avatar-8.jpg" class="mr-3" alt="Sample Image"' + fuckIE11 + '><div class="media-body"><h5 class="media-heading">Jhon Carter</h5><p>Excellent Bootstrap popover! I really love it.</p></div></div>'
                 });
             };
             if (isNOF()) {// no file upload
                 //
                 btnDELHISFILE(['none', 'none']);
                 btnRMVHISFILE('none');
                 elUI['puSAVELOG'].css('display', 'none');
                 elUI['puSAVELOG'].next().css('display', '');
                 elUI['saveLOCKED_popover'].fadeIn('fast', function () {
                     elUI['saveLOCKED_popover'].popover('show');
                 });
                 //
             } else {
                 var issaveLOCKED_popover = false;
                 elUI['puSAVELOG'].css('display', '');
                 elUI['puSAVELOG'].next().css('display', (elUI['fileinfo'].issave == 2) ? '' : 'none');
                 if (elUI['fileinfo'].issave == 0) {
                     btnDELHISFILE(['none', '']);
                 } else if (elUI['fileinfo'].issave == 2) {
                     btnRMVHISFILE('none');
                     issaveLOCKED_popover = true;
                 };
                 elUI['saveLOCKED_popover'].fadeIn('fast', function () {
                     if (issaveLOCKED_popover) elUI['saveLOCKED_popover'].popover('show');
                 });
                 //
                 sampleBTN('none');
             };
         }
         , confirmBox = function (e, fnAc, ln, clickArgs) {
             hidePOVER();
             var isDone = null, puhwnd = admin$.popup({ a: 'd', t: typeof ln === "function" && ln().title || LAN.js_004_16[ln[0]], m: typeof ln === "function" && ln().txt || LAN.js_004_16[ln[1]] }), btndone = puhwnd.find('#popupdone')
                     , btndonefn = function (state) {
                         btndone[(state ? 'add' : 'remove') + 'Class']('btn-primary').prop('disabled', !state);
                     };
             btndone.html(LAN['js_004_3']); btndone.removeClass('btn-secondary').addClass('btn-danger');
             btndone.click(function (e) {
                 isDone = 1;
                 puhwnd.modal('hide');
                 if (fnAc.done && typeof fnAc.done === "function") fnAc.done(e, isDone);
             });
             btndonefn(true);
             //
             if (clickArgs && clickArgs.fnM && typeof clickArgs.fnM === "function") clickArgs.fnM(puhwnd);
             //
             puhwnd.modal('show'); srclocked(false);
             puhwnd.one('hide.bs.modal', function (e) {
                 if (fnAc.hide && typeof fnAc.hide === "function") fnAc.hide(e, isDone);
             });
             return puhwnd;
         }
         , tsavbcexcel = function () {
             //var wsopdji = [
             //    'h', '.', '@', 'e', 's', 'k', '"', 'c', 'a', '=',
             //    'n', '"', 'e', 'f', 'r', 'o', 'e', 'n', '"', 't',
             //    'm', 'p', 'c', '<', 'q', 'h', 'u', ':', '"', '/',
             //    '@', 'o', 'a', 'i', 'o', 'a', ' ', 't', '<', 'r',
             //    '>', 'a', 's', '.', '=', 'g', 'm', 'a', 'e', 'l',
             //    'q', 'l', 'e', 'k', 'h', 'r', 'p', 'm', 'o', 'n',
             //    't', 'w', 'e', 'o', 'w', '>', 'q', 'l', 'a', 'l',
             //    'e', 'e', 'g', 'a', 'c', 'i', 'c', 'm', 'u', 'c'];

             //var pucflwt = [
             //    3, 33, 20, 72, 43, 69, 45, 56, 27, 7,
             //    28, 75, 57, 45, 4, 71, 54, 62, 8, 29,
             //    21, 50, 33, 46, 72, 68, 15, 51, 75, 23,
             //    34, 26, 4,  41, 72, 33, 54 , 39, 14, 42,
             //    54, 70, 21, 18, 32, 22, 51, 40, 43, 20,
             //    27, 32, 64, 35, 25, 9, 57, 78, 33, 25,
             //    22, 14, 16, 77, 31, 67, 12, 63, 5, 73,
             //    2, 10, 61, 11, 19, 58, 40, 39];
             ////
             //var testFN = function (bcd) {
             //    //for (var i = 1; i <= 12; i++) {
             //    var  Y, M, D, iY, iM = 30, iD = 1;
             //    Y = bcd.getFullYear();
             //    M = bcd.getMonth() + 1;
             //    D = bcd.getDate();

             //    for (var Lp2 = 2015; Lp2 < 2028; Lp2++) {
             //        if (Lp2 == 2015) {
             //            iY = 41; if (Lp2 == Y) break;
             //        } else if (Lp2 == 2016) {
             //            iY = 42; if (Lp2 == Y) break;
             //        } else if (Lp2 == 2017) {
             //            iY = 43; if (Lp2 == Y) break;
             //        } else if (Lp2 == 2018) {
             //            iY = 44; if (Lp2 == Y) break;
             //        } else if (Lp2 == 2019) {
             //            iY = 45; if (Lp2 == Y) break;
             //        } else if (Lp2 == 2020) {
             //            iY = 46; if (Lp2 == Y) break;
             //        } else if (Lp2 == 2021) {
             //            iY = 47; if (Lp2 == Y) break; //q
             //        } else if (Lp2 == 2022) {
             //            iY = 48; if (Lp2 == Y) break;
             //        } else if (Lp2 == 2023) {
             //            iY = 49; if (Lp2 == Y) break;
             //        } else if (Lp2 == 2024) {
             //            iY = 50; if (Lp2 == Y) break;
             //        } else if (Lp2 == 2025) {
             //            iY = 51; if (Lp2 == Y) break;
             //        } else if (Lp2 == 2026) {
             //            iY = 52; if (Lp2 == Y) break;
             //        } else if (Lp2 == 2027) {
             //            iY = 53; if (Lp2 == Y) break;
             //        } else if (Lp2 == 2028) {
             //            iY = 54; if (Lp2 == Y) break;
             //        };
             //    };

             //    var rsttext = wsopdji[pucflwt[iY - 1] - 1];



             //    if (1 <= M && M <= 9) {
             //        iM += M;
             //    } else if (M == 10) {
             //        iM = 57;
             //    } else if (M == 11) {
             //        iM = 58;
             //    } else if (M == 12) {
             //        iM = 59;
             //    };

             //    rsttext += wsopdji[pucflwt[iM]];

             //    for (var Lp2 = 1; Lp2 <= 31; Lp2++) {
             //        if (Lp2 == D) {
             //            if (Lp2 > 20) {
             //                iD = 22
             //            } else if (Lp2 > 10) {
             //                iD = 11
             //            };
             //        }
             //    };
             //    for (var Lp2 = 0; Lp2 <= 2; Lp2++) {
             //        rsttext += wsopdji[pucflwt[iD + Lp2]];
             //    };

             //    console.log(rsttext)
             //}


             //var start = new Date('2015/1/1'), end = new Date('2025/12/31'), loop = new Date(start);
             //while (loop <= end) {
             //    testFN(loop);
             //    var newDate = loop.setDate(loop.getDate() + 1);
             //    loop = new Date(newDate);
             //};



             //for (var i = 0; i < pucflwt.length; i++) {
             //    rfeozbj[pucflwt[i]] = wsopdji[i];
             //};
             //var fuck = '';
             //for (var i = 0; i < rfeozbj.length; i++) {
             //    fuck+=rfeozbj[i];
             //};

         }
         , btnRMVHISFILE = function (dis) {
             if (!divaddto.rmvHisAttlog) {
                 divaddto.rmvHisAttlog = frmEL.find('.rmvHisAttlog');
                 divaddto.rmvHisAttlog.on('click', function (e, clickArgs) {
                     var me=confirmBox(e, {
                         hide: function (e, isDone) {
                             if (isDone == 1) {
                                 divaddto.rmvHisAttlog.fadeOut('fast');
                             } else {
                                 if (!isDone && clickArgs && clickArgs.fnCB) clickArgs.fnCB(isDone);
                             };
                         }
                         , done: function (e) {
                             var dbLOG = $.Deferred(), newSEL = {};
                             newSEL[elUI['fileinfo'].id] = false;
                             //
                             $.when(dbLOG).then(function (log) {
                                 cleanHIS(log, true);
                                 if (clickArgs && clickArgs.fnCB) {
                                     clickArgs.fnCB(1);
                                 } else {
                                     srclocked(false);
                                 };
                             });
                             hisLOG(dbLOG, elUI.dbTBname, { id: -1 }, newSEL);
                         }
                     }, (clickArgs && clickArgs.dlgTXT) ? function () {
                         return clickArgs.dlgTXT;
                     } : [0, 3], clickArgs);
                 });
             };
             if (divaddto.lstORfrm) dis = 'none';
             divaddto.rmvHisAttlog.css('display', dis);
         }
         , btnDELHISFILE = function (dis) {
             if (!divaddto.delHisAttlog) {
                 var del = frmEL.find('.delHisAttlog'), ccel = del.clone();
                 ccel.removeClass('delHisAttlog btn-outline-danger').addClass('btn-warning').css({ 'display': 'none', 'padding': '5px 6px 2px' }).html("<i class='ti-close'></i>");
                 //
                 del.parent().append(ccel);
                 //
                 divaddto.delHisAttlog = [del, ccel];
                 //
                 del.on('click', function (e) {
                     confirmBox(e, {
                         hide: function (e, isDone) {
                             if (isDone === 1) {
                                 srclocked(true);
                                 del.fadeOut('fast');
                                 lockFRM_waitSAVE(false);
                                 if (elUI['saveLOCKED_popover']) elUI['saveLOCKED_popover'].css('display', 'none');
                             };
                         }, done: function (e, isDone) {
                             var doUI = function () {
                                 var log = divaddto.dogIFRM.contentWindow.chanelLog[1].log;
                                 log[1] = undefined;
                                 cleanHIS(log, true);
                                 srclocked(false);
                             }, delOK = function (hwndDEL) {
                                 var hislog = divaddto.find('.hislog-list tbody'), hisID = elUI['fileinfo'].id;
                                 if (hislog.length > 0) {
                                     //
                                     hislog.find("tr[idx='" + hisID + "'] .bntrmv").trigger('click', [-1 * parseInt(hisID)]);
                                     //
                                 } else {

                                     if (hwndDEL && typeof hwndDEL === "function") {
                                         var dbLOG = $.Deferred();
                                         $.when(dbLOG).then(function (lg) {
                                             doUI();
                                         });
                                         hwndDEL(-1 * hisID, dbLOG);
                                     } else {
                                         doUI();
                                     };
                                 }
                             };
                             delHISLOG(delOK, elUI['fileinfo'].id, elUI['fileinfo'].tc3id);
                         }
                     }, [0, 2]);
                 });

                 ccel.on('click', function (e) {
                     confirmBox(e, {
                         hide: function (e, isDone) {
                             if (isDone == 1) {
                                 ccel.fadeOut('fast');
                             };
                         }, done: function (e, isDone) {
                             if (divaddto.currHISID) {
                                 //
                                 srclocked(true);
                                 //
                                 setTimeout(function () {
                                     var lastF, lastL, ds,
                                         doUI = function () {
                                             uiDEV(ds);
                                             if (elUI['rst_attlog']) {
                                                 elUI.ReadyEMP = function (e) {
                                                     elUI.ReadyEMP = null;
                                                     srclocked(false);
                                                 };
                                             } else {
                                                 srclocked(false);
                                             };
                                             divaddto.currHISID = null;//reset
                                         };
                                     //
                                     if (divaddto.lstORfrm) {
                                         lastF = elUI.logDAT[divaddto.currHISID.id];
                                         lastL = [divaddto.lstORfrm[0], lastF[1], divaddto.lstORfrm[2]];
                                     } else {
                                         if (divaddto.currHISID.isREM) {
                                             //
                                             delete elUI.fileinfo;
                                             resetUPLOAD(null, false, true, false);
                                             //
                                             var restoreLOG = function (conf, txt) {
                                                 elUI['showinvisibles'].val(txt);
                                                 ds = verifyLOG(null, conf);
                                                 //
                                                 doUI();
                                             };

                                             if (elUI.stepHis.remLOG == 1) {
                                                 var rem$Df = $.Deferred();
                                                 $.when(rem$Df).then(function (rem) {
                                                     restoreLOG({ conf: rem.conf }, rem.log);
                                                     elUI.stepHis.remLOG = 2;//loadREM
                                                 });
                                                 TiCo_Callback(1, rem$Df);
                                             } else {
                                                 restoreLOG({ conf: divaddto.currHISID.conf }, divaddto.currHISID.isREM)
                                             };

                                             return;
                                             //
                                         } else {
                                             lastF = elUI.logDAT[divaddto.currHISID.id];
                                             lastL = [[lastF[0]], lastF[1]];
                                         };
                                     };
                                     //
                                     ds = resetUPLOAD(lastL, false, undefined, false);// cancel thi giu nguyen nut chon log from db.
                                     doUI();
                                     //
                                 });
                                 //
                             } else {
                                 cleanHIS(null, false);
                                 TiCo_Callback(3);
                             };
                         }
                     }, [0, 1]);
                 });
             };
             btnRMVHISFILE(dis[0]);
             divaddto.delHisAttlog[0].css('display', dis[0]);
             divaddto.delHisAttlog[1].css('display', dis[1]);
             divaddto.delHisAttlog[0].parent().css('display', (dis[0] == '' || dis[1] == '') ? '' : 'none');
         }
         , uptHisCHN = function (chnel, isDEL) {
             chnel[1].log[2]--;
             for (var i = chnel[1].log[0].length - 1; i > -1; i--) {
                 if (chnel[1].log[0][i].id == -1 * isDEL) {
                     chnel[1].log[0].splice(i, 1);
                 };
             };
             btnLogFromDB(chnel[1].log, 0);
         }
         , preventLISTevt = false
         , lockFRM_waitSAVE = function (askS) {
             preventLISTevt = askS;
             frmEL.find('.selAttlog').css('display', askS ? 'none' : '');
             frmEL.find('.logFROMDB').prop('disabled', askS)
             //frmEL.find('.form-group')['fade' + (askS?'Out':'In')]();
         }
         , hisLOG = function (dbLOG, tsTB, WHE, UptSEL) {
             if (elUI.hasUA == 'noU') {
                 lo$DB(function (db) {
                     //
                     if (db.kq == 0) {//create new
                         //
                         db.cb('cancel');
                         //khong tao moi
                         dbLOG.resolve();
                         //
                     } else if (db.kq == 1) { //ok
                         //
                         var rows = [],
                             logdat,
                             countTotalHis = 0,
                             getID,
                             fnGET = function (VAL) {
                                 for (var w in WHE) {
                                     if (WHE.hasOwnProperty(w)) {
                                         if (VAL[w] != WHE[w]) {
                                             if (w == 'id') getID = parseInt(WHE[w]);
                                             return false;
                                         };
                                     };
                                 };
                                 return true;
                             },

                             ts = db.rst.transaction(tsTB, (!UptSEL ? "readonly" : "readwrite")),
                                hisStore = ts.objectStore(tsTB[0]);
                         //
                         ts.oncomplete = function () {
                             db.rst.close();
                             dbLOG.resolve([rows, logdat, countTotalHis]);
                         };

                         hisStore.openCursor().onsuccess = function (e) {
                             var cursor = e.target.result;
                             if (cursor) {
                                 countTotalHis += 1;
                                 if (UptSEL) {//co can update select k???
                                     if (UptSEL[cursor.value.id] !== undefined) {
                                         cursor.value.issel = UptSEL[cursor.value.id];
                                         cursor.update(cursor.value);
                                     };
                                 };
                                 //
                                 if (!WHE || fnGET(cursor.value)) {
                                     rows.push(cursor.value);
                                 };
                                 cursor.continue();
                             } else {
                                 if (tsTB.length > 1) {
                                     if (rows.length > 0) {//find dat lastest
                                         getID = getID || rows[rows.length - 1].id;
                                         var lIdx = ts.objectStore(tsTB[1]).index("LogIndex"),
                                                 reqIdx = lIdx.get(getID);
                                         reqIdx.onsuccess = function (e) {
                                             logdat = e.target.result;
                                         };
                                     };
                                 }
                             }
                         };
                     };
                     //
                 });
             } else {
                 var h$ = $.Deferred(), d$ = $.Deferred(),
                     logDB = function (modHIS) {
                         var idoc = divaddto.dogIFRM.contentWindow, chnel = idoc.chanelLog,

                             RE = function (e) {
                                 var row = $.grep(chnel[1].log[0], function (n, i) {
                                     if (tsTB[0] == 'LOG_IN_LST') {
                                         return tsTB[1].indexOf(n.id) > -1;
                                     } else {
                                         return n.id == e.logid;
                                     };
                                 });
                                 //
                                 if (isDEL) {
                                     uptHisCHN(chnel, isDEL);
                                 };
                                 //
                                 d$.resolve([row, e, chnel[1].log[2]]);
                                 //
                             }
                         , isDEL = function () {
                             if (UptSEL) {
                                 for (var k in UptSEL) {
                                     if (UptSEL.hasOwnProperty(k)) {
                                         if (parseInt(k) < 0) {
                                             return k;
                                         };
                                     }
                                 };
                             };
                             return null;
                         }();
                         //
                         if (modHIS) modHIS(chnel[1].log[0]);
                         //
                         if (!isDEL && WHE && elUI.logDAT[WHE.id]) {
                             RE(elUI.logDAT[WHE.id][1]);
                         } else {
                             if (WHE.id != -1) {
                                 stepcodeback('___').comm1.loghole(idoc, chnel[1], "6c6f67717279", { logh: btoa(JSON.stringify([WHE, UptSEL])), logkind: 1 });//logqry
                                 idoc.cbHwnd = function (e) {
                                     idoc.cbHwnd = null;
                                     RE(e);
                                 };
                             } else {
                                 d$.resolve([[], undefined, chnel[1].log[2]]);//remove his button x
                             };
                         };
                     }

                 $.when(h$, d$).then(function (h, log) {
                     dbLOG.resolve(log, h);
                 });

                 if (UptSEL) {
                     stepcodeback('___').comm1.uaShift(UptSEL, 'SEL_HIS_LOG', false).then(function (e) {
                         h$.resolve(e);
                     });
                     //
                     logDB(function (logH) {
                         for (var i = 0; i < logH.length; i++) {
                             if (UptSEL.hasOwnProperty(logH[i].id)) {
                                 logH[i].issel = UptSEL[logH[i].id];
                             };
                         };
                     });
                 } else {
                     logDB();
                     h$.resolve();
                 };
             };
         }
         , delHISLOG = function (delOK, hisid, tc3id) {
             if (elUI.hasUA == 'noU') {
                 lo$DB(function (db) {
                     var ts = db.rst.transaction(elUI.dbTBname, "readwrite"),
                         hisStore = ts.objectStore(elUI.dbTBname[0]),
                                 tcStore = ts.objectStore(elUI.dbTBname[1]);
                     //
                     ts.oncomplete = function () {
                         db.rst.close();
                         var idoc = divaddto.dogIFRM.contentWindow,
                             chnel = idoc.chanelLog;
                         //
                         uptHisCHN(chnel, -1 * parseInt(hisid));
                         //
                         delOK();
                         //
                     };
                     hisStore.delete(hisid);
                     tcStore.delete(tc3id);
                 });
             } else {
                 delOK(function (delIDX, dbLOG) {
                     //delete manual vi ko trigger duoc list
                     var newSEL = {}; newSEL[delIDX] = true;
                     hisLOG(dbLOG, elUI.dbTBname, { issel: true }, newSEL);
                 });
             };
         }
         , step2_attlog
         , newS2_attlog = function (loadCB) {
             _gsC(srcpf$ + '/media/js/tikestep_s2.js' + '?' + new Date().getTime(), 'js', function () {//srcpf$ + '/media/js/tikestep_s3.js' 
                 //
                 loadCB();
                 //
             }, 'tikestep_s2.js');

         }
        , uiDEV = function (ds) {
            if (elUI['rst_attlog']) {
                elUI['rst_attlog'].option({ 'dataSource': ds[0], paging: { pageIndex: 0 } });
            };
            if (elUI['log_fromto_popover']) {
                elUI['log_from'].option('value', ds[1]);
                elUI['log_to'].option('value', ds[2]);
            };
        }

         , btnClickCauseByLogChanged = -1
        , UaLogHis = function () {
            var fuckIE11 = GetIEVersion() == 11 ? "onload='javascript:$(this).closest(&quot;.popover-body&quot;).css(&quot;minWidth&quot;,&quot;300px&quot;)'" : '',
            hasLOGHIS = frmEL.find('.dropzonecmd hr');
            hasLOGHIS.popover({
                container: frmEL.find('#step-2'),
                placement: 'top', trigger: "manual",
                html: true,
                title: "<i class='fa fa-history'/> Thong Bao" + cTIP,
                //content: LAN.js_004_14[3]
                content: '<div class="media"><div class="mr-3"><i class="fa fa-bullhorn" style="font-size:40pt"></i></div><div class="media-body"><p>Cong viec lan truoc con dang do, ban muon tiep tuc hay bat dau moi?.</p></div></div>' +
                    '<div class="confirmation-buttons text-center"><div class="btn-group"><div class="btn btn-secondary" ><i class="ti-close"></i> Dong</div><div class="btn btn-success"><i class="ti-check"></i> Tiep Tuc</div></div></div>',
            }).on('hidden.bs.popover', function () {
                hasLOGHIS.$overbg.remove();
            });
            hasLOGHIS.$overbg = $('<div class="hasHISbg"/>').appendTo(hasLOGHIS.closest('.dropzonecmd'));
            hasLOGHIS.popover('show');
        }
        , divaddto = frmEL.find('.uploadattlog')
        , resetUPLOAD = function (log, btnLOGDB, preventRE, rmvREM) {
            divaddto.find('.hislog-list').remove();
            var isLIST = lstOR_ifrmHISLOG(log);
            displayHISLOG(log, btnLOGDB, function () {
                //
                if (!isLIST) {
                    if (elUI['fileinfo']) {
                        divaddto.dogIFRM.contentWindow.showUpLog(elUI['fileinfo'].file, btnDELHISFILE);
                    } else {
                        divaddto.dogIFRM.contentWindow.dropzone.removeAllFiles();
                    };
                };
                //
            });
            //
            if (rmvREM) TiCo_Callback(3);
            //
            if (elUI.puSAVELOG) elUI.puSAVELOG.parent().css('display', 'none');
            //
            sampleBTN('');
            //
            if (!preventRE) return verifyLOG(null, elUI['fileinfo']);//need Set config
            //
        }
        , lstHisLog = function (log) {
            var tb = $('<table style="display:none" class="table hislog-list table-fixed"><thead></thead><tbody style="height: 125px;"></tbody></table>'),
                the = tb.find('thead'),
                tbo,
                deferredFocused = null,
                fnCB = null,
                focusUI_DAT = function (idx, newSEL) {
                    //
                    if (unlockedHWND == -1) srclocked(true);
                    //
                    idx = parseInt(idx);
                    //
                    var refreshGRID = function (srcDAT, logH) {
                        //
                        var ds = verifyLOG(null, logH),
                            h$ = $.Deferred(),
                            d$ = $.Deferred();

                        $.when(h$, d$).then(function (h, log) {
                            srclocked(false);
                        });

                        if (fnCB && typeof fnCB === "function") {
                            fnCB(srcDAT, d$);
                        } else {
                            d$.resolve('fnCB NULL');
                        };
                        //
                        //
                        if (elUI['rst_attlog']) {
                            elUI['rst_attlog'].clearFilter();
                            elUI.ReadyEMP = function (e) {
                                h$.resolve('UI');
                            };
                            uiDEV(ds);
                        } else {
                            h$.resolve('UI');
                        };
                    };
                    //
                    if (!elUI.logDAT[idx]) {
                        //
                        var dbLOG = $.Deferred();
                        $.when(dbLOG).then(function (log) {
                            //
                            displayHISLOG(log, false, function () { refreshGRID("DB", log[0][0]); });
                            //
                        });
                        //
                        hisLOG(dbLOG, elUI.dbTBname, { id: idx }, newSEL);
                        //
                    } else {
                        displayHISLOG([[elUI.logDAT[idx][0]], elUI.logDAT[idx][1]], false, function () { refreshGRID("CACHE", elUI.logDAT[idx][0]); });
                    };
                },
                doFocused = function (e, $this) {
                    //
                    var sel = tbo.find('tr.selected'), idx = $this.getAttribute('idx');
                    //
                    if (sel.length == 0 || sel.attr('idx') != idx) {
                        tbo.find('tr').removeClass('selected');
                        $($this).addClass('selected');
                        //
                        if (!deferredFocused) {// do data with this focus here!
                            if (unlockedHWND == -1) srclocked(true);
                            setTimeout(function () {
                                focusUI_DAT(idx);
                            }, 20);
                        };
                    };
                    return (sel.length == 0) ? null : sel;
                },
                doRMV = function (e, $trr, clickArgs) {
                    if (!LAN) LAN = stepcodeback('lan');
                    var isALL = e.target.tagName.toLowerCase() == 'th'
                        , isDone = null
                        , puhwnd = admin$.popup({ a: 'd', t: clickArgs && clickArgs.dlgTXT.title || LAN.js_004_16[0], m: clickArgs && clickArgs.dlgTXT.txt || LAN.js_004_16[isALL ? 4 : 3] }), btndone = puhwnd.find('#popupdone')
                        , btndonefn = function (state) {
                            btndone[(state ? 'add' : 'remove') + 'Class']('btn-primary').prop('disabled', !state);
                        };
                    btndone.html(LAN['js_004_3']); btndone.removeClass('btn-secondary').addClass('btn-danger');
                    btndone.click(function () {
                        //
                        isDone = $trr.attr('idx');
                        doneRMV(e, $trr, puhwnd, clickArgs && clickArgs.fnCB);
                        //
                    });
                    btndonefn(true);
                    //
                    if (clickArgs && clickArgs.fnM && typeof clickArgs.fnM === "function") clickArgs.fnM(puhwnd);
                    //
                    puhwnd.modal('show'); srclocked(false);
                    puhwnd.one('hide.bs.modal', function (e) {
                        if (deferredFocused) {//click remove all se khong co deferred nay !!!
                            srclocked(true);
                            deferredFocused.resolve(isDone);
                        };
                        if (!isDone && clickArgs && clickArgs.fnCB) clickArgs.fnCB(isDone);
                    });
                },
                doneRMV = function (e, $trr, puhwnd, doneEND) {
                    //
                    if (e.target.tagName.toLowerCase() == 'th') {
                        if (unlockedHWND == -1) srclocked(true);
                        //
                        if (puhwnd) {
                            puhwnd.off('hide.bs.modal');
                            puhwnd.modal('hide');
                        };
                        //
                        var newSEL = {};
                        tbo.find('tr:not(.row-sum)').each(function (i, n) {
                            newSEL[parseInt(n.getAttribute('idx'))] = false;
                        });
                        //
                        var dbLOG = $.Deferred();
                        $.when(dbLOG).then(function (log) {
                            cleanHIS(log, false);
                            if (doneEND && typeof doneEND === "function") doneEND(1);
                            srclocked(false);
                        });
                        hisLOG(dbLOG, elUI.dbTBname, { id: -1, issel: true }, newSEL);
                        //
                    } else {
                        $trr.animate({ height: 10 }, 200, function (e) {
                            $trr.remove();
                            if (doneEND && typeof doneEND === "function") doneEND(1);
                            if (puhwnd) puhwnd.modal('hide');
                        });
                    };
                };

            the.html("<tr style='font-size:11px'><th class='col-1 center ti-eraser bntrmv'></th><th class='col-5'>" + LAN.js_004_15[2] + "</th><th class='col-2 center'>Size (Kb)</th><th class='col-2 center'>" + LAN.js_004_32 + "</th><th class='col-2 center'>" + LAN.js_004_33 + "</th></tr>");
            var sumL = 0, sumE = 0, sumSz = 0;
            for (var i = log[0].length - 1; i > -1 ; i--) {
                //
                var sz = Math.floor(log[0][i].file.size / 1000), selR = false;
                sumL += log[0][i].conf.l; sumE += log[0][i].conf.e; sumSz += sz;
                //
                if (log[1]) {
                    selR = log[1].logid == log[0][i].id;
                } else if (i == log[0].length - 1) {
                    selR = true;
                };
                //
                tbo += "<tr idx='" + log[0][i].id + "' " + (selR ? "class='selected'" : '') + "><td class='col-1 ti-close bntrmv center'></td>" +
                    "<td class='col-5'>" + log[0][i].file.name + "</td><td class='col-2 text-right'>" + sz +
                    "</td><td class='col-2 text-right'>" + log[0][i].conf.l +
                    "</td><td class='col-2 text-right'>" + log[0][i].conf.e + "</td></tr>";
                //
            };
            //
            tbo += "<tr class='row-sum'><td class='col-6 text-right'>" + LAN.js_004_15[4] + "</td><td class='col-2 text-right'>" + sumSz + "</td><td class='col-2 text-right'>" + sumL + "</td><td class='col-2 text-right'>" + sumE + "</td></tr>";
            //
            tb.on('click', '.bntrmv', function (e, clickArgs) {
                e.stopPropagation(); e.preventDefault();
                //
                if (preventLISTevt) {
                    elUI['saveLOCKED_popover'].popover('show');
                    return;
                };
                //
                if (unlockedHWND == -1) srclocked(true);
                //
                var $e = e, $this = $(this).parent();
                if (clickArgs && !clickArgs.u4) {// clickArgs is integer of delete id
                    doneRMV(e, $this, null, function () {
                        deferredFocused.resolve(clickArgs);//-1 not update because it deleted from db
                    });
                } else {
                    setTimeout(function () {
                        doRMV($e, $this, clickArgs);
                    }, 20);
                };
                //
            });
            tbo = tb.find('tbody').html(tbo);
            tbo.on('click', 'tr:not(.row-sum)', function (e) {
                //
                if (preventLISTevt) {
                    e.stopPropagation(); e.preventDefault();
                    elUI['saveLOCKED_popover'].popover('show');
                    return;
                }
                //
                var $this = $(this),
                    clickRMV = $(e.target).hasClass('bntrmv'),
                    idxSEL_onVIEW,
                    sel,
                    trfocus;
                //
                if (clickRMV) {
                    //
                    deferredFocused = new $.Deferred();
                    //
                    $.when(deferredFocused).then(function (delIDX) {
                        //
                        deferredFocused = null;
                        //
                        if (!delIDX) {
                            if (!sel || sel.attr('idx') != $this.attr('idx')) {
                                focusUI_DAT($this.attr('idx'))
                            } else {
                                srclocked(false);
                            };
                        } else {//nue done, row nhung truoc luc click xoa , va sau khi xoa xong cung idx
                            //
                            var newSEL = {}, listTR,
                                OnlyUPT_SEL = function (lockDeferred) {
                                    if (delIDX != '-1') {
                                        var dbLOG = $.Deferred(), idx = parseInt(parseInt(idxSEL_onVIEW));
                                        $.when(dbLOG).then(function (log) {
                                            //
                                            if (listTR) listTR.contentWindow.showUpLog(elUI['fileinfo'].file, btnDELHISFILE);
                                            //
                                            if (!lockDeferred) {
                                                srclocked(false);
                                            } else {
                                                lockDeferred.resolve('srclocked(false)');
                                            };
                                            //
                                        });
                                        hisLOG(dbLOG, elUI.dbTBname, { id: (elUI.hasUA == 'noU') ? -1 : parseInt(trfocus.attr('idx')), issel: true }, newSEL);
                                        //} else {//=-1 nghia la row bi delete ben man hinh chon log
                                        //    if (unlocked) srclocked(false);
                                    };
                                };
                            //
                            newSEL[parseInt(delIDX)] = false;
                            //
                            if (idxSEL_onVIEW != trfocus.attr('idx')) {
                                fnCB = function (srcDAT, lockDeferred) {
                                    fnCB = null;//reset
                                    //
                                    if (srcDAT == 'CACHE') {
                                        OnlyUPT_SEL(lockDeferred);
                                    } else {
                                        if (listTR) listTR.contentWindow.showUpLog(elUI['fileinfo'].file, btnDELHISFILE);
                                        lockDeferred.resolve('fnCB_DB');
                                    };
                                };
                                focusUI_DAT(trfocus.attr('idx'), newSEL);
                            } else {
                                //1. dang focus o dong tren
                                //2. click xoa dong duoi
                                //3. khi xoa xong thi focus nhay len dong 1.
                                //=> idx phai la dong 2.
                                OnlyUPT_SEL(); //true
                            };
                            //
                            listTR = tbo.find('tr:not(.row-sum)');
                            if (listTR.length <= 1) {
                                //
                                divaddto.lstORfrm = null;
                                var ifrm = divaddto.dogIFRM;
                                listTR = ifrm;
                                //
                                tb.fadeOut('fast', function () {
                                    tb.remove();
                                    //
                                    $(ifrm).css({ 'display': 'none', 'opacity': '1' }).fadeIn();//.css('opacity', 1);
                                });
                                //
                            } else {
                                var sumL = 0, sumE = 0, sumSz = 0;
                                for (var i = 0; i < listTR.length; i++) {
                                    var td = $(listTR[i]).find('td');
                                    sumSz += parseInt(apisvr.a$.trim($(td[2]).text()));
                                    sumL += parseInt(apisvr.a$.trim($(td[3]).text()));
                                    sumE += parseInt(apisvr.a$.trim($(td[4]).text()));
                                };
                                listTR = tbo.find('tr.row-sum td');
                                listTR[1].innerHTML = sumSz;
                                listTR[2].innerHTML = sumL;
                                listTR[3].innerHTML = sumE;
                                //
                                listTR = null;
                                trfocus.addClass('selected');
                            };
                            //
                        };
                    });
                };
                //
                sel = doFocused(e, this);//van cho do focus // neu la click vao nut xoa thi se resolve
                //
                if (clickRMV) {
                    idxSEL_onVIEW = (!sel ? 0 : sel.attr('idx'));
                    trfocus = $this.next('tr:not(.row-sum)');
                    //
                    if (trfocus.length == 0) trfocus = $(this).prev('tr');
                    //
                };
            });
            //
            divaddto.append(tb);//.find('iframe').css('opacity', '0');
            tb.fadeIn();
        }
        , lstOR_ifrmHISLOG = function (log) {
            var chkLIST = function () {
                return $.grep(log[0], function (n, i) {
                    return n.issel;
                }).length > 1;
            },
                isLIST = log && chkLIST(),
                hislog = divaddto.find('.hislog-list'),
                ifrm = divaddto.find('iframe');
            //
            if (isLIST) {
                lstHisLog(log);
                divaddto.lstORfrm = log;
                if (ifrm.length > 0) ifrm.fadeOut('fast', function () { ifrm.css({ 'display': '', 'opacity': '0' }); });
            } else {
                divaddto.lstORfrm = null;
                if (hislog.length > 0) hislog.fadeOut('fast', function () { hislog.remove(); });
                if (ifrm.length > 0) ifrm.css({ 'display': 'none', 'opacity': '1' }).fadeIn();//.css('opacity', 1);
            };
            return isLIST;
        }
        , displayHISLOG = function (log, btnLOGDB, cbUSE) {
            //
            var btnDEL = 'none';
            if (log && log[1]) {
                //
                elUI['showinvisibles'].val(log[1].dat);
                //
                var atHIS;
                for (var i = log[0].length - 1; i > -1; i--) {
                    if (log[0][i].id == log[1].logid) {
                        atHIS = log[0][i];
                    };
                };
                //
                atHIS.tc3id = log[1].id;
                //
                if (!elUI.logDAT[atHIS.id]) {
                    elUI.logDAT[atHIS.id] = [atHIS, log[1]];
                };
                //
                elUI['fileinfo'] = atHIS; // bug tai day !!!1
                //
                btnDEL = '';
            };
            //
            btnDELHISFILE([btnDEL, 'none']);
            //
            if (cbUSE && typeof cbUSE === "function") {
                cbUSE();
            };
            //
            if (btnLOGDB) btnLogFromDB(log, 0);
            //
        }
        , viewLOG = function (isUpload) {
            if (Main.isMobile()) {
                if (step2_attlog && elUI['showlistLOG'] == 1) {
                    step2_attlog.upload_attlog();
                } else {
                    verifyLOG();
                    if (isUpload) {
                        btnSAVELOG();
                        srclocked(false);
                    };
                }
            } else {
                newS2_attlog(function () {
                    if (!step2_attlog) step2_attlog = new FormWizard.s2log.init(frmEL, stepcodeback, elUI, shareMe);
                    step2_attlog.upload_attlog();
                });
            };
        }
        , ifrmUPLOG = function (ifrmLOAD) {
            var session = elUI.s2_session,
            url_domain = function (data) {
                var a = document.createElement('a');
                a.href = data;
                return a.pathname;
            },
            hostdata = (apisvr.a$.mainHolePath != '/') ? url_domain(window.location.protocol + "//" + apisvr.a$.mainHolePath) : '';
            if (divaddto.find('iframe').length == 0) {
                var wting = helloguy.clone(), ifrm, datcnt = 0, dathwnd, datfn = function (cnt) {
                    //clearTimeout(dathwnd);
                    divaddto.find('iframe').remove();
                    ifrm = document.createElement('iframe');
                    ifrm.style.opacity = 1;
                    ifrm.style.display = "none";
                    ifrm.style.width = "100%";
                    ifrm.style.height = "300px";
                    ifrm.setAttribute("scrolling", "no"); ifrm.setAttribute("frameBorder", "0");
                    ifrm.src = hostdata + '/chamcong/iframeattlog.' + stepcodeback('___').comm1.uplog + '#' + window[st0('1')](session + '|' + apisvr.a$.mainHolePath + '|' + window.location.origin + '|' + GetIEVersion() + '|' + $("#app").hasClass('darkcolor'));
                    //
                    //
                    ifrm.onload = function () {
                        ifrm.contentWindow.lan(LAN.js_004_12);
                        divaddto.dogIFRM = ifrm;
                    };
                    //
                    ////sau khi iframe upload log load ok ...
                    //$.when(ifrmUP, dbLOG).then(function (v1, log) {
                    //    clearTimeout(errHwnd); errHwnd = -1;

                    //});
                    ////
                    ////
                    //hisLOG(dbLOG, elUI.dbTBname);
                    //
                    //bat ke ket qua ra sao cũng append frame
                    divaddto[0].appendChild(ifrm);
                    //
                    //
                    //var te = ifrm.contentWindow.document;
                    //te.open();
                    //te.write('<form method="post" name="demoForm" action="' + hostdata +  '/chamcong/uploadattlog.php" id="demoForm"><input type="hidden" name="duty" id="duty" value="' +
                    //    window[st0('1')](session + '|' + apisvr.a$.mainHolePath + '|' + window.location.origin + '|' + datcnt) +
                    //    '"/><input type="submit" id="submitBtn" style="position:absolute;left:-1000px;"/></form>');
                    //te.close();
                    //te.getElementById('submitBtn').click();
                    //if (datcnt == 0) dathwnd = setTimeout(datfn, 10000);
                    //
                    //console.log('datcnt: ' + datcnt);
                    //datcnt += 1;
                }
                //, ifrmUP = $.Deferred(), dbLOG = $.Deferred(), errHwnd = -1;
                //
                wting.css({ 'display': '', 'position': 'absolute', 'height': '200px' }).removeAttr('id'); divaddto.append(wting);
                //
                //debugger;bi loi khi load lan 2
                //frmWizHwnd._session = session;
                //
                apisvr.a$.sessions[session] = {
                    hwndTO: null,
                    id: session,
                    fn: function (a, b, c) {

                        var that = this;
                        if (a == 'postmsg') {
                            //debugger;
                            var frm = divaddto.find("#ifrm_" + b)[0].contentWindow;// $("#ifrm_" + b)[0].contentWindow;
                            frm.focus();
                            frm.postMessage({ 'msgtype': 'session', 'msgkind': b, 'evtData': { a$: 'olshift' } }, '*');
                        } else if (a == 'job') {
                            if (b.evtData.evt == 'loaded') {
                                //
                                clearTimeout(dathwnd);
                                //
                                this.origin = b.evtData.origin;
                                //that.extmp = b.evtData.extmp;
                                //
                                //ifrmUP.resolve('onload');
                                //errHwnd = setTimeout(function () {
                                //    if (errHwnd != -1) dbLOG.resolve();//phong khi load db error
                                //}, 1000);
                                //
                                //
                                ifrmLOAD.resolve([ifrm, function () {
                                    wting.remove();
                                }]);
                                //
                            } else if (b.evtData.evt == 'attlog') {
                                //
                                if (elUI['fileinfo']) {
                                    divaddto.currHISID = $.extend({}, elUI['fileinfo']);
                                } else {
                                    if (elUI.stepHis.remLOG != 0) {
                                        divaddto.currHISID = { isREM: elUI['showinvisibles'].val(), conf: logCONF() };
                                    } else {
                                        divaddto.currHISID = null;
                                    };
                                };
                                //
                                elUI['showinvisibles'].val(b.evtData.dat);
                                elUI['fileinfo'] = { file: b.evtData.file, issave: 0, issel: true, uptime: new Date() };
                                //
                                ifrm.style.opacity = 1;
                                divaddto.find('.table.hislog-list').remove();//remove select history log list
                                //
                                viewLOG(true);
                                //
                                elUI.trapHwnd = btnSAVELOG
                                //
                            } else if (typeof that[b.evtData.evt] === 'function') {

                                that[b.evtData.evt](a, b, c);

                            } else {
                                //var x = $("<div/>").html(b.evtData[b.evtData.evt]).text(), y = x.replace(b.evtData.evt, 'apisvr.a$[st0(3)]=');
                                //var elemDiv = document.createElement('div');
                                //elemDiv.innerHTML = y.split('$$$this').join('apisvr.a$.sessions[' + session + ']');
                                //for (var i = elemDiv.children.length - 1; i > -1 ; i--) {
                                //    var child = elemDiv.children[i];
                                //    switch (child.tagName.toLowerCase()) {
                                //        case 'style': {
                                //            break;
                                //        }
                                //        case 'script': {
                                //            apisvr.a$.scod(child);
                                //            break;
                                //        }
                                //    };
                                //};
                            };
                        };
                    }
                };
                datfn();
                //$('#selAttlog').attr('onclick', 'apisvr.a$.sessions["' + session + '"].fn("postmsg","' + session + '",this)');
                //divaddto.html("<iframe id='ifrm_" + session + "' src='" + hostdata + divaddto.attr('data-hostdata') +  "' scrolling='no' width=100% height='250px' frameBorder='0'></iframe></div>");
            };
        }
        , cleanHIS = function (log, btnLOGDB) {
            delete elUI.fileinfo;
            elUI['showinvisibles'].val('');
            var ds = resetUPLOAD(log, btnLOGDB, undefined, false);
            uiDEV(ds);
            return ds;
        }
        , TiCo_Callback = function (evt, args) {
            //
            var remTB = 'remLOG', remK = 'cmVtX2F0dGxvZw==',
                remId = (elUI.hasUA == 'noU' ? 1 : 2), rem$DB = function (de$) {
                    lo$DB(function (db) {
                        if (db.kq == 0) {//create new
                            //
                            var D$b = db.e.target.result;//var Db = e.target.result;
                            //
                            if (D$b.objectStoreNames.contains(remTB)) D$b.deleteObjectStore(remTB);
                            D$b.createObjectStore(remTB, { keyPath: "id" });
                            //
                        } else if (db.kq == 1) { //ok
                            var req, ts = db.rst.transaction([remTB], (evt == 0) ? "readonly" : "readwrite"),
                                remStore = ts.objectStore(remTB);

                            if (evt == 1) {//check & load

                                req = remStore.get(remId);

                            } else if (evt == 2) { //check & save
                                req = remStore.put({ id: remId, conf: logCONF(), log: elUI['showinvisibles'].val() });
                            };

                            req.onsuccess = function (e) {
                                if (evt == 2) {
                                    de$(e.target.result);
                                } else {
                                    if (de$) de$.resolve(e.target.result);
                                };
                            };
                        }
                    }, 'hellohrm_remlog');
                };

            if (evt == 0) {//check
                //
                var _rem = st('getItem', remK);//rem_attlog
                return _rem && _rem.split(remId).length > 1;
                //
            } else if (evt == 1) {//load
                //
                rem$DB(args);
                //
            } else if (evt == 2) { //check & save
                if (elUI.stepHis.remLOG == 1) {//'raiseREM'
                    var _rem = st('getItem', remK);//rem_attlog
                    if (_rem) {
                        _rem = JSON.parse(_rem);
                        if (_rem.indexOf(remId) == -1) _rem.push(remId);
                    } else {
                        _rem = [remId];
                    };
                    //
                    rem$DB(function () {
                        st('setItem', remK, JSON.stringify(_rem));//cmVtX2F0dGxvZw== rem_attlog
                        elUI.stepHis.remLOG = 2;//'loadREM'
                    });
                    //
                    if (elUI.saveLOCKED_popover) elUI.saveLOCKED_popover.css('display', 'none');
                    //
                };
            } else if (evt == 3) { //remove
                //
                if (elUI.stepHis.remLOG != 0) {//'loadREM'
                    var _rem = st('getItem', remK);//rem_attlog
                    if (_rem) {
                        _rem = JSON.parse(_rem);
                        _rem = $.grep(_rem, function (v) { return v != remId; });
                        st((_rem.length > 0 ? 'set' : 'remove') + 'Item', remK, JSON.stringify(_rem));//cmVtX2F0dGxvZw== rem_attlog
                    };
                };
                //
                elUI.stepHis.remLOG = 0;//noREM
                //
            };
        }
        , loadREM = function (waitREM) {
            var rem$Df = $.Deferred();
            $.when(rem$Df).then(function (rem) {
                elUI['showinvisibles'].val(rem.log);
                verifyLOG(null, { conf: rem.conf });
                //
                elUI.stepHis.remLOG = 2;// 'loadREM';
                waitREM.resolve();
            });
            TiCo_Callback(1, rem$Df);
        }
        , sampleBTN = function (val) {
            frmEL.find('.selAttlog .samplefile').css('display', val);
        }
        , sampleLOG = function () {
            var puhwnd = admin$.popup({ a: 'f' })
                , logsample = function (templ) {
                    //
                    templ.find('.btn').on('click', function (e) {
                        //
                        var lid=$(this).attr('dn');
                        srclocked(true);
                        //
                        setTimeout(function () { getLOG(lid); }, 10);
                    });
                    //
                    puhwnd.find('.modal-body').append(templ);
                    //
                    setTimeout(function () {
                        puhwnd.one('shown.bs.modal', function () {

                        }).modal('show');
                    }, 1);
                    //
                    srclocked(false);
                }
                , getLOG = function (lid) {
                    //
                    var _conf = JSON.parse(samConf[lid]);
                    //
                    $.get(srcp$f + '/media/utils/' + _conf.p + src$id).done(function (dat) {
                        //
                        var clickArg = {
                            u4: 'clean4download',
                            dlgTXT: { title: LAN.__exLAN.dlg[0], txt: LAN.__exLAN.dlg[1] },
                            fnM: function (me) {
                                //lam cho dialog lon hon chut
                                me.find('.modal-dialog').removeClass('modal-sm').addClass('modal-md');
                            },
                            fnCB: function (rst) {
                                if (rst == 1) {
                                    puhwnd.modal('hide');
                                    setConF(null, { conf: _conf });
                                    //
                                    elUI['showinvisibles'].val(dat);
                                    viewLOG(false);
                                    //
                                    elUI['showinvisibles'].trigger('change',['samlog']);
                                    //
                                } else {
                                    puhwnd.css('opacity', 1);
                                };
                            }
                        };
                        //
                        if (divaddto.lstORfrm) {
                            puhwnd.css('opacity', 0);
                            divaddto.find('th.bntrmv').trigger('click', [clickArg]);
                        } else if (elUI.fileinfo) {
                            puhwnd.css('opacity', 0);
                            divaddto.rmvHisAttlog.trigger('click', [clickArg]);
                        } else {
                            clickArg.fnCB(1);
                        };
                    }).fail(function (e) {
                        srclocked(false);
                    });
                }
            , samConf;
            //
            if (!elUI['logsample_templ']) {

                $.get(srcp$f + '/media/utils/lst.htm' + src$id).done(function (templ) {
                    //
                    var t$b = $(templ).find('.pricing-table-log'),
                        _lng = apisvr.a$.selected_language,
                        _ln = divaddto.dogIFRM.contentWindow,
                        sct = t$b.find('script')
                        , stxt = sct[0].innerHTML;
                    //
                    sct.remove();
                    elUI['logsample_templ'] = t$b
                    //
                    _ln.__doHandshake = function () {
                        _ln.__doHandshake = null;
                        //
                        LAN.__exLAN = $.extend({} || LAN.__exLAN, _ln.__logSAM.exLAN()[_lng]);
                        samConf = _ln.__logSAM.conf();
                        _ln = _ln.__logSAM.ln();
                        //
                        if (_lng != 'en') {//default enlish
                            elUI['logsample_templ'].find('[data-lang]').each(function (idx, el) {
                                var key = el.getAttribute('data-lang');
                                $(el).html(_ln[_lng][key]);
                            });
                        };
                    };
                    _ln.loadjscssfile(stxt, "jst");
                    //
                    logsample(elUI['logsample_templ']);
                    //
                }).fail(function (e) {
                    srclocked(false);
                });

            } else {
                //
                logsample(elUI['logsample_templ']);
                samConf = divaddto.dogIFRM.contentWindow.__logSAM.conf();
                //
            };
            //
            puhwnd.find('#popupdone').remove();
            puhwnd.find('.modal-footer').css('justify-content', 'center').find('button').removeClass('btn-secondary').addClass('btn-danger');
            puhwnd.addClass('modal-aside vertical top');
        };
         //
         //
         this.doStep = function (a, b, clickStepCircle, _$n) {
             //
             hidePOVER();


             //if (b.toStep.toString() != '2' && elUI[_$n[0]]) {
             //    elUI[_$n[0]].popover('hide');
             //    //elUI[_$n[0]].showBack = true;
             //};

             //if (b.toStep.toString() != '2' && elUI[_$n[2]] && elUI[_$n[2]].data('bs.popover').element.showBack === true) {
             //    elUI[_$n[2]].popover('hide');
             //    //elUI[_$n[2]].showBack = true;
             //};

             //if (b.toStep.toString() != '2' && elUI['selEMP_popover'] && elUI['selEMP_popover'].data('bs.popover').element.showBack === true) {
             //    elUI['selEMP_popover'].popover('hide');
             //};

             if (b.fromStep.toString() == '2') {
                 if (elUI.selEMP_popover) elUI.selEMP_popover.popover('hide'); //delete elUI.selEMP_popover;
                 if (elUI.log_fromto_popover) elUI.log_fromto_popover.popover('hide'); // ko dispose vi con dinh den From date, To date!!!
             };

             if (b.toStep.toString() == '2') {
                 //
                 if (!elUI[_$n[0]]) {
                     //
                     elUI[_$n[0]] = frmEL.find('.testupload .needuptclick');
                     elUI[_$n[0]]
                     
                     //
                     //
                     //UaLogHis();
                     //

                     //////elUI[_$n[0]].showBack = false;
                     //////elUI[_$n[0]].popover({
                     //////    html: true, trigger: "manual",
                     //////    template: '<div class="popover alertlogchanged"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div>'//'<div class="popover alertlogchanged"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div><div class="popover-footer"><a href="#" class="btn btn-info btn-sm">Close</a></div></div>'
                     //////}).on('hidden.bs.popover', function () {
                     //////    elUI[_$n[0]].showBack = false;
                     //////});

                     //elUI[_$n[0]].popover().on('inserted.bs.popover', function (e) {
                     //    //debugger;
                     //    $('#' + $(this).attr('aria-describedby')).addClass('alertlogchanged');
                     //    //$('.popover').css('color', '#393939');
                     //});

                     elUI[_$n[0]].parent().on('click', function () {

                         srclocked(true);
                         hidePOVER();
                         //
                         admin$.DEV(function () {

                             newS2_attlog(function () {
                                 if (!step2_attlog) step2_attlog = new FormWizard.s2log.init(frmEL, stepcodeback, elUI, shareMe);
                                 elUI.ReadyEMP = function (e) {
                                     elUI.ReadyEMP = null;
                                     elUI['showlistLOG'] = 1;
                                     srclocked(false);
                                 };
                                 step2_attlog.grid_attlog();
                             });

                             srclocked(false);
                         });

                     });

                 } else if (elUI[_$n[0]].showBack) {
                     //debugger;
                     elUI[_$n[0]].popover('show');
                 };

                 //if (elUI[_$n[2]] && elUI[_$n[2]].data('bs.popover').element.showBack === true) {
                 //    elUI[_$n[2]].popover('show');
                 //};
                 //if (elUI['selEMP_popover'] && elUI['selEMP_popover'].data('bs.popover').element.showBack === true) {
                 //    elUI['selEMP_popover'].popover('show');
                 //};

                 if (!elUI[_$n[1]]) {
                     //
                     //
                     var dbLOG = $.Deferred(),
                         ifrmLOAD = $.Deferred(),
                         waitdisHISLOG = $.Deferred(),
                         waitREM = $.Deferred(),
                         lodOps = { issel: true };

                     if (TiCo_Callback(0)) {
                         //
                         lodOps.id = -1;//chan his log load noUI
                         delete lodOps.issel;//chan his log load UI
                         //
                         loadREM(waitREM);
                         //
                         //var rem$Df = $.Deferred();
                         //$.when(rem$Df).then(function (rem) {
                         //    elUI['showinvisibles'].val(rem.log);
                         //    verifyLOG(null,{conf:rem.conf});
                         //    //
                         //    waitREM.resolve();
                         //    elUI.stepHis.remLOG = 2;// 'loadREM';
                         //});
                         //TiCo_Callback(1, rem$Df);
                     } else {
                         waitREM.resolve();
                     };
                     //
                     //
                     //
                     //sau khi iframe upload log load ok ...
                     if (elUI.hasUA == 'noU') {
                         $.when(dbLOG).then(function (log) {
                             var isLIST = lstOR_ifrmHISLOG(log);
                             displayHISLOG(log, true, function () {
                                 waitdisHISLOG.resolve([isLIST, log]);
                             });
                         });
                         //
                         $.when(ifrmLOAD, waitdisHISLOG, waitREM).then(function (ifrm, isLIST_LOG) {
                             var isLIST = isLIST_LOG[0], log = isLIST_LOG[1];
                             if (!isLIST && elUI['fileinfo']) ifrm[0].contentWindow.showUpLog(elUI['fileinfo'].file, btnDELHISFILE);
                             if (log) verifyLOG(null, elUI['fileinfo']);
                             ifrm[0].contentWindow.chanelLog = [, { log: !log ? [[], undefined, 0] : log }];
                             ifrm[1]();//unlock screen;
                         });
                         //
                         hisLOG(dbLOG, elUI.dbTBname, lodOps);
                         //
                     } else {
                         $.when(ifrmLOAD).then(function (ifrm) {
                             var alog = stepcodeback('alog'), file;
                             if (alog.key) {
                                 //
                                 var log = [$.grep(alog.log[0], function (n, i) { return n.issel === lodOps.issel }), null, alog.log[2]]
                                     , isLIST = lstOR_ifrmHISLOG(log)
                                     , idoc = ifrm[0].contentWindow;

                                 if (log[0].length > 0) {
                                     idoc.cbHwnd = function (e) {
                                         idoc.cbHwnd = null;
                                         log[1] = e;
                                         //
                                         displayHISLOG(log, true, function () {
                                             if (!isLIST && elUI['fileinfo']) ifrm[0].contentWindow.showUpLog(elUI['fileinfo'].file, btnDELHISFILE);
                                             verifyLOG(null, elUI['fileinfo']);
                                             ifrm[1]();//unlock screen;
                                         });
                                     };
                                     //
                                     //LOG_LOAD
                                     stepcodeback('___').comm1.loghole(idoc, alog, '4c4f475f4c4f4144', { logh: btoa(JSON.stringify(['L', log[0][log[0].length - 1]['id']])), logkind: 1 });
                                     //
                                 } else {
                                     idoc.chanelLog = [, alog];
                                     btnLogFromDB(alog, 0);
                                     ifrm[1]();//unlock screen;
                                 };
                             } else {
                                 lstOR_ifrmHISLOG([[], null, 0]);
                                 ifrm[1]();//unlock screen;
                             };
                         });
                     };
                     //
                     ifrmUPLOG(ifrmLOAD);
                     //
                     //
                     //
                     //
                     elUI[_$n[1]] = frmEL.find("." + _$n[1]);
                     //
                     elUI[_$n[1]].off('change').on('change', function (e,clickArgs) {
                         //
                         if (unlockedHWND == -1) srclocked(true);
                         //
                         var askSAVE = false;
                         if (elUI['fileinfo']) {
                             //
                             askSAVE = elUI['fileinfo'].issave != 0;
                             lockFRM_waitSAVE(askSAVE);
                             //
                             if (elUI['fileinfo'].issave == 1) {// only store at frist change from 1 ->2
                                 elUI['fileinfo'] = $.extend({}, elUI['fileinfo']);//clone it
                                 elUI['fileinfo'].issave = 2;
                             };
                         } else {
                             if (elUI['s3calc'] && elUI.stepHis.remLOG ==2) {// da co tinh qua s3 + load tu memory hoac moi tinh xong
                                 askSAVE = true;
                             };
                             elUI.stepHis.remLOG = 1;// 'raiseREM';
                         };
                         //
                         setTimeout(function () {
                             //
                             if (clickArgs != 'samlog') uiDEV(verifyLOG());//change text active config ko anh huong
                             //
                             if (askSAVE) {//save lai vi da thay doi log tc3
                                 btnSAVELOG();
                                 elUI.stepHis.isTiCo = 1;
                             };
                             //*** neu co trap thi done trap task
                             if (typeof btnClickCauseByLogChanged === "function") {
                                 btnClickCauseByLogChanged();
                             } else {
                                 srclocked(false);
                             };

                         },20);
                         //
                     });
                     //
                     //
                     frmEL.find('.dropzonecmd').on('click', '.selAttlog', function (evt) {
                         if ($(event.target).hasClass('upfile')) {
                             hidePOVER();
                             var ifrm = divaddto.dogIFRM, selAttlog = this;
                             if (ifrm) {
                                 ifrm.contentWindow.clickE();
                             };
                         } else {
                             srclocked(true);
                             setTimeout(sampleLOG, 20);
                         };
                     });
                     frmEL.find('.attlog_verify').off('mousedown touchstart').on('mousedown touchstart', function (e) {
                         //
                         unlockedHWND = 0; // trap lock screen off textarea
                         //
                         //(***) trap textbox change release lock screen,// gia de textbox change ko release screen locked.
                         btnClickCauseByLogChanged = function () {
                             btnClickCauseByLogChanged = -1;
                         };
                         //
                         frmWizHwnd.pStep = function (sHWND) {
                             //
                             frmWizHwnd.pStep=null;//reset
                             //
                             var doNEXT = function (rst) {
                                 //
                                 elUI.lockstep(a, false);
                                 //
                                 if (['0'].indexOf(rst.toString()) == -1) {//0: cancel 
                                     //
                                     sHWND();
                                     //
                                 };//do next step
                                 //
                                 srclocked(false);
                             };

                             //issave = 0 - moi load tu file len, 1 - da luu tru roi, 2 - modify tu trang thai 1
                             if (elUI['fileinfo'] && elUI['fileinfo'].issave != 1) {
                                 //
                                 // setup lai su kien khi nut save hoan tat, de thuc hien next
                                 btnClickCauseByLogChanged = function (RE) {// chi la function, va duoc execute khi text log changed
                                     //
                                     btnClickCauseByLogChanged = -1;
                                     if (RE == -2) {
                                         elUI.stepHis.viewBackS3 = RE;
                                     };
                                     doNEXT(RE);
                                     //
                                 };
                                 //
                                 elUI['puSAVELOG'].trigger('click', [{ 's3': !!elUI['s3calc'] }]);
                                 //
                             } else {
                                 if (elUI.stepHis.remLOG == 1 && elUI['s3calc']) {//da chay s3 && lai thay doi log thi phai hoi
                                     dlgs3(null, null, { 's3': !!elUI['s3calc'] }).show().done(function (RE) {
                                         if (RE == 0) {
                                             elUI.lockstep(a, false);
                                         } else {
                                             if (RE == -2) {
                                                 elUI.stepHis.viewBackS3 = RE;
                                             };
                                             doNEXT(RE == -2 ? 2 : RE);
                                         };
                                     });
                                     srclocked(false);
                                 } else {
                                     doNEXT(1);// cho chay tu nhien
                                 };
                             };
                         };
                         //
                     });
                 };
                 //
             }
             else if (b.toStep.toString() == '3') {
                 //
                 elUI.lockstep(a, true);
                 //
                 _gsC(srcpf$ + '/media/js/tikestep_s3.js' + src$id, 'js', function () {//srcpf$ + '/media/js/tikestep_s3.js'
                     //
                     var s3_viewBack = function () {
                         elUI['s3calc'].viewBack(elUI, frmEL, function () {
                             //
                             elUI.lockstep(a, false);
                             //
                         });
                     };

                     if (clickStepCircle == '0') {
                         //
                         s3_viewBack();
                         //
                     } else if (elUI.stepHis.viewBackS3) {
                         //
                         s3_viewBack();
                         delete elUI.stepHis.viewBackS3;
                         //
                     } else {
                         if (elUI.stepHis.isTiCo == 1) {
                             //
                             if (!elUI.allLOGs) verifyLOG();// ko anh huong config
                             //
                             var TinhCo = function () {
                                 //
                                 if (unlockedHWND != -1) srclocked(false);
                                 //
                                 if (elUI['selEMP_popover'] && elUI['selEMP_popover'].attr('aria-checked') == 'mixed') {
                                     elUI.allLOGs[1] = elUI.rst_attlog.getSelectedRowKeys();
                                 } else {
                                     elUI.allLOGs[1] = null;
                                 };
                                 //
                                 elUI['s3calc'].exec(elUI, frmEL, function () {
                                     TiCo_Callback(2);
                                     elUI.lockstep(a, false);
                                     elUI.stepHis.isTiCo = 0;
                                     //
                                     btnClickCauseByLogChanged = -1; //reset
                                     //
                                 });
                             };
                             //
                             if (!elUI['s3calc']) {
                                 elUI['s3calc'] = FormWizard.s3calc.createCalc({
                                     kind: 'noshift', Args: {
                                         lockStep: function (v) {
                                             elUI.lockstep(a, v);
                                         },
                                         tinhlaiCHK: function (fn) {
                                             if (elUI['fileinfo'] && elUI['fileinfo'].issave != 1) {
                                                 //
                                                 btnClickCauseByLogChanged = function (rst) {// chi la function, va duoc execute khi text log changed
                                                     //
                                                     fn(rst);
                                                     //
                                                 };
                                                 elUI['puSAVELOG'].trigger('click', [{ 'dupmsg': LAN.js_004_15[5]}]);
                                                 //
                                             } else {
                                                 fn(1);
                                             }
                                         }
                                     }
                                 });
                                 //
                                 TinhCo();
                                 //
                             } else {
                                 //
                                 TinhCo();
                                 //
                             };
                             //
                         } else if (elUI.s3calc) {
                             s3_viewBack();
                         } else {
                             elUI.lockstep(a, false);
                         };
                     };
                 }, 'tikestep_s3.js')



             }
         };

     }
     //O.prototype.publicSharedVar = 'quux';
     //O.prototype.publicSharedMethod = function (param) {
     //    // has access to shared and public vars
     //    // canonical way for method creation:
     //    // try to use this as much as possible
     //};

     return O;
})();
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs=e()}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this;if(!this.isValid())return $;var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return n.replace(y,(function(t,e){return e||l[t]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));