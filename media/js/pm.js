//https://cssminifier.com/
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
                        var elemDiv = document.createElement('div');
                        elemDiv.innerHTML = e.data.substring(6);
                        for (var i = elemDiv.children.length - 1; i > -1 ; i--) {
                            var child = elemDiv.children[i];
                            switch (child.tagName.toLowerCase()) {
                                case 'prehead': {
                                    document.getElementsByTagName('head')[0].innerHTML+=(child.innerHTML);
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
    , addHiddenF = function (n,v) {
        var i = document.createElement("input");
        i.setAttribute("type", "hidden");
        i.setAttribute("name", n);
        i.setAttribute("value", v);
        return i;
    }
    return {
        //main function to initiate template pages
        init: function () {

            var div = document.createElement('div');
            div.innerHTML = '<div id="helloguy" class="ekko-lightbox-loader"><div style="width:200px;height:200px;margin-top:-70px"><img width="150px" src="https://hrm.dnd.vn/media/images/hello.gif" /></div></div>';
            document.body.appendChild(div);

            // assign event handlers for onload and onmessage events
            if (window.addEventListener) {
                window.addEventListener('message', _hwndMessage, false);
            } else if (window.attachEvent) { // ie8
                window.attachEvent('onmessage', _hwndMessage);
            };
            //debugger;
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
            iniF.setAttribute('action', whoareu + '/hole?XDEBUG_SESSION_START=154A5348&t=' + new Date().getTime());
            //
            $ifm = ifrm.contentWindow;
            //
            ifrm.onload = function () {
                xfrmhwnd = setTimeout(xfrmorigin, 5000);
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