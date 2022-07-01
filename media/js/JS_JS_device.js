//w0w.tabglobalJS['JS_JS_device'] = (function () { // scoping
//    "use strict";
//    function O(opts) { // constructor
//        //
//        var _tabId, elUI = {
//        };
//        //
//        this.init = function (frmEL, cb, tabId, clickArgs) {
//            _tabId = tabId;

//            $('.test_button').on('click', function () {
//                srclocked(true);
//                setTimeout(function () {
//                    //
//                    admin$.DEV(function () {

//                        const popup = $('.test_popup').dxPopup({
//                            //contentTemplate: frmEL,
//                            width: 300,
//                            height: 280,
//                            container: frmEL,
//                            showTitle: true,
//                            title: 'Information',
//                            visible: false,
//                            dragEnabled: false,
//                            closeOnOutsideClick: true,
//                            showCloseButton: false,
//                            position: {
//                                at: 'bottom',
//                                my: 'center',
//                            },
//                            toolbarItems: [{
//                                widget: 'dxButton',
//                                toolbar: 'bottom',
//                                location: 'before',
//                                options: {
//                                    icon: 'email',
//                                    text: 'Send',
//                                    onClick() {
//                                        //const message = `Email is sent to ${employee.FirstName} ${employee.LastName}`;
//                                        //DevExpress.ui.notify({
//                                        //    message,
//                                        //    position: {
//                                        //        my: 'center top',
//                                        //        at: 'center top',
//                                        //    },
//                                        //}, 'success', 3000);
//                                    },
//                                },
//                            }, {
//                                widget: 'dxButton',
//                                toolbar: 'bottom',
//                                location: 'after',
//                                options: {
//                                    text: 'Close',
//                                    onClick() {
//                                        popup.hide();
//                                    },
//                                },
//                            }],
//                        }).dxPopup('instance');
//                        popup.show();

//                        srclocked(false);
//                    });

//                }, 10);
//            });

//            srclocked(false);
//        },
//        this.dispose = function () {

//        };
//        //https://stackoverflow.com/questions/1441212/javascript-instance-functions-versus-prototype-functions
//        var tinhCong = (function () { // scoping
//            var privateSharedVar = 'foo';
//            function privateSharedFunction() {
//                // has access to privateSharedVar
//                // may also access publicSharedVar via explicit MyObj.prototype
//                // can't be called via this
//            }
//            function MyObj(opts) { // constructor
//                debugger;
//                privateSharedVar = opts;
//                var privateInstanceVar = 'bar';
//                this.publicInstanceVar = 'baz';
//                function privateInstanceFunction() {
//                    // has access to all vars
//                    // can't be called via this
//                };
//                this.publicInstanceMethod = function () {
//                    // has access to all vars
//                    // also known as a privileged method
//                };
//            }
//            MyObj.prototype.publicSharedVar = 'quux';
//            MyObj.prototype.publicSharedMethod = function (param) {
//                // has access to shared and public vars
//                // canonical way for method creation:
//                // try to use this as much as possible
//            };

//            return MyObj;
//        })();


//        this.mod = function (args) {
//            alert(args);
//        };


//    }
//    O.prototype.comm1 = {
//        exS: function (id) { }
//        , uplog: "html"
//    }
//    return O;

//})();