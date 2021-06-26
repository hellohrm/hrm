var session = '0', orgMsg = '*'
, hwndMsg = function (e) {
    if (e.data.messageType == '0') {
        //
        new attTiCo(event.data);
        //
    } else {
        //setTimeout(function () { new gethtml(e.source, e.origin, e.data, e.data.uri); }, 1);
    };
}
, attTiCo = function (args) {

    console.log(args.a.acno);

    var _wait = function (time) {
        return new Promise(function (resolve) {
            if (time > 0) {
                setTimeout(function () { resolve("result"); }, time);
            } else {
                resolve("result");
            };
        });
    }
    , aRST = []
    , calEMP = function () {

        var j = 0, runI = args.runI
        a = args.a,
        delay = args.delay,
        loc = args.loc,


    eachATT = function () {

        _wait(delay).then(function (e) {

            var eachE = {
                "id": runI - j,
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
            //
            window.parent.postMessage({ 'msgtype': 'session', 'msgkind': session, 'evtData': { messageType: "0", data: { acno: a.acno, p: Math.round((j + 1) / a.aLogs.length * 100) } } }, orgMsg);
            //
            j++;

            doLOOP();

        });
    }
    , doLOOP = function () {
        if (j < a.aLogs.length) {
            eachATT();
        } else {
            window.parent.postMessage({ 'msgtype': 'session', 'msgkind': session, 'evtData': { messageType:1, data: aRST } }, orgMsg);
        };
    };
        //
        doLOOP();
        //
    }();
};

if (window.addEventListener) {
    window.addEventListener('message', hwndMsg, false);
} else if (window.attachEvent) { // ie8
    window.attachEvent('onmessage', hwndMsg);
};
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t() }(0, function () { "use strict"; function e(e) { var t = this.constructor; return this.then(function (n) { return t.resolve(e()).then(function () { return n }) }, function (n) { return t.resolve(e()).then(function () { return t.reject(n) }) }) } function t(e) { return new this(function (t, n) { function o(e, n) { if (n && ("object" == typeof n || "function" == typeof n)) { var f = n.then; if ("function" == typeof f) return void f.call(n, function (t) { o(e, t) }, function (n) { r[e] = { status: "rejected", reason: n }, 0 == --i && t(r) }) } r[e] = { status: "fulfilled", value: n }, 0 == --i && t(r) } if (!e || "undefined" == typeof e.length) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))")); var r = Array.prototype.slice.call(e); if (0 === r.length) return t([]); for (var i = r.length, f = 0; r.length > f; f++) o(f, r[f]) }) } function n(e) { return !(!e || "undefined" == typeof e.length) } function o() { } function r(e) { if (!(this instanceof r)) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof e) throw new TypeError("not a function"); this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], l(e, this) } function i(e, t) { for (; 3 === e._state;) e = e._value; 0 !== e._state ? (e._handled = !0, r._immediateFn(function () { var n = 1 === e._state ? t.onFulfilled : t.onRejected; if (null !== n) { var o; try { o = n(e._value) } catch (r) { return void u(t.promise, r) } f(t.promise, o) } else (1 === e._state ? f : u)(t.promise, e._value) })) : e._deferreds.push(t) } function f(e, t) { try { if (t === e) throw new TypeError("A promise cannot be resolved with itself."); if (t && ("object" == typeof t || "function" == typeof t)) { var n = t.then; if (t instanceof r) return e._state = 3, e._value = t, void c(e); if ("function" == typeof n) return void l(function (e, t) { return function () { e.apply(t, arguments) } }(n, t), e) } e._state = 1, e._value = t, c(e) } catch (o) { u(e, o) } } function u(e, t) { e._state = 2, e._value = t, c(e) } function c(e) { 2 === e._state && 0 === e._deferreds.length && r._immediateFn(function () { e._handled || r._unhandledRejectionFn(e._value) }); for (var t = 0, n = e._deferreds.length; n > t; t++) i(e, e._deferreds[t]); e._deferreds = null } function l(e, t) { var n = !1; try { e(function (e) { n || (n = !0, f(t, e)) }, function (e) { n || (n = !0, u(t, e)) }) } catch (o) { if (n) return; n = !0, u(t, o) } } var a = setTimeout; r.prototype["catch"] = function (e) { return this.then(null, e) }, r.prototype.then = function (e, t) { var n = new this.constructor(o); return i(this, new function (e, t, n) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n }(e, t, n)), n }, r.prototype["finally"] = e, r.all = function (e) { return new r(function (t, o) { function r(e, n) { try { if (n && ("object" == typeof n || "function" == typeof n)) { var u = n.then; if ("function" == typeof u) return void u.call(n, function (t) { r(e, t) }, o) } i[e] = n, 0 == --f && t(i) } catch (c) { o(c) } } if (!n(e)) return o(new TypeError("Promise.all accepts an array")); var i = Array.prototype.slice.call(e); if (0 === i.length) return t([]); for (var f = i.length, u = 0; i.length > u; u++) r(u, i[u]) }) }, r.allSettled = t, r.resolve = function (e) { return e && "object" == typeof e && e.constructor === r ? e : new r(function (t) { t(e) }) }, r.reject = function (e) { return new r(function (t, n) { n(e) }) }, r.race = function (e) { return new r(function (t, o) { if (!n(e)) return o(new TypeError("Promise.race accepts an array")); for (var i = 0, f = e.length; f > i; i++) r.resolve(e[i]).then(t, o) }) }, r._immediateFn = "function" == typeof setImmediate && function (e) { setImmediate(e) } || function (e) { a(e, 0) }, r._unhandledRejectionFn = function (e) { void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e) }; var s = function () { if ("undefined" != typeof self) return self; if ("undefined" != typeof window) return window; if ("undefined" != typeof global) return global; throw Error("unable to locate global object") }(); "function" != typeof s.Promise ? s.Promise = r : s.Promise.prototype["finally"] ? s.Promise.allSettled || (s.Promise.allSettled = t) : s.Promise.prototype["finally"] = e });
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e() }(this, (function () { "use strict"; var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", $ = "Invalid Date", l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m = function (t, e, n) { var r = String(t); return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t }, g = { s: m, z: function (t) { var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60; return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0") }, m: function t(e, n) { if (e.date() < n.date()) return -t(n, e); var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, f), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), f); return +(-(r + (n - i) / (s ? i - u : u - i)) || 0) }, a: function (t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) }, p: function (t) { return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t] || String(t || "").toLowerCase().replace(/s$/, "") }, u: function (t) { return void 0 === t } }, D = "en", v = {}; v[D] = M; var p = function (t) { return t instanceof _ }, S = function (t, e, n) { var r; if (!t) return D; if ("string" == typeof t) v[t] && (r = t), e && (v[t] = e, r = t); else { var i = t.name; v[i] = t, r = i } return !n && r && (D = r), r || !n && D }, w = function (t, e) { if (p(t)) return t.clone(); var n = "object" == typeof e ? e : {}; return n.date = t, n.args = arguments, new _(n) }, O = g; O.l = S, O.i = p, O.w = function (t, e) { return w(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset }) }; var _ = function () { function M(t) { this.$L = S(t.locale, null, !0), this.parse(t) } var m = M.prototype; return m.parse = function (t) { this.$d = function (t) { var e = t.date, n = t.utc; if (null === e) return new Date(NaN); if (O.u(e)) return new Date; if (e instanceof Date) return new Date(e); if ("string" == typeof e && !/Z$/i.test(e)) { var r = e.match(l); if (r) { var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3); return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s) } } return new Date(e) }(t), this.$x = t.x || {}, this.init() }, m.init = function () { var t = this.$d; this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds() }, m.$utils = function () { return O }, m.isValid = function () { return !(this.$d.toString() === $) }, m.isSame = function (t, e) { var n = w(t); return this.startOf(e) <= n && n <= this.endOf(e) }, m.isAfter = function (t, e) { return w(t) < this.startOf(e) }, m.isBefore = function (t, e) { return this.endOf(e) < w(t) }, m.$g = function (t, e, n) { return O.u(t) ? this[e] : this.set(n, t) }, m.unix = function () { return Math.floor(this.valueOf() / 1e3) }, m.valueOf = function () { return this.$d.getTime() }, m.startOf = function (t, e) { var n = this, r = !!O.u(e) || e, h = O.p(t), $ = function (t, e) { var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n); return r ? i : i.endOf(a) }, l = function (t, e) { return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n) }, y = this.$W, M = this.$M, m = this.$D, g = "set" + (this.$u ? "UTC" : ""); switch (h) { case c: return r ? $(1, 0) : $(31, 11); case f: return r ? $(1, M) : $(0, M + 1); case o: var D = this.$locale().weekStart || 0, v = (y < D ? y + 7 : y) - D; return $(r ? m - v : m + (6 - v), M); case a: case d: return l(g + "Hours", 0); case u: return l(g + "Minutes", 1); case s: return l(g + "Seconds", 2); case i: return l(g + "Milliseconds", 3); default: return this.clone() } }, m.endOf = function (t) { return this.startOf(t, !1) }, m.$set = function (t, e) { var n, o = O.p(t), h = "set" + (this.$u ? "UTC" : ""), $ = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o], l = o === a ? this.$D + (e - this.$W) : e; if (o === f || o === c) { var y = this.clone().set(d, 1); y.$d[$](l), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d } else $ && this.$d[$](l); return this.init(), this }, m.set = function (t, e) { return this.clone().$set(t, e) }, m.get = function (t) { return this[O.p(t)]() }, m.add = function (r, h) { var d, $ = this; r = Number(r); var l = O.p(h), y = function (t) { var e = w($); return O.w(e.date(e.date() + Math.round(t * r)), $) }; if (l === f) return this.set(f, this.$M + r); if (l === c) return this.set(c, this.$y + r); if (l === a) return y(1); if (l === o) return y(7); var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[l] || 1, m = this.$d.getTime() + r * M; return O.w(m, this) }, m.subtract = function (t, e) { return this.add(-1 * t, e) }, m.format = function (t) { var e = this; if (!this.isValid()) return $; var n = t || "YYYY-MM-DDTHH:mm:ssZ", r = O.z(this), i = this.$locale(), s = this.$H, u = this.$m, a = this.$M, o = i.weekdays, f = i.months, h = function (t, r, i, s) { return t && (t[r] || t(e, n)) || i[r].substr(0, s) }, c = function (t) { return O.s(s % 12 || 12, t, "0") }, d = i.meridiem || function (t, e, n) { var r = t < 12 ? "AM" : "PM"; return n ? r.toLowerCase() : r }, l = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a + 1, MM: O.s(a + 1, 2, "0"), MMM: h(i.monthsShort, a, f, 3), MMMM: h(f, a), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h(i.weekdaysMin, this.$W, o, 2), ddd: h(i.weekdaysShort, this.$W, o, 3), dddd: o[this.$W], H: String(s), HH: O.s(s, 2, "0"), h: c(1), hh: c(2), a: d(s, u, !0), A: d(s, u, !1), m: String(u), mm: O.s(u, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: r }; return n.replace(y, (function (t, e) { return e || l[t] || r.replace(":", "") })) }, m.utcOffset = function () { return 15 * -Math.round(this.$d.getTimezoneOffset() / 15) }, m.diff = function (r, d, $) { var l, y = O.p(d), M = w(r), m = (M.utcOffset() - this.utcOffset()) * e, g = this - M, D = O.m(this, M); return D = (l = {}, l[c] = D / 12, l[f] = D, l[h] = D / 3, l[o] = (g - m) / 6048e5, l[a] = (g - m) / 864e5, l[u] = g / n, l[s] = g / e, l[i] = g / t, l)[y] || g, $ ? D : O.a(D) }, m.daysInMonth = function () { return this.endOf(f).$D }, m.$locale = function () { return v[this.$L] }, m.locale = function (t, e) { if (!t) return this.$L; var n = this.clone(), r = S(t, e, !0); return r && (n.$L = r), n }, m.clone = function () { return O.w(this.$d, this) }, m.toDate = function () { return new Date(this.valueOf()) }, m.toJSON = function () { return this.isValid() ? this.toISOString() : null }, m.toISOString = function () { return this.$d.toISOString() }, m.toString = function () { return this.$d.toUTCString() }, M }(), b = _.prototype; return w.prototype = b, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach((function (t) { b[t[1]] = function (e) { return this.$g(e, t[0], t[1]) } })), w.extend = function (t, e) { return t.$i || (t(e, _, w), t.$i = !0), w }, w.locale = S, w.isDayjs = p, w.unix = function (t) { return w(1e3 * t) }, w.en = v[D], w.Ls = v, w.p = {}, w }));


//alert('here');