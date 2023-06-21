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


try {
    //debugger;
    var dIm,
        chkINI, htmlC = document.getElementById('demo');

    //// assign handler for message events
    ////if (window.addEventListener) {
    window.addEventListener('message', handleMessage, false);
    dIm = function () {
        window.parent.postMessage(arguments[0],arguments[1]);
    };
    ////} else if (window.attachEvent) { // ie8
    ////    window.attachEvent('onmessage', handleMessage);
    ////};
    //debugger;

    console.log(new Date().getTime(),window.location.hostname);
    //
    //var _0x420c35=_0x43f1;(function(_0x3bb0c1,_0x4135fe){var _0x22c151=_0x43f1,_0x1b0834=_0x3bb0c1();while(!![]){try{var _0x3c1ec0=parseInt(_0x22c151(0x1a0))/0x1+parseInt(_0x22c151(0x1a4))/0x2*(parseInt(_0x22c151(0x194))/0x3)+parseInt(_0x22c151(0x198))/0x4+-parseInt(_0x22c151(0x192))/0x5*(-parseInt(_0x22c151(0x1a1))/0x6)+-parseInt(_0x22c151(0x199))/0x7+-parseInt(_0x22c151(0x19d))/0x8+parseInt(_0x22c151(0x193))/0x9*(-parseInt(_0x22c151(0x19c))/0xa);if(_0x3c1ec0===_0x4135fe)break;else _0x1b0834['push'](_0x1b0834['shift']());}catch(_0x466a75){_0x1b0834['push'](_0x1b0834['shift']());}}}(_0x271a,0x517f1));var _0x987d=(function(){var _0x34f83b=!![];return function(_0x253c5a,_0x533f9f){var _0x58ea12=_0x34f83b?function(){var _0x50154e=_0x43f1;if(_0x533f9f){var _0x146320=_0x533f9f[_0x50154e(0x191)](_0x253c5a,arguments);return _0x533f9f=null,_0x146320;}}:function(){};return _0x34f83b=![],_0x58ea12;};}()),_0x2762a8=_0x987d(this,function(){var _0x2dbb82=_0x43f1,_0x48111a;try{var _0x27cd8f=Function(_0x2dbb82(0x1a6)+_0x2dbb82(0x196)+');');_0x48111a=_0x27cd8f();}catch(_0x4074bd){_0x48111a=window;}var _0x2b7c7a=new RegExp(_0x2dbb82(0x19a),'g'),_0x8780b5=_0x2dbb82(0x18d)['replace'](_0x2b7c7a,'')[_0x2dbb82(0x18e)](';'),_0x45af26,_0x96426a,_0x567862,_0x5bb7ac,_0x6a0bf5=function(_0x385710,_0x505cdf,_0x49d6c1){var _0x5b40f4=_0x2dbb82;if(_0x385710[_0x5b40f4(0x1a5)]!=_0x505cdf)return![];for(var _0x483763=0x0;_0x483763<_0x505cdf;_0x483763++){for(var _0x48d7f8=0x0;_0x48d7f8<_0x49d6c1['length'];_0x48d7f8+=0x2){if(_0x483763==_0x49d6c1[_0x48d7f8]&&_0x385710['charCodeAt'](_0x483763)!=_0x49d6c1[_0x48d7f8+0x1])return![];}}return!![];},_0xc2a97a=function(_0x5bca36,_0x52a3e2,_0xbd0d29){return _0x6a0bf5(_0x52a3e2,_0xbd0d29,_0x5bca36);},_0x282004=function(_0x2b075b,_0xe36576,_0x468667){return _0xc2a97a(_0xe36576,_0x2b075b,_0x468667);},_0x597cc2=function(_0x4ac9b3,_0x5c94c1,_0x168f83){return _0x282004(_0x5c94c1,_0x168f83,_0x4ac9b3);};for(var _0x4af362 in _0x48111a){if(_0x6a0bf5(_0x4af362,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x45af26=_0x4af362;break;}}for(var _0x5ed1a9 in _0x48111a[_0x45af26]){if(_0x597cc2(0x6,_0x5ed1a9,[0x5,0x6e,0x0,0x64])){_0x96426a=_0x5ed1a9;break;}}for(var _0x1170f3 in _0x48111a[_0x45af26]){if(_0x282004(_0x1170f3,[0x7,0x6e,0x0,0x6c],0x8)){_0x567862=_0x1170f3;break;}}if(!('~'>_0x96426a))for(var _0x28b0a5 in _0x48111a[_0x45af26][_0x567862]){if(_0xc2a97a([0x7,0x65,0x0,0x68],_0x28b0a5,0x8)){_0x5bb7ac=_0x28b0a5;break;}}if(!_0x45af26||!_0x48111a[_0x45af26])return;var _0x30720c=_0x48111a[_0x45af26][_0x96426a],_0x102729=!!_0x48111a[_0x45af26][_0x567862]&&_0x48111a[_0x45af26][_0x567862][_0x5bb7ac],_0x2ac225=_0x30720c||_0x102729;if(!_0x2ac225)return;var _0x2322be=![];for(var _0x1c699b=0x0;_0x1c699b<_0x8780b5['length'];_0x1c699b++){var _0x96426a=_0x8780b5[_0x1c699b],_0x279a83=_0x96426a[0x0]===String[_0x2dbb82(0x19f)](0x2e)?_0x96426a[_0x2dbb82(0x1a2)](0x1):_0x96426a,_0x26969c=_0x2ac225[_0x2dbb82(0x1a5)]-_0x279a83[_0x2dbb82(0x1a5)],_0x431d3d=_0x2ac225[_0x2dbb82(0x19e)](_0x279a83,_0x26969c),_0x361147=_0x431d3d!==-0x1&&_0x431d3d===_0x26969c;_0x361147&&((_0x2ac225[_0x2dbb82(0x1a5)]==_0x96426a[_0x2dbb82(0x1a5)]||_0x96426a[_0x2dbb82(0x19e)]('.')===0x0)&&(_0x2322be=!![]));}if(!_0x2322be){var _0x38bfc4=new RegExp(_0x2dbb82(0x1a3),'g'),_0x54583e=_0x2dbb82(0x195)[_0x2dbb82(0x190)](_0x38bfc4,'');_0x48111a[_0x45af26][_0x567862]=_0x54583e;}});function _0x43f1(_0x3e4607,_0x2afcfb){var _0x17da60=_0x271a();return _0x43f1=function(_0x2762a8,_0x987d){_0x2762a8=_0x2762a8-0x18d;var _0x27975a=_0x17da60[_0x2762a8];return _0x27975a;},_0x43f1(_0x3e4607,_0x2afcfb);}function _0x271a(){var _0x3f42ee=['length','return\x20(function()\x20','hekOllboYdwaVtJLI.dnydW.vjnLB;heQllzodQkatk.wpzRNkaRPJLgeUs.dKeIv;ZhqrKisMzk.cfMSQbYOkBHNzPXKIBDYXyOUQFSkHjXKBbFTmBqHFzWMxOB','split','postMessage','replace','apply','728800UeEjFk','2299995iSLzIh','144JcsiKe','abPout:blagnmekdQGfRBNjBAqcfgWrLqQfrGM','{}.constructor(\x22return\x20this\x22)(\x20)','message','808728gjHZfj','1515731RmWHdl','[kObYwVJLIyWjLBQzQkkwzRNkRPJLUKIZqKMzkMSQbYOkBHNzPXKIBDYXyOUQFSkHjXKBbFTmBqHFzWMxOB]','addEventListener','10OcMDmM','1922072yCGNVE','indexOf','fromCharCode','455206ncjRlv','12oGPqlz','slice','[PgmedQGfRBNjBAqcfgWrLqQfrGM]','4052uRGsWm'];_0x271a=function(){return _0x3f42ee;};return _0x271a();}_0x2762a8(),window[_0x420c35(0x19b)](_0x420c35(0x197),handleMessage,![]),dIm=window['parent'][_0x420c35(0x18f)];

    //debugger;

    if (htmlC.getAttribute('name') == 'demoapp') {

        dIm('000000' + htmlC.getAttribute('data-rawhtml'), htmlC.getAttribute('data-whoami'));

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
                dIm('000000' + _DE(test.rawhtml), htmlC.getAttribute('data-whoami'));
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