(function () {


    debugger;
    //
    var dog = document.querySelectorAll('body > div');
    if (dog.length > 0) document.body.removeChild(dog[0]);
    //
    //
    debugger;
    //
    var dat = atob(window.location.search.split('?seson=')[1]).split('|')
        , session = dat[0]
        , orgMsg = dat[1];
    //
    //
    //
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



    //**************************** post load *********************************************//
    window.parent.postMessage({ 'msgtype': 'session', 'msgkind': session, 'evtData': { messageType: 0 } }, orgMsg);




    //**************************** LOAD IF *********************************************//
    //function my_code() {
    //    console.log(" working");
    //}
    //var iframe = document.createElement("iframe");
    //iframe.src = "http://java2s.com";
    //document.body.appendChild(iframe);
    //iframe.onload = my_code;




})();
