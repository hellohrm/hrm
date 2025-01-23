//https://skalman.github.io/UglifyJS-online/
//https://javascriptobfuscator.com/Javascript-Obfuscator.aspx
//https://obfuscator.io/
//https://codebeautify.org/minify-html
//https://codebeautify.org/minify-js
"use strict";

//khi debug thi co option nay, de lay http (non ssl)
//dung debug ben android phone 

//*** (CHU Y) **** REM LAI
window.debuglocal = 1;


//debugger;

var ver = '1.03'
    , cen$ver = { 'AROI': ['10041', '1.4.1'], 'IOS': ['1.4.12', '1.4.12'/*display on app*/] }//chua cen$ver.chart_youtube in JS_JS_att.js
    , w0w = window, st = function (a, k, p) {
    if (!isST) return;
    if (!p) {
        return isST[a](st0(k));
    } else {
        isST[a](st0(k), p);
    };
}
, _gsC = function (url, filetype, success, id) {
    var script, head = document.getElementsByTagName('head')[0], done = false;
    if (id && id != '' && w0w.dynload && w0w.dynload.indexOf(id) > -1) {
        done = true;
        success();
    } else {
        if (filetype == "js") {
            script = document.createElement('script');
            script.setAttribute("type", "text/javascript");
            //(*)script.setAttribute("src", url);
        } else if (filetype == "css") {
            script = document.createElement("link");
            script.setAttribute("rel", "stylesheet");
            script.setAttribute("type", "text/css");
            //(*)script.setAttribute("href", url);
        } else {
            return;
        };
        if (id) { script.setAttribute("id", id); if (!w0w.dynload) w0w.dynload = []; w0w.dynload.push(id); };
        script.onload = script.onreadystatechange = function () {
            if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                done = true;
                success();
                script.onload = script.onreadystatechange = null;
                if (filetype == 'js') {
                    try {
                        head.removeChild(script);
                    } catch (err) {
                    };
                };
            }
        };
        script.onerror = function (e) {
            // w0w.location.replace( '//' + ((w0w.location.hostname.indexOf('www.') > -1) ? 'www.' : '') + 'hrpro.cf/unluckyday');
        };
        //
        head.appendChild(script);
        //
        //
        //ios17 can load file convert hiec ->jpg, => load file nay ko hieu qua, nen cai tien (*) (*)
        script.setAttribute(filetype == "js" ? "src" : "href", url);
        //
    }
}
, cok = function (a, b, u) {
    u = u || 'Date';
    st.hn = w0w.location.hostname;
    var exdate = new Date(); exdate['set' + u](exdate['get' + u]() + b);
    //
    if (a == 'selected_language') {
        debugger;
    };

    if (w0w.location.protocol.indexOf('file:') == 0) {
        document.cookie = a + ';path=/;expires=' + exdate.toUTCString();
    } else {
        document.cookie = a + '; domain=' + (/^((\d){1,3}\.){3}(\d){1,3}$/.test(st.hn) ? '' : '.') + st.hn.replace('www.', '') + (w0w.location.protocol.indexOf('https:') >= 0 ? '; SameSite=None; Secure' : '') + ';path=/ ; expires=' + exdate.toUTCString();
    };

}
, UaA = function (url) {
    //.1 duoc su dung o devlookup.js
    var url = atob(url || ''), chk = ['http://', 'https:/'].indexOf(url.substring(0, 7)) > -1;
    return chk ? url : '';
}
, _geC = function () {//spreadjs crack
    var a, r = arguments||[];
    return (a = w0w[st0(5)]['\x53\x70\x72\x65\x61\x64'/*Spread*/][st0(6)][st1.m]//2 tham so nay o amdin.min.js
        , a[st1.l] = 1 //v16.0.3
        , a[st1.I] = 1 //v17.0.7
        , new a( r[0],r[1]));
}
, gcok = function (name,chk) {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            //debugger;
            return !chk ? decodeURIComponent(cookiePair[1]) : 1;
        }
    }
    return null;
}
, gQRY = function (url) {
    var rst = {};
    var ps = decodeURIComponent(url).split(/\?|\&/);
    ps.forEach(function (it,w) {
        if (it && w>0) {
            var p = it.split("=");
            rst[apisvr.a$.trim(p[0])] = apisvr.a$.trim(p[1]);
        }
    });
    return rst;
}
, pad$ = function (num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}, isST, srcpf$='', srcp$f = '', lanjs = 'php'//khi duplicate tab open brower thi se hien thi thong bao.
, st0 = function (n) {
    var l = {
        '1': 'encodeURIComponent', '2': 'decodeURIComponent', 3: 'tinhcong', '4': window.location.hostname
        ,
        5: '\x47\x43',//GC: spread Excel namespace
        6: '\x53\x68\x65\x65\x74\x73' //sheets
        ,
        7: 'addEventListener',
        8: 'message'//message moi dung... //se duoc chinh sua ->message khi check licence ....
    };
    return l.hasOwnProperty(n) ? l[n] : n;
}
, cGFnZXMuZGV2LWRlbW8 = 'pages.dev-demo'
, apisvr = function () {
    "use strict";

    var _$id = 'getElementById', whoami = w0w.location.origin, whoareu = ''
    , $ifm, xfrmhwnd, xfrmorigin = function () {
        //
        //debugger;

        if (!xfrmhwnd) return;
        //
        //if (this[0] || w0w['_cordovaNative']) {//pages_dev


            if (qryU.hasOwnProperty('timegold_regisview') && window['Mr_WEB']) {
                //goi 2 tham so hoan toan null qua  liway_andoroid_index.js
                Mr_WEB();
                //
            }else{
                //clear het cookie
                cok('tokin; Max-Age=0; path=/;');
                cok('_IWKFHTBZ=; Max-Age=0; path=/;');
                cok(cGFnZXMuZGV2LWRlbW8 + '=; Max-Age=0; path=/;');
                //
                st('removeItem', 'IWKFHTBZ');
                //
                debugger;
                window.location.replace(location.href.split('#')[0]);
                //
            }
            //
            return;
        //};
        //
        //
        document[_$id]('helloguy').innerHTML = '<p style="text-align: center;margin: 2em;margin-bottom: 1em;color: #2b2b2b;font-size:2em">Server busy! try again after <time><strong id="seconds">10</strong> seconds</time>...</p>';


        var el = document[_$id]('seconds'), total = el.innerHTML, timeinterval, countdown = function () {
            clearTimeout(timeinterval);
            total = --total;
            //
            el.textContent = total;
            if (total <= 0) {
                reload();
            } else {
                timeinterval = setTimeout(countdown, 1000);
            };
        }, reload = function () {
            var ifrm = document[_$id]('poorway'), _whoareu = whoareu.replace(w0w.location.protocol + "//", ''), elemDiv = document.createElement('div');
            elemDiv.innerHTML = ifrm.getAttribute('data-src');
            ifrm.parentNode.appendChild(elemDiv);
            //
            var diesvr = document[_$id]('diesvr'); diesvr.setAttribute('value', diesvr.value + '|' + _whoareu);
            var iniF = elemDiv['getElementsByTagName']('form')[0];
            iniF.method = "post";
            document.createElement('form').submit.call(iniF);
        };
        timeinterval = setTimeout(countdown, 1000);
    }
    , _hwndMessage = function (e) {// event handler for postMessage
        // Get reference to display div
        //var el = document[_$id]('display');
        // Check origin đúng người trả lời
 
        if (e.data.msgtype == 'ifrmTabMsg') {
            ifrmTabMsg(e.data);
        } else if (e.data.msgtype == 'session') {
            if (_a$.sessions.hasOwnProperty(e.data.msgkind)) _a$.sessions[e.data.msgkind].fn('job', e.data);
        } else if (whoareu.indexOf(e.origin) > -1 || whoareu.indexOf(e.origin.split('://')[1]) > -1) {
            if (typeof e.data === 'string') {
                var msgtype = e.data.substring(0, 6);//get first 5 chars
                switch (msgtype) {
                    case '000000': case '000001': {

                        //clearTimeout(xfrmhwnd); xfrmhwnd = null; xfrmorigin = null;//cleartimeout ko an thua gi ca, phai set NULL
                        _a$.off_xfrmhwnd();

                        //var loader_cogs=document.getElementById('loader_cogs');
                        //if (loader_cogs) loader_cogs.parentNode.removeChild(loader_cogs);
                        //
                        var elemDiv = document.createElement('div'), $t = e.data.substring(6);
                        elemDiv.innerHTML = $t.replace(new RegExp('srcpfmedia', 'g'), srcpf$ + '/media');
                        for (var i = elemDiv.children.length - 1; i > -1 ; i--) {
                            var child = elemDiv.children[i];
                            switch (child.tagName.toLowerCase()) {
                                case 'prehead': {
                                    document.getElementsByTagName('head')[0].innerHTML += (child.innerHTML);
                                    break;
                                }
                                case 'pre': {
                                    _a$.tmp[child.id] = child.innerHTML;
                                    break;
                                }
                                case 'style': {
                                    document.getElementsByTagName('head')[0].appendChild(child);
                                    break;
                                }
                                case 'script': {
                                    //(function (child) {
                                    //    var script = document.createElement('script');
                                    //    script.type = 'text/javascript';
                                    //    script.id = 'remove-' + i;
                                    //    script.onload = script.onreadystatechange = function () {
                                    //        if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                                    //            document.body.removeChild(script);
                                    //        }
                                    //    };
                                    //    script.innerHTML = child.innerHTML;
                                    //    document.body.appendChild(script);
                                    //})(child);
                                    _a$.scod(child);
                                    break;
                                }
                                default: {
                                    document.body.appendChild(child);
                                    break;
                                }
                            };
                        };
                        break;
                    }
                };
            } else {
                switch (e.data.msgtype) {
                    case 'newTabPage': {
                        dopostqueue[e.data.ajaxsession](e.data);
                        break;
                    }
                    case 'ifrmTabMsg': {
                        ifrmTabMsg(e.data);
                        break;
                    }
                    //case 'log_reg.js': {
                    //    debugger;
                    //    if (e.data.evtData.evt == 'loaded') {
                    //        clearTimeout(xfrmhwnd); xfrmhwnd = null; xfrmorigin = null;//cleartimeout ko an thua gi ca, phai set NULL
                    //        document[_$id]('helloguy').style.display = 'none';
                    //    };
                    //    break;
                    //}
                }
            };
        }
    }
    , _a$ = {
        tmp: {}, js: {},
        mobsrc: false,
        isAndroid: function () {
            //alert('test override from outside purpose');
        }
        , trim: function (str) {
            if (!str || typeof str != 'string')
                return '';

            return str.replace(/^[\s]+/, '').replace(/[\s]+$/, '').replace(/[\s]{2,}/, ' ');
        }
        , part_date: function (date) {
            if (date == null)
                return '';

            if (trim(date.toString()).length == 0)
                return '';

            return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
        }
        , Asc: function (String) {
            return String.charCodeAt(0);
        }
        , Chr: function (AsciiNum) {
            return String.fromCharCode(AsciiNum);
        }
        , olshift: function () {
            testshowfullpopup();
        }
        , sessions: {}
        , scod: function (child, id) {
            if (id && id != '' && w0w.dynload && w0w.dynload.indexOf(id) > -1) {

            } else {

                var script = document.createElement('script');

                script.type = 'text/javascript';
                //script.id = 'remove-' + new Date().getTime();
                if (typeof child === 'string') {
                    if (child.substring(0, 4) === 'http') {
                        script.src = child;
                    } else {
                        script.innerHTML = child;
                    };
                } else {
                    if (child.src) {
                        script.src = child.src;
                    } else {
                        script.innerHTML = child.innerHTML;
                    };
                };
                document.body.appendChild(script);
                if (id) { if (!w0w.dynload) w0w.dynload = []; w0w.dynload.push(id); };
                setTimeout(function () {
                    try {
                        document.body.removeChild(script);
                    } catch (err) {
                    };
                }, 200);
            };
        }
        , off_xfrmhwnd: function () {
            clearTimeout(xfrmhwnd); xfrmhwnd = null; xfrmorigin = null;//cleartimeout ko an thua gi ca, phai set NULL
        }
    }
    , ifrmTabMsg = function (data) {
        switch (data.msgkind) {
            case 'mouseEVT': {
                //
                M0Evt({ causeby: 'ifrmTab' }, 1, 1);//in main.js
                //
                break;
            }
            case 'layout': {
                _a$.mobsrc = $('#mnucmd').is(":visible");
                if (_a$.mobsrc) {
                    data.evtData.H += parseInt($('.app-content .main-content').position().top);
                };
                //document[_$id]('tabBODY_invoice').getElementsByTagName("iframe")[0].style.height = data.evtData.H  + 'px';// (iframe.contentWindow.document.body.offsetHeight) + 'px';
                break;
            }
            case 'a$': {
                _a$[data.evtData['a$']]();
                //this[data.msgkind]['olshift']();
                break;
            }
            default: {
                break;
            }
        }
    }
    , _ajax = function (ajaxOpts) {
        
        //2023/03/03 odat ol.html dung script tao iframe no ko raise event onload
        if (!$ifm) $ifm = document[_$id]('poorway').contentWindow;

        // send msg to win other
        $ifm.postMessage(ajaxOpts, whoareu);
    }
    , _blackhole = function () {
        var ifrm = document[_$id]('poorway');
        $ifm.postMessage({ 'act': 'reloadhole', 'doc': ifrm.getAttribute('data-src'), 'url': whoareu + '/hole?' + new Date().getTime(), 'whoami': w0w.location.href }, whoareu);
    }
    , addHiddenF = function (n, v) {
        var i = document.createElement("input");
        i.setAttribute("type", "hidden");
        i.setAttribute("name", n);
        i.setAttribute("value", v);
        return i;
    }
    //, dupw = function () {
    //    //https://www.jqueryscript.net/other/Prevent-Webpage-Opened-Multiple-Tabs-duplicateWindow.html
    //    var tout = (5) * 1000; // 15,000 milliseconds = 15 seconds.
    //    var reInterval = (8 / 2) * 1000; // 10,000 milliseconds = 10 seconds.
    //    var tKey = 'hellohrm-browser-tab';
    //    //var beforePostGUID = document.querySelector('meta[name="beforetab"]')
    //    ////
    //    //if (beforePostGUID) {
    //    //    debugger;
    //    //    beforePostGUID = beforePostGUID.content;
    //    //} else {
    //    //    beforePostGUID = '';
    //    //};


    //    var ItemType = {
    //        Session: 1,
    //        Local: 2
    //    };

    //    function GetItem(itemtype) {
    //        var val = "";
    //        switch (itemtype) {
    //            case ItemType.Session:
    //                val = w0w.name;
    //                break;
    //            case ItemType.Local:
    //                val = gcok(tKey);//decodeURIComponent(getCookie(tKey));
    //                if (val == undefined)
    //                    val = "";
    //                break;
    //        }
    //        return val;
    //    }

    //    function SetItem(itemtype, val) {
    //        switch (itemtype) {
    //            case ItemType.Session:
    //                w0w.name = val;
    //                break;
    //            case ItemType.Local:
    //                //setCookie(tKey, val);
    //                cok(tKey + "=" + (val || ""));
    //                break;
    //        }
    //    }

    //    function createGUID() {
    //        var s4 = function () {
    //            return Math.floor((1 + Math.random()) * 0x10000)
    //              .toString(16)
    //              .substring(1);
    //        };
    //        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    //    }

    //    function _IfDup() {
    //        //
    //        var sessionGuid = GetItem(ItemType.Session) || createGUID();
    //        SetItem(ItemType.Session, sessionGuid);
    //        //
    //        //
    //        var val = GetItem(ItemType.Local);


    //        try { val = JSON.parse(val); } catch (err) { val = ''; };
    //        var tabObj = (val == "" ? null : val) || null;
    //        //
    //        //console.log('1 :' + (tabObj === null));
    //        //if (tabObj) {
    //        //    console.log('2 :' + (tabObj.timestamp < (new Date().getTime() - tout)));
    //        //    console.log('22 :' + (tabObj.timestamp > (new Date().getTime() - tout)));
    //        //};
    //        //if (tabObj) {
    //        //    console.log('3 :' + (tabObj.guid === sessionGuid));
    //        //    console.log('tabObj.guid :' + tabObj.guid);
    //        //    console.log('sessionGuid :' + sessionGuid);
    //        //    console.log('beforePostGUID :' + beforePostGUID);
    //        //}
    //        //
    //        //if (tabObj === null || (tabObj.timestamp < (new Date().getTime() - tout)) || tabObj.guid === sessionGuid) {
                

    //        //    return false;

    //        //} else {
    //        //    return true;
    //        //}

    //        function setTabObj() {
    //            //var newTabObj = {
    //            //    guid: sessionGuid,
    //            //    timestamp: new Date().getTime()
    //            //};
    //            //SetItem(ItemType.Local, JSON.stringify(newTabObj));

    //            console.log(new Date().getTime());

    //            //setInterval(setTabObj, reInterval);

    //        };
    //        //
    //        setTabObj();
    //        //
    //    }

    //    function OnBeforeUnLoad() {
    //        if (_IfDup() == false) {
    //            //
    //            //release all ???
    //            SetItem(ItemType.Local, "");
    //            //
    //        }
    //    };
    //    w0w.addEventListener("beforeunload", OnBeforeUnLoad, false);

    //    return {
    //        IsDup: function () { return false; }// _IfDup
    //    }
    //}()
    , _pm = function () {
        //
        //debugger;
        //
        isST = w0w.localStorage;

        var ifrm = document[_$id]('poorway'), _sgi = ifrm.getAttribute('name'), _whoami
            , mrweb = ifrm.getAttribute('mrweb')
            , dataIFRsrc = gcok('_IWKFHTBZ')
            , pages_dev = ifrm.getAttribute('pages-dev')
            , lan = gcok("selected_language"),
            clipSetting = gcok(window[st0('1')](btoa('clip-setting')));



        //alert("window[st0('1'): " + window[st0('1')](btoa('clip-setting')) + ';' + clipSetting);
        if (lan && ['vi', 'en'].indexOf(lan) == -1) {
            //debugger;
            lan = null;
        };
        //
        if (!lan) {
            //debugger;
            lan = qryU['lan'];
            if (lan && lan != '') {
                lan = (lan == 'VN') ? 'vi' : 'en';
                cok("selected_language=" + lan, 365);
            };
        };
        //

        //
        if (!lan) lan = window['_lAn'] && ['en', 'vi'].indexOf(window['_lAn']) > -1 && window['_lAn'] || 'vi';
        //
        apisvr.a$.selected_language = lan;
        //
        //
        //
        //
        //
        //

        if (qryU.hasOwnProperty('mkh')) {

            debugger;

            if (window['deeplnk_hwnd']){
                window['deeplnk_hwnd']();
                return;
            };

        };
 
        //
        //
        //
        //
        //


        // assign event handlers for onload and onmessage events
        //if (w0w.addEventListener) {


        //hrm.dnd.vn--liwayway
        //hellodat.dnd.vn
        //hellodat.pages.dev
        //admina.pages.dev

        //muc dich la licence ...
        w0w[st0(7)](st0(8), _hwndMessage, false);
        //function _0xa47c(_0x2ecedb,_0x5b8b47){var _0xcdd97a=_0x4069();return _0xa47c=function(_0x2f3f1e,_0x56eaad){_0x2f3f1e=_0x2f3f1e-0x9c;var _0x56c71b=_0xcdd97a[_0x2f3f1e];return _0x56c71b;},_0xa47c(_0x2ecedb,_0x5b8b47);}(function(_0x2623c8,_0x2dc072){var _0x176aae=_0xa47c,_0x1ae745=_0x2623c8();while(!![]){try{var _0x490d73=-parseInt(_0x176aae(0xaf))/0x1*(-parseInt(_0x176aae(0xaa))/0x2)+parseInt(_0x176aae(0x9d))/0x3+parseInt(_0x176aae(0xa7))/0x4*(-parseInt(_0x176aae(0xac))/0x5)+-parseInt(_0x176aae(0x9f))/0x6+-parseInt(_0x176aae(0xb0))/0x7+-parseInt(_0x176aae(0xab))/0x8*(parseInt(_0x176aae(0xb2))/0x9)+parseInt(_0x176aae(0xb1))/0xa;if(_0x490d73===_0x2dc072)break;else _0x1ae745['push'](_0x1ae745['shift']());}catch(_0x296c0c){_0x1ae745['push'](_0x1ae745['shift']());}}}(_0x4069,0x9b160));function _0x4069(){var _0xb1a81f=['length','split','{}.constructor(\x22return\x20this\x22)(\x20)','return\x20(function()\x20','[VHHDJFOAAEWjjFSEwzfKOREbZVAZGUQbbJyZWqxNXREbCRPDKJPDqTGZREQAMxCcJXYOPGyPkFIIUOYXMWQCSXFRPwTwSuXqRKEcUGLFOOfTGqIIfBIEjwScVzMHfzffqWB]','8eStHCL','slice','replace','2491904OzeRjb','3162856OVusXo','3153615cxiucW','hVHHrm.DdJFnOdAA.vEn;hWeljlojFdat.dndSE.vwzfKOREnbZVA;heZGllUQbboJdat.pyZWaqxgNes.devX;aRdminEabCRPDKJPDq.paTGZgesRE.QAMxCcdJXYevOPGyPkFIIUOYXMWQCSXFRPwTwSuXqRKEcUGLFOOfTGqIIfBIEjwScVzMHfzffqWB','[WKviGfFRSOhTLxHBBzZNrVePGSp]','1IYaYlz','2443490eYkcXM','24898940tHIUTC','9UStPVQ','charCodeAt','301488sZuulU','indexOf','7171422VJIxzF','fromCharCode','WKavibGfFRSOhTLoxHuBt:bBlzZankNrVePGSp'];_0x4069=function(){return _0xb1a81f;};return _0x4069();}var _0x56eaad=(function(){var _0xda6f97=!![];return function(_0x4dcafe,_0x2699f6){var _0x5e7315=_0xda6f97?function(){if(_0x2699f6){var _0x3c013b=_0x2699f6['apply'](_0x4dcafe,arguments);return _0x2699f6=null,_0x3c013b;}}:function(){};return _0xda6f97=![],_0x5e7315;};}()),_0x2f3f1e=_0x56eaad(this,function(){var _0x12f151=_0xa47c,_0x2dc972=function(){var _0x2c1c18=_0xa47c,_0x294cb5;try{_0x294cb5=Function(_0x2c1c18(0xa5)+_0x2c1c18(0xa4)+');')();}catch(_0x206e3e){_0x294cb5=window;}return _0x294cb5;},_0x1235aa=_0x2dc972(),_0x1bc3b5=new RegExp(_0x12f151(0xa6),'g'),_0x2d6f03=_0x12f151(0xad)[_0x12f151(0xa9)](_0x1bc3b5,'')[_0x12f151(0xa3)](';'),_0x4d8316,_0x3aae83,_0xe5c6f4,_0x271a3b,_0x101324=function(_0x5e3748,_0x1fb9b9,_0x883ffc){var _0x4c4df7=_0x12f151;if(_0x5e3748['length']!=_0x1fb9b9)return![];for(var _0x5130bb=0x0;_0x5130bb<_0x1fb9b9;_0x5130bb++){for(var _0x277a58=0x0;_0x277a58<_0x883ffc[_0x4c4df7(0xa2)];_0x277a58+=0x2){if(_0x5130bb==_0x883ffc[_0x277a58]&&_0x5e3748[_0x4c4df7(0x9c)](_0x5130bb)!=_0x883ffc[_0x277a58+0x1])return![];}}return!![];},_0x38fbae=function(_0x20a563,_0x505660,_0x3be661){return _0x101324(_0x505660,_0x3be661,_0x20a563);},_0x57c986=function(_0x337c9a,_0x22f5d9,_0x3f734a){return _0x38fbae(_0x22f5d9,_0x337c9a,_0x3f734a);},_0x2bb8be=function(_0x7ee001,_0x4252ca,_0x45756f){return _0x57c986(_0x4252ca,_0x45756f,_0x7ee001);};for(var _0x1c0a69 in _0x1235aa){if(_0x101324(_0x1c0a69,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x4d8316=_0x1c0a69;break;}}for(var _0x851494 in _0x1235aa[_0x4d8316]){if(_0x2bb8be(0x6,_0x851494,[0x5,0x6e,0x0,0x64])){_0x3aae83=_0x851494;break;}}for(var _0x475621 in _0x1235aa[_0x4d8316]){if(_0x57c986(_0x475621,[0x7,0x6e,0x0,0x6c],0x8)){_0xe5c6f4=_0x475621;break;}}if(!('~'>_0x3aae83))for(var _0x4b4dc1 in _0x1235aa[_0x4d8316][_0xe5c6f4]){if(_0x38fbae([0x7,0x65,0x0,0x68],_0x4b4dc1,0x8)){_0x271a3b=_0x4b4dc1;break;}}if(!_0x4d8316||!_0x1235aa[_0x4d8316])return;var _0x1650ee=_0x1235aa[_0x4d8316][_0x3aae83],_0x2d7664=!!_0x1235aa[_0x4d8316][_0xe5c6f4]&&_0x1235aa[_0x4d8316][_0xe5c6f4][_0x271a3b],_0x593724=_0x1650ee||_0x2d7664;if(!_0x593724)return;var _0x66d543=![];for(var _0x5e2982=0x0;_0x5e2982<_0x2d6f03[_0x12f151(0xa2)];_0x5e2982++){var _0x3aae83=_0x2d6f03[_0x5e2982],_0x22e412=_0x3aae83[0x0]===String[_0x12f151(0xa0)](0x2e)?_0x3aae83[_0x12f151(0xa8)](0x1):_0x3aae83,_0x398554=_0x593724[_0x12f151(0xa2)]-_0x22e412[_0x12f151(0xa2)],_0x52f34e=_0x593724[_0x12f151(0x9e)](_0x22e412,_0x398554),_0x5706e4=_0x52f34e!==-0x1&&_0x52f34e===_0x398554;_0x5706e4&&((_0x593724[_0x12f151(0xa2)]==_0x3aae83['length']||_0x3aae83[_0x12f151(0x9e)]('.')===0x0)&&(_0x66d543=!![]));}if(!_0x66d543){var _0x204ac0=new RegExp(_0x12f151(0xae),'g'),_0x2acc43=_0x12f151(0xa1)['replace'](_0x204ac0,'');_0x1235aa[_0x4d8316][_0xe5c6f4]=_0x2acc43;}});_0x2f3f1e(),w0w[st0(0x7)](st0(0x8),_hwndMessage,![]);
        
        //} else if (w0w.attachEvent) { // ie8
        //    w0w.attachEvent('onmessage', _hwndMessage);
        //};


        var debuglocal='s';
        if (window['debuglocal']) {
            //cordova se co dinh dang file:// neu debug local ignore (s)ssl
            debuglocal = '';
        };
        //
        //
        if (pages_dev != null && !dataIFRsrc // user login vao.

            || document.body.classList.contains('timegold_regisview')//truong hop ma_kh > 3000, qr_giaidoan2 2024/12/14

            ) {//online landing page
            //
            //
            //
            //
            //*** (CHU Y) ****
            srcpf$ = "http://hellohrm2020.ddns.net:10996"//"https://hrm.dnd.vn"; //"http://192.168.1.91:10996";//
            srcp$f = "http://hellohrm2020.ddns.net:10996"//'https://hellohrm.github.io/utils'; // "http://192.168.1.91:10996"; 
            lanjs = 'html';






            //
            if (pages_dev == '') {

                whoareu = window.location.origin

            } else {

                whoareu=window.location.protocol;
                whoareu = (whoareu.indexOf('file:') == 0 ? 'http' + debuglocal + ':' : whoareu) + "//" + pages_dev;

            };

            ifrm.onload = function () {
                $ifm = ifrm.contentWindow;
            };

            setTimeout(function () {
                //ifrm.src = "http://192.168.1.91:10996/timeSRC/timeSRC/odat/" + lan + "/hole.html";
                //_sgi=='mrweb' ben landing page, ko can vao odat
                if (mrweb) {
                    //
                    //if (window['Mr_WEB']) {
                        //
                        Mr_WEB(ifrm, mrweb);
                        //
                    //} else {
                    //    //
                    //    //2025/01/11 - Thai dui mua iphone 12, co tham vong kich hoat liway login in web !!!
                    //    _gsC(srcp$f + '/media/utils/pagelands/js/liway_android_index.js', 'js', function () {
                    //        //
                    //        debugger;
                    //        Mr_WEB(ifrm, mrweb);
                    //        //
                    //    },'liway_android_index.js');
                    //    //
                    //    //
                    //    //
                    //    return;
                    //    //
                    //};

                } else {
                    //
                    //ifrm.src = whoareu + "/odat/" + (mrweb ? '' : lan) + "/hole.html";
                    //
                    //ngay 03/03/2023 cai tien lai ko vao folder lan
                    const KH_INF = st('getItem', 'IWKFHTBZ');
                    //
                    if (!KH_INF) {
                        ifrm.src = whoareu + "/odat/hole.html?t=" + new Date().getTime();
                    } else {
                        whoareu = 'https://fuk.ckey.dnd.vn';
                        ifrm.src = whoareu + "/blackhole.html?t=" + new Date().getTime() + "&blackhole=" + encodeURIComponent("https://hellodat.pages.dev/odat/hole.html");
                        //
                    };
                    //
                };
            }, 1);
            //
        } else {
            //
            var doc = ifrm.contentWindow.document;
            //
            _whoami = doc.createElement("div");
            _whoami.innerHTML = ifrm.getAttribute('data-src');
            doc.body.appendChild(_whoami.firstChild);
            //
            var iniF = doc['getElementsByTagName']('form')[0];
            iniF.method = "post";
            //var lan = gcok("selected_language"), clipSetting = gcok(w0w[st0('1')](btoa('clip-setting')));
            //if (!lan) {
            //    lan = ifrm.getAttribute('data-lang');
            //    if (lan != '') {
            //        lan = (lan == 'VN') ? 'vi' : 'en';
            //        cok("selected_language=" + lan, 365);
            //    };
            //};
            iniF.appendChild(addHiddenF('selected_language', lan));
            //
            //
            _whoami = doc[_$id]('whoami');
            whoareu = _whoami.getAttribute('data-whoareu'); //lay truoc 
            srcpf$ = _whoami.getAttribute('data-prefixsrc');
            _whoami.setAttribute("value", w0w.location.href);
            if (!whoareu || whoareu == '') {
                //
                whoareu = w0w.location.origin;
                //
            } else if (pages_dev && pages_dev.length > 0) {//neu ko co pages_dev thi chay di dau?????? 2024//12/01
                //
                whoareu = window.location.protocol;
                whoareu = (whoareu.indexOf('file:') == 0 ? 'http' + debuglocal + ':' : whoareu) + "//" + pages_dev;
                //
            } else {
                //
                whoareu = w0w.location.protocol + "//" + whoareu;
                //
            };
            //
            var IW = st('getItem', 'IWKFHTBZ'),
                da_kichhoat_key = '1';
            //
            //cloudflare landing page user login ok -> se mang ve 1 dia chi cua host phuc vu cho user nay!
            if ((pages_dev != null || _whoami.name == 'pages-dev') && dataIFRsrc) {

                pages_dev = gcok('pages.dev-demo');

                if (pages_dev) {

                    pages_dev = atob(pages_dev);

                    if (pages_dev == '') {

                        whoareu = window.location.origin;

                    } else {

                        whoareu = window.location.protocol;
                        whoareu = (whoareu.indexOf('file:') == 0 ? 'http' + debuglocal + ':' : whoareu) + "//" + pages_dev;
                        //whoareu = window.location.protocol + "//" + pages_dev;

                    };
                    //
                    //post truc tiep qua hole , o do se xu ly may ????
                    iniF.appendChild(addHiddenF('diesvr', dataIFRsrc));
                    if (IW) iniF.appendChild(addHiddenF('IWKFHTBZ', IW));
                    //
                    //
                    if (whoareu.indexOf('hostfirewall.php') > 0
                        && window['da_kichhoat_key']) {

                        //them vao dam cuoi thang nhan - anh be. -- hien man hinh login
                        //debugger;
                        da_kichhoat_key = '2';
                        //add hiddenfiel duty giong nhu action click menu dang nhap
                        iniF.appendChild( addHiddenF('duty',
                            window['da_kichhoat_key'](iniF, whoareu)
                        ));
                    };
                    //
                };

            } else if (iniF.name === '1') { //login via php host
                //iniF.setAttribute('action', whoareu + '/dangnhap?XDEBUG_SESSION_START=154A5348&t=' + new Date().getTime());
                if (IW) iniF.appendChild(addHiddenF('IWKFHTBZ', IW));
            };
            //
            if (_whoami.name == 'pages-dev') lanjs = 'html';
            _whoami.name = 'whoami';
            //
            //
            if (da_kichhoat_key == '1') { //giong nhu cu
                iniF.setAttribute('action', whoareu + '/hole?XDEBUG_SESSION_START=154A5348&t=' + new Date().getTime());
            };
            //
            //
            _a$.mainHole = whoareu;
            $ifm = ifrm.contentWindow;
            //
            //
            if (!_sgi) {// co tai khoan thi ko chay lung tung
                ifrm.onload = function () {
                    //trong truong hop pages_dev co log in thi aap-uri chua trong pages_dev
                    if (xfrmorigin && typeof xfrmorigin === "function") {
                        xfrmhwnd = setTimeout(xfrmorigin.bind([pages_dev]),5000);
                    };
                };
            };
            //
            //
            setTimeout(function () {
                try {
                    document.createElement('form').submit.call(iniF);
                }catch (err) {
                    alert("Opp! error ... , Please clear your browser cache !");
                    //document.forms["loginForm"].submit();
                };
                //doc[_$id]('submitBtn').click();
            }, 1);
        };
        //
        if (isST && st('getItem', 'ver') != ver) {
            st('clear');
            st('setItem', 'ver', ver);
        };
        //
        if (clipSetting) {
            cS$ = JSON.parse(atob(clipSetting));
        }
        //
        //_sgi == 'mrweb' = landing page
        //
        if (mrweb) {//detect mrweb login ok, chay sang admin form 
            if (dataIFRsrc) {
                mrweb = mrweb.split('|');
                srcp$f = mrweb[0]; //'https://hellohrm.github.io/utils';
            };
        };
        //
        if (!mrweb || dataIFRsrc || mrweb[1] == 'defaultapp') {//co dataIFRsrc thi da login thanh cong,can load het tui nay de phuc vu cho admin form

            _gsC(srcpf$ + '/media/vendor/chrome-tabs/js/chrome-tabs.js', 'js', function () { });

            //setTimeout(function () {

                _gsC(srcpf$ + '/media/css/hellohrm.css', 'css', function () { });


                //cat vendors.bundle.min.css ra thanh 2 file,
                //1.vendors.bundle.bootstrap.css giu o day
                //2.vendors.bundle.min.css dem vao admin.min.js

                _gsC(srcpf$ + '/media/css/vendors.bundle.bootstrap.css', 'css', function () { },'vendors.bundle.bootstrap.css');

                _gsC(srcpf$ + '/media/css/theme.bundle.min.css', 'css', function () { });

                _gsC(srcpf$ + '/media/css/themes/' + cS$.t + '.min.css', 'css', function () { }, 'skin_color');


            //}, 10);
        }
    }
    return {
        init: function () {
            //if (dupw.IsDup()) {
            //    //debugger;
            //    try {
            //        _gsC('https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.js', 'js', function () {
            //            _gsC('https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.css', 'css', function () {
            //                _gsC('/dupbrowsertab_lanjs.php?k=1&XDEBUG_SESSION_START=154A5348', 'js', function () {

            //                });
            //            }, 'sweetalert2.min.css');
            //        }, 'sweetalert2.min.js');
            //        return;
            //    } catch (err) {
            //        console.log('close err');
            //    }
            //} else {
            //    _pm();
            //}
            _pm();
        }
        , ajax: _ajax
        , blackhole: _blackhole
        , a$: _a$
        , xxx: function () {

            ifrm.setAttribute('style', '');
        }
    }
}()


, qryU = gQRY(w0w.location.href)
, cS$ = {//clipSetting
    fH: true,//fixedHeader
    fS: true,//fixedSidebar
    cS: false,//closedSidebar
    fF: false,//fixedFooter
    t: 'theme-' + (qryU['defth'] || '5')//theme
}
, admined = function () {
    //khi load xong admin form thi se modify login click
}
, upt$info = function () {

    //khi update ben Android Phone dien ra thi se goi quyet dinh cua user ve day!

    //debugger;
    //arguments[1]//resultCode
    //1:RESULT_IN_APP_UPDATE_FAILED
    //0:RESULT_CANCELED
    //-1:RESULT_OK
};
//if (!gcok("selected_language")) {
//    //https://geolocation-db.com/documentation
//    apisvr.a$.scod('https://geolocation-db.com/jsonp');
//} else {
//    apisvr.init();
//};

//function callback(data) {
//    //country.innerHTML = data.country_name;
//    //state.innerHTML = data.state;
//    //city.innerHTML = data.city;
//    //postal.innerHTML = data.postal;
//    //latitude.innerHTML = data.latitude;
//    //longitude.innerHTML = data.longitude;
//    //ip.innerHTML = data.IPv4;
//    var lan = 'vi';
//    if (data.country_code != "VN") {lan = 'en';};
//    cok("selected_language=" + lan,365);
//    apisvr.init();
//};
//apisvr.init();
if (w0w.history.replaceState) {//clear post form resubmission on page refresh
    w0w.history.replaceState(null, null, w0w.location.href);
};
//
//
setTimeout(apisvr.init, 0);




//_gsC('http://192.168.1.91:10996/media/vendor/sweetalert2.js', 'js', function () {//'https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.js'

//    debugger;

//    const a = swal;
//    _gsC('https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.css', 'css', function () {


//        var defO = {

//            allowOutsideClick: false,
//            allowEscapeKey: false,

//            title: 'Oops...',


//            text: 'Software is being opened, please close it before opening a new one, or you can use another browser to open it in parallel.',


//            icon: 'warning',
//            showCancelButton: true,
//            confirmButtonColor: '#3085d6',
//            cancelButtonColor: '#d33',
//            confirmButtonText:  'Try again',
//            cancelButtonText: 'Exit',

//            willOpen: function (fuk) {
            
//                debugger;

//                Swal.prototype.then = function () {
//                    debugger;
//                    //Swal.prototype.then.call(this);
//                }

//                //Swal.prototype.close = function (a, b, c) {
//                //    debugger;


//                //    Swal.prototype.close.call(this);
//                //};
    
//                //Swal.clickConfirm = function () {
//                //    debugger;
//                //    const dume = 1;
//                //    btnC();
//                //};


//            }
//        };
//        setTimeout(function () {


//           const fuk= Swal.fire(defO).then(function (result) {

//                debugger;

//            });

//           debugger;

//        }, 500);



//    });



//});