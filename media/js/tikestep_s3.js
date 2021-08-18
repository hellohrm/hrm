(function (factory) {
    "use strict";
    FormWizard.s3calc = factory(null);//pass pubArgs later if need
})(function (pubArgs) {

    "use strict";
    if (!Array.from) {
        Array.from = (function () {
            var toStr = Object.prototype.toString;
            var isCallable = function (fn) {
                return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
            };
            var toInteger = function (value) {
                var number = Number(value);
                if (isNaN(number)) { return 0; }
                if (number === 0 || !isFinite(number)) { return number; }
                return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
            };
            var maxSafeInteger = Math.pow(2, 53) - 1;
            var toLength = function (value) {
                var len = toInteger(value);
                return Math.min(Math.max(len, 0), maxSafeInteger);
            };

            // The length property of the from method is 1.
            return function from(arrayLike/*, mapFn, thisArg */) {
                // 1. Let C be the this value.
                var C = this;

                // 2. Let items be ToObject(arrayLike).
                var items = Object(arrayLike);

                // 3. ReturnIfAbrupt(items).
                if (arrayLike == null) {
                    throw new TypeError("Array.from requires an array-like object - not null or undefined");
                }

                // 4. If mapfn is undefined, then let mapping be false.
                var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
                var T;
                if (typeof mapFn !== 'undefined') {
                    // 5. else
                    // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                    if (!isCallable(mapFn)) {
                        throw new TypeError('Array.from: when provided, the second argument must be a function');
                    }

                    // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                    if (arguments.length > 2) {
                        T = arguments[2];
                    }
                }

                // 10. Let lenValue be Get(items, "length").
                // 11. Let len be ToLength(lenValue).
                var len = toLength(items.length);

                // 13. If IsConstructor(C) is true, then
                // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
                // 14. a. Else, Let A be ArrayCreate(len).
                var A = isCallable(C) ? Object(new C(len)) : new Array(len);

                // 16. Let k be 0.
                var k = 0;
                // 17. Repeat, while k < len… (also steps a - h)
                var kValue;
                while (k < len) {
                    kValue = items[k];
                    if (mapFn) {
                        A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                    } else {
                        A[k] = kValue;
                    }
                    k += 1;
                }
                // 18. Let putStatus be Put(A, "length", len, true).
                A.length = len;
                // 20. Return A.
                return A;
            };
        }());
    }
    if (!String.prototype.repeat) {
        String.prototype.repeat = function (count) {
            'use strict';
            if (this == null)
                throw new TypeError('can\'t convert ' + this + ' to object');

            var str = '' + this;
            // To convert string to integer.
            count = +count;
            // Check NaN
            if (count != count)
                count = 0;

            if (count < 0)
                throw new RangeError('repeat count must be non-negative');

            if (count == Infinity)
                throw new RangeError('repeat count must be less than infinity');

            count = Math.floor(count);
            if (str.length == 0 || count == 0)
                return '';

            // Ensuring count is a 31-bit integer allows us to heavily optimize the
            // main part. But anyway, most current (August 2014) browsers can't handle
            // strings 1 << 28 chars or longer, so:
            if (str.length * count >= 1 << 28)
                throw new RangeError('repeat count must not overflow maximum string size');

            var maxCount = str.length * count;
            count = Math.floor(Math.log(count) / Math.log(2));
            while (count) {
                str += str;
                count--;
            }
            str += str.substring(0, maxCount - str.length);
            return str;
        }
    }

    var Termynal = (function () { // worker https://medium.com/young-coder/a-simple-introduction-to-web-workers-in-javascript-b3504f9d9d1c
        //https://gist.github.com/willywongi/5780151
        //http://www.smartjava.org/content/html5-easily-parallelize-jobs-using-web-workers-and-threadpool/

        'use strict';

        function O(container, opts) { // constructor
            //
            var $that = this

            , line2EL = function (ld) {
                var div = document.createElement('div');
                div.innerHTML = '<span ' + _attributes(ld) + '>' + (ld.value || '') + '</span>';
                return div.firstElementChild;
            }, prntLine = function (line, wNew) {
                var type = line.getAttribute($that.pfx),
                    delay = line.getAttribute($that.pfx + '-delay') || $that.lineDelay;

                if (type == 'input') {
                    //
                    line.setAttribute($that.pfx + '-cursor', $that.cursor);
                    //
                    $that_type(line).done(function (e) {
                        //
                        line.removeAttribute($that.pfx + '-cursor');
                        //
                        wNew(delay);
                    });
                    //
                } else if (type == 'progress') {
                    $that_progress(line).done(function (e) {
                        wNew(delay);
                    });
                } else {
                    $that.container.appendChild(line);
                    wNew(delay);
                }
                //
                if (opts.cbNewLine) opts.cbNewLine();
                //
            };

            //
            this.container = (typeof container === 'string') ? document.querySelector(container) : container;

            this.pfx = 'data-' + (opts.prefix || 'ty');

            this.startDelay = opts.startDelay
                || parseFloat(this.container.getAttribute(this.pfx + '-startDelay')) || 600;
            this.typeDelay = opts.typeDelay
                || parseFloat(this.container.getAttribute(this.pfx + '-typeDelay')) || 90;
            this.lineDelay = opts.lineDelay
                || parseFloat(this.container.getAttribute(this.pfx + '-lineDelay')) || 1500;
            this.progressLength = opts.progressLength
                || parseFloat(this.container.getAttribute(this.pfx + '-progressLength')) || 40;
            this.progressChar = opts.progressChar
                || this.container.getAttribute(this.pfx + '-progressChar') || '█';
            this.progressPercent = opts.progressPercent
                || parseFloat(this.container.getAttribute(this.pfx + '-progressPercent')) || 100;
            this.cursor = opts.cursor
                || this.container.getAttribute(this.pfx + '-cursor') || '▋';
            this.lineData = lineDataToElements(opts.lineData || []);
            if (!opts.noInit) init()



            function init() {
                //
                // Appends dynamically loaded lines to existing line elements.
                $that.lines = [].concat(_toConsumableArray($that.container.cloneNode(true).querySelectorAll('[' + $that.pfx + ']'))).concat($that.lineData);


                /** 
                 * Calculates width and height of Termynal container.
                 * If container is empty and lines are dynamically loaded, defaults to browser `auto` or CSS.
                 */
                //var containerStyle = getComputedStyle($that.container);
                //$that.container.style.width = containerStyle.width !== '0px' ? containerStyle.width : undefined;
                //$that.container.style.minHeight = containerStyle.height !== '0px' ? containerStyle.height : undefined;

                $that.container.setAttribute('data-termynal', '');
                $that.container.innerHTML = '';
                start();
            }

            function start() {
                _wait($that.startDelay).done(function (msg) {

                    var i = 0
                    , wNew = function (delay) {

                        i++;

                        if (i < $that.lines.length) {
                            _wait(delay).done(function (e) {
                                prntLine($that.lines[i], wNew);
                            });
                        }

                    };
                    //first run ...
                    if ($that.lines.length > 0) prntLine($that.lines[i], wNew);
                    //
                });
            }

            this.WriteLn = function (ld, callB) {
                var ln = line2EL(ld);
                prntLine(ln, function (delay) {
                    if (delay > 0) {
                        _wait(delay).done(function (e) {
                            if (callB) callB(ln);
                        });
                    } else {
                        if (callB) callB(ln);
                    };
                });
            };

            function $that_type(line) {

                var deferred = $.Deferred();

                var chars = [].concat(_toConsumableArray(line.innerHTML)),
                    delay = line.getAttribute($that.pfx + '-typeDelay') || $that.typeDelay;

                line.textContent = '';
                $that.container.appendChild(line);

                var i = 0;

                var eachChar = function () {

                    var char = chars[i];

                    _wait(delay).done(function (e) {

                        line.innerHTML += char;

                        i++;

                        if (i < chars.length) {
                            eachChar();
                        } else {
                            deferred.resolve('releaseWait');
                        };

                    });

                };
                //
                if (chars.length > 0) {
                    eachChar();
                } else {
                    deferred.resolve('releaseWait');
                };
                //
                return deferred.promise();
            }

            function $that_progress(line) {

                var progressLength = line.getAttribute($that.pfx + '-progressLength') || $that.progressLength,
                    progressChar = line.getAttribute($that.pfx + '-progressChar') || $that.progressChar,
                    chars = progressChar.repeat(progressLength),
                    progressPercent = line.getAttribute($that.pfx + '-progressPercent') || $that.progressPercent,
                    delay = line.getAttribute($that.pfx + '-progssDelay') || $that.typeDelay,

                   deferred = $.Deferred();

                line.innerHTML = '';
                $that.container.appendChild(line);

                var i = 1;//for (let i = 1; i < chars.length + 1; i++) {

                var eachPer = function () {

                    _wait(delay).done(function (e) {

                        var percent = Math.round(i / chars.length * 100);
                        line.innerHTML = chars.slice(0, i) + ' ' + percent + '%';

                        i++;
                        if (percent < progressPercent) {
                            eachPer();
                        } else {
                            deferred.resolve('releaseWait');
                        };

                    });
                }

                if (chars.length > 0) {
                    eachPer();
                } else {
                    deferred.resolve('releaseWait');
                };
                //
                return deferred.promise();
                //
            }

            this.att_progress = function (line, pO) {

                var progressLength = pO.progressLength || line.getAttribute($that.pfx + '-progressLength') || $that.progressLength,
                    progressChar = pO.progressChar || line.getAttribute($that.pfx + '-progressChar') || $that.progressChar,
                    chars = progressChar.repeat(progressLength),
                    progressPercent = pO.progressPercent || line.getAttribute($that.pfx + '-progressPercent') || $that.progressPercent,
                    delay = pO.typeDelay || line.getAttribute($that.pfx + '-progssDelay') || $that.typeDelay,

                   deferred = $.Deferred();

                line.innerHTML = '';
                //
                var i = 1;//for (let i = 1; i < chars.length + 1; i++) {

                var eachPer = function () {

                    _wait(delay).done(function (e) {

                        var percent = Math.round(i / chars.length * 100);
                        line.innerHTML = chars.slice(0, i) + ' ' + percent + '%';

                        i++;
                        if (percent < progressPercent) {
                            eachPer();
                        } else {
                            deferred.resolve('releaseWait');
                        };

                    });
                }

                if (chars.length > 0) {
                    eachPer();
                } else {
                    deferred.resolve('releaseWait');
                };
                //
                return deferred.promise();
                //
            }

            function _toConsumableArray(arr) {
                if (Array.isArray(arr)) {
                    for (var i = 0, arr2 = Array(arr.length) ; i < arr.length; i++) arr2[i] = arr[i]; return arr2;
                } else {
                    return Array.from(arr);
                }
            }
            function _attributes(line) {
                //var attrs = [$that.pfx];
                //for (var prop in line) {
                //    var attr = $that.pfx;
                //    if (prop === 'type') {
                //        attr += '="' + line[prop] + '" ';
                //    } else if (prop !== 'value') {
                //        attr += '-' + prop + '="' + line[prop] + '" ';
                //    };
                //    if (attrs.indexOf(attr) == -1) attrs.push(attr);
                //}
                //return  attrs.join(' ');

                var attrs = '';
                for (var prop in line) {
                    //
                    attrs += $that.pfx;
                    //
                    if (prop === 'type') {
                        attrs += '="' + line[prop] + '" ';
                    } else if (prop !== 'value') {
                        attrs += '-' + prop + '="' + line[prop] + '" ';
                    } else {
                        attrs += " ";
                    }
                }
                return attrs;
            }

            function lineDataToElements(lineData) {
                return lineData.map(function (line) {
                    return line2EL(line);
                });
            }

            function _wait(time) {
                var deferred = $.Deferred();
                if (time > 0) {
                    setTimeout(function () { deferred.resolve('_wait'); }, time);
                } else {
                    deferred.resolve('_wait');
                };
                //
                return deferred.promise();
                //return new Promise(resolve => setTimeout(resolve, time));
            }

        }
        O.prototype.publicSharedVar = 'quux';
        O.prototype.publicSharedMethod = function (param) {
            //this.line2EL
        };

        return O;
    })();

    var _wait = function (time) {
        var deferred = $.Deferred();
        if (time > 0) {
            setTimeout(function () { deferred.resolve('_wait'); }, time);
        } else {
            deferred.resolve('_wait');
        };
        return deferred.promise();
        //return new Promise(resolve => setTimeout(resolve, time));
    }
    , $that = {
        noshift: (function () { // scoping

            var gw3Ready = null;

            function privateSharedFunction() {
                // has access to privateSharedVar
                // may also access publicSharedVar via explicit MyObj.prototype
                // can't be called via this
            }
            function O(opts) { // constructor
                //
                var popupContentTemplate = function () {
                    //return $("<div>").append(
                    //  $(`<p>Full Name: <span>${employee.FirstName}</span>
                    //     <span>${employee.LastName}</span></p>`),
                    //  $(`<p>Birth Date: <span>${employee.BirthDate}</span></p>`),
                    //  $(`<p>Address: <span>${employee.Address}</span></p>`),
                    //  $(`<p>Hire Date: <span>${employee.HireDate}</span></p>`),
                    //  $(`<p>Position: <span>${employee.Position}</span></p>`)
                    //);
                },
                popupFilter = function (popup) {

                    return popup.dxPopup({
                        contentTemplate: popupContentTemplate,
                        width: 300,
                        height: 280,
                        //container: ".dx-viewport",
                        showTitle: true,
                        title: "Information",
                        visible: false,
                        dragEnabled: false,
                        closeOnOutsideClick: true,
                        showCloseButton: false,
                        position: {
                            at: "bottom",
                            my: "center",
                        },
                        toolbarItems: [{
                            widget: "dxButton",
                            toolbar: "bottom",
                            location: "before",
                            options: {
                                icon: "email",
                                text: "Send",
                                onClick: function (e) {
                                    //const message = `Email is sent to ${employee.FirstName} ${employee.LastName}`;
                                    DevExpress.ui.notify({
                                        message: 'message',
                                        position: {
                                            my: "center top",
                                            at: "center top"
                                        }
                                    }, "success", 3000);
                                },
                            }
                        }, {
                            widget: "dxButton",
                            toolbar: "bottom",
                            location: "after",
                            options: {
                                text: "Close",
                                onClick: function (e) {
                                    elUI['step3_rst_grid_popupFilter'].hide();
                                }
                            }
                        }]
                    }).dxPopup("instance");
                },
                destroyPSB = function (elUI) {
                    if (elUI.cmdS3_scroPerf) {
                        elUI.cmdS3_scroPerf.destroy();
                        delete elUI.cmdS3_scroPerf;
                    };
                },
                gRST_title = function (elUI, msg) {
                    if (elUI['step3_utils'].gridtitle) {
                        elUI['step3_utils'].gridtitle.find('.toolbar-label').html(msg);
                    };
                },
                LAN = opts.Args.LAN,
                elem, xwindow, terW, calR$U
                //
                , calcSession
                , evtWK = null
                , calcTerminate = false;

                //
                this.viewBack = function (elUI, frmEL, s2Caller) {
                    //
                    xwindow[0].scrollTop = 0;
                    //https://unicode-table.com/en/#miscellaneous-symbols
                    terW.append('<span data-ty="input" data-ty-prompt="⚠"> 1. Quy uoc gom log the gan nhau thanh 1</span>' +
                        '<span data-ty="input" data-ty-prompt="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>"> Cac Log gat the cach nhau nho hon hoac bang 0 ->1 minutes</span>' +
                        '<span data-ty="input" data-ty-prompt="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>"> Log duoc chon de tinh cong Log-1 -> Log-2/span>');

                    elUI.cmdS3_scroPerf.update();

                    xwindow[0].scrollTop = xwindow[0].scrollHeight;
                    //
                    gRST_title(elUI, "<i class='ti-alert'/> Ket qua cu hon Log gat the o #step-2");
                    //
                    xwindow.next().addClass('d-flex');//nut tinh lai
                    //
                    s2Caller();
                };

                this.exec = function (elUI, frmEL, s2Caller) {
                    //
                    destroyPSB(elUI);
                    //
                    elem = frmEL.find(".phantramcouting");
                    xwindow = frmEL.find('.kiem-the .xwindow').empty();
                    terW = $('<div class="termynal"/>').appendTo(xwindow);
                    //
                    xwindow.addClass('hide-overflow-y');//de cho no chay le, neu add PefectScrollbar vao thi no se anh huong performanace.
                    //
                    var that = this, step3_rst = frmEL.find('.kiem-the .step3_rst'), _allW = (elUI.allLOGs[1]) ? elUI.allLOGs[1].length : elUI.allLOGs[0][0].length, _W = 0
                    , wting
                    , okTinhCo = function () {
                        //
                        admin$.DEV(function () {
                            //
                            var G$RD = $.Deferred(), R$UL = $.Deferred();
                            //
                            wting = helloguy.clone();
                            wting.css({ 'display': '', 'position': 'absolute', 'height': '200px' }).removeAttr('id');
                            frmEL.find('.StepTitle-rule').parent().append(wting);
                            //
                            $.when(G$RD, R$UL).then(function (g,r) {
                                //
                                var calc = frmEL.find(".StepTitle-calc"),
                                    s3tit = calc.prev();

                                calc.parent().removeClass('text-center');
                                calc.next().fadeIn();
                                calc.css('display', "none");
                                //
                                s3tit.find('h2').text(LAN.js_004_19[2]);
                                s3tit.find('p').text(LAN.js_004_19[3]);
                                //
                                elem.next().css('display', "none");//hide text calcualating process ...
                                //
                                wting.detach();
                                //
                            });
                            //
                            gw3Ready = function (e) {
                                // debugger;
                                gw3Ready = null;
                                //
                                var trans = tra$Na.g(),
                                    transE=function(){
                                        //
                                        //elUI['step3_rst_grid'].repaint();
                                        //
                                        s2Caller();

                                        elem.parent().css('display', 'none'); // process bar
                                        xwindow.next().css('display', '');//nut tinh lai
                                        //
                                        G$RD.resolve('g');
                                        //
                                        //console.log(trans);
                                        //
                                        step3_rst.off(trans, transE);//ko off no raise 2 lan khi hover nut next
                                    };
                                step3_rst.one(trans, transE)
                                    .addClass()
                                    .slideDownTransition('height-transition');//slideToggle
                                //
                            };
                            //
                            //step3_rst.addClass('height-transition');
                            step3_rst_grid(R$UL);
                            //
                            srclocked(false); // unlock vi dev load chu ko phai chan truoc khi tinh
                            //
                        });
                        //
                        elem.next().css('display', 'none');// emp / total percent
                        //xwindow.removeClass('hide-overflow-y');//khong can remove class ra, PSB tu xu ly
                        elUI['cmdS3_scroPerf'] = new PerfectScrollbar(xwindow[0], {
                            suppressScrollX: true
                        });
                        //
                    }
                    , frame = function () {
                        //////elUI['xwindow_cmd'].find('.command-row').clone().appendTo(xwindow);
                        ////////
                        //////_W += 1;
                        //////var pW = parseInt(_W * 100 / _allW);
                        ////////
                        //////elem.css('width', pW.toString() + "%").html(pW.toString() + "%");
                        //////elem.next().css('width', (100 - pW).toString() + "%");
                        ////////
                        //////xwindow.animate({ scrollTop: xwindow[0].scrollHeight }, 10, function () {

                        //////});
                    }//, id = setInterval(frame, 50);
                    //
                    //
                    , csPrnt = new Termynal(terW[0], {
                        cbNewLine: function () {

                            xwindow[0].scrollTop = xwindow[0].scrollHeight;

                            //terW.animate({ scrollTop: terW[0].scrollHeight }, 1, function () {
                            //    //alert('scroll');
                            //});
                        }
                        , lineDelay: 5
                        //, typeDelay:10
                    });

                    var calc = frmEL.find(".StepTitle-calc").off('click').on('click', function () {
                        calcTerminate = true;
                        evtWK.contentWindow.postMessage({ messageType: '-9999' }, '*');
                        okTinhCo();
                    });
                    calc.next().css('display', 'none');
                    calc.parent().addClass('text-center');
                    calc.css('display', '');
                    //
                    //frmEL.find('#hc4logsx img.mr-3').attr("src", srcpf$ + '/media/images/quyuoc_log1.png');


                    //step3_rst.css('display', "none");//hide grid result TinhCo
                    step3_rst.removeClass('height-transition').addClass('height-transition-hidden');

                    //
                    //////if (!elUI['xwindow_cmd']) {
                    //////    elUI['xwindow_cmd'] = xwindow.clone();
                    //////};
                    ////////
                    //////xwindow.empty();
                    //
                    elem.parent().css('display', "none");
                    elem.css('width', "0%");
                    elem.next().css('display', ""); //show text calcualating process ...
                    elem.parent().css('display', "");
                    xwindow.next().off('click').on('click', function () {
                        //
                        var _$th = $(this);
                        //
                        opts.Args.tinhlaiCHK(function (rst) {
                            //
                            if (rst == 1) {//check before recount ok
                                //
                                opts.Args.lockStep(true);
                                that.exec(elUI, frmEL, s2Caller);
                                //
                            } else {

                            }
                        });
                        //
                    });
                    //
                    xwindow.next().removeClass('d-flex');//nut tinh lai
                    //
                    //debugger;
                    var loc = apisvr.a$.selected_language,
                        fD = new Date(new Date(elUI.allLOGs[0][1]).setHours(0, 0, 0, 0)),
                        tD = new Date(new Date(elUI.allLOGs[0][2]).setHours(24, 0, 0, 0)),
                        aRST = [],
                        datediff = function (dvt, s, e) {
                            if (dvt == 's') {
                                dvt = 1000;
                            } else if (dvt == 'm') {
                                dvt = 1000 * 60;
                            } else if (dvt == 'h') {
                                dvt = 1000 * 60 * 60;
                            } else if (dvt == 'd') {
                                dvt = 1000 * 60 * 60 * 24;
                            } else {
                                dvt = 1;
                            };
                            //
                            return parseInt((e.getTime() - s.getTime()) / dvt);
                        }
                    , eIdx = 0, runI = 1
                    , benchmark
                    //, WKer = new Worker(srcpf$ + '/media/js/attworker.js' + '?' + new Date().getTime())
                    , cbprogress = { progressLength: 40 }
                    //, calcTerminate = function () {
                    //    evtWK.parentNode.removeChild(evtWK);
                    //    delete apisvr.a$.sessions[calcSession];
                    //}
                    , isEmp = function () {
                        //
                        if (!benchmark) benchmark = new Date().getTime();
                        //
                        var a = elUI.allLOGs[0][0][eIdx]
                            , nextE = function () {
                                if (calcTerminate) return;// se ket thuc
                            eIdx++; runCALC();
                        };
                        //
                        if (elUI.allLOGs[1] && $.inArray(a.acno, elUI.allLOGs[1]) == -1) {
                            nextE();//next nay de skip cac emp ko can tinh
                            return; // continue for
                        };
                        //
                        runI += a.aLogs.length;//id for worker
                        //
                        //
                        setTimeout(function () {
                            _W += 1;
                            var pW = parseInt(_W * 100 / _allW);
                            //
                            elem.css('width', pW.toString() + "%").html(pW.toString() + "%");
                            elem.next().css('width', (100 - pW).toString() + "%").html(_W + ' / ' + _allW);
                        }, 1);
                        //
                        //
                        csPrnt.WriteLn({ prompt: '▲ acno', value: a.acno + ' Min log: ' + a.minL + ' Max log: ' + a.maxL, delay: 0 }, function () {
                            csPrnt.WriteLn({ value: 'couting ...', delay: 0 }, function (ln) {
                                //
                                var progressLength = 40
                                   , progressChar = '·'
                                   , chars = progressChar.repeat(progressLength)
                                   , progressPercent = csPrnt.progressPercent
                                   , calcMSG = function (evt) {
                                       //
                                        if (evt.messageType == '1') {//finish count acno
                                            //
                                            aRST = aRST.concat(evt.data);
                                            //
                                            nextE();// ben kia tra loi thi se next tiep
                                            //
                                        } else {//progress
                                            var a = evt.data,
                                                  //ln = cbprogress[a.acno],
                                                  percent = a.p;

                                            ln.innerHTML = chars.slice(0, Math.round(percent * progressLength / 100)) + ' ' + percent + '%'
                                        };
                                    };
                                //
                                apisvr.a$.sessions[calcSession].fn = function (a, b, c) {
                                    calcMSG(b.evtData);
                                }
                                //
                                evtWK.contentWindow.postMessage({ messageType: 0, a: a, delay: 1, loc: loc, runI: runI }, '*');
                                //
                            });
                        });
                        //
                    }
                    , calEMP = function (a, prgSPAN) {
                        //var deferred = $.Deferred();


                        var progressLength = 40,
                              progressChar = '·',
                              chars = progressChar.repeat(progressLength),
                              progressPercent = csPrnt.progressPercent,
                              delay = 0,

                              deferred = $.Deferred();

                        //      line.innerHTML = '';
                        //      //

                        var j = 0;//for (let i = 1; i < chars.length + 1; i++) {

                        var eachATT = function () {

                            _wait(delay).done(function (e) {

                                var eachE = {
                                    "id": aRST.length,
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
                                    if (dayjs(a.aLogs[j]).format('YYYY-MM-DD') == dayjs(a.aLogs[k]).format('YYYY-MM-DD')) {//equal date
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
                                var percent = Math.round((j + 1) / a.aLogs.length * 100);
                                prgSPAN.innerHTML = chars.slice(0, Math.round(percent * progressLength / 100)) + ' ' + percent + '%';


                                j++;
                                doLOOP();

                            });
                        }
                        , doLOOP = function () {
                            if (j < a.aLogs.length) {
                                eachATT();
                            } else {
                                deferred.resolve('releaseWait');
                            };
                        };
                        doLOOP();
                        //
                        return deferred.promise();


                        //for (var j = 0; j < a.aLogs.length; j++) {
                        //    //
                        //    //

                        //    //
                        //};

                        //a.aLogs.forEach(function (L, j) {
                        //    var phut = datediff('m', fD, L);
                        //});
                        //
                        //csPrnt.att_progress(prgSPAN, {}).done(function () {
                        //    console.log(a.acno + ' ' + (new Date().getTime() - benchmark));
                        //    deferred.resolve('releaseWait');
                        //});
                        //prgSPAN.innerHTML = new Date().getTime() - benchmark;
                        //return deferred.promise();
                    }
                    , runCALC = function () {
                        if (eIdx <= elUI.allLOGs[0][0].length - 1) {
                            //
                            isEmp();
                            //
                        } else {
                            //
                            //console.log(new Date().getTime() - benchmark);
                            //
                            //calcTerminate();
                            //
                            okTinhCo();
                            //
                        };
                    }
                    , tinhlaiSetting = function () {
                        var uiR = elUI['step3_utils']
                            , rule1 = [uiR.noise_rule.option('value') ? 1 : 0, uiR.noise_spec.option('value'), uiR.logs_effect.option('value')]
                            , deferred = $.Deferred();

                        if (JSON.stringify(rule1) != JSON.stringify(uiR.calcRule)) {
                            calR$U.WrLOG();

                            storeDAT._load(deferred, 2);

                        } else {
                            deferred.resolve();
                        }
                        return deferred;
                    }
                    , step3_rst_grid=function(R$UL) {//privateInstance
                        var countries = [{
                            "id": 1,
                            "acno": 1,
                            "ten": "Brazil",
                            "ngay": "2021-01-01",
                            "TongTG": 8,
                            "fio1": '08:00',
                            "fio2": '12:00',
                            "fio3": '13:00',
                            "fio4": '17:00',
                        }, {
                            "id": 2,
                            "acno": 1,
                            "ten": "Brazil",
                            "ngay": "2021-01-02",
                            "TongTG": 8,
                            "fio1": '08:00',
                            "fio2": '12:00',
                            "fio3": '13:00',
                            "fio4": '17:00',
                        }, {
                            "id": 3,
                            "acno": 1,
                            "ten": "Brazil",
                            "ngay": "2021-01-03",
                            "TongTG": 8,
                            "fio1": '08:00',
                            "fio2": '12:00',
                            "fio3": '13:00',
                            "fio4": '17:00',
                        }, {
                            "id": 4,
                            "acno": 1,
                            "ten": "Brazil",
                            "ngay": "2021-01-04",
                            "TongTG": 8,
                            "fio1": '08:00',
                            "fio2": '12:00',
                            "fio3": '13:00',
                            "fio4": '17:00',
                        }, {
                            "id": 5,
                            "acno": 1,
                            "ten": "Brazil",
                            "ngay": "2021-01-05",
                            "TongTG": 8,
                            "fio1": '08:00',
                            "fio2": '12:00',
                            "fio3": '13:00',
                            "fio4": '17:00',
                        }, {
                            "id": 6,
                            "acno": 1,
                            "ten": "Brazil",
                            "ngay": "2021-01-05",
                            "TongTG": 8,
                            "fio1": '08:00',
                            "fio2": '12:00',
                            "fio3": '13:00',
                            "fio4": '17:00',
                        }, {
                            "id": 7,
                            "acno": 1,
                            "ten": "Brazil",
                            "ngay": "2021-01-07",
                            "TongTG": 8,
                            "fio1": '08:00',
                            "fio2": '12:00',
                            "fio3": '13:00',
                            "fio4": '17:00',
                        }, {
                            "id": 8,
                            "acno": 1,
                            "ten": "Brazil",
                            "ngay": "2021-01-08",
                            "TongTG": 8,
                            "fio1": '08:00',
                            "fio2": '12:00',
                            "fio3": '13:00',
                            "fio4": '17:00',
                        }, {
                            "id": 9,
                            "acno": 1,
                            "ten": "Brazil",
                            "ngay": "2021-01-09",
                            "TongTG": 8,
                            "fio1": '08:00',
                            "fio2": '12:00',
                            "fio3": '13:00',
                            "fio4": '17:00',
                        }, {
                            "id": 10,
                            "acno": 1,
                            "ten": "Brazil",
                            "ngay": "2021-01-10",
                            "TongTG": 8,
                            "fio1": '08:00',
                            "fio2": '12:00',
                            "fio3": '13:00',
                            "fio4": '17:00',
                        }];

                        if (!elUI['step3_rst_grid']) {

                            var step3_rst_grid = step3_rst.find('.step3_rst_grid');

                            step3_rst_grid.on('mousedown touchstart', '.col-io-filter', function (e) {
               
                                e.preventDefault();
                                e.stopPropagation();

                                elUI['step3_rst_grid_popupFilter'].option({
                                    contentTemplate: function () { return popupContentTemplate(); },
                                    //"position.of": e.target
                                    position: {
                                        my: "right",
                                        at: "left",
                                        of: e.target
                                    }
                                });
                                elUI['step3_rst_grid_popupFilter'].show();
                            });

                            //debugger;
                            var viewLogs = [2]

                            , productTypes = [{
                                id: 1,
                                text: "2 Logs"
                            }, {
                                id: 2,
                                text: "4 Logs"
                            }, {
                                id: 3,
                                text: "6 Logs"
                            }, {
                                id: 4,
                                text: "8 Logs"
                            }]
                            , logCols_bk = function () {
                                var c = 1;
                                return [{
                                    caption: "In - Out",
                                    headerCellTemplate: function (container) {
                                        container.parent().append($('<i class="dx-icon-filter col-io-filter"></i>'));
                                        container.html('In - Out');
                                        //container.closest('td').css('background', 'red');
                                    },
                                    columns: [{
                                        caption: "In",
                                        dataField: "fio1", width: 60,
                                        cellTemplate: celltmp,
                                        dataType: "date",
                                        format: "HH:mm"
                                        , cssClass: "centerTD",
                                        editorOptions: { disabled: true }
                                    }, {
                                        caption: "Out",
                                        dataField: "fio2", width: 60,
                                        cellTemplate: celltmp,
                                        dataType: "date",
                                        format: "HH:mm"
                                        , cssClass: "centerTD",
                                        editorOptions: {
                                            disabled: true
                                        }
                                    }, {
                                        caption: "Total",
                                        dataField: "total1", width: 60
                                    }]
                                }
                                   ,
                                   {
                                       caption: "In - Out",
                                       headerCellTemplate: function (container) {
                                           //debugger;
                                           //container.insertBefore($('<i class="dx-icon-filter"></i> Tong TG (gio)'));

                                           container.parent().append($('<i class="dx-icon-filter col-io-filter"></i>'));
                                           container.html('Tong TG (gio)');
                                           container.closest('td').css('background', 'red');
                                       },
                                       columns: [{
                                           caption: "In",
                                           dataField: "fio3", width: 60,
                                           dataType: "date",
                                           format: "HH:mm",
                                           editorOptions: { disabled: true },
                                           cellTemplate: function (e, i) {
                                               //debugger;
                                               e.css({ "text-align": "center", 'background': 'red' });
                                               //e[0].style.background = 'red';
                                               e[0].innerHTML = i.text;
                                               //element.append("<div>" + info.text + "</div>").css({
                                               //    "textAlign": "center",
                                               //    "color": "blue"
                                           }
                                       }
                                       , {
                                           caption: "Out",
                                           dataField: "fio4", width: 60,
                                           dataType: "date",
                                           format: "HH:mm",
                                           editorOptions: { disabled: true },
                                           //cellTemplate: function (e, i) {
                                           //    debugger;
                                           //    e.css({ "text-align": "center", 'background': 'red' });
                                           //    //e[0].style.background = 'red';
                                           //    //e[0].innerHTML = i.text;
                                           //    //element.append("<div>" + info.text + "</div>").css({
                                           //    //    "textAlign": "center",
                                           //    //    "color": "blue"
                                           //},
                                           //headerCellTemplate: function (container) {
                                           //    //debugger;
                                           //    //container.append($("<div>Tong TG (gio)</div>"));
                                           //    //container.html('Tong TG (gio)');
                                           //    container.closest('td').css('background', 'red');
                                           //}
                                       }, {
                                           caption: "Total",
                                           dataField: "total2", width: 60,
                                           //headerCellTemplate: function (container) {
                                           //    //debugger;
                                           //    //container.append($("<div>Tong TG (gio)</div>"));
                                           //    //container.html('Tong TG (gio)');
                                           //    container.closest('td').css('background', 'red');
                                           //}
                                       }]
                                   }

                                   ,

                                   {
                                       headerCellTemplate: function (container) {
                                           //debugger;
                                           ////container.insertBefore($('<i class="dx-icon-filter"></i> Tong TG (gio)'));

                                           //container.parent().append($('<i class="dx-icon-filter col-io-filter"></i>'));
                                           //container.html('Tong TG (gio)');
                                           //container.closest('td').css('background', 'red');
                                       }
                                   }]
                            }
                            , logCols = function () {
                                var cols = [];
                                for (var i = 1; i <= viewLogs[0]; i++) {
                                    cols.push(colIO(i, cols.length));
                                };
                                cols.push({
                                    headerCellTemplate: function (container) {
                                        //debugger;
                                        ////container.insertBefore($('<i class="dx-icon-filter"></i> Tong TG (gio)'));

                                        //container.parent().append($('<i class="dx-icon-filter col-io-filter"></i>'));
                                        //container.html('Tong TG (gio)');
                                        //container.closest('td').css('background', 'red');
                                    }
                                });
                                return cols;
                            }
                            , colIO = function (idx, offset) {
                                return {
                                    caption: "In - Out",
                                    headerCellTemplate: function (container) {
                                        container.parent().append($('<i class="dx-icon-filter col-io-filter"></i>'));
                                        container.html('In - Out');
                                        //container.closest('td').css('background', 'red');
                                    },
                                    columns: [{
                                        caption: "In",
                                        dataField: "fio" + (idx + offset), width: 60,
                                        cellTemplate: celltmp,
                                        dataType: "date",
                                        format: "HH:mm"
                                        , cssClass: "centerTD",
                                        editorOptions: {
                                            disabled: true
                                        }
                                        , encodeHtml:false
                                    }, {
                                        caption: "Out",
                                        dataField: "fio" + (idx + offset + 1), width: 60,
                                        cellTemplate: celltmp,
                                        dataType: "date",
                                        format: "HH:mm"
                                        , cssClass: "centerTD",
                                        editorOptions: {
                                            disabled: true
                                        }
                                        , customizeText: function (e) {
                                            return '<span class="modif">(' + e.valueText + ')</span>';
                                        }
                                         , encodeHtml: false
                                    }, {
                                        hidingPriority: 4 + (viewLogs[0]-idx),//cot total hide tu right qua left
                                        caption: "Total",
                                        dataField: "total" + idx, width: 60
                                    }]
                                };
                            }
                            , changeInOutLogCols = function (newC) { //https://supportcenter.devexpress.com/ticket/details/t613263/datagrid-how-to-add-a-column-at-runtime

                                var grd = elUI['step3_rst_grid'],
                                  state = grd.state(),
                                  columns = grd.option("columns");

                                if (viewLogs[0] < newC) {//them vao 
                                    //
                                    var offset = viewLogs[0],
                                        insIdx = columns.length - 1; // last columns ; inset vao thi no se tu dong day colpadding ra ngoai

                                    for (var z = viewLogs[0] + 1; z <= newC; z++) {
                                        //const weekdays = ['monday', 'tuesday', 'thursday', 'friday']
                                        //const deletedArray = weekdays.splice(2, 0, 'wednesday');
                                        //[ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday' ]
                                        columns.splice(insIdx, 0, colIO(z, offset));//inset new inout truoc padding col
                                        //
                                        offset++;
                                        insIdx++
                                    };
                                    //
                                } else { // phai bo ra
                                    for (var z = columns.length - 2; z > 0; z--) {//bo cot padding cuoi cung
                                        var col = parseInt(columns[z].columns[2].dataField.split('total')[1]);
                                        if (col > newC) {
                                            columns.splice(z, 1);
                                        } else {
                                            break;
                                        };
                                    };
                                };
                                //
                                grd.option("columns", columns);
                                grd.state(state);
                                //
                                //
                                viewLogs[0] = newC;//update lai so luong log view hien tai cua grid
                                //
                                srclocked(false);
                                //
                            };

                            elUI['step3_rst_grid_cmd'] = $('<div/>').insertBefore(step3_rst_grid).dxToolbar({
                                items: [

                                        {
                                            location: 'before',
                                            widget: 'dxButton',
                                            options: {
                                                text: "Export Excel",
                                                onClick: function () {
                                                    exportExls();
                                                }
                                            }
                                        }, {
                                            location: 'before',
                                            widget: 'dxButton',
                                            options: {
                                                icon: "refresh",
                                                onClick: function () {
                                                    //elUI['step3_rst_grid'].refresh();
                                                    //debugger;
  
                                                    elUI['step3_utils'].gridtitle.html("<i class='ti-alert'/>" + new Date().getTime());
                                                }
                                            }
                                        }, {
                                            location: 'center',
                                            locateInMenu: 'never',
                                            template: function (e) {
                                                elUI['step3_utils'].gridtitle = $("<div><div class='toolbar-label'><h4>BANG CONG</h4></div></div>");
                                                return elUI['step3_utils'].gridtitle;
                                            }
                                        },
                                {
                                    location: "before",
                                    widget: "dxDropDownButton",
                                    locateInMenu: 'auto',
                                    options: {
                                        stylingMode: "text",
                                        displayExpr: "text",
                                        keyExpr: "cls",
                                        useSelectMode: true,
                                        items: [
                                              { cls: 10, text: "10px" },
                                              { cls: 11, text: "11px" },
                                              { cls: 12, text: "12px" },
                                              { cls: 13, text: "13px" },
                                              { cls: 14, text: "14px" }
                                        ],
                                        selectedItemKey: 13,
                                        onSelectionChanged: function (e) {
                                            //$("#text").css("font-size", e.item.size + "px");
                                            setTimeout(function () {
                                                elUI['step3_rst_grid']._$element.find('.dx-datagrid-content').removeClass("f10 f11 f12 f13 f14").addClass('f' + e.item.cls);
                                                elUI['step3_rst_grid'].repaint();
                                            }, 20);
                                        },
                                        itemTemplate: function (itemData) {
                                            return $("<div>")
                                                .text(itemData.text)
                                                .css("font-size", itemData.size + "px");
                                        }
                                    }
                                },
                                  {
                                      location: "before",
                                      widget: "dxDropDownButton",
                                      locateInMenu: 'auto',
                                      options: {
                                          //stylingMode: "text",
                                          icon: "indent",
                                          displayExpr: "text",
                                          keyExpr: "lineHeight",
                                          useSelectMode: true,
                                          items: [
                                                { lineHeight: 1, text: "1" },
                                                { lineHeight: 1.35, text: "1.35" },
                                                { lineHeight: 1.5, text: "1.5" },
                                                { lineHeight: 2, text: "2" }
                                          ],
                                          selectedItemKey: 1,
                                          onSelectionChanged: function (e) {
                                              elUI['step3_rst_grid'].option('height', e.item.lineHeight * 350);
                                          }
                                      }
                                  }
                                ,

                                {
                                    location: 'after',
                                    widget: 'dxSelectBox',
                                    locateInMenu: 'auto',
                                    options: {
                                        width: 140,
                                        items: productTypes,
                                        valueExpr: "id",
                                        displayExpr: "text",
                                        value: viewLogs[0],
                                        onValueChanged: function (args) {
                                            //
                                            srclocked(true);
                                            //
                                            setTimeout(function () {
                                                //
                                                changeInOutLogCols(args.value);
                                                //
                                            }, 10);
                                            //
                                        }
                                    }
                                }, {
                                    location: 'after',
                                    widget: 'dxButton',
                                    locateInMenu: 'auto',
                                    options: {
                                        icon: "plus",
                                        onClick: function () {
                                            //step3_rst.removeClass('height-transition').addClass('height-transition-hidden');
                                            DevExpress.ui.notify("Add button has been clicked!");
                                        }
                                    }
                                }, {
                                    locateInMenu: 'always',
                                    widget: 'dxButton',
                                    options: {
                                        text: 'Save',
                                        onClick: function () {
                                            DevExpress.ui.notify("Save option has been clicked!");
                                        }
                                    }
                                }, {
                                    locateInMenu: 'always',
                                    widget: 'dxButton',
                                    options: {
                                        text: 'Print',
                                        onClick: function () {
                                            DevExpress.ui.notify("Print option has been clicked!");
                                        }
                                    }
                                }, {
                                    locateInMenu: 'always',
                                    widget: 'dxButton',
                                    options: {
                                        text: 'Settings',
                                        onClick: function () {
                                            DevExpress.ui.notify("Settings option has been clicked!");
                                        }
                                    }
                                }


                                ]
                                //, visible: false,
                            }).dxToolbar('instance');
                            //
                            elUI['step3_rst_grid_popupFilter'] = popupFilter($('<div/>').appendTo(frmEL));
                            //
                            elUI['step3_rst_grid'] = step3_rst_grid.dxDataGrid({
                                keyExpr: 'id',
                                dataSource: aRST,
                                columnAutoWidth: false,
                                allowColumnReordering: false,
                                showBorders: true,
                                focusedRowEnabled: true
                                ,pager: {
                                    visible: true,
                                    allowedPageSizes: [50, 100,300,500, 'all'],
                                    showPageSizeSelector: true,
                                    showInfo: true,
                                    showNavigationButtons: true
                                }
                                ,paging: {
                                    pageSize: 50
                                }
                                ,keyboardNavigation: {
                                    enterKeyAction: "none",
                                    enterKeyDirection: "column",
                                    editOnKeyPress: false
                                }
                                ,editing: {
                                    mode: "batch",
                                    allowUpdating: false,
                                    startEditAction: "dblClick"
                                }
                                //, onEditorPreparing: function (e) {
                                //    e.cancel = true;
                                //}
                                , onFocusedCellChanging: function (e) {
                                    //
                                    e.isHighlighted = true;
                                    //
                                    if (elUI['step3_utils'].ignoreFocusedCellChanging && typeof elUI['step3_utils'].ignoreFocusedCellChanging === "function") {
                                        elUI['step3_utils'].ignoreFocusedCellChanging();
                                        return;
                                    };
                                    //
                                    var mi = viewLogs[2][0], ma = viewLogs[2][1],
                                        nC = e.newColumnIndex, pC = e.prevColumnIndex,
                                        nR = e.newRowIndex, pR = e.prevRowIndex,
                                        elt,
                                        evtType = e.event ? e.event.type : 'NULL',
                                        doFCs = function (r, c) {
                                            //
                                            elt = e.component.getCellElement(r, c);//max
                                            if (elt) {
                                                setTimeout(function () { e.component.focus(elt); }, 1);
                                            } else {
                                                flashPopOver(true);
                                            };
                                        },
                                        flashPopOver = function (isflash) {
                                            var po = elUI['step3_utils'].editPO;
                                            if (po._currentVisible) {
                                                //
                                                if (isflash) {
                                                    if (po._isflash !== 1) {//bo qua vi no se flash ko kip

                                                        flagFlash(po);
                                                       
                                                        po.hide();

                                                        po.show();

                                                    //} else {
                                                    //    console.log('flashPopOver bo qua vi no se flash ko kip');
                                                    };
                                                } else {
                                                    po.hide();
                                                };
                                            };
                                        },
                                        flagFlashTO = null,
                                        flagFlash = function (po) {
                                            clearTimeout(flagFlashTO);
                                            po._isflash = 1;
                                            flagFlashTO = setTimeout(function () { po._isflash = 0; }, 500);
                                        },
                                        preparePO = function () {
                                            //
                                            //console.log('onFocusedCellChanging: ' + new Date().getTime());
                                            //
                                            if (nC < mi || nC > ma ) {
                                                //
                                                e.cancel = true;
                                                //
                                                if (evtType == 'dxpointerdown') {
                                                    if (pC != -1 && pC != undefined && viewLogs[1][pC] && viewLogs[1][pC].indexOf('total') == -1) {
                                                        doFCs(nR, pC);//min
                                                        return;
                                                    };
                                                };
                                                //
                                                if (pR == nR) {
                                                    //
                                                    if (nC < pC) {
                                                        //
                                                        if (nR > 0) {

                                                            doFCs(nR - 1, ma - 1);//max la cot total //back row -1 ; max col

                                                        } else {

                                                            flashPopOver(true);

                                                        }
                                                        //
                                                    } else if (nC > pC) {//nex row -1 ; min col
                                                        //
                                                        doFCs(nR + 1, mi);//min
                                                        //
                                                    };
                                                } else {
                                                    //
                                                    doFCs(nR, mi);//min
                                                    //
                                                };
                                                //
                                            } else if (viewLogs[1][nC] && viewLogs[1][nC].indexOf('total') == 0) {
                                                //
                                                if ((pC==-1||pC==undefined) || (pR==-1||pR==undefined) || evtType == 'dxpointerdown') {//lan dau tien click vao field total
                                                    //
                                                    var po=elUI['step3_utils'].editPO;
                                                    if (po._currentVisible) po.hide();
                                                    //
                                                    return;// ko lam gi ca
                                                    //
                                                } else {
                                                    //
                                                    if (pR == nR) {
                                                        //
                                                        e.cancel = true;
                                                        //
                                                        if (nC < pC) {// BACK

                                                            if (nC < mi) {
                                                                //
                                                                if (nR > 0) {
                                                                    //
                                                                    doFCs(nR - 1, ma - 1);//max la cot total //back row -1 ; max col
                                                                    //
                                                                } else {

                                                                    flashPopOver(true);

                                                                };
                                                                //
                                                            } else {
                                                                //
                                                                doFCs(nR, nC - 1);//nhay sang back in-out inline Row.
                                                                //
                                                            };
                                                            //
                                                        } else if (nC > pC) {//nex row -1 ; min col

                                                            if (nC == ma) {// col total cua last in-out
                                                                //
                                                                doFCs(nR + 1, mi);//min row next
                                                                //
                                                            } else {
                                                                //
                                                                doFCs(nR, nC+1);//nhay sang next in-out inline Row.
                                                                //
                                                            };
                                                            //
                                                        };
                                                    } else { // focus at tatal cell && move keydown up down 
                                                        //
                                                        flashPopOver(false);
                                                        //
                                                        return;// ko lam gi ca
                                                        //
                                                    };
                                                };

                                            } else {
                                                //
                                                var f = e.columns[nC].dataField,
                                                    v = e.rows[nR].data[f],
                                                    ePO = elUI['step3_utils'].editPO;
                                                //
                                                ePO.atTD = [nR, f, v, nC, e.rows[nR].data];
                                                //
                                                if (nC == pC && nR == pR && ePO._currentVisible) {
                                                    if (ePO._isflash !== 1) {//bo qua vi no se flash ko kip

                                                        flagFlash(ePO);

                                                        ePO.hide();

                                                    //} else {
                                                    //    console.log('bo qua vi no se flash ko kip');
                                                    };

                                                };
                                                //
                                                ePO.show(e.cellElement);
                                                //
                                            };
                                        };
                                    //
                                    if (!elUI['step3_utils'].editPO) {
                                        //alert('preparePO: ' + srcp$f + '/media/utils/jsc/s3logedit.js' + src$id);
                                        srclocked(true);
                                        _gsC(srcp$f + '/media/utils/jsc/s3logedit.js' + src$id,'js', function (data) {
                                            //
                                            new s3logedit(elUI, [frmEL, elem, xwindow, terW, function (p,args) {
                                                switch (p) {
                                                    case 'saveDB': return storeDAT; break;
                                                    //case 'lan': return init_data['lang']; break;
                                                    //case 'alog': return init_data['attLOG']; break;
                                                    case 'exPopUp':{
                                                        var test1 = new _o$h.test();
                                                        test1.publicInstanceMethod();
                                                        return calR$U.exPopUp(args);
                                                        break;
                                                    }
                                                };
                                            }], s2Caller, apisvr.a$.selected_language)
                                            .editoR(svgR1, step3_rst);
                                            //
                                            preparePO();
                                            //
                                            srclocked(false);
                                            //
                                        }, 's3logedit');
                                    } else {
                                        preparePO();
                                    };
                                    //
                                    if (evtType == 'keydown') {
                                        //e.event.stopPropagation();
                                        //console.log('e.event.stopPropagation');
                                    };
                                    //
                                }
                                , onKeyDown: function (e) {
                                    //
                                    if ([13,27].indexOf(e.event.keyCode) ==-1) return;

                                    var po = elUI['step3_utils'].editPO;

                                    if (po) {
                                        //
                                        if (e.event.keyCode == 13) {//enter key
                                            //
                                            e.event.stopPropagation();//da bi bug roi, giu nguyen do
                                            //
                                            var atTD = po.atTD;
                                            e.component.getCellElement(atTD[0], atTD[3]).removeClass('dx-focused');
                                            //
                                            if (!po._currentVisible) po.show();
                                            //
                                            elUI['step3_utils'].edit_time.focus();
                                            //
                                        } else if (e.event.keyCode == 27) {//esc key
                                            //
                                            e.event.stopPropagation();//da bi bug roi, giu nguyen do
                                            //
                                            if (po._currentVisible) {
                                                po._$popupContent.find('.btnOK.closeact').trigger('click');
                                            };
                                            //
                                        };
                                        //
                                        e.handled = true;
                                    };
                                }
                                , height: 350
                                //,headerFilter: {
                                //    visible: true
                                //}
                                , columns: [].concat([{
                                                caption: '#',
                                                width: 50,
                                                cellTemplate: function (cellElement, cellInfo) {
                                                    var pI = elUI['step3_rst_grid'].pageIndex(); if (pI < 0) pI = 0;
                                                    cellElement.text(pI * elUI['step3_rst_grid'].pageSize() + cellInfo.row.rowIndex + 1)
                                                },
                                                hidingPriority: 0
                                            }
                                            , {
                                                headerCellTemplate: function (c) {
                                                    var srch=$('<div/>');
                                                    c.parent().addClass('noborder-bottom');
                                                    c.append(srch);

                                                    srch.dxTextBox({
                                                        mode: "search",
                                                        showClearButton: true,
                                                        //placeholder: DevExpress.localization.message.getDictionary()["dxDataGrid-searchPanelPlaceholder"],
                                                        //onKeyUp: searchByText,
                                                        onContentReady: function (e) {
                                                            //cmds.searchBOX = e.component;
                                                            e.component.element().find(".dx-icon-clear").click(function () {
                                                                //if (cmds.searchVAL != '') {
                                                                //    doSEARCH(e.value);
                                                                //};
                                                            });
                                                        },
                                                        onValueChanged: function (e) {
                                                            //if (cmds.searchVAL != e.value) {
                                                            //    doSEARCH(e.value);
                                                            //};
                                                        }
                                                    });

                                                    //container.closest('td').css('background', 'red');
                                                },
                                                columns: [{
                                                    dataField: "acno", 'caption': "Ma AC", width: 75
                                                }]
                                            }
                                            , {
                                                headerCellTemplate: function (c) {
                                                    var srch=$('<div/>');
                                                    c.parent().addClass('noborder-bottom');
                                                    c.append(srch);

                                                    srch.dxTextBox({
                                                        mode: "search",
                                                        showClearButton: true,
                                                        //placeholder: DevExpress.localization.message.getDictionary()["dxDataGrid-searchPanelPlaceholder"],
                                                        //onKeyUp: searchByText,
                                                        onContentReady: function (e) {
                                                            //cmds.searchBOX = e.component;
                                                            e.component.element().find(".dx-icon-clear").click(function () {
                                                                //if (cmds.searchVAL != '') {
                                                                //    doSEARCH(e.value);
                                                                //};
                                                            });
                                                        },
                                                        onValueChanged: function (e) {
                                                            //if (cmds.searchVAL != e.value) {
                                                            //    doSEARCH(e.value);
                                                            //};
                                                        }
                                                    });

                                                    //container.closest('td').css('background', 'red');
                                                },
                                                columns: [{
                                                    dataField: "ten", 'caption': "Ten Nhan Vien",
                                                    width: 200,
                                                    hidingPriority: 2
                                                }]
                                            }
                                            , {
                                                headerCellTemplate: function (c) {
                                                    //c.parent().append($(''));
                                                    c.parent().append($("<span  style='white-space: pre-wrap;'>Ngay</span><i class='dx-icon-filter col-io-filter' style='float:left'></i>"));
                                                },
                                                dataField: "ngay", 'caption': "Ngay", width: 100
                                            }
                                            , {
                                                headerCellTemplate: function (c) {
                                                    //c.parent().append($(''));
                                                    c.parent().prepend($("<div class='dx-icon-filter col-io-filter' style='float:none'></div>")).css({'padding-top':'10px'}).addClass('important-veraligntop');
                                                    //c.html("Weekday").css('margin-top','10px');
                                                    c.parent().append("<div style='overflow: hidden;text-overflow: ellipsis;'>Weekday</div>");
                                                },
                                                dataField: "thu", 'caption': "Weekday", width: 50
                                                , cssClass: "centerTD"
                                                , hidingPriority: 1
                                            }
                                            , {
                                                caption: 'Tong TG',
                                                headerCellTemplate: function (c) {
                                                    c.parent().prepend($("<div class='dx-icon-filter col-io-filter'style='float:none'>(Gio)</div>")).css({ 'padding-top': '10px' }).addClass('important-veraligntop');
                                                    //c.html("Tong TG").css('margin-top', '10px');
                                                    c.parent().append("<div>Tong TG</div>");

                                                    //c.parent().append($('<i class="dx-icon-filter col-io-filter"></i>')).css('width','calc(100% - 20px)');
                                                    //c.html("<span  style='white-space: pre-wrap'>(Gio)</span>");

                                                },
                                                dataField: "TongTG", width: 70
                                            }]

                                            , logCols())
                                , onContentReady: function (e) {
                                    //
                                    var allC = e.component._controllers.columns._columns,
                                        colM = {}, ma = 0, mi = 1000000, idx = 0;

                                    for (var i = 0; i < allC.length - 1; i++) {

                                        if (!allC[i].isBand) {
                                            //
                                            if (allC[i].dataField) {

                                                if (allC[i].dataField.indexOf('fio') == 0 || allC[i].dataField.indexOf('total') == 0) {
                                                    //
                                                    colM[idx] = allC[i].dataField;
                                                    //
                                                    if (idx > ma) ma = idx;
                                                    if (idx < mi) mi = idx;
                                                    //
                                                };
                                            };
                                            //
                                            idx += 1;
                                            //
                                        };
                                    };
                                    viewLogs[1] = colM;
                                    viewLogs[2] = [mi, ma];
                                    //
                                    if (gw3Ready && typeof gw3Ready === "function") gw3Ready(e);
                                    //
                                }
                                , onToolbarPreparing: function (e) {
                                    var dataGrid = e.component;
                                    e.toolbarOptions.visible = false;
                                    e.toolbarOptions.items.unshift(

                                            {
                                                location: 'center',
                                                locateInMenu: 'never',
                                                template: function () {
                                                    return $("<div class='toolbar-label'><b>Tom's Club</b> Products</div>");
                                                }
                                            }


                                    );
                                }
                                , onContextMenuPreparing: function (e) {
                                       if (e.row && e.row.rowType === "data") {
                                           e.items = [
                                                            {
                                                                text: 'Share',
                                                                icon: 'dx-icon-globe',
                                                                template: contextMn,
                                                                items: [
                                                                    { text: 'Facebook' },
                                                                    { text: 'Twitter' }]
                                                            },
                                                          { text: 'Download', icon: 'dx-icon-download', template: contextMn },
                                                          { text: 'Add Comment', icon: 'dx-icon-add', template: contextMn },
                                                          { text: 'Add to Favorite', icon: 'dx-icon-favorites', template: contextMn },

                                                          {
                                                              text: "edit", icon: 'dx-icon-download',
                                                              onItemClick: function () {
                                                                  e.component.editRow(e.row.rowIndex);
                                                              },
                                                              template: contextMn
                                                          },
                                                           {
                                                               text: "insert",
                                                               onItemClick: function () {
                                                                   e.component.addRow();
                                                               }
                                                           },
                                                           {
                                                               text: "delete",
                                                               onItemClick: function () {
                                                                   e.component.deleteRow(e.row.rowIndex);
                                                               }
                                                           }];
                                       }
                                   }
                                , onExporting: function (e) {
                                       var workbook = new ExcelJS.Workbook();
                                       var worksheet = workbook.addWorksheet('Employees');

                                       DevExpress.excelExporter.exportDataGrid({
                                           component: e.component,
                                           worksheet: worksheet,

                                           autoFilterEnabled: true,//show filter column excel result

                                           customizeCell: function (options) {
                                               //
                                               if (options.gridCell.rowType == 'data') {
                                                   if (options.gridCell.column.dataField && options.gridCell.column.dataField.indexOf('fio') == 0) {
                                                       var excelCell = options.excelCell;
                                                       //excelCell.font = { name: 'Arial', size: 12 };
                                                       //excelCell.alignment = { horizontal: 'left' };

                                                       excelCell.value = options.gridCell.value;
                                                       excelCell.alignment = { horizontal: 'center' };
                                                       excelCell.font = {
                                                           name: 'Arial Black',
                                                           color: { argb: 'FF00FF00' },
                                                           family: 2,
                                                           size: 14,
                                                           italic: true
                                                       }

                                                       excelCell.note = {
                                                           texts: [
                                                             { 'font': { 'size': 12, 'color': { 'theme': 1 }, 'name': 'Calibri', 'family': 2, 'scheme': 'minor' }, 'text': 'This is ' },
                                                             { 'font': { 'italic': true, 'size': 12, 'color': { 'theme': 1 }, 'name': 'Calibri', 'scheme': 'minor' }, 'text': 'a' },
                                                             { 'font': { 'size': 12, 'color': { 'theme': 1 }, 'name': 'Calibri', 'family': 2, 'scheme': 'minor' }, 'text': ' ' },
                                                             { 'font': { 'size': 12, 'color': { 'argb': 'FFFF6600' }, 'name': 'Calibri', 'scheme': 'minor' }, 'text': 'colorful' },
                                                             { 'font': { 'size': 12, 'color': { 'theme': 1 }, 'name': 'Calibri', 'family': 2, 'scheme': 'minor' }, 'text': ' text ' },
                                                             { 'font': { 'size': 12, 'color': { 'argb': 'FFCCFFCC' }, 'name': 'Calibri', 'scheme': 'minor' }, 'text': 'with' },
                                                             { 'font': { 'size': 12, 'color': { 'theme': 1 }, 'name': 'Calibri', 'family': 2, 'scheme': 'minor' }, 'text': ' in-cell ' },
                                                             { 'font': { 'bold': true, 'size': 12, 'color': { 'theme': 1 }, 'name': 'Calibri', 'family': 2, 'scheme': 'minor' }, 'text': 'format' },
                                                           ],
                                                           margins: {
                                                               insetmode: 'custom',
                                                               inset: [0.25, 0.25, 0.35, 0.35]
                                                           },
                                                           protection: {
                                                               locked: true,
                                                               lockText: false
                                                           },
                                                           editAs: 'twoCells',
                                                       };

                                                   };
                                               }
                                               //
                                           }
                                       }).then(function () {
                                           workbook.xlsx.writeBuffer().then(function (buffer) {
                                               saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Employees.xlsx');
                                           });
                                       });
                                       e.cancel = true;
                                },
                            }).dxDataGrid('instance');


                            var logs_effect = frmEL.find(".logs-effect"),
                                med = logs_effect.closest('.media'),
                                svgR1,
                                applyR = function (data,isNEW) {

                                    svgR1 = $('<div class="sellog-before"/>').html(data);
                                    if (!isNEW) {
                                        var sct = svgR1.find('script'), stxt = sct[0].innerHTML;
                                        sct.remove();
                                    };
                                    //
                                    med.prepend(svgR1).ready(function (e) {
                                        //
                                        calR$U = new freeot_rule1(elUI, [frmEL, elem, xwindow, terW], s2Caller, apisvr.a$.selected_language);
                                        calR$U.RU(svgR1, logs_effect, step3_rst);
                                        //
                                        R$UL.resolve('r');
                                        //
                                    });
                                };

                            //
                            window.calc_rules = window.calc_rules || {};
                            //
                            if (!window.calc_rules.freeot_rule1) {
                                $.get(srcp$f + '/media/utils/rule1.html' + src$id, function (data) {
                                    //
                                    window.calc_rules.freeot_rule1 = data;
                                    //
                                    applyR(data,true);
                                    //
                                });

                            } else {
                                applyR(window.calc_rules.freeot_rule1, false);
                            };
                            //
                        } else {
                            //debugger;
                            gRST_title(elUI, "<h4>BANG CONG</h4>");
                            //
                            elUI['step3_rst_grid'].option({ 'dataSource': aRST ,'paging.pageSize':50});
                            elUI['step3_rst_grid'].clearSorting();
                            elUI['step3_rst_grid'].clearSelection();
                            elUI['step3_rst_grid'].clearFilter();
                            //
                            R$UL.resolve('r');
                            //
                        };

                        function exportExls() {
                            var doE = function () {
                                elUI['step3_rst_grid'].exportToExcel(false);
                            };
                            if (GetIEVersion() == 11) {
                                _gsC('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js', 'js', function () {
                                    _gsC('https://cdnjs.cloudflare.com/ajax/libs/exceljs/3.3.1/exceljs.min.js', 'js', function () {
                                        _gsC('https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js', 'js', function () {
                                            //
                                            elUI['step3_rst_grid'].exportToExcel(false);
                                            //
                                        }, 'FileSaver.min.js');
                                    }, 'exceljs.min.js');
                                }, 'polyfill.min.js');
                            } else {
                                //<script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/3.3.1/exceljs.min.js"></script>
                                //<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js"></script>
                                _gsC('https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js', 'js', function () { }, 'FileSaver.min.js');
                                //_gsC('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js', 'js', function () {

                                //}, 'jszip.min.js');


                                _gsC('https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.2.1/exceljs.min.js', 'js', function () {
                                    //
                                    elUI['step3_rst_grid'].exportToExcel(false);
                                    //
                                }, 'exceljs.min.js');
                            };

                        };

                        var contextMn = function (itemData, itemIndex, itemElement) {
                            //debugger;
                            var template = $('<div></div>');
                            if (itemData.icon) {
                                template.append('<span class="' + itemData.icon + '"><span>');
                            }
                            if (itemData.items) {
                                template.append('<span class="dx-icon-spinright"><span>');
                            }
                            template.append(itemData.text);
                            return template;
                        }, celltmp = function (e, i) {
                            //debugger;
                            e[0].style.textAlign = 'center';
                            //e[0].style.background = 'red';
                            e[0].innerHTML = i.text;
                            //element.append("<div>" + info.text + "</div>").css({
                            //    "textAlign": "center",
                            //    "color": "blue"
                            //});
                        }
                    }
                    , storeDAT = {
                        _load: function (dbLOG, a, b, c, d, e, f) {
                            //
                            if (elUI.hasUA == 'noU') {

                                var tc4 = elUI.s3dbTB[1]
                                    , _diag = elUI.s3dbTB[0];
                                //
                                lo$DB(function (db) {

                                    if (db.kq == 0) {//create new
                                        //
                                        debugger;
                                        if (a === 1) {//load
                                            db.cb('cancel');
                                            //khong tao moi
                                            dbLOG.resolve();
                                        } else {
                                            //
                                            var D$b = db.e.target.result
                                            //
                                            //uncomment if we want to start clean
                                            if (D$b.objectStoreNames.contains(tc4)) D$b.deleteObjectStore(tc4);
                                            if (D$b.objectStoreNames.contains(_diag)) D$b.deleteObjectStore(_diag);
                                            //
                                            var his = D$b.createObjectStore(_diag, { keyPath: "userid" });
                                            //his.createIndex("HisIndex", "uptime");
                                            //
                                            var tc = D$b.createObjectStore(tc4, { keyPath: "id", autoIncrement: true });
                                            tc.createIndex("LogIndex", "logid");
                                            //
                                        };
                                        //
                                    } else if (db.kq == 1) { //ok

                                        var req, ts = db.rst.transaction([_diag], a == 1 ? "readonly" : "readwrite");

                                        if (a == 1) {//load
                                            var remStore = ts.objectStore(_diag);
                                            req = remStore.get(-1);
                                        } else {
                                            var remStore = ts.objectStore(_diag);
                                            req = remStore.put({ userid: 1, conf: a });
                                        }


                                        req.onsuccess = function (e) {
                                            debugger;
                                            dbLOG.resolve(e);
                                        };

                                    }
                                }, 'hellohrm_s3tinhcong')
                            } else {
                                var chnel = evtWK.contentWindow.chanelLog;
                                opts.Args.stepcodeback('___').comm1.loghole(evtWK.contentWindow, chnel[1]
                                                , '53335f4b49454d434f4e47' //S3_KIEMCONG
                                                , { logh: '', logkind: 1 });
                            };
                        }
                        ,_save: function (a) {
                            debugger;
                            if (elUI.hasUA == 'noU') {
                                //
                                var tc4 = elUI.s3dbTB[1], _diag = elUI.s3dbTB[0];
                                //
                                lo$DB(function (db) {
                                    if (db.kq == 0) {//create new
                                        //
                                        db.cb('cancel');
                                        //khong tao moi
                                        dbLOG.resolve();

                                        var D$b = db.e.target.result;//var Db = e.target.result;
                                        //
                                        //uncomment if we want to start clean
                                        if (D$b.objectStoreNames.contains(tc4)) D$b.deleteObjectStore(tc4);
                                        if (D$b.objectStoreNames.contains(_diag)) D$b.deleteObjectStore(_diag);
                                        //
                                        var his = D$b.createObjectStore(_diag, { keyPath: "userid" });
                                        //his.createIndex("HisIndex", "uptime");
                                        //
                                        var tc = D$b.createObjectStore(tc4, { keyPath: "id", autoIncrement: true });
                                        tc.createIndex("LogIndex", "logid");
                                        //
                                    } else if (db.kq == 1) { //ok

                                        var req, ts = db.rst.transaction([_diag], "readwrite")
                                            , remStore = ts.objectStore(_diag);

                                        req = remStore.put({ userid: 1, conf: a });

                                        req.onsuccess = function (e) {
                                            debugger;
                                        };

                                    }
                                }, 'hellohrm_s3tinhcong');

                            } else {
                            };
                        }
                        , diagsetting: function (a) {
                            this._save(a);
                        }
                    }
                    , saveDBx = function (a) {
                        debugger;
                        //
                        var diagsetting = function () {
                        }
                        , abc = function () {
                        }
                        this[a.act]();

                        alert(d$oc);
                        if (elUI.hasUA == 'noU') {

                            st('setItem', elUI.s3dbTB[0], window.btoa(JSON.stringify(dat)));//cmVtX2F0dGxvZw== rem_attlog

                            //s3czNkaWFnX2NvbmY=
                            //var tc4 = elUI.s3dbTB[1], _diag = elUI.s3dbTB[0];
                            //lo$DB(function (db) {
                            //    if (db.kq == 0) {//create new
                            //        //
                            //        var D$b = db.e.target.result;//var Db = e.target.result;
                            //        //
                            //        //uncomment if we want to start clean
                            //        if (D$b.objectStoreNames.contains(tc4)) D$b.deleteObjectStore(tc4);
                            //        if (D$b.objectStoreNames.contains(_diag)) D$b.deleteObjectStore(_diag);
                            //        //
                            //        var his = D$b.createObjectStore(_diag, { keyPath: "id" });
                            //        //his.createIndex("HisIndex", "uptime");
                            //        //
                            //        var tc = D$b.createObjectStore(tc4, { keyPath: "id", autoIncrement: true });
                            //        tc.createIndex("LogIndex", "logid");
                            //        //
                            //    } else if (db.kq == 1) { //ok
                            //        //var req, ts = db.rst.transaction([remTB], (evt == 0) ? "readonly" : "readwrite"),
                            //        //    remStore = ts.objectStore(remTB);

                            //        //if (evt == 1) {//check & load

                            //        //    req = remStore.get(remId);

                            //        //} else if (evt == 2) { //check & save
                            //        //    req = remStore.put({ id: remId, conf: logCONF(), log: elUI['showinvisibles'].val() });
                            //        //};

                            //        //req.onsuccess = function (e) {
                            //        //    if (evt == 2) {
                            //        //        de$(e.target.result);
                            //        //    } else {
                            //        //        if (de$) de$.resolve(e.target.result);
                            //        //    };
                            //        //};
                            //    }
                            //}, 'hellohrm_s3tinhcong');

                        } else {
                        }
                        elUI['step3_utils'].editPO.fuckMN.fuckSZ.hide();
                        srclocked(false);
                        //
                    }
                    //
                    , initCALc = function () {
                        //
                        var test_prototype = frmEL.find('#test_prototype');
                        test_prototype.empty();
                        //
                        test_prototype.off('click').on('click', function () {
                            xwindow[0].scrollTop = 0;
                            //https://unicode-table.com/en/#miscellaneous-symbols
                            terW.html('<span data-ty="input" data-ty-prompt="⚡ [12:00]"> 1. Quy uoc gom log the gan nhau thanh 1</span>' +
                                '<span data-ty="input" data-ty-prompt="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>"> Cac Log gat the cach nhau nho hon hoac bang 0 ->1 minutes</span>' +
                                '<span data-ty="input" data-ty-prompt="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>"> Log duoc chon de tinh cong Log-1 -> Log-2/span>');

                            elUI.cmdS3_scroPerf.update();

                            xwindow[0].scrollTop = xwindow[0].scrollHeight;
                            //
                            xwindow.next().addClass('d-flex');//nut tinh lai
                            //
                        });
                        //
                        //
                        if (!evtWK) {
                            //
                            // khoi tao lai 
                            elUI['step3_utils'] = {
                                calcRule: [1, 5, 'before'] //1: select rule, 5: 5 phut gan nhau se gom the, before select log before/after before: lay the truoc,
                            };
                            //
                            calcSession = new Date().getTime();
                            //
                            var ifrmLOAD = $.Deferred(), calcReady = $.Deferred()
                            , s3DAT = function () {
                                if (elUI.hasUA == 'noU') {
                                    //
                                    //ifrmLOAD.resolve('ifrmLOAD'); resolve at lo$DB
                                    storeDAT._load(ifrmLOAD, 1);
                                    //
                                } else {
                                    evtWK.contentWindow.cbHwnd = function (e) {
                                        evtWK.contentWindow.cbHwnd = null;
                                        ifrmLOAD.resolve('ifrmLOAD');
                                        //
                                    };
                                    var alog = opts.Args.stepcodeback('alog');
                                    opts.Args.stepcodeback('___').comm1.loghole(evtWK.contentWindow
                                        , alog
                                        , '53335f4b49454d434f4e47' //S3_KIEMCONG
                                        , {
                                            logh: '', logkind: 1, ori: window.location.origin + ';*'// window.location.protocol + "//" + alog.addr//btoa(JSON.stringify(['<script type="text/javascript" seson=' + btoa(calcSession + '|' + window.location.origin) + ' src="' + srcpf$ + '/media/js/attcalc.js' + src$id + '"></script>'
                                            //, '<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.6/dayjs.min.js"></script>']))
                                        });
                                };
                            };
                            //
                            //
                            $.when(ifrmLOAD, calcReady).then(function (ifm, calc) {

                                runCALC();
                            });
                            //
                            apisvr.a$.sessions[calcSession] = {
                                id: calcSession,
                                fn: function (a, b, c) {
                                    if (a == 'job') {
                                        if (b.evtData.messageType == 0) {//calc ready !
                                            calcReady.resolve('calc');
                                        };
                                    };
                                }
                            };
                            //
                            //
                            evtWK = document.createElement('iframe');
                            evtWK.setAttribute("style", "height:1px;width:1px;border:none;opacity:0");
                            //
                            evtWK.onload = function (ifm) {
                                //
                                setTimeout(s3DAT, 1);//di load data
                                //
                                var iDoc = evtWK.contentWindow.document
                                    , attcalc = iDoc.createElement('script');
                                //
                                if (GetIEVersion() == 11) {//phai cho no load truoc.
                                    var poly = iDoc.createElement('script');
                                    poly.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js');
                                    iDoc.head.appendChild(poly);
                                };
                                //
                                attcalc.setAttribute('seson', btoa(calcSession + '|' + window.location.origin));
                                attcalc.setAttribute('src', srcpf$ + '/media/js/attcalc.js' + src$id);//'https://hrm.dnd.vn'
                                iDoc.head.appendChild(attcalc);
                                //
                            };
                            // div tag in which iframe will be added should have id attribute with value myDIV
                            step3_rst[0].appendChild(evtWK);
                            //
                        } else {
                            calcTerminate = false;
                            tinhlaiSetting().then(function (rst) {
                                runCALC();
                            });
                        };
                        //
                    }()
                };
            }
            O.prototype.publicSharedVar = 'quux';
            O.prototype.publicSharedMethod = function (param) {
                // has access to shared and public vars
                // canonical way for method creation:
                // try to use this as much as possible
            };

            return O;
        })()
    };


    return {
        createCalc: function (o) {
            return new $that[o.kind](o);
        }
    };
});