    tabglobalJS['JS_JS_payrollonline'] = (function () { // scoping
        "use strict";
        function O(opts) { // constructor
            //
            var _tabId, elUI = {
                hasUA: opts.ua > 1 ? 'UA' : 'noU',
                ReadyEMP: null, s2_session: 's2_' + new Date().getTime(),
                'stepHis': { isTiCo:1,remLOG: 0 },
                dbTBname: ['loghis', 'tc3'],
                s3dbTB: ['s3czNkaWFnX2NvbmY=', 'tc4'],//bo chu s3 ra se bang 's3diag_conf'
                trapHwnd: null,
                logDAT: {},
                lockstep:function(a,val) {
                    //
                    frmWizHwnd.locked(val);
                    //
                    if (val) {
                        a.find('.stepNumber').html('<i class="ti-lock" style="color:red"></i>');
                    } else {
                        a.find('.stepNumber').html(a.attr('rel'));
                    };
                }
                , globHWN: {
                    sliderbar:null
                }
            };
            //
            this.init = function (frmEL, cb, tabId, clickArgs) {
                _tabId = tabId;
                //
                var ___ = this, init_dataDIV = frmEL.find('#init_data'), init_data = JSON.parse(init_dataDIV.text()),
                pretemplate = frmEL.find('pre#template'), preLang = frmEL.find('pre#lang'),
                stepcodeback = function (p) {
                    switch (p) {
                        case '___': return ___; break;
                        case 'lan': return init_data['lang']; break;
                        case 'alog': return init_data['attLOG']; break;
                    };
                };

                init_data['taomoi'] = pretemplate.text(); pretemplate.remove();
                init_dataDIV.remove();
                //
                init_data['lang'] = $.extend(JSON.parse(preLang.text()), aLAN); preLang.remove();
                //
                _gsC(srcpf$ + '/media/js/form-wizard.js', 'js', function () {
                    //
                    //
                    var _cArgs = null, _iniStep = 1;
                    if (clickArgs) {//uu tien clickAgrs
                        _cArgs =JSON.parse(atob(clickArgs.demo));
                        if (!_cArgs.demo) _cArgs.demo = "all";
                        if (_cArgs.s) _iniStep = _cArgs.s;
                    };
                    //
                    frmWizHwnd = new FormWizard(frmEL);
                    frmWizHwnd.init({
                        iniStep: _iniStep,
                        onShowStep: function (a, b, clickStepCircle) {
                            //
                            if (b.fromStep==3|| b.toStep==3) frmEL.trigger('onShowStep', [a, b, clickStepCircle]);//trigger qua media/utils/jsc/s3logedit.js
                            //
                            frmEL.find('.step_focused')[0].innerHTML = apisvr.a$.trim(a.attr('rel') + '. ' + a.find('.stepDesc').text());
                            //
                            var _$n = ['needupt_popover', 'showinvisibles', 'log_fromto_popover', 'tikestep_payrollonline.js'];
                            //
                            if (b.toStep == 1 && !elUI.isStep1) {
                                //
                                elUI.isStep1 = true;
                                elUI.stepHis.isTiCo = true;
                                //
                                _gsC(srcpf$ + '/media/js/tikestep_s1.js' + '?' + new Date().getTime(), 'js', function () {
                                    //
                                    FormWizard.s1Shift.init(opts, frmEL, stepcodeback, tabId, _cArgs, elUI, init_data);
                                    if (cb) cb();
                                    //
                                }, 'tikestep_s1.js');
                                //
                            }else if (b.toStep.toString() == '4') {
                                //$('#wizard').smartWizard("goForward");
                                //var wting = helloguy.clone(), viewTO, previewatt = $('#previewatt'), viewReload = function () {
                                //    clearTimeout(viewTO); wting.css('display', '');
                                //    previewatt.parent().append(wting);
                                //    previewatt.css('opacity', 0);

                                //    previewatt.one("load", function () {
                                //        clearTimeout(viewTO);
                                //        wting.remove();
                                //        previewatt.css('opacity', 1);
                                //    }).attr('src', 'https://docs.google.com/gview?url=' + FormWizard.prefixF.host + '/05featuredemo' + FormWizard.prefixF.prefixfile + '.xlsx?' + new Date().getTime() + '&embedded=true');
                                //    viewTO = setTimeout(viewReload, 10000);
                                //}
                                //viewReload();
                                //
                                //

                                _gsC(srcpf$ + '/media/js/tikestep_s4.js' + '?' + new Date().getTime(), 'js', function () {
                                    if (!elUI['s4end']) {

                                        elUI['s4end'] = FormWizard.s4end.createCalc({ kind: 'excelhost', opts: {} });
                                        elUI['s4end'].renderUI(elUI, frmEL, function () {

                                        });
                                    } else {

                                    };
                                });
                                //
                                //
                            }else{
                                _gsC(srcpf$ + '/media/js/tikestep_payrollonline.js' + '?' + new Date().getTime(), 'js', function () {

                                    if (!elUI[_$n[3]]) {

                                        elUI[_$n[3]] = new tikestep(frmEL, stepcodeback, elUI);

                                        if (cb) cb();

                                    };
                                    //debugger;
                                    elUI[_$n[3]].doStep(a, b, clickStepCircle, _$n);
                                    //
                                }, 'tikestep_payrollonline.js');
                            };

                        }
                    });
                    //
                    frmEL.find('.wrap-content.container').css('display', '');
                    //
                }, 'form-wizard.js');

                //
                frmEL.find('[data-lang]').each(function (idx, el) {
                    //debugger;
                    var key = el.getAttribute('data-lang');
                    $(el).html(init_data['lang'][key]);
                });

                //frmEL.find('[data-toggle="popover"]').popover();

                frmEL.find('#step-1 .show-help-context').click(function () {
                    //
                    apisvr.a$[st0(3)].prototype.calculateAge = function () {
                        console.log('The current age is: ');
                    }

                    var dog = new apisvr.a$[st0(3)]({ 'adu': 'fucking' });
                    dog.publicSharedMethod = function (para) {
                        apisvr.a$[st0(3)].prototype.publicSharedMethod.call(this, para);
                    };

                    dog.publicSharedMethod('con cat');
                    dog.publicSharedVar = 'con cat';

                    dog.nationality = function () {
                        var that = this;
                    };

                    var cat = new apisvr.a$[st0(3)]({ 'adu': 'du me may' });
                    cat.publicSharedMethod('cai lon');
                    cat.publicSharedVar = 'cai lon';

                    console.log(dog.nationality());
                    //console.log(cat.nationality());

                    console.log(dog.calculateAge());
                    console.log(cat.calculateAge());
                });
                //
                frmEL.on('click', function (e) {
                    if ($(e.target).closest('.popover').length === 0) {
                        if (elUI.selEMP_popover) elUI.selEMP_popover.popover('hide');
                        if (elUI.log_fromto_popover) elUI.log_fromto_popover.popover('hide');
                    };
                });

            },
            this.dispose = function () {
                frmWizHwnd = null;
                $("#tabBODY_" + _tabId).find('iframe').each(function (i, f) {
                    try {
                        if (f.contentWindow.releaseEvts) f.contentWindow.releaseEvts();
                    } catch (error) {
                    };
                });
                $("#tabBODY_" + _tabId).find('.dropdown-toggle').dropdown('dispose');

                for (var p in elUI) {
                    if (elUI.hasOwnProperty(p) && p.indexOf('_popover') > 0) {
                        elUI[p].popover('dispose');
                    } else if (elUI.hasOwnProperty(p) && p.indexOf('_scroPerf') > 0) {
                        elUI[p].destroy();
                    };
                };
                //
                ///on o s3logedit.js de lay rect cua grid result, cho show diagram + edit log
                if (elUI.globHWN.sliderbar ) {
                    app_container.closest('#app').off('sidebar', elUI.globHWN.sliderbar)
                    $(window).off("resize", elUI.globHWN.theme);
                };
                if ( elUI.globHWN.theme) {
                    app_container.closest('#app').off('theme', elUI.globHWN.theme)
                    $(window).off("resize", elUI.globHWN.theme);
                };
                //
                //debugger;
                //huy edittime;dialogcontextmenu;popup set dialog panel size; float dialog
                if (elUI['step3_utils']) {
                    var dog = elUI['step3_utils'].editPO;
                    if (dog) {
                        if (dog.fuckMN) {
                            if (dog.fuckMN.fuckSZ) dog.fuckMN.fuckSZ.dispose();//set panel size popup
                            dog.fuckMN.dispose();//dialog contextmenu
                        };
                        dog.dispose();//popover edittime
                    };
                    if (elUI['floatDIAG']) elUI['floatDIAG'].dispose();
                    //
                };
            };
            //https://stackoverflow.com/questions/1441212/javascript-instance-functions-versus-prototype-functions
            var tinhCong = (function () { // scoping
                var privateSharedVar = 'foo';
                function privateSharedFunction() {
                    // has access to privateSharedVar
                    // may also access publicSharedVar via explicit MyObj.prototype
                    // can't be called via this
                }
                function MyObj(opts) { // constructor
                    debugger;
                    privateSharedVar = opts;
                    var privateInstanceVar = 'bar';
                    this.publicInstanceVar = 'baz';
                    function privateInstanceFunction() {
                        // has access to all vars
                        // can't be called via this
                    };
                    this.publicInstanceMethod = function () {
                        // has access to all vars
                        // also known as a privileged method
                    };
                }
                MyObj.prototype.publicSharedVar = 'quux';
                MyObj.prototype.publicSharedMethod = function (param) {
                    // has access to shared and public vars
                    // canonical way for method creation:
                    // try to use this as much as possible
                };

                return MyObj;
            })();


            this.mod=function(args) {
                alert(args);
            };


        }
        O.prototype.comm1 = {
            exS: function (id) { }
            , uplog: "html"
        }
        return O;

    })();