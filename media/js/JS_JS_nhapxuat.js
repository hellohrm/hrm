w0w.tabglobalJS['JS_JS_nhapxuat'] = (function () { // scoping

    "use strict";

    function O(opts) { // constructor

        var _tabId, $mainO,
            evtWK,
            calcSession,
            elUI = {};

        this.init = function (frmEL, cb, tabId, clickArgs, tabProps) {
            //
            _tabId = tabId;
            $mainO = cb('dbEngine');
            //
            var init_dataDIV = frmEL.find('.init_data');
            elUI.lan = JSON.parse(JSON.parse(atob(init_dataDIV.text())).lan);
            init_dataDIV.remove();



            //var iframeWin = frmEL.find("#da-iframe")[0].contentWindow;

            //debugger;
            //frmEL.find("#da-iframe").load(function () {
            //    debugger;
            //    $(this).contents().find("#m_excelEmbedRenderer_m_ewaEmbedViewerBar").css("height", "550px");
            //});

            frmEL.on('shown.bs.tab', function (e) {
                //debugger;
                //iframeWin.postMessage('myMessage.value', "*");

            }).find('[data-lang]').each(function (idx, el) {
                var key = el.getAttribute('data-lang');
                $(el).html(elUI.lan[key]);
            });



            calcSession = new Date().getTime();
            evtWK = document.createElement('iframe');
            evtWK.setAttribute("style", "height:1px;width:1px;border:none;opacity:0");
            //
            evtWK.onload = function () {
                //
                debugger;
                var iDoc = evtWK.contentWindow.document
                    , attcalc = iDoc.createElement('script');

                apisvr.a$.sessions[calcSession] = {
                    id: calcSession,
                    fn: function (a, b, c) {
                        if (a == 'job') {
                            if (b.evtData.messageType == 0) {//calc ready !
                                debugger;
                                //setTimeout(function () {
                                //    iniS3DAT(function (existDAT) {
                                //        d0n();//message thoi ma
                                //        _$$();
                                //    });
                                //});//release handle onmessage
                            };
                        };
                    }
                };
                //
                //
                attcalc.setAttribute('seson', btoa(calcSession + '|' + w0w.location.origin + '|' + (!w0w.Worker || true)));
                //'/media/js/attcalc.js'
                attcalc.setAttribute('src', srcpf$ + "\x2F\x6D\x65\x64\x69\x61\x2F\x6A\x73\x2Fim_nhanvien.js" + src$id);//'https://hrm.dnd.vn'
                iDoc.head.appendChild(attcalc);
                //
                //
            };
            //
          


    



            admin$.DEV(function () {
                //
                debugger;
                //var c=frmEL.find("#da-iframe").contents();
                //var d=c.find("#m_excelEmbedRenderer_m_ewaEmbedViewerBar");
                //
                // div tag in which iframe will be added should have id attribute with value myDIV
                frmEL.find('.im_exfile').prepend(evtWK);//append vao step 3 main div
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