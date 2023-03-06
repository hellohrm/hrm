
//<script type="text/javascript">
    (function () {
        _gsC('https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.js', 'js', function () {
            _gsC('https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.css', 'css', function () {

                var lan=JSON.parse(atob("IntcImpzX3R4dFwiOlwiUGhcXHUxZWE3biBtXFx1MWVjMW0gXFx1MDExMWFuZyBcXHUwMTExXFx1MDFiMFxcdTFlZTNjIG1cXHUxZWRmLCB2dWkgbFxcdTAwZjJuZyBcXHUwMTExXFx1MDBmM25nIGxcXHUxZWExaSB0clxcdTAxYjBcXHUxZWRiYyBraGkgbVxcdTFlZGYgbVxcdTFlZGJpLCBob1xcdTFlYjdjIGJcXHUxZWExbiBjXFx1MDBmMyB0aFxcdTFlYzMgZFxcdTAwZjluZyB0clxcdTAwZWNuaCBkdXlcXHUxZWM3dCBraFxcdTAwZTFjIFxcdTAxMTFcXHUxZWMzIG1cXHUxZWRmIHNvbmcgc29uZy5cIixcImpzX3RyeVwiOlwiVGhcXHUxZWVkIGxcXHUxZWExaVwiLFwianNfY2xvc2VcIjpcIlRob1xcdTAwZTF0XCIsXCJqc19vdmVyMzBfMDAxXCI6XCJ2XFx1MDFiMFxcdTFlZTN0IGhcXHUwMWExbiAzMCBnaVxcdTAwZTJ5ICFcIixcImpzX292ZXIzMF8wMDJcIjpcIk5ndXlcXHUwMGVhbiBuaFxcdTAwZTJuIGNcXHUwMGYzIHRoXFx1MWVjMyBkbyBwaFxcdTFlYTduIG1cXHUxZWMxbSBiXFx1MWVjYiBsXFx1MWVkN2kgaG9cXHUxZWI3YyBcXHUwMTExXFx1MDFiMFxcdTFlZGRuZyB0cnV5XFx1MWVjMW4ga2hcXHUwMGY0bmcgXFx1MWVkNW4gXFx1MDExMVxcdTFlY2JuaC4gVnVpIGxcXHUwMGYybmcgQ2hcXHUxZWRkIFxcdTAxMTFcXHUxZWUzaSB0aFxcdTAwZWFtIGhvXFx1MWViN2Mga2hcXHUxZWRmaSBcXHUwMTExXFx1MWVkOW5nIGxcXHUxZWExaSBwaFxcdTFlYTduIG1cXHUxZWMxbSB2XFx1MDBlMCB0aFxcdTFlZWQgbFxcdTFlYTFpIC4uLlwiLFwianNfb3ZlcjMwXzAwM1wiOlwiVlxcdTAwZTJuZywgS2hcXHUxZWRmaSBcXHUwMTExXFx1MWVkOW5nIGxcXHUxZWExaSAhXCIsXCJqc19vdmVyMzBfMDA0XCI6XCJUXFx1MDBmNGkgY2hcXHUxZWRkLi4uXCJ9Ig=="));


                var seLAN = window['apisvr'] ? apisvr.a$.selected_language : 'vi',
                    _gLA = function (na) {
                        return lan[seLAN] && lan[seLAN][na] && lan[seLAN][na];
                    };
                //
                lan= { 'vi': JSON.parse(lan) };



                

                window.dupHELLO = function (mor, cb) {//call in sockjo.js

                    document.getElementById('helloguy').style.display = 'none';
                    var defO = {

                        allowOutsideClick: false,
                        allowEscapeKey: false,

                        title: 'Oops...',
                        text: _gLA("js_txt") || 'Software is being opened, please close it before opening a new one, or you can use another browser to open it in parallel.',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: _gLA("js_try") || 'Try again',
                        cancelButtonText: _gLA("js_close") || 'Exit'
                    };
                    //
                    if (mor) {
                        for (var k in mor) {
                            if (mor.hasOwnProperty(k)) {
                                defO[k] = mor[k];
                            }
                        };
                    };
                    //
                    Swal.fire(defO).then(function (result) {
                        if (!result.isConfirmed) {
                            setTimeout(function () {
                                //
debugger;

				self.close();

				//var ww = window.open('https://hrm.dnd.vn/chamcong', '_self'); ww.close(); 
                                //if (mor&&mor._close) {
					//ww.close();                                 
                                //};
                                //
                                //this command realy active
                                //ww.close();

                                //window.location.replace('https://hrm.dnd.vn/chamcong');
                            }, 500);
                        } else {
                            window.location.replace(location.href.split('#')[0]);
                        };
                        cb && cb(result.isConfirmed);
                    });
                    function createClass(name, rules) {
                        var style = document.createElement('style');
                        style.type = 'text/css';
                        document.getElementsByTagName('head')[0].appendChild(style);
                        if (!(style.sheet || {}).insertRule)
                            (style.styleSheet || style.sheet).addRule(name, rules);
                        else
                            style.sheet.insertRule(name + "{" + rules + "}", 0);
                    }
                    createClass('.swal2-popup', "width: auto;");
                    //
                    cb && cb('opened');
                    //
                };

                window.overtimeLOADER = function (mor, cb) {//call in main.js

                    window.SwalAlert = 1;
                    clearTimeout(unlockedHWND); unlockedHWND = -1;
                    helloguy.children(":first").removeClass('bgwaitcolor');

                    var defO = {

                        allowOutsideClick: false,
                        allowEscapeKey: false,

                        title: "Oops... " + _gLA("js_over30_001") || "exceed 30 seconds !",
                        text: _gLA("js_over30_002") || "The cause can be faulty software or an unstable internet connection. Please Wait a moment or restart the software and try again ...",
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: _gLA("js_over30_004") || "I Wait...",
                        cancelButtonText: _gLA("js_over30_003") || "Yes, restart it !",
                        showCancelButton: true,
                        allowOutsideClick: false
                    };
                    //
                    if (mor) {
                        for (var k in mor) {
                            if (mor.hasOwnProperty(k)) {
                                defO[k] = mor[k];
                            }
                        };
                    };
                    //
                    Swal.fire(defO).then(function (result) {
                        if (result.isConfirmed) {
                            window.SwalAlert = null;
                            if (helloguy.is(":visible")) {
                                helloguy.children(":first").addClass('bgwaitcolor');
                                unlockedHWND = setTimeout(unlockedFN, 30000);
                            };
                        } else if (result.isDismissed) {
                            window.location.replace(location.href.split('#')[0]);
                        };
                        cb && cb(result.isConfirmed);
                    });
                    //
                    document.querySelector('body').classList.remove('swal2-height-auto');
                    //
                    cb && cb('opened');
                };
                //
                //
                window['sweetalert2_DLG'] && window.sweetalert2_DLG();
                //
            }, 'sweetalert2.min.css');
        }, 'sweetalert2.min.js');

        if (window['GetIEVersion'] && GetIEVersion() == 11) {
            _gsC('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.4/polyfill.min.js', 'js', function () {//https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js
            }, 'polyfill.min.js');
        };
    })();
//</script>