//https://skalman.github.io/UglifyJS-online/
//https://javascriptobfuscator.com/Javascript-Obfuscator.aspx
//https://obfuscator.io/
var ver = '1.03', w0w = window, st = function (a, k, p) {
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
            script.setAttribute("src", url);
        } else if (filetype == "css") {
            script = document.createElement("link");
            script.setAttribute("rel", "stylesheet");
            script.setAttribute("type", "text/css");
            script.setAttribute("href", url);
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
        }
        head.appendChild(script);
    }
}
, cok = function (a, b, u) {
    u = u || 'Date';
    st.hn = w0w.location.hostname;
    var exdate = new Date(); exdate['set' + u](exdate['get' + u]() + b);
    document.cookie = a + '; domain=' + (/^((\d){1,3}\.){3}(\d){1,3}$/.test(st.hn) ? '' : '.') + st.hn.replace('www.', '') + (w0w.location.protocol.indexOf('https:') >= 0 ? '; SameSite=None; Secure' : '') + '; expires=' + exdate.toUTCString();
}
, gcok = function (name) {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}
, gQRY = function (url) {
    var rst = {};
    var ps = decodeURIComponent(url).split(/\?|\&/);
    ps.forEach(function (it) {
        if (it) {
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
    var l = { '1': 'encodeURIComponent', '2': 'decodeURIComponent', 3: 'tinhcong', '4': window.location.hostname };
    return l.hasOwnProperty(n) ? l[n] : n;
}

, apisvr = function () {
    "use strict";
    var _$id = 'getElementById', whoami = w0w.location.origin, whoareu = ''
    , $ifm, xfrmhwnd, xfrmorigin = function () {
        //
        if (!xfrmhwnd) return;
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
        } else if (whoareu.indexOf(e.origin) > -1) {
            if (typeof e.data === 'string') {
                var msgtype = e.data.substring(0, 6);//get first 5 chars
                switch (msgtype) {
                    case '000000': case '000001': {
                        clearTimeout(xfrmhwnd); xfrmhwnd = null; xfrmorigin = null;//cleartimeout ko an thua gi ca, phai set NULL
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
    , dupw = function () {
        //https://www.jqueryscript.net/other/Prevent-Webpage-Opened-Multiple-Tabs-duplicateWindow.html
        var tout = (5) * 1000; // 15,000 milliseconds = 15 seconds.
        var reInterval = (8 / 2) * 1000; // 10,000 milliseconds = 10 seconds.
        var tKey = 'hellohrm-browser-tab';
        //var beforePostGUID = document.querySelector('meta[name="beforetab"]')
        ////
        //if (beforePostGUID) {
        //    debugger;
        //    beforePostGUID = beforePostGUID.content;
        //} else {
        //    beforePostGUID = '';
        //};


        var ItemType = {
            Session: 1,
            Local: 2
        };

        function GetItem(itemtype) {
            var val = "";
            switch (itemtype) {
                case ItemType.Session:
                    val = w0w.name;
                    break;
                case ItemType.Local:
                    val = gcok(tKey);//decodeURIComponent(getCookie(tKey));
                    if (val == undefined)
                        val = "";
                    break;
            }
            return val;
        }

        function SetItem(itemtype, val) {
            switch (itemtype) {
                case ItemType.Session:
                    w0w.name = val;
                    break;
                case ItemType.Local:
                    //setCookie(tKey, val);
                    cok(tKey + "=" + (val || ""));
                    break;
            }
        }

        function createGUID() {
            var s4 = function () {
                return Math.floor((1 + Math.random()) * 0x10000)
                  .toString(16)
                  .substring(1);
            };
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }

        function _IfDup() {
            var sessionGuid = GetItem(ItemType.Session) || createGUID();
            SetItem(ItemType.Session, sessionGuid);
            var val = GetItem(ItemType.Local);
            try { val = JSON.parse(val); } catch (err) { val = ''; };
            var tabObj = (val == "" ? null : val) || null;
            //
            //console.log('1 :' + (tabObj === null));
            //if (tabObj) {
            //    console.log('2 :' + (tabObj.timestamp < (new Date().getTime() - tout)));
            //    console.log('22 :' + (tabObj.timestamp > (new Date().getTime() - tout)));
            //};
            //if (tabObj) {
            //    console.log('3 :' + (tabObj.guid === sessionGuid));
            //    console.log('tabObj.guid :' + tabObj.guid);
            //    console.log('sessionGuid :' + sessionGuid);
            //    console.log('beforePostGUID :' + beforePostGUID);
            //}
            //
            if (tabObj === null || (tabObj.timestamp < (new Date().getTime() - tout)) || tabObj.guid === sessionGuid) {
                function setTabObj() {
                    var newTabObj = {
                        guid: sessionGuid,
                        timestamp: new Date().getTime()
                    };
                    SetItem(ItemType.Local, JSON.stringify(newTabObj));
                }
                setTabObj();
                setInterval(setTabObj, reInterval);
                return false;
            } else {
                return true;
            }
        }

        function OnBeforeUnLoad() {
            if (_IfDup() == false) {
                SetItem(ItemType.Local, "");
            }
        }
        w0w.addEventListener("beforeunload", OnBeforeUnLoad, false);

        return {
            IsDup: function () { return false; }// _IfDup
        }
    }()
    , _pm = function () {
        //
        isST = w0w.localStorage;
        //
        // assign event handlers for onload and onmessage events
        if (w0w.addEventListener) {
            w0w.addEventListener('message', _hwndMessage, false);
        } else if (w0w.attachEvent) { // ie8
            w0w.attachEvent('onmessage', _hwndMessage);
        };
        //
        var ifrm = document[_$id]('poorway'), _sgi = ifrm.getAttribute('name'), _whoami
            , dataIFRsrc = gcok('_IWKFHTBZ'),pages_dev = ifrm.getAttribute('pages-dev')
            , lan = gcok("selected_language"), clipSetting = gcok(window[st0('1')](btoa('clip-setting')));

        if (!lan) {
            lan = qryU['lan'];
            if (lan && lan != '') {
                lan = (lan == 'VN') ? 'vi' : 'en';
                cok("selected_language=" + lan, 365);
            };
        };
        if (!lan) lan = 'vi';
        //
        if (pages_dev!=null && !dataIFRsrc ) {//online landing page
            //
            srcpf$ = "https://hrm.dnd.vn";srcp$f = 'https://hellohrm.github.io/utils';
            lanjs = 'html';
            //
            if (pages_dev == '') { whoareu = window.location.origin } else { whoareu = window.location.protocol + "//" + pages_dev };
            ifrm.onload = function () {
                $ifm = ifrm.contentWindow;
            };
            setTimeout(function () {
                //ifrm.src = "http://192.168.1.91:10996/timeSRC/timeSRC/odat/" + lan + "/hole.html";
                ifrm.src = whoareu + "/odat/" + lan + "/hole.html";
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
            if (whoareu == '') { whoareu = w0w.location.origin } else { whoareu = w0w.location.protocol + "//" + whoareu };
            //
            var IW = st('getItem', 'IWKFHTBZ');
            //cloudflare landing page user login ok -> se mang ve 1 dia chi cua host phuc vu cho user nay!
            if ((pages_dev != null || _whoami.name == 'pages-dev') && dataIFRsrc) {
                pages_dev = atob(gcok('pages.dev-demo'));
                if (pages_dev) {
                    if (pages_dev == '') { whoareu = window.location.origin } else { whoareu = window.location.protocol + "//" + pages_dev };
                    //post truc tiep qua hole , o do se xu ly may ????
                    iniF.appendChild(addHiddenF('diesvr', dataIFRsrc));
                    if (IW) iniF.appendChild(addHiddenF('IWKFHTBZ', IW));
                };
            } else if (iniF.name === '1') { //login via php host
                //iniF.setAttribute('action', whoareu + '/dangnhap?XDEBUG_SESSION_START=154A5348&t=' + new Date().getTime());
                if (IW) iniF.appendChild(addHiddenF('IWKFHTBZ', IW));
            };
            //
            _whoami.name = 'whoami';
            //
            iniF.setAttribute('action', whoareu + '/hole?XDEBUG_SESSION_START=154A5348&t=' + new Date().getTime());
            //
            _a$.mainHole = whoareu;
            $ifm = ifrm.contentWindow;
            //
            //
            if (!_sgi) {// co tai khoan thi ko chay lung tung
                ifrm.onload = function () {
                    xfrmhwnd = setTimeout(xfrmorigin, 5000);
                };
            };
            //
            //
            setTimeout(function () {
                document.createElement('form').submit.call(iniF);
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
        setTimeout(function () {
            _gsC(srcpf$ + '/media/css/hellohrm.css', 'css', function () { });
            _gsC(srcpf$ + '/media/vendor/chrome-tabs/js/chrome-tabs.js', 'js', function () { });
            _gsC(srcpf$ + '/media/css/vendors.bundle.min.css', 'css', function () { });
            _gsC(srcpf$ + '/media/css/theme.bundle.min.css', 'css', function () { });
            _gsC(srcpf$ + '/media/css/themes/' + cS$.t + '.min.css', 'css', function () { }, 'skin_color');
        }, 10);
    }
    return {
        init: function () {
            if (dupw.IsDup()) {
                //debugger;
                try {
                    _gsC('https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.js', 'js', function () {
                        _gsC('https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.css', 'css', function () {
                            _gsC('/dupbrowsertab_lanjs.php?k=1&XDEBUG_SESSION_START=154A5348', 'js', function () {

                            });
                        }, 'sweetalert2.min.css');
                    }, 'sweetalert2.min.js');
                    return;
                } catch (err) {
                    console.log('close err');
                }
            } else {
                _pm();
            }
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
    t: 'theme-' + (qryU['defth'] || '5'),//theme
}
, admined = function () {
    //khi load xong admin form thi se modify login click
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
apisvr.init();
if (w0w.history.replaceState) {//clear post form resubmission on page refresh
    w0w.history.replaceState(null, null, w0w.location.href);
};



