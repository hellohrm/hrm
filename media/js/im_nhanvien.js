(function () {

    debugger;

    var session = '0'
    , orgMsg = '*'
    //, Dy = parent.dayjs
    , srpt = document.getElementsByTagName("script");




    for (var i = 0; i < srpt.length; i++) {
        var dat = srpt[i].getAttribute('seson');
        if (dat) {
            dat = atob(dat).split('|');
            session = dat[0];
            orgMsg = dat[1];
            //
        }
    };
    //**************************** post load *********************************************//
    window.parent.postMessage({ 'msgtype': 'session', 'msgkind': session, 'evtData': { messageType: 0 } }, orgMsg);



    function hwndMsg(evt) {
        //debugger;
        var message;
        if (evt.origin !== "https://robertnyman.com") {
            message = "You are not worthy";
        }
        else {
            message = "I got " + evt.data + " from " + evt.origin;
        }
        document.getElementById("received-message").innerHTML = message + new Date().getTime();
    };

    if (window.addEventListener) {
        // For standards-compliant web browsers
        window.addEventListener("message", hwndMsg, false);
    }
    else {
        window.attachEvent("onmessage", hwndMsg);
    };



})();