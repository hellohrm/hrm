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
    //window.addEventListener('message', handleMessage, false);
    //dIm = function () {
    //    window.parent.postMessage(arguments[0],arguments[1]);
    //};
    ////} else if (window.attachEvent) { // ie8
    ////    window.attachEvent('onmessage', handleMessage);
    ////};
    //debugger;


    var _0x471492=_0x4ccd;(function(_0x47cee9,_0x2b0010){var _0x3cdccd=_0x4ccd,_0x34eeb6=_0x47cee9();while(!![]){try{var _0x5e7e8a=parseInt(_0x3cdccd(0x159))/0x1*(parseInt(_0x3cdccd(0x162))/0x2)+parseInt(_0x3cdccd(0x15b))/0x3*(-parseInt(_0x3cdccd(0x15c))/0x4)+parseInt(_0x3cdccd(0x161))/0x5*(-parseInt(_0x3cdccd(0x167))/0x6)+-parseInt(_0x3cdccd(0x165))/0x7+-parseInt(_0x3cdccd(0x155))/0x8*(parseInt(_0x3cdccd(0x153))/0x9)+-parseInt(_0x3cdccd(0x15a))/0xa*(-parseInt(_0x3cdccd(0x15e))/0xb)+parseInt(_0x3cdccd(0x158))/0xc;if(_0x5e7e8a===_0x2b0010)break;else _0x34eeb6['push'](_0x34eeb6['shift']());}catch(_0x465c86){_0x34eeb6['push'](_0x34eeb6['shift']());}}}(_0x29e3,0xe1c5d));function _0x29e3(){var _0x358144=['1656hFWRma','[EmVCYNWmGAOPqwKFBzyKQuXPMGHNuHYzLjGOwIzIDYywVYMHkOXXRjkCEZLuxWLmTTBzkLKEAQVyWqFQALHXqYISyMj]','11275cpoYUD','addEventListener','postMessage','355sdwDPF','900602IFWpgN','helElmoVCYdaNWt.dmGAOPqwKFnd.BzyKQuvXPMGHn;hNuHYzLjGOwIzeIDllodYat.pywVaYMgHkesOX.dXev;Rhjkris.cfCEZLuxWLmTTBzkLKEAQVyWqFQALHXqYISyMj','[NAzxShqTRgwpjscILSRZxdxRJjL]','1074668wnoPkR','{}.constructor(\x22return\x20this\x22)(\x20)','13878lKSDNi','fromCharCode','replace','charCodeAt','slice','48249cVbQhR','length','8KIVaUa','parent','indexOf','6078528ZSegGz','1BgfIyL','12020cJWtHH','6819wHrlFS'];_0x29e3=function(){return _0x358144;};return _0x29e3();}var _0x14f35a=(function(){var _0x4f8c1a=!![];return function(_0x30a8f5,_0x2be65b){var _0x93d1a1=_0x4f8c1a?function(){if(_0x2be65b){var _0xf976b0=_0x2be65b['apply'](_0x30a8f5,arguments);return _0x2be65b=null,_0xf976b0;}}:function(){};return _0x4f8c1a=![],_0x93d1a1;};}()),_0x20f489=_0x14f35a(this,function(){var _0x4c9e73=_0x4ccd,_0x293137;try{var _0x1731d9=Function('return\x20(function()\x20'+_0x4c9e73(0x166)+');');_0x293137=_0x1731d9();}catch(_0x317750){_0x293137=window;}var _0x4c3b94=new RegExp(_0x4c9e73(0x15d),'g'),_0xd34584=_0x4c9e73(0x163)[_0x4c9e73(0x169)](_0x4c3b94,'')['split'](';'),_0x17a45b,_0x141370,_0x5d3195,_0x950b03,_0x53bd78=function(_0x1e3e83,_0x4b2c14,_0x5d71ae){var _0x95ba05=_0x4c9e73;if(_0x1e3e83[_0x95ba05(0x154)]!=_0x4b2c14)return![];for(var _0x44b96d=0x0;_0x44b96d<_0x4b2c14;_0x44b96d++){for(var _0x3b4ce7=0x0;_0x3b4ce7<_0x5d71ae[_0x95ba05(0x154)];_0x3b4ce7+=0x2){if(_0x44b96d==_0x5d71ae[_0x3b4ce7]&&_0x1e3e83[_0x95ba05(0x16a)](_0x44b96d)!=_0x5d71ae[_0x3b4ce7+0x1])return![];}}return!![];},_0x2866ea=function(_0xb8e92a,_0x470058,_0x5b013a){return _0x53bd78(_0x470058,_0x5b013a,_0xb8e92a);},_0x5b50a2=function(_0x195853,_0xc39103,_0x3a0944){return _0x2866ea(_0xc39103,_0x195853,_0x3a0944);},_0x5d2d64=function(_0x276332,_0x18b81d,_0xf2596){return _0x5b50a2(_0x18b81d,_0xf2596,_0x276332);};for(var _0x4e682e in _0x293137){if(_0x53bd78(_0x4e682e,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x17a45b=_0x4e682e;break;}}for(var _0x36daa3 in _0x293137[_0x17a45b]){if(_0x5d2d64(0x6,_0x36daa3,[0x5,0x6e,0x0,0x64])){_0x141370=_0x36daa3;break;}}for(var _0x3aca63 in _0x293137[_0x17a45b]){if(_0x5b50a2(_0x3aca63,[0x7,0x6e,0x0,0x6c],0x8)){_0x5d3195=_0x3aca63;break;}}if(!('~'>_0x141370))for(var _0x4fb121 in _0x293137[_0x17a45b][_0x5d3195]){if(_0x2866ea([0x7,0x65,0x0,0x68],_0x4fb121,0x8)){_0x950b03=_0x4fb121;break;}}if(!_0x17a45b||!_0x293137[_0x17a45b])return;var _0x50d73b=_0x293137[_0x17a45b][_0x141370],_0x23ef60=!!_0x293137[_0x17a45b][_0x5d3195]&&_0x293137[_0x17a45b][_0x5d3195][_0x950b03],_0x45ac5c=_0x50d73b||_0x23ef60;if(!_0x45ac5c)return;var _0x3ed726=![];for(var _0x2fdaa3=0x0;_0x2fdaa3<_0xd34584['length'];_0x2fdaa3++){var _0x141370=_0xd34584[_0x2fdaa3],_0x2b04d5=_0x141370[0x0]===String[_0x4c9e73(0x168)](0x2e)?_0x141370[_0x4c9e73(0x152)](0x1):_0x141370,_0x40c48c=_0x45ac5c['length']-_0x2b04d5[_0x4c9e73(0x154)],_0x6801b0=_0x45ac5c[_0x4c9e73(0x157)](_0x2b04d5,_0x40c48c),_0x5a112a=_0x6801b0!==-0x1&&_0x6801b0===_0x40c48c;_0x5a112a&&((_0x45ac5c[_0x4c9e73(0x154)]==_0x141370[_0x4c9e73(0x154)]||_0x141370['indexOf']('.')===0x0)&&(_0x3ed726=!![]));}if(!_0x3ed726){var _0x1b5d37=new RegExp(_0x4c9e73(0x164),'g'),_0x1f9cfd='NAazboutx:ShqblaTRnkgwpjscILSRZxdxRJjL'[_0x4c9e73(0x169)](_0x1b5d37,'');_0x293137[_0x17a45b][_0x5d3195]=_0x1f9cfd;}});function _0x4ccd(_0x199b23,_0x3591ee){var _0x4c99ef=_0x29e3();return _0x4ccd=function(_0x20f489,_0x14f35a){_0x20f489=_0x20f489-0x152;var _0x9032d0=_0x4c99ef[_0x20f489];return _0x9032d0;},_0x4ccd(_0x199b23,_0x3591ee);}_0x20f489(),window[_0x471492(0x15f)]('message',handleMessage,![]),dIm=function(){var _0x8d4850=_0x471492;window[_0x8d4850(0x156)][_0x8d4850(0x160)](arguments[0x0],arguments[0x1]);};
    console.log(new Date().getTime(),window.location.hostname);
    //

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