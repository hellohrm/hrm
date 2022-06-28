'use strict';
(function ($) {
    /*
        jquery.slide-transition plug-in
        
              by Rick Strahl, West Wind Technologies, 2014
        

        Requirements:
        -------------
        You'll need to define these two styles to make this work:

       .height-transition {
            -webkit-transition: max-height 0.5s ease-in-out;
            -moz-transition: max-height 0.5s ease-in-out;
            -o-transition: max-height 0.5s ease-in-out;
            transition: max-height 0.5s ease-in-out;
            overflow-y: hidden;            
        }
        .height-transition-hidden {            
            max-height: 0;            
        }

        You need to wrap your actual content that you
        plan to slide up and down into a container. This
        container has to have a class of height-transition
        and optionally height-transition-hidden to initially
        hide the container (collapsed).

        <div id="SlideContainer" 
             class="height-transition height-transition-hidden">
           <div id="Actual">
               Your actual content to slide up or down goes here
           </div>
        </div>

        To call it:
        -----------
        var $sw = $("#SlideWrapper");

        if (!$sw.hasClass("height-transition-hidden"))
            $sw.slideUpTransition();                      
        else 
            $sw.slideDownTransition();
    */
    $.fn.slideUpTransition = function () {
        return this.each(function () {
            var $el = $(this);
            $el.css("max-height", "0");
            $el.addClass("height-transition-hidden");
        });
    };

    $.fn.slideDownTransition = function (clsT) {
        return this.each(function () {
            var $el = $(this);
            $el.removeClass("height-transition-hidden").addClass(clsT);

            // temporarily make visible to get the size
            $el.css("max-height", "none");
            var height = $el.outerHeight();

            // reset to 0 then animate with small delay
            $el.css("max-height", "0");

            setTimeout(function () {
                $el.css({
                    "max-height": height
                });
            }, 1);
        });
    };

    $.fn['\x02'] = function (el, t, o, c) {//keo ra day debug
        //function nay dung de bat cau cho $.fn['\x02\x03\x04']
        //muc dich gan vao extend jquery la de su dung bind ho nhieu muc dich.
        //gio con de o day, la vi khi dua ra thuc te se obfucator...
        //
        var na = this, rt = [], ct = 'charCodeAt', cc = 'fromCharCode', Sn = 'substring', _O = 'indexOf',//result
        _ec = function (a, p) {//encode
            var r = [], l = p.length;
            for (var i = 0  ; i < a.length ; i++) {
                var fs = i % l, ii = (a[ct](i) + p[ct](fs));
                r.push(String[cc](ii));
            }
            return r.join('');//JSON.stringify(result);
        }
        , zk = []//zk luu giu cac dynamic script 
        , ri = "\x73\x63\x72\x69\x70\x74";//script

        while (t[_O]("<" + ri) > -1 || t[_O]("</" + ri) > -1) {
            var s = t[_O]("<" + ri),
                s_e = t[_O](">", s),
                e = t[_O]("</" + ri, s),
                e_e = t[_O](">", e),
                id = $(t[Sn](s, s_e + 1)).attr('id'),
                srp = t[Sn](s_e + 1, e);

            if (id) {
                try {
                    var    //decode base64g(w0w["\x73\x74"].h, i)
                       s3 = atob(id).split(_ec(w0w["\x73\x74"].h, na)),//window.location.hostname
                       l0 = s3[0].slice(-1),//xor_key last char index-0 of array
                       f0 = Number(s3[s3.length - 1][Sn](0, 2)),//fist char last-index of array
                       d = s3[s3.length - 1].substr(2, f0),//data 2 ky tu dau danh dau length
                       v = '';

                    for (var i = 0; i < d.length; i++) {
                        v += String[cc](l0 ^ d[ct](i));//'\\x' +  (l0 ^ d[ct](i)).toString(16);//.toUpperCase(); //String[cc](l0 ^ d[ct](i)).toString(16);
                    };
                    ///
                    //               v = plain.split("").map(c => c.charCodeAt(0).toString(16).padStart(2, "0"))
                    //.join("");
                    //srp = srp.replace('];(fu', '];(function(_){if(!' + na + '["' + v + '"])' + na + '["' + v + '"]=_();})(fu');
                    d = "_0x000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
                    srp = srp.replace('];(fu', '];var ' + d + '=(fu');
                    zk.push(d); zk.push(v);
                }
                catch (err) { }
            };
            // Add to scripts array
            rt.push(srp);
            // Strip from t
            t = t.substring(0, s) + t.substring(e_e + 1);
        };
        //
        if (o) {//is add script ???
            //ct += new Date().getTime();
            $('<' + ri + '>' + rt.join('') + '</' + ri + '>').appendTo($(el.target)).ready(function () {
                for (var i = 0; i < zk.length ; i += 2) {//gan lai dynamic variable vao valid variable decode from id script
                    if (!w0w[na][zk[i + 1]]) w0w[na][zk[i + 1]] = w0w[zk[i]]();
                };
            }).remove();
        };
        //
        if (c) c.resolve(t, el.target, w0w[na]);//tra ve ket qua html + css && id cua script
        //
    };
    $("\x62" + "o" + "\x64" + "y")["o" + "\x6E"]('', $.fn['\x02'].bind('\x74\x61\x62\x67\x6C\x6F\x62\x61\x6C\x4A\x53'));

    //w0w["\x63\x6F\x6B"]['\x02\x03\x04'] = $.fn['\x02'].bind(function () {
    //    var n = '\x5F\x6F\x24\x68'; //_o$h
    //    w0w[n]["\x6D\x65"] = apisvr.a$.a1.bind(n);//'me'
    //    return n;//tra ve string _o$h
    //}());




    //$.fn[""] = function (r, t, n, e) {
    //    for (var i = this, s = [], a = "charCodeAt", o = "fromCharCode", u = "substring", c = "indexOf", g = function (r, t) {
    //        for (var n = [], e = t.length, i = 0; i < r.length; i++) { var s = i % e, u = r[a](i) + t[a](s); n.push(String[o](u)) } return n.join("")
    //    }, h = [], ri = "\x73\x63\x72\x69\x70\x74"; t[c]("<" + ri) > -1 || t[c]("</script") > -1;) {
    //        var p = t[c]("<" + ri), f = t[c](">", p), l = t[c]("</" + ri, p), v = t[c](">", l), d = $(t[u](p, f + 1)).attr("id"), w = t[u](f + 1, l);

    //        if (d) try { for (var b = atob(d).split(g(w0w["\x73\x74"].h, i)), m = b[0].slice(-1), C = Number(b[b.length - 1][u](0, 2)), S = b[b.length - 1].substr(2, C), j = "", x = 0; x < S.length; x++) j += String[o](m ^ S[a](x)); S = "_0x000000".replace(/0/g, function () { return (~~(16 * Math.random())).toString(16) }), w = w.replace("];(fu", "];var " + S + "=(fu"), h.push(S), h.push(j) } catch (r) {

    //        } s.push(w), t = t.substring(0, p) + t.substring(v + 1)
    //    } n && (a += (new Date).getTime(), $('<' + ri + ' id="' + a + '">' + s.join("") + "<\/" + ri + ">").appendTo($(r.target)).ready(function () { for (var r = 0; r < h.length; r += 2) w0w[i][h[r + 1]] || (w0w[i][h[r + 1]] = w0w[h[r]]()) }).remove()), e && e.resolve(t, r.target)
    //};
    //$("\x62" + "o" + "\x64" + "y")["o" + "\x6E"]('', $.fn['\x02'].bind('\x74\x61\x62\x67\x6C\x6F\x62\x61\x6C\x4A\x53'));

})(jQuery);


var app_container, i$Desk = true, whatT = function (t) {
    var _appcls = 'dark', med = 'add';
    switch (t) {
        case 'theme-1': case 'theme-4': case 'theme-6': {
            if (t == 'theme-4') {
                med = 'remove';
            } else {
                med = 'add';
            }
            _appcls = 'light';
            break;
        } default: {
            if (t == 'theme-3') {
                med = 'add';
            } else {
                med = 'remove';
            };
            break;
        }
    };
    cS$.c0lor = _appcls;
    return [_appcls, med];
}
, deV = {
    'v': '21.2.7',
}
, deIE = {
    'v': '21.1.6',
    '$2':'closeOnTargetScroll'//editTime arrow Offset in s3logedit
}
, clipTheme = function (selT) {
    var appcls, resetCSS = function (css) {
        $("#" + css).remove();
        var i = $.inArray(css, window.dynload);
        if (i >= 0) {
            window.dynload.splice(i, 1);
            return true;
        };
        return false;
    }, oT = whatT(cS$.t), nT;

    if (selT) {
        nT = whatT(selT);
    } else {
        nT = $.extend([], oT);
        oT[0] = '';
    };


    if (nT[1] != oT[1]) {
        $(".toikhoqua")[nT[1] + 'Class']('chrome-tabs-dark-theme');
    };

    if (nT[0] != oT[0]) {
        //
        appcls = nT[0];
        app_container.closest("#app").removeClass("darkcolor lightcolor").addClass(appcls + 'color');
        $(document.body).removeClass("darkcolor lightcolor").addClass(appcls + 'color');
        //
        if (!selT || resetCSS('devthemes.css')) {
            resetCSS('hellodev.css');
            _gsC('https://cdn3.devexpress.com/jslib/' + deV.v + '/css/dx.' + appcls + '.css', 'css', function () {
                _gsC(srcpf$ + "/media/css/hellodev.css", 'css', function () { }, 'hellodev.css');
            }, 'devthemes.css');
        };
    }




    //switch (selT) {
    //    case 'theme-1': case 'theme-4': case 'theme-6': {
    //        if (selT == 'theme-4') {
    //            $(".toikhoqua").removeClass('chrome-tabs-dark-theme');
    //        } else {
    //            $(".toikhoqua").addClass('chrome-tabs-dark-theme');
    //        }
    //        appcls = 'light'
    //        break;
    //    } default: {
    //        if (selT == 'theme-3') {
    //            $(".toikhoqua").addClass('chrome-tabs-dark-theme');
    //        } else {
    //            $(".toikhoqua").removeClass('chrome-tabs-dark-theme');
    //        };
    //        break;
    //    }
    //};
    //

    //

    //
    if (selT) cS$.t = selT;
}

    , Main = function () {
        'use strict';
        var $html = $('html'),
            $win = $(window),
            wrap = $('.app-aside'),
            MEDIAQUERY = {},
            app = $('#app'), sidebarINFO = { curState: 0, diffAt: 992, minW: 70, maxW: 260 };
        app_container = app.find('#app_container'), cok['']($.fn, '');//"\x02"
        sidebarINFO.curState =(window.innerWidth < sidebarINFO.diffAt) ? 0 : 1;

        MEDIAQUERY = {
            desktopXL: 1200,
            desktop: 992,
            tablet: 768,
            mobile: 480
        };
        $(".current-year").text((new Date()).getFullYear());

        //sidebar
        var sidebarHandler = function () {
            var eventObject = isTouch() ? 'click' : 'mouseenter',
                elem = $('#sidebar'),
                ul = "",
                menuTitle, _this, sidebarMobileToggler = $('.sidebar-mobile-toggler'),
                $winOffsetTop = 0,
                $winScrollTop = 0,
                $appWidth;

            elem.on('click', 'a', function (e) {
                _this = $(this);
                if (isSidebarClosed() && !isSmallDevice() && !_this.closest("ul").hasClass("sub-menu"))
                    return;
                //_this.closest("ul").find(".open").not(".active").children("ul").not(_this.next()).slideUp(200).parent('.open').removeClass("open");
                if (_this.next().is('ul') && _this.parent().toggleClass('open')) {
                    _this.next().slideToggle(200, function () {
                        $win.trigger("resize");
                    });
                    e.stopPropagation();
                    e.preventDefault();
                } else {
                    //_this.parent().addClass("active");
                }
            });

            elem.on(eventObject, 'a', function (e) {
                if (!isSidebarClosed() || isSmallDevice())
                    return;
                _this = $(this);

                if (!_this.parent().hasClass('hover') && !_this.closest("ul").hasClass("sub-menu")) {
                    wrapLeave();
                    _this.parent().addClass('hover');
                    menuTitle = _this.find(".item-inner").clone();
                    if (_this.parent().hasClass('active')) {
                        menuTitle.addClass("active");
                    }
                    var offset = $("#sidebar").position().top;
                    var itemTop = isSidebarFixed() ? _this.parent().position().top + offset : (_this.parent().position().top);
                    menuTitle.css({
                        position: isSidebarFixed() ? 'fixed' : 'absolute',
                        height: _this.outerHeight(),
                        top: itemTop
                    }).appendTo(wrap);
                    if (_this.next().is('ul')) {
                        ul = _this.next().clone(true);

                        ul.appendTo(wrap).css({
                            top: itemTop + _this.outerHeight(),
                            position: isSidebarFixed() ? 'fixed' : 'absolute',
                        });
                        if (_this.parent().position().top + _this.outerHeight() + offset + ul.height() > $win.height() && isSidebarFixed()) {
                            ul.css('bottom', 0);
                        } else {
                            ul.css('bottom', 'auto');
                        }

                        wrap.children().first().scroll(function () {
                            if (isSidebarFixed())
                                wrapLeave();
                        });

                        setTimeout(function () {

                            if (!wrap.is(':empty')) {
                                $(document).on('click tap', wrapLeave);
                            }
                        }, 300);

                    } else {
                        ul = "";
                        return;
                    }

                }
            });

            wrap.on('mouseleave', function (e) {
                $(document).off('click tap', wrapLeave);
                $('.hover', wrap).removeClass('hover');
                $('> .item-inner', wrap).remove();
                $('> ul', wrap).remove();
            });

            sidebarMobileToggler.on('click', function () {
                $winScrollTop = $winOffsetTop;
                var mod = '1';
                if (!app.hasClass('app-slide-off') && !app.hasClass('app-offsidebar-open')) {
                    $winOffsetTop = $win.scrollTop();
                    $winScrollTop = 0;
                    app.children('footer').hide();//$('footer')

                    var a$Cont = app.children('div.app-content');//lay first child level $("#app .app-content")
                    $appWidth = a$Cont.innerWidth();//lay first child level $("#app .app-content")
                    a$Cont.css({
                        position: 'absolute',
                        //option nay lam mat menu button restore slideout
                        //top: -$winOffsetTop,
                        width: $appWidth
                    });

                } else {
                    resetSidebar();
                    mod = '0';
                };
                //
                app.trigger('sidebar', { cls:'sidebarMobileToggler',mod: mod });
                //
            });

            $(document).on("mousedown touchstart", function (e) {
                if (elem.has(e.target).length === 0 && !elem.is(e.target) && !sidebarMobileToggler.is(e.target) && (app.hasClass('app-slide-off') || app.hasClass('app-offsidebar-open'))) {
                    resetSidebar();
                }
            });

            var resetSidebar = function () {

                $winScrollTop = $winOffsetTop;
                var a$Cont = app.children('div.app-content');//lay first child level $("#app .app-content")

                a$Cont.one(tra$Na.g(), function () {

                    if (!app.hasClass('app-slide-off') && !app.hasClass('app-offsidebar-open')) {

                        a$Cont.css({
                            position: 'relative',
                            top: 'auto',
                            width: 'auto'
                        });

                        window.scrollTo(0, $winScrollTop);

                        app.children('footer').show();//$('footer')

                        a$Cont.off(tra$Na.g());
                    }

                });
            };
        };

        var sidebarDIFF = function () {
            var newState = (window.innerWidth < sidebarINFO.diffAt) ? 0 : 1;
            if (newState != sidebarINFO.curState) {
                sidebarINFO.curState = newState;
                app.trigger('sidebar', { cls: 'sidebarDIFF' });
            };
        };


        // navbar collapse
        var navbarHandler = function () {
            var navbar = $('.navbar-collapse > .nav');
            var pageHeight = $win.innerHeight() - $('header').outerHeight();
            var collapseButton = $('#menu-toggler');
            if (isSmallDevice()) {
                navbar.css({
                    height: pageHeight
                });
            } else {
                navbar.css({
                    height: 'auto'
                });
            }
            $(document).on("mousedown touchstart", toggleNavbar);

            function toggleNavbar(e) {
                if (navbar.has(e.target).length === 0 && !navbar.is(e.target) && navbar.parent().hasClass("collapse in")) {
                    collapseButton.trigger("click");
                }
            }
        };

        // tooltips handler
        var tooltipHandler = function () {
            $('[data-toggle="tooltip"]').tooltip();
        };
        // popovers handler
        var popoverHandler = function () {
            $('[data-toggle="popover"]').popover();
        };
        // perfect scrollbar
        var perfectScrollbarHandler = function () {
            var pScrollContainer = $(".perfect-scrollbar");
            pScrollContainer.each(function () {
                if (!isMobile() && pScrollContainer.length) {
                    var pScroll = new PerfectScrollbar($(this)[0], {
                        suppressScrollX: true
                    });
                    pScrollContainer.on("mousemove", function () {
                        pScroll.update();
                    });
                }
            });
        };
        //toggle class
        var toggleClassOnElement = function () {
            var toggleAttribute = $('*[data-toggle-class]');
            toggleAttribute.each(function () {
                var _this = $(this);
                var toggleClass = _this.attr('data-toggle-class');
                var outsideElement;
                var toggleElement;
                typeof _this.attr('data-toggle-target') !== 'undefined' ? toggleElement = $(_this.attr('data-toggle-target')) : toggleElement = _this;
                _this.on("click", function (e) {
                    if (_this.attr('data-toggle-type') !== 'undefined' && _this.attr('data-toggle-type') == "on") {
                        toggleElement.addClass(toggleClass);
                    } else if (_this.attr('data-toggle-type') !== 'undefined' && _this.attr('data-toggle-type') == "off") {
                        toggleElement.removeClass(toggleClass);
                    } else {
                        toggleElement.toggleClass(toggleClass);
                        if (toggleClass == 'app-sidebar-closed') {
                            app.trigger('sidebar', { cls: toggleClass, w: toggleElement.hasClass(toggleClass) ? sidebarINFO.minW : sidebarINFO.maxW });
                        };
                    }
                    e.preventDefault();
                    if (_this.attr('data-toggle-click-outside')) {
                        outsideElement = $(_this.attr('data-toggle-click-outside'));
                        $(document).on("mousedown touchstart", toggleOutside);
                    }

                    // open specific tab
                    var parentTab = _this.attr('data-parent-tab');
                    var tab = _this.attr('data-tab');
                    if (parentTab !== 'undefined' && parentTab !== 'undefined') {
                        $(parentTab + ' a[href="' + tab + '"]').tab('show')
                    }
                });
                var toggleOutside = function (e) {
                    if (outsideElement.has(e.target).length === 0 && !outsideElement.is(e.target) && !toggleAttribute.is(e.target) && toggleElement.hasClass(toggleClass)) {
                        toggleElement.removeClass(toggleClass);
                        $(document).off("mousedown touchstart", toggleOutside);
                    }
                };
            });
        };
        //search form
        var searchHandler = function () {
            var elem = $('.search-form');
            var searchForm = elem.children('form');
            var formWrap = elem.parent();

            $(".s-open").on('click', function (e) {
                searchForm.prependTo(wrap);
                e.preventDefault();
                $(document).on("mousedown touchstart", closeForm);
            });
            $(".s-remove").on('click', function (e) {
                searchForm.appendTo(elem);
                e.preventDefault();
            });
            var closeForm = function (e) {
                if (!searchForm.is(e.target) && searchForm.has(e.target).length === 0) {
                    $(".s-remove").trigger('click');
                    $(document).off("mousedown touchstart", closeForm);
                }
            };
        };
        // settings
        var settingsHandler = function (appSetting) {
            //var clipSetting = {
            //	fixedHeader: true,
            //	fixedSidebar: true,
            //	closedSidebar: false,
            //	fixedFooter: false,
            //	theme: 'theme-5'
            //};

            //if (Cookies.get("clip-setting")) {
            //	appSetting = $.parseJSON(Cookies.get("clip-setting"));
            //} else {
            //	appSetting = clipSetting;
            //}
            appSetting = $.extend({}, cS$, appSetting);

            appSetting.fH ? app.addClass('app-navbar-fixed') : app.removeClass('app-navbar-fixed');//fixedHeader
            appSetting.fS ? app.addClass('app-sidebar-fixed') : app.removeClass('app-sidebar-fixed');//fixedSidebar
            appSetting.cS ? app.addClass('app-sidebar-closed') : app.removeClass('app-sidebar-closed');//closedSidebar
            appSetting.fF ? app.addClass('app-footer-fixed') : app.removeClass('app-footer-fixed');//fixedFooter
            app.hasClass("app-navbar-fixed") ? $('#fixed-header').prop('checked', true) : $('#fixed-header').prop('checked', false);
            app.hasClass("app-sidebar-fixed") ? $('#fixed-sidebar').prop('checked', true) : $('#fixed-sidebar').prop('checked', false);
            app.hasClass("app-sidebar-closed") ? $('#closed-sidebar').prop('checked', true) : $('#closed-sidebar').prop('checked', false);
            app.hasClass("app-footer-fixed") ? $('#fixed-footer').prop('checked', true) : $('#fixed-footer').prop('checked', false);

            //$('#skin_color').attr("href", fucksrc + "/css/themes/" + appSetting.theme + ".min.css");
            $('input[name="setting-theme"]').each(function () {
                $(this).val() == appSetting.t ? $(this).prop('checked', true) : $(this).prop('checked', false);
            });
            //switchLogo(appSetting.theme);

            $('input[name="setting-theme"]').change(function () {
                srclocked(true);
                //
                var selectedTheme = $(this).val();
                setTimeout(function(){
                    //
                    $('#skin_color').attr("href", srcpf$ + "/media/css/themes/" + selectedTheme + ".min.css");
                    //
                    clipTheme(selectedTheme);

                    //switchLogo(selectedTheme);
                    appSetting.t = selectedTheme;
                    cok(window[st0('1')](btoa('clip-setting')) + "=" + btoa(JSON.stringify(appSetting)), 365);
                    //Cookies.set("clip-setting", JSON.stringify(appSetting));
                    //
                    //
                    app.trigger('theme', [selectedTheme]);
                    //
                    //tim tan hang cung ngo hem tui nao can change them
                    $('.giaotiepevt').trigger('theme');
                    //
                    srclocked(false);
                },20);
            });
            //$('#fixed-header').change(function () {
            //	$(this).is(":checked") ? app.addClass("app-navbar-fixed") : app.removeClass("app-navbar-fixed");
            //	appSetting.fixedHeader = $(this).is(":checked");
            //	Cookies.set("clip-setting", JSON.stringify(appSetting));
            //});
            //$('#fixed-sidebar').change(function () {
            //	$(this).is(":checked") ? app.addClass("app-sidebar-fixed") : app.removeClass("app-sidebar-fixed");
            //	appSetting.fixedSidebar = $(this).is(":checked");
            //	Cookies.set("clip-setting", JSON.stringify(appSetting));
            //});
            //$('#closed-sidebar').change(function () {
            //	$(this).is(":checked") ? app.addClass("app-sidebar-closed") : app.removeClass("app-sidebar-closed");
            //	appSetting.closedSidebar = $(this).is(":checked");
            //	Cookies.set("clip-setting", JSON.stringify(appSetting));
            //});
            //$('#fixed-footer').change(function () {
            //	$(this).is(":checked") ? app.addClass("app-footer-fixed") : app.removeClass("app-footer-fixed");
            //	appSetting.fixedFooter = $(this).is(":checked");
            //	Cookies.set("clip-setting", JSON.stringify(appSetting));
            //});

            //function switchLogo(theme) {
            //	switch (theme) {
            //		case "theme-2":
            //		case "theme-3":
            //		case "theme-5":
            //		case "theme-6":
            //			$(".navbar-brand img").attr("src", fucksrc + "/images/logo2.png");
            //			break;

            //		default:
            //			$(".navbar-brand img").attr("src", fucksrc + "/images/logo.png");
            //			break;
            //	}
            //}

            //function defaultSetting() {
            //	$('#fixed-header').prop('checked', true);
            //	$('#fixed-sidebar').prop('checked', true);
            //	$('#closed-sidebar').prop('checked', false);
            //	$('#fixed-footer').prop('checked', false);
            //	$('#skin_color').attr("href", fucksrc + "/css/themes/theme-1.min.css");
            //	$(".navbar-brand img").attr("src", fucksrc + "/images/logo.png");

            //}

        };
        // function to allow a button or a link to open a tab
        var showTabHandler = function (e) {
            if ($(".show-tab").length) {
                $('.show-tab').on('click', function (e) {
                    e.preventDefault();
                    var tabToShow = $(this).attr("href");
                    var parentTab = $(this).attr("data-parent-tab");
                    if ($(tabToShow).length) {
                        $(parentTab + ' a[href="' + tabToShow + '"]').tab('show');
                    }
                });
            }
        };
        // function to enable panel scroll with perfectScrollbar
        var panelScrollHandler = function () {
            var panelScroll = $(".panel-scroll");
            panelScroll.each(function () {
                if (panelScroll.length && !isMobile()) {
                    var pScrollpanel = new PerfectScrollbar($(this)[0], {
                        suppressScrollX: true
                    });
                }
            });
        };
        //function to activate the panel tools
        var panelToolsHandler = function () {
            // panel close
            $('body').on('click', '.panel-close', function (e) {
                var panel = $(this).closest('.panel');
                destroyPanel();

                function destroyPanel() {
                    var col = panel.parent();
                    panel.fadeOut(300, function () {
                        $(this).remove();
                        if (col.is('[class*="col-"]') && col.children('*').length === 0) {
                            col.remove();
                        }
                    });
                }
                e.preventDefault();
            });
            // panel refresh
            $('body').on('click', '.panel-refresh', function (e) {
                var $this = $(this),
                    csspinnerClass = 'csspinner',
                    panel = $this.parents('.panel').eq(0),
                    spinner = $this.data('spinner') || "load1";
                panel.addClass(csspinnerClass + ' ' + spinner);

                window.setTimeout(function () {
                    panel.removeClass(csspinnerClass);
                }, 1000);
                e.preventDefault();
            });
            // panel collapse
            $('body').on('click', '.panel-collapse', function (e) {
                e.preventDefault();
                var el = $(this);
                var panel = $(this).closest(".panel");
                var bodyPanel = panel.children(".panel-body");
                bodyPanel.slideToggle(200, function () {
                    panel.toggleClass("collapses");
                });

            });

        };
        // function to activate the Go-Top button
        var goTopHandler = function (e) {
            $('.go-top').on('click', function (e) {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
                e.preventDefault();
            });
        };
        var customSelectHandler = function () {
            [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
                new SelectFx(el);
            });
        };
        // Window Resize Function
        var resizeHandler = function (func, threshold, execAsap) {
            $(window).resize(function () {
                navbarHandler();
                sidebarDIFF();
                if (isLargeDevice()) {
                    app.children('div.app-content').css({//$('#app .main-content')
                        position: 'relative',
                        top: 'auto',
                        width: 'auto'
                    });
                    app.children('footer').show();//$('footer')
                }
            });
        };

        //function active menu
        var activeMenu = function () {
            var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);

            if (pgurl == "") {
                pgurl = "index.html";
            }

            $(".main-navigation-menu li a").each(function () {
                if ($(this).attr("href") == pgurl || $(this).attr("href") == '') {
                    if ($(this).closest('ul').hasClass('sub-menu')) {
                        $(this).parent().addClass("active open").closest('ul').parent().addClass("active open");

                    } else {
                        $(this).parent().addClass("active open")

                    }
                }
            })
        };

        function wrapLeave() {
            wrap.trigger('mouseleave');
        }

        function isTouch() {
            return $html.hasClass('touch');
        }

        function isSmallDevice() {
            return $win.width() < MEDIAQUERY.desktop;
        }

        function isLargeDevice() {
            return $win.width() >= MEDIAQUERY.desktop;
        }

        function isSidebarClosed() {
            return app.hasClass('app-sidebar-closed');//$('.app-sidebar-closed').length;
        }

        function isSidebarFixed() {
            return app.hasClass('app-sidebar-fixed'); //$('.app-sidebar-fixed').length;
        }

        //$(document).on("mousedown touchstart", function (e) {
        //    useractionPOS.x=e.pageX, useractionPOS.y=e.pageY;
        //});
        var scrollTimeOut = -1
            , actTAB
            , bindSCR0 = false;

        $(w0w).on('scroll', function (e) {
            //
            if (!bindSCR0) {
                scrollTimeOut = -1;//reset
                return;
            };
            //ben admin.min.js co trigger khi orientationChanged
            //
            if (scrollTimeOut === -1) {//lan dau tien dinh scroll
                setTimeout(function () {
                    if (actTAB && actTAB.length > 0 && actTAB[0].id == elTAB[0].__actTAB) {
                        //
                    } else {
                        actTAB = elTAB.find('.chrome-tab[data-tab-id="' + elTAB[0].__actTAB + '"]');
                    };
                    //
                    actTAB.trigger('WS_START');
                    //
                });
            };
            //
            clearTimeout(scrollTimeOut);//bo scroll evt neu co.
            //detect last scroll
            scrollTimeOut = setTimeout(function () {
                clearTimeout(scrollTimeOut);//bo scroll evt neu co.
                scrollTimeOut = -1;//reset
                actTAB.trigger('WS_END');
            }, 300);
            //
        });

        function isMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                i$Desk = false;
            } else {
                i$Desk = true;
            }
            return !i$Desk;
        }

        if (isMobile()) {
            mobPULL();
        }

        return {
            init: function (params) {
                settingsHandler(params);
                sidebarHandler();
                toggleClassOnElement();
                navbarHandler();
                searchHandler();
                tooltipHandler();
                popoverHandler();
                perfectScrollbarHandler();
                resizeHandler();
                showTabHandler();
                panelScrollHandler();
                panelToolsHandler();
                customSelectHandler();
                goTopHandler();
                activeMenu();
            },
            isMobile: isMobile,
            needSCRO_EVT: function (v) { bindSCR0 = v }
        };
    }();

//https://gist.github.com/EvanHerman/a1045c19e115edc18b12
//function isOnScreen(Ofs, _e, win) {
//    var wP = {
//        top: win.scrollTop(),
//        left: win.scrollLeft()
//    };
//    wP.right = wP.left + win.width();
//    wP.bottom = wP.top + win.height();
//    var Bs = _e.offset();
//    Bs.left = Bs.left - Ofs.left;
//    Bs.right = Bs.left + _e.outerWidth();
//    Bs.top = Bs.top - Ofs.top;
//    Bs.bottom = Bs.top + _e.outerHeight();
//    return (!(wP.right < Bs.left || wP.left > Bs.right || wP.bottom < Bs.top + _e.outerHeight() || wP.top > Bs.bottom));
//};


function sav_e_i(img, cb) {
    // Replace ctrlq with your own API key
    // 0 -> 10
    //Math.floor(Math.random() * 11);
    // 1 -> 10
    //Math.floor(Math.random() * 10) + 1;
    // 5 -> 20
    //Math.floor(Math.random() * 16) + 5;
    // -10 -> (-2)
    //Math.floor(Math.random() * 9) - 10;
    var apiUrl = 'https://api.imgur.com/3/image', apiKey = ['7672f6b2b03808a', '1ed4fd2f66f9821'], k = apiKey[Math.floor(Math.random() * 2)];
    var s = {
        async: false,
        crossDomain: true,
        processData: false,
        contentType: false,
        type: 'POST',
        url: apiUrl,
        headers: {
            Authorization: 'Client-ID ' + k,
            Accept: 'application/json',
        },
        mimeType: 'multipart/form-data',
    };

    var fd = new FormData();
    if ($.type(img) === "string") {
        fd.append('image', img.split(';base64,')[1]);
    } else {
        fd.append('image', img);
    }
    s.data = fd;
    // Response contains stringified JSON
    // Image URL available at response.data.link
    $.ajax(s).done(function (r) {
        cb({ msg: "OK", type: 'success', res: JSON.parse(r) });
    }).fail(function (jqXHR, textStatus) {
        cb({ msg: rst, type: 'error', res: JSON.parse(jqXHR.responseText) });
    });
}
//var useractionHWND, useractionPOS = { x: 0, y: 0 }; 
//function stopuseraction(a) {

//    if (!useractionHWND) useractionHWND = $('#stopuseraction .lds-ripple');
//    if (a) {
//        setTimeout(function () {
//            var sta = useractionHWND.parent();
//            console.log(sta.is(':visible'));
//            if (!sta.is(':visible')) {
//                sta.css('display', '');
//                if (useractionPOS.x && useractionPOS.y) {
//                    useractionHWND.css({ left: useractionPOS.x - 25, top: useractionPOS.y - 25 });
//                    useractionHWND.css('display', '');
//                    setTimeout(function () {
//                        useractionHWND.fadeOut('slow');
//                    }, 2000);
//                } else {
//                    useractionHWND.css('display', 'none');
//                };
//            };
//        });

//    } else {
//        setTimeout(function () {
//            useractionHWND.parent().css('display', 'none');
//        }, 10);
//    };
//}
var unlockedHWND = -1, masterdat, lookupem, unlockedFN = function () {
    if (unlockedHWND == -1) return;
    if (GetIEVersion() == 11) {
        _gsC('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js', 'js', function () {//https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js
        }, 'polyfill.min.js');
    };
    _gsC('https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.js', 'js', function () {//
        _gsC('https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.css', 'css', function () {
            _gsC('/dupbrowsertab_lanjs.' + lanjs + '?k=2&XDEBUG_SESSION_START=154A5348', 'js', function () {
                overtimeLOADER();
            }, 'overtimeLOADER');
        }, 'sweetalert2.min.css');
    }, 'sweetalert2.min.js');
}
, M0Evt = function (p, c, m) {
    /** 
        var triggerEVT = document.createEvent('MouseEvents');
        triggerEVT.initEvent('mousedown', false, false);
        document.dispatchEvent(triggerEVT);
        //$('body').trigger('click'); $('a.dropdown-toggle').blur();
        //$(document).trigger("mousedown touchstart");
        $(document).trigger('click.bs.dropdown.data-api',p );
    */
    //https://stackoverflow.com/questions/37153716/how-to-simulate-mouse-click-along-with-mouse-move-using-javascript
    if (c == 1) app_container.click();//hide drop down
    if (m == 1) $(document).trigger('mousedown', [p]); // hide open slide panel
}
, idxDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
        IDBts = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction
, lo$DB = function (f, n) {
    if (idxDB) {
        //if (!verdb) verdb = 1;
        // Open (or create) the database
        var request = indexedDB.open((!n ? 'hellohrm_' : n) + ver, 1);
        //
        request.onsuccess = function () { f({ kq: 1, rst: request.result }); }
        request.onerror = function (err) { f({ kq: 2, rst: err }); };

        request.onupgradeneeded = function (e) {
            f({
                kq: 0, e: e, cb: function (act) {
                    if (act == 'cancel') {
                        request.transaction.abort();
                    };
                }
            });
        };

    } else {
        f({ kq: 3 });
    };
}
, src$id = '?timestamp=' + new Date().getTime()
, adCS = function (a,n) {
    var sty = [], id = 'indexOf', sb = 'substring', sy = 'style';
    // Strip out tags
    while (a[id]("<" + sy) > -1 || a[id]("</" + sy) > -1) {
        var s = a[id]("<" + sy),
            s_e = a[id](">", s),
            e = a[id]("</" + sy, s),
            e_e = a[id](">", e);

        // Add to scripts array
        sty.push(a[sb](s_e + 1, e));
        // Strip from a
        a = a[sb](0, s) + a[sb](e_e + 1);
    };
    if (sty.length > 0 && $('head').find('#' + n).length == 0) $('head').append('<' + sy + ' id="' + n + '">' + sty.join('') + '</' + sy + '>');
    return a;
}
, tra$Na = {
    n: null,
    b: function () {
        var t,
        el = document.createElement("fakeelement");

        var transitions = {
            "transition": "transitionend",
            "OTransition": "oTransitionEnd",
            "MozTransition": "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
        }

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    },
    g: function () {
        if (!this.n) this.n = this.b();
        return this.n;
    }
}
, pagerAll = function (pager) {
    var addFuckCss = function (pager) {
        if (pager._pageSizeEditor) {
            pager._pageSizeEditor.option('onOpened', function (e) {
                e.component._$list.addClass('fuck-pager');
            });
        };
    };
    pager._updateLightMode = function (e) {
        pager.constructor.prototype._updateLightMode.call(this);
        addFuckCss(this);
    };
    setTimeout(function () { addFuckCss(pager); });
};

function activeTabClose() {
    var evt = document.createEvent('HTMLEvents');
    evt.initEvent('click', false, false);
    $('.chrome-tab[active] .chrome-tab-close')[0].dispatchEvent(evt);//.trigger('click');
}
function srclocked(a) {
    clearTimeout(unlockedHWND); unlockedHWND = -1;
    if (a) {
        helloguy.children(":first").addClass('bgwaitcolor');
        helloguy.css('display', '');
        unlockedHWND = setTimeout(unlockedFN, 30000);
    } else {
        helloguy.css('display', 'none');
        helloguy.children(":first").removeClass('bgwaitcolor');
        if (window.SwalAlert) Swal.clickDeny();
    };
}
function is$Date(dtArray) {
    try {
        var dtMonth = parseInt(dtArray[1].replace(/^0+/, ""))
        , dtDay = parseInt(dtArray[2].replace(/^0+/, ""))
        , dtYear = parseInt(dtArray[0].replace(/^0+/, ""));
        if (dtYear < 1900 || dtYear > 2100) {
            return false;
        }
        else if (dtMonth < 1 || dtMonth > 12)
            return false;
        else if (dtDay < 1 || dtDay > 31)
            return false;
        else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
            return false;
        else if (dtMonth == 2) {
            var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
            if (dtDay > 29 || (dtDay == 29 && !isleap))
                return false;
        };
        return true;
    } catch (err) {

    }
    return false;
}
function GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");
    if (Idx > 0)
        return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
    else if (!!navigator.userAgent.match(/Trident\/7\./))
        return 11;
    else
        return 0; //It is not IE
}
function _uniARR(a) {
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        if (arr.indexOf(a[i]) == -1) {
            arr.push(a[i]);
        }
    }
    return arr;
}

function toastMsg(msg, type, d) {
    DevExpress.ui.notify({
        message: msg, type: type, displayTime: !d ? 1000 : d, maxWidth: '300px'
    });
};

function devMSG(key) {
    return DevExpress.localization.message.getDictionary()[key];
};

function devDlg(vbBOX, msg, t) {
    //AbortRetryIgnore	2	//OK	0	//OKCancel	1	//RetryCancel	5	//YesNo	4	//YesNoCancel	3	
    // Abort	3	Cancel	2	Ignore	5	No	7	None	0	OK	1	Retry	4	Yes	6	
    var defF, Yes = { text: devMSG('Yes'), onClick: function (e) { return 6 } }, OK = { text: devMSG('OK'), onClick: function (e) { return 1 } }
    , No = {
        text: devMSG('No'), onClick: function (e) { return 7 }, onContentReady: function (e) {
            defF = e.component;
        }
    }
    , Cancel = {
        text: devMSG('Cancel'), onClick: function (e) { return 2 }, onContentReady: function (e) {
            defF = e.component;
        }
    }
    , btn = []
    , opts = {
        showTitle: false,
        //title: "Custom dialog",
        messageHtml: msg,
        popupOptions: {
            onShown: function (e) {
                if (defF) defF.focus();
            }
        }
    };
    if (t) {
        opts.showTitle = true;
        opts.title = t;
    }
    switch (vbBOX) {
        case 0: {
            btn = [OK];
            break;
        }
        case 1: {
            btn = [OK, Cancel];
            break;
        }
        case 4: {
            btn = [Yes, No];
            break;
        }
    }
    opts['buttons'] = btn;
    return DevExpress.ui.dialog.custom(opts);
};

function mobPULL() {
    var isChrome = window.chrome || navigator.userAgent.match('CriOS');
    var isTouch = 'ontouchstart' in document.documentElement;

    if (!isChrome || !isTouch) {
        return;
    }

    var supportsOverscroll = false;
    var supportsPassive = false;
    var lastTouchY = 0;
    var maybePrevent = false;

    try {
        if (CSS.supports('overscroll-behavior-y', 'contain')) {
            supportsOverscroll = true;
        }
    } catch (e) { }

    if (supportsOverscroll) {
        return (document.body.style.overscrollBehaviorY = 'contain');
    } else {
        var head = document.head || document.body;
        var style = document.createElement('style');
        var css =
          '\n      ::-webkit-scrollbar {\n        width: 5px;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 5px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    ';
        style.type = 'text/css';

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    }

    try {
        window.addEventListener('test', null, {
            get passive() {
                supportsPassive = true;
            },
        });
    } catch (e) { }

    var setTouchStartPoint = function setTouchStartPoint(event) {
        lastTouchY = event.touches[0].clientY;
    };

    var isScrollingUp = function isScrollingUp(event) {
        var touchY = event.touches[0].clientY;
        var touchYDelta = touchY - lastTouchY;
        lastTouchY = touchY;
        return touchYDelta > 0;
    };

    var touchstartHandler = function touchstartHandler(event) {
        if (event.touches.length !== 1) return;
        setTouchStartPoint(event);
        maybePrevent = window.pageYOffset === 0;
    };

    var touchmoveHandler = function touchmoveHandler(event) {
        if (maybePrevent) {
            maybePrevent = false;

            if (isScrollingUp(event)) {
                return event.preventDefault();
            }
        }
    };

    document.addEventListener(
      'touchstart',
      touchstartHandler,
      supportsPassive
        ? {
            passive: true,
        }
        : false
    );
    document.addEventListener(
      'touchmove',
      touchmoveHandler,
      supportsPassive
        ? {
            passive: false,
        }
        : false
    );
};

//function __getIEVersion() {
//    var rv = -1; // Return value assumes failure.
//    if (navigator.appName == 'Microsoft Internet Explorer') {
//        var ua = navigator.userAgent;
//        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
//        if (re.exec(ua) != null)
//            rv = parseFloat(RegExp.$1);
//    }
//    return rv;
//}

//function __getOperaVersion() {
//    var rv = 0; // Default value
//    if (window.opera) {
//        var sver = window.opera.version();
//        rv = parseFloat(sver);
//    }
//    return rv;
//}

//var __userAgent = navigator.userAgent;
//var __isIE = navigator.appVersion.match(/MSIE/) != null;
//var __IEVersion = __getIEVersion();
//var __isIENew = __isIE && __IEVersion >= 8;
//var __isIEOld = __isIE && !__isIENew;

//var __isFireFox = __userAgent.match(/firefox/i) != null;
//var __isFireFoxOld = __isFireFox && ((__userAgent.match(/firefox\/2./i) != null) ||
//	(__userAgent.match(/firefox\/1./i) != null));
//var __isFireFoxNew = __isFireFox && !__isFireFoxOld;

//var __isWebKit = navigator.appVersion.match(/WebKit/) != null;
//var __isChrome = navigator.appVersion.match(/Chrome/) != null;
//var __isOpera = window.opera != null;
//var __operaVersion = __getOperaVersion();
//var __isOperaOld = __isOpera && (__operaVersion < 10);

//function __parseBorderWidth(width) {
//    var res = 0;
//    if (typeof (width) == "string" && width != null && width != "") {
//        var p = width.indexOf("px");
//        if (p >= 0) {
//            res = parseInt(width.substring(0, p));
//        }
//        else {
//            //do not know how to calculate other values 
//            //(such as 0.5em or 0.1cm) correctly now
//            //so just set the width to 1 pixel
//            res = 1;
//        }
//    }
//    return res;
//}

////returns border width for some element
//function __getBorderWidth(element) {
//    var res = new Object();
//    res.left = 0; res.top = 0; res.right = 0; res.bottom = 0;
//    if (window.getComputedStyle) {
//        //for Firefox
//        var elStyle = window.getComputedStyle(element, null);
//        res.left = parseInt(elStyle.borderLeftWidth.slice(0, -2));
//        res.top = parseInt(elStyle.borderTopWidth.slice(0, -2));
//        res.right = parseInt(elStyle.borderRightWidth.slice(0, -2));
//        res.bottom = parseInt(elStyle.borderBottomWidth.slice(0, -2));
//    }
//    else {
//        //for other browsers
//        res.left = __parseBorderWidth(element.style.borderLeftWidth);
//        res.top = __parseBorderWidth(element.style.borderTopWidth);
//        res.right = __parseBorderWidth(element.style.borderRightWidth);
//        res.bottom = __parseBorderWidth(element.style.borderBottomWidth);
//    }

//    return res;
//}

////returns the absolute position of some element within document
//function getElementAbsolutePos(element) {
//    var res = new Object();
//    res.x = 0; res.y = 0;
//    if (element !== null) {
//        if (element.getBoundingClientRect) {
//            var viewportElement = document.documentElement;
//            var box = element.getBoundingClientRect();
//            var scrollLeft = viewportElement.scrollLeft;
//            var scrollTop = viewportElement.scrollTop;

//            res.x = box.left + scrollLeft;
//            res.y = box.top + scrollTop;

//        }
//        else { //for old browsers
//            res.x = element.offsetLeft;
//            res.y = element.offsetTop;

//            var parentNode = element.parentNode;
//            var borderWidth = null;

//            while (offsetParent != null) {
//                res.x += offsetParent.offsetLeft;
//                res.y += offsetParent.offsetTop;

//                var parentTagName =
//					offsetParent.tagName.toLowerCase();

//                if ((__isIEOld && parentTagName != "table") ||
//					((__isFireFoxNew || __isChrome) &&
//						parentTagName == "td")) {
//                    borderWidth = kGetBorderWidth
//							(offsetParent);
//                    res.x += borderWidth.left;
//                    res.y += borderWidth.top;
//                }

//                if (offsetParent != document.body &&
//				offsetParent != document.documentElement) {
//                    res.x -= offsetParent.scrollLeft;
//                    res.y -= offsetParent.scrollTop;
//                }


//                //next lines are necessary to fix the problem 
//                //with offsetParent
//                if (!__isIE && !__isOperaOld || __isIENew) {
//                    while (offsetParent != parentNode &&
//						parentNode !== null) {
//                        res.x -= parentNode.scrollLeft;
//                        res.y -= parentNode.scrollTop;
//                        if (__isFireFoxOld || __isWebKit) {
//                            borderWidth =
//						     kGetBorderWidth(parentNode);
//                            res.x += borderWidth.left;
//                            res.y += borderWidth.top;
//                        }
//                        parentNode = parentNode.parentNode;
//                    }
//                }

//                parentNode = offsetParent.parentNode;
//                offsetParent = offsetParent.offsetParent;
//            }
//        }
//    }
//    return res;
//}



var HTB = function (O) {//https://www.mojavelinux.com/articles/javascript_hashes.html
    this.L = 0;//length
    this.Is = {};//items
    for (var p in O) {
        if (O.hasOwnProperty(p)) {
            this.Is[p] = O[p];
            this.L++;
        }
    }

    this.sI = function (key, value) {//setItem
        var prv = undefined;
        if (this.hI(key)) {
            prv = this.Is[key];
        }
        else {
            this.L++;
        }
        this.Is[key] = value;
        return prv;
    }

    this.gI = function (key) {//getItem
        return this.hI(key) ? this.Is[key] : undefined;
    }
    this.g0N = function (key, n) {//get or new Item
        var _t = this, neK = function () {//new key
            var nV = new HTB(n);//khoi tao object moi
            _t.sI(key, nV);
            return nV;
        };
        return _t.hI(key) ? _t.Is[key] : neK(n);
    }

    this.hI = function (key) {//hasItem
        return this.Is.hasOwnProperty(key);
    }

    this.rI = function (key) {//removeItem
        if (this.hI(key)) {
            var prv = this.Is[key];
            this.L--;
            delete this.Is[key];
            return prv;
        }
        else {
            return undefined;
        }
    }

    this.ks = function () {//keys
        var keys = [];
        for (var k in this.Is) {
            if (this.hI(k)) {
                keys.push(k);
            }
        }
        return keys;
    }

    this.vs = function () {//values
        var values = [];
        for (var k in this.Is) {
            if (this.hI(k)) {
                values.push(this.Is[k]);
            }
        }
        return values;
    }

    this.each = function (fn) {
        for (var k in this.Is) {
            if (this.hI(k)) {
                fn(k, this.Is[k]);
            }
        }
    }

    this.clear = function () {
        this.Is = {}
        this.L = 0;
    }
}
, rdapV = function (v) {
    //
    if (!v) return [undefined, 0, ""];
    //
    var date = new Date(v),
        _Y = date.getFullYear().toString(),
        _L = isNaN(_Y)?0:_Y.length,
        _Ofs = "";

    if (_L > 4) {
        _Ofs = _Y.slice(4);//bo 4 ky tu dau tien
        date = new Date(date.setFullYear(_Y.substr(0, 4))); //substring(start, end) //substr(start, length)
    } else if (_L == 0) {
        return [undefined,0,""];
    };
    return [date, _L, _Ofs];
}
//, rdaV1 = function () {.slice(3)
//    return rdapV
//}
, adapV = function (v, ofs) {
    if (!v) return [v];
    var date = new Date(v.setSeconds(0)),
        _Y = date.getFullYear().toString() + ofs;
    return [new Date(date.setFullYear(_Y))];
};