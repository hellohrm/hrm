"use strict";
var session = '0', orgMsg = '*', Dy = parent.dayjs
, srpt = document.getElementsByTagName("script")
, calcTerminate = false
//
/** giong ben iframeattlog.html */
, chanelLog
, chanelDeffered = null
, cbHwnd
, doDelay = function (e) {
    if (e.origin.indexOf(chanelLog[1].addr) > 0) {
        chanelLog[1].origin = e.origin;
        if (cbHwnd && typeof cbHwnd === "function") cbHwnd(e.data.evtData);
    };
}
/** giong ben iframeattlog.html */
//
, hwndMsg = function (e) {
    //
    if (e.data.messageType===undefined) { // se ko co tham so nay
        if (e.data.evtData.evt == "s3_tinhcong_hole") {
            if (!chanelLog) {
                chanelDeffered = [doDelay, e];
            } else {
                doDelay(e);
            };
        };
    } else {
        if (e.data.messageType == '0') {
            //
            calcTerminate = false;
            new attTiCo(event.data);
            //
        } else if (e.data.messageType == '-9999') {//calcTerminate

            calcTerminate = true;
            //console.log('calcTerminate');

        } else {
            //setTimeout(function () { new gethtml(e.source, e.origin, e.data, e.data.uri); }, 1);
        };
    }
}
, attTiCo = function (args) {
    //
    //console.log(args.a.acno);
    //
    var _wait = function (time) {
        return new Promise(function (resolve) {
            if (time > 0) {
                setTimeout(function () { resolve("result"); }, time);
            } else {
                resolve("result");
            };
        });
    }
    , aRST = []
    , calEMP = function () {

        var j = 0, runI = args.runI
        , a = args.a
        , delay = args.delay
        , loc = args.loc
        , eachATT = function () {
            _wait(delay).then(function (e) {

                var eachE = {
                    "id": runI - j,
                    "acno": a.acno,
                    "ten": a.ten,
                    "ngay": new Date(new Date(a.aLogs[j]).setHours(0, 0, 0, 0)),
                    "thu": a.aLogs[j].toLocaleString(loc, { weekday: 'short' }),
                    'fio1': a.aLogs[j],
                    "TongTG": 2,
                }
                aRST.push(eachE);
                //
                for (var k = j + 1; k < a.aLogs.length; k++) {
                    //
                    if (calcTerminate) {
                        //console.log('for (var k = j + 1; k < a.aLogs.length; k++) {');
                        return;
                    };
                    //
                    if (Dy(a.aLogs[j]).format('YYYY-MM-DD') == Dy(a.aLogs[k]).format('YYYY-MM-DD')) {//equal date
                        //
                        eachE['fio' + eachE.TongTG] = a.aLogs[k];
                        eachE.TongTG++;
                        //
                    } else {
                        j = k - 1; break;
                    };
                    j = k;
                };
                //
                //
                console.log(' window.parent.postMessage: ' + new Date().getTime());
                window.parent.postMessage({ 'msgtype': 'session', 'msgkind': session, 'evtData': { messageType: "0", data: { acno: a.acno, p: Math.round((j + 1) / a.aLogs.length * 100) } } }, orgMsg);
                console.log(' window.parent.postMessage rsult: ' + new Date().getTime());
                //
                j++;

                doLOOP();

            });
        }
        , doLOOP = function () {

            if (calcTerminate) {
                //console.log('doLOOP');
                return;
            };

            if (j < a.aLogs.length) {
                eachATT();
            } else {
                window.parent.postMessage({ 'msgtype': 'session', 'msgkind': session, 'evtData': { messageType:1, data: aRST } }, orgMsg);
            };
        };
        //
        doLOOP();
        //
    }();
};


for (var i = 0; i < srpt.length; i++) {
    var dat = srpt[i].getAttribute('seson');
    if (dat) {
        dat = atob(dat).split('|');
        session = dat[0];
        orgMsg = dat[1];
    }
};

console.log("window.parent.postMessage({ 'msgtype': 'session', 'msgkind': session, 'evtData': { messageType: 0 } }, orgMsg);");
window.parent.postMessage({ 'msgtype': 'session', 'msgkind': session, 'evtData': { messageType: 0 } }, orgMsg);

if (window.addEventListener) {
    window.addEventListener('message', hwndMsg, false);
} else if (window.attachEvent) { // ie8
    window.attachEvent('onmessage', hwndMsg);
};



//var idoc = window
//    , h0s = 'local.hrweb4.cf' + '/api/uploadattlog?XDEBUG_SESSION_START=154A5348'
//    , ifrm = idoc.document.createElement('iframe')
//, Ihid = function () {
//    var re = '';
//    //for (var k in ua) {
//    //    if (ua.hasOwnProperty(k)) {
//    //        re += '<input type="hidden" name="' + k + '" value="' + ua[k] + '"/>';
//    //    };
//    //};
//    return re;
//};
////
//ifrm.setAttribute('style', 'opacity:0;border:none;width:1px;height:1px;position:absolute;');
////
//idoc.document.body.appendChild(ifrm);
////
//var buildFuck = function () {
//    ifrm.onload = function () {
//        debugger;
//    }
//    var te = ifrm.contentWindow.document;

//    var div = te.createElement("div");
//    div.innerHTML = '<form method="post" name="demoForm" id="demoForm">' +
//                Ihid() +
//        '<input type="submit" id="submitBtn" style="position:absolute;left:-1000px;"/></form>';
//    te.body.appendChild(div.firstChild);
//    //
//    te.getElementById('demoForm').action = 'http:' + "//" + h0s;
//    //
//    te.getElementById('submitBtn').click();
//};
////
//ifrm.onload = function () {
//    debugger;
//    buildFuck();
//};

