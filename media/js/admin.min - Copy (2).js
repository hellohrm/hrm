﻿var dopostqueue = {}, helloguy, db_dat = ['attunits', 'hols', 'ots']
 , iframe_load = function (iframe) {
     try {
         iframe.contentWindow.postMessage([], iframe.src);
         //iframe.contentWindow.Finsh_FrameLoad();
     }
     catch (err)
     { };
     //$(iframe.contentWindow.document).on("mousedown touchstart", function (evt) {
     //    //evt.preventDefault();
     //    $(document).trigger(evt);
     //});
     helloguy.css({ 'display': 'none' });
 }
 , st1 = function (a, k, p) {
     return st(a, k, p);
 }
 , _o$h = { }
 , admin$ = function () {
     apisvr.a$.isAndroid = function () {
         alert('fuck');//test override...
     }
     apisvr.a$.olshift = function () {
         var puhwnd = $('#popuphwnd');
         var _hwnd = puhwnd.find('.modal-dialog');
         _hwnd[(apisvr.a$.mobsrc ? 'add' : 'remove') + 'Class']('modal-dialog-full-width');
         _hwnd = puhwnd.find('.modal-content');
         _hwnd[(apisvr.a$.mobsrc ? 'add' : 'remove') + 'Class']('modal-content-full-width');
         puhwnd.modal('show');
     }

     function testdevextreme() {
         var myDialog = DevExpress.ui.dialog.custom({
             title: "e.itemData.name",
             messageHtml: "<i style='padding-left:10px'>incididunt ut labore et dolore magna aliqua. Penatibus et ma?</i>",
             buttons: [{
                 text: "YES", id: "yes",
                 onClick: function (e) {
                     return { buttonID: e.component.option("id") }
                 }
             },
                     {
                         text: "NO", id: "no",
                         onClick: function (e) {
                             return { buttonID: e.component.option("id") }
                         }
                     },
                             {
                                 text: "Cancel", id: "cancel",
                                 onClick: function (e) {
                                     return { buttonID: e.component.option("id") }
                                 }
                             },
             ]
         });
         myDialog.show().done(function (dialogResult) {
             if (dialogResult.buttonID != 'cancel') {

             };
         });
     };
     //var popupOptions = {
     //    //height: '100%',
     //    //fullScreen: true,
     //    contentTemplate: function (El) {
     //        //return $('<div class="iframe-wrapper"><iframe src="quantri/users.html" scrolling="no" onload="fuckthis(this);"></iframe></div>');
     //        //return $("<div />").append(
     //        //    $("<p>Full Name: <span>" + employee.FirstName +
     //        //        "</span> <span>" + employee.LastName + "</span></p>"),
     //        //    $("<p>Birth Date: <span>" + employee.BirthDate + "</span></p>"),
     //        //    $("<p>Address: <span>" + employee.Address + "</span></p>"),
     //        //    $("<p>Hire Date: <span>" + employee.HireDate + "</span></p>"),
     //        //    $("<p>Position: <span>" + employee.Position + "</span></p>")
     //        //);
     //        //https://github.com/DevExpress-Examples/getting-started-with-drawer

     //        El.addClass('frameworkpopupsel');

     //        var sections = [{
     //            id: 1,
     //            fullName: "John Heart",
     //            prefix: "Dr.",
     //            position: "CEO",
     //            expanded: true,
     //            items: [{
     //                id: 2,
     //                fullName: "Samantha Bright",
     //                prefix: "Dr.",
     //                position: "COO",
     //                expanded: true,
     //                items: [{
     //                    id: 3,
     //                    fullName: "Kevin Carter",
     //                    prefix: "Mr.",
     //                    position: "Shipping Manager",
     //                }, {
     //                    id: 14,
     //                    fullName: "Victor Norris",
     //                    prefix: "Mr.",
     //                    //selected: true,
     //                    position: "Shipping Assistant"
     //                }]
     //            }, {
     //                id: 4,
     //                fullName: "Brett Wade",
     //                prefix: "Mr.",
     //                position: "IT Manager",
     //                expanded: true,
     //                items: [{
     //                    id: 5,
     //                    fullName: "Amelia Harper",
     //                    prefix: "Mrs.",
     //                    position: "Network Admin"
     //                }, {
     //                    id: 6,
     //                    fullName: "Wally Hobbs",
     //                    prefix: "Mr.",
     //                    position: "Programmer"
     //                }, {
     //                    id: 7,
     //                    fullName: "Brad Jameson",
     //                    prefix: "Mr.",
     //                    position: "Programmer"
     //                }, {
     //                    id: 8,
     //                    fullName: "Violet Bailey",
     //                    prefix: "Ms.",
     //                    position: "Jr Graphic Designer",
     //                }]
     //            }, {
     //                id: 9,
     //                fullName: "Barb Banks",
     //                prefix: "Mrs.",
     //                position: "Support Manager",
     //                expanded: true,
     //                items: [{
     //                    id: 10,
     //                    fullName: "Kelly Rodriguez",
     //                    prefix: "Ms.",
     //                    position: "Support Assistant"
     //                }, {
     //                    id: 11,
     //                    fullName: "James Anderson",
     //                    prefix: "Mr.",
     //                    position: "Support Assistant"
     //                }]
     //            }]
     //        }];
     //        var employees = [{
     //            "ID": 1,
     //            "FirstName": "John",
     //            "LastName": "Heart",
     //            "Prefix": "Mr.",
     //            "Position": "CEO",
     //            "Picture": "images/employees/01.png",
     //            "BirthDate": "1964/03/16",
     //            "HireDate": "1995/01/15",
     //            "Notes": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
     //            "Address": "351 S Hill St."
     //        }, {
     //            "ID": 20,
     //            "FirstName": "Olivia",
     //            "LastName": "Peyton",
     //            "Prefix": "Mrs.",
     //            "Position": "Sales Assistant",
     //            "Picture": "images/employees/09.png",
     //            "BirthDate": "1981/06/03",
     //            "HireDate": "2012/05/14",
     //            "Notes": "Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.",
     //            "Address": "807 W Paseo Del Mar"
     //        }, {
     //            "ID": 4,
     //            "FirstName": "Robert",
     //            "LastName": "Reagan",
     //            "Prefix": "Mr.",
     //            "Position": "CMO",
     //            "Picture": "images/employees/03.png",
     //            "BirthDate": "1974/09/07",
     //            "HireDate": "2002/11/08",
     //            "Notes": "Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.",
     //            "Address": "4 Westmoreland Pl."
     //        }, {
     //            "ID": 5,
     //            "FirstName": "Greta",
     //            "LastName": "Sims",
     //            "Prefix": "Ms.",
     //            "Position": "HR Manager",
     //            "Picture": "images/employees/04.png",
     //            "BirthDate": "1977/11/22",
     //            "HireDate": "1998/04/23",
     //            "Notes": "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
     //            "Address": "1700 S Grandview Dr."
     //        }, {
     //            "ID": 6,
     //            "FirstName": "Brett",
     //            "LastName": "Wade",
     //            "Prefix": "Mr.",
     //            "Position": "IT Manager",
     //            "Picture": "images/employees/05.png",
     //            "BirthDate": "1968/12/01",
     //            "HireDate": "2009/03/06",
     //            "Notes": "Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).",
     //            "Address": "1120 Old Mill Rd."
     //        }, {
     //            "ID": 7,
     //            "FirstName": "Sandra",
     //            "LastName": "Johnson",
     //            "Prefix": "Mrs.",
     //            "Position": "Controller",
     //            "Picture": "images/employees/06.png",
     //            "BirthDate": "1974/11/15",
     //            "HireDate": "2005/05/11",
     //            "Notes": "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
     //            "Address": "4600 N Virginia Rd."
     //        }, {
     //            "ID": 10,
     //            "FirstName": "Kevin",
     //            "LastName": "Carter",
     //            "Prefix": "Mr.",
     //            "Position": "Shipping Manager",
     //            "Picture": "images/employees/07.png",
     //            "BirthDate": "1978/01/09",
     //            "HireDate": "2009/08/11",
     //            "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.",
     //            "Address": "424 N Main St."
     //        }, {
     //            "ID": 11,
     //            "FirstName": "Cynthia",
     //            "LastName": "Stanwick",
     //            "Prefix": "Ms.",
     //            "Position": "HR Assistant",
     //            "Picture": "images/employees/08.png",
     //            "BirthDate": "1985/06/05",
     //            "HireDate": "2008/03/24",
     //            "Notes": "Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!",
     //            "Address": "2211 Bonita Dr."
     //        }, {
     //            "ID": 30,
     //            "FirstName": "Kent",
     //            "LastName": "Samuelson",
     //            "Prefix": "Dr.",
     //            "Position": "Ombudsman",
     //            "Picture": "images/employees/02.png",
     //            "BirthDate": "1972/09/11",
     //            "HireDate": "2009/04/22",
     //            "Notes": "As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.",
     //            "Address": "12100 Mora Dr"
     //        }, {
     //            "ID": 21,
     //            "FirstName": "Taylor",
     //            "LastName": "Riley",
     //            "Prefix": "Mr.",
     //            "Position": "Network Admin",
     //            "Picture": "",
     //            "BirthDate": "1982/08/14",
     //            "HireDate": "2012/04/14",
     //            "Notes": "If you are like the rest of us at DevAV, then you've probably reached out for help from Taylor. He does a great job as a member of our IT department.",
     //            "Address": "7776 Torreyson Dr"
     //        }];

     //        var lk = $('<div id="drawer">' +
     //                   '<div id="boxOptions1">' +
     //                       '<div  data-options="dxItem:{ratio: 1}" class="dx-theme-background-color"><div id="content"></div></div>' +
     //                       '<div data-options="dxItem: {baseSize: 50}"><div id="toolbar" class="d-flex align-items-center" style="height:50px"></div></div>' +
     //                    '</div>' +
     //                '</div>');
     //        var btn = $('<div class="selempbtn box" style="padding-left:10px"><button type="button" class="btn btn-success btn-o nutsave"><i class="dx-icon dx-icon-check"></i> Chon nhan vien</button><div style="width:20px;display:inline-block"></div><button type="button" class="btn btn-secondary btn-o nutcancel"><i class="dx-icon dx-icon-close"></i> Thoat</button></div>');

     //        El.append(lk);
     //        lk.find("#boxOptions1").dxBox({
     //            direction: "col",
     //            width: "100%",
     //            height: "100%",
     //        });


     //        lk.find("#content").dxDataGrid({
     //            dataSource: employees,
     //            keyExpr: "ID",
     //            height:'100%',
     //            showBorders: true,
     //            selection: {
     //                mode: "multiple"
     //            },
     //            columns: [{
     //                dataField: "Prefix",
     //                caption: "Title",
     //                width: 70
     //            },
     //                "FirstName",
     //                "LastName", {
     //                    dataField: "Position",
     //                    width: 180
     //                }, {
     //                    dataField: "BirthDate",
     //                    dataType: "date",
     //                    width: 125
     //                }, {
     //                    dataField: "HireDate",
     //                    dataType: "date",
     //                    width: 125
     //                }
     //            ]
     //        });

     //        lk.find("#toolbar").append(btn);

     //        this._$drawer = El.find("#drawer").dxDrawer({
     //            opened: true,
     //            height: '100%',
     //            openedStateMode:'push',
     //            template: function () {

     //                var $list = $("<div>").width(300).addClass("panel-list");

     //                return $list.dxTreeView({
     //                    items: sections,
     //                    width: 340,
     //                    height: '100%',
     //                    selectionMode: 'single',
     //                    focusedRowEnabled: true,
     //                    onSelectionChanged: function (e) {
     //                        //syncSelection(e.component);
     //                    },
     //                    onContentReady: function (e) {
     //                        //syncSelection(e.component);
     //                    },
     //                    itemTemplate: function (item) {
     //                        return "<div>" + item.fullName + " (" + item.position + ")</div>";
     //                    }
     //                });
     //            }
     //        }).dxDrawer("instance");
     //    },
     //    //showTitle: true,
     //    //title: "Information",
     //    visible: false,
     //    dragEnabled: false,
     //    closeOnOutsideClick: false,
     //    showCloseButton: true,
     //    toolbarItems: [{
     //        text: "Title",
     //        location: "center"
     //    }, {
     //        widget: "dxButton",
     //        location: "before",
     //        options: {
     //            icon: "menu",
     //            onClick: function (e) {
     //                popup._$drawer.toggle();
     //            }
     //        }
     //    }],
     //    onContentReady: function (e) {
     //        setTimeout(function () {
     //            //e.component._$popupContent.find('iframe').attr('src', 'filebrowser.php?hostkind=' + encodeURIComponent(JSON.stringify(gridintance.hostkind)) + '&atfolder=' + fileManager.getCurrentDirectory().key + '&act=' + popup.cpACT);
     //        }, 100);
     //    },
     //    onHiding: function (e) {
     //        setTimeout(function () {
     //            //e.component._$popupContent.find('iframe').attr('src', '');
     //        }, 200);
     //    }
     //}
     //var popup, fuckthis = function (el) {
     //    var c = el;
     //};
     function devpopup(opts,selCB,loadCB) {
         srclocked(true);
         setTimeout(function(){
             _gsC(srcpf$ + '/media/js/devlookup.js', 'js', function () {

                 new DevExpress.myLK($.extend(opts,{ mainO: new shareMe(), loadcb: loadCB, selcb: selCB }));

             }, 'devlookup.js');//

         },20);
     }

     var init = function () {
         NProgress.configure({ showSpinner: !1 }), NProgress.start(), NProgress.set(.4); var interval = setInterval(function () { NProgress.inc() }, 1e3);
         NProgress.done(), clearInterval(interval), Main.init({ cS: true });//closedSidebar
         //
         chromeTAB();
         size_TAB();
         //
         //
         $('.app-aside').on('click', 'li a', function (e, para) {
             if (!this.id) return;
             _mnujob(this, this.id, para);
         });
         //
         var olShift = gQRY(window.location.href)['ols'];
         if (olShift) {
             $('.main-navigation-menu #nor_payrollonline').trigger('click', { 'demo': olShift });
         } else {
             $('#' + apisvr.a$.deftab).trigger('click');
         };
         //
         //_mnujob($('<div><i class="ti-home"></i><span class="title">cakip_overview</span></div>')[0], 'cakip_overview');
         //
         $(document).on('click.bs.dropdown.data-api keyup.bs.dropdown.data-api', function (e, para) {
             if (!para || !para.causeby || para.causeby != 'ifrmTab') {
                 chromeTabs.tabEls.filter(function (t) {
                     return $(t).data().tabkind == 1;
                 }).map(function (t) {
                     var eachF = $("#tabBODY_" + $(t).data().tabId + ' iframe');
                     if (eachF.length > 0) {
                         eachF[0].contentWindow.postMessage({ 'msgtype': 'resetdropdown' }, "*");
                     };
                 });
             };
         });

         $('script').remove();

         $('#popuphwnd').on('hidden.bs.modal', function () {
             $(this).find('.modal-content *').unbind().removeData();
             $(this).find('.modal-body').empty();
         });

         $('#sellan a').click(function (e) {
             var lan = $(this).attr('lang');
             if (lan != Cookies.get('selected_language')) {
                 cok('selected_language=' + lan, 15);
                 //window.location.reload();
                 window.location.replace(location.href.split('#')[0]);
             };
         });
         $('.acclogin_menu').on('click', 'li', function (e) {
             var $that = this;
             setTimeout(function () {
                 var puhwnd = admin$.popup({ a: 'f', fw: 1, t: '' }), session =(lanjs=='html')?'pages.dev-demo': new Date().getTime(), hostdata = window.location.protocol + "//" + apisvr.a$.mainHolePath + '/hostfirewall.php?XDEBUG_SESSION_START=154A5348';
                 var divaddto = puhwnd.find('.modal-body'); divaddto.addClass('iframe-fullscreen');
                 puhwnd.find('.modal-header').remove(); puhwnd.find('.modal-footer').remove();
                 var btndone = puhwnd.find('#popupdone');//puhwnd.find('#popupdone').remove();
                 btndone.click(function () {
                     puhwnd.find('iframe')[0].contentWindow.postMessage({ 'msgtype': 'resetdropdown' }, "*");
                 });
                 //
                 apisvr.a$.sessions[session] = {
                     hwndTO: null,
                     id: session,
                     fn: function (a, b, c) {
                         var that = this;
                         if (a == 'postmsg') {

                         } else if (a == 'job') {
                             if (b.evtData.evt == 'startredirect') {
                                 datcnt = datcnt.concat([b.evtData.svr].filter(function (item) { return datcnt.indexOf(item) < 0 }));
                             } else if (b.evtData.evt == 'loaded') {
                                 clearTimeout(dathwnd);
                                 dathwnd = -1; datfn = null;
                                 wting.remove();
                                 //
                             } else if (b.evtData.evt == 'lockform') {
                                 helloguy.css('display', b.evtData.state);
                             } else if (b.evtData.evt == 'loginok') {
                                 apisvr.a$.scod($(b.evtData.html)[0]);
                                 //window.location.replace(location.href.split('#')[0]);
                             } else if (b.evtData.evt == 'closed') {
                                 puhwnd.modal('hide');
                             };
                         };
                     }
                 };
                 //
                 puhwnd.one('shown.bs.modal', function () {
                     datfn();
                 }).one('hidden.bs.modal', function () {
                     delete apisvr.a$.sessions[session];
                 });
                 //
                 var wting = helloguy.clone(), datcnt = [], dathwnd, datfn = function (cnt) {
                     clearTimeout(dathwnd);
                     if (dathwnd == -1) return;
                     //
                     divaddto.find('iframe').remove();
                     var ifrm = document.createElement('iframe');
                     ifrm.style.opacity = 1;
                     //ifrm.style.width = "100%";
                     //ifrm.style.height = "300px";
                     ifrm.setAttribute("scrolling", "no"); ifrm.setAttribute("frameBorder", "0");
                     //
                     divaddto.find('iframe').remove();
                     divaddto[0].appendChild(ifrm);
                     var te = ifrm.contentWindow.document;
                     te.open();
                     te.write('<form method="post" action="' + hostdata + '" id="reg_log"><input type="hidden" name="selected_language" value="' + apisvr.a$.selected_language + '"/><input type="hidden" name="duty" value="' +
                         window[st0('1')](session + '|' + apisvr.a$.mainHolePath + '|' + window.location.origin + '|' + datcnt.join(',') + '|' + $($that).attr('lang')) +
                         '"/></form>');
                     te.close();
                     //
                     //dathwnd = setTimeout(datfn, 10000);
                     document.createElement('form').submit.call(te.getElementById('reg_log'));
                     //
                 }; wting.removeAttr('id').css('display', ''); divaddto.append(wting);
                 //
                 setTimeout(function () { puhwnd.modal('show'); }, 1);
                 //
             }, 1);
         }).on('click', 'lo', function (e) {
             cok('_IWKFHTBZ=; Max-Age=0; path=/;');
             window.location.replace(location.href.split('#')[0]);
         });
         if (admined) admined();
     };
     //
     _gsC(srcpf$ + '/media/js/vendors.bundle.min.js', 'js', function () {
         _gsC(srcpf$ + '/media/js/main.js', 'js', function () {
             helloguy = $('#helloguy');
             helloguy.fadeOut("300", function () {
                 helloguy.html('<div></div><div style="width: 60px; height: 60px;"><div class="dx-loadindicator-wrapper"><div class="dx-loadindicator-content"><div class="dx-loadindicator-icon"><div class="dx-loadindicator-segment dx-loadindicator-segment7"></div><div class="dx-loadindicator-segment dx-loadindicator-segment6"></div><div class="dx-loadindicator-segment dx-loadindicator-segment5"></div><div class="dx-loadindicator-segment dx-loadindicator-segment4"></div><div class="dx-loadindicator-segment dx-loadindicator-segment3"></div><div class="dx-loadindicator-segment dx-loadindicator-segment2"></div><div class="dx-loadindicator-segment dx-loadindicator-segment1"></div><div class="dx-loadindicator-segment dx-loadindicator-segment0"></div></div></div></div><div>');
             });
             var intT = whatT(cS$.t);
             $(".toikhoqua")[intT[1] + 'Class']('chrome-tabs-dark-theme');
             init();
             $("#app").removeClass("darkcolor lightcolor").addClass(intT[0] + 'color').fadeIn();
         });
     });
     //
     function testshowfullpopup() {
         $('#popuphwnd').modal('show');
     }
     var _mnujob = function (mnu, id, clickArgs) {
         helloguy.css({ 'display': '' });
         //
         $(document).trigger("mousedown");
         //
         setTimeout(function () {
             var isNEW;
             chromeTabs.tabEls.forEach(function (tabEl, originalIndex) {
                 if (tabEl.getAttribute('data-tab-id') == id) {
                     isNEW = tabEl;
                     chromeTabs.setCurrentTab(tabEl);
                     //
                     if (clickArgs && tabglobalJS.hasOwnProperty(id) && tabglobalJS[id].mod && typeof tabglobalJS[id].mod == 'function') {
                         tabglobalJS[id].mod(clickArgs);
                     };
                 };
             });
             if (!isNEW) {
                 var tabdata, title = $(mnu).find('.title').text(), tabicon = $(mnu).find('i');
                 if (tabicon.length > 0) {
                     tabicon = tabicon[0].outerHTML;
                 } else {
                     tabicon = null;
                 };
                 tabdata = {//id == 'nor_payrollonline','tmp_cakip_overview'
                     id: id,
                     title: title,
                     tabicon: tabicon,
                     tabtype: id.split('_')[0],
                     clickArgs: clickArgs
                 };
                 chromeTabs.addTab(tabdata);
             } else {
                 helloguy.css({ 'display': 'none' });
             };
         }, 10);
     }
     , svrDAT = function (pArgs) {
         var d = new $.Deferred();
         //$.ajax({
         //    type: 'POST',
         //    url: window.location.href,//'data/testjson.php'
         //    dataType: 'html',
         //    data: pArgs,
         //    success: function (data) {
         //        d.resolve(data);
         //    },
         //    error: function (jqXHR, textStatus, ex) {
         //        d.reject(textStatus + "," + ex + "," + jqXHR.responseText);
         //    }
         //});
         var ajaxsession = new Date().getTime() +  Math.random().toString(36).substring(7);
         dopostqueue[ajaxsession] = function (rst) {
             d[rst.kq](rst.result);
             delete dopostqueue[ajaxsession];
         };

         apisvr.ajax($.extend({}, { ajaxsession: ajaxsession, auri: encodeURIComponent(window.location.href), basejs: [tabglobalJS.hasOwnProperty('JS_' + pArgs.tabId), window.dynload.indexOf(pArgs.tabId + '.js')], iwkfhtbz: apisvr.a$.iwkfhtbz, selected_language: apisvr.a$.selected_language, masterdat: !masterdat ? '1' : '0'}, pArgs));

         return d.promise();
     }
     , shareMe = (function () { // scoping
            var privateSharedVar = 'foo';
            function privateSharedFunction() {
                // has access to privateSharedVar
                // may also access publicSharedVar via explicit MyObj.prototype
                // can't be called via this
            }
            function MyObj(opts) { // constructor
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
            MyObj.prototype.svrDAT = function (pArgs) {
                return new svrDAT(pArgs);
            };

            return MyObj;
        })()
     , __DEV = function (cb) {
         if (window.DevExpress) {
             cb();
         } else {

             helloguy.css({ 'display': '' });

             setTimeout(function () {

                 var loc = apisvr.a$.selected_language, devjs = function () {
                     _gsC('https://cdn3.devexpress.com/jslib/' + deV + '/js/dx.web.js', 'js', function () {// '/media/dx.web.debug.js'//'https://cdn3.devexpress.com/jslib/20.1.3/js/dx.all.js',
                         //
                         if (loc == 'vi') {
                             $.getJSON(srcpf$ + "/media/cldr/main/vi/msg.json", function (dat) {
                                 DevExpress.localization.loadMessages(dat);
                                 var gitpath = 'https://caicangcua.github.io/jscssmoi/';
                                 $.when(
                                     $.getJSON(gitpath + "cldr/main/vi/ca-gregorian.json"),
                                     $.getJSON(gitpath + "cldr/main/vi/numbers.json"),
                                     $.getJSON(gitpath + "cldr/main/vi/currencies.json"),
                                     $.getJSON(gitpath + "cldr/supplemental/likelySubtags.json"),
                                     $.getJSON(gitpath + "cldr/supplemental/timeData.json"),
                                     $.getJSON(gitpath + "cldr/supplemental/weekData.json"),
                                     $.getJSON(gitpath + "cldr/supplemental/currencyData.json"),
                                     $.getJSON(gitpath + "cldr/supplemental/numberingSystems.json")
                                 ).then(function () {
                                     return [].slice.apply(arguments, [0]).map(function (result) {
                                         return result[0];
                                     });
                                 }).then(
                                     Globalize.load
                                 ).then(function () {
                                     Globalize.locale('vi');
                                     setTimeout(function () { cb(); }, 10);
                                 }).fail(function () {
                                     setTimeout(function () { cb(); }, 10);
                                 });
                             });
                         } else {
                             setTimeout(function () { cb(); }, 10);
                         };
                     });
                 };

                 if (loc == 'vi') {
                     _gsC('https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.5.1/cldr.min.js', 'js', function () {
                         _gsC('https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.5.1/cldr/event.min.js', 'js', function () {
                             _gsC('https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.5.1/cldr/supplemental.min.js', 'js', function () {
                                 _gsC('https://cdnjs.cloudflare.com/ajax/libs/globalize/1.6.0/globalize.min.js', 'js', function () {
                                     _gsC('https://cdnjs.cloudflare.com/ajax/libs/globalize/1.6.0/globalize/message.min.js', 'js', function () {
                                         _gsC('https://cdnjs.cloudflare.com/ajax/libs/globalize/1.6.0/globalize/number.min.js', 'js', function () {
                                             _gsC('https://cdnjs.cloudflare.com/ajax/libs/globalize/1.6.0/globalize/currency.min.js', 'js', function () {
                                                 _gsC('https://cdnjs.cloudflare.com/ajax/libs/globalize/1.6.0/globalize/date.min.js', 'js', function () {

                                                     devjs();

                                                 }, 'date.min.js');

                                             }, 'currency.min.js');

                                         }, 'number.min.js');

                                     }, 'message.min.js');

                                 }, 'globalize.min.js');

                             }, 'supplemental.min.js');

                         }, 'event.min.js');

                     }, 'cldr.min.js');

                 } else {
                     devjs();
                 };
             });

             _gsC(srcpf$ + '/media/js/dx.aspnet.data.js', 'js', function () { }, 'dx.aspnet.data.js');
             //_gsC('https://cdn3.devexpress.com/jslib/21.1.4/css/dx.dark.css', 'css', function () { },'devthemes.css');
             //_gsC(srcpf$ + "/media/css/hellodev.css", 'css', function () { }, 'hellodev.css');
             clipTheme();
         }
     }
     , elTAB, chromeTabs, navbar_right, resizeTimeout, isLogout = false
         , def1, def2, def3, def4, def5//https://www.it-swarm-vi.tech/vi/jquery/yeu-cau-hang-doi-ajax-bang-jquery.queue/971992752/
         , valid_TAB = function () {
             elTAB[0].parentNode.style.display = (chromeTabs.tabEls.length == 0) ? 'none' : '';
         }
         , size_TAB = function () {
             var detectTop = parseInt(elTAB.css('margin-top').replace(/[^0-9.\-]/g, ""));
             if (detectTop < 0) {
                 var tabLeft = (elTAB.offset().left + elTAB.position().left);
                 if (!navbar_right) navbar_right = $('.navbar-right');
                 elTAB.width(navbar_right.position().left - tabLeft);
             } else {
                 elTAB.css({ "width": "" });
             };
             //$('.mainDescription').html(detectTop);
             valid_TAB();
             chromeTabs.layoutTabs();
             //
             apisvr.a$.mobsrc = $('#mnucmd').is(":visible");
         }
         , chromeTAB = function () {
             "use strict";//convert:https://es6console.com/

             //tam thoi de chrome tab oday
             elTAB = $('.chrome-tabs'), chromeTabs = new ChromeTabs();

             chromeTabs.init(elTAB[0], function () {
                 //
             });
             elTAB[0].addEventListener('activeTabChange', function (detail) {
                 var tabId = 'tabBODY_' + $(detail.detail.tabEl).data('tabId');
                 app_container.children("div[id^='tabBODY_']").each(function (i, tab) {
                     if (tabId != tab.id) {
                         tab.style.display = 'none';
                         $(tab).trigger('onActived', { state: 0 });
                     } else {
                         $(tab).fadeIn().trigger('onActived', { state: 1 });
                     };
                 });
                 $('body').trigger('click', 'activeTabChange');
             });
             elTAB[0].addEventListener('tabAdd', function (detail) {
                 tabBODY(detail.detail.tabEl);
                 valid_TAB();
                 size_TAB();
             });
             elTAB[0].addEventListener('tabRemove', function (detail) {
                 var tabId = $(detail.detail.tabEl).data('tabId'),
                     tab = app_container.children("#tabBODY_" + tabId);
                 //
                 tab.trigger('onRemoving', { });
                 //
                 //jQuery.cleanData() f
                 if (tabglobalJS.hasOwnProperty(tabId)) {
                     tabglobalJS[tabId].dispose(tabId);
                     tabglobalJS[tabId] = null;
                     delete tabglobalJS[tabId];
                 };
                 //
                 app_container.find('#tabBODY_' + tabId + ',#tabBODY_' + tabId + ' *').unbind().removeData();
                 tab.remove();
                 //
                 valid_TAB();
             });

             $(window).resize(function () {
                 clearTimeout(resizeTimeout);
                 resizeTimeout = setTimeout(function () {
                     size_TAB();
                 }, 300);
             });
             var mut = new MutationObserver(function (mutations, mut) {
                 // if attribute changed === 'class' && 'open' has been added, add css to 'otherDiv'
                 clearTimeout(resizeTimeout);
                 resizeTimeout = setTimeout(function () {
                     size_TAB();
                 }, 200);
             });
             mut.observe(document.getElementById("app"), {
                 'attributes': true
             });
         }
         , tabBODY = function (tabhead) {
             var tab$ = $(tabhead), tabProps = tabhead.tabProperties, tabId = tab$.data('tabId'), tabkind = 0, newTab = function (jsEX) {
                 $.when(def1, def2, jsEX).then(function (v1) {
                     var newFRM = $("<div id='tabBODY_" + tabId + "' class='noneifrm'></div");
                     newFRM.html(v1.replace(new RegExp('srcpfmedia', 'g'), srcpf$ + '/media'));
                     newFRM.find('script#JS_' + tabId).each(function () {
                         apisvr.a$.scod(this);
                         $(this).remove();
                     });
                     //if (tabProps.tabtype == 'dev') {
                     //    apisvr.a$.tmp[tabId] = newFRM.html();
                     //};
                     app_container.append(newFRM).ready(function () {
                         if (tabglobalJS.hasOwnProperty(tabId)) {
                             tabglobalJS[tabId].init(newFRM, function (isMe) {
                                 if (!isMe) {
                                     helloguy.css({ 'display': 'none' });
                                 } else {
                                     switch (isMe) {
                                         case 'dbEngine': {
                                             return new shareMe();
                                             break;
                                         }
                                     };
                                 };
                             }, tabId, tabProps.clickArgs);
                         } else {
                             helloguy.css({ 'display': 'none' });
                         };
                         newFRM.find('script').remove();
                     });
                 }, function (err) {
                     helloguy.css({ 'display': 'none' });
                     alert(err);
                 });
             };
             //
             if (tabProps.tabtype == 'ifrm') {
                 tabkind = 1;
                 var frmpage = window.location.protocol + "//" + apisvr.a$.mainHolePath + '/upload.php';
                 switch (tabId) {
                     case 'profiles': {
                         frmpage = 'nhansu/profiles.php';
                         break;
                     };
                 };
                 var adfrm = (Main.isMobile() ? '1' : '0') + '|' + (apisvr.a$.mobsrc ? '1' : '0');
                 $("<div id='tabBODY_" + tabId + "' class='iframe-wrapper'><iframe src='" + frmpage + "#" + adfrm + "' scrolling='no'  onload='iframe_load(this);'></iframe></div>").appendTo(app_container);
             } else {
                 def2 = new $.Deferred(); def3 = new $.Deferred();
                 var jsCSS = function () {
                     _gsC(srcpf$ + '/media/css/JS_' + tabId + '.css', 'css', function () { }, 'JS_' + tabId + '.css');
                     _gsC(srcpf$ + '/media/js/JS_' + tabId + '.js', 'js', function () { def3.resolve('def3'); }, 'JS_' + tabId + '.js');
                 };

                 if (apisvr.a$.tmp.hasOwnProperty(tabId)) {//tab build from template in cache.
                     def1 = new $.Deferred();
                     newTab(def3);
                     def1.resolve(apisvr.a$.tmp[tabId]);
                     def2.resolve('ignore');
                     //def3.resolve('ignore');
                 } else {
                     def1 = new svrDAT({ "act": "newtab", "tabId": tabId, 'tokin': tabglobalJS['tokin'] });
                     newTab(def3);
                     //
                     if (tabProps.tabtype.indexOf('dev') == 0) {
                         __DEV(function () {
                             def2.resolve('devloaded');
                         });
                     } else {
                         def2.resolve('ignore');
                     };
                 };

                 if (['JS', 'devJS'].indexOf(tabProps.tabtype) >= 0) {
                     jsCSS();
                 } else {
                     def3.resolve('ignore');
                 }
             };
             //
             tab$.data('tabkind', tabkind);
         }

     , dologout = function (el) {
         helloguy.css({ 'display': '' });
         isLogout = true;
         $.removeCookie('tokin', { domain: (/^((\d){1,3}\.){3}(\d){1,3}$/.test(window.location.hostname) ? '' : '.') + window.location.hostname.replace('www.', ''), secure: (window.location.protocol.indexOf('https:') >= 0 ? true : false) })
         window.location.replace('//' + (window.location.hostname.indexOf('www.') >= 0 ? 'www.' : '') + tabglobalJS['urilo'] + '/logout?XDEBUG_SESSION_START=154A5348');
     }
     , puhwnd
     , _popup = function (zz) {
         if (!puhwnd) puhwnd = $('#popuphwnd');var _pY = puhwnd.clone();
         if (zz.a == 'f') {
             var _hwnd = _pY.find('.modal-dialog');
             _hwnd.find('.modal-header .modal-title').html(zz.t);
             _hwnd[((zz.fw || apisvr.a$.mobsrc) ? 'add' : 'remove') + 'Class']('modal-dialog-full-width');
             _hwnd = _pY.find('.modal-content');
             _hwnd[((zz.fw || apisvr.a$.mobsrc) ? 'add' : 'remove') + 'Class']('modal-content-full-width');
         } else if (zz.a == 'd') {
             _pY.find('.modal-dialog')[0].className = 'modal-dialog modal-dialog-centered modal-dialog-zoom modal-' + (zz.s?zz.s:'sm');
             _pY.find('.modal-content')[0].className = 'modal-content';
             _pY.find('.modal-header button').remove();
             _pY.find('.modal-header .modal-title').html(zz.t);
             _pY.find('.modal-body').html(zz.m);
         };
         _pY.one('hidden.bs.modal', function () {
             $(this).find('.modal-content *').unbind().removeData();
             _pY.remove();
             if (zz.hasOwnProperty('cbClosed') && typeof zz['cbClosed'] === 'function') {
                 zz['cbClosed']();
             };
         });
         if (!zz.t) _pY.find('.modal-header').remove();
         _pY.removeAttr('id');
         return _pY;
         //if (zz.a == 'f') {
         //    var _hwnd = puhwnd.find('.modal-dialog');
         //    _hwnd.find('.modal-header .modal-title').html(zz.t);
         //    _hwnd[((zz.fw || apisvr.a$.mobsrc) ? 'add' : 'remove') + 'Class']('modal-dialog-full-width');
         //    _hwnd = puhwnd.find('.modal-content');
         //    _hwnd[((zz.fw || apisvr.a$.mobsrc) ? 'add' : 'remove') + 'Class']('modal-content-full-width');
         //    return puhwnd;
         //} else if (zz.a == 'd') {
         //    var _pY = puhwnd.clone();
         //    _pY.find('.modal-dialog')[0].className = 'modal-dialog modal-dialog-centered modal-dialog-zoom modal-sm';
         //    _pY.find('.modal-content')[0].className = 'modal-content';
         //    _pY.find('.modal-header button').remove();
         //    _pY.find('.modal-header .modal-title').html(zz.t);
         //    _pY.find('.modal-body').html(zz.m);
         //    _pY.one('hidden.bs.modal', function () {
         //        $(this).find('.modal-content *').unbind().removeData();
         //        _pY.remove();
         //        if (zz.hasOwnProperty('cbClosed') && typeof zz['cbClosed'] === 'function') {
         //            zz['cbClosed']();
         //        };
         //    });
         //    return _pY;
         //};
     };
     return {
         mnujob: _mnujob,
         popup: _popup,
         DEV: __DEV,
         devpu: devpopup,
     };
 }();