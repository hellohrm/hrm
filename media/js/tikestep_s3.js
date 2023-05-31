(function (factory) {
    "use strict";
    FormWizard.s3calc = factory(null);//pass pubArgs later if need
})(function (pubArgs) {

    "use strict";
    //if (!Array.from) {
    //    Array.from = (function () {
    //        var toStr = Object.prototype.toString;
    //        var isCallable = function (fn) {
    //            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    //        };
    //        var toInteger = function (value) {
    //            var number = Number(value);
    //            if (isNaN(number)) { return 0; }
    //            if (number === 0 || !isFinite(number)) { return number; }
    //            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    //        };
    //        var maxSafeInteger = Math.pow(2, 53) - 1;
    //        var toLength = function (value) {
    //            var len = toInteger(value);
    //            return Math.min(Math.max(len, 0), maxSafeInteger);
    //        };

    //        // The length property of the from method is 1.
    //        return function from(arrayLike/*, mapFn, thisArg */) {
    //            // 1. Let C be the this value.
    //            var C = this;

    //            // 2. Let items be ToObject(arrayLike).
    //            var items = Object(arrayLike);

    //            // 3. ReturnIfAbrupt(items).
    //            if (arrayLike == null) {
    //                throw new TypeError("Array.from requires an array-like object - not null or undefined");
    //            }

    //            // 4. If mapfn is undefined, then let mapping be false.
    //            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
    //            var T;
    //            if (typeof mapFn !== 'undefined') {
    //                // 5. else
    //                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
    //                if (!isCallable(mapFn)) {
    //                    throw new TypeError('Array.from: when provided, the second argument must be a function');
    //                }

    //                // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
    //                if (arguments.length > 2) {
    //                    T = arguments[2];
    //                }
    //            }

    //            // 10. Let lenValue be Get(items, "length").
    //            // 11. Let len be ToLength(lenValue).
    //            var len = toLength(items.length);

    //            // 13. If IsConstructor(C) is true, then
    //            // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
    //            // 14. a. Else, Let A be ArrayCreate(len).
    //            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

    //            // 16. Let k be 0.
    //            var k = 0;
    //            // 17. Repeat, while k < len… (also steps a - h)
    //            var kValue;
    //            while (k < len) {
    //                kValue = items[k];
    //                if (mapFn) {
    //                    A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
    //                } else {
    //                    A[k] = kValue;
    //                }
    //                k += 1;
    //            }
    //            // 18. Let putStatus be Put(A, "length", len, true).
    //            A.length = len;
    //            // 20. Return A.
    //            return A;
    //        };
    //    }());
    //}
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

    //var Termynal = (function () { // worker https://medium.com/young-coder/a-simple-introduction-to-web-workers-in-javascript-b3504f9d9d1c
    //    //https://gist.github.com/willywongi/5780151
    //    //http://www.smartjava.org/content/html5-easily-parallelize-jobs-using-web-workers-and-threadpool/

    //    'use strict';

    //    function O(container, opts) { // constructor
    //        //
    //        var $that = this

    //        , line2EL = function (ld) {
    //            var div = document.createElement('div');
    //            div.innerHTML = '<span ' + _attributes(ld) + '>' + (ld.value || '') + '</span>';
    //            return div.firstElementChild;
    //        }
    //        , prntLine = function (line, wNew) {
    //            var type = line.getAttribute($that.pfx),
    //                ide = line.getAttribute($that.pfx + '-delay'),
    //                delay = ide || $that.lineDelay;

    //            //
    //            //
    //            if (type == 'input') {
    //                //
    //                line.setAttribute($that.pfx + '-cursor', $that.cursor);
    //                //
    //                $that_type(line).done(function (e) {
    //                    //
    //                    line.removeAttribute($that.pfx + '-cursor');
    //                    //
    //                    wNew(delay);
    //                    //
    //                }).fail(function (e) {
    //                    line.removeAttribute($that.pfx + '-cursor');
    //                });
    //                //
    //            } else if (type == 'progress') {
    //                $that_progress(line).done(function (e) {
    //                    wNew(delay);
    //                });
    //            } else {
    //                $that.container.appendChild(line);
    //                wNew(delay);
    //                if (opts.cbNewLine) opts.cbNewLine();
    //            };
    //            //
    //            if (ide) line.removeAttribute($that.pfx + '-delay');
    //        };

    //        //
    //        this.container = (typeof container === 'string') ? document.querySelector(container) : container;

    //        this.pfx = 'data-' + (opts.prefix || 'ty');

    //        this.startDelay = opts.startDelay
    //            || parseFloat(this.container.getAttribute(this.pfx + '-startDelay')) || 600;
    //        this.typeDelay = opts.typeDelay
    //            || parseFloat(this.container.getAttribute(this.pfx + '-typeDelay')) || 90;
    //        this.lineDelay = opts.lineDelay
    //            || parseFloat(this.container.getAttribute(this.pfx + '-lineDelay')) || 1500;
    //        this.progressLength = opts.progressLength
    //            || parseFloat(this.container.getAttribute(this.pfx + '-progressLength')) || 40;
    //        this.progressChar = opts.progressChar
    //            || this.container.getAttribute(this.pfx + '-progressChar') || '█';
    //        this.progressPercent = opts.progressPercent
    //            || parseFloat(this.container.getAttribute(this.pfx + '-progressPercent')) || 100;
    //        this.cursor = opts.cursor
    //            || this.container.getAttribute(this.pfx + '-cursor') || '▋';
    //        this.lineData = lineDataToElements(opts.lineData || []);
    //        if (!opts.noInit) init()



    //        function init() {
    //            //
    //            // Appends dynamically loaded lines to existing line elements.
    //            $that.lines = [].concat(_toConsumableArray($that.container.cloneNode(true).querySelectorAll('[' + $that.pfx + ']'))).concat($that.lineData);


    //            /** 
    //             * Calculates width and height of Termynal container.
    //             * If container is empty and lines are dynamically loaded, defaults to browser `auto` or CSS.
    //             */
    //            //var containerStyle = getComputedStyle($that.container);
    //            //$that.container.style.width = containerStyle.width !== '0px' ? containerStyle.width : undefined;
    //            //$that.container.style.minHeight = containerStyle.height !== '0px' ? containerStyle.height : undefined;

    //            $that.container.setAttribute('data-termynal', '');
    //            $that.container.innerHTML = '';
    //            //start();
    //        }

    //        //function start() {
    //        //    _wait($that.startDelay).done(function (msg) {

    //        //        var i = 0
    //        //        , wNew = function (delay) {

    //        //            i++;

    //        //            if (i < $that.lines.length) {
    //        //                _wait(delay).done(function (e) {
    //        //                    prntLine($that.lines[i], wNew);
    //        //                });
    //        //            }

    //        //        };
    //        //        //first run ...
    //        //        if ($that.lines.length > 0) prntLine($that.lines[i], wNew);
    //        //        //
    //        //    });
    //        //}

    //        this.WriteLns = function (lds, callB) {
    //            var i = 0
    //            , lns = {}
    //            , wNew = function (ln,delay) {

    //                if (lds[i].__cb) lds[i].__cb(ln, delay);

    //                i++;

    //                if (i < lds.length) {

    //                    _wait(delay).done(function (e) {

    //                        lns[i] = $that.WriteLn(lds[i], wNew);

    //                    });

    //                } else {

    //                    if (callB) callB(lns);

    //                };

    //            };
    //            //first run ...
    //            if (lds.length > 0) {
    //                lns[i]=$that.WriteLn(lds[i], wNew);
    //            } else {
    //                if (callB) callB(lns);
    //            };
    //        };

    //        this.WriteLn = function (ld, callB) {

    //            var ln = line2EL(ld);
    //            if (ld.hasOwnProperty('stopWait')) {
    //                ln.stopWait = ld.stopWait;
    //            };
    //            //
    //            prntLine(ln, function (delay) {
    //                if (delay > 0) {
    //                    _wait(delay).done(function (e) {
    //                        if (callB) callB(ln, delay);
    //                    });
    //                } else {
    //                    if (callB) callB(ln, delay);
    //                };
    //            });
    //            return ln;
    //        };

    //        function $that_type(line) {

    //            var deferred = $.Deferred()

    //                , chars = [].concat(_toConsumableArray(line.innerHTML))
    //                , ide = line.getAttribute($that.pfx + '-typeDelay')
    //                , delay = ide || $that.typeDelay
    //                , i = 0
    //                , d0ne = function (e) {
    //                    //
    //                    line.innerHTML += chars[i];
    //                    //
    //                    i++;
    //                    //
    //                    if (i < chars.length) {
    //                        eachChar();
    //                    } else {
    //                        deferred.resolve('releaseWait');
    //                    };
    //                    //
    //                }
    //                , eachChar;
    //            //
    //            //
    //            if (ide) line.removeAttribute($that.pfx + '-typeDelay');
    //            line.textContent = '';
    //            $that.container.appendChild(line);
    //            //                //
    //            if (chars.length > 0) {
    //                //
    //                if (line.stopWait) {
    //                    eachChar = function () {
    //                        line.stopWait._stop = wAit(delay).done(d0ne).fail(function () {
    //                            //line.innerHTML += chars[i];
    //                            deferred.reject('stop');
    //                        }).promise.stop; };
    //                } else {
    //                    eachChar = function () { _wait(delay).done(d0ne); };
    //                };
    //                //
    //                eachChar();
    //                //
    //            } else {
    //                deferred.resolve('releaseWait');
    //            };
    //            //
    //            if (opts.cbNewLine) opts.cbNewLine();// co the gom lai sau 1 function, nhung ko gom vi muon lay cai deferred nay
    //            //
    //            return deferred.promise();
    //        }

    //        function $that_progress(line) {

    //            var progressLength = line.getAttribute($that.pfx + '-progressLength') || $that.progressLength,
    //                progressChar = line.getAttribute($that.pfx + '-progressChar') || $that.progressChar,
    //                chars = progressChar.repeat(progressLength),
    //                progressPercent = line.getAttribute($that.pfx + '-progressPercent') || $that.progressPercent,
    //                delay = line.getAttribute($that.pfx + '-progssDelay') || $that.typeDelay,

    //               deferred = $.Deferred();

    //            line.innerHTML = '';
    //            $that.container.appendChild(line);

    //            var i = 1;//for (let i = 1; i < chars.length + 1; i++) {

    //            var eachPer = function () {

    //                _wait(delay).done(function (e) {

    //                    var percent = Math.round(i / chars.length * 100);
    //                    line.innerHTML = chars.slice(0, i) + ' ' + percent + '%';

    //                    i++;
    //                    if (percent < progressPercent) {
    //                        eachPer();
    //                    } else {
    //                        deferred.resolve('releaseWait');
    //                    };

    //                });
  
    //            }

    //            if (chars.length > 0) {
    //                eachPer();
    //            } else {
    //                deferred.resolve('releaseWait');
    //            };
    //            //
    //            if (opts.cbNewLine) opts.cbNewLine();// co the gom lai sau 1 function, nhung ko gom vi muon lay cai deferred nay
    //            //
    //            return deferred.promise();
    //            //
    //        }

    //        this.att_progress = function (line, pO) {

    //            var progressLength = pO.progressLength || line.getAttribute($that.pfx + '-progressLength') || $that.progressLength,
    //                progressChar = pO.progressChar || line.getAttribute($that.pfx + '-progressChar') || $that.progressChar,
    //                chars = progressChar.repeat(progressLength),
    //                progressPercent = pO.progressPercent || line.getAttribute($that.pfx + '-progressPercent') || $that.progressPercent,
    //                delay = pO.typeDelay || line.getAttribute($that.pfx + '-progssDelay') || $that.typeDelay,

    //               deferred = $.Deferred();

    //            line.innerHTML = '';
    //            //
    //            var i = 1;//for (let i = 1; i < chars.length + 1; i++) {

    //            var eachPer = function () {

    //                _wait(delay).done(function (e) {

    //                    var percent = Math.round(i / chars.length * 100);
    //                    line.innerHTML = chars.slice(0, i) + ' ' + percent + '%';

    //                    i++;
    //                    if (percent < progressPercent) {
    //                        eachPer();
    //                    } else {
    //                        deferred.resolve('releaseWait');
    //                    };

    //                });
    //            }

    //            if (chars.length > 0) {
    //                eachPer();
    //            } else {
    //                deferred.resolve('releaseWait');
    //            };
    //            //
    //            return deferred.promise();
    //            //
    //        }

    //        function _toConsumableArray(arr) {
    //            if (Array.isArray(arr)) {
    //                for (var i = 0, arr2 = Array(arr.length) ; i < arr.length; i++) arr2[i] = arr[i]; return arr2;
    //            } else {
    //                return Array.from(arr);
    //            }
    //        }
    //        function _attributes(line) {
    //            //var attrs = [$that.pfx];
    //            //for (var prop in line) {
    //            //    var attr = $that.pfx;
    //            //    if (prop === 'type') {
    //            //        attr += '="' + line[prop] + '" ';
    //            //    } else if (prop !== 'value') {
    //            //        attr += '-' + prop + '="' + line[prop] + '" ';
    //            //    };
    //            //    if (attrs.indexOf(attr) == -1) attrs.push(attr);
    //            //}
    //            //return  attrs.join(' ');

    //            var attrs = '';
    //            for (var prop in line) {
    //                //
    //                attrs += $that.pfx;
    //                //
    //                if (prop === 'type') {
    //                    attrs += '="' + line[prop] + '" ';
    //                } else if (['value', 'stopWait',"__cb"].indexOf(prop) == -1) {
    //                    attrs += '-' + prop + '="' + line[prop] + '" ';
    //                } else {
    //                    attrs += " ";
    //                }
    //            }
    //            return attrs;
    //        }

    //        function lineDataToElements(lineData) {
    //            return lineData.map(function (line) {
    //                return line2EL(line);
    //            });
    //        }

    //        var Deferred$$ = function () {//https://codereview.stackexchange.com/questions/15743/custom-function-extending-jquery-deferred
    //            var def = new $.Deferred()
    //                , pr0m = def.promise;
    //            //
    //            def.pr0m$ = function () {
    //                //expose the custom method to the returned promise
    //                pr0m.stop = function (p) {
    //                    //
    //                    clearTimeout(def.timeoutId);
    //                    def.reject();
    //                    //
    //                };
    //                return pr0m();
    //            };
    //            return def;
    //        };

    //        function wAit(time) {
    //            //
    //            var defer = new Deferred$$();
    //            //
    //            if (time > 0) {

    //                defer.timeoutId = setTimeout(function () {
    //                    defer.resolve('_wait');
    //                }, time);

    //            } else {
    //                //
    //                defer.resolve('_wait');
    //                //
    //            };
    //            //
    //            return defer.pr0m$();
    //            //return new Promise(resolve => setTimeout(resolve, time));
    //        }

    //    }
    //    O.prototype.publicSharedVar = 'quux';
    //    O.prototype.publicSharedMethod = function (param) {
    //        //this.line2EL
    //    };

    //    return O;
    //})();

    //var _wait = function (time) {
    //    var deferred = new $.Deferred();
    //    if (time > 0) {
    //        setTimeout(function () { deferred.resolve('_wait'); }, time);
    //    } else {
    //        deferred.resolve('_wait');
    //    };
    //    return deferred.promise();
    //    //return new Promise(resolve => setTimeout(resolve, time));
    //}
    //, 
    var $that = {
        noshift: (function () { // scoping

            var gw3Ready = null, bySEARCH = null;

            function privateSharedFunction() {
                // has access to privateSharedVar
                // may also access publicSharedVar via explicit MyObj.prototype
                // can't be called via this
            }
            function O(opts) { // constructor
                //

                var gRST_title = function (elUI, msg) {
                    if (elUI['step3_utils'].gridtitle) {
                        elUI['step3_utils'].gridtitle.find('.toolbar-label').html(msg);
                    };
                },
                s3manual_runstep=[],

                LAN = opts.Args.LAN,
                elem, xwindow, terW, pagilog, calc_cores, step3_rst, tieude,calc,s3tit
                , calR$U
                , that = this
                , isRECALC = false
                , isVIEWBACK = false
                //
                , calcSession
                , evtWK = null
                , s3in = {
                    forceIfrm: false,//true: force use iframe
                    pagi_ep: 5,
                    pagi_pnu: 9,
                    ruleLogN: [[1, 5, 'before'],[1, 5, 'after'],0], //1: select rule, 5: 5 phut gan nhau se gom the, before select log before/after before: lay the truoc,
                    aa: [0, 100], // core tinh toan
                    m: 0,//_wait(s3in.m).done(function (e) {
                    z: 0,//postArgs[0] = { messageType: 0, a: a, delay: s3in.z,
                    gazi: [100, 200, 200], //gauge size [0]:min,[1] max,[2] limit height move title under console screen
                };
                //
                //
                this.viewBack = function (elUI, frmEL, s2Caller, nutTinhLai) {
                    //
                    xwindow[0].scrollTop = 0;
                    //https://unicode-table.com/en/#miscellaneous-symbols
                    terW.append('<span data-ty="input" data-ty-prompt="⚠"> 1. Quy uoc gom log the gan nhau thanh 1</span>' +
                        '<span data-ty="input" data-ty-prompt="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>"> Cac Log gat the cach nhau nho hon hoac bang 0 ->1 minutes</span>' +
                        '<span data-ty="input" data-ty-prompt="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>"> Log duoc chon de tinh cong Log-1 -> Log-2/span>');

                    if (elUI.cmdS3_scroPerf) elUI.cmdS3_scroPerf.update();

                    xwindow[0].scrollTop = xwindow[0].scrollHeight;
                    //
                    gRST_title(elUI, "<i class='ti-alert'/> Ket qua cu hon Log gat the o #step-2");
                    //
                    if (nutTinhLai) {
                        xwindow.next().addClass('d-flex');//nut tinh lai
                    };
                    //
                    isVIEWBACK = true;//dang view back
                    //
                    s2Caller();
                };

                this.exec = function (elUI, frmEL, s2Caller) {
                    //
                    if (!elem) {
                        elem = frmEL.find(".phantramcouting");
                        xwindow = frmEL.find('.kiem-the .xwindow').empty();
                        terW = $('<div class="termynal"/>').appendTo(xwindow);
                        calc_cores = frmEL.find('.kiem-the .calc_cores');
                        step3_rst = frmEL.find('.kiem-the .step3_rst');
                        tieude = calc_cores.next();
                        calc = tieude.find(".StepTitle-calc");
                        s3tit = calc.prev();
                        //
                        s3manual_runstep[0] = xwindow.parent().find('#s3manual_runstep').on('click', function (e) { // chi dung de run manual step
                            //
                            clearTimeout(s3manual_runstep[2]);//xoa timeout next step
                            //
                            var $t = $(this), bk = $t.text();
                            $t.text('manual next step ...');
                            setTimeout(function () {
                                s3manual_runstep[1]();//thuc thi nextstep
                                $t.text(bk);
                            }, 100);
                            //
                        });
                        //
                    };
                    //
                    var aRST = []
                        , exATT = []
                        , minmaxL=[]
                        , benchmark
                        , lstFilterHead = {}
                        , _tieudeBack = false
                        , _allW = 0
                        , _W = 0
                        , srcATT
                        , pgIdx = 0, cntJ = 0, totLOG = 0// phai la 0 de khi nhay vao se len 1 , ko duoc thay doi, vi da view log run
                        , uiP1 = function () {
                            calc_cores.parent().addClass('in-calc');//de hien sub-title, bi  hide boi logrule-changed
                            //
                            pagilog = xwindow.prev().find('.pagi-log').css('display', 'none').off('click');
                            pagilog.find('.prev').closest('li').nextAll(':lt(-2)').remove(); //https://stackoverflow.com/questions/19244327/jquery-next-nextall-nextuntil-with-count-limit
                            pagilog.p = [];
                            //
                            terW.empty();//clear all old log
                            //
                            xwindow.addClass('hide-overflow-y');//de cho no chay le, neu add PefectScrollbar vao thi no se anh huong performanace.
                            //
                            aRST = []
                            , exATT = []
                            , benchmark
                            //, lstFilterHead = {}//khi tinh cong lai thi ko duoc reset header filter, vi no chi load 1 lan khi load file rule1.html
                            , _tieudeBack = false
                            , _allW = 0
                            , _W = 0
                            , pgIdx = 0, cntJ = 0, totLOG = 0
                            //
                            , isVIEWBACK = false//tinh thi ko phai la view back
                            //
                            , minmaxL=[]
                            , srcATT = $.extend(true, {}, elUI.allLOGs);//extend clone copy nho tham so true!
                            //
                            if (srcATT[0][0].length > 0) {
                                //lay index 2=minL,index3=maxL
                                minmaxL=minmaxL.concat([new Date(srcATT[0][1]).setHours(0, 0, 0), new Date(srcATT[0][2]).setHours(0, 0, 0)]);
                            };
                        };

                    uiP1();

                    var s2params = this

                    , uz = function (t) {
                        var ku = {
                            CALC_H: { a: LAN.js_004_19[0], b: LAN.js_004_19[7] },
                            initCALc: { a: ['Initializing ...'], b: ['.'.repeat(30)] },
                            initCORE: { a: ['Build calculator'], b: ['Last state verifing ...'] },
                            iniS3DAT: { a: [], b: [] },
                            initCO: { a: [], b: [] }
                        };
                        return ku[t][isRECALC || !elUI['akq']  ? 'a' : 'b'];
                    }

                    , _self = function (p, cb) {
                        switch (p) {
                            case 'se': {//server engine
                                var alog = opts.Args.stepcodeback('alog');
                                if (!alog.key) {
                                    cb(alog, s__r);
                                    return opts.Args.stepcodeback('___');
                                } else {
                                    cb(alog);
                                    return s__r;
                                };
                                break;
                            }
                            case 'save-calc-setting': {
                                cb();
                                break;
                            }
                            case 'O': {
                                //return [PFS];
                                break;
                            }
                            default: {
                                break;
                            }

                        };
                    }
                    , wting
                    , okTinhCo = function () {
                        //
                        var waiL = csPrnt.WriteLn({ value: 'Showing data please wait ...', delay: 0 })// wait line
                            , G$RD = $.Deferred()
                            , R$UL = $.Deferred()
                            , m$G = $.Deferred()
                            , _ls = (new Date().getTime() - benchmark)//ket thuc...
                            , showRST = function () {
                                //
                                $(waiL).remove();//remove wait line
                                //
                                _ls = _ls > 0 ? (_ls > 30000) ? Math.floor(_ls / 30000) + 's' : _ls + ' ms' : '';
                                //
                                var msg = [{
                                    type: 'input', prompt: '>', value: 'total logs: ', typeDelay: 20, delay: 0, __cb: function (ln) {//
                                        ln.innerHTML += '<i class="d0nmsg">' + cntJ + '</i>';
                                    }
                                }
                                    ,
                                    {
                                        type: 'input', prompt: '>', value: 'total employees: ', typeDelay: 20, __cb: function (ln) {//⏰
                                            ln.innerHTML += '<i class="d0nmsg">' + _W + '</i>';
                                        }
                                    },
                                    {
                                        type: 'input', prompt: '>', value: 'total time: ', typeDelay: 20, __cb: function (ln) {//⏰
                                            ln.innerHTML += '<i class="d0nmsg">' + _ls + '</i>';
                                        }
                                    }
                                ];
                                if (cntJ > 0) {
                                    msg.push({
                                        type: 'input', prompt: '✅', value: '~.'.repeat(5) + ' From: ' + new Date(srcATT[0][3]).toLocaleDateString(loc) + ' To: ' + new Date(srcATT[0][4]).toLocaleDateString(loc) + '.~'.repeat(5), typeDelay: 10
                                    });
                                };
                                csPrnt.WriteLns(msg, function (ln) {
                                    //
                                    pagi(1); //page cuoi cung
                                    //
                                    m$G.resolve();
                                    //
                                });
                            };
                        //
                        //fire fox ko hien thi duoc grid lan dau tien
                        calc.css('display', "none");
                        s3tit.find('p').css('display', 'none');
                        //
                        s3tit.find('h2').text(LAN.js_004_19[6]); //tieu de tinh cong
                        //
                        step3_rst.css('display', "");//show lai grid result TinhCo hy vong no khong render trong qua trinh tinh cong
                        //
                        admin$.DEV(function () {
                            //
                            wting = helloguy.clone();
                            wting.css({ 'display': '', 'position': 'absolute', 'min-height': '200px' }).removeAttr('id').find('.bgwaitcolor').remove();
                            calc.parent().append(wting);
                            //
                            $.when(G$RD, R$UL).then(function (g, r) {
                                //
                                calc.parent().next().fadeIn();
                                //
                                s3tit.find('h2').text(LAN.js_004_19[2]);//tieu de tinh cong
                                s3tit.find('p').text(LAN.js_004_19[3]).css('display', '');
                                //
                                elem.next().css('display', "none");//hide text calcualating process ...
                                //
                                //
                                wting.detach();
                                //
                                logPAG();//tinh page cho log console
                                //
                                PFS(1);//enable scroll console screen
                                //
                                //remove luon de khoi phien phuc khi full screen hoac filter!!!
                                setTimeout(function () {
                                    step3_rst.removeClass('height-transition').css({ 'max-height': 'none' });
                                }, 1500);
                                //
                            });
                            //
                            gw3Ready = function (e) {
                                // debugger;
                                gw3Ready = null;
                                //
                                showRST();
                                //
                                $.when(m$G).then(function (g, r) {
                                    calc_cores.fadeOut(function () {
                                        //
                                        calc_cores.empty();
                                        //
                                        var transE = function (e) {
                                            //
                                            //step3_rst.off(trans, transE);//ko off no raise 2 lan khi hover nut next
                                            //
                                            //
                                            s2Caller();

                                            elem.parent().css('display', 'none'); // process bar
                                            xwindow.next().css('display', '');//nut tinh lai
                                            //
                                            //
                                            G$RD.resolve('g');
                                            //
                                            //elUI['step3_rst_grid'].repaint();
                                            //
                                        };
                                        //dat tieu de quay ve vi tri sau core calc...
                                        if (_tieudeBack) tieude.insertAfter(calc_cores);
                                        //
                                        step3_rst.slideDownTransition('height-transition');//slideToggle
                                        //
                                        setTimeout(transE, 200);
                                        //
                                    });
                                });
                                //
                            };
                            //
                            step3_rst_gridFN(R$UL);
                            //
                            srclocked(false); // unlock vi dev load chu ko phai chan truoc khi tinh
                            //
                        });
                        //
                        elem.next().css('display', 'none');// emp / total percent
                        //
                        G$RD.promise();
                        R$UL.promise();
                        m$G.promise();
                    }
                    , PFS = function (f) {//perfect scrollbar
                        //xwindow.removeClass('hide-overflow-y');//khong can remove class ra, PSB tu xu ly
                        if (i$Desk) {
                            if (elUI['cmdS3_scroPerf']) {
                                if (f == 0) {
                                    elUI['cmdS3_scroPerf'].destroy();
                                    delete elUI['cmdS3_scroPerf'];
                                }
                            } else {
                                if (f == 1) {
                                    elUI['cmdS3_scroPerf'] = new PerfectScrollbar(xwindow[0], { suppressScrollX: true });
                                }
                            };
                        }
                    }
                    , stopCalc = {
                        hwnd: null
                        , sts: 0 //can stop and start again
                        , _: null
                        , evt: function (e, args) {
                            if (stopCalc.hwnd && typeof stopCalc.hwnd === "function") {
                                stopCalc.hwnd.bind(this, e, args)();//dung bind tham so vao hwnd
                            };
                        }
                    }
                    //
                    //
                    , csPrnt 

                    , loc = apisvr.a$.selected_language
                    , datediff = function (dvt, s, e) {
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

                    , tinhlaiSetting = function () {
                        var uiR = elUI['step3_utils']
                            , rule1 = JSON.stringify(elUI['step3_utils'].RULE1)//[1, uiR.noise_spec.option('value'), uiR.logs_effect.option('value')]
                            , deferred = $.Deferred();
                        //
                        resetS3BADGE();
                        if (elUI['step3_utils'].editPO) step3_rst.trigger('listen_2_me', ['reset_diag']);//raise vent nay cho filter div ... de dieu khien pefectscrollbar ...;
                        //
                        //trigger bat ke, vi user switch qua, lai ko kiem soat
                        calc_cores.trigger('re-calc');//thong bao cho ben rule biet la dang recall
                        //
                        //bien calcRule chi xuat hien duy nhat o day, va bi remove khi save xong
                        //bien nay chi co 1 nhiem vu duy nhat la save db....
                        uiR.calcRule = JSON.parse(rule1);//clone;//update newset state
                        //
                        if (rule1 != JSON.stringify(s3in.ruleLogN)) {
                            //
                            elUI.saveBadge.exDAT &&//************ thay doi dieu kien tinh, bao tri diagram ko noi!!!
                            $.map(elUI.saveBadge.exDAT, function (v, k) {
                                elUI.saveBadge.exDAT[k] = [];//reset
                            });
                            //
                            s3in.ruleLogN = JSON.parse(rule1);//clone
                            //
                            //calc rule has changed !
                            deferred.resolve();
                            //
                            //calR$U.WrLOG();
                            ////
                            //setTimeout(function () {
                            //    storeDAT._load(deferred, 2);
                            //}, 10);
                            //
                            //
                        } else {
                            deferred.resolve();
                        };
                        return deferred;
                    }
                    , resetS3BADGE = function (args) {
                        var bdg = elUI.saveBadge;
                        bdg[2].rI('cellValue');//remove count change
                        //bdg[2].rI('badgeVAL');//remove count change
                        bdg[0].text('');//reset badge counter
                        bdg.sBTN.option('visible',false);
                    }
                    , giaotiepevt = {
                        'RECALC_1ROW': function (e, m, a, b, c, d, f, g) {//s3logedit request recalc only one row of specify emp.
                            var calcONE = evtWK.contentWindow,
                                            oneArgs = [, "*"],
                                            acNO = a.acno,
                                            idCALC = b;
                            //dat 1 tac vu moi ten la calc1 ...
                            calcONE.jobTXT('calc1');
                            //
                            apisvr.a$.sessions[calcSession].fn = function (a, d) {
                                if (a == 'job') {
                                    if (d.evtData.messageType == 0) {//calc ready !
                                        //
                                    } else if (d.evtData.messageType == 1) {//result aRST
                                        if (c && d.evtData.data.length>0) {
                                            //
                                            c(d.evtData.data[0]);//call back s3logedit
                                            //
                                        };
                                    };
                                };
                            };
                            //
                            oneArgs[0] = { messageType: 'iniCALC', calcR: s3in.ruleLogN };
                            calcONE.postMessage.apply(calcONE, oneArgs);
                            //
                            //a.aLogs[0] = new Date('2021/01/01 6:10:00');
                            //
                            oneArgs[0] = { messageType: 0, a: a, delay: 0, loc: 0, runI: 0, pag: 0 };
                            calcONE.postMessage.apply(calcONE, oneArgs);
                            //
                        }
                    }
                    , viewLogs = [2]
                    , step3_rst_gridFN = function (R$UL) {//privateInstance
                        //
                        if (!elUI['step3_rst_grid']) {

                            var step3_rst_grid = step3_rst.find('.step3_rst_grid').on('click', '.col-io-filter', function (e) {//step3_rst_grid du me, qua nguy hiem.
                                colHClick(e);
                            })
                            , fnFI = function (act) {
                                var f = elUI['step3_rst_grid'].divFILTER;
                                if (!f) {
                                    var dfed = $.Deferred(),d1 = $.Deferred();
                                    $.when(dfed, filDat()).done(function (r1, r2) {
                                        //
                                        var ecU = this[0],
                                            a = r1[0], itme = r1[1], gr = r1[2];

                                        $(itme).html(adCS(a, ecU[0])).ready(function (x, y) {
                                            //
                                            var srcF = [{
                                                caption: 'Ma AC',
                                                dataField: "acno",
                                                dataType: "number",
                                            }
                                                ,
                                                //chua day cho ma nhan vien
                                                ,
                                                {
                                                    caption: 'Ten NV',
                                                    dataField: "ten"
                                                }, {
                                                    caption: 'Phong ban',
                                                    dataField: "sec",
                                                }, {
                                                    caption: 'A4',
                                                    dataField: "Category",
                                                    filterOperations: ["=", "anyof"],
                                                    lookup: {
                                                        dataSource: [
                                                            "Video Players",
                                                            "Televisions",
                                                            "Monitors",
                                                            "Projectors",
                                                            "Automation"
                                                        ]
                                                    }
                                                }
                                            ]

                                            elUI['step3_rst_grid'].divFILTER = gr.c.O([itme, lstFilterHead, srcF, ecU, '.calc_setting'])
                                                .A(act);
                                            //
                                            //
                                            srclocked(false);
                                            //
                                        });
                                        //
                                    });
                                    //
                                    buildFilter(act, dfed);
                                    //
                                } else {
                                    f.A(act);
                                };
                            }
                            ,filDat=function() {
                                var defed = $.Deferred();
                                if (elUI.hasUA == 'noU') {//con nhieu thu de save lam, nen tach ra nhu vay hay hon
                                    //evtWK.contentWindow.ab.call(lo$DB, elUI.s3dbTB, function (e) {
                                    defed.resolve('yay');
                                    //});
                                } else {
                                    if (opts.Args.stepcodeback('alog').cusf && !lstFilterHead.cus ) {//co custom filter...
                                        s__r({
                                            evt: 'cusfilter_get'
                                        }, function (e) {
                                            //
                                            if (e && e.rst) {
                                                var cusF = decodeURIComponent(escape(atob(e.rst)));
                                                lstFilterHead.cus = JSON.parse(cusF);
                                            } else {
                                                lstFilterHead.cus = {};//danh dau la da load roi...
                                            };
                                            defed.resolve('yay');
                                            //
                                        });
                                    } else {
                                        defed.resolve('yay');
                                    };
                                };
                                return defed.promise();
                            }
                            , buildFilter = function (act, dfed) {
                                //
                                srclocked(true);
                                //https://hrm.dnd.vn/media/mysql/hrm_header.txt
                                step3_rst.trigger('get', [srcp$f + '/media/utils/filter.html' + src$id, function (data) {//get co ky tu \x03 giua chu e va chu t
                                    //
                                    var _args = [this]//encode url
                                        , reHeight = function (c) {
                                            var h = 'calc(100% - ' + (c + 36) + 'px)';//36px toolbar,
                                            elUI['step3_rst_grid'].option('height', h);
                                        }
                                        , doLOC = function (c) {
                                            elUI['step3_rst_grid'].option("filterValue", c);
                                            //ben filter.html co MutationObserver '.pfs_scroll', neu thay doi attribute ~ trigger
                                            log_F.find('.pfs_scroll').attr('trigger', new Date().getTime());
                                        }
                                        , log_F = $("<div class='log_filter' style='position:relative'/>");
                                    //
                                    
                                    log_F.insertBefore(step3_rst_grid)
                                        .on('mystate', function (vt, mg, c,d) {
                                            if (mg == '-1') {//boloc

                                                elUI['step3_rst_grid'].divFILTER = null;//reset filter

                                                $(vt.currentTarget).remove();//chi loai bo inner filter, giu lai div log_filter
                                                //
                                                doLOC('');
                                                //
                                                if ($('body').hasClass('part_fullscreen')) reHeight(0);
                                                //
                                                //delete _o$h['c'];//loai bo luon script nay ra khoi global object
                                            } else if (mg == 'df') {//do filter click
                                                //
                                                doLOC(c);
                                                //
                                            } else if (mg == 'rdf') {//height
                                                //
                                                doLOC('');
                                                //
                                            } else if (mg == 'reHeight') {//height
                                                reHeight(c);
                                            };
                                        })
                                        .trigger('',//trigger event "\x1C\x1D\x1E\x1F"
                                        [data, true, $.Deferred().done(function () {
                                            dfed.resolve.apply(_args,([].slice.call(arguments)));
                                        })]);
                                }]);
                            }

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
                            , colHClick = function (e) {
                                e.stopPropagation();
                                e.preventDefault();
                                //
                                while (DevExpress.hideTopOverlay()) { }//hide cac popup, popover ... cua devexpress
                                //
                                var idx = e.target.getAttribute('idx');
                                console.log(idx);
                                //
                                fnFI(['showFilter', [idx]]);
                                //
                            }
                            , colH1 = function (c) {
                                var ag = this,//0:idx, 1: caption, 2: style
                                    hC = $("<div class='dx-icon-filter col-io-filter' " + ag[3] + " idx='" + ag[0] + "'>" + ag[2] + "</div>"),
                                    flt = "<div style='height:15px;overflow: hidden;text-overflow: ellipsis;'>" + ag[1] + "</div>",
                                    te = c.parent().prepend(hC);
                                //
                                hC.on('click', colHClick);
                                //
                                if (ag[3] == "style='float:none'") {//cot TongTG,Weekname
                                    te.addClass('important-veraligntop').append(flt);
                                } else {
                                    te.find('.dx-datagrid-text-content').append(flt)
                                    .css({ 'display': 'flex', 'justify-content': 'center' });
                                };
                            }
                            , empCols = function () {//elUI
                                var coD = {
                                    headerCellTemplate: colH1.bind(['colNgay', 'Ngay', '', "style='float:right'"]),
                                    dataField: "ngay", width: 100
                                }
                                , otheD = [//chua trong index 0
                                    ,
                                    {
                                        headerCellTemplate: colH1.bind(['colThu', 'Weekday', '', "style='float:none'"]),
                                        dataField: "thu", width: 50
                                        , cssClass: "centerTD"
                                        , allowSearch:false
                                        , hidingPriority: 1
                                    }
                                    ,
                                    {
                                        headerCellTemplate: colH1.bind(['colTongTG', 'Tong TG', '(Gio)', "style='float:none'"]),
                                        dataField: "TongTG", width: 70, allowSearch: false
                                    }
                                ]
                                , bandE = function () {
                                    var a = [{//base array chua chi 1 cot maac
                                        headerCellTemplate: colH1.bind(['colAcNo', 'Ma AC', '', "style='float:right'"]),
                                        dataField: "acno", width: 75
                                    }]
                                    , te = {
                                        headerCellTemplate: colH1.bind(['colEmpName', 'Ten Nhan Vien', '', "style='float:right'"]),
                                        dataField: "ten",
                                        width: 150
                                    }
                                    , d = [];//dynamic col depend hasUA
                                    //
                                    //
                                    if (elUI.hasUA == 'noU') {
                                        //
                                        otheD.splice(0, 1);//remove index 0 from array otheD
                                        //
                                        te['hidingPriority'] = 2;//ten se auto hide small screen
                                        d.push(te);
                                        d.push(coD);
                                        //
                                    } else {
                                        d.push({
                                            headerCellTemplate: colH1.bind(['colEmpCode', 'MaNV', '', "style='float:right'"]),
                                            dataField: "EmpCode",
                                            width: 75
                                        });
                                        d.push(te);
                                        //
                                        //push col ngay vao array otheD
                                        otheD[0] = coD;
                                    };
                                    return a.concat(d);
                                }
                                , baseC = [
                                    {
                                        caption: 'Order ID',
                                        allowSearch:false,
                                        cssClass: 'wrap-text',
                                        width: 50,
                                        cellTemplate: function (cellElement, cellInfo) {
                                            var pI = elUI['step3_rst_grid'].pageIndex(); if (pI < 0) pI = 0;
                                            cellElement.text(pI * elUI['step3_rst_grid'].pageSize() + cellInfo.row.rowIndex + 1)
                                        },
                                        hidingPriority: 0
                                    }
                                    ,
                                    {
                                        headerCellTemplate: function (c) {
                                            var srch = $('<div/>'), cloIco, inp, timeoutS,
                                                //
                                                runSEAR = function (val) {
                                                    clearTimeout(timeoutS);
                                                    if (elUI['step3_rst_grid'].option("searchPanel.text") != val) {// last seach text chua trong searchPanel.text
                                                        //
                                                        isBusy = true;
                                                        //
                                                        srclocked(true);
                                                        cloIco.addClass('chay');
                                                        bySEARCH = function () {
                                                            bySEARCH = null;
                                                            srclocked(false);
                                                            cloIco.removeClass('chay');
                                                            //
                                                            elUI['step3_rst_grid_cmd'].searchEMP[1](val);//mau red cua icon glass
                                                            //
                                                            isBusy = false;//reset ....
                                                            //
                                                        };
                                                        //
                                                        elUI['step3_rst_grid'].searchByText(val);
                                                        //
                                                    };
                                                }
                                                , isBusy = false;
                                            //
                                            c.parent().addClass('searchbox-col-emp tranhtaora noborder-bottom');
                                            c.append(srch);
                                            //
                                            srch=srch.dxTextBox({
                                                width: '100%',
                                                mode: "search",
                                                placeholder: 'tim nhan vien',
                                                showClearButton: true,
                                                //placeholder: DevExpress.localization.message.getDictionary()["dxDataGrid-searchPanelPlaceholder"],
                                                //onKeyUp: searchByText,
                                                onContentReady: function (e) {
                                                    //cmds.searchBOX = e.component;
                                                    cloIco = $('<span class="signal-search" style="">se ...</span>').insertBefore(
                                                        e.component.element().find(".dx-icon-clear").click(function () {
                                                            //
                                                            runSEAR('');
                                                            //
                                                        }).parent()
                                                    ).parent();
                                                    //gan ra ngoai de reset khi tinhlai, // phai gan vao step3_rst_grid_cmd vi khi chay lan dau 
                                                    inp = e.component.element().find('.dx-texteditor-input')
                                                    elUI['step3_rst_grid_cmd'].searchEMP = [inp, function (v) {
                                                        var a = elUI['step3_rst_grid_cmd'].searchEMP[0].prev();
                                                        a[(v == '' ? 'remove' : 'add') + 'Class']('dangsearch');
                                                    }]
                                                    //
                                                },
                                                onValueChanged: function (e) {
                                                    //if (cmds.searchVAL != e.value) {
                                                    //    doSEARCH(e.value);
                                                    //};
                                                },
                                                onKeyDown: function (e) {
                                                    if (e.event.keyCode == 32) {
                                                        e.event.stopPropagation();
                                                    }
                                                },
                                                onFocusIn: function (e) {
                                                    while (DevExpress.hideTopOverlay()) { }
                                                    M0Evt({ causeby: 'hieufilterclick' }, 1, 1);
                                                },
                                                onKeyUp: function (e) {
                                                    //
                                                    if (isBusy) return;
                                                    //
                                                    clearTimeout(timeoutS);
                                                    timeoutS = setTimeout(function () {
                                                        runSEAR(inp.val()); // run search
                                                    }, 300);

                                                }
                                            }).dxTextBox('instance');
                                            //
                                        },
                                        columns: bandE()
                                    }
                                ];
                                return baseC.concat(otheD);
                            }
                            , colSEC = function () {
                                if (elUI.hasUA == 'noU') {
                                    return [{
                                        headerCellTemplate: function (container) {
                                            //debugger;
                                            ////container.insertBefore($('<i class="dx-icon-filter"></i> Tong TG (gio)'));

                                            //container.parent().append($('<i class="dx-icon-filter col-io-filter"></i>'));
                                            //container.html('Tong TG (gio)');
                                            //container.closest('td').css('background', 'red');
                                        }
                                    }];
                                } else {
                                    return [{
                                        dataField: "sec", caption: 'Phong ban', allowSearch: false, hidingPriority: 1//ten se auto hide small screen
                                    }];
                                };
                            }
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
                                return cols.concat(colSEC());
                            }
                            , colIO_TXT = function (e) {
                                var _Y = e.value && e.value.getFullYear().toString() || "",
                                    cls = 'centerTD',
                                    _Z;
                                if (_Y.length==5) {
                                    //return '<span class="modif">' + e.valueText + '</span>';
                                    _Z = _Y.substr(4, 1);
                                    if (_Z == '1') {//modify new log
                                        cls += " modi";
                                    } else {
                                        cls += " dele";
                                    };
                                };
                                this.cssClass = cls;
                                return e.valueText;
                            }
                            , colIO_setV = function (R, V) {
                                //debugger;
                                var ePO = elUI['step3_utils'].editPO
                                    , keyChanged = [ePO.atTD[4].acno, ePO.atTD[4].ngay.getTime()].join('|')
                                    , $tha = this, f = $tha.name, n_ = Number(f.replace("fio", ""))
                                    , m_ = elUI['commonFn'].lgIdx_2_IOidx(n_);
                                    
                                //
                                R[f] = V;//(1)
                                R['t_' + m_] = new Date().getTime().toString().substr(-5);
                                //
                                //
                                if (elUI.saveBadge[keyChanged]) {
                                    var cusLG = elUI.saveBadge[keyChanged],
                                        zp = cusLG[0],
                                        orl = cusLG[1],
                                        maxORGindex = orl.length - 1;
                                    //
                                    if (orl[maxORGindex] === 'HIE' && zp[maxORGindex] === orl[maxORGindex]) {//bang nhau
                                        //vi elUI.saveBadge[keyChanged] la array object nen khi remove item, no tu dong update changed luon...
                                        zp.splice(maxORGindex, 1);
                                        orl.splice(maxORGindex, 1);
                                    };
                                    //
                                    R['cusL'] = JSON.stringify(cusLG);//tinh tu ben s3logedit.js
                                    //
                                };
                                //
                                delete elUI.saveBadge[keyChanged];//loai bo ngay
                                //
                                //trigger sang ben edit log xu ly
                                if (ePO && ePO.atTD) {
                                    //
                                    endSet_CELLVAL = function (ex) {
                                        endSet_CELLVAL = null;
                                        var datR = elUI['step3_rst_grid']._controllers.keyboardNavigation._dataController
                                            , key = ePO.atTD[4].id;
                                        //
                                        datR.getDataByKeys([key]).done(function (a) {
                                            if (a && a.length > 0) ePO.atTD[4] = a[0];
                                            //
                                            // phai set ePO.atTD[4] before, vi no se lam cho
                                            //
                                        });
                                        //
                                        if (ePO.preventSHOW !== 2) {//2: ko can cam, khi del shift left thi se gia tri 2
                                            ePO.preventSHOW = 1;//khi grid set cell value, lam cho POV mat target cell element, vi vay phai set lai lam trigger event nay
                                            //ex.component.focus(ex.component.getCellElement(ePO.atTD[0], ePO.atTD[1]));
                                            ePO.option('target', ex.component.getCellElement(ePO.atTD[0], ePO.atTD[1]));
                                            setTimeout(function () {
                                                ePO.preventSHOW = 0;//release
                                            }, 100);
                                        };
                                        //
                                    };
                                };
                                //
                                //

                                //
                                //if (ePO.atTD && ePO.atTD[4]) {
                                //    atTD4 = ePO.atTD[4];
                                //    if (atTD4.cusL) R.cusL = atTD4.cusL;
                                //    //
                                //    //*********** IMPORTANT: atTD4 la 1 clone chu ko phai object, nen action at (1) ko lam thay doi no,
                                //    //==> phai manual set lai
                                //    atTD4[f] = V;
                                //    //
                                //};
                                //
                                setTimeout(function () {
                                    //trigger su kien sang editlog de update diagram s3logedit.js
                                    step3_rst.trigger('setFIO', [f,m_, V]);
                                },100);
                                //
                            }
                            , colIO = function (idx, offset) {
                                return {
                                    caption: "In - Out",
                                    headerCellTemplate: function (c) {
                                        //
                                        c.html('In - Out ' + idx)
                                        .parent().append($('<i class="dx-icon-filter col-io-filter" idx=io' + idx + '></i>'));
                                        //container.closest('td').css('background', 'red');
                                    },
                                    columns: [{
                                        caption: "In",
                                        dataField: "fio" + (idx + offset), width: 60,
                                        //cellTemplate: celltmp,
                                        dataType: "date",
                                        format: "HH:mm",
                                        encodeHtml: false, 
                                        allowSearch: false,
                                        editorOptions: {
                                            disabled: true
                                        }
                                        , customizeText: colIO_TXT
                                        , setCellValue: colIO_setV
                                    }, {
                                        caption: "Out",
                                        dataField: "fio" + (idx + offset + 1), width: 60,
                                        //cellTemplate: celltmp,
                                        dataType: "date",
                                        format: "HH:mm",
                                        encodeHtml: false,
                                        allowSearch: false,
                                        editorOptions: {
                                            disabled: true
                                        }
                                        , customizeText: colIO_TXT
                                        , setCellValue: colIO_setV
                                        //, customizeText: function (e, x) {
                                        //    var 
                                        //    if (e.value && e.value.getFullYear() > 9999) {
                                        //        //return '<span class="modif">' + e.valueText + '</span>';
                                        //        this.cssClass = "centerTD modi";
                                        //    } else {
                                        //        this.cssClass = "centerTD";
                                        //    };
                                        //    return e.valueText;
                                        //    //return '<span class="modif">(' + e.valueText + ')</span>';
                                        //}
                                    }, {
                                        hidingPriority: 4 + (viewLogs[0] - idx),//cot total hide tu right qua left
                                        caption: "Total",
                                        allowSearch:false,
                                        dataField: "t_" + idx, width: 60
                                    }]
                                };
                            }
                            , changeInOutLogCols = function (newC) { //https://supportcenter.devexpress.com/ticket/details/t613263/datagrid-how-to-add-a-column-at-runtime

                                var grd = elUI['step3_rst_grid'],
                                  state = grd.state(),
                                  columns = grd.option("columns");

                                if (viewLogs[0] < newC) {//them vao 
                                    //
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
                                    //
                                    //
                                } else { // phai bo ra
                                    for (var z = columns.length - 2; z > 0; z--) {//bo cot padding cuoi cung
                                        var col = parseInt(columns[z].columns[2].dataField.split('t_')[1]);
                                        if (col > newC) {
                                            columns.splice(z, 1);
                                        } else {
                                            break;
                                        };
                                    };
                                };
                                //
                                grd.option({"columns": columns});
                                //grd.state(state);//kong can phuc hoi state lai vi col da thay doi
                                //
                                //
                                viewLogs[0] = newC;//update lai so luong log view hien tai cua grid
                                //
                                if (elUI['step3_utils'].editPO) step3_rst.trigger('listen_2_me', ['changeInOutLogCols', JSON.stringify([ s3in.ruleLogN, viewLogs[0]/*so luong In-Out cols*/])]);//raise vent nay cho filter div ... de dieu khien pefectscrollbar ...;
                                //
                                srclocked(false);
                                //
                            }
                            , gtb = $('<div/>').on('mouseenter', ".dx-button.help", function (e) {
                                //var _a = $(e.currentTarget);//_b nay duoc khoi tao khi load rule1.html, ko co trong file nay
                                elUI['step3_cmd_help'].fn($(e.currentTarget));
                                //_b.option('target', _a);
                                //_b.tmpl.html(_b.des[_a.attr('halp')]);
                                //_b.show();
                            })
                            , dux = null;//popup chua diagram gojs
                            //
                            step3_rst.on('giaotiepevt', function (e,m,a,b,c,d,f,g) {
                                if (m == 'x') {
                                    dux.remove();//div thong ke
                                    dux = null;
                                } else if (m == 'resetS3BADGE') {
                                    resetS3BADGE();
                                } else {
                                    giaotiepevt[m](e, m, a, b, c, d, f, g);
                                };
                            });
                            //
                            //
                            elUI['step3_rst_grid_cmd'] = gtb.insertBefore(step3_rst_grid).dxToolbar({
                                items: [{
                                    location: 'before',
                                    widget: 'dxButton',
                                    options: {
                                        icon: "filter",
                                        elementAttr: {
                                            halp: 'savE',
                                            class: "help"
                                        }
                                            }
                                            , onClick: function (e) {

                                                if (elUI['step3_cmd_help']) elUI['step3_cmd_help'].hide();//hide help popover dang show
                                                //fnFI(['slideToggle', []]);
                                                    
                                                fnFI(['lstFilter', ['show']]);

                                                return;

                                                var gH = function (h) {
                                                    elUI['step3_rst_grid'].option('height', 'calc(100% - ' + (h + 36) + 'px)');
                                                };


                                                if (!e.component.divFILTER) {
                                                    var ungroupedData = [{
                                                        "ID": 1,
                                                        "Name": "HD Video Player",
                                                        "Category": "Video Players"
                                                    }, {
                                                        "ID": 2,
                                                        "Name": "SuperHD Player",
                                                        "Category": "Video Players"
                                                    }, {
                                                        "ID": 3,
                                                        "Name": "SuperPlasma 50",
                                                        "Category": "Televisions"
                                                    }, {
                                                        "ID": 4,
                                                        "Name": "SuperLED 50",
                                                        "Category": "Televisions"
                                                    }, {
                                                        "ID": 5,
                                                        "Name": "SuperLED 42",
                                                        "Category": "Televisions"
                                                    }, {
                                                        "ID": 6,
                                                        "Name": "SuperLCD 55",
                                                        "Category": "Televisions"
                                                    }, {
                                                        "ID": 7,
                                                        "Name": "SuperLCD 42",
                                                        "Category": "Televisions"
                                                    }, {
                                                        "ID": 8,
                                                        "Name": "SuperPlasma 65",
                                                        "Category": "Televisions"
                                                    }, {
                                                        "ID": 9,
                                                        "Name": "SuperLCD 70",
                                                        "Category": "Televisions"
                                                    }, {
                                                        "ID": 10,
                                                        "Name": "DesktopLED 21",
                                                        "Category": "Monitors"
                                                    }, {
                                                        "ID": 11,
                                                        "Name": "DesktopLED 19",
                                                        "Category": "Monitors"
                                                    }, {
                                                        "ID": 12,
                                                        "Name": "DesktopLCD 21",
                                                        "Category": "Monitors"
                                                    }, {
                                                        "ID": 13,
                                                        "Name": "DesktopLCD 19",
                                                        "Category": "Monitors"
                                                    }, {
                                                        "ID": 14,
                                                        "Name": "Projector Plus",
                                                        "Category": "Projectors"
                                                    }, {
                                                        "ID": 15,
                                                        "Name": "Projector PlusHD",
                                                        "Category": "Projectors"
                                                    }, {
                                                        "ID": 16,
                                                        "Name": "Projector PlusHT",
                                                        "Category": "Projectors"
                                                    }, {
                                                        "ID": 17,
                                                        "Name": "ExcelRemote IR",
                                                        "Category": "Automation"
                                                    }, {
                                                        "ID": 18,
                                                        "Name": "ExcelRemote BT",
                                                        "Category": "Automation"
                                                    }, {
                                                        "ID": 19,
                                                        "Name": "ExcelRemote IP",
                                                        "Category": "Automation"
                                                    }];

                                                    var fromUngroupedData = new DevExpress.data.DataSource({
                                                        store: ungroupedData,
                                                        key: "id",
                                                        group: "Category"
                                                    });

                                                    step3_rst.removeClass('height-transition').css('max-height', 'none');

                                                    e.component.divFILTER = $("<div class='log_filter' style='max-height:400px;display:none'/>").insertBefore(step3_rst_grid);

                                                    var dx = $('<div style="position:relative;height:150px"/>').appendTo(e.component.divFILTER).on('click', function (x) {
                                                        selB.open();
                                                    })
                                                    , selB = $('<div style="width: 100%;visibility:hidden"/>').appendTo(e.component.divFILTER).dxSelectBox({
                                                        dataSource: fromUngroupedData,
                                                        valueExpr: "ID",
                                                        grouped: true,
                                                        groupTemplate: function(data) {
                                                            return $("<div class='custom-icon'><span class='dx-icon-box icon'></span> " + data.key + "</div>");
                                                        },
                                                        displayExpr: "Name",

                                                        //width:'100%',
                                                        height: 0,
                                                        button:[],
                                                        onValueChanged: function (e) {
                                                            dx.text(e.value);
                                                        }
                                                    }).dxSelectBox("instance");

                                                };
                                                //
                                                e.component.divFILTER.slideToggle("fast", function () {
                                                    if (step3_rst.hasClass('full-el')) {
                                                        gH(e.component.divFILTER.is(':visible') ? 200 : 0);
                                                    };
                                                });

                                                return;

  

                                                if (!e.component.divFILTER) {

                                                    var filter = [
                                                            ["Product_Current_Inventory", "<>", 0],
                                                            "or",
                                                            [
                                                                ["Product_Name", "contains", "HD"],
                                                                "and",
                                                                ["Product_Cost", "<", 200]
                                                            ]
                                                                                                    ],
                                                    fields = [
                                                        {
                                                            caption: "ID",
                                                            width: 50,
                                                            dataField: "Product_ID",
                                                            dataType: "number"
                                                        }, {
                                                            dataField: "Product_Name",
                                                            dataType: "string"
                                                        }, {
                                                            caption: "Cost",
                                                            dataField: "Product_Cost",
                                                            dataType: "number",
                                                            format: "currency"
                                                        }, {
                                                            dataField: "Product_Sale_Price",
                                                            caption: "Sale Price",
                                                            dataType: "number",
                                                            format: "currency"
                                                        }, {
                                                            dataField: "Product_Retail_Price",
                                                            caption: "Retail Price",
                                                            dataType: "number",
                                                            format: "currency"
                                                        }, {
                                                            dataField: "Product_Current_Inventory",
                                                            dataType: "number",
                                                            caption: "Inventory"
                                                        }
                                                    ];


                                                    step3_rst.removeClass('height-transition').css('max-height', 'none');

                                                    e.component.divFILTER = $("<div class='log_filter' style='max-height:100px;display:none'/>").insertBefore(step3_rst_grid)
                                                    .dxFilterBuilder({
                                                        fields: fields,
                                                        value: filter,
                                                        width:'100%',
                                                        onEditorPreparing: function (e) {
                                                            if (e.dataField == "Product_Name") {
                                                                e.editorOptions.width = '100%';
                                                                //const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                                                                //e.editorOptions.onValueChanged = function (args) { // Override the default handler
                                                                //    // ...
                                                                //    // Custom commands go here
                                                                //    // ...
                                                                //    // If you want to modify the editor value, call the setValue function:
                                                                //    // e.setValue(newValue);
                                                                //    // Otherwise, call the default handler:
                                                                //    defaultValueChangeHandler(args);
                                                                //}
                                                            }
                                                        }
                                                    });
                                                };
                                                //
                                                e.component.divFILTER.slideToggle("fast", function () {
                                                    if (step3_rst.hasClass('full-el')) {
                                                        gH(e.component.divFILTER.is(':visible') ? 200 : 0);
                                                    };
                                                });
                                            }
                                        },{
                                            location: 'before',
                                            widget: 'dxButton',
                                            options: {
                                                icon: "percent",
                                                elementAttr: {
                                                    halp: 'savE',
                                                    class: "help"
                                                },
                                                onClick: function (e) {
                                                    //
                                                    srclocked(true);
                                                    //
                                                    //if (!e.component.ku) {
                                                        var ku = $('<div class="thongke height-transition height-transition-hidden"><div class="tb-phantram"/></div>').insertBefore(step3_rst_grid),
                                                            fn = function () {
                                                                var x = gtb.find('.clickme').dxButton('instance');
                                                                return [x._state ? x._state : 0, new Date('2021-09-01'), new Date('2021-09-30')];
                                                            };
                                                    //
                                                        w0w.handshakeEL = {
                                                            el: ku,
                                                            fn: fn
                                                        };
                                                        //
                                                        //$.get(srcp$f + '/media/utils/phantram.html' + src$id, function (data) {
                                                        //    ku.find('.tb-phantram').append(data);
                                                        //});
                                                        //
                                                        _gsC(srcpf$ + '/media/vendor/GoJS/release/gojstrial.js', 'js', function () {// 'https://gojs.net/latest/release/go.js'
                                                            $.get(srcp$f + '/media/utils/gojstimeline.html' + src$id, function (data) {
                                                                ku.find('.tb-phantram').append(data.replace('gx$','var g$'));
                                                            });
                                                        }, 'gojs.js');

                                                        dux = ku;
                                                    //} else {
                                                    //    e.component.ku.removeClass('. height-transition-hidden');
                                                    //};
                                                    //
                                                }
                                            }
                                        }, {
                                            location: 'before',
                                            locateInMenu: 'auto',
                                            widget: 'dxButton',
                                            options: {
                                                text: "Export Excel",
                                                elementAttr: {
                                                    halp: 'expE',
                                                    class: "help"
                                                },
                                                onClick: function () {
                                                    exportExls();
                                                }
                                            }
                                        }, {
                                            location: 'before',
                                            template: function (e) {
                                                var pD = $('<div style="position:relative"/>'),
                                                    bdg = elUI.saveBadge;
                                                //    
                                                bdg[0]= $('<span class="hieu-badge partition-red animated infinite pulse" style="left: 50%;top:-10px;font-size: smaller"></span>');
                                                bdg[2] = new HTB({});
                                                //
                                                bdg.sBTN=$('<div/>').appendTo(pD).dxButton(
                                                    {
                                                        visible: !elUI.akq,
                                                        icon: "ti ti-save",
                                                        elementAttr: {
                                                            halp: 'savE',
                                                            class: "help"
                                                        },
                                                        onClick: function () {
                                                            //elUI['step3_rst_grid'].refresh();
                                                            //debugger;
                                                            //
                                                            while (DevExpress.hideTopOverlay()) { }//hide cac popup, popover ... cua devexpress
                                                            //
                                                            DevExpress.ui.dialog.custom({
                                                                showTitle: false,
                                                                messageHtml: LAN.js_004_18[1],
                                                                popupOptions: {
                                                                    width: function () {//me kiep phai de tham so nay, neu ko no se bi loi tren real device
                                                                        //if (DevExpress.devices._currentWidth < 500) {
                                                                        //    return '100%';
                                                                        //} else {
                                                                        //}
                                                                    }
                                                                },
                                                                buttons: [{
                                                                    text: 'cancelEditData',
                                                                    visible: true,// bdg[2].L > 0,
                                                                    onClick: function (e) { return -2; }
                                                                }, {
                                                                    text: 'saveEditData',
                                                                    onClick: function (e) { return 1; }
                                                                }, {
                                                                    text: LAN.js_003_1,
                                                                    onClick: function (e) { return 0; }
                                                                }]
                                                            })
                                                                .show()
                                                                .done(function (RE) {
                                                                    if (RE == 0) {//cancel

                                                                    } else {
                                                                        //
                                                                        if (RE == -2) {//cancelEditData();
                                                                            //
                                                                            var gid = elUI['step3_rst_grid'];
                                                                            //gid.hack_cancelEditData = function (ex) {
                                                                            //    gid.hack_cancelEditData = null;
                                                                            //    //trigger sang ben edit log xu ly
                                                                            //    frmEL.trigger('onEditCanceling_click', ex);
                                                                            //};
                                                                            //
                                                                            gid.cancelEditData();
                                                                            //
                                                                            resetS3BADGE();
                                                                            //
                                                                        } else if (RE == 1) {//saveEditData();
                                                                            //
                                                                            srclocked(true);
                                                                            //
                                                                            elUI['step3_utils'].gridtitle.html("<i class='ti-alert'/>" + new Date().getTime());
                                                                            //
                                                                            //de cho no mat focus rect cell
                                                                            elUI['step3_rst_grid'].saveEditData();
                                                                            //
                                                                            elUI['step3_utils'].calcRule = $.extend([], true, s3in.ruleLogN);//clone;//update newset state
                                                                            //
                                                                            xwindow.prev().find('.calc_setting')
                                                                                .trigger('click', {
                                                                                    a: '_uv', d: [
                                                                                        aRST //0 result datat
                                                                                        , srcATT[0][3] //1 from date
                                                                                        , srcATT[0][4] //2 to date
                                                                                        , _W //3 so luong nhan vien
                                                                                        , cntJ //4 tong so log
                                                                                        , [isVIEWBACK,
                                                                                            viewLogs[0]//so luong In-Out cols
                                                                                        ] //5: linh ta linh tinh se cho vao 5
                                                                                    ]
                                                                                });//save ket qua tinh cong vao db / srcATT[0][3]:min date - dung lam base offset second
                                                                            //
                                                                        };
                                                                        //
                                                      
                                                                        //
                                                                    };
                                                                });
                                                        }
                                                    }
                                                ).dxButton('instance');
                                                return pD.append(bdg[0]);
                                            }
                                        }, {
                                            location: 'center',
                                            locateInMenu: 'never',
                                            template: function (e) {
                                                elUI['step3_utils'].gridtitle = $("<div><div class='toolbar-label'><h4 style='margin-bottom: 0px;'>BANG CONG</h4></div></div>");
                                                return elUI['step3_utils'].gridtitle;
                                            }
                                        },
                                {
                                    location: "after",
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
                                }, {
                                    location: 'after',
                                    widget: 'dxButton',
                                    options: {
                                        elementAttr:{class:'clickme'},
                                        icon: "d0nmsg ti-fullscreen",
                                        onClick: function (e) {
                                            var b = e.component, i, h, c;

                                            if (b._state == 1) {
                                                b._state = 0;
                                                i = 'd0nmsg ti-fullscreen';
                                                h = gidH;
                                                c = 'remove';

                                                var tagr = step3_rst.parent(),
                                                oldS = step3_rst.attr('style');
                                                //
                                                //console.log(tagr.offset())
                                                $('body')[c + 'Class']('part_fullscreen');
                                                frmEL.find('.kiem-the #s3_one')[c + 'Class']('hidden-el');
                                                //
                                                step3_rst.addClass('exit-fulscr').removeClass('full-el')
                                                    .animate({ top: tagr.offset().top, left: (tagr.offset().left), width: tagr.width(), height: h }, '50', function () {
                                                    
                                                        step3_rst.attr('style', oldS).removeClass('exit-fulscr');

                                                        //
                                                        elUI['step3_rst_grid'].option('height', h);

                                                        //setTimeout(function (e) {
                                                        //    //step3_rst[c + 'Class']('exfull-el');
                                                        //    //frmEL.find('.kiem-the #s3_one')[c + 'Class']('hidden-el');
          

                                                        //}, 1);
                                                        //
                                                        //step3_rst[c + 'Class']('full-el').addClass('exfull-el');
                         

                                                    });
                                                //
                                            } else {
                                                b._state = 1;
                                                i = 'fa fa-window-close color-red';
                                             
                                                var gB = step3_rst_grid[0].getBoundingClientRect(), pB = step3_rst[0].getBoundingClientRect()
                                                    , dkH = (gB.y || gB.top) - (pB.y || pB.top);   //calc(100% - 36px)

                                                if (dkH>276) dkH=276;// max filter 200, toolbar 36
                                                h = 'calc(100% - ' + (dkH) + 'px)';//36px toolbar,
                                                c = 'add';
                                                //
                                                //
                                                step3_rst[c + 'Class']('full-el');
                                                frmEL.find('.kiem-the #s3_one')[c + 'Class']('hidden-el');
                                                $('body')[c + 'Class']('part_fullscreen');
                                                //
                                                elUI['step3_rst_grid'].option('height', h);
                                                //
                                            };
                                            //
                                            e.component.option('icon', i);
                                            toastMsg("Add button has been clicked!", 'info');
                                            //
                                            step3_rst.trigger('listen_2_me',['part_fullscreen',c]);//raise vent nay cho filter div ... de dieu khien pefectscrollbar ...
                                            //
                                            if (dux) {
                                                setTimeout(function () { dux.trigger('hwnd', { jo: 'wc' }); }, 200);
                                            };
                                            //
                                            while (DevExpress.hideTopOverlay()) { }//hide cac popup, popover ... cua devexpress
                                            //
                                        }
                                    }
                                }, {
                                    location: 'after',
                                    widget: 'dxSelectBox',
                                    locateInMenu: 'auto',
                                    options: {
                                        width: 140,
                                        items: productTypes,
                                        valueExpr: "id",
                                        displayExpr: "text",
                                        value: viewLogs[0],
                                        onFocusIn: function (e) {
                                            while (DevExpress.hideTopOverlay()) { }//hide cac popup, popover ... cua devexpress
                                        },
                                        onFocusOut: function (e) {
                                            e.component.close();//close dropdown
                                        },
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
                                    locateInMenu: 'always',
                                    widget: 'dxButton',
                                    options: {
                                        text: 'Save',
                                        onClick: function () {
                                            var a = elUI['step3_rst_grid'];

                                            //dxDataGrid("saveEditData")
                                            //a.option('editing').changes

                                            var cD = a.option('editing').changes,
                                                oD = a.getController('editing')._internalState,
                                                eD = [],
                                                _m = 1000 * 60;
                                                
                                            cD.forEach(function (n, i) {
                                                var d=[],fK = oD.filter(function (m, x) {
                                                    return m.key == n.key;
                                                });
                                                if (fK) {
                                                    var dz = fK[0].oldData;
                                                    $.map(n.data,function(p,k){
                                                        if (k.indexOf('fio')>-1){
                                                            d.push((p - dz.ngay) / _m);
                                                        };
                                                    });
                                                    eD.push(dz.acno + ',' + DevExpress.localization.date.format(dz.ngay, "yyyy-MM-dd HH:mm") + ',' + d.join(','));//den day co DevExpress roi
                                                };
                                            });

                                            //elUI['showinvisibles'].val(eD.join('\r\n'));//test thu xem no hien thi tren textarea

                                            a.cancelEditData();//bo edit thu xem

                                            DevExpress.ui.notify("Save option has been clicked!");

                                            var isS2 = opts.shareMe('dogIFRM');

                                            a.option('pager.displayMode', 'compact');
                                        }
                                    }
                                }, {
                                    locateInMenu: 'always',
                                    widget: 'dxButton',
                                    options: {
                                        text: 'Print',
                                        onClick: function () {
                                            var a = elUI['step3_rst_grid'];
                                            a.option('pager.displayMode', 'compact');
                                            var bef = a._controllers.tablePosition._pagerView._$element,
                                                aBTN=$('<div class="text-center align-self-center" style="flex-grow: 1;">Du lieu da co cap nhat ...<div class="btn btn-outline-secondary btn-sm xoa-sualog"><i class="ti-reload"></i></div></div>');
                                            bef=bef.addClass('cochinhsua').find('.dx-pages');
                                            aBTN.insertBefore(bef);
                                            aBTN.find('.xoa-sualog').off('click').on('click', function (e) {
                                                devDlg(1, 'vui long xac nhan truoc khi reset du lieu chinh sua?').show().done(function (rst) {
                                                    if (rst == 1) {
                                                        a.option('pager.displayMode', 'adaptive');
                                                        aBTN.parent().removeClass('cochinhsua');
                                                        aBTN.remove();
                                                    };
                                                });
                                            });
                                            DevExpress.ui.notify("Print option has been clicked!");
                                        }
                                    }
                                }, {
                                    locateInMenu: 'always',
                                    widget: 'dxButton',
                                    options: {
                                        text: 'Settings',
                                        onClick: function () {
                                            xwindow.prev().find('.calc_setting').trigger('click', [1]);
                                        }
                                    }
                                }


                                ]
                                //, visible: false,
                                , onContentReady: function (e) {
                                    /*
                                    var hideT, mnu = e.component._menuStrategy._menu, btn = mnu._button;
                                    //mnu._$element.on('mousedown touchstart', function (e) {
                                    //    clearTimeout(hideT);
                                    //});
                                    btn._$element.on('blur', function (e) {
                                        hideT=setTimeout(function () { mnu.close() }, 200);
                                    });
                                    */
                                }
                            }).dxToolbar('instance');
                            //
                            //
                            var gidH = 350,
                                endSet_CELLVAL,
                                hwndPAGE_GO = function (gid,pIdx, r, c,fnCB) {
                                    //
                                    setTimeout(toastMsg("Changing to page " + (pIdx + 1) + "...", 'info', 500), 1);
                                    //
                                    bySEARCH = function (p) {//dung tam contentReady qua bien nay
                                        //
                                        bySEARCH = null;//reset
                                        //
                                        var dog = function () {
                                            var gid = p.component,elt = gid.getCellElement(0, c);
                                            if (elt) gid.focus(elt);
                                        };
                                        //
                                        if (fnCB) fnCB(dog);
                                        //
                                    };
                                },
                                handlePAGE_UD = function (e,kc,po) {
                                    var gid = e.component,
                                        pCNT = gid.pageCount(),
                                        pIdx = gid.pageIndex(),
                                        elt;
                                    if (pCNT > 0) {
                                        if (kc == 33 && pIdx > 0 || kc == 34 && pIdx < pCNT - 1) {//prev page
                                            //
                                            if (po.allowPAGE_UD === undefined || po.allowPAGE_UD === 0) {
                                                //
                                                po.allowPAGE_UD = 1;//prevent;
                                                //
                                                var fuck_afterUD = function (dog) {
                                                    //
                                                    setTimeout(function () {
                                                        po.allowPAGE_UD = 0;//allow;
                                                    }, 200);//nha ra sau 200 ms
                                                    //
                                                    dog();
                                                    //
                                                    if (e.event.UD_From_EDT_CB) {//triger tab key
                                                        //du me, firefox, khi trigger tab tu edit time, sang page khac, no ko nhay len popup
                                                        e.event.UD_From_EDT_CB();
                                                        //
                                                    };
                                                    //
                                                };
                                                //
                                                hwndPAGE_GO(gid, pIdx, 0, po.atTD[3], fuck_afterUD);
                                                //
                                                gid._controllers.focus._resetFocusedRow();//reset
                                                //
                                                return false;
                                                //
                                            } else {//busy
                                                e.event.preventDefault();
                                            };
                                        };
                                    };
                                    return true;
                                },
                                hwndFocusedCellChanging = function (e) {
                                    //
                                    console.log('onFocusedCellChanging:' + ' ' + new Date().getTime());
                                    //return;

                                    var mi = viewLogs[2][0], ma = viewLogs[2][1],
                                        nC = e.newColumnIndex, pC = e.prevColumnIndex,
                                        nR = e.newRowIndex, pR = e.prevRowIndex,
                                        elt,
                                        gid = e.component,
                                        evtType = e.event ? e.event.type : 'NULL',
                                        goPAGE = function (c,otherPage) {
                                            var pCNT = gid.pageCount(),
                                                pIdx = gid.pageIndex(),
                                                doPage = function () {
                                                    flashPopOver(false);//hide no di
                                                    //
                                                    var fuck_triggerTab = function (dog) {
                                                        if (e.event.isTrigger && e.event.code == 9) {//triger tab key
                                                            //du me, firefox, khi trigger tab tu edit time, sang page khac, no ko nhay len popup
                                                            setTimeout(dog, 10);
                                                        } else {
                                                            dog();
                                                        };
                                                    };
                                                    //
                                                    hwndPAGE_GO(gid, pIdx, 0, c, fuck_triggerTab);
                                                    //
                                                    gid.option('paging.pageIndex', pIdx);//ko co option paging thi grid se khong refresh height
                                                    //
                                                };
                                            //
                                            if (pCNT <= 1//total page ko du dieu kien move
                                                || otherPage == -1 && pIdx == 0//dang o trang dau tien, ko the move prev
                                                || otherPage == 1 && pIdx == pCNT - 1//dang o trang cuoi cung , ko the next
                                                ) {
                                                //
                                                flashPopOver(true);
                                                //
                                            } else {
                                                pIdx += otherPage;
                                                doPage();
                                            };
                                        },
                                        doFCs = function (r, c,otherPage) {
                                            //
                                            if (r>-1 && (elt = gid.getCellElement(r, c),elt)) {
                                                setTimeout(function () { gid.focus(elt); }, 1);
                                            } else {
                                                if (otherPage) {//co kha nang la move other page
                                                    goPAGE(c,otherPage);
                                                } else {
                                                    flashPopOver(true);
                                                };
                                            };
                                        },
                                        flashPopOver = function (isflash) {
                                            var po = elUI['step3_utils'].editPO;
                                            if (po._currentVisible) {
                                                //
                                                if (isflash) {
                                                    if (po._isflash === undefined || po._isflash !== 1) {//bo qua vi no se flash ko kip
                                                        flagFlash(po);
                                                        po._$wrapper.removeClass('keepshown').addClass('flashpanel')//; po.hide();
                                                        //
                                                        //po.show();
                                                        setTimeout(function () {
                                                            po._$wrapper.removeClass('flashpanel').addClass('keepshown');
                                                        },50);
                                                        //
                                                    };
                                                } else {
                                                    po._$wrapper.removeClass('keepshown'); po.hide();
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
                                            if (nC < mi || nC > ma) {
                                                //
                                                e.cancel = true;
                                                //
                                                if (evtType == 'dxpointerdown') {
                                                    if (pC != -1 && pC != undefined && viewLogs[1][pC] && viewLogs[1][pC].indexOf('t_') == -1) {
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
                                                            //
                                                            //dang dung o cell dau tien page, thi quay nguoc ve cell cuoi cung cua row 0 previous page
                                                            goPAGE(ma - 1, -1);
                                                            //flashPopOver(true);
                                                        };
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
                                            } else if (viewLogs[1][nC] && viewLogs[1][nC].indexOf('t_') == 0) {
                                                //
                                                if ((pC == -1 || pC == undefined) || (pR == -1 || pR == undefined) || evtType == 'dxpointerdown') {//lan dau tien click vao field total
                                                    //
                                                    var po = elUI['step3_utils'].editPO;
                                                    if (po._currentVisible) {
                                                        //
                                                        if (evtType == 'dxpointerdown') {
                                                            elUI['step3_utils'].edit_time.forceCellFocus = [nR, nC];//bao cho ben time edit biet uu tien focus cell
                                                            //reset o su kien time change + blur vet lai
                                                        };
                                                        //
                                                        po._$wrapper.removeClass('keepshown'); po.hide();
                                                    };
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
                                                                doFCs(nR + 1, mi,1);//min row next
                                                                //
                                                            } else {
                                                                //
                                                                doFCs(nR, nC + 1);//nhay sang next in-out inline Row.
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
                                                //
                                                if (ePO.atTD) {
                                                    //truoc khi assign address moi thi ngan chan value changed, vi khi user edit time edit, 
                                                    //nhung bo chuot vao cell moi thi vo tinh set value vao nham dia chi
                                                    if (evtType == 'dxpointerdown' && (ePO.atTD[0] != nR || ePO.atTD[3] != nC)) {//chi bat khi mouse click
                                                        var bkR = ePO.atTD[0], bkF = ePO.atTD[1], bkC = ePO.atTD[3]
                                                        , bkTD4 = function (d) {
                                                            return d&& $.extend(true,{},d);
                                                        }(ePO.atTD[4]);
                                                        //
                                                        elUI['step3_utils'].edit_time.hwChanged = function (te) {
                                                            //
                                                            elUI['step3_utils'].edit_time.hwChanged = null; //neu ko trigger duoc vao day, thi su kien blur se vet lai va reset no
                                                            //
                                                            setTimeout(function () {
                                                                //
                                                                step3_rst.trigger('mouse_FocusedCellChanging', {
                                                                    'cell': [bkF, bkR, , bkC]
                                                                    , 'dat': bkTD4
                                                                    , 'vals': [te.value]//value origin of timeeditor
                                                                });
                                                                //
                                                                //var gid = elUI['step3_rst_grid'],val=d.value;
                                                                //gid.cellValue(bkR, bkF, val); //set cell value
                                                                //toastMsg("hwndFocusedCellChanginatTDg set cellValue!", 'info', 100);
                                                                ////
                                                                //var cell = gid.getCellElement(nR, nC);
                                                                //gid.focus(cell);
                                                                //console.log("hwndFocusedCellChanging set cellValue! " + bkR + ' cC: ' + bkF);
                                                                ////
                                                                //// raise badge counter change.
                                                                //elUI.saveBadge.editLOG(bkTD4, [bkF, bkR, bkC], adapV(val, "11"));
                                                                //
                                                            }, 5);//phai settimeout, neu ko thi no se ko hien thi popoover o cell moi,gia tri la 0 cung ok
                                                            //
                                                        };
                                                    };
                                                };
                                                //
                                                //
                                                ePO.atTD = [nR, f, v, nC, e.rows[nR].data];
                                                ePO._EVTTYPE = [evtType, nR - pR//>) di xuong, else di len
                                                    , nR, pR];//de xac dinh neu la key thi se do scroll
                                                //
                                                if (nC == pC && nR == pR && ePO._currentVisible) {
                                                    if (ePO._isflash !== 1) {//bo qua vi no se flash ko kip
                                                        var cc = e.event && e.event.originalEvent && e.event.originalEvent.keyCode || 0;
                                                        if (nR == 0 && cc == 38) {//row 0 and key up
                                                            //nR - 1 cho  over find cell , and make it fall to gotoPAGE
                                                            doFCs(nR - 1, nC, -1);//previous page
                                                        } else if (cc == 40) {//key down
                                                            //nR + 1 cho  over find cell , and make it fall to gotoPAGE
                                                            doFCs(nR + 1, nC, 1);//next page
                                                        } else {
                                                            ePO._$wrapper.removeClass('keepshown');
                                                            flagFlash(ePO);
                                                            //ePO.hide();
                                                        };
                                                    };
                                                };
                                                //
                                                setTimeout(function () {
                                                    //elUI['step3_utils'].gridtitle.html(DevExpress.devices._currentDevice.phone.toString());
                                                    ePO.show(e.cellElement);
                                                    //
                                                    setTimeout(function () {
                                                        ePO._$wrapper.addClass('keepshown');
                                                        //
                                                        // FOCUS CELL SE RAISE EVENT FOCUSCELL CHANGED, VA SET LA KEYDONW => GRID SCROLL THI KO UPDATE POPOVER POSITION
                                                        ePO._EVTTYPE = ['NULL', 0];//reset
                                                    });
                                                    //
                                                }, 0);//trong truong hop man hinh nho bi che, thi settimeout de co thoi gian popover dieu chinh position.
                                                //
                                            };
                                        };
                                    //
                                    if (!elUI['step3_utils'].editPO) {
                                        //alert('preparePO: ' + srcp$f + '/media/utils/jsc/s3logedit.js' + src$id);
                                        srclocked(true);
                                        _gsC(srcp$f + '/media/utils/jsc/s3logedit.js' + src$id, 'js', function (data) {
                                            //
                                            new s3logedit(elUI, [frmEL, elem, xwindow, terW, function (p, args) {
                                                switch (p) {
                                                    case 'saveDB': return storeDAT; break;
                                                        //case 'lan': return init_data['lang']; break;
                                                        //case 'alog': return init_data['attLOG']; break;
                                                    case 'exPopUp': {

                                                        //var test1 = new _o$h.a();
                                                        //test1.publicInstanceMethod();
                                                        return calR$U.exPopUp(args);
                                                        break;
                                                    }
                                                };
                                            }], s2Caller, apisvr.a$.selected_language)
                                            .editoR([
                                                s3in.ruleLogN,
                                                viewLogs[0]//so luong In-Out cols
                                            ], step3_rst);
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
                                };


                            elUI['step3_rst_grid'] = step3_rst_grid.dxDataGrid({
                                keyExpr: 'id',
                                dataSource: aRST,
                                //width: '100%',
                                columnAutoWidth: false,
                                allowColumnReordering: false,
                                showBorders: true,
                                focusedRowEnabled: true

                                //, repaintChangesOnly:true

                                , noDataText: "Khong co log cham cong "
                                , pager: {
                                    visible: true,
                                    allowedPageSizes: [50, 100, 300, 500, 'all'],
                                    showPageSizeSelector: true,
                                    showInfo: true,
                                    showNavigationButtons: true,
                                    //displayMode: 'compact'
                                }
                                , paging: {
                                    pageSize:40,
                                    pageIndex: 0 
                                }
                                , keyboardNavigation: {
                                    enterKeyAction: "none",
                                    enterKeyDirection: "column",
                                    editOnKeyPress: false
                                }
                                , editing: {
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
                                    //bi can thiep handler
                                    if (elUI['step3_utils'].ignoreFocusedCellChanging && typeof elUI['step3_utils'].ignoreFocusedCellChanging === "function") {
                                        elUI['step3_utils'].ignoreFocusedCellChanging(e);
                                        return;
                                    };
                                    //
                                    hwndFocusedCellChanging(e);
                                }
                                , onKeyDown: function (e) {
                                    //
                                    var po = elUI['step3_utils'].editPO,
                                        kc = e.event.keyCode,
                                        kn = (kc >= 48 && kc <= 57),//key number
                                        kp = (kc >= 96 && kc <= 105),//key pad
                                        kes = [13, 27].indexOf(kc) > -1,
                                        pageUD = [33, 34].indexOf(kc) > -1;


                                    if (!(kn || kp || kes || pageUD)) return;

                                    if (po) {
                                        //
                                        e.event.stopPropagation();//da bi bug roi, giu nguyen do
                                        //
                                        if (pageUD) {//pageup
                                            //e.component.focus(po.option('target'));
                                            //
                                            if (handlePAGE_UD(e,kc,po)!==true) return;
                                            //
                                        } else if (e.event.keyCode == 27) {//esc key
                                            //
                                            if (po._currentVisible) {
                                                po._$popupContent.find('.btnOK.closeact').trigger('click');
                                            };
                                            //
                                        } else {
                                            //if (e.event.keyCode == 13) {//enter key
                                            //
                                            var atTD = po.atTD;
                                            e.component.getCellElement(atTD[0], atTD[3]).removeClass('dx-focused');
                                            //
                                            if (!po._currentVisible) po.show();
                                            //
                                            var EDT = elUI['step3_utils'].edit_time;
                                            //EDT._activePartIndex = 0;
                                            EDT._selectFirstPart();
                                            //
                                            if (atTD[2]) {//co value
                                                EDT.focus();
                                                setTimeout(function () {
                                                    EDT._keyboardHandler(e.event);
                                                },10);
                                            } else {
                                                EDT._keyboardHandler(e.event);
                                                setTimeout(function () {
                                                    EDT.focus();
                                                },10);
                                            };
                                            //};
                                        };
                                        //
                                        e.handled = true;
                                    };
                                }
                                , height: gidH
                                //,headerFilter: {
                                //    visible: true
                                //}
                                , columns: [].concat(empCols(), logCols())

                                , onContentReady: function (e) {
                                    //
                                    if (endSet_CELLVAL && typeof endSet_CELLVAL === "function") {
                                        endSet_CELLVAL(e);
                                    };
                                    //
                                    if (bySEARCH && typeof bySEARCH === "function") {
                                        bySEARCH(e);
                                        return;
                                    };
                                    //
                                    //
                                    var allC = e.component._controllers.columns._columns,
                                        colM = {}, ma = 0, mi = 1000000, idx = 0;

                                    for (var i = 0; i < allC.length - 1; i++) {

                                        if (!allC[i].isBand) {
                                            //
                                            if (allC[i].dataField) {

                                                if (allC[i].dataField.indexOf('fio') == 0 || allC[i].dataField.indexOf('t_') == 0) {
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
                                , onOptionChanged: function (e) {
                                    if (['paging'].indexOf(e.name) > -1) {
                                        while (DevExpress.hideTopOverlay()) { };
                                    };
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
                                }

                                //, onEditCanceling: function (e) {
                                //    // vi khi tinhlai cung co su kien nay, nen chi bat su kien khi can thoi
                                //    var gid = e.component;
                                //    if (gid.hack_cancelEditData && typeof gid.hack_cancelEditData === "function") {
                                //        gid.hack_cancelEditData(e);
                                //    };
                                //}

                                //, onRowUpdated: function (e) {
                                //    console.log('onRowUpdated');
                                //}
                                //, onRowUpdating: function (e) {
                                //    console.log('onRowUpdating');
                                //}
                                //, onRowValidating: function (e) {
                                //    console.log('onRowValidating');
                                //}


                            }).dxDataGrid('instance');

                            var logs_effect = frmEL.find(".logs-effect"),
                                med = logs_effect.closest('.media'),
                                svgR1,
                                applyR = function (data, isNEW) {
                                    med.trigger('', [data, isNEW, new $.Deferred().done(function (a, b, c, dy) {//trigger event "\x1C\x1D\x1E\x1F"
                                        //
                                        svgR1 = $('<div class="sellog-before"/>').html(a);//data);
                                        //
                                        med.prepend(svgR1).ready(function (e) {
                                            //
                                            dy = c['me'];
                                            calR$U = dy('a\x1Cfo');// \x1C:ky tu phan cach
                                            calR$U = new calR$U(elUI, [frmEL, elem, xwindow, terW], s2Caller, apisvr.a$.selected_language);
                                            if (calR$U.RU) calR$U.RU.call([JSON.stringify(s3in.ruleLogN)], svgR1, logs_effect, step3_rst);
                                            //
                                            // nut setting o man hinh progress calculation
                                            var calc_setting = xwindow.prev().find('.xbuttons').css('width', '25px');
                                            if (!calc_setting.hasClass('l-o-a-d')) {
                                                dy('a\x1Cfa').bind([_self, frmEL], [elUI, step3_rst, calc_setting])();// \x1C:ky tu phan cach
                                                dy('b\x1Cz')();// \x1C:ky tu phan cach
                                                lstFilterHead.def = dy('a\x1Cfi')(1);//default combobox filter list
                                            };
                                            //
                                            R$UL.resolve('r');
                                            //
                                        });
                                        //
                                    })]);
                                };
                            //
                            w0w.calc_rules = w0w.calc_rules || {};
                            //
                            if (!w0w.calc_rules.freeot_rule1) {
                                $.get(srcp$f + '/media/utils/rule1.html' + src$id, function (data) {
                                    //
                                    w0w.calc_rules.freeot_rule1 = data;
                                    //
                                    applyR(data, true);
                                    //
                                });

                            } else {
                                applyR(w0w.calc_rules.freeot_rule1, false);
                            };
                            //
                        } else {
                            //debugger;
                            gRST_title(elUI, "<h4>BANG CONG</h4>");
                            //
                            var grd=elUI['step3_rst_grid'];
                            grd.cancelEditData();
                            //
                            grd.option({ 'dataSource': aRST, paging: { pageIndex: 0 } });//, 'paging.pageSize': 50 
                            grd.clearSorting();
                            grd.clearSelection();
                            grd.clearFilter();
                            //
                            var searchEMP = elUI['step3_rst_grid_cmd'].searchEMP;
                            searchEMP[0].val(null);//reset search emp textbox
                            searchEMP[0].closest('.dx-textbox').dxTextBox('instance').option('value', null);
                            searchEMP[1]('');
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

                    /*****************************************************************************/
                    /******************************** START MESSAGE  *****************************/
                    , ln$, _s
                    , d0n = function (z) {
                        ln$.stopWait._stop();
                        var _ls = (new Date().getTime() - _s);
                        _ls = _ls > 0 ? (_ls > 30000) ? Math.floor(_ls / 30000) + 's' : _ls + ' ms' : '';
                        ln$.innerHTML += ((z) ? z : '<i class="d0nmsg">...Done!</i>  ') + _ls;
                        _s = new Date().getTime();//reset
                    }
                    , m$g = function (m, n) {
                        _s = new Date().getTime()
                        ln$ = csPrnt.WriteLn(n ? n : { type: 'input', typeDelay: 60000, prompt: m, value: ' ', stopWait: {} }, function () {
                            //da het thoi gian thi bao loi
                            ln$.innerHTML += '<i class="c0ncel">...Opp timout error!</i>';
                            if (stopCalc.el) stopCalc.el.trigger('click', 'timeout');
                        });
                    }
                    , pagi = function (isEnd) {
                        if (pagi.ep > 0) {
                            //
                            //
                            var atIdx = pgIdx,
                                ep = pagi.ep,
                                es = function (no) {
                                    pagilog.find("li a").removeClass('active');
                                    pagilog.find("li:nth-last-child(2)").before('<li><a class="active">' + no + '</a></li>');
                                },
                                pagEnd = function () {
                                    es(pagilog.p.length + 1);
                                    var pd = $('<div pag=' + (pagilog.p.length + 1) + '/>').append(terW.find("span"));
                                    terW.append(pd);//don sang div
                                    pagilog.p.push([]);
                                };
                            if (isEnd === 1) {//dung khi stop calc
                                pagEnd();
                                return;
                            };
                            //
                            if (atIdx % ep == 0) {
                                //
                                //
                                //https://codepen.io/martinwolf/pen/jrqrgb
                                //
                                //pagilog.p terW.find('span:nth-child(-n+90)')
                                //pagi.core*2 la so luong co the % con dang ket lai
                                var ap = terW.find("span:lt(" + (pagi.iE + ep * 2 - pagi.core * 2) + ")").remove();
                                //
                                //
                                //$.when(ap).then(console.log('div removed'), pagi.busy = 0);
                                //
                                //ap.remove();// terW.find('span:nth-child(-n+' + ~~(ep * 0.9) + ')').remove();//.addClass('pagehide');//.detach();$('.station li:gt(' + (strno - 1) + '):lt(' + (endno - strno + 1) + ')')
                                //
                                pagilog.p.push(ap);
                                es(pagilog.p.length);
                                //
                                pagi.iE = 0;//reset
                                //
                                //
                                //
                                //
                            } else if (pagi.all == atIdx) {
                                //
                                //pagEnd();
                                //
                            };
                        };
                    }
                    , logPAG = function () {
                        if (pagi.ep > 0) {
                            pagilog.on('click', 'a', function (e) {
                                //
                                if (e.target.className.indexOf('active') > -1) return;
                                //
                                pagilog.find("li a").removeClass('active');
                                var ix = $(e.target).addClass('active').text();
                                //
                                //
                                if (!isNaN(ix)) {//numeric
                                    ix = parseInt(ix) - 1;
                                    for (var i = pagilog.p.length - 1; i > -1; i--) {
                                        if (ix != i) {//focus
                                            if (pagilog.p[i].length == 0) {// store vao luu tru
                                                var dv = terW.find("div[pag='" + (i + 1) + "']").remove();
                                                pagilog.p[i] = dv.children();
                                            };
                                        }
                                    };
                                    //xu ly sau
                                    if (pagilog.p[ix].length > 0) {// lay tu luu tru bo vao
                                        var pd = $('<div pag=' + (ix + 1) + '/>').append(pagilog.p[ix]);
                                        terW.append(pd);
                                        pagilog.p[ix] = [];
                                    };

                                } else {
                                    var atPage = 0, atE;
                                    for (var i = 0; i < pagilog.p.length; i++) {
                                        if (pagilog.p[i].length == 0) {
                                            atPage = i;
                                            break;//return no se out luon
                                        }
                                    };
                                    //
                                    atE = terW.find("div[pag='" + (atPage + 1) + "']");
                                    //
                                    for (var i = pagilog.p.length - 1; i > -1 ; i--) {
                                        if (atPage != i) {
                                            var pd = $('<div pag=' + (i + 1) + '/>').append(pagilog.p[i]);
                                            if (i < atPage) {
                                                pd.insertBefore(terW.find("div[pag]:first"));
                                            } else if (i > atPage) {
                                                terW.append(pd);
                                            };
                                            pagilog.p[i] = [];
                                        };
                                    };
                                };
                                //
                                elUI['cmdS3_scroPerf'].update();//https://jsfiddle.net/egkfxzrt/14/
                                //
                                terW.animate({ scrollTop: terW[0].scrollHeight }, 1);
                                //
                            });
                        };
                    }
                    /******************************** END MESSAGE  *****************************/
                    /***************************************************************************/
                    , gauSize = function (m, n) {//m:so luong calc, n: so luong emps / calc
                        //
                        //debugger;
                        var za = calc_cores.parent()[0].getBoundingClientRect()
                        , zb = ~~((za.width-30) / m)//floor -30 la padding left, right
                        , k = 20 //padding marin
                        , h = 3 // border 2 ben, moi ben 1, tru hao 1
                        , iS = s3in.gazi[0] + k + h//120 la w cua gauge, 20 la margin
                        , aS = s3in.gazi[1] + k + h // 2 la border 2 ben
                        , panl = function (r) {
                            //
                            if (zb > aS) { //set gauge size = max
                                return [aS - k - h, r];
                            } else if (zb > iS) { //set gauge size = min
                                // da tang row thi check thu xem size nhu the nao
                                var tmp = iS;// border se nhan doi
                                while (tmp < aS) {//lon hon min thi giam tu tu, moi lan 5pixel
                                    var offs = k + h;
                                    if (tmp + offs > ~~((za.width-30) / m)) {
                                        return [tmp - offs, r];
                                    };
                                    tmp += 5;
                                };
                                return [iS - k - h, r];
                            } else { // move title + nut stop sang ben console screen
                                //
                                var minCan = ~~((za.width-30) / iS),// vay thi no chiu duoc bao nhieu con min size?
                                    rRo = Math.ceil(m / minCan);//max row
                                //
                                if ($(window).width() < 600) {// kich thuoc cua mobile
                                    var wiMaxRo = rRo * (za.width-30);// voi maxrow nay co the gian ra de kich thuoc gauge lon hon k?
                                    iS = ~~(wiMaxRo / m);//tinh lai min width
                                    minCan = ~~((za.width-30) / iS);//tinh lai min Can
                                };
                                //
                                var offs = (k + h) * (minCan-1);//offset giua 2 con.
                                //
                                return [~~((za.width-30) / minCan) - offs, rRo];
                                //
                            };
                        }
                        , pa = panl(1)
                        , gauW = pa[0] > iS ? iS + (pa[0] - iS) / 2 : pa[0]
                        , gauH = gauW;
                        //
                        evtWK.contentWindow.cGaug.size(gauW, gauH, n);
                        //
                        if ( pa[1]>1) {//doi title + stop button sang duoi man hinh console
                            _tieudeBack = true;
                            elem.parent().parent().append(tieude);
                        };
                        //
                    }
                    ///
                    , s3ModLog//tham so nay la custom edit log cua nhan vien.
                    , restoreCUSL = function () {
                        //lay lai modify attlog
                        s3ModLog = {};//reset
                        if (elUI.saveBadge.exDAT) {
                            $.map(elUI.saveBadge.exDAT, function (v, k) {
                                v.reduce(function (n, nv) {
                                    var eV = nv.split('~'),
                                        eU = eV[0].split('|'),
                                        nga = Number(eU[1]),
                                        eY = JSON.parse(eV[1]),
                                    //
                                    empL = n[Number(eU[0])] || (n[Number(eU[0])] = {});
                                    //
                                    //eY[0] la array modify log in grid data
                                    //eY[0][0] = new Date(nga);//ngay
                                    //
                                    empL[nga] = eY;//nga
                                    //
                                    return n;
                                }, s3ModLog);
                            });
                        };
                    }
                    , calcOBJ = function (__OK) {
                        //
                        //, calcSession = args.calcSession
                        var jobRST = function (e, b) {
                            //console.log(e.data.pag);
                            jobRST.fn(e.data);
                        }
                        , args = this
                        , jobEngine
                        , postArgs = []
                        , eIdx = args.Fdx//from index
                        , maxE = (args.Tdx - args.Fdx) + 1
                        , runI = args.pag * Number('10000000'.substring(0, (args.al).toString().length + 1))//al:all logs count, phai cong len 1, vi han muc cua calc <10 nen co the bi trung
                        , benchmark
                        , progressLength = 30
                        , progressChar = '·'
                        , chars = progressChar.repeat(progressLength)
                        , calcTerminate = 0
                        , fnStopMsg = function (ln) {
                            //
                            //
                            if (calcTerminate == 1) {
                                //
                                calcTerminate = 2;//delay 1 nhip
                                //
                                jobRST.fn = function (evt) { };//reset
                                //
                                jobEngine.terminate();
                                //
                                ln.innerHTML += '<i class="c0ncel">...Stop!</i>  ' + args.pag;
                                //pagi(1); //page cuoi cung
                                //
                                return false;
                                //
                            } else if (calcTerminate == 2) {
                                //
                                return false;
                                //
                            };
                            //
                            return true;
                        }
                        , fnStop = function (d0g) {
                            //
                            calcTerminate = d0g;
                            //
                            if (d0g == 0) jobEngine.terminate();// finish roi stop
                            //
                            setTimeout(__OK([args.pag]), 10);
                        }
                        , isEmp = function () {
                            //
                            var a = srcATT[0][0][eIdx]

                                , nextE = function () {
                                    //
                                    _wait(s3in.m).done(function (e) {
                                        eIdx++;
                                        runCALC();
                                    });
                                    //
                                };
                            //
                            //if (srcATT[1] && $.inArray(a.acno, srcATT[1]) == -1) {
                            //    nextE();//next nay de skip cac emp ko can tinh
                            //    return; // continue for
                            //};
                            //
                            runI += a.aLogs.length;//id for worker
                            //
                            //
                            pgIdx++;//de control global index precent thoi, ko co tac dung gi trong qua trinh tinh toan
                            //
                            //
                            _W += 1;
                            var pW = parseInt(_W * 100 / _allW);
                            //
                            elem.css('width', pW.toString() + "%").html(pW.toString() + "%");
                            elem.next().css('width', (100 - pW).toString() + "%").html('&nbsp; &nbsp;' + _W + ' / ' + _allW);
                            //
                            //
                            //console.log('core:' + args.pag + 'pagi.all: ' + pagi.all + ' ; atIdx:' + pgIdx);
                            //
                            csPrnt.WriteLn({
                                prompt: 'calc: ' + args.pag + ' ▲ acno', value: a.acno + ' Min: ' +
                                   elUI.logTi(a.minL) + ' Max: ' + elUI.logTi(a.maxL), delay: 0
                            }, function () {
                                //
                                csPrnt.WriteLn({ value: 'couting ...', delay: 0 }, function (ln) {
                                    //
                                    jobRST.fn = function (evt) {
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

                                            ln.innerHTML = chars.slice(0, Math.round(percent * progressLength / 100)) + ' ' + percent + ' ' + evt.pag//'%'
                                            //
                                        };
                                        //
                                        //************************ code nay chi de stop ****************************************************************
                                        fnStopMsg(ln);
                                        //**************************************************************************************************************
                                        //
                                    }
                                    //
                                    if (calcTerminate !== 0) {
                                        //
                                        ln.innerHTML += '<i class="c0ncel">...Stop!</i>  ' + args.pag;
                                        return;
                                    };
                                    //
                                    pagi();
                                    //
                                    //calcAngle -= 5;
                                    //kimClock = so chay tru so bat dau eIdx -args.Fdx
                                    var newP = eIdx - args.Fdx + 1;
                                    calcC0.attr("transform", calcFus.kimPOS(newP));//calcFus.cFK.calcMatrix(calcAngle)
                                    ring0[0].attr("d", calcFus.ringFromTo(0, newP)[1]);
                                    ring0[1].html(Math.floor(100 * newP / maxE) + '%');
                                    //
                                    //
                                    postArgs[0] = { messageType: 0, a: a, delay: s3in.z, loc: loc, runI: runI, pag: args.pag, modL: s3ModLog[a.acno] };
                                    jobEngine.postMessage.apply(jobEngine, postArgs);
                                    //
                                    cntJ += a.aLogs.length;
                                    //
                                });
                                //
                            });
                            //
                        }
                        , runCALC = function () {
                            if (eIdx <= args.Tdx) {//to index elUI.allLOGs[0][0].length - 1
                                //
                                isEmp();
                                //
                            } else {
                                //
                                fnStop(0);
                            };
                        }
                        , calcC0
                        , ring0
                        //, kimClock = 0
                        , calcFus = function () {
                            //
                            var gauge = evtWK.contentWindow,//lon nhat tru nho nhat,  2;//276;
                            //var randomNumber = 1;// 110;// ~~((Math.random() * max) + 1);//Math.floor
                            colorrange = {
                                color: [
                                    {
                                        minvalue: 0,//
                                        maxvalue: 0,
                                        code: "#00CED2"//https://htmlcolorcodes.com/
                                    },
                                    {
                                        minvalue: 0,
                                        maxvalue: maxE,
                                        code: "#F6F6F6"//https://htmlcolorcodes.com/color-names/
                                    }
                                ]
                            }
                            , _gau = gauge.cGaug.tmpl(colorrange);
                            //
                            calcC0 = $(_gau[0].replace(new RegExp('fill="#fuckcolor"', "g"), 'fill="#' + (cS$.c0lor == 'dark' ? 'fff' : '000') + '"') + '<div># ' + pad$(args.pag + 1, 2) + '</div></div>');
                            calc_cores.append(calcC0);
                            ring0 = [calcC0.find('.ringpath-0'), calcC0.find('.gauge_percent')]; //ko duoc doi cho khac, vi calcC0 se bi thay doi ngay phia duoi
                            calcC0 = calcC0.find('.clockhandnes');
                            //
                            return _gau[1];
                            //
                        }()

                        if (args.calcKind === undefined) {//iframe
                            //
                            jobEngine = evtWK.contentWindow;
                            postArgs[1] = "*"
                            //
                            apisvr.a$.sessions[calcSession].fn = function (a, b) {
                                jobRST.fn(b.evtData);
                            };
                            //
                        } else {//web worker 
                            jobEngine = function () {
                                //
                                var blob = new Blob([args.calcKind]);
                                var url = w0w.URL.createObjectURL(blob);

                                // Construct the Web Worker
                                var worker = new Worker(url);
                                worker.onmessage = jobRST;

                                return worker;
                            }();
                        };
                        //post cai dat ban dau de calc lam viec-------------------------------------------------
                        postArgs[0] = { messageType: 'iniCALC', calcR: s3in.ruleLogN };
                        jobEngine.postMessage.apply(jobEngine, postArgs);
                        //--------------------------------------------------------------------------------------
                        return { r: runCALC, s: fnStop };
                    }
                    , startCALC = function () {
                        //
                        m$g('Tasks engine');// message thong bao dang o process nao .
                        //
                        var isfrm = !w0w.Worker || s3in.forceIfrm,
                            z = evtWK.contentWindow,
                            calcJOB =z.jobTXT(isfrm),
                            cc = s3in.aa,//calculation ini setting
                            totA = srcATT[0][0].length,
                            pagBL = (isfrm) ? totA : cc[0] == 0 ? cc[1] : ~~(totA / cc[1]),
                            phandu = totA % pagBL,
                            numPag = (totA - phandu) / pagBL,
                            fnOK = [];

                        //
                        if (totA > 0) {
                            //
                            //lay lai modify attlog
                            restoreCUSL();
                            //
                            //s3ModLog = {};//reset
                            //if (elUI.saveBadge.exDAT) {
                            //    $.map(elUI.saveBadge.exDAT, function (v, k) {
                            //        v.reduce(function (n, nv) {
                            //            var eV = nv.split('~'),
                            //                eU = eV[0].split('|'),
                            //                nga = Number(eU[1]),
                            //                eY = JSON.parse(eV[1]),
                            //            //
                            //            empL = n[Number(eU[0])] || (n[Number(eU[0])] = {});
                            //            //
                            //            //eY[0] la array modify log in grid data
                            ////            eY[0][0] = new Date(nga);//ngay
                            //            //
                            //            empL[nga] = eY;//nga
                            //            //
                            //            return n;
                            //        }, s3ModLog);
                            //    });
                            //};
                            //
                            //
                            if (phandu > 0) numPag++;
                            //
                            totLOG = srcATT[0][0].reduce(function (a, b) {//dung de phan vung calc range index grid
                                return a + b.aLogs.length
                            }, 0);
                            //
                            //tinh toan kich thuoc cua gauge
                            gauSize(numPag, pagBL > totA ? totA : pagBL);//neu so luong quy dinh cua calc pagBL > tong so emps hien co thi lay so luong totA hien co
                            //
                            for (var i = 0; i < numPag; i++) {
                                var Fdx = pagBL * i, Tdx = Fdx + pagBL - 1;
                                if (Tdx > totA - 1) Tdx = totA - 1;
                                //console.log('i: ' + i + ' ; F: ' + Fdx + ' ; T: ' + Tdx);
                                fnOK.push(calcOBJ.bind({ al: totLOG, pag: i, Fdx: Fdx, Tdx: Tdx, calcKind: calcJOB }, function (p) {
                                    fnOK.splice(fnOK.indexOf(p[0]));
                                    if (fnOK.length == 0) {//finish
                                        //
                                        okTinhCo();
                                        //
                                    };
                                })());
                            };
                            //
                            pagi.core = numPag; pagi.ep = s3in.pagi_ep; pagi.pnu = s3in.pagi_pnu; pagi.all = totA;
                            if (totA / pagi.ep > pagi.pnu) {// lon hon 5page
                                pagi.ep = Math.ceil(totA / pagi.pnu);
                            } else if (totA < pagi.ep) {
                                pagi.ep = -1;//ko  tinh paganation
                                pagilog.prev().removeClass("float-left");
                            };
                            //
                            //
                            d0n();
                            //
                            // start thanh progress bar phia duoi man hinh console *********************************************
                            //
                            pagilog.css('display', pagi.ep > 0 ? (pagi.iE = terW.find('span').length, pagilog.prev().addClass("float-left"), '') : 'none');
                            elem.css({ 'width': "0%" }).html("");
                            elem.next().css({ 'display': "", "width": "100%" }).html("Calcualating process"); //show text calcualating process ...
                            elem.parent().css('display', "");
                            //
                            //***************************************************************************************************
                            //
                            stopCalc._ = null;//reset
                            stopCalc.hwnd = function (e, args) {//doi nut stop handler sang vi tri nay de terminate calc
                                for (var i = fnOK.length - 1; i > -1; i--) {//phai loop nguoc, de khi stop thi remove i tu array nay.
                                    fnOK[i].s(1);
                                };
                            };
                            //
                            // start calc
                            for (var i = 0; i < fnOK.length; i++) {
                                setTimeout(fnOK[i].r(), 10);
                            };
                            //
                        } else {
                            d0n('<i class="c0ncel">No attendant log!</i>  ');
                            okTinhCo();
                        };
                        //
                    }
                    , _$$ = function () {
                        s3manual_runstep[1]= function() {
                            if (stopCalc.sts === 0 && stopCalc._) stopCalc._();
                        };
                        s3manual_runstep[2] = setTimeout(s3manual_runstep[1], 100);//100
                    }
                    , s__r = function (p, c) {
                        //
                        var par = $.extend(true, {
                            ori: w0w.location.origin + ';*'
                        }, p)
                        , alog = opts.Args.stepcodeback('alog')
                        , ___$ = opts.Args.stepcodeback('___');
                        //
                        if (alog.key) {//chua co upload thi ko co a???
                            evtWK.contentWindow.cbHwnd = function (e) {
                                evtWK.contentWindow.cbHwnd = null;
                                //
                                c(e);//tra ve ket qua
                            };
                            //
                            ___$.comm1.loghole(evtWK.contentWindow
                                , alog// lay cac tham so
                                , '53335f4b49454d434f4e47' //S3_KIEMCONG
                                , par);
                            //
                        } else {
                            c({});//du me may lam kho tao nhieu qua roi.
                        };
                        return ___$;
                        //
                    }
                    , initCALc = function () {
                        //
                        benchmark = new Date().getTime();//bat dau dem thoi gian...
                        //
                        PFS(0);//disable
                        stopCalc.sts = 0;//canstop
                        stopCalc.hwnd = function (e, args) {
                            if (stopCalc._ && typeof stopCalc._ === "function") {
                                if (stopCalc.sts === 0) {
                                    stopCalc.sts = 1;
                                    setTimeout(function () {
                                        if (args === undefined && ln$) {
                                            d0n('<i class="c0ncel">...Stop!</i>  ');//khi message timeout 60000ms thi se trigger nut stop
                                        };
                                        PFS(1);//Enable
                                    }, 500);
                                    this.innerHTML = "START";
                                } else {
                                    stopCalc.sts = 0; //start again
                                    this.innerHTML = "STOP";
                                    csPrnt.WriteLn({ prompt: '⏳', value: 'Continue calculation ...', delay: 0 }, stopCalc._);
                                    PFS(0);//disable
                                };
                            };
                        };//.bind(['', ln$, 'toise truyen tham so lot san o day nhe']); // chua thuc thi
                        //
                        //
                        var initCORE = function () {
                            //
                            stopCalc._ = initCOR;//next process
                            m$g(uz('initCORE'));// message thong bao dang o process nao .
                            //
                            calcSession = new Date().getTime();
                            //
                            elUI['step3_utils'] = {// khoi tao lai 
                                //calcRule: s3in.ruleLogN //1: select rule, 5: 5 phut gan nhau se gom the, before select log before/after before: lay the truoc,
                            };
                            //
                            elUI.saveBadge.exDAT = {};//khoi tao luon.
                            if (elUI.saveBadge.calcR) {//do calc rule1 duoc chua tam khi load
                                s3in.ruleLogN = $.extend(true, [], elUI.saveBadge.calcR);
                                delete elUI.saveBadge.calcR;
                            };
                            //
                            if (elUI.saveBadge.cIO) {//co save calc rule1
                                //se delete o initCORE s3
                                viewLogs[0] = elUI.saveBadge.cIO;
                                delete elUI.saveBadge.cIO;
                            };
                            //
                            evtWK = document.createElement('iframe');
                            evtWK.setAttribute("style", "height:1px;width:1px;border:none;opacity:0");
                            //
                            evtWK.onload = function () {
                                //
                                d0n();
                                _$$();
                                //
                            };
                            //
                            // div tag in which iframe will be added should have id attribute with value myDIV
                            step3_rst.parent()[0].appendChild(evtWK);//append vao step 3 main div
                            //
                        }
                        , initCOR = function () {
                            //
                            //
                            if (!elUI['akq']) {//ko co ket qua luu tru
                                stopCalc._ = initCO; // next process
                            } else {
                                stopCalc._ = xemKQ
                            };

                            m$g('Load data');// message thong bao dang o process nao .
                            //
                            //
                            //setTimeout(function () { s3DAT(ifrmLOAD); }, 1);//di load data
                            //
                            var iDoc = evtWK.contentWindow.document
                                , attcalc = iDoc.createElement('script');
                            //
                            //
                            //
                            apisvr.a$.sessions[calcSession] = {
                                id: calcSession,
                                fn: function (a, b, c) {
                                    if (a == 'job') {
                                        if (b.evtData.messageType == 0) {//calc ready !
                                            setTimeout(function () {
                                                iniS3DAT(function (existDAT) {
                                                    d0n();//message thoi ma
                                                    _$$();
                                                });
                                            });//release handle onmessage
                                        };
                                    };
                                }
                            };
                            //
                            //
                            if (GetIEVersion() == 11) {//phai cho no load truoc.
                                var poly = iDoc.createElement('script');
                                poly.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js');
                                iDoc.head.appendChild(poly);
                            };
                            //
                            //
                            attcalc.setAttribute('seson', btoa(calcSession + '|' + w0w.location.origin + '|' + (!w0w.Worker || true)));
                            //'/media/js/attcalc.js'
                            attcalc.setAttribute('src', srcpf$ + "\x2F\x6D\x65\x64\x69\x61\x2F\x6A\x73\x2F\x61\x74\x74\x63\x61\x6C\x63\x2E\x6A\x73" + src$id);//'https://hrm.dnd.vn'
                            iDoc.head.appendChild(attcalc);
                            //
                        }
                        , iniS3DAT = function (callB) {

                            if (srcATT[0][3] && srcATT[0][4]) { // neu co ca 2 dieu kien nhung from date > end date
                                //dao nguoc lai
                                if (srcATT[0][3] > srcATT[0][4]) {
                                    var tmp = srcATT[0][4];
                                    srcATT[0][4] = srcATT[0][3];
                                    srcATT[0][3] = tmp;
                                };
                            };
                            //
                            var s3dat$ = function (z$) {
                                //listen changed logfile step 2
                                step3_rst.closest('.stepContainer').off('s2_srclog_changed').on('s2_srclog_changed', function (x, y,z,calB) {
                                    //debugger;
                                    if (elUI.akq) {//co the no bi xoa o step 2
                                        if (elUI.akq[0].indexOf('-1')!=0) {
                                            if (elUI.hasUA == 'noU') {
                                                elUI.akq[0] = '-1';// danh dau la bi thay doi log dau vao....
                                                st('setItem', elUI.s3dbTB[0], JSON.stringify(elUI.akq));//lay ten table index 0 lam key local storage !
                                            }else{
                                                elUI.akq[0] = '-1|' + elUI.akq[0].split('|')[1];// danh dau la bi thay doi log dau vao....
                                                //
                                                if (y === 'sample' && calB) calB();//goi lai de update server.
                                                //
                                            };
                                        };

                                        if (z === 'plsDEL') {
                                            delete elUI.akq;
                                        };
                                    };
                                });
                                //

                                debugger;
                                //mr.ngay&luon
                                if (apisvr.__mr_imme) {

                                    $.get( apisvr.__mr_imme[0] + '?_' + src$id).done(function (d) {

                                        srcATT[0] = opts.shareMe('verifyLOG').call([d, srcATT[1], [apisvr.__mr_imme[1], apisvr.__mr_imme[2]]]);

                                        step3_rst.closest('.swMain').find(".showinvisibles").val(d);

                                        callB();

                                    });

                                    //
                                } else if (elUI.hasUA == 'noU') {//di lay data cua s3 nua la xong
                                    //
                                    evtWK.contentWindow.ab.call(lo$DB, elUI.s3dbTB, function (e) {
                                        if (elUI.akq) {//save s3kq header
                                            if (!isRECALC && e && e.akq) {//ko phai recalc , co s3 save dat
                                                //
                                                elUI.saveBadge.exDAT = e.akq[1] || {};//store tam o day cho xu ly sau
                                                //
                                                jz(elUI.akq[1] * 1000, elUI.akq[2], e.akq[0]); // akq[1] la thoi gian bat dau nho nhat cua bang ket qua tinh, dung lam base offset.
                                                _W = Number(elUI.akq[3]);//so luong nhan vien
                                                cntJ = Number(elUI.akq[4]);//tong so log
                                                //
                                            };//giai nen ket qua ra lai aRST dung hien thi datagrid
                                            //
                                        };
                                        //
                                        callB();
                                        //
                                        lstFilterHead.cus = e && e.cusfilter_akq;//custom save  combobox filter list
                                        //
                                    });
                                    //
                                } else {// lay s3 dat + exlog list from s2 step
                                    var bdg = elUI.saveBadge,
                                        logh = {}, isSVR = false,
                                        gEditL = function () {
                                            //tinh max-min modify log 
                                            if (minmaxL.length > 0) {
                                                var _modL = minmaxL.reduce(function (n, v) {
                                                    n[0] = (n[0] === undefined || v < n[0]) ? v : n[0];
                                                    n[1] = (n[1] === undefined || v > n[1]) ? v : n[1];
                                                    return n;
                                                }, []);
                                                //neu co ket qua thi no da set roi.
                                                if (!logh['modL']) logh['modL'] = [Number(_modL[0]) / 1000, Number(_modL[1]) / 1000];
                                                //
                                                if (!isSVR) {//ko co thi phai chi dinh de no ve server lay
                                                    //chu y neu no bi mat header?
                                                    if (bdg.cusL == '1') {//phai co save s3editlog
                                                        if (!bdg.modP || function () {
                                                            var covr = function (v) {
                                                                var nga = new Date(Number(v))
                                                                , _Y = nga.getFullYear().toString()//nga
                                                                , YM = _Y + pad$(nga.getMonth() + 1, 2);
                                                                return Number(YM);
                                                        },
                                                            p1 = Number(bdg.modP[0]) <= covr(_modL[0]),
                                                            p2 = p1 && covr(_modL[1]) <= Number(bdg.modP[1]);
                                                            //
                                                            return !p2;//neu khoang thoi gian can tinh ko nam trong thoi gian da lay ve.
                                                        }()) {
                                                            isSVR = true;//doan code dai lang ngoan nay chu yeu tinh lai xem co ve server hay k???
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    //
                                    if (z$) logh['exlogs'] = z$[0], isSVR = true;//id cua log dat
                                    //
                                    if (!isRECALC && elUI['akq']) {
                                        var _X = elUI.akq[2].split('~');
                                        logh['modL'] = [_X[0], _X[1].split('|')[0]];
                                        logh['akq'] = elUI['akq'], isSVR = true;//lay ket qua save lan truoc + ko phai recalc
                                        //
                                    };
                                    //
                                    gEditL();//tinh toan de xem co lay log tu server ko?
                                    //
                                    //
                                    if (isSVR) {//ko can thiet phai kick server...
                                        //
                                        s__r({
                                            logh: btoa(JSON.stringify(logh)),
                                            logkind: 1,
                                            evt: 'load_init'
                                        }, function (e) {
                                            //
                                            if (e.exs && e.exs.length > 0) s2get(e.exs, z$[1], atob);//xu ly xong cho ra exATT
                                            //
                                            if (e.exDAT) {//load modify attlog
                                                elUI.saveBadge.exDAT = e.exDAT.reduce(function (reA, yz) {//store tam o day cho xu ly sau
                                                    reA[yz[0]] = JSON.parse(yz[1]);
                                                    return reA;
                                                }, {});
                                            };
                                            //
                                            if (e.akq) {
                                                var ix = elUI.akq[2].split('|'),
                                                    eD = ix[0].split('~')[1];
                                                //
                                                jz(e.akq0 * 1000, eD, JSON.parse(atob(e.akq)));
                                                _W = Number(ix[1]);//so luong nhan vien
                                                cntJ = Number(ix[2]);//tong so log
                                                //
                                                viewLogs[0] = Number(ix[3]);//In-Out columns grid view
                                                //
                                            };//giai nen ket qua ra lai aRST dung hien thi datagrid
                                            //
                                            if (e.modP) {//khoang thoi gian lay s3editlog save
                                                bdg.modP = e.modP;//luu lai khoang thoi gian load s3editlog, de lan tinh sau compare xem co can lay nua hay k?
                                            };
                                            //
                                            if (logh['modL']) {//nghia la co di lay s3editsave dat, nhung ko co total
                                                if (!e.exDAT_count || e.exDAT_count == '0') {
                                                    //trong truong hop header co, nhung datdb ko co
                                                    //disable request server cua phien lam viec nay luon.
                                                    if (bdg.cusL) bdg.cusL = 0;//disable
                                                };
                                            };
                                            //
                                            callB(e.akq);//co ton tai dat file?
                                            //
                                        });
                                    } else {
                                        callB();//co ton tai dat file?
                                    };
                                };
                            }
                            , jz = function (bd, ed, x) {//giai nen ket qua ra lai aRST dung hien thi datagrid
                                //
                                restoreCUSL();
                                //
                                //bd: base ngay de tinh offset min date dung de base offset second
                                //bd = new Date(bd);
                                var _d = 1000 * 60 * 60 * 24,
                                _h = 1000 * 60 * 60,
                                _m = 1000 * 60,
                                _s = 1000,
                                idx = 0;
                                $.map(x, function (a, acno) {
                                    aRST = aRST.concat(
                                        a[0].reduce(function (n, e) {//du lieu nam index 0
                                            idx++;
                                            var nga = bd +

                                                _d * e[0][0]//[0: offset ngay, 1:zip noise,2:zip free]

                                                , zN = e[0][1]//zip noise log, bo luon index 0
                                                , zF = e[0][2]//zip free log

                                                , da = new Date(nga),

                                                nv = {
                                                    "id": idx,//ben caller send max lengh of log lengh
                                                    "acno": acno,
                                                    "ten": a[1],//restore ten
                                                    "ngay": da,
                                                    "thu": da.toLocaleString(loc, { weekday: 'short' }),//loc qua loi hai, hien thi dung culture weekdayname
                                                    //'fio1': new Date(fl), // khoi tao log dau tien cua ngay
                                                    "TongTG": a[2], // tong thoi gian
                                                    "t_1": 0,
                                                    "t_2": 0,
                                                    "t_3": 0,
                                                    "t_4": 0,
                                                    "freL": [],//chua cac log free sau khi lay du 8 log
                                                    "mmT": e[0][3],//restore min max log time
                                                };

                                            for (var i = 1; i < e.length; i++) {
                                                if (e[i]) {
                                                    var _lo=new Date(nga + e[i] * _m);
                                                    nv['fio' + i] = _lo;
                                                    //
                                                    if (zN[i]) {//co noise tai log nay
                                                        nv['noi' + i] = []
                                                        zN[i].forEach(function (v, g) {
                                                            nv['noi' + i].push(new Date(_lo.getTime() + v *_m));//ben save offset minute
                                                        });
                                                    };
                                                    //
                                                };
                                            };
                                            //
                                            zF.forEach(function (v, g) {
                                                if (v) {
                                                    var _vv = [new Date(nga + v[0] * _m)];//ben save offset minute
                                                    if (v[1]) {
                                                        _vv[1] = v[1].reduce(function (_vvV, gg) {
                                                            _vvV.push(new Date(nga + gg * _m));//ben save offset minute
                                                            return _vvV;
                                                        }, []);
                                                    };
                                                    nv['freL'].push(_vv);
                                                } else {
                                                    //phuc hoi null log, do shift right ...
                                                    nv['freL'].push([]);
                                                };
                                            });
                                            //
                                            //du me, di lay lai custom modify log
                                            if (s3ModLog) {
                                                var reM, modE = s3ModLog[acno];
                                                if (modE) {
                                                    reM = modE[nga];
                                                    for (var aM = reM[0], i = 1;//aM: array modify
                                                            i < aM.length; i++) {
                                                        if (aM[i] && aM[i]!=='HIE') nv['fio' + i] = new Date(nga + aM[i] * _m);
                                                    };
                                                    //attach lai changed cua lan truoc.
                                                    nv['cusL'] = JSON.stringify(reM);
                                                    //
                                                };
                                            };
                                            //
                                            n.push(nv);
                                            //
                                            return n;
                                            //
                                        }, [])
                                    )
                                });
                                //
                                //phuc hoi lai FromDate , Todate vao srcATT
                                srcATT[0][3] = bd;
                                srcATT[0][4] = ed * 1000;
                                //
                            }
                            , s2get = function (rt, oL, t0b) {//rt la ket qua tra ve tu DB, con oL la danh sach header can get ; t0b la atob de decode base 64 from db neu co account
                                //
                                var aR = [],
                                    orCtrl = frmEL.find('#step-2 .log-ctrl kbd>span'),
                                    _aR = function (n) {
                                        $.map(oL, function (v, j) {//z$[1] la header cua logdat
                                            if (n && n.logid === v.id) {
                                                aR.push([[v], n]);
                                            } else if (elUI.logDAT[v.id]) {// se lay lai tu already load o step 2
                                                var k = elUI.logDAT[v.id];
                                                aR.push([[k[0]], k[1]]);
                                            };
                                        });
                                    }
                                //
                                if (rt.length > 0) {
                                    rt.forEach(function (n, i) {//so sanh ket qua mang ve tu server
                                        if (t0b) n.dat = t0b(n.dat);
                                        _aR(n);
                                    });
                                } else {//chi phu thuoc vao ket qua luu tru o elUI.logDAT
                                    _aR();
                                };
                                //
                                for (var i = 0; i < aR.length; i++) {
                                    var conF = aR[i][0][0]
                                        , logCtrl = orCtrl.clone()
                                        , sepetab = $(logCtrl[0])
                                        , tgformat = $(logCtrl[logCtrl.length - 1])
                                        , fI
                                        , attL;
                                    sepetab.text(conF.conf.s);
                                    //
                                    conF.conf.f.forEach(function (n, i) {
                                        fI = $(logCtrl[i + 1]);
                                        fI.attr('f', n);
                                    });
                                    //
                                    exATT.push(opts.shareMe('verifyLOG').call([aR[i][1].dat, srcATT[1], [srcATT[0][3], srcATT[0][4]]], logCtrl));
                                    //
                                };
                            };

                            if (s2params && s2params[0] == 'uplog' && s2params[1]) {  // la list thi phai tinh lai attLOGAll
                                var lstLOG = s2params[1]
                                    , atFC = lstLOG[1]
                                    , getL0G = []
                                    , logIDs = []
                                    , alreadyLOAD = [];
                                $.grep(lstLOG[0], function (l, i) {
                                    //
                                    //lay index 2=minL,index3=maxL
                                    minmaxL=minmaxL.concat([new Date(l.conf.minL).setHours(0, 0, 0), new Date(l.conf.maxL).setHours(0,0,0)]);
                                    //
                                    if (l.id !== atFC.logid) {// da load roi khong can load nua
                                        if (!elUI.logDAT[l.id]) logIDs.push(l.id); // chi lenh di lay nhung cai gi chua co
                                        getL0G.push(l); //header thi dem du ve phan tich 
                                    };
                                });
                                //
                                if (logIDs.length == 0) {
                                    s2get([], getL0G);//xu ly xong cho ra exATT
                                    s3dat$()
                                } else {
                                    if (elUI.hasUA == 'noU') {
                                        evtWK.contentWindow.ac.call(lo$DB, elUI.dbTBname[1], logIDs, function (r) {
                                            s2get(r, getL0G);//xu ly xong cho ra exATT
                                            s3dat$(r);
                                        });
                                    } else {
                                        s3dat$([logIDs, getL0G]);
                                    }
                                }
                            } else {
                                s3dat$();
                            };
                        }
                        , initCO = function () {
                            //
                            stopCalc._ = startCALC;//next step
                            m$g('Data analysis');// message thong bao dang o process nao .
                            //
                            // trong truong hop list attlog , neu gioi han emp, hoac fromdate , to date thi lay theo row focus
                            if ((elUI['fileinfo'] && elUI['fileinfo'].id) && ( srcATT[1] || srcATT[0][3] || srcATT[0][4])) {// default ko co custom chon emp hoac tungay , denngay.
                                //di tinh lai
                                srcATT[0] = opts.shareMe('verifyLOG').call([elUI.logDAT[elUI['fileinfo'].id][1].dat, srcATT[1], [srcATT[0][3], srcATT[0][4]]]);
                                //
                                // gan lai [3]:min valid date [4]: max valid date
                                srcATT[0][3] = srcATT[0][1];
                                srcATT[0][4] = srcATT[0][2];
                                //
                                // bo index 1
                                srcATT[1] = null;
                                //
                            } else {//update valid date min,max neu no bi null
                                if (!srcATT[0][3]) {
                                    var fY=srcATT[0][1].getFullYear();
                                    if (1900 < fY && fY < 2100) {
                                        srcATT[0][3] = srcATT[0][1];
                                    } else {
                                        srcATT[0][3] =new Date();//today
                                    };
                                };
                                if (!srcATT[0][4]) {
                                    var fY = srcATT[0][2].getFullYear();
                                    if (1900 < fY && fY < 2100) {
                                        srcATT[0][4] = srcATT[0][2];
                                    } else {
                                        srcATT[0][4] = new Date();//today
                                    };
                                }
                            };
                            //
                            // merge list att log orther vao srcATT[0][0] 
                            //
                            for (var i = 0; i < exATT.length; i++) {
                                //
                                if (exATT[i][0].length == 0) continue;//ko co nhan vien
                                //
                                if (srcATT[0][0].length == 0) {
                                    srcATT[0] = $.extend(true, [], exATT[i]);
                                    // gan lai [3]:min valid date [4]: max valid date
                                    srcATT[0][3] = srcATT[0][1];
                                    srcATT[0][4] = srcATT[0][2];
                                } else {
                                    $.map(exATT[i][0], function (n, i) {//don log the qua old object main
                                        var isAdd = true;
                                        $.map(srcATT[0][0], function (v, j) {
                                            if (n.acno === v.acno) {
                                                // merge log, va uniq log
                                                v.aLogs = v.aLogs.concat(n.aLogs).sort(function (a, b) {
                                                    return a - b;
                                                });
                                                for (var i = v.aLogs.length - 1; i > 0 ; i--) {
                                                    if (v.aLogs[i].getTime() === v.aLogs[i - 1].getTime()) v.aLogs.splice(i, 1);//remove trung
                                                };
                                                v.logs = v.aLogs.length;
                                                v.minL = v.aLogs[0];
                                                v.maxL = v.aLogs[v.logs - 1];
                                                //
                                                isAdd = false;
                                                return false; //exit $.map
                                            };
                                        });
                                        //
                                        if (isAdd) {
                                            srcATT[0][0].push($.extend(true, {}, n));
                                        };
                                        //
                                    });
                                    //so  sanh min log, max log de update valid min log, valid max log
                                    if (srcATT[0][3] > exATT[i][1]) srcATT[0][3] = exATT[i][1];//update min valid date
                                    if (srcATT[0][4] < exATT[i][2]) srcATT[0][4] = exATT[i][2];//update max valid date
                                };
                            };
                            //
                            srcATT[0][3] = new Date(srcATT[0][3]).setHours(0, 0, 0, 0);
                            srcATT[0][4] = new Date(srcATT[0][4]).setHours(0, 0, 0, 0);
                            //
                            // lay toan bo so luong nhan vien can tinh
                            _allW = (srcATT[1]) ? srcATT[1].length : srcATT[0][0].length;
                            //
                            //
                            d0n();
                            _$$();
                            //
                        };
                        //
                        // khoi tao thi gan thang vao luon, muc dich de nut stop con function
                        stopCalc._ = function () {
                            if (!evtWK) {
                                //
                                initCORE();
                                //
                            } else {
                                //calcTerminate = false;
                                tinhlaiSetting().then(function (rst) {
                                    //
                                    m$g('Load data');// message thong bao dang o process nao .
                                    stopCalc._ = initCO;
                                    //
                                    iniS3DAT(function () {
                                        d0n();
                                        _$$();
                                        //
                                        //tinh lai dong nghia voi cho phep save
                                        elUI.saveBadge.sBTN.option('visible', true);//nut save
                                        //
                                    });
                                    //
                                });
                            };
                        }
                        //
                        //
                        _gsC(srcpf$ + '/media/js/termynal.js', 'js', function () {

                            csPrnt = new Termynal(terW[0], {
                                cbNewLine: function () {

                                    xwindow[0].scrollTop = xwindow[0].scrollHeight;

                                    //terW.animate({ scrollTop: terW[0].scrollHeight }, 1, function () {
                                    //    //alert('scroll');
                                    //});
                                }
                                                   , lineDelay: 5
                                //, typeDelay:10
                            })

                            csPrnt.WriteLns([{ type: 'input', prompt: '✋', value: 'Welcome to Hello-HRM Online ...', typeDelay: 30 },
                            { value: uz('initCALc'), delay: 0 }], function (ln) {
                                //
                                stopCalc._();
                                //
                            });

                        }, 'TermynalJS');


                    }
                    , xemKQ = function () {
                        //debugger;
                        stopCalc._ = okTinhCo;//next step
                        _$$();
                    };
                    //
                    //
                    var uiP2 = function () {
                        setTimeout(initCALc(), 20); // next process
                        //
                        s3tit.find('h2').text(uz('CALC_H')); //tieu de tinh cong
                        s3tit.find('p').text(LAN.js_004_19[1]).css('display', '');
                        //
                        elem.parent().css('display', "none");// an thanh progress bar duoi man hinh console
                        calc_cores.empty(); calc_cores.css('display', '');
                        //
                        //var calc = tieude.find(".StepTitle-calc")
                        calc.off('click').on('click', stopCalc.evt);
                        calc.parent().next().css('display', 'none'); //StepTitle-rule
                        calc.css('display', '');
                        stopCalc.el = calc;
                        //
                        //
                        step3_rst.css('display', "none");//hide grid result TinhCo hy vong no khong render trong qua trinh tinh cong
                        step3_rst.removeClass('height-transition').addClass('height-transition-hidden');
                    };

                    //
                    uiP2();
                    //
                    xwindow.next().off('click').on('click', function (x) {//nut tinh lai
                        //
                        var _$th = $(this);
                        //
                        opts.Args.tinhlaiCHK(function (rst,s2p) {
                            //
                            if (rst == 1) {//check before recount ok
                                //
                                opts.Args.lockStep(true);
                                //
                                isRECALC = true;//tinh lai
                                //
                                return _$th;
                                //that.exec(elUI, frmEL, s2Caller);//s2params, khong can tham so nay, vi log da duoc load 
                                //
                            } else {

                            };
                        });
                        //
                    })
                        .off('ditinhlai').on('ditinhlai', function (x, s2p, z) {
                            //
                            xwindow.next().removeClass('d-flex');//nut tinh lai
                            //
                            if (s2p) s2params = s2p;//truyen lai tham so log
                            //
                            uiP1();
                            uiP2();
                        })
                        .removeClass('d-flex');//nut tinh lai
                    //
                    //
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