function gethtml(e_source, e_origin, form_data, uri) {
    var ajaxsession = '0';
    // Post form data

    var lg='vi',//default cloudflare template page folder vi
        method = window.location.pathname.indexOf('/odat/') > -1 ? (lg=form_data.selected_language, 'GET') : 'POST',
        post_data = new FormData(), tabpage = "/TabPageData";
    //
    for (var key in form_data) {
        if (key == 'tabId' && method == 'GET') {
            tabpage = lg + '/' + form_data[key] + '.html';
        } else if (key == 'ajaxsession') {
            ajaxsession = form_data[key];
        } else {
            post_data.append(key, form_data[key]);
        };
    };
    //
    //
    //
    var xhr = new XMLHttpRequest(),
        cb = function (args) { e_source.postMessage(args, e_origin); };
    xhr.open(method, (!uri ? tabpage /* old:"/TabPageData" */ : uri) + "?XDEBUG_SESSION_START=154A5348", true);
    //xhr.open('POST', (!uri ? "/TabPageData" : uri) + "?XDEBUG_SESSION_START=154A5348", true);
    //
    //
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Get the response
            cb({ 'msgtype': 'newTabPage','ajaxsession':ajaxsession, 'kq': 'resolve', 'result': xhr.response });
        } else {
            //update khi liwayway project registration tra ve status text la code language
            cb({ 'msgtype': 'newTabPage', 'ajaxsession': ajaxsession, 'kq': 'reject', 'result': JSON.stringify({status: xhr.status, statusText: xhr.statusText, response:  xhr.response}) });// xhr.statusText });// xhr.status + " - " + xhr.statusText + '|' + xhr.response
        }
    };
    xhr.upload.addEventListener("progress", function (evt) {
        if (evt.lengthComputable) {
            //var width = Math.round((evt.loaded / evt.total) * 100);
            //progress_bar.style.width = width + '%';
            //loading_text.innerHTML = width * 1 + '%';
        }
    }, false);
    xhr.onerror = function () {
        //update khi liwayway project registration tra ve status text la code language
        cb({ 'msgtype': 'newTabPage', 'ajaxsession': ajaxsession, 'kq': 'reject', 'result': JSON.stringify({ status: xhr.status, statusText: xhr.statusText, response: xhr.response }) });// xhr.status + " - " + xhr.statusText + '|' + xhr.response
    };

    //*******neu muon send json string to server
    ////////xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    ////////xhr.send(JSON.stringify(form_data));

    //*******neu muon send json object to serve

    /*
    var post_data = new FormData();
    for (var key in form_data) {
        if (key == 'ajaxsession') {
            ajaxsession = form_data[key];
        } else {
            post_data.append(key, form_data[key]);
        };
    };
    xhr.send(post_data);
    */


    if (method == 'GET') {
        xhr.send();
    } else {
        xhr.send(post_data);
    };

};
//function reloadhole(data) {
//    document.open();
//    document.write(data['doc']);
//    document.close();
//    document.getElementById('demoForm').setAttribute('action', data['url']);
//    document.getElementById('whoami').setAttribute("value", data['whoami']);
//    document.getElementById('submitBtn').click();
//};

// event handler for postMessage
function handleMessage(e) {
    if (e.data['act'] == 'reloadhole') {
        setTimeout(function () { reloadhole(e.data); }, 1);
    } else {
        setTimeout(function () {new gethtml(e.source, e.origin, e.data, e.data.uri); }, 1);
    };
}
// assign handler for message events
if (window.addEventListener) {
    window.addEventListener('message', handleMessage, false);
} else if (window.attachEvent) { // ie8
    window.attachEvent('onmessage', handleMessage);
};

try {
    //debugger;
    var chkINI, htmlC = document.getElementById('demo');
    if (htmlC.getAttribute('name') == 'demoapp') {
        window.parent.postMessage('000000' + htmlC.getAttribute('data-rawhtml'), htmlC.getAttribute('data-whoami'));
    } else {
        var _DE = function (html) {
            var txt = document.createElement("textarea");
            txt.innerHTML = html;
            return txt.value;
        }, _postMessage = function (args) {
            var test = JSON.parse(args.result);
            if (test.ui !== 'demoapp') {
                setTimeout(chkINI, 500);
            } else {
                window.parent.postMessage('000000' + _DE(test.rawhtml), htmlC.getAttribute('data-whoami'));
            };
        };
        chkINI = function () {
            new gethtml({
                postMessage: _postMessage
            }, "", { 'chk_ini_status': htmlC.getAttribute('name'), 'diesvr': htmlC.getAttribute('data-rawhtml') }, '/hole');
        };
        setTimeout(chkINI, 500);
    };
    document.getElementsByTagName("html")[0].remove();
} catch (err) { };