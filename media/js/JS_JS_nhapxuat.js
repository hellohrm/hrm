w0w.tabglobalJS['JS_JS_nhapxuat'] = (function () { // scoping

    "use strict";

    function O(opts) { // constructor

        var _tabId, $mainO,
            elUI = {};

        this.init = function (frmEL, cb, tabId, clickArgs, tabProps) {
            //
            _tabId = tabId;
            $mainO = cb('dbEngine');
            //
            var init_dataDIV = frmEL.find('.init_data');
            elUI.lan = JSON.parse(JSON.parse(atob(init_dataDIV.text())).lan);
            init_dataDIV.remove();

            frmEL.on('shown.bs.tab', function (e) {
                debugger;
            }).find('[data-lang]').each(function (idx, el) {
                var key = el.getAttribute('data-lang');
                $(el).html(elUI.lan[key]);
            });

            admin$.DEV(function () {
                //
  
                //
                srclocked(false);
                //
            });
        };



        this.dispose = function () {
            //
            //if (spread) spread.destroy();
            //
            $("#tabBODY_" + _tabId).trigger('dispose');
            //
            //var dogID = w0w.dynload.indexOf('gc.spread.excelio.min.js');
            //if (dogID && dogID > -1) {
            //    w0w.dynload.splice(dogID, 1);
            //};
            //
        };
    };


    return O;

})();