
//<script type="text/javascript" src="/FD126C42-EBFA-4E12-B309-BB3FDD723AC1/main.js?attr=dZcyPO2UCFfOk-tozYu3YJroEkBfPYM1g1Lg6jV7Th5j8EcbCPxglWD-d1Y4sjiEOHrdbaRtk9DSbi3_EIoPrg1K4tLzrAakMw27AmC6hc6k3eOn6tXGsdEQzSLm5ewUvBkdLuqVXYJJU96PgpLwTQ" charset="UTF-8"></script><link rel="stylesheet" crossorigin="anonymous" href="/E3E8934C-235A-4B0E-825A-35A08381A191/abn/main.css?attr=aHR0cDovLzE5Mi4xNjguMS45MToxMDk5Ni9kdXBicm93c2VydGFiX2xhbmpzLnBocD9rPTEmWERFQlVHX1NFU1NJT05fU1RBUlQ9MTU0QTUzNDg"/><script type="text/javascript">

_gsC('https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.js', 'js', function () {
    _gsC('https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.css', 'css', function () {


        window.dupHELLO = function (mor, cb) {//call in sockjo.js

            document.getElementById('helloguy').style.display = 'none';
            var defO = {

                allowOutsideClick: false,
                allowEscapeKey: false,

                title: 'Oops...',
                text: "Phần mềm đang được mở, vui lòng đóng lại trước khi mở mới, hoặc bạn có thể dùng trình duyệt khác để mở song song.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: "Thử lại",
                cancelButtonText: "Thoát"
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
                        var ww = window.open('https://hrm.dnd.vn/chamcong', '_self'); ww.close();
                        //window.location.replace('https://hrm.dnd.vn/chamcong');
                    }, 500);
                } else {
                    apisvr.init();
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

                title: "Oops... vượt hơn 30 giây !",
                text: "Nguyên nhân có thể do phần mềm bị lỗi hoặc đường truyền không ổn định. Vui lòng Chờ đợi thêm hoặc khởi động lại phần mềm và thử lại ...",
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Tôi chờ...',
                cancelButtonText: 'Vâng, Khởi động lại !',
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
//</script>