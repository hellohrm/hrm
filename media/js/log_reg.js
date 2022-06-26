String.prototype.format = function () {
    var formatted = this;
    for (var arg in arguments) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};
var LoginModalController = {
    tabsElementName: ".logmod__tabs li",
    tabElementName: ".logmod__tab",
    inputElementsName: ".logmod__form .input",
    hidePasswordName: ".hide-password",
    submitBTNClick: null,
    inputElements: null,
    tabsElement: null,
    tabElement: null,
    hidePassword: null,

    $activeTab: null,
    tabSelection: 0,// 0 - first, 1 - second

    findElements: function () {
        var base = this;

        base.tabsElement = $(base.tabsElementName);
        base.tabElement = $(base.tabElementName);
        base.inputElements = $(base.inputElementsName);
        base.hidePassword = $(base.hidePasswordName);

        return base;
    },

    setState: function (state) {
        var base = this,
        elem = null;

        if (!state) {
            state = 0;
        }

        if (base.tabsElement) {
            elem = $(base.tabsElement[state]);
            elem.addClass("current");
            base.$activeTab = $("." + elem.attr("data-tabtar"));
            base.$activeTab.addClass("show");
            //
            //base.$activeTab.find('[tabIndex=1]').focus().click();
            //
        }

        return base;
    },

    getActiveTab: function () {
        var base = this;

        base.tabsElement.each(function (i, el) {
            if ($(el).hasClass("current")) {
                base.activeTab = $(el);
            }
        });

        return base;
    },

    addClickEvents: function () {
        var base = this;

        base.hidePassword.on("click", function (e) {
            var $this = $(this),
            $pwInput = $this.prev("input");
            $pwInput.toggleClass('fuckpass')
            if ($pwInput.hasClass("fuckpass")) {
                $this.text(dicLAN['js_001_22']);
            } else {
                $this.text(dicLAN['js_001_23']);
            }
        });

        base.tabsElement.on("click", function (e) {
            var targetTab = $(this).attr("data-tabtar");

            e.preventDefault();
            base.activeTab.removeClass("current");
            base.activeTab = $(this);
            base.activeTab.addClass("current");

            base.tabElement.each(function (i, el) {
                el = $(el);
                el.removeClass("show");
                if (el.hasClass(targetTab)) {
                    el.addClass("show");
                    base.$activeTab = el;
                }
            });
            //
            //base.$activeTab.find('[tabIndex=1]').focus().click();
            //
        });

        base.inputElements.find("label").on("click", function (e) {
            var $this = $(this),
            $input = $this.next("input");

            $input.focus();
        });

        return base;
    },
    hwData: function (uri, dat, cb) {
        var jqxhr = $.post(uri, dat, function () {
            //alert("success");
        }).done(function (res) {
            if (cb) cb({ rst: 'ok', dat: res });
        }).fail(function (jqxhr, settings, ex) {
            if (cb) cb({ rst: 'ng', dat: jqxhr });
        }).always(function () {

        });
    }
    , lockfrm: function (state) {
        if (window.parent.location != self.location) {
            window.parent.postMessage({ 'msgtype': 'session', 'msgkind': hash[0], 'evtData': { evt: 'lockform', origin: window.location.origin, state: state } }, hash[2]);
        } else {
            $('#helloguy').css('display', state);
        };
    }
    , hwndMsg: function (e) {
        //var base = this;
        if (e.data.msgtype == 'session') {
            //var selF = document.querySelector(".dz-hidden-input");
            //selF.focus();
            //setTimeout(function () {
            //    selF.click();
            //}, 100);
        }
        //alert("chrome tren may iphone cua ty bi quang message");
        //return base;
    }, captfn: function (that, kq) {
        var frm = $(that).closest('form'), captcha = frm.find('#captcha');
        $('#token').val(kq.token);
        frm.find('#captchaImg').html('<img src="' + kq.captcha + '"/>');
        captcha.val('');
        captcha.parent()[(kq.hasOwnProperty('err') && kq.accStatus == '2' ? 'add' : 'remove') + 'Class']('err');
    }, validBASE: function (field, eachCHK) {
        var base = this, DOCHK = function () {
            var errMsg = eachCHK();
            field.data("validation", { err: errMsg });
            field.parent()[(errMsg == '' ? 'remove' : 'add') + 'Class']('err');
            base.errDisplay();
            return errMsg;
        };
        field.off('blur').on('blur', function () {
            return DOCHK();
        });
        return DOCHK();
    }, validEmail: function (email) {
        return this.validBASE(email, function () {
            var errMsg = '';
            if (email.val() == '') {
                errMsg = dicLAN['js_001_17'];
            } else {
                var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                    isValidEmail = EmailRegex.test(email.val());
                if (!EmailRegex.test(email.val())) {
                    errMsg = dicLAN['js_001_17'];
                };
            };
            return errMsg;
        });
    }, validRegPass: function (pass) {
        return this.validBASE(pass, function () {
            var errMsg = '';
            if (pass.val().length < 5) {
                errMsg = dicLAN['js_001_18'].format("5");
            };
            return errMsg;
        });
    }, validRegPassAgain: function (pass, repass) {
        return this.validBASE(repass, function () {
            var errMsg = '';
            if (pass.val() != repass.val()) {
                errMsg = dicLAN['js_001_19'];
            };
            return errMsg;
        });
    }, validCaptcha: function (captcha) {
        return this.validBASE(captcha, function () {
            var errMsg = '';
            if (captcha.val() == '') {
                errMsg = dicLAN['js_001_20'];
            };
            return errMsg;
        });
    }, errDisplay: function () {
        var errs = [];
        this.$activeTab.find('.err').each(function (i, el) {
            errs.push('<kbd>' + $(el).find('input').data('validation').err + '</kbd>');
        });
        this.$activeTab.find('.errmsg').css('display', (errs.length > 0 ? '' : 'none')).html(errs.join(''));
        if (errs.length == 0) {
            var base = this;
            setTimeout(function () {
                if (base.submitBTNClick) base.submitBTNClick.trigger('click');
            }, 200);
        };
    }, register: function (_ist, base) {
        //
        base.submitBTNClick = null;
        //
        var frm = $(_ist).closest('form')
        , errmsg = frm.find('.errmsg')
        , email = frm.find('#reg-email')
        , captcha = frm.find('#captcha')
        , token = $('#token')
        , user_pw = frm.find('#user-pw')
        , user_pw_repeat = frm.find('#user-pw-repeat');
        //
        frm.find('.err').removeClass('err');
        //
        base.validEmail(email);
        if (base.validRegPass(user_pw) == '') {
            base.validRegPassAgain(user_pw, user_pw_repeat);
        };
        base.validCaptcha(captcha);
        if (this.$activeTab.find('.err').length > 0) {
            return;
        };
        //
        base.lockfrm('');
        //
        var that = $(_ist), dat = frm.serializeArray(); dat.push({ name: 'token', value: token.val() }, { name: 'session', value: hash[0] });
        base.hwData('/dangky?XDEBUG_SESSION_START=154A5348', dat, function (cb) {
            if (cb.rst == 'ok') {
                var kq = JSON.parse(cb.dat);
                email.parent()[(kq.accStatus == '1' ? 'add' : 'remove') + 'Class']('err');
                if (kq.accStatus != '0') {
                    base.captfn(that, kq);
                    errmsg.css('display', '');
                    for (var i = 0; i < kq.err.length; i++) {
                        kq.err[i] = '<kbd>' + dicLAN[kq.err[i]] + '</kbd>';
                    };
                    errmsg.html(kq.err.join(''));
                } else {
                    base.$activeTab.find('#regokmsg').css('display', '');
                    base.$activeTab.find('.logmod__form').css('display', 'none');
                };
                base.lockfrm('none');
            }
        });
    }, login: function (_ist, base) {
        //
        base.submitBTNClick = null;
        //
        //console.log('click');
        var frm = $(_ist).closest('form')
            , errmsg = frm.find('.errmsg')
            , email = frm.find('#log-email')
            , loginpw = frm.find('#loginpw')
            , token = $('#token');
        base.validEmail(email);
        base.validRegPass(loginpw);
        if (this.$activeTab.find('.err').length > 0) {
            return;
        };
        //
        base.lockfrm('');
        //email.prop('readonly', true);
        //loginpw.prop('readonly', true);
        var that = $(_ist), dat = frm.serializeArray(); dat.push({ name: 'token', value: token.val() }, { name: 'session', value: hash[0] });
        setTimeout(function () {
            base.hwData('/dangnhap?XDEBUG_SESSION_START=154A5348', dat, function (cb) {
                if (cb.rst == 'ok') {
                    var kq = JSON.parse(cb.dat);
                    if (kq.accStatus == '-1') {
                        errmsg.css('display', '').html(dicLAN['js_001_7']);
                        loginpw.val('');
                        base.lockfrm('none');
                    } else if (kq.accStatus == '-2') {
                        var logmod = $(".logmod");
                        logmod.html(kq.html);
                        logmod.find('[data-lang]').each(function (idx, el) {
                            var key = el.getAttribute('data-lang');
                            el.innerHTML = dicLAN[key];
                        });
                        base.lockfrm('none');
                    } else {
                        window.parent.postMessage({ 'msgtype': 'session', 'msgkind': hash[0], 'evtData': { evt: 'loginok', origin: window.location.origin, html: kq.html } }, hash[2]);
                    };
                }
            });
        }, 20);
    }, initialize: function () {
        var base = this;

        base.findElements().setState(hash[4] == 'log' ? 0 : 1).getActiveTab().addClickEvents();

        $('#createacc').on("mousedown touchstart", function () { base.submitBTNClick = $(this) }).click(function () {
            base.register(this, base);
        });
        $('#recreateacc').click(function () {
            base.$activeTab.find('#regokmsg').css('display', 'none');
            var frm = base.$activeTab.find('.logmod__form');
            frm.css('display', '');
            frm.find('.errmsg').css('display', 'none').html('');
            frm.find('#reg-email').off('blur').val('');
            frm.find('#captcha').off('blur').val('');
            frm.find('#user-pw').off('blur').val('');
            frm.find('#user-pw-repeat').off('blur').val('');
            frm.find('#captcha').off('blur').val('');
            frm.find('.refreshbtn').trigger('click');
        });

        $('#login').on("mousedown touchstart", function () { base.submitBTNClick = $(this) }).click(function () {
            base.login(this, base);
        });

        $('.refreshbtn').click(function () {
            $(this.parentNode).css('display', 'none');
            $(this.parentNode.parentNode).find('#captchaImg').html('<div class="spinner-border" style="margin-top: 5px;float: none;" role="status"><span class="sr-only">Loading...</span></div>');
            //
            var that = $(this), dat = $('#regform').serializeArray(); dat.push({ name: 'token', value: $('#token').val() });
            base.hwData('/renewcaptcha?XDEBUG_SESSION_START=154A5348', dat, function (cb) {
                if (cb.rst == 'ok') {
                    var kq = JSON.parse(cb.dat);
                    base.captfn(that, kq);
                    that.parent().css('display', '');
                }
            });
        });

        $('.logmod').on('click', '.logmod__close', function () {
            window.parent.postMessage({ 'msgtype': 'session', 'msgkind': hash[0], 'evtData': { evt: 'closed', origin: window.location.origin } }, hash[2]);
        });

        if (window.parent.location != self.location) {
            window.parent.postMessage({ 'msgtype': 'session', 'msgkind': hash[0], 'evtData': { evt: 'loaded', origin: window.location.origin } }, hash[2]);
            if (window.addEventListener) {
                window.addEventListener('message', base.hwndMsg, false);
            } else if (window.attachEvent) { // ie8
                window.attachEvent('onmessage', base.hwndMsg);
            };
        };

        $('input.string,input.sumbit').keypress(function (e) {
            if (e.which == 13) {
                e.preventDefault();
                var $next = base.$activeTab.find('[tabIndex=' + (+this.tabIndex + 1) + ']');
                if (!$next.length) {
                    $next = base.$activeTab.find('[tabIndex=1]');
                }
                //console.log($next.attr('tabIndex'));
                $next.focus().click();
            }
        });
      

        $('input#loginpw').bind('copy', function (e) {
            e.preventDefault();//prevent copy
        });

        $('.logmod__wrapper').fadeIn();
    }
};


$(document).ready(function () {
    $('[data-lang]').each(function (idx, el) {
        var key = el.getAttribute('data-lang');
        el.innerHTML = dicLAN[key];
    });
    LoginModalController.initialize();
    $('script').remove();

});
