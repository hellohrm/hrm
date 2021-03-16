//https://skalman.github.io/UglifyJS-online/
//https://javascriptobfuscator.com/Javascript-Obfuscator.aspx
var ver = '1.03', st = function (a, k, p) {
    if (!isST) return;
    if (!p) {
        return isST[a](st0(k));
    } else {
        isST[a](st0(k), p);
    };
}
, _gsC = function (url, filetype, success, id) {
    var script, head = document.getElementsByTagName('head')[0], done = false;
    if (id && id != '' && window.dynload && window.dynload.indexOf(id) > -1) {
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
        if (id) { script.setAttribute("id", id); if (!window.dynload) window.dynload = []; window.dynload.push(id); };
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
            // window.location.replace( '//' + ((window.location.hostname.indexOf('www.') > -1) ? 'www.' : '') + 'hrpro.cf/unluckyday');
        }
        head.appendChild(script);
    }
}
, cok = function (a, b) {
    var exdate = new Date(); exdate.setDate(exdate.getDate() + b);
    document.cookie = a + '; domain=' + (/^((\d){1,3}\.){3}(\d){1,3}$/.test(window.location.hostname) ? '' : '.') + window.location.hostname.replace('www.', '') + (window.location.protocol.indexOf('https:') >= 0 ? '; SameSite=None; Secure' : '') + '; expires=' + exdate.toUTCString();
}
,gcok=function(name) {
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
    var ps = url.split(/\?|\&/);
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
}, isST, srcpf$
, st0 = function (n) {
    var l = { '1': 'encodeURIComponent', '2': 'decodeURIComponent', 3: 'tinhcong' };
    return l.hasOwnProperty(n) ? l[n] : n;
}
, apisvr = function () {
    "use strict";
    var _$id = 'getElementById', whoami = window.location.origin, whoareu = ''
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
            var ifrm = document[_$id]('poorway'), _whoareu = whoareu.replace(window.location.protocol + "//", ''), elemDiv = document.createElement('div');
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
                        var loader_cogs=document.getElementById('loader_cogs');
                        if (loader_cogs) loader_cogs.parentNode.removeChild(loader_cogs);
                        //
                        var elemDiv = document.createElement('div');
                        elemDiv.innerHTML = e.data.substring(6);
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
                        dopostqueue["newTabPage"](e.data);
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
            alert('test override from outside purpose');
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
            if (id && id != '' && window.dynload && window.dynload.indexOf(id) > -1) {

            } else {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                //script.id = 'remove-' + new Date().getTime();
                if (typeof child === 'string') {
                    script.innerHTML = child;
                } else {
                    script.innerHTML = child.innerHTML;
                };
                document.body.appendChild(script);
                if (id) { if (!window.dynload) window.dynload = []; window.dynload.push(id); };
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
        console.log(data.msgtype + ';' + data.msgkind);
        switch (data.msgkind) {
            case 'mouseEVT': {
                var triggerEVT = document.createEvent('MouseEvents'), e = data.evtData;
                triggerEVT.initEvent('mousedown', false, false);
                document.dispatchEvent(triggerEVT);
                //$('body').trigger('click'); $('a.dropdown-toggle').blur();
                //$(document).trigger("mousedown touchstart");
                $(document).trigger('click.bs.dropdown.data-api', { causeby: 'ifrmTab' });

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
        $ifm.postMessage({ 'act': 'reloadhole', 'doc': ifrm.getAttribute('data-src'), 'url': whoareu + '/hole?' + new Date().getTime(), 'whoami': window.location.href }, whoareu);
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
        var reInterval = (6 / 2) * 1000; // 10,000 milliseconds = 10 seconds.
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
                    val = window.name;
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
                    window.name = val;
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
            var tabObj = (val == "" ? null : JSON.parse(val)) || null;
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
            if (tabObj === null || (tabObj.timestamp < (new Date().getTime() - tout)) || tabObj.guid === sessionGuid ) {
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
        window.addEventListener("beforeunload", OnBeforeUnLoad, false);

        return {
            IsDup: _IfDup
        }
    }()
    , _pm = function () {
        var div = document.createElement('div');
        div.innerHTML = '<div id="helloguy" class="ekko-lightbox-loader"><div style="width:200px;height:200px;margin-top:-70px"><img width="150px" src="https://hrm.dnd.vn/media/images/hello.gif" /></div></div>';
        document.body.appendChild(div);

        // assign event handlers for onload and onmessage events
        if (window.addEventListener) {
            window.addEventListener('message', _hwndMessage, false);
        } else if (window.attachEvent) { // ie8
            window.attachEvent('onmessage', _hwndMessage);
        };
        var ifrm = document[_$id]('poorway'), doc = ifrm.contentWindow.document;
        doc.open();
        doc.write(ifrm.getAttribute('data-src'));
        doc.close();
        var _whoami = doc[_$id]('whoami'); whoareu = _whoami.getAttribute('data-whoareu'); srcpf$ = _whoami.getAttribute('data-prefixsrc');
        _whoami.setAttribute("value", window.location.href);
        if (whoareu == '') { whoareu = window.location.origin } else { whoareu = window.location.protocol + "//" + whoareu };
        _a$.mainHole = whoareu; isST = window.localStorage;
        var iniF = doc['getElementsByTagName']('form')[0];
        iniF.method = "post";
        iniF.appendChild(addHiddenF('selected_language', gcok("selected_language")));
        //
        if (doc[_$id]('diesvr').name == 'token') {
            iniF.setAttribute('action', whoareu + '/dangnhap?XDEBUG_SESSION_START=154A5348&t=' + new Date().getTime());
        }else{
            iniF.setAttribute('action', whoareu + '/hole?XDEBUG_SESSION_START=154A5348&t=' + new Date().getTime());
        };
        //
        $ifm = ifrm.contentWindow;
        //
        ifrm.onload = function () {
            //xfrmhwnd = setTimeout(xfrmorigin, 5000);
        };
        setTimeout(function () {
            document.createElement('form').submit.call(iniF);
            //doc[_$id]('submitBtn').click();
        }, 1);
        //
        if (isST && st('getItem', 'ver') != ver) {
            st('clear');
            st('setItem', 'ver', ver);
        };
    }
    return {
        init: function () {
            if (dupw.IsDup()) {
                debugger;
                try {
                    _gsC('https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.js', 'js', function () {
                        _gsC('https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.css', 'css', function () {
                            _gsC('/dupbrowsertab_lanjs.php?XDEBUG_SESSION_START=154A5348', 'js', function () {

                            });
                        });
                    });
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
}();
apisvr.init();
if (window.history.replaceState) {//clear post form resubmission on page refresh
    window.history.replaceState(null, null, window.location.href);
};