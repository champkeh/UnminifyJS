(() => {
    "use strict";
    var e = function (t, a) {
        return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
        })(t, a)
    };

    function t(t, a) {
        if ("function" != typeof a && null !== a) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }

        e(t, a), t.prototype = null === a ? Object.create(a) : (n.prototype = a.prototype, new n)
    }

    function a(e, t, a, n) {
        return new (a || (a = Promise))((function (r, o) {
            function i(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value, t instanceof a ? t : new a((function (e) {
                    e(t)
                }))).then(i, l)
            }

            c((n = n.apply(e, t || [])).next())
        }))
    }

    function n(e, t) {
        var a, n, r, o, i = {
            label: 0, sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            }, trys: [], ops: []
        };
        return o = {
            next: l(0),
            throw: l(1),
            return: l(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function l(l) {
            return function (c) {
                return function (l) {
                    if (a) throw new TypeError("Generator is already executing.");
                    for (; o && (o = 0, l[0] && (i = 0)), i;) try {
                        if (a = 1, n && (r = 2 & l[0] ? n.return : l[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, l[1])).done) return r;
                        switch (n = 0, r && (l = [2 & l[0], r.value]), l[0]) {
                            case 0:
                            case 1:
                                r = l;
                                break;
                            case 4:
                                return i.label++, {value: l[1], done: !1};
                            case 5:
                                i.label++, n = l[1], l = [0];
                                continue;
                            case 7:
                                l = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(r = i.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === l[0] && (!r || l[1] > r[0] && l[1] < r[3])) {
                                    i.label = l[1];
                                    break
                                }
                                if (6 === l[0] && i.label < r[1]) {
                                    i.label = r[1], r = l;
                                    break
                                }
                                if (r && i.label < r[2]) {
                                    i.label = r[2], i.ops.push(l);
                                    break
                                }
                                r[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        l = t.call(e, i)
                    } catch (e) {
                        l = [6, e], n = 0
                    } finally {
                        a = r = 0
                    }
                    if (5 & l[0]) throw l[1];
                    return {value: l[0] ? l[1] : void 0, done: !0}
                }([l, c])
            }
        }
    }
    
    var r,
        o = -1 !== (r = navigator.appVersion).indexOf("Win") ? "Windows" : -1 !== r.indexOf("Mac") ? "MacOS" : -1 !== r.indexOf("X11") || -1 !== r.indexOf("Linux") ? "Linux" : "Unknown OS",
        i = navigator.userAgent.toLowerCase(), l = "MacOS" === o, c = "Windows" === o, h = "Linux" === o,
        M = (i.indexOf("firefox"), /^((?!chrome|android).)*safari/i.test(i));
    /android/i.test(i);
    var s = new WeakMap, v = function () {
        function e(e) {
            this.from = {}, this.to = {}, this.end = {};
            var t = e || {}, a = t.duration, n = void 0 === a ? 100 : a, r = t.fn, o = void 0 === r ? "ease-in-out" : r;
            this.duration = n, this.fn = o
        }

        return e.prototype.addProp = function (e, t, a, n) {
            return void 0 === n && (n = null), null !== t && (this.from[e] = t), null !== a && (this.to[e] = a), null !== n && (this.end[e] = n), this
        }, e
    }();

    function u(e, t) {
        for (var a in t) t.hasOwnProperty(a) && (e.style[a] = t[a])
    }

    function d(e, t) {
        var a = s.get(e);
        s.delete(e), a && (e.style.transition = "", u(e, a.props.end), a.win.clearTimeout(a.timer), e.removeEventListener("transitionend", a.fn), t || a.complete && a.complete())
    }

    var p = null;

    function m(e, t, a) {
        d(e), u(e, t.from);
        var n = {
            props: t, fn: function () {
                return d(e)
            }, timer: 0, complete: a, win: e.win
        };
        s.set(e, n);
        null === p && (p = [], setTimeout((function () {
            document.body.offsetHeight;
            var e = p;
            p = null;
            for (var t = 0, a = e; t < a.length; t++) {
                (0, a[t])()
            }
        }), 0)), p.push((function () {
            e.style.transition = "all " + t.duration + "ms " + t.fn, u(e, t.to), e.addEventListener("transitionend", (function (t) {
                t.target === e && n.fn()
            })), n.timer = n.win.setTimeout(n.fn, t.duration + 50)
        }))
    }

    var f = function () {
    }, g = 250;

    function y(e, t, a, n) {
        n = n || f;
        for (var r = 0, o = Array.prototype.slice.call(e.childNodes); r < o.length; r++) {
            d(o[r])
        }
        var i = e.firstChild;
        return i ? i !== t || i.nextSibling ? e.isShown() ? void ("left" === a ? (e.setChildrenInPlace([t, i]), m(t, new v({
            duration: g,
            fn: "ease-out"
        }).addProp("transform", "translateX(-100%)", "translateX(0)", "")), m(i, new v({
            duration: g,
            fn: "ease-out"
        }).addProp("transform", "translateX(0)", "translateX(100%)", ""), (function () {
            i.detach(), n && n()
        }))) : (e.setChildrenInPlace([i, t]), m(i, new v({
            duration: g,
            fn: "ease-out"
        }).addProp("transform", "translateX(0)", "translateX(-100%)", ""), (function () {
            i.detach(), n && n()
        })), m(t, new v({
            duration: g,
            fn: "ease-out"
        }).addProp("transform", "translateX(100%)", "translateX(0)", "")))) : (e.setChildrenInPlace([t]), void (n && n())) : void n() : (e.appendChild(t), void n())
    }

    Object.prototype.hasOwnProperty;
    !function () {
        function e() {
            this.data = {}
        }

        e.prototype.add = function (e, t) {
            var a = this.data, n = a[e];
            n || (n = [], a[e] = n), n.contains(t) || n.push(t)
        }, e.prototype.remove = function (e, t) {
            var a = this.data, n = a[e];
            n && (n.remove(t), 0 === n.length && delete a[e])
        }, e.prototype.removeKey = function (e) {
            delete this.data[e]
        }, e.prototype.get = function (e) {
            return this.data.hasOwnProperty(e) ? this.data[e] : null
        }, e.prototype.keys = function () {
            return Object.keys(this.data)
        }, e.prototype.clear = function (e) {
            delete this.data[e]
        }, e.prototype.clearAll = function () {
            this.data = {}
        }, e.prototype.contains = function (e, t) {
            var a = this.data[e];
            return a && a.contains(t)
        }, e.prototype.count = function () {
            var e = this.data, t = 0;
            for (var a in e) e.hasOwnProperty(a) && (t += e[a].length);
            return t
        }
    }();
    (function () {
        function e() {
            this.data = new Map
        }

        e.prototype.add = function (e, t) {
            var a = this.data;
            a.has(e) ? a.get(e).push(t) : a.set(e, [t])
        }, e.prototype.delete = function (e, t) {
            var a = this.data;
            if (a.has(e)) {
                var n = a.get(e);
                n.remove(t), 0 === n.length && a.delete(e)
            }
        }, e.prototype.get = function (e) {
            return this.data.get(e)
        }
    })(), function () {
        function e() {
            this.data = new Map
        }

        e.prototype.add = function (e, t) {
            var a = this.data;
            a.has(e) ? a.get(e).add(t) : a.set(e, new Set([t]))
        }, e.prototype.delete = function (e, t) {
            var a = this.data;
            if (a.has(e)) {
                var n = a.get(e);
                n.delete(t), 0 === n.size && a.delete(e)
            }
        }, e.prototype.get = function (e) {
            return this.data.get(e)
        }, e.prototype.getArray = function (e) {
            var t = this.data;
            return t.has(e) ? Array.from(t.get(e)) : []
        }
    }();
    window.queueMicrotask;

    function V(e, t) {
        var a = e.relatedTarget;
        return !a || !t.contains(a)
    }

    /bot|crawl|spider/i.test(navigator.userAgent);
    var H = {sx: 0, sy: 0, ex: 0, ey: 0, t: 0};

    function b(e) {
        return H && Date.now() - H.t < 1e3 && (Math.abs(e.clientX - H.sx) < 5 && Math.abs(e.clientY - H.sy) < 5 || Math.abs(e.clientX - H.ex) < 5 && Math.abs(e.clientY - H.ey) < 5)
    }

    var w = {
        isDesktop: !1,
        isMobile: !1,
        isDesktopApp: !1,
        isMobileApp: !1,
        isIosApp: !1,
        isAndroidApp: !1,
        isPhone: !1,
        isTablet: !1,
        isMacOS: l,
        isWin: c,
        isLinux: h,
        isSafari: M,
        resourcePathPrefix: "file:///",
        get canExportPdf() {
            return w.isDesktopApp
        },
        get canPopoutWindow() {
            return w.isDesktopApp
        },
        get canSplit() {
            return !w.isPhone
        },
        mobileDeviceHeight: 0,
        mobileKeyboardHeight: 0,
        mobileSoftKeyboardVisible: !1
    };
    var C = window.require;

    function L(e) {
        return C && C(e)
    }

    function k(e) {
        var t = L("electron");
        t && e(t)
    }

    var A = !1, Z = "0.0.0";
    k((function (e) {
        A = e.ipcRenderer.sendSync("is-dev"), Z = process.versions.electron, parseInt(Z.split(".")[0]), w.resourcePathPrefix = e.ipcRenderer.sendSync("file-url")
    }));
    var x = A;
    x || k((function (e) {
        try {
            e.deprecate.setHandler((function () {
            }))
        } catch (e) {
        }
    }));
    var E = "https://" + [String.fromCharCode(97, 112, 105), "obsidian", "md"].join(".");
    x && (E = "http://127.0.0.1:3000");
    var z = "obsidian-account", S = window.fetch, D = function (e) {
        function a(t) {
            var n = e.call(this, t.error) || this;
            return n.response = t, n.error = t.error, Object.setPrototypeOf(n, a.prototype), n
        }

        return t(a, e), a
    }(Error);

    function T(e, t) {
        return a(this, void 0, void 0, (function () {
            var a;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return [4, S(E + e, {
                            method: "POST",
                            body: JSON.stringify(t),
                            headers: {"Content-Type": "application/json"}
                        })];
                    case 1:
                        return [4, n.sent().json()];
                    case 2:
                        if ("error" in (a = n.sent())) throw new D(a);
                        return [2, a]
                }
            }))
        }))
    }

    function P(e, t, r, o) {
        return a(this, void 0, Promise, (function () {
            var a;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return [4, T("/user/signin", {email: t, password: r, mfa: o})];
                    case 1:
                        return (a = n.sent()).token && (e.token = a.token, e.email = a.email, e.name = a.name, e.license = a.license, e.save()), [2, a]
                }
            }))
        }))
    }

    var O = function () {
        function e() {
            this.keyValidation = "", this.company = "", this.expiry = 0, this.seats = 0;
            try {
                var e = JSON.parse(localStorage.getItem(z));
                this.email = e.email, this.name = e.name, this.token = e.token, this.license = e.license, this.key = e.key
            } catch (e) {
            }
        }

        return e.prototype.save = function () {
            var e = {email: this.email, name: this.name, token: this.token, license: this.license, key: this.key};
            localStorage.setItem(z, JSON.stringify(e))
        }, e.prototype.setKey = function (e) {
            this.key = e, this.save()
        }, e
    }();
    let q, I;
    const B = new WeakMap, N = new WeakMap, F = new WeakMap, j = new WeakMap, W = new WeakMap;
    let R = {
        get(e, t, a) {
            if (e instanceof IDBTransaction) {
                if ("done" === t) return N.get(e);
                if ("objectStoreNames" === t) return e.objectStoreNames || F.get(e);
                if ("store" === t) return a.objectStoreNames[1] ? void 0 : a.objectStore(a.objectStoreNames[0])
            }
            return _(e[t])
        },
        set: (e, t, a) => (e[t] = a, !0),
        has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
    };

    function K(e) {
        return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (I || (I = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function (...t) {
            return e.apply(G(this), t), _(B.get(this))
        } : function (...t) {
            return _(e.apply(G(this), t))
        } : function (t, ...a) {
            const n = e.call(G(this), t, ...a);
            return F.set(n, t.sort ? t.sort() : [t]), _(n)
        }
    }

    function U(e) {
        return "function" == typeof e ? K(e) : (e instanceof IDBTransaction && function (e) {
            if (N.has(e)) return;
            const t = new Promise(((t, a) => {
                const n = () => {
                    e.removeEventListener("complete", r), e.removeEventListener("error", o), e.removeEventListener("abort", o)
                }, r = () => {
                    t(), n()
                }, o = () => {
                    a(e.error || new DOMException("AbortError", "AbortError")), n()
                };
                e.addEventListener("complete", r), e.addEventListener("error", o), e.addEventListener("abort", o)
            }));
            N.set(e, t)
        }(e), t = e, (q || (q = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => t instanceof e)) ? new Proxy(e, R) : e);
        var t
    }

    function _(e) {
        if (e instanceof IDBRequest) return function (e) {
            const t = new Promise(((t, a) => {
                const n = () => {
                    e.removeEventListener("success", r), e.removeEventListener("error", o)
                }, r = () => {
                    t(_(e.result)), n()
                }, o = () => {
                    a(e.error), n()
                };
                e.addEventListener("success", r), e.addEventListener("error", o)
            }));
            return t.then((t => {
                t instanceof IDBCursor && B.set(t, e)
            })).catch((() => {
            })), W.set(t, e), t
        }(e);
        if (j.has(e)) return j.get(e);
        const t = U(e);
        return t !== e && (j.set(e, t), W.set(t, e)), t
    }

    const G = e => W.get(e);

    function X(e, {blocked: t} = {}) {
        const a = indexedDB.deleteDatabase(e);
        return t && a.addEventListener("blocked", (e => t(e.oldVersion, e))), _(a).then((() => {
        }))
    }

    const Y = ["get", "getKey", "getAll", "getAllKeys", "count"], J = ["put", "add", "delete", "clear"], $ = new Map;

    function Q(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
        if ($.get(t)) return $.get(t);
        const a = t.replace(/FromIndex$/, ""), n = t !== a, r = J.includes(a);
        if (!(a in (n ? IDBIndex : IDBObjectStore).prototype) || !r && !Y.includes(a)) return;
        const o = async function (e, ...t) {
            const o = this.transaction(e, r ? "readwrite" : "readonly");
            let i = o.store;
            return n && (i = i.index(t.shift())), (await Promise.all([i[a](...t), r && o.done]))[0]
        };
        return $.set(t, o), o
    }

    function ee(e) {
        Object.keys(localStorage).filter(e).forEach((function (e) {
            return localStorage.removeItem(e)
        }))
    }

    R = (e => ({...e, get: (t, a, n) => Q(t, a) || e.get(t, a, n), has: (t, a) => !!Q(t, a) || e.has(t, a)}))(R);
    var te = "language", ae = "en", ne = {
        am: "አማርኛ",
        ar: "اَلْعَرَبِيَّةُ",
        cs: "čeština",
        da: "Dansk",
        de: "Deutsch",
        en: "English",
        es: "Español",
        fa: "فارسی",
        fr: "Français",
        hu: "Magyar",
        id: "Bahasa Indonesia",
        it: "Italiano",
        ja: "日本語",
        kh: "ខ្មែរ",
        ko: "한국어",
        ms: "Bahasa Melayu",
        nl: "Nederlands",
        no: "Norsk",
        pl: "Polski",
        pt: "Português",
        "pt-BR": "Português do Brasil",
        ro: "Română",
        ru: "Pусский",
        sq: "Shqip",
        th: "ไทย",
        tr: "Türkçe",
        uk: "Українська",
        vi: "Tiếng Việt",
        zh: "简体中文",
        "zh-TW": "繁體中文"
    }, re = Object.keys(ne).sort(), oe = {zh: "zh-cn", cz: "cs", no: "nn"}, ie = "default";

    function le(e, t) {
        if (String.isString(e)) return null !== t && String.isString(t) ? t : e;
        var a = {};
        for (var n in e) e.hasOwnProperty(n) && (a[n] = le(e[n], t && t[n] || null));
        return a
    }

    function ce(e) {
        return e.replace(/[A-Z]/g, (function (e) {
            return "-" + e.toLowerCase()
        })).replace(/_[0-9]/g, (function (e) {
            return "-" + e.substring(1)
        }))
    }

    i18next.init({
        fallbackLng: ae,
        ns: [ie],
        defaultNS: ie,
        initImmediate: !1,
        interpolation: {
            alwaysFormat: !0, escapeValue: !1, format: function (e, t) {
                return "number" == typeof e ? e.toLocaleString() : e
            }
        }
    });
    var he = function e(t, a) {
        var n = {};
        for (var r in t) if (t.hasOwnProperty(r)) {
            var o = a(r), i = t[r];
            String.isString(i) ? n[o] = i : n[o] = e(i, a)
        }
        return n
    }(OBSIDIAN_DEFAULT_I18N, ce);
    i18next.addResourceBundle(ae, ie, he);
    var Me = Promise.resolve(), se = localStorage.getItem(te);
    if (se) {
        Me = a(void 0, void 0, void 0, (function () {
            var e, t, a, r, o;
            return n(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 5, , 6]), se.contains("/") || se.contains("\\") ? (e = JSON.parse(window.require("original-fs").readFileSync(se, "utf8")), i18next.addResourceBundle("dev", ie, e), [4, i18next.changeLanguage("dev")]) : [3, 2];
                    case 1:
                        return n.sent(), [2];
                    case 2:
                        return r = (a = JSON).parse, [4, ajaxPromise({url: "/i18n/" + se + ".json"})];
                    case 3:
                        return t = r.apply(a, [n.sent()]), i18next.addResourceBundle(se, ie, t), [4, i18next.changeLanguage(se)];
                    case 4:
                        return n.sent(), [3, 6];
                    case 5:
                        return o = n.sent(), console.error("Failed to load language pack.", o), [3, 6];
                    case 6:
                        return [2]
                }
            }))
        }));
        try {
            var ve = se.toLowerCase();
            oe.hasOwnProperty(ve) && (ve = oe[ve]), window.moment.locale(ve)
        } catch (e) {
        }
    }
    window.selectLanguageFileLocation = function () {
        if (w.isDesktopApp) {
            var e = electron.remote.dialog.showOpenDialogSync({
                title: "Pick location of translation file",
                filters: [{name: "Translation file", extensions: ["json"]}],
                properties: ["openFile", "dontAddToRecent"]
            });
            if (e.length > 0) {
                var t = e[0];
                localStorage.setItem(te, t), location.reload()
            }
        }
    }, x && (window.i18nGenBundles = function () {
        if (w.isDesktopApp) {
            var e = window.require("original-fs"), t = electron.ipcRenderer.sendSync("resources");
            for (var a in ne) if (ne.hasOwnProperty(a)) {
                var n = t + "/i18n/" + a + ".json";
                try {
                    if (e.existsSync(n)) {
                        var r = e.readFileSync(n, "utf8"), o = JSON.parse(r), i = le(he, o),
                            l = JSON.stringify(i, null, "\t");
                        e.writeFileSync(n, l, "utf8"), console.log("Saved bundle for", a)
                    }
                } catch (e) {
                    console.error("Failed to process translation for", a, e)
                }
            }
        }
    });
    var ue = function e(t, a) {
        var n = {};
        return new Proxy(a, {
            get: function (a, r) {
                return n.hasOwnProperty(r) ? n[r] : n[r] = e(t + ce(r) + ".", (function (e, a) {
                    return String.isString(e) ? i18next.t(t + ce(r) + "." + e, a) : i18next.t(t + ce(r), e)
                }))
            }
        })
    }("", i18next.t.bind(i18next));

    function de(e, t) {
        if (w.isMobile) {
            var a = [];
            e.addEventListener("touchstart", (function (n) {
                if (!(n.touches.length > 1)) {
                    var r = n.touches[0];
                    if ("stylus" !== r.touchType) {
                        var o = r.clientX, i = r.clientY, l = document.elementFromPoint(o, i);
                        if (!(l instanceof HTMLCanvasElement) && e.contains(l)) {
                            var c = r.identifier, h = Date.now(), M = !1, s = "x", v = r.clientX, u = r.clientY, d = h,
                                p = 0, m = 0;
                            if (a.length > 0) for (var f = 0, g = a; f < g.length; f++) {
                                g[f].cancel()
                            }
                            a = [];
                            var y = function (e) {
                                for (var t = e.changedTouches, a = 0; a < t.length; a++) {
                                    var n = t[a];
                                    if (n.identifier === c) return n
                                }
                                t = e.touches;
                                for (a = 0; a < t.length; a++) {
                                    if (t[a].identifier === c) return null
                                }
                                return w(), null
                            }, V = function (e) {
                                if (y(e) && (w(), 0 !== a.length)) {
                                    var t, n;
                                    "x" === s ? (t = v - o, n = p) : (t = u - i, n = m);
                                    for (var r = (n = 800 * n * window.devicePixelRatio) + t, l = 0, c = a; l < c.length; l++) {
                                        c[l].finish(v, u, r)
                                    }
                                    a = []
                                }
                            }, H = function (e) {
                                if (y(e) && (w(), 0 !== a.length)) {
                                    for (var t = 0, n = a; t < n.length; t++) {
                                        n[t].cancel()
                                    }
                                    a = []
                                }
                            }, b = function (e) {
                                var n = y(e);
                                if (n) {
                                    var r = n.clientX, c = n.clientY;
                                    if (!M) {
                                        if (Date.now() - h > 200) return void w();
                                        var f = Math.abs(r - o), g = Math.abs(c - i), V = Math.max(f, g);
                                        if (V < 10) return;
                                        M = !0;
                                        for (var H = l, b = "x" === (s = f === V ? "x" : "y") ? r - o : c - i; H;) {
                                            var C = "x" === s ? H.scrollWidth - H.clientWidth : H.scrollHeight - H.clientHeight;
                                            if (C > 0) {
                                                var L = getComputedStyle(H), k = "x" === s ? L.overflowX : L.overflowY;
                                                if ("auto" === k || "scroll" === k) {
                                                    var A = "x" === s ? H.scrollLeft : H.scrollTop;
                                                    if (b > 0 && A > 0 || b < 0 && A < C - 1) return void w()
                                                }
                                            }
                                            H = H.parentElement
                                        }
                                        if (window.getSelection().toString()) return void w();
                                        t({
                                            evt: e,
                                            touch: n,
                                            points: e.touches.length,
                                            targetEl: l,
                                            startX: o,
                                            startY: i,
                                            x: r,
                                            y: c,
                                            direction: s,
                                            registerCallback: function (e) {
                                                return a.push(e)
                                            }
                                        })
                                    }
                                    if (0 !== a.length) {
                                        e.preventDefault();
                                        var Z = Date.now(), x = Z - d, E = 1 - .8;
                                        p = .8 * p + (r - v) / x * E, m = .8 * m + (c - u) / x * E, v = r, u = c, d = Z;
                                        for (var z = 0, S = a; z < S.length; z++) {
                                            S[z].move(r, c)
                                        }
                                    } else w()
                                }
                            }, w = function () {
                                window.removeEventListener("touchcancel", H), window.removeEventListener("touchend", V), window.removeEventListener("touchmove", b)
                            };
                            window.addEventListener("touchcancel", H), window.addEventListener("touchend", V), window.addEventListener("touchmove", b, {passive: !1})
                        }
                    }
                }
            }), {passive: !1})
        }
    }

    var pe = [];
    var me = function () {
        function e() {
            this._loaded = !1, this._events = [], this._children = []
        }

        return e.prototype.load = function () {
            if (!this._loaded) {
                this._loaded = !0, this.onload();
                for (var e = 0, t = this._children.slice(); e < t.length; e++) {
                    t[e].load()
                }
            }
        }, e.prototype.onload = function () {
        }, e.prototype.unload = function () {
            if (this._loaded) {
                this._loaded = !1;
                for (var e = this._children, t = this._events; e.length > 0;) {
                    e.pop().unload()
                }
                for (; t.length > 0;) {
                    t.pop()()
                }
                this.onunload()
            }
        }, e.prototype.onunload = function () {
        }, e.prototype.addChild = function (e) {
            return this._children.push(e), this._loaded && e.load(), e
        }, e.prototype.removeChild = function (e) {
            var t = this._children, a = t.indexOf(e);
            return -1 !== a && (t.splice(a, 1), e.unload()), e
        }, e.prototype.register = function (e) {
            this._events.push(e)
        }, e.prototype.registerEvent = function (e) {
            this.register((function () {
                return e.e.offref(e)
            }))
        }, e.prototype.registerDomEvent = function (e, t, a, n) {
            e.addEventListener(t, a, n), this.register((function () {
                return e.removeEventListener(t, a, n)
            }))
        }, e.prototype.registerScopeEvent = function (e) {
            this.register((function () {
                return e.scope.unregister(e)
            }))
        }, e.prototype.registerInterval = function (e) {
            return this.register((function () {
                return clearInterval(e)
            })), e
        }, e
    }();
    const fe = {
        accessibility: [[1, 16, 4, 1], [6, "m18 19 1-7-6 1"], [6, "m5 8 3-3 5.5 3-2.36 3.5"], [6, "M4.24 14.5a5 5 0 0 0 6.88 6"], [6, "M13.76 17.5a5 5 0 0 0-6.88-6"]],
        activity: [[6, "M22 12h-4l-3 9L9 3l-3 9H2"]],
        "activity-square": [[5, 3, 3, 18, 18, 2], [6, "M17 12h-2l-2 5-2-10-2 5H7"]],
        "air-vent": [[6, "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"], [6, "M6 8h12"], [6, "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"], [6, "M6.6 15.6A2 2 0 1 0 10 17v-5"]],
        airplay: [[6, "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"], [3, "12 15 17 21 7 21 12 15"]],
        "alarm-check": [[1, 12, 13, 8], [6, "M5 3 2 6"], [6, "m22 6-3-3"], [6, "M6.38 18.7 4 21"], [6, "M17.64 18.67 20 21"], [6, "m9 13 2 2 4-4"]],
        "alarm-clock": [[1, 12, 13, 8], [6, "M12 9v4l2 2"], [6, "M5 3 2 6"], [6, "m22 6-3-3"], [6, "M6.38 18.7 4 21"], [6, "M17.64 18.67 20 21"]],
        "alarm-clock-off": [[6, "M6.87 6.87a8 8 0 1 0 11.26 11.26"], [6, "M19.9 14.25a8 8 0 0 0-9.15-9.15"], [6, "m22 6-3-3"], [6, "M6.26 18.67 4 21"], [6, "m2 2 20 20"], [6, "M4 4 2 6"]],
        "alarm-minus": [[1, 12, 13, 8], [6, "M5 3 2 6"], [6, "m22 6-3-3"], [6, "M6.38 18.7 4 21"], [6, "M17.64 18.67 20 21"], [6, "M9 13h6"]],
        "alarm-plus": [[1, 12, 13, 8], [6, "M5 3 2 6"], [6, "m22 6-3-3"], [6, "M6.38 18.7 4 21"], [6, "M17.64 18.67 20 21"], [6, "M12 10v6"], [6, "M9 13h6"]],
        album: [[5, 3, 3, 18, 18, 2, 2], [2, "11 3 11 11 14 8 17 11 17 3"]],
        "alert-circle": [[1, 12, 12, 10], [0, 12, 8, 12, 12], [0, 12, 16, 12.01, 16]],
        "alert-octagon": [[3, "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"], [0, 12, 8, 12, 12], [0, 12, 16, 12.01, 16]],
        "alert-triangle": [[6, "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"], [6, "M12 9v4"], [6, "M12 17h.01"]],
        "align-center": [[0, 21, 6, 3, 6], [0, 17, 12, 7, 12], [0, 19, 18, 5, 18]],
        "align-center-horizontal": [[6, "M2 12h20"], [6, "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"], [6, "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"], [6, "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"], [6, "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"]],
        "align-center-vertical": [[6, "M12 2v20"], [6, "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"], [6, "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"], [6, "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"], [6, "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"]],
        "align-end-horizontal": [[5, 4, 2, 6, 16, 2], [5, 14, 9, 6, 9, 2], [6, "M22 22H2"]],
        "align-end-vertical": [[5, 2, 4, 16, 6, 2], [5, 9, 14, 9, 6, 2], [6, "M22 22V2"]],
        "align-horizontal-distribute-center": [[5, 4, 5, 6, 14, 2], [5, 14, 7, 6, 10, 2], [6, "M17 22v-5"], [6, "M17 7V2"], [6, "M7 22v-3"], [6, "M7 5V2"]],
        "align-horizontal-distribute-end": [[5, 4, 5, 6, 14, 2], [5, 14, 7, 6, 10, 2], [6, "M10 2v20"], [6, "M20 2v20"]],
        "align-horizontal-distribute-start": [[5, 4, 5, 6, 14, 2], [5, 14, 7, 6, 10, 2], [6, "M4 2v20"], [6, "M14 2v20"]],
        "align-horizontal-justify-center": [[5, 2, 5, 6, 14, 2], [5, 16, 7, 6, 10, 2], [6, "M12 2v20"]],
        "align-horizontal-justify-end": [[5, 2, 5, 6, 14, 2], [5, 12, 7, 6, 10, 2], [6, "M22 2v20"]],
        "align-horizontal-justify-start": [[5, 6, 5, 6, 14, 2], [5, 16, 7, 6, 10, 2], [6, "M2 2v20"]],
        "align-horizontal-space-around": [[5, 9, 7, 6, 10, 2], [6, "M4 22V2"], [6, "M20 22V2"]],
        "align-horizontal-space-between": [[5, 3, 5, 6, 14, 2], [5, 15, 7, 6, 10, 2], [6, "M3 2v20"], [6, "M21 2v20"]],
        "align-justify": [[0, 3, 6, 21, 6], [0, 3, 12, 21, 12], [0, 3, 18, 21, 18]],
        "align-left": [[0, 21, 6, 3, 6], [0, 15, 12, 3, 12], [0, 17, 18, 3, 18]],
        "align-right": [[0, 21, 6, 3, 6], [0, 21, 12, 9, 12], [0, 21, 18, 7, 18]],
        "align-start-horizontal": [[5, 4, 6, 6, 16, 2], [5, 14, 6, 6, 9, 2], [6, "M22 2H2"]],
        "align-start-vertical": [[5, 6, 14, 9, 6, 2], [5, 6, 4, 16, 6, 2], [6, "M2 2v20"]],
        "align-vertical-distribute-center": [[5, 5, 14, 14, 6, 2], [5, 7, 4, 10, 6, 2], [6, "M22 7h-5"], [6, "M7 7H1"], [6, "M22 17h-3"], [6, "M5 17H2"]],
        "align-vertical-distribute-end": [[5, 5, 14, 14, 6, 2], [5, 7, 4, 10, 6, 2], [6, "M2 20h20"], [6, "M2 10h20"]],
        "align-vertical-distribute-start": [[5, 5, 14, 14, 6, 2], [5, 7, 4, 10, 6, 2], [6, "M2 14h20"], [6, "M2 4h20"]],
        "align-vertical-justify-center": [[5, 5, 16, 14, 6, 2], [5, 7, 2, 10, 6, 2], [6, "M2 12h20"]],
        "align-vertical-justify-end": [[5, 5, 12, 14, 6, 2], [5, 7, 2, 10, 6, 2], [6, "M2 22h20"]],
        "align-vertical-justify-start": [[5, 5, 16, 14, 6, 2], [5, 7, 6, 10, 6, 2], [6, "M2 2h20"]],
        "align-vertical-space-around": [[5, 7, 9, 10, 6, 2], [6, "M22 20H2"], [6, "M22 4H2"]],
        "align-vertical-space-between": [[5, 5, 15, 14, 6, 2], [5, 7, 3, 10, 6, 2], [6, "M2 21h20"], [6, "M2 3h20"]],
        ampersand: [[6, "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"], [6, "M16 12h3"]],
        ampersands: [[6, "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"], [6, "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"]],
        anchor: [[1, 12, 5, 3], [0, 12, 22, 12, 8], [6, "M5 12H2a10 10 0 0 0 20 0h-3"]],
        angry: [[1, 12, 12, 10], [6, "M16 16s-1.5-2-4-2-4 2-4 2"], [6, "M7.5 8 10 9"], [6, "m14 9 2.5-1"], [6, "M9 10h0"], [6, "M15 10h0"]],
        annoyed: [[1, 12, 12, 10], [6, "M8 15h8"], [6, "M8 9h2"], [6, "M14 9h2"]],
        antenna: [[6, "M2 12 7 2"], [6, "m7 12 5-10"], [6, "m12 12 5-10"], [6, "m17 12 5-10"], [6, "M4.5 7h15"], [6, "M12 16v6"]],
        aperture: [[1, 12, 12, 10], [0, 14.31, 8, 20.05, 17.94], [0, 9.69, 8, 21.17, 8], [0, 7.38, 12, 13.12, 2.06], [0, 9.69, 16, 3.95, 6.06], [0, 14.31, 16, 2.83, 16], [0, 16.62, 12, 10.88, 21.94]],
        "app-window": [[5, 2, 4, 20, 16, 2], [6, "M10 4v4"], [6, "M2 8h20"], [6, "M6 4v4"]],
        apple: [[6, "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"], [6, "M10 2c1 .5 2 2 2 5"]],
        archive: [[5, 2, 3, 20, 5, 1], [6, "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"], [6, "M10 12h4"]],
        "archive-restore": [[5, 2, 3, 20, 5, 1], [6, "M4 8v11a2 2 0 0 0 2 2h2"], [6, "M20 8v11a2 2 0 0 1-2 2h-2"], [6, "m9 15 3-3 3 3"], [6, "M12 12v9"]],
        "archive-x": [[5, 2, 3, 20, 5, 1], [6, "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"], [6, "m9.5 17 5-5"], [6, "m9.5 12 5 5"]],
        "area-chart": [[6, "M3 3v18h18"], [6, "M7 12v5h12V8l-5 5-4-4Z"]],
        armchair: [[6, "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"], [6, "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"], [6, "M5 18v2"], [6, "M19 18v2"]],
        "arrow-big-down": [[6, "M15 6v6h4l-7 7-7-7h4V6h6z"]],
        "arrow-big-down-dash": [[6, "M15 5H9"], [6, "M15 9v3h4l-7 7-7-7h4V9h6z"]],
        "arrow-big-left": [[6, "M18 15h-6v4l-7-7 7-7v4h6v6z"]],
        "arrow-big-left-dash": [[6, "M19 15V9"], [6, "M15 15h-3v4l-7-7 7-7v4h3v6z"]],
        "arrow-big-right": [[6, "M6 9h6V5l7 7-7 7v-4H6V9z"]],
        "arrow-big-right-dash": [[6, "M5 9v6"], [6, "M9 9h3V5l7 7-7 7v-4H9V9z"]],
        "arrow-big-up": [[6, "M9 18v-6H5l7-7 7 7h-4v6H9z"]],
        "arrow-big-up-dash": [[6, "M9 19h6"], [6, "M9 15v-3H5l7-7 7 7h-4v3H9z"]],
        "arrow-down": [[6, "M12 5v14"], [6, "m19 12-7 7-7-7"]],
        "arrow-down-01": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [5, 15, 4, 4, 6, 0, 2], [6, "M17 20v-6h-2"], [6, "M15 20h4"]],
        "arrow-down-10": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [6, "M17 10V4h-2"], [6, "M15 10h4"], [5, 15, 14, 4, 6, 0, 2]],
        "arrow-down-az": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [6, "M20 8h-5"], [6, "M15 10V6.5a2.5 2.5 0 0 1 5 0V10"], [6, "M15 14h5l-5 6h5"]],
        "arrow-down-circle": [[1, 12, 12, 10], [6, "M12 8v8"], [6, "m8 12 4 4 4-4"]],
        "arrow-down-from-line": [[6, "M19 3H5"], [6, "M12 21V7"], [6, "m6 15 6 6 6-6"]],
        "arrow-down-left": [[6, "M17 7 7 17"], [6, "M17 17H7V7"]],
        "arrow-down-left-from-circle": [[6, "M2 12a10 10 0 1 1 10 10"], [6, "m2 22 10-10"], [6, "M8 22H2v-6"]],
        "arrow-down-left-square": [[5, 3, 3, 18, 18, 2], [6, "m16 8-8 8"], [6, "M16 16H8V8"]],
        "arrow-down-narrow-wide": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [6, "M11 4h4"], [6, "M11 8h7"], [6, "M11 12h10"]],
        "arrow-down-right": [[6, "m7 7 10 10"], [6, "M17 7v10H7"]],
        "arrow-down-right-from-circle": [[6, "M12 22a10 10 0 1 1 10-10"], [6, "M22 22 12 12"], [6, "M22 16v6h-6"]],
        "arrow-down-right-square": [[5, 3, 3, 18, 18, 2], [6, "m8 8 8 8"], [6, "M16 8v8H8"]],
        "arrow-down-square": [[5, 3, 3, 18, 18, 2], [6, "M12 8v8"], [6, "m8 12 4 4 4-4"]],
        "arrow-down-to-dot": [[6, "M12 2v14"], [6, "m19 9-7 7-7-7"], [1, 12, 21, 1]],
        "arrow-down-to-line": [[6, "M12 17V3"], [6, "m6 11 6 6 6-6"], [6, "M19 21H5"]],
        "arrow-down-up": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [6, "m21 8-4-4-4 4"], [6, "M17 4v16"]],
        "arrow-down-wide-narrow": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [6, "M11 4h10"], [6, "M11 8h7"], [6, "M11 12h4"]],
        "arrow-down-za": [[6, "m3 16 4 4 4-4"], [6, "M7 4v16"], [6, "M15 4h5l-5 6h5"], [6, "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"], [6, "M20 18h-5"]],
        "arrow-left": [[6, "m12 19-7-7 7-7"], [6, "M19 12H5"]],
        "arrow-left-circle": [[1, 12, 12, 10], [6, "M16 12H8"], [6, "m12 8-4 4 4 4"]],
        "arrow-left-from-line": [[6, "m9 6-6 6 6 6"], [6, "M3 12h14"], [6, "M21 19V5"]],
        "arrow-left-right": [[6, "M8 3 4 7l4 4"], [6, "M4 7h16"], [6, "m16 21 4-4-4-4"], [6, "M20 17H4"]],
        "arrow-left-square": [[5, 3, 3, 18, 18, 2], [6, "m12 8-4 4 4 4"], [6, "M16 12H8"]],
        "arrow-left-to-line": [[6, "M3 19V5"], [6, "m13 6-6 6 6 6"], [6, "M7 12h14"]],
        "arrow-right": [[6, "M5 12h14"], [6, "m12 5 7 7-7 7"]],
        "arrow-right-circle": [[1, 12, 12, 10], [6, "M8 12h8"], [6, "m12 16 4-4-4-4"]],
        "arrow-right-from-line": [[6, "M3 5v14"], [6, "M21 12H7"], [6, "m15 18 6-6-6-6"]],
        "arrow-right-left": [[6, "m16 3 4 4-4 4"], [6, "M20 7H4"], [6, "m8 21-4-4 4-4"], [6, "M4 17h16"]],
        "arrow-right-square": [[5, 3, 3, 18, 18, 2], [6, "M8 12h8"], [6, "m12 16 4-4-4-4"]],
        "arrow-right-to-line": [[6, "M17 12H3"], [6, "m11 18 6-6-6-6"], [6, "M21 5v14"]],
        "arrow-up": [[6, "m5 12 7-7 7 7"], [6, "M12 19V5"]],
        "arrow-up-01": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [5, 15, 4, 4, 6, 0, 2], [6, "M17 20v-6h-2"], [6, "M15 20h4"]],
        "arrow-up-10": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [6, "M17 10V4h-2"], [6, "M15 10h4"], [5, 15, 14, 4, 6, 0, 2]],
        "arrow-up-az": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [6, "M20 8h-5"], [6, "M15 10V6.5a2.5 2.5 0 0 1 5 0V10"], [6, "M15 14h5l-5 6h5"]],
        "arrow-up-circle": [[1, 12, 12, 10], [6, "m16 12-4-4-4 4"], [6, "M12 16V8"]],
        "arrow-up-down": [[6, "m21 16-4 4-4-4"], [6, "M17 20V4"], [6, "m3 8 4-4 4 4"], [6, "M7 4v16"]],
        "arrow-up-from-dot": [[6, "m5 9 7-7 7 7"], [6, "M12 16V2"], [1, 12, 21, 1]],
        "arrow-up-from-line": [[6, "m18 9-6-6-6 6"], [6, "M12 3v14"], [6, "M5 21h14"]],
        "arrow-up-left": [[6, "M7 17V7h10"], [6, "M17 17 7 7"]],
        "arrow-up-left-from-circle": [[6, "M2 8V2h6"], [6, "m2 2 10 10"], [6, "M12 2A10 10 0 1 1 2 12"]],
        "arrow-up-left-square": [[5, 3, 3, 18, 18, 2], [6, "M8 16V8h8"], [6, "M16 16 8 8"]],
        "arrow-up-narrow-wide": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [6, "M11 12h4"], [6, "M11 16h7"], [6, "M11 20h10"]],
        "arrow-up-right": [[6, "M7 7h10v10"], [6, "M7 17 17 7"]],
        "arrow-up-right-from-circle": [[6, "M22 12A10 10 0 1 1 12 2"], [6, "M22 2 12 12"], [6, "M16 2h6v6"]],
        "arrow-up-right-square": [[5, 3, 3, 18, 18, 2], [6, "M8 8h8v8"], [6, "m8 16 8-8"]],
        "arrow-up-square": [[5, 3, 3, 18, 18, 2], [6, "m16 12-4-4-4 4"], [6, "M12 16V8"]],
        "arrow-up-to-line": [[6, "M5 3h14"], [6, "m18 13-6-6-6 6"], [6, "M12 7v14"]],
        "arrow-up-wide-narrow": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [6, "M11 12h10"], [6, "M11 16h7"], [6, "M11 20h4"]],
        "arrow-up-za": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [6, "M15 4h5l-5 6h5"], [6, "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"], [6, "M20 18h-5"]],
        "arrows-up-from-line": [[6, "m4 6 3-3 3 3"], [6, "M7 17V3"], [6, "m14 6 3-3 3 3"], [6, "M17 17V3"], [6, "M4 21h16"]],
        asterisk: [[6, "M12 6v12"], [6, "M17.196 9 6.804 15"], [6, "m6.804 9 10.392 6"]],
        "at-sign": [[1, 12, 12, 4], [6, "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"]],
        atom: [[1, 12, 12, 1], [6, "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"], [6, "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"]],
        award: [[1, 12, 8, 6], [6, "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"]],
        axe: [[6, "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"], [6, "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"]],
        "axis-3d": [[6, "M4 4v16h16"], [6, "m4 20 7-7"]],
        baby: [[6, "M9 12h.01"], [6, "M15 12h.01"], [6, "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"], [6, "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"]],
        backpack: [[6, "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"], [6, "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"], [6, "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"], [6, "M8 10h8"], [6, "M8 18h8"]],
        badge: [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"]],
        "badge-alert": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [0, 12, 8, 12, 12], [0, 12, 16, 12.01, 16]],
        "badge-cent": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M12 7v10"], [6, "M15.4 10a4 4 0 1 0 0 4"]],
        "badge-check": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "m9 12 2 2 4-4"]],
        "badge-dollar-sign": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"], [6, "M12 18V6"]],
        "badge-euro": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M7 12h5"], [6, "M15 9.4a4 4 0 1 0 0 5.2"]],
        "badge-help": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"], [0, 12, 17, 12.01, 17]],
        "badge-indian-rupee": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M8 8h8"], [6, "M8 12h8"], [6, "m13 17-5-1h1a4 4 0 0 0 0-8"]],
        "badge-info": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [0, 12, 16, 12, 12], [0, 12, 8, 12.01, 8]],
        "badge-japanese-yen": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "m9 8 3 3v7"], [6, "m12 11 3-3"], [6, "M9 12h6"], [6, "M9 16h6"]],
        "badge-minus": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [0, 8, 12, 16, 12]],
        "badge-percent": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "m15 9-6 6"], [6, "M9 9h.01"], [6, "M15 15h.01"]],
        "badge-plus": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [0, 12, 8, 12, 16], [0, 8, 12, 16, 12]],
        "badge-pound-sterling": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M8 12h4"], [6, "M10 16V9.5a2.5 2.5 0 0 1 5 0"], [6, "M8 16h7"]],
        "badge-russian-ruble": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M9 16h5"], [6, "M9 12h5a2 2 0 1 0 0-4h-3v9"]],
        "badge-swiss-franc": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M11 17V8h4"], [6, "M11 12h3"], [6, "M9 16h4"]],
        "badge-x": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [0, 15, 9, 9, 15], [0, 9, 9, 15, 15]],
        "baggage-claim": [[6, "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"], [6, "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"], [5, 8, 6, 13, 8, 1], [1, 18, 20, 2], [1, 9, 20, 2]],
        ban: [[1, 12, 12, 10], [6, "m4.9 4.9 14.2 14.2"]],
        banana: [[6, "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"], [6, "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"]],
        banknote: [[5, 2, 6, 20, 12, 2], [1, 12, 12, 2], [6, "M6 12h.01M18 12h.01"]],
        "bar-chart": [[0, 12, 20, 12, 10], [0, 18, 20, 18, 4], [0, 6, 20, 6, 16]],
        "bar-chart-2": [[0, 18, 20, 18, 10], [0, 12, 20, 12, 4], [0, 6, 20, 6, 14]],
        "bar-chart-3": [[6, "M3 3v18h18"], [6, "M18 17V9"], [6, "M13 17V5"], [6, "M8 17v-3"]],
        "bar-chart-4": [[6, "M3 3v18h18"], [6, "M13 17V9"], [6, "M18 17V5"], [6, "M8 17v-3"]],
        "bar-chart-big": [[6, "M3 3v18h18"], [5, 7, 10, 4, 7, 1], [5, 15, 5, 4, 12, 1]],
        "bar-chart-horizontal": [[6, "M3 3v18h18"], [6, "M7 16h8"], [6, "M7 11h12"], [6, "M7 6h3"]],
        "bar-chart-horizontal-big": [[6, "M3 3v18h18"], [5, 7, 5, 12, 4, 1], [5, 7, 13, 7, 4, 1]],
        barcode: [[6, "M3 5v14"], [6, "M8 5v14"], [6, "M12 5v14"], [6, "M17 5v14"], [6, "M21 5v14"]],
        baseline: [[6, "M4 20h16"], [6, "m6 16 6-12 6 12"], [6, "M8 12h8"]],
        bath: [[6, "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"], [0, 10, 5, 8, 7], [0, 2, 12, 22, 12], [0, 7, 19, 7, 21], [0, 17, 19, 17, 21]],
        battery: [[5, 2, 7, 16, 10, 2, 2], [0, 22, 11, 22, 13]],
        "battery-charging": [[6, "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"], [6, "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"], [6, "m11 7-3 5h4l-3 5"], [0, 22, 11, 22, 13]],
        "battery-full": [[5, 2, 7, 16, 10, 2, 2], [0, 22, 11, 22, 13], [0, 6, 11, 6, 13], [0, 10, 11, 10, 13], [0, 14, 11, 14, 13]],
        "battery-low": [[5, 2, 7, 16, 10, 2, 2], [0, 22, 11, 22, 13], [0, 6, 11, 6, 13]],
        "battery-medium": [[5, 2, 7, 16, 10, 2, 2], [0, 22, 11, 22, 13], [0, 6, 11, 6, 13], [0, 10, 11, 10, 13]],
        "battery-warning": [[6, "M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2"], [6, "M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2"], [0, 22, 11, 22, 13], [0, 10, 7, 10, 13], [0, 10, 17, 10, 17.01]],
        beaker: [[6, "M4.5 3h15"], [6, "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"], [6, "M6 14h12"]],
        bean: [[6, "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"], [6, "M5.341 10.62a4 4 0 1 0 5.279-5.28"]],
        "bean-off": [[6, "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"], [6, "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"], [6, "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"], [0, 2, 2, 22, 22]],
        bed: [[6, "M2 4v16"], [6, "M2 8h18a2 2 0 0 1 2 2v10"], [6, "M2 17h20"], [6, "M6 8v9"]],
        "bed-double": [[6, "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"], [6, "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"], [6, "M12 4v6"], [6, "M2 18h20"]],
        "bed-single": [[6, "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"], [6, "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"], [6, "M3 18h18"]],
        beef: [[1, 12.5, 8.5, 2.5], [6, "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"], [6, "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"]],
        beer: [[6, "M17 11h1a3 3 0 0 1 0 6h-1"], [6, "M9 12v6"], [6, "M13 12v6"], [6, "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"], [6, "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"]],
        bell: [[6, "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"], [6, "M10.3 21a1.94 1.94 0 0 0 3.4 0"]],
        "bell-dot": [[6, "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"], [6, "M10.3 21a1.94 1.94 0 0 0 3.4 0"], [1, 18, 8, 3]],
        "bell-minus": [[6, "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2"], [6, "M10.3 21a1.94 1.94 0 0 0 3.4 0"], [6, "M15 8h6"]],
        "bell-off": [[6, "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"], [6, "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"], [6, "M10.3 21a1.94 1.94 0 0 0 3.4 0"], [6, "m2 2 20 20"]],
        "bell-plus": [[6, "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7"], [6, "M10.3 21a1.94 1.94 0 0 0 3.4 0"], [6, "M15 8h6"], [6, "M18 5v6"]],
        "bell-ring": [[6, "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"], [6, "M10.3 21a1.94 1.94 0 0 0 3.4 0"], [6, "M4 2C2.8 3.7 2 5.7 2 8"], [6, "M22 8c0-2.3-.8-4.3-2-6"]],
        bike: [[1, 18.5, 17.5, 3.5], [1, 5.5, 17.5, 3.5], [1, 15, 5, 1], [6, "M12 17.5V14l-3-3 4-3 2 3h2"]],
        binary: [[5, 14, 14, 4, 6, 2], [5, 6, 4, 4, 6, 2], [6, "M6 20h4"], [6, "M14 10h4"], [6, "M6 14h2v6"], [6, "M14 4h2v6"]],
        biohazard: [[1, 12, 11.9, 2], [6, "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"], [6, "m8.9 10.1 1.4.8"], [6, "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"], [6, "m15.1 10.1-1.4.8"], [6, "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"], [6, "M12 13.9v1.6"], [6, "M13.5 5.4c-1-.2-2-.2-3 0"], [6, "M17 16.4c.7-.7 1.2-1.6 1.5-2.5"], [6, "M5.5 13.9c.3.9.8 1.8 1.5 2.5"]],
        bird: [[6, "M16 7h.01"], [6, "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"], [6, "m20 7 2 .5-2 .5"], [6, "M10 18v3"], [6, "M14 17.75V21"], [6, "M7 18a6 6 0 0 0 3.84-10.61"]],
        bitcoin: [[6, "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"]],
        blinds: [[6, "M3 3h18"], [6, "M20 7H8"], [6, "M20 11H8"], [6, "M10 19h10"], [6, "M8 15h12"], [6, "M4 3v14"], [1, 4, 19, 2]],
        blocks: [[5, 14, 3, 7, 7, 1], [6, "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"]],
        bluetooth: [[6, "m7 7 10 10-5 5V2l5 5L7 17"]],
        "bluetooth-connected": [[6, "m7 7 10 10-5 5V2l5 5L7 17"], [0, 18, 12, 21, 12], [0, 3, 12, 6, 12]],
        "bluetooth-off": [[6, "m17 17-5 5V12l-5 5"], [6, "m2 2 20 20"], [6, "M14.5 9.5 17 7l-5-5v4.5"]],
        "bluetooth-searching": [[6, "m7 7 10 10-5 5V2l5 5L7 17"], [6, "M20.83 14.83a4 4 0 0 0 0-5.66"], [6, "M18 12h.01"]],
        bold: [[6, "M14 12a4 4 0 0 0 0-8H6v8"], [6, "M15 20a4 4 0 0 0 0-8H6v8Z"]],
        bomb: [[1, 11, 13, 9], [6, "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"], [6, "m22 2-1.5 1.5"]],
        bone: [[6, "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"]],
        book: [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"]],
        "book-a": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "m8 13 4-7 4 7"], [6, "M9.1 11h5.7"]],
        "book-audio": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M8 8v3"], [6, "M12 6v7"], [6, "M16 8v3"]],
        "book-check": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "m9 9.5 2 2 4-4"]],
        "book-copy": [[6, "M2 16V4a2 2 0 0 1 2-2h11"], [6, "M5 14H4a2 2 0 1 0 0 4h1"], [6, "M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12"]],
        "book-dashed": [[6, "M20 22h-2"], [6, "M20 15v2h-2"], [6, "M4 19.5V15"], [6, "M20 8v3"], [6, "M18 2h2v2"], [6, "M4 11V9"], [6, "M12 2h2"], [6, "M12 22h2"], [6, "M12 17h2"], [6, "M8 22H6.5a2.5 2.5 0 0 1 0-5H8"], [6, "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"]],
        "book-down": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M12 13V7"], [6, "m9 10 3 3 3-3"]],
        "book-headphones": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [1, 9, 12, 1], [6, "M8 12v-2a4 4 0 0 1 8 0v2"], [1, 15, 12, 1]],
        "book-heart": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z"]],
        "book-image": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [1, 10, 8, 2], [6, "m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17"]],
        "book-key": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"], [6, "M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20"], [1, 14, 8, 2], [6, "m20 2-4.5 4.5"], [6, "m19 3 1 1"]],
        "book-lock": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"], [6, "M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20"], [5, 12, 6, 8, 5, 1], [6, "M18 6V4a2 2 0 1 0-4 0v2"]],
        "book-marked": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [2, "10 2 10 10 13 7 16 10 16 2"]],
        "book-minus": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M9 10h6"]],
        "book-open": [[6, "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"], [6, "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"]],
        "book-open-check": [[6, "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"], [6, "m16 12 2 2 4-4"], [6, "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"]],
        "book-open-text": [[6, "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"], [6, "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"], [6, "M6 8h2"], [6, "M6 12h2"], [6, "M16 8h2"], [6, "M16 12h2"]],
        "book-plus": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M9 10h6"], [6, "M12 7v6"]],
        "book-template": [[6, "M20 22h-2"], [6, "M20 15v2h-2"], [6, "M4 19.5V15"], [6, "M20 8v3"], [6, "M18 2h2v2"], [6, "M4 11V9"], [6, "M12 2h2"], [6, "M12 22h2"], [6, "M12 17h2"], [6, "M8 22H6.5a2.5 2.5 0 0 1 0-5H8"], [6, "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"]],
        "book-text": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M8 7h6"], [6, "M8 11h8"]],
        "book-type": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M16 8V6H8v2"], [6, "M12 6v7"], [6, "M10 13h4"]],
        "book-up": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M12 13V7"], [6, "m9 10 3-3 3 3"]],
        "book-up-2": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"], [6, "M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M12 13V7"], [6, "m9 10 3-3 3 3"], [6, "m9 5 3-3 3 3"]],
        "book-user": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [1, 12, 8, 2], [6, "M15 13a3 3 0 1 0-6 0"]],
        "book-x": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "m14.5 7-5 5"], [6, "m9.5 7 5 5"]],
        bookmark: [[6, "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"]],
        "bookmark-check": [[6, "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"], [6, "m9 10 2 2 4-4"]],
        "bookmark-minus": [[6, "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"], [0, 15, 10, 9, 10]],
        "bookmark-plus": [[6, "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"], [0, 12, 7, 12, 13], [0, 15, 10, 9, 10]],
        "bookmark-x": [[6, "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"], [6, "m14.5 7.5-5 5"], [6, "m9.5 7.5 5 5"]],
        "boom-box": [[6, "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"], [6, "M8 8v1"], [6, "M12 8v1"], [6, "M16 8v1"], [5, 2, 9, 20, 12, 2], [1, 8, 15, 2], [1, 16, 15, 2]],
        bot: [[6, "M12 8V4H8"], [5, 4, 8, 16, 12, 2], [6, "M2 14h2"], [6, "M20 14h2"], [6, "M15 13v2"], [6, "M9 13v2"]],
        box: [[6, "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"], [6, "m3.3 7 8.7 5 8.7-5"], [6, "M12 22V12"]],
        "box-select": [[6, "M5 3a2 2 0 0 0-2 2"], [6, "M19 3a2 2 0 0 1 2 2"], [6, "M21 19a2 2 0 0 1-2 2"], [6, "M5 21a2 2 0 0 1-2-2"], [6, "M9 3h1"], [6, "M9 21h1"], [6, "M14 3h1"], [6, "M14 21h1"], [6, "M3 9v1"], [6, "M21 9v1"], [6, "M3 14v1"], [6, "M21 14v1"]],
        boxes: [[6, "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"], [6, "m7 16.5-4.74-2.85"], [6, "m7 16.5 5-3"], [6, "M7 16.5v5.17"], [6, "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"], [6, "m17 16.5-5-3"], [6, "m17 16.5 4.74-2.85"], [6, "M17 16.5v5.17"], [6, "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"], [6, "M12 8 7.26 5.15"], [6, "m12 8 4.74-2.85"], [6, "M12 13.5V8"]],
        braces: [[6, "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"], [6, "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"]],
        brackets: [[6, "M16 3h3v18h-3"], [6, "M8 21H5V3h3"]],
        brain: [[6, "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"], [6, "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"]],
        "brain-circuit": [[6, "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"], [6, "M16 8V5c0-1.1.9-2 2-2"], [6, "M12 13h4"], [6, "M12 18h6a2 2 0 0 1 2 2v1"], [6, "M12 8h8"], [6, "M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"], [6, "M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"], [6, "M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"], [6, "M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"]],
        "brain-cog": [[1, 12, 12, 3], [6, "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"], [6, "m15.7 10.4-.9.4"], [6, "m9.2 13.2-.9.4"], [6, "m13.6 15.7-.4-.9"], [6, "m10.8 9.2-.4-.9"], [6, "m15.7 13.5-.9-.4"], [6, "m9.2 10.9-.9-.4"], [6, "m10.5 15.7.4-.9"], [6, "m13.1 9.2.4-.9"]],
        briefcase: [[5, 2, 7, 20, 14, 2, 2], [6, "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"]],
        "bring-to-front": [[5, 8, 8, 8, 8, 2], [6, "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"], [6, "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"]],
        brush: [[6, "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"], [6, "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"]],
        bug: [[6, "m8 2 1.88 1.88"], [6, "M14.12 3.88 16 2"], [6, "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"], [6, "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"], [6, "M12 20v-9"], [6, "M6.53 9C4.6 8.8 3 7.1 3 5"], [6, "M6 13H2"], [6, "M3 21c0-2.1 1.7-3.9 3.8-4"], [6, "M20.97 5c0 2.1-1.6 3.8-3.5 4"], [6, "M22 13h-4"], [6, "M17.2 17c2.1.1 3.8 1.9 3.8 4"]],
        "bug-off": [[6, "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"], [6, "M14.12 3.88 16 2"], [6, "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"], [6, "M20.97 5c0 2.1-1.6 3.8-3.5 4"], [6, "m2 2 20 20"], [6, "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"], [6, "M12 20v-8"], [6, "M6 13H2"], [6, "M3 21c0-2.1 1.7-3.9 3.8-4"]],
        "bug-play": [[6, "m8 2 1.88 1.88"], [6, "M14.12 3.88 16 2"], [6, "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"], [6, "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"], [6, "M6.53 9C4.6 8.8 3 7.1 3 5"], [6, "M6 13H2"], [6, "M3 21c0-2.1 1.7-3.9 3.8-4"], [6, "M20.97 5c0 2.1-1.6 3.8-3.5 4"], [6, "m12 12 8 5-8 5Z"]],
        building: [[5, 4, 2, 16, 20, 2, 2], [6, "M9 22v-4h6v4"], [6, "M8 6h.01"], [6, "M16 6h.01"], [6, "M12 6h.01"], [6, "M12 10h.01"], [6, "M12 14h.01"], [6, "M16 10h.01"], [6, "M16 14h.01"], [6, "M8 10h.01"], [6, "M8 14h.01"]],
        "building-2": [[6, "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"], [6, "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"], [6, "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"], [6, "M10 6h4"], [6, "M10 10h4"], [6, "M10 14h4"], [6, "M10 18h4"]],
        bus: [[6, "M8 6v6"], [6, "M15 6v6"], [6, "M2 12h19.6"], [6, "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"], [1, 7, 18, 2], [6, "M9 18h5"], [1, 16, 18, 2]],
        "bus-front": [[6, "M4 6 2 7"], [6, "M10 6h4"], [6, "m22 7-2-1"], [5, 4, 3, 16, 16, 2], [6, "M4 11h16"], [6, "M8 15h.01"], [6, "M16 15h.01"], [6, "M6 19v2"], [6, "M18 21v-2"]],
        cable: [[6, "M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z"], [6, "M3 5V3"], [6, "M7 5V3"], [6, "M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9"], [6, "M17 21v-2"], [6, "M21 21v-2"], [6, "M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"]],
        "cable-car": [[6, "M10 3h.01"], [6, "M14 2h.01"], [6, "m2 9 20-5"], [6, "M12 12V6.5"], [5, 4, 12, 16, 10, 3], [6, "M9 12v5"], [6, "M15 12v5"], [6, "M4 17h16"]],
        cake: [[6, "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"], [6, "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"], [6, "M2 21h20"], [6, "M7 8v3"], [6, "M12 8v3"], [6, "M17 8v3"], [6, "M7 4h0.01"], [6, "M12 4h0.01"], [6, "M17 4h0.01"]],
        "cake-slice": [[1, 9, 7, 2], [6, "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"], [6, "M16 13H3"], [6, "M16 17H3"]],
        calculator: [[5, 4, 2, 16, 20, 2], [0, 8, 6, 16, 6], [0, 16, 14, 16, 18], [6, "M16 10h.01"], [6, "M12 10h.01"], [6, "M8 10h.01"], [6, "M12 14h.01"], [6, "M8 14h.01"], [6, "M12 18h.01"], [6, "M8 18h.01"]],
        calendar: [[5, 3, 4, 18, 18, 2, 2], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10]],
        "calendar-check": [[5, 3, 4, 18, 18, 2, 2], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [6, "m9 16 2 2 4-4"]],
        "calendar-check-2": [[6, "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [6, "m16 20 2 2 4-4"]],
        "calendar-clock": [[6, "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"], [6, "M16 2v4"], [6, "M8 2v4"], [6, "M3 10h5"], [6, "M17.5 17.5 16 16.25V14"], [6, "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"]],
        "calendar-days": [[5, 3, 4, 18, 18, 2, 2], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [6, "M8 14h.01"], [6, "M12 14h.01"], [6, "M16 14h.01"], [6, "M8 18h.01"], [6, "M12 18h.01"], [6, "M16 18h.01"]],
        "calendar-heart": [[6, "M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7"], [6, "M16 2v4"], [6, "M8 2v4"], [6, "M3 10h18"], [6, "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"]],
        "calendar-minus": [[6, "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [0, 16, 19, 22, 19]],
        "calendar-off": [[6, "M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"], [6, "M21 15.5V6a2 2 0 0 0-2-2H9.5"], [6, "M16 2v4"], [6, "M3 10h7"], [6, "M21 10h-5.5"], [0, 2, 2, 22, 22]],
        "calendar-plus": [[6, "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [0, 19, 16, 19, 22], [0, 16, 19, 22, 19]],
        "calendar-range": [[5, 3, 4, 18, 18, 2, 2], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [6, "M17 14h-6"], [6, "M13 18H7"], [6, "M7 14h.01"], [6, "M17 18h.01"]],
        "calendar-search": [[6, "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5"], [6, "M16 2v4"], [6, "M8 2v4"], [6, "M3 10h18"], [6, "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"], [6, "m22 22-1.5-1.5"]],
        "calendar-x": [[5, 3, 4, 18, 18, 2, 2], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [0, 10, 14, 14, 18], [0, 14, 14, 10, 18]],
        "calendar-x2": [[6, "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [0, 17, 17, 22, 22], [0, 17, 22, 22, 17]],
        camera: [[6, "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"], [1, 12, 13, 3]],
        "camera-off": [[0, 2, 2, 22, 22], [6, "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"], [6, "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"], [6, "M14.121 15.121A3 3 0 1 1 9.88 10.88"]],
        "candlestick-chart": [[6, "M9 5v4"], [5, 7, 9, 4, 6, 1], [6, "M9 15v2"], [6, "M17 3v2"], [5, 15, 5, 4, 8, 1], [6, "M17 13v3"], [6, "M3 3v18h18"]],
        candy: [[6, "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"], [6, "M14 6.5v10"], [6, "M10 7.5v10"], [6, "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"], [6, "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"]],
        "candy-cane": [[6, "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"], [6, "M17.75 7 15 2.1"], [6, "M10.9 4.8 13 9"], [6, "m7.9 9.7 2 4.4"], [6, "M4.9 14.7 7 18.9"]],
        "candy-off": [[6, "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"], [6, "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"], [6, "M14 16.5V14"], [6, "M14 6.5v1.843"], [6, "M10 10v7.5"], [6, "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"], [6, "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"], [0, 2, 2, 22, 22]],
        car: [[6, "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"], [1, 7, 17, 2], [6, "M9 17h6"], [1, 17, 17, 2]],
        "car-front": [[6, "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"], [6, "M7 14h.01"], [6, "M17 14h.01"], [5, 3, 10, 18, 8, 2], [6, "M5 18v2"], [6, "M19 18v2"]],
        "car-taxi-front": [[6, "M10 2h4"], [6, "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"], [6, "M7 14h.01"], [6, "M17 14h.01"], [5, 3, 10, 18, 8, 2], [6, "M5 18v2"], [6, "M19 18v2"]],
        caravan: [[5, 2, 9, 4, 4], [5, 10, 9, 4, 10], [6, "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"], [1, 8, 19, 2], [6, "M10 19h12v-2"]],
        carrot: [[6, "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"], [6, "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"], [6, "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"]],
        "case-lower": [[1, 7, 12, 3], [6, "M10 9v6"], [1, 17, 12, 3], [6, "M14 7v8"]],
        "case-sensitive": [[6, "m3 15 4-8 4 8"], [6, "M4 13h6"], [1, 18, 12, 3], [6, "M21 9v6"]],
        "case-upper": [[6, "m3 15 4-8 4 8"], [6, "M4 13h6"], [6, "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"]],
        "cassette-tape": [[5, 2, 4, 20, 16, 2], [1, 8, 10, 2], [6, "M8 12h8"], [1, 16, 10, 2], [6, "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"]],
        cast: [[6, "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"], [6, "M2 12a9 9 0 0 1 8 8"], [6, "M2 16a5 5 0 0 1 4 4"], [0, 2, 20, 2.01, 20]],
        castle: [[6, "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"], [6, "M18 11V4H6v7"], [6, "M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4"], [6, "M22 11V9"], [6, "M2 11V9"], [6, "M6 4V2"], [6, "M18 4V2"], [6, "M10 4V2"], [6, "M14 4V2"]],
        cat: [[6, "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"], [6, "M8 14v.5"], [6, "M16 14v.5"], [6, "M11.25 16.25h1.5L12 17l-.75-.75Z"]],
        check: [[6, "M20 6 9 17l-5-5"]],
        "check-check": [[6, "M18 6 7 17l-5-5"], [6, "m22 10-7.5 7.5L13 16"]],
        "check-circle": [[6, "M22 11.08V12a10 10 0 1 1-5.93-9.14"], [6, "m9 11 3 3L22 4"]],
        "check-circle-2": [[1, 12, 12, 10], [6, "m9 12 2 2 4-4"]],
        "check-square": [[6, "m9 11 3 3L22 4"], [6, "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"]],
        "check-square-2": [[5, 3, 3, 18, 18, 2], [6, "m9 12 2 2 4-4"]],
        "chef-hat": [[6, "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"], [0, 6, 17, 18, 17]],
        cherry: [[6, "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"], [6, "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"], [6, "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"], [6, "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"]],
        "chevron-down": [[6, "m6 9 6 6 6-6"]],
        "chevron-down-circle": [[1, 12, 12, 10], [6, "m16 10-4 4-4-4"]],
        "chevron-down-square": [[5, 3, 3, 18, 18, 2], [6, "m16 10-4 4-4-4"]],
        "chevron-first": [[6, "m17 18-6-6 6-6"], [6, "M7 6v12"]],
        "chevron-last": [[6, "m7 18 6-6-6-6"], [6, "M17 6v12"]],
        "chevron-left": [[6, "m15 18-6-6 6-6"]],
        "chevron-left-circle": [[1, 12, 12, 10], [6, "m14 16-4-4 4-4"]],
        "chevron-left-square": [[5, 3, 3, 18, 18, 2], [6, "m14 16-4-4 4-4"]],
        "chevron-right": [[6, "m9 18 6-6-6-6"]],
        "chevron-right-circle": [[1, 12, 12, 10], [6, "m10 8 4 4-4 4"]],
        "chevron-right-square": [[5, 3, 3, 18, 18, 2], [6, "m10 8 4 4-4 4"]],
        "chevron-up": [[6, "m18 15-6-6-6 6"]],
        "chevron-up-circle": [[1, 12, 12, 10], [6, "m8 14 4-4 4 4"]],
        "chevron-up-square": [[5, 3, 3, 18, 18, 2], [6, "m8 14 4-4 4 4"]],
        "chevrons-down": [[6, "m7 6 5 5 5-5"], [6, "m7 13 5 5 5-5"]],
        "chevrons-down-up": [[6, "m7 20 5-5 5 5"], [6, "m7 4 5 5 5-5"]],
        "chevrons-left": [[6, "m11 17-5-5 5-5"], [6, "m18 17-5-5 5-5"]],
        "chevrons-left-right": [[6, "m9 7-5 5 5 5"], [6, "m15 7 5 5-5 5"]],
        "chevrons-right": [[6, "m6 17 5-5-5-5"], [6, "m13 17 5-5-5-5"]],
        "chevrons-right-left": [[6, "m20 17-5-5 5-5"], [6, "m4 17 5-5-5-5"]],
        "chevrons-up": [[6, "m17 11-5-5-5 5"], [6, "m17 18-5-5-5 5"]],
        "chevrons-up-down": [[6, "m7 15 5 5 5-5"], [6, "m7 9 5-5 5 5"]],
        chrome: [[1, 12, 12, 10], [1, 12, 12, 4], [0, 21.17, 8, 12, 8], [0, 3.95, 6.06, 8.54, 14], [0, 10.88, 21.94, 15.46, 14]],
        church: [[6, "m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"], [6, "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"], [6, "M18 22V5l-6-3-6 3v17"], [6, "M12 7v5"], [6, "M10 9h4"]],
        cigarette: [[6, "M18 12H2v4h16"], [6, "M22 12v4"], [6, "M7 12v4"], [6, "M18 8c0-2.5-2-2.5-2-5"], [6, "M22 8c0-2.5-2-2.5-2-5"]],
        "cigarette-off": [[0, 2, 2, 22, 22], [6, "M12 12H2v4h14"], [6, "M22 12v4"], [6, "M18 12h-.5"], [6, "M7 12v4"], [6, "M18 8c0-2.5-2-2.5-2-5"], [6, "M22 8c0-2.5-2-2.5-2-5"]],
        circle: [[1, 12, 12, 10]],
        "circle-dashed": [[6, "M10.1 2.18a9.93 9.93 0 0 1 3.8 0"], [6, "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"], [6, "M21.82 10.1a9.93 9.93 0 0 1 0 3.8"], [6, "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"], [6, "M13.9 21.82a9.94 9.94 0 0 1-3.8 0"], [6, "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"], [6, "M2.18 13.9a9.93 9.93 0 0 1 0-3.8"], [6, "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"]],
        "circle-dollar-sign": [[1, 12, 12, 10], [6, "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"], [6, "M12 18V6"]],
        "circle-dot": [[1, 12, 12, 10], [1, 12, 12, 1]],
        "circle-dot-dashed": [[6, "M10.1 2.18a9.93 9.93 0 0 1 3.8 0"], [6, "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"], [6, "M21.82 10.1a9.93 9.93 0 0 1 0 3.8"], [6, "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"], [6, "M13.9 21.82a9.94 9.94 0 0 1-3.8 0"], [6, "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"], [6, "M2.18 13.9a9.93 9.93 0 0 1 0-3.8"], [6, "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"], [1, 12, 12, 1]],
        "circle-ellipsis": [[1, 12, 12, 10], [6, "M17 12h.01"], [6, "M12 12h.01"], [6, "M7 12h.01"]],
        "circle-equal": [[6, "M7 10h10"], [6, "M7 14h10"], [1, 12, 12, 10]],
        "circle-off": [[6, "m2 2 20 20"], [6, "M8.35 2.69A10 10 0 0 1 21.3 15.65"], [6, "M19.08 19.08A10 10 0 1 1 4.92 4.92"]],
        "circle-slash": [[0, 9, 15, 15, 9], [1, 12, 12, 10]],
        "circle-slash-2": [[1, 12, 12, 10], [6, "M22 2 2 22"]],
        "circle-slashed": [[1, 12, 12, 10], [6, "M22 2 2 22"]],
        "circuit-board": [[5, 3, 3, 18, 18, 2], [6, "M11 9h4a2 2 0 0 0 2-2V3"], [1, 9, 9, 2], [6, "M7 21v-4a2 2 0 0 1 2-2h4"], [1, 15, 15, 2]],
        citrus: [[6, "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"], [6, "M19.65 15.66A8 8 0 0 1 8.35 4.34"], [6, "m14 10-5.5 5.5"], [6, "M14 17.85V10H6.15"]],
        clapperboard: [[6, "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"], [6, "m6.2 5.3 3.1 3.9"], [6, "m12.4 3.4 3.1 4"], [6, "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"]],
        clipboard: [[5, 8, 2, 8, 4, 1, 1], [6, "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"]],
        "clipboard-check": [[5, 8, 2, 8, 4, 1, 1], [6, "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], [6, "m9 14 2 2 4-4"]],
        "clipboard-copy": [[5, 8, 2, 8, 4, 1, 1], [6, "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"], [6, "M16 4h2a2 2 0 0 1 2 2v4"], [6, "M21 14H11"], [6, "m15 10-4 4 4 4"]],
        "clipboard-edit": [[5, 8, 2, 8, 4, 1, 1], [6, "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"], [6, "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"], [6, "M4 13.5V6a2 2 0 0 1 2-2h2"]],
        "clipboard-list": [[5, 8, 2, 8, 4, 1, 1], [6, "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], [6, "M12 11h4"], [6, "M12 16h4"], [6, "M8 11h.01"], [6, "M8 16h.01"]],
        "clipboard-paste": [[6, "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"], [6, "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"], [6, "m17 10 4 4-4 4"]],
        "clipboard-signature": [[5, 8, 2, 8, 4, 1, 1], [6, "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"], [6, "M16 4h2a2 2 0 0 1 1.73 1"], [6, "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"], [6, "M8 18h1"]],
        "clipboard-type": [[5, 8, 2, 8, 4, 1, 1], [6, "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], [6, "M9 12v-1h6v1"], [6, "M11 17h2"], [6, "M12 11v6"]],
        "clipboard-x": [[5, 8, 2, 8, 4, 1, 1], [6, "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], [6, "m15 11-6 6"], [6, "m9 11 6 6"]],
        clock: [[1, 12, 12, 10], [2, "12 6 12 12 16 14"]],
        "clock-1": [[1, 12, 12, 10], [2, "12 6 12 12 14.5 8"]],
        "clock-10": [[1, 12, 12, 10], [2, "12 6 12 12 8 10"]],
        "clock-11": [[1, 12, 12, 10], [2, "12 6 12 12 9.5 8"]],
        "clock-12": [[1, 12, 12, 10], [2, "12 6 12 12"]],
        "clock-2": [[1, 12, 12, 10], [2, "12 6 12 12 16 10"]],
        "clock-3": [[1, 12, 12, 10], [2, "12 6 12 12 16.5 12"]],
        "clock-4": [[1, 12, 12, 10], [2, "12 6 12 12 16 14"]],
        "clock-5": [[1, 12, 12, 10], [2, "12 6 12 12 14.5 16"]],
        "clock-6": [[1, 12, 12, 10], [2, "12 6 12 12 12 16.5"]],
        "clock-7": [[1, 12, 12, 10], [2, "12 6 12 12 9.5 16"]],
        "clock-8": [[1, 12, 12, 10], [2, "12 6 12 12 8 14"]],
        "clock-9": [[1, 12, 12, 10], [2, "12 6 12 12 7.5 12"]],
        cloud: [[6, "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"]],
        "cloud-cog": [[1, 12, 17, 3], [6, "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"], [6, "m15.7 18.4-.9-.3"], [6, "m9.2 15.9-.9-.3"], [6, "m10.6 20.7.3-.9"], [6, "m13.1 14.2.3-.9"], [6, "m13.6 20.7-.4-1"], [6, "m10.8 14.3-.4-1"], [6, "m8.3 18.6 1-.4"], [6, "m14.7 15.8 1-.4"]],
        "cloud-drizzle": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M8 19v1"], [6, "M8 14v1"], [6, "M16 19v1"], [6, "M16 14v1"], [6, "M12 21v1"], [6, "M12 16v1"]],
        "cloud-fog": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M16 17H7"], [6, "M17 21H9"]],
        "cloud-hail": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M16 14v2"], [6, "M8 14v2"], [6, "M16 20h.01"], [6, "M8 20h.01"], [6, "M12 16v2"], [6, "M12 22h.01"]],
        "cloud-lightning": [[6, "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"], [6, "m13 12-3 5h4l-3 5"]],
        "cloud-moon": [[6, "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"], [6, "M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197"]],
        "cloud-moon-rain": [[6, "M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197"], [6, "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"], [6, "M11 20v2"], [6, "M7 19v2"]],
        "cloud-off": [[6, "m2 2 20 20"], [6, "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"], [6, "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"]],
        "cloud-rain": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M16 14v6"], [6, "M8 14v6"], [6, "M12 16v6"]],
        "cloud-rain-wind": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "m9.2 22 3-7"], [6, "m9 13-3 7"], [6, "m17 13-3 7"]],
        "cloud-snow": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M8 15h.01"], [6, "M8 19h.01"], [6, "M12 17h.01"], [6, "M12 21h.01"], [6, "M16 15h.01"], [6, "M16 19h.01"]],
        "cloud-sun": [[6, "M12 2v2"], [6, "m4.93 4.93 1.41 1.41"], [6, "M20 12h2"], [6, "m19.07 4.93-1.41 1.41"], [6, "M15.947 12.65a4 4 0 0 0-5.925-4.128"], [6, "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"]],
        "cloud-sun-rain": [[6, "M12 2v2"], [6, "m4.93 4.93 1.41 1.41"], [6, "M20 12h2"], [6, "m19.07 4.93-1.41 1.41"], [6, "M15.947 12.65a4 4 0 0 0-5.925-4.128"], [6, "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"], [6, "M11 20v2"], [6, "M7 19v2"]],
        cloudy: [[6, "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"], [6, "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"]],
        clover: [[6, "M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z"], [6, "M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16"], [6, "M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8"], [6, "M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z"], [6, "m7 17-5 5"]],
        club: [[6, "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"], [6, "M12 17.66L12 22"]],
        code: [[2, "16 18 22 12 16 6"], [2, "8 6 2 12 8 18"]],
        "code-2": [[6, "m18 16 4-4-4-4"], [6, "m6 8-4 4 4 4"], [6, "m14.5 4-5 16"]],
        codepen: [[3, "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"], [0, 12, 22, 12, 15.5], [2, "22 8.5 12 15.5 2 8.5"], [2, "2 15.5 12 8.5 22 15.5"], [0, 12, 2, 12, 8.5]],
        codesandbox: [[6, "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], [2, "7.5 4.21 12 6.81 16.5 4.21"], [2, "7.5 19.79 7.5 14.6 3 12"], [2, "21 12 16.5 14.6 16.5 19.79"], [2, "3.27 6.96 12 12.01 20.73 6.96"], [0, 12, 22.08, 12, 12]],
        coffee: [[6, "M17 8h1a4 4 0 1 1 0 8h-1"], [6, "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"], [0, 6, 2, 6, 4], [0, 10, 2, 10, 4], [0, 14, 2, 14, 4]],
        cog: [[6, "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"], [6, "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"], [6, "M12 2v2"], [6, "M12 22v-2"], [6, "m17 20.66-1-1.73"], [6, "M11 10.27 7 3.34"], [6, "m20.66 17-1.73-1"], [6, "m3.34 7 1.73 1"], [6, "M14 12h8"], [6, "M2 12h2"], [6, "m20.66 7-1.73 1"], [6, "m3.34 17 1.73-1"], [6, "m17 3.34-1 1.73"], [6, "m11 13.73-4 6.93"]],
        coins: [[1, 8, 8, 6], [6, "M18.09 10.37A6 6 0 1 1 10.34 18"], [6, "M7 6h1v4"], [6, "m16.71 13.88.7.71-2.82 2.82"]],
        columns: [[5, 3, 3, 18, 18, 2, 2], [0, 12, 3, 12, 21]],
        combine: [[5, 2, 2, 8, 8, 2], [6, "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"], [6, "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"], [6, "M10 18H5c-1.7 0-3-1.3-3-3v-1"], [2, "7 21 10 18 7 15"], [5, 14, 14, 8, 8, 2]],
        command: [[6, "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"]],
        compass: [[1, 12, 12, 10], [3, "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"]],
        component: [[6, "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"], [6, "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"], [6, "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"], [6, "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"]],
        computer: [[5, 5, 2, 14, 8, 2], [5, 2, 14, 20, 8, 2], [6, "M6 18h2"], [6, "M12 18h6"]],
        "concierge-bell": [[6, "M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z"], [6, "M20 16a8 8 0 1 0-16 0"], [6, "M12 4v4"], [6, "M10 4h4"]],
        cone: [[6, "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"], [4, 12, 19, 9, 3]],
        construction: [[5, 2, 6, 20, 8, 1], [6, "M17 14v7"], [6, "M7 14v7"], [6, "M17 3v3"], [6, "M7 3v3"], [6, "M10 14 2.3 6.3"], [6, "m14 6 7.7 7.7"], [6, "m8 6 8 8"]],
        contact: [[6, "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"], [5, 3, 4, 18, 18, 2], [1, 12, 10, 2], [0, 8, 2, 8, 4], [0, 16, 2, 16, 4]],
        "contact-2": [[6, "M16 18a4 4 0 0 0-8 0"], [1, 12, 11, 3], [5, 3, 4, 18, 18, 2], [0, 8, 2, 8, 4], [0, 16, 2, 16, 4]],
        container: [[6, "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"], [6, "M10 21.9V14L2.1 9.1"], [6, "m10 14 11.9-6.9"], [6, "M14 19.8v-8.1"], [6, "M18 17.5V9.4"]],
        contrast: [[1, 12, 12, 10], [6, "M12 18a6 6 0 0 0 0-12v12z"]],
        cookie: [[6, "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"], [6, "M8.5 8.5v.01"], [6, "M16 15.5v.01"], [6, "M12 12v.01"], [6, "M11 17v.01"], [6, "M7 14v.01"]],
        copy: [[5, 8, 8, 14, 14, 2, 2], [6, "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"]],
        "copy-check": [[6, "m12 15 2 2 4-4"], [5, 8, 8, 14, 14, 2, 2], [6, "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"]],
        "copy-minus": [[0, 12, 15, 18, 15], [5, 8, 8, 14, 14, 2, 2], [6, "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"]],
        "copy-plus": [[0, 15, 12, 15, 18], [0, 12, 15, 18, 15], [5, 8, 8, 14, 14, 2, 2], [6, "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"]],
        "copy-slash": [[0, 12, 18, 18, 12], [5, 8, 8, 14, 14, 2, 2], [6, "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"]],
        "copy-x": [[0, 12, 12, 18, 18], [0, 12, 18, 18, 12], [5, 8, 8, 14, 14, 2, 2], [6, "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"]],
        copyleft: [[1, 12, 12, 10], [6, "M9.17 14.83a4 4 0 1 0 0-5.66"]],
        copyright: [[1, 12, 12, 10], [6, "M14.83 14.83a4 4 0 1 1 0-5.66"]],
        "corner-down-left": [[2, "9 10 4 15 9 20"], [6, "M20 4v7a4 4 0 0 1-4 4H4"]],
        "corner-down-right": [[2, "15 10 20 15 15 20"], [6, "M4 4v7a4 4 0 0 0 4 4h12"]],
        "corner-left-down": [[2, "14 15 9 20 4 15"], [6, "M20 4h-7a4 4 0 0 0-4 4v12"]],
        "corner-left-up": [[2, "14 9 9 4 4 9"], [6, "M20 20h-7a4 4 0 0 1-4-4V4"]],
        "corner-right-down": [[2, "10 15 15 20 20 15"], [6, "M4 4h7a4 4 0 0 1 4 4v12"]],
        "corner-right-up": [[2, "10 9 15 4 20 9"], [6, "M4 20h7a4 4 0 0 0 4-4V4"]],
        "corner-up-left": [[2, "9 14 4 9 9 4"], [6, "M20 20v-7a4 4 0 0 0-4-4H4"]],
        "corner-up-right": [[2, "15 14 20 9 15 4"], [6, "M4 20v-7a4 4 0 0 1 4-4h12"]],
        cpu: [[5, 4, 4, 16, 16, 2], [5, 9, 9, 6, 6], [6, "M15 2v2"], [6, "M15 20v2"], [6, "M2 15h2"], [6, "M2 9h2"], [6, "M20 15h2"], [6, "M20 9h2"], [6, "M9 2v2"], [6, "M9 20v2"]],
        "creative-commons": [[1, 12, 12, 10], [6, "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"], [6, "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"]],
        "credit-card": [[5, 2, 5, 20, 14, 2], [0, 2, 10, 22, 10]],
        croissant: [[6, "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"], [6, "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"], [6, "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"], [6, "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"], [6, "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"]],
        crop: [[6, "M6 2v14a2 2 0 0 0 2 2h14"], [6, "M18 22V8a2 2 0 0 0-2-2H2"]],
        cross: [[6, "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"]],
        crosshair: [[1, 12, 12, 10], [0, 22, 12, 18, 12], [0, 6, 12, 2, 12], [0, 12, 6, 12, 2], [0, 12, 22, 12, 18]],
        crown: [[6, "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"]],
        cuboid: [[6, "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"], [6, "M10 22v-8L2.25 9.15"], [6, "m10 14 11.77-6.87"]],
        "cup-soda": [[6, "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"], [6, "M5 8h14"], [6, "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"], [6, "m12 8 1-6h2"]],
        "curly-braces": [[6, "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"], [6, "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"]],
        currency: [[1, 12, 12, 8], [0, 3, 3, 6, 6], [0, 21, 3, 18, 6], [0, 3, 21, 6, 18], [0, 21, 21, 18, 18]],
        cylinder: [[4, 12, 5, 9, 3], [6, "M3 5v14a9 3 0 0 0 18 0V5"]],
        database: [[4, 12, 5, 9, 3], [6, "M3 5V19A9 3 0 0 0 21 19V5"], [6, "M3 12A9 3 0 0 0 21 12"]],
        "database-backup": [[4, 12, 5, 9, 3], [6, "M3 12a9 3 0 0 0 5 2.69"], [6, "M21 9.3V5"], [6, "M3 5v14a9 3 0 0 0 6.47 2.88"], [6, "M12 12v4h4"], [6, "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"]],
        "database-zap": [[4, 12, 5, 9, 3], [6, "M3 5V19A9 3 0 0 0 15 21.84"], [6, "M21 5V8"], [6, "M21 12L18 17H22L19 22"], [6, "M3 12A9 3 0 0 0 14.59 14.87"]],
        delete: [[6, "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"], [0, 18, 9, 12, 15], [0, 12, 9, 18, 15]],
        dessert: [[1, 12, 4, 2], [6, "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"], [6, "M3.2 14.8a9 9 0 0 0 17.6 0"]],
        diameter: [[1, 19, 19, 2], [1, 5, 5, 2], [6, "M6.48 3.66a10 10 0 0 1 13.86 13.86"], [6, "m6.41 6.41 11.18 11.18"], [6, "M3.66 6.48a10 10 0 0 0 13.86 13.86"]],
        diamond: [[6, "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"]],
        "dice-1": [[5, 3, 3, 18, 18, 2, 2], [6, "M12 12h.01"]],
        "dice-2": [[5, 3, 3, 18, 18, 2, 2], [6, "M15 9h.01"], [6, "M9 15h.01"]],
        "dice-3": [[5, 3, 3, 18, 18, 2, 2], [6, "M16 8h.01"], [6, "M12 12h.01"], [6, "M8 16h.01"]],
        "dice-4": [[5, 3, 3, 18, 18, 2, 2], [6, "M16 8h.01"], [6, "M8 8h.01"], [6, "M8 16h.01"], [6, "M16 16h.01"]],
        "dice-5": [[5, 3, 3, 18, 18, 2, 2], [6, "M16 8h.01"], [6, "M8 8h.01"], [6, "M8 16h.01"], [6, "M16 16h.01"], [6, "M12 12h.01"]],
        "dice-6": [[5, 3, 3, 18, 18, 2, 2], [6, "M16 8h.01"], [6, "M16 12h.01"], [6, "M16 16h.01"], [6, "M8 8h.01"], [6, "M8 12h.01"], [6, "M8 16h.01"]],
        dices: [[5, 2, 10, 12, 12, 2, 2], [6, "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"], [6, "M6 18h.01"], [6, "M10 14h.01"], [6, "M15 6h.01"], [6, "M18 9h.01"]],
        diff: [[6, "M12 3v14"], [6, "M5 10h14"], [6, "M5 21h14"]],
        disc: [[1, 12, 12, 10], [1, 12, 12, 2]],
        "disc-2": [[1, 12, 12, 10], [1, 12, 12, 4], [6, "M12 12h.01"]],
        "disc-3": [[1, 12, 12, 10], [6, "M6 12c0-1.7.7-3.2 1.8-4.2"], [1, 12, 12, 2], [6, "M18 12c0 1.7-.7 3.2-1.8 4.2"]],
        divide: [[1, 12, 6, 1], [0, 5, 12, 19, 12], [1, 12, 18, 1]],
        "divide-circle": [[0, 8, 12, 16, 12], [0, 12, 16, 12, 16], [0, 12, 8, 12, 8], [1, 12, 12, 10]],
        "divide-square": [[5, 3, 3, 18, 18, 2, 2], [0, 8, 12, 16, 12], [0, 12, 16, 12, 16], [0, 12, 8, 12, 8]],
        dna: [[6, "M2 15c6.667-6 13.333 0 20-6"], [6, "M9 22c1.798-1.998 2.518-3.995 2.807-5.993"], [6, "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"], [6, "m17 6-2.5-2.5"], [6, "m14 8-1-1"], [6, "m7 18 2.5 2.5"], [6, "m3.5 14.5.5.5"], [6, "m20 9 .5.5"], [6, "m6.5 12.5 1 1"], [6, "m16.5 10.5 1 1"], [6, "m10 16 1.5 1.5"]],
        "dna-off": [[6, "M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5"], [6, "M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5"], [6, "m17 6-2.5-2.5"], [6, "m14 8-1.5-1.5"], [6, "m7 18 2.5 2.5"], [6, "m3.5 14.5.5.5"], [6, "m20 9 .5.5"], [6, "m6.5 12.5 1 1"], [6, "m16.5 10.5 1 1"], [6, "m10 16 1.5 1.5"], [0, 2, 2, 22, 22]],
        dog: [[6, "M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"], [6, "M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"], [6, "M8 14v.5"], [6, "M16 14v.5"], [6, "M11.25 16.25h1.5L12 17l-.75-.75Z"], [6, "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"]],
        "dollar-sign": [[0, 12, 2, 12, 22], [6, "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"]],
        donut: [[6, "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"], [1, 12, 12, 3]],
        "door-closed": [[6, "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"], [6, "M2 20h20"], [6, "M14 12v.01"]],
        "door-open": [[6, "M13 4h3a2 2 0 0 1 2 2v14"], [6, "M2 20h3"], [6, "M13 20h9"], [6, "M10 12v.01"], [6, "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"]],
        dot: [[1, 12.1, 12.1, 1]],
        download: [[6, "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], [2, "7 10 12 15 17 10"], [0, 12, 15, 12, 3]],
        "download-cloud": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M12 12v9"], [6, "m8 17 4 4 4-4"]],
        "drafting-compass": [[1, 12, 5, 2], [6, "m3 21 8.02-14.26"], [6, "m12.99 6.74 1.93 3.44"], [6, "M19 12c-3.87 4-10.13 4-14 0"], [6, "m21 21-2.16-3.84"]],
        drama: [[6, "M 10 11h.01"], [6, "M 14 6h.01"], [6, "M 18 6h.01"], [6, "M 6.5 13.1h.01"], [6, "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"], [6, "M17.4 9.9c-.8.8-2 .8-2.8 0"], [6, "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"], [6, "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"]],
        dribbble: [[1, 12, 12, 10], [6, "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"], [6, "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"], [6, "M8.56 2.75c4.37 6 6 9.42 8 17.72"]],
        droplet: [[6, "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"]],
        droplets: [[6, "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"], [6, "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"]],
        drumstick: [[6, "M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z"], [6, "m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16"]],
        dumbbell: [[6, "m6.5 6.5 11 11"], [6, "m21 21-1-1"], [6, "m3 3 1 1"], [6, "m18 22 4-4"], [6, "m2 6 4-4"], [6, "m3 10 7-7"], [6, "m14 21 7-7"]],
        ear: [[6, "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"], [6, "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"]],
        "ear-off": [[6, "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"], [6, "M6 8.5c0-.75.13-1.47.36-2.14"], [6, "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"], [6, "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"], [0, 2, 2, 22, 22]],
        edit: [[6, "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], [6, "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"]],
        "edit-2": [[6, "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"]],
        "edit-3": [[6, "M12 20h9"], [6, "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"]],
        egg: [[6, "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"]],
        "egg-fried": [[1, 11.5, 12.5, 3.5], [6, "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"]],
        "egg-off": [[6, "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"], [6, "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"], [0, 2, 2, 22, 22]],
        equal: [[0, 5, 9, 19, 9], [0, 5, 15, 19, 15]],
        "equal-not": [[0, 5, 9, 19, 9], [0, 5, 15, 19, 15], [0, 19, 5, 5, 19]],
        eraser: [[6, "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"], [6, "M22 21H7"], [6, "m5 11 9 9"]],
        euro: [[6, "M4 10h12"], [6, "M4 14h9"], [6, "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"]],
        expand: [[6, "m21 21-6-6m6 6v-4.8m0 4.8h-4.8"], [6, "M3 16.2V21m0 0h4.8M3 21l6-6"], [6, "M21 7.8V3m0 0h-4.8M21 3l-6 6"], [6, "M3 7.8V3m0 0h4.8M3 3l6 6"]],
        "external-link": [[6, "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"], [2, "15 3 21 3 21 9"], [0, 10, 14, 21, 3]],
        eye: [[6, "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"], [1, 12, 12, 3]],
        "eye-off": [[6, "M9.88 9.88a3 3 0 1 0 4.24 4.24"], [6, "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"], [6, "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"], [0, 2, 2, 22, 22]],
        facebook: [[6, "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"]],
        factory: [[6, "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"], [6, "M17 18h1"], [6, "M12 18h1"], [6, "M7 18h1"]],
        fan: [[6, "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"], [6, "M12 12v.01"]],
        "fast-forward": [[3, "13 19 22 12 13 5 13 19"], [3, "2 19 11 12 2 5 2 19"]],
        feather: [[6, "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"], [0, 16, 8, 2, 22], [0, 17.5, 15, 9, 15]],
        "ferris-wheel": [[1, 12, 12, 2], [6, "M12 2v4"], [6, "m6.8 15-3.5 2"], [6, "m20.7 7-3.5 2"], [6, "M6.8 9 3.3 7"], [6, "m20.7 17-3.5-2"], [6, "m9 22 3-8 3 8"], [6, "M8 22h8"], [6, "M18 18.7a9 9 0 1 0-12 0"]],
        figma: [[6, "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"], [6, "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"], [6, "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"], [6, "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"], [6, "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"]],
        file: [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"]],
        "file-archive": [[6, "M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2"], [2, "14 2 14 8 20 8"], [1, 10, 20, 2], [6, "M10 7V6"], [6, "M10 12v-1"], [6, "M10 18v-2"]],
        "file-audio": [[6, "M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"], [2, "14 2 14 8 20 8"], [6, "M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z"], [6, "M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z"], [6, "M2 19v-3a6 6 0 0 1 12 0v3"]],
        "file-audio-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2"], [2, "14 2 14 8 20 8"], [6, "M2 17v-3a4 4 0 0 1 8 0v3"], [1, 9, 17, 1], [1, 3, 17, 1]],
        "file-axis-3d": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M8 10v8h8"], [6, "m8 18 4-4"]],
        "file-badge": [[6, "M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6"], [2, "14 2 14 8 20 8"], [6, "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"], [6, "M7 16.5 8 22l-3-1-3 1 1-5.5"]],
        "file-badge-2": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [6, "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"], [6, "m14 12.5 1 5.5-3-1-3 1 1-5.5"]],
        "file-bar-chart": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M12 18v-4"], [6, "M8 18v-2"], [6, "M16 18v-6"]],
        "file-bar-chart-2": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M12 18v-6"], [6, "M8 18v-1"], [6, "M16 18v-3"]],
        "file-box": [[6, "M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z"], [6, "m7 17-4.74-2.85"], [6, "m7 17 4.74-2.85"], [6, "M7 17v5"]],
        "file-check": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "m9 15 2 2 4-4"]],
        "file-check-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "m3 15 2 2 4-4"]],
        "file-clock": [[6, "M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"], [2, "14 2 14 8 20 8"], [1, 8, 16, 6], [6, "M9.5 17.5 8 16.25V14"]],
        "file-code": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "m10 13-2 2 2 2"], [6, "m14 17 2-2-2-2"]],
        "file-code-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "m9 18 3-3-3-3"], [6, "m5 12-3 3 3 3"]],
        "file-cog": [[1, 6, 13, 3], [6, "m9.7 14.4-.9-.3"], [6, "m3.2 11.9-.9-.3"], [6, "m4.6 16.7.3-.9"], [6, "m7.6 16.7-.4-1"], [6, "m4.8 10.3-.4-1"], [6, "m2.3 14.6 1-.4"], [6, "m8.7 11.8 1-.4"], [6, "m7.4 9.3-.3.9"], [6, "M14 2v6h6"], [6, "M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5"]],
        "file-cog-2": [[1, 6, 13, 3], [6, "m9.7 14.4-.9-.3"], [6, "m3.2 11.9-.9-.3"], [6, "m4.6 16.7.3-.9"], [6, "m7.6 16.7-.4-1"], [6, "m4.8 10.3-.4-1"], [6, "m2.3 14.6 1-.4"], [6, "m8.7 11.8 1-.4"], [6, "m7.4 9.3-.3.9"], [6, "M14 2v6h6"], [6, "M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5"]],
        "file-diff": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [6, "M12 13V7"], [6, "M9 10h6"], [6, "M9 17h6"]],
        "file-digit": [[5, 2, 12, 4, 6, 2], [6, "M14 2v6h6"], [6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [6, "M10 12h2v6"], [6, "M10 18h4"]],
        "file-down": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M12 18v-6"], [6, "m9 15 3 3 3-3"]],
        "file-edit": [[6, "M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"], [2, "14 2 14 8 20 8"], [6, "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"]],
        "file-heart": [[6, "M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"], [2, "14 2 14 8 20 8"], [6, "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"]],
        "file-image": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [1, 10, 13, 2], [6, "m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"]],
        "file-input": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M2 15h10"], [6, "m9 18 3-3-3-3"]],
        "file-json": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"], [6, "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"]],
        "file-json-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"], [6, "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"]],
        "file-key": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [1, 10, 16, 2], [6, "m16 10-4.5 4.5"], [6, "m15 11 1 1"]],
        "file-key-2": [[6, "M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"], [2, "14 2 14 8 20 8"], [1, 4, 16, 2], [6, "m10 10-4.5 4.5"], [6, "m9 11 1 1"]],
        "file-line-chart": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "m16 13-3.5 3.5-2-2L8 17"]],
        "file-lock": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [5, 8, 12, 8, 6, 1], [6, "M15 12v-2a3 3 0 1 0-6 0v2"]],
        "file-lock-2": [[6, "M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"], [2, "14 2 14 8 20 8"], [5, 2, 13, 8, 5, 1], [6, "M8 13v-2a2 2 0 1 0-4 0v2"]],
        "file-minus": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [0, 9, 15, 15, 15]],
        "file-minus-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M3 15h6"]],
        "file-output": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M2 15h10"], [6, "m5 12-3 3 3 3"]],
        "file-pie-chart": [[6, "M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"], [2, "14 2 14 8 20 8"], [6, "M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29"], [6, "M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z"]],
        "file-plus": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [0, 12, 18, 12, 12], [0, 9, 15, 15, 15]],
        "file-plus-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M3 15h6"], [6, "M6 12v6"]],
        "file-question": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [6, "M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"], [6, "M12 17h.01"]],
        "file-scan": [[6, "M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5"], [2, "14 2 14 8 20 8"], [6, "M16 22a2 2 0 0 1-2-2"], [6, "M20 22a2 2 0 0 0 2-2"], [6, "M20 14a2 2 0 0 1 2 2"], [6, "M16 14a2 2 0 0 0-2 2"]],
        "file-search": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"], [2, "14 2 14 8 20 8"], [6, "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], [6, "m9 18-1.5-1.5"]],
        "file-search-2": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [1, 11.5, 14.5, 2.5], [6, "M13.25 16.25 15 18"]],
        "file-signature": [[6, "M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5"], [6, "M8 18h1"], [6, "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"]],
        "file-spreadsheet": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M8 13h2"], [6, "M8 17h2"], [6, "M14 13h2"], [6, "M14 17h2"]],
        "file-stack": [[6, "M16 2v5h5"], [6, "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z"], [6, "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"], [6, "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"]],
        "file-symlink": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7"], [2, "14 2 14 8 20 8"], [6, "m10 18 3-3-3-3"], [6, "M4 18v-1a2 2 0 0 1 2-2h6"]],
        "file-terminal": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "m8 16 2-2-2-2"], [6, "M12 18h4"]],
        "file-text": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [0, 16, 13, 8, 13], [0, 16, 17, 8, 17], [0, 10, 9, 8, 9]],
        "file-type": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M9 13v-1h6v1"], [6, "M11 18h2"], [6, "M12 12v6"]],
        "file-type-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M2 13v-1h6v1"], [6, "M4 18h2"], [6, "M5 12v6"]],
        "file-up": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M12 12v6"], [6, "m15 15-3-3-3 3"]],
        "file-video": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "m10 11 5 3-5 3v-6Z"]],
        "file-video-2": [[6, "M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"], [2, "14 2 14 8 20 8"], [6, "m10 15.5 4 2.5v-6l-4 2.5"], [5, 2, 12, 8, 6, 1]],
        "file-volume": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"], [2, "14 2 14 8 20 8"], [6, "m7 10-3 2H2v4h2l3 2v-8Z"], [6, "M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3"]],
        "file-volume-2": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5"], [6, "M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3"], [6, "M8 15h.01"]],
        "file-warning": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [6, "M12 9v4"], [6, "M12 17h.01"]],
        "file-x": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [0, 9.5, 12.5, 14.5, 17.5], [0, 14.5, 12.5, 9.5, 17.5]],
        "file-x2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [6, "M14 2v6h6"], [6, "m3 12.5 5 5"], [6, "m8 12.5-5 5"]],
        files: [[6, "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"], [6, "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"], [6, "M15 2v5h5"]],
        film: [[5, 3, 3, 18, 18, 2], [6, "M7 3v18"], [6, "M3 7.5h4"], [6, "M3 12h18"], [6, "M3 16.5h4"], [6, "M17 3v18"], [6, "M17 7.5h4"], [6, "M17 16.5h4"]],
        filter: [[3, "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"]],
        "filter-x": [[6, "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"], [6, "m22 3-5 5"], [6, "m17 3 5 5"]],
        fingerprint: [[6, "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"], [6, "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"], [6, "M17.29 21.02c.12-.6.43-2.3.5-3.02"], [6, "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"], [6, "M8.65 22c.21-.66.45-1.32.57-2"], [6, "M14 13.12c0 2.38 0 6.38-1 8.88"], [6, "M2 16h.01"], [6, "M21.8 16c.2-2 .131-5.354 0-6"], [6, "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"]],
        fish: [[6, "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"], [6, "M18 12v.5"], [6, "M16 17.93a9.77 9.77 0 0 1 0-11.86"], [6, "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"], [6, "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"], [6, "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"]],
        "fish-off": [[6, "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"], [6, "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"], [6, "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"]],
        "fish-symbol": [[6, "M2 16s9-15 20-4C11 23 2 8 2 8"]],
        flag: [[6, "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"], [0, 4, 22, 4, 15]],
        "flag-off": [[6, "M8 2c3 0 5 2 8 2s4-1 4-1v11"], [6, "M4 22V4"], [6, "M4 15s1-1 4-1 5 2 8 2"], [0, 2, 2, 22, 22]],
        "flag-triangle-left": [[6, "M17 22V2L7 7l10 5"]],
        "flag-triangle-right": [[6, "M7 22V2l10 5-10 5"]],
        flame: [[6, "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"]],
        "flame-kindling": [[6, "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"], [6, "m5 22 14-4"], [6, "m5 18 14 4"]],
        flashlight: [[6, "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"], [0, 6, 6, 18, 6], [0, 12, 12, 12, 12]],
        "flashlight-off": [[6, "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"], [6, "M7 2h11v4c0 2-2 2-2 4v1"], [0, 11, 6, 18, 6], [0, 2, 2, 22, 22]],
        "flask-conical": [[6, "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"], [6, "M8.5 2h7"], [6, "M7 16h10"]],
        "flask-conical-off": [[6, "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542"], [6, "M10 2v2.343"], [6, "M14 2v6.343"], [6, "M8.5 2h7"], [6, "M7 16h9"], [0, 2, 2, 22, 22]],
        "flask-round": [[6, "M10 2v7.31"], [6, "M14 9.3V1.99"], [6, "M8.5 2h7"], [6, "M14 9.3a6.5 6.5 0 1 1-4 0"], [6, "M5.52 16h12.96"]],
        "flip-horizontal": [[6, "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"], [6, "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"], [6, "M12 20v2"], [6, "M12 14v2"], [6, "M12 8v2"], [6, "M12 2v2"]],
        "flip-horizontal-2": [[6, "m3 7 5 5-5 5V7"], [6, "m21 7-5 5 5 5V7"], [6, "M12 20v2"], [6, "M12 14v2"], [6, "M12 8v2"], [6, "M12 2v2"]],
        "flip-vertical": [[6, "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"], [6, "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"], [6, "M4 12H2"], [6, "M10 12H8"], [6, "M16 12h-2"], [6, "M22 12h-2"]],
        "flip-vertical-2": [[6, "m17 3-5 5-5-5h10"], [6, "m17 21-5-5-5 5h10"], [6, "M4 12H2"], [6, "M10 12H8"], [6, "M16 12h-2"], [6, "M22 12h-2"]],
        flower: [[6, "M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"], [1, 12, 12, 3], [6, "m8 16 1.5-1.5"], [6, "M14.5 9.5 16 8"], [6, "m8 8 1.5 1.5"], [6, "M14.5 14.5 16 16"]],
        "flower-2": [[6, "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"], [1, 12, 8, 2], [6, "M12 10v12"], [6, "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"], [6, "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"]],
        focus: [[1, 12, 12, 3], [6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"]],
        "fold-horizontal": [[6, "M2 12h6"], [6, "M22 12h-6"], [6, "M12 2v2"], [6, "M12 8v2"], [6, "M12 14v2"], [6, "M12 20v2"], [6, "m19 9-3 3 3 3"], [6, "m5 15 3-3-3-3"]],
        "fold-vertical": [[6, "M12 22v-6"], [6, "M12 8V2"], [6, "M4 12H2"], [6, "M10 12H8"], [6, "M16 12h-2"], [6, "M22 12h-2"], [6, "m15 19-3-3-3 3"], [6, "m15 5-3 3-3-3"]],
        folder: [[6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"]],
        "folder-archive": [[1, 15, 19, 2], [6, "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"], [6, "M15 11v-1"], [6, "M15 17v-2"]],
        "folder-check": [[6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "m9 13 2 2 4-4"]],
        "folder-clock": [[1, 16, 16, 6], [6, "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"], [6, "M16 14v2l1 1"]],
        "folder-closed": [[6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "M2 10h20"]],
        "folder-cog": [[1, 18, 18, 3], [6, "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"], [6, "m21.7 19.4-.9-.3"], [6, "m15.2 16.9-.9-.3"], [6, "m16.6 21.7.3-.9"], [6, "m19.1 15.2.3-.9"], [6, "m19.6 21.7-.4-1"], [6, "m16.8 15.3-.4-1"], [6, "m14.3 19.6 1-.4"], [6, "m20.7 16.8 1-.4"]],
        "folder-cog-2": [[1, 18, 18, 3], [6, "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"], [6, "m21.7 19.4-.9-.3"], [6, "m15.2 16.9-.9-.3"], [6, "m16.6 21.7.3-.9"], [6, "m19.1 15.2.3-.9"], [6, "m19.6 21.7-.4-1"], [6, "m16.8 15.3-.4-1"], [6, "m14.3 19.6 1-.4"], [6, "m20.7 16.8 1-.4"]],
        "folder-dot": [[6, "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"], [1, 12, 13, 1]],
        "folder-down": [[6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "M12 10v6"], [6, "m15 13-3 3-3-3"]],
        "folder-edit": [[6, "M8.4 10.6a2.1 2.1 0 1 1 2.99 2.98L6 19l-4 1 1-3.9Z"], [6, "M2 11.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"]],
        "folder-git": [[1, 12, 13, 2], [6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "M14 13h3"], [6, "M7 13h3"]],
        "folder-git-2": [[6, "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"], [1, 13, 12, 2], [6, "M18 19c-2.8 0-5-2.2-5-5v8"], [1, 20, 19, 2]],
        "folder-heart": [[6, "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"], [6, "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z"]],
        "folder-input": [[6, "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"], [6, "M2 13h10"], [6, "m9 16 3-3-3-3"]],
        "folder-kanban": [[6, "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"], [6, "M8 10v4"], [6, "M12 10v2"], [6, "M16 10v6"]],
        "folder-key": [[1, 16, 20, 2], [6, "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"], [6, "m22 14-4.5 4.5"], [6, "m21 15 1 1"]],
        "folder-lock": [[5, 14, 17, 8, 5, 1], [6, "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"], [6, "M20 17v-2a2 2 0 1 0-4 0v2"]],
        "folder-minus": [[6, "M9 13h6"], [6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"]],
        "folder-open": [[6, "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"]],
        "folder-open-dot": [[6, "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"], [1, 14, 15, 1]],
        "folder-output": [[6, "M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"], [6, "M2 13h10"], [6, "m5 10-3 3 3 3"]],
        "folder-plus": [[6, "M12 10v6"], [6, "M9 13h6"], [6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"]],
        "folder-root": [[6, "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"], [1, 12, 13, 2], [6, "M12 15v5"]],
        "folder-search": [[1, 17, 17, 3], [6, "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"], [6, "m21 21-1.5-1.5"]],
        "folder-search-2": [[1, 11.5, 12.5, 2.5], [6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "M13.3 14.3 15 16"]],
        "folder-symlink": [[6, "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"], [6, "m8 16 3-3-3-3"], [6, "M2 16v-1a2 2 0 0 1 2-2h6"]],
        "folder-sync": [[6, "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1"], [6, "M12 10v4h4"], [6, "m12 14 1.5-1.5c.9-.9 2.2-1.5 3.5-1.5s2.6.6 3.5 1.5c.4.4.8 1 1 1.5"], [6, "M22 22v-4h-4"], [6, "m22 18-1.5 1.5c-.9.9-2.1 1.5-3.5 1.5s-2.6-.6-3.5-1.5c-.4-.4-.8-1-1-1.5"]],
        "folder-tree": [[6, "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"], [6, "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"], [6, "M3 5a2 2 0 0 0 2 2h3"], [6, "M3 3v13a2 2 0 0 0 2 2h3"]],
        "folder-up": [[6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "M12 10v6"], [6, "m9 13 3-3 3 3"]],
        "folder-x": [[6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "m9.5 10.5 5 5"], [6, "m14.5 10.5-5 5"]],
        folders: [[6, "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"], [6, "M2 8v11a2 2 0 0 0 2 2h14"]],
        footprints: [[6, "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"], [6, "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"], [6, "M16 17h4"], [6, "M4 13h4"]],
        forklift: [[6, "M12 12H5a2 2 0 0 0-2 2v5"], [1, 13, 19, 2], [1, 5, 19, 2], [6, "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"]],
        "form-input": [[5, 2, 6, 20, 12, 2], [6, "M12 12h.01"], [6, "M17 12h.01"], [6, "M7 12h.01"]],
        forward: [[2, "15 17 20 12 15 7"], [6, "M4 18v-2a4 4 0 0 1 4-4h12"]],
        frame: [[0, 22, 6, 2, 6], [0, 22, 18, 2, 18], [0, 6, 2, 6, 22], [0, 18, 2, 18, 22]],
        framer: [[6, "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"]],
        frown: [[1, 12, 12, 10], [6, "M16 16s-1.5-2-4-2-4 2-4 2"], [0, 9, 9, 9.01, 9], [0, 15, 9, 15.01, 9]],
        fuel: [[0, 3, 22, 15, 22], [0, 4, 9, 14, 9], [6, "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"], [6, "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"]],
        fullscreen: [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [5, 7, 8, 10, 8, 1]],
        "function-square": [[5, 3, 3, 18, 18, 2, 2], [6, "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"], [6, "M9 11.2h5.7"]],
        "gallery-horizontal": [[6, "M2 3v18"], [5, 6, 3, 12, 18, 2], [6, "M22 3v18"]],
        "gallery-horizontal-end": [[6, "M2 7v10"], [6, "M6 5v14"], [5, 10, 3, 12, 18, 2]],
        "gallery-thumbnails": [[5, 3, 3, 18, 14, 2], [6, "M4 21h1"], [6, "M9 21h1"], [6, "M14 21h1"], [6, "M19 21h1"]],
        "gallery-vertical": [[6, "M3 2h18"], [5, 3, 6, 18, 12, 2], [6, "M3 22h18"]],
        "gallery-vertical-end": [[6, "M7 2h10"], [6, "M5 6h14"], [5, 3, 10, 18, 12, 2]],
        gamepad: [[0, 6, 12, 10, 12], [0, 8, 10, 8, 14], [0, 15, 13, 15.01, 13], [0, 18, 11, 18.01, 11], [5, 2, 6, 20, 12, 2]],
        "gamepad-2": [[0, 6, 11, 10, 11], [0, 8, 9, 8, 13], [0, 15, 12, 15.01, 12], [0, 18, 10, 18.01, 10], [6, "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"]],
        "gantt-chart": [[6, "M8 6h10"], [6, "M6 12h9"], [6, "M11 18h7"]],
        "gantt-chart-square": [[5, 3, 3, 18, 18, 2], [6, "M9 8h7"], [6, "M8 12h6"], [6, "M11 16h5"]],
        gauge: [[6, "m12 14 4-4"], [6, "M3.34 19a10 10 0 1 1 17.32 0"]],
        "gauge-circle": [[6, "M15.6 2.7a10 10 0 1 0 5.7 5.7"], [1, 12, 12, 2], [6, "M13.4 10.6 19 5"]],
        gavel: [[6, "m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"], [6, "m16 16 6-6"], [6, "m8 8 6-6"], [6, "m9 7 8 8"], [6, "m21 11-8-8"]],
        gem: [[6, "M6 3h12l4 6-10 13L2 9Z"], [6, "M11 3 8 9l4 13 4-13-3-6"], [6, "M2 9h20"]],
        ghost: [[6, "M9 10h.01"], [6, "M15 10h.01"], [6, "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"]],
        gift: [[5, 3, 8, 18, 4, 1], [6, "M12 8v13"], [6, "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"], [6, "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"]],
        "git-branch": [[0, 6, 3, 6, 15], [1, 18, 6, 3], [1, 6, 18, 3], [6, "M18 9a9 9 0 0 1-9 9"]],
        "git-branch-plus": [[6, "M6 3v12"], [6, "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], [6, "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], [6, "M15 6a9 9 0 0 0-9 9"], [6, "M18 15v6"], [6, "M21 18h-6"]],
        "git-commit": [[1, 12, 12, 3], [0, 3, 12, 9, 12], [0, 15, 12, 21, 12]],
        "git-commit-horizontal": [[1, 12, 12, 3], [0, 3, 12, 9, 12], [0, 15, 12, 21, 12]],
        "git-commit-vertical": [[6, "M12 3v6"], [1, 12, 12, 3], [6, "M12 15v6"]],
        "git-compare": [[1, 18, 18, 3], [1, 6, 6, 3], [6, "M13 6h3a2 2 0 0 1 2 2v7"], [6, "M11 18H8a2 2 0 0 1-2-2V9"]],
        "git-compare-arrows": [[1, 5, 6, 3], [6, "M12 6h5a2 2 0 0 1 2 2v7"], [6, "m15 9-3-3 3-3"], [1, 19, 18, 3], [6, "M12 18H7a2 2 0 0 1-2-2V9"], [6, "m9 15 3 3-3 3"]],
        "git-fork": [[1, 12, 18, 3], [1, 6, 6, 3], [1, 18, 6, 3], [6, "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"], [6, "M12 12v3"]],
        "git-graph": [[1, 5, 6, 3], [6, "M5 9v6"], [1, 5, 18, 3], [6, "M12 3v18"], [1, 19, 6, 3], [6, "M16 15.7A9 9 0 0 0 19 9"]],
        "git-merge": [[1, 18, 18, 3], [1, 6, 6, 3], [6, "M6 21V9a9 9 0 0 0 9 9"]],
        "git-pull-request": [[1, 18, 18, 3], [1, 6, 6, 3], [6, "M13 6h3a2 2 0 0 1 2 2v7"], [0, 6, 9, 6, 21]],
        "git-pull-request-arrow": [[1, 5, 6, 3], [6, "M5 9v12"], [1, 19, 18, 3], [6, "m15 9-3-3 3-3"], [6, "M12 6h5a2 2 0 0 1 2 2v7"]],
        "git-pull-request-closed": [[1, 6, 6, 3], [6, "M6 9v12"], [6, "m21 3-6 6"], [6, "m21 9-6-6"], [6, "M18 11.5V15"], [1, 18, 18, 3]],
        "git-pull-request-create": [[1, 6, 6, 3], [6, "M6 9v12"], [6, "M13 6h3a2 2 0 0 1 2 2v3"], [6, "M18 15v6"], [6, "M21 18h-6"]],
        "git-pull-request-create-arrow": [[1, 5, 6, 3], [6, "M5 9v12"], [6, "m15 9-3-3 3-3"], [6, "M12 6h5a2 2 0 0 1 2 2v3"], [6, "M19 15v6"], [6, "M22 18h-6"]],
        "git-pull-request-draft": [[1, 18, 18, 3], [1, 6, 6, 3], [6, "M18 6V5"], [6, "M18 11v-1"], [0, 6, 9, 6, 21]],
        github: [[6, "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"], [6, "M9 18c-4.51 2-5-2-7-2"]],
        gitlab: [[6, "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"]],
        "glass-water": [[6, "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"], [6, "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"]],
        glasses: [[1, 6, 15, 4], [1, 18, 15, 4], [6, "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"], [6, "M2.5 13 5 7c.7-1.3 1.4-2 3-2"], [6, "M21.5 13 19 7c-.7-1.3-1.5-2-3-2"]],
        globe: [[1, 12, 12, 10], [6, "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"], [6, "M2 12h20"]],
        "globe-2": [[6, "M21.54 15H17a2 2 0 0 0-2 2v4.54"], [6, "M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"], [6, "M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"], [1, 12, 12, 10]],
        goal: [[6, "M12 13V2l8 4-8 4"], [6, "M20.55 10.23A9 9 0 1 1 8 4.94"], [6, "M8 10a5 5 0 1 0 8.9 2.02"]],
        grab: [[6, "M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"], [6, "M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"], [6, "M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"], [6, "M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"], [6, "M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"]],
        "graduation-cap": [[6, "M22 10v6M2 10l10-5 10 5-10 5z"], [6, "M6 12v5c3 3 9 3 12 0v-5"]],
        grape: [[6, "M22 5V2l-5.89 5.89"], [1, 16.6, 15.89, 3], [1, 8.11, 7.4, 3], [1, 12.35, 11.65, 3], [1, 13.91, 5.85, 3], [1, 18.15, 10.09, 3], [1, 6.56, 13.2, 3], [1, 10.8, 17.44, 3], [1, 5, 19, 3]],
        grid: [[5, 3, 3, 18, 18, 2], [6, "M3 9h18"], [6, "M3 15h18"], [6, "M9 3v18"], [6, "M15 3v18"]],
        "grid-2x-2": [[5, 3, 3, 18, 18, 2], [6, "M3 12h18"], [6, "M12 3v18"]],
        "grid-3x-3": [[5, 3, 3, 18, 18, 2], [6, "M3 9h18"], [6, "M3 15h18"], [6, "M9 3v18"], [6, "M15 3v18"]],
        grip: [[1, 12, 5, 1], [1, 19, 5, 1], [1, 5, 5, 1], [1, 12, 12, 1], [1, 19, 12, 1], [1, 5, 12, 1], [1, 12, 19, 1], [1, 19, 19, 1], [1, 5, 19, 1]],
        "grip-horizontal": [[1, 12, 9, 1], [1, 19, 9, 1], [1, 5, 9, 1], [1, 12, 15, 1], [1, 19, 15, 1], [1, 5, 15, 1]],
        "grip-vertical": [[1, 9, 12, 1], [1, 9, 5, 1], [1, 9, 19, 1], [1, 15, 12, 1], [1, 15, 5, 1], [1, 15, 19, 1]],
        group: [[6, "M3 7V5c0-1.1.9-2 2-2h2"], [6, "M17 3h2c1.1 0 2 .9 2 2v2"], [6, "M21 17v2c0 1.1-.9 2-2 2h-2"], [6, "M7 21H5c-1.1 0-2-.9-2-2v-2"], [5, 7, 7, 7, 5, 1], [5, 10, 12, 7, 5, 1]],
        hammer: [[6, "m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"], [6, "M17.64 15 22 10.64"], [6, "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"]],
        hand: [[6, "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"], [6, "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"], [6, "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"], [6, "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"]],
        "hand-metal": [[6, "M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"], [6, "M14 11V9a2 2 0 1 0-4 0v2"], [6, "M10 10.5V5a2 2 0 1 0-4 0v9"], [6, "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"]],
        "hard-drive": [[0, 22, 12, 2, 12], [6, "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"], [0, 6, 16, 6.01, 16], [0, 10, 16, 10.01, 16]],
        "hard-drive-download": [[6, "M12 2v8"], [6, "m16 6-4 4-4-4"], [5, 2, 14, 20, 8, 2], [6, "M6 18h.01"], [6, "M10 18h.01"]],
        "hard-drive-upload": [[6, "m16 6-4-4-4 4"], [6, "M12 2v8"], [5, 2, 14, 20, 8, 2], [6, "M6 18h.01"], [6, "M10 18h.01"]],
        "hard-hat": [[6, "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"], [6, "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"], [6, "M4 15v-3a6 6 0 0 1 6-6h0"], [6, "M14 6h0a6 6 0 0 1 6 6v3"]],
        hash: [[0, 4, 9, 20, 9], [0, 4, 15, 20, 15], [0, 10, 3, 8, 21], [0, 16, 3, 14, 21]],
        haze: [[6, "m5.2 6.2 1.4 1.4"], [6, "M2 13h2"], [6, "M20 13h2"], [6, "m17.4 7.6 1.4-1.4"], [6, "M22 17H2"], [6, "M22 21H2"], [6, "M16 13a4 4 0 0 0-8 0"], [6, "M12 5V2.5"]],
        "hdmi-port": [[6, "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"], [6, "M7.5 12h9"]],
        heading: [[6, "M6 12h12"], [6, "M6 20V4"], [6, "M18 20V4"]],
        "heading-1": [[6, "M4 12h8"], [6, "M4 18V6"], [6, "M12 18V6"], [6, "m17 12 3-2v8"]],
        "heading-2": [[6, "M4 12h8"], [6, "M4 18V6"], [6, "M12 18V6"], [6, "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"]],
        "heading-3": [[6, "M4 12h8"], [6, "M4 18V6"], [6, "M12 18V6"], [6, "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"], [6, "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"]],
        "heading-4": [[6, "M4 12h8"], [6, "M4 18V6"], [6, "M12 18V6"], [6, "M17 10v4h4"], [6, "M21 10v8"]],
        "heading-5": [[6, "M4 12h8"], [6, "M4 18V6"], [6, "M12 18V6"], [6, "M17 13v-3h4"], [6, "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"]],
        "heading-6": [[6, "M4 12h8"], [6, "M4 18V6"], [6, "M12 18V6"], [1, 19, 16, 2], [6, "M20 10c-2 2-3 3.5-3 6"]],
        headphones: [[6, "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"]],
        heart: [[6, "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"]],
        "heart-crack": [[6, "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"], [6, "m12 13-1-1 2-2-3-3 2-2"]],
        "heart-handshake": [[6, "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"], [6, "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"], [6, "m18 15-2-2"], [6, "m15 18-2-2"]],
        "heart-off": [[0, 2, 2, 22, 22], [6, "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"], [6, "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"]],
        "heart-pulse": [[6, "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"], [6, "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"]],
        "help-circle": [[1, 12, 12, 10], [6, "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"], [6, "M12 17h.01"]],
        "helping-hand": [[6, "m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19"], [6, "m2 14 6 6"]],
        hexagon: [[6, "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"]],
        highlighter: [[6, "m9 11-6 6v3h9l3-3"], [6, "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"]],
        history: [[6, "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"], [6, "M3 3v5h5"], [6, "M12 7v5l4 2"]],
        home: [[6, "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], [2, "9 22 9 12 15 12 15 22"]],
        hop: [[6, "M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1"], [6, "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"], [6, "M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1"], [6, "M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5"], [6, "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"], [6, "M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5"], [6, "M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z"], [6, "M4.5 4.5 3 3c-.184-.185-.184-.816 0-1"]],
        "hop-off": [[6, "M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226"], [6, "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"], [6, "M17.5 17.5c-2.5 0-4 0-6-1"], [6, "M20 11.5c1 1.5 2 3.5 2 4.5"], [6, "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"], [6, "M22 22c-2 0-3.5-.5-5.5-1.5"], [6, "M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618"], [0, 2, 2, 22, 22]],
        hotel: [[6, "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"], [6, "m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"], [6, "M8 7h.01"], [6, "M16 7h.01"], [6, "M12 7h.01"], [6, "M12 11h.01"], [6, "M16 11h.01"], [6, "M8 11h.01"], [6, "M10 22v-6.5m4 0V22"]],
        hourglass: [[6, "M5 22h14"], [6, "M5 2h14"], [6, "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"], [6, "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"]],
        "ice-cream": [[6, "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"], [6, "M17 7A5 5 0 0 0 7 7"], [6, "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"]],
        "ice-cream-2": [[6, "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"], [6, "M12.14 11a3.5 3.5 0 1 1 6.71 0"], [6, "M15.5 6.5a3.5 3.5 0 1 0-7 0"]],
        image: [[5, 3, 3, 18, 18, 2, 2], [1, 9, 9, 2], [6, "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"]],
        "image-down": [[1, 9, 9, 2], [6, "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8"], [6, "m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21"], [6, "m14 19.5 3 3v-6"], [6, "m17 22.5 3-3"]],
        "image-minus": [[6, "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"], [0, 16, 5, 22, 5], [1, 9, 9, 2], [6, "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"]],
        "image-off": [[0, 2, 2, 22, 22], [6, "M10.41 10.41a2 2 0 1 1-2.83-2.83"], [0, 13.5, 13.5, 6, 21], [0, 18, 12, 21, 15], [6, "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"], [6, "M21 15V5a2 2 0 0 0-2-2H9"]],
        "image-plus": [[6, "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"], [0, 16, 5, 22, 5], [0, 19, 2, 19, 8], [1, 9, 9, 2], [6, "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"]],
        import: [[6, "M12 3v12"], [6, "m8 11 4 4 4-4"], [6, "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"]],
        inbox: [[2, "22 12 16 12 14 15 10 15 8 12 2 12"], [6, "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"]],
        indent: [[2, "3 8 7 12 3 16"], [0, 21, 12, 11, 12], [0, 21, 6, 11, 6], [0, 21, 18, 11, 18]],
        "indian-rupee": [[6, "M6 3h12"], [6, "M6 8h12"], [6, "m6 13 8.5 8"], [6, "M6 13h3"], [6, "M9 13c6.667 0 6.667-10 0-10"]],
        infinity: [[6, "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"]],
        info: [[1, 12, 12, 10], [6, "M12 16v-4"], [6, "M12 8h.01"]],
        inspect: [[6, "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"], [6, "m12 12 4 10 1.7-4.3L22 16Z"]],
        instagram: [[5, 2, 2, 20, 20, 5, 5], [6, "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"], [0, 17.5, 6.5, 17.51, 6.5]],
        italic: [[0, 19, 4, 10, 4], [0, 14, 20, 5, 20], [0, 15, 4, 9, 20]],
        "iteration-ccw": [[6, "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"], [2, "16 14 20 18 16 22"]],
        "iteration-cw": [[6, "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"], [2, "8 22 4 18 8 14"]],
        "japanese-yen": [[6, "M12 9.5V21m0-11.5L6 3m6 6.5L18 3"], [6, "M6 15h12"], [6, "M6 11h12"]],
        joystick: [[6, "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"], [6, "M6 15v-2"], [6, "M12 15V9"], [1, 12, 6, 3]],
        kanban: [[6, "M6 5v11"], [6, "M12 5v6"], [6, "M18 5v14"]],
        "kanban-square": [[5, 3, 3, 18, 18, 2], [6, "M8 7v7"], [6, "M12 7v4"], [6, "M16 7v9"]],
        "kanban-square-dashed": [[6, "M8 7v7"], [6, "M12 7v4"], [6, "M16 7v9"], [6, "M5 3a2 2 0 0 0-2 2"], [6, "M9 3h1"], [6, "M14 3h1"], [6, "M19 3a2 2 0 0 1 2 2"], [6, "M21 9v1"], [6, "M21 14v1"], [6, "M21 19a2 2 0 0 1-2 2"], [6, "M14 21h1"], [6, "M9 21h1"], [6, "M5 21a2 2 0 0 1-2-2"], [6, "M3 14v1"], [6, "M3 9v1"]],
        key: [[1, 7.5, 15.5, 5.5], [6, "m21 2-9.6 9.6"], [6, "m15.5 7.5 3 3L22 7l-3-3"]],
        "key-round": [[6, "M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"], [1, 16.5, 7.5, .5]],
        "key-square": [[6, "M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z"], [6, "m14 7 3 3"], [6, "M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4"]],
        keyboard: [[5, 2, 4, 20, 16, 2, 2], [6, "M6 8h.001"], [6, "M10 8h.001"], [6, "M14 8h.001"], [6, "M18 8h.001"], [6, "M8 12h.001"], [6, "M12 12h.001"], [6, "M16 12h.001"], [6, "M7 16h10"]],
        lamp: [[6, "M8 2h8l4 10H4L8 2Z"], [6, "M12 12v6"], [6, "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"]],
        "lamp-ceiling": [[6, "M12 2v5"], [6, "M6 7h12l4 9H2l4-9Z"], [6, "M9.17 16a3 3 0 1 0 5.66 0"]],
        "lamp-desk": [[6, "m14 5-3 3 2 7 8-8-7-2Z"], [6, "m14 5-3 3-3-3 3-3 3 3Z"], [6, "M9.5 6.5 4 12l3 6"], [6, "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"]],
        "lamp-floor": [[6, "M9 2h6l3 7H6l3-7Z"], [6, "M12 9v13"], [6, "M9 22h6"]],
        "lamp-wall-down": [[6, "M11 13h6l3 7H8l3-7Z"], [6, "M14 13V8a2 2 0 0 0-2-2H8"], [6, "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"]],
        "lamp-wall-up": [[6, "M11 4h6l3 7H8l3-7Z"], [6, "M14 11v5a2 2 0 0 1-2 2H8"], [6, "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"]],
        "land-plot": [[6, "m12 8 6-3-6-3v10"], [6, "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"], [6, "m6.49 12.85 11.02 6.3"], [6, "M17.51 12.85 6.5 19.15"]],
        landmark: [[0, 3, 22, 21, 22], [0, 6, 18, 6, 11], [0, 10, 18, 10, 11], [0, 14, 18, 14, 11], [0, 18, 18, 18, 11], [3, "12 2 20 7 4 7"]],
        languages: [[6, "m5 8 6 6"], [6, "m4 14 6-6 2-3"], [6, "M2 5h12"], [6, "M7 2h1"], [6, "m22 22-5-10-5 10"], [6, "M14 18h6"]],
        laptop: [[6, "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"]],
        "laptop-2": [[5, 3, 4, 18, 12, 2, 2], [0, 2, 20, 22, 20]],
        lasso: [[6, "M7 22a5 5 0 0 1-2-4"], [6, "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"], [6, "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"]],
        "lasso-select": [[6, "M7 22a5 5 0 0 1-2-4"], [6, "M7 16.93c.96.43 1.96.74 2.99.91"], [6, "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"], [6, "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"], [6, "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z"]],
        laugh: [[1, 12, 12, 10], [6, "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"], [0, 9, 9, 9.01, 9], [0, 15, 9, 15.01, 9]],
        layers: [[6, "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"], [6, "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"], [6, "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"]],
        "layers-2": [[6, "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"], [6, "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"]],
        "layers-3": [[6, "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"], [6, "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"], [6, "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"]],
        layout: [[5, 3, 3, 18, 18, 2, 2], [0, 3, 9, 21, 9], [0, 9, 21, 9, 9]],
        "layout-dashboard": [[5, 3, 3, 7, 9, 1], [5, 14, 3, 7, 5, 1], [5, 14, 12, 7, 9, 1], [5, 3, 16, 7, 5, 1]],
        "layout-grid": [[5, 3, 3, 7, 7, 1], [5, 14, 3, 7, 7, 1], [5, 14, 14, 7, 7, 1], [5, 3, 14, 7, 7, 1]],
        "layout-list": [[5, 3, 3, 7, 7, 1], [5, 3, 14, 7, 7, 1], [6, "M14 4h7"], [6, "M14 9h7"], [6, "M14 15h7"], [6, "M14 20h7"]],
        "layout-panel-left": [[5, 3, 3, 7, 18, 1], [5, 14, 3, 7, 7, 1], [5, 14, 14, 7, 7, 1]],
        "layout-panel-top": [[5, 3, 3, 18, 7, 1], [5, 3, 14, 7, 7, 1], [5, 14, 14, 7, 7, 1]],
        "layout-template": [[5, 3, 3, 18, 7, 1], [5, 3, 14, 9, 7, 1], [5, 16, 14, 5, 7, 1]],
        leaf: [[6, "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"], [6, "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"]],
        "leafy-green": [[6, "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"], [6, "M2 22 17 7"]],
        library: [[6, "m16 6 4 14"], [6, "M12 6v14"], [6, "M8 8v12"], [6, "M4 4v16"]],
        "library-big": [[5, 3, 3, 8, 18, 1], [6, "M7 3v18"], [6, "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"]],
        "library-square": [[5, 3, 3, 18, 18, 2], [6, "M7 7v10"], [6, "M11 7v10"], [6, "m15 7 2 10"]],
        "life-buoy": [[1, 12, 12, 10], [6, "m4.93 4.93 4.24 4.24"], [6, "m14.83 9.17 4.24-4.24"], [6, "m14.83 14.83 4.24 4.24"], [6, "m9.17 14.83-4.24 4.24"], [1, 12, 12, 4]],
        ligature: [[6, "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"], [6, "M6 12h4"], [6, "M14 12h2v8"], [6, "M6 20h4"], [6, "M14 20h4"]],
        lightbulb: [[6, "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"], [6, "M9 18h6"], [6, "M10 22h4"]],
        "lightbulb-off": [[6, "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"], [6, "m2 2 20 20"], [6, "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"], [6, "M9 18h6"], [6, "M10 22h4"]],
        "line-chart": [[6, "M3 3v18h18"], [6, "m19 9-5 5-4-4-3 3"]],
        link: [[6, "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"], [6, "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"]],
        "link-2": [[6, "M9 17H7A5 5 0 0 1 7 7h2"], [6, "M15 7h2a5 5 0 1 1 0 10h-2"], [0, 8, 12, 16, 12]],
        "link-2off": [[6, "M9 17H7A5 5 0 0 1 7 7"], [6, "M15 7h2a5 5 0 0 1 4 8"], [0, 8, 12, 12, 12], [0, 2, 2, 22, 22]],
        linkedin: [[6, "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"], [5, 2, 9, 4, 12], [1, 4, 4, 2]],
        list: [[0, 8, 6, 21, 6], [0, 8, 12, 21, 12], [0, 8, 18, 21, 18], [0, 3, 6, 3.01, 6], [0, 3, 12, 3.01, 12], [0, 3, 18, 3.01, 18]],
        "list-checks": [[6, "m3 17 2 2 4-4"], [6, "m3 7 2 2 4-4"], [6, "M13 6h8"], [6, "M13 12h8"], [6, "M13 18h8"]],
        "list-end": [[6, "M16 12H3"], [6, "M16 6H3"], [6, "M10 18H3"], [6, "M21 6v10a2 2 0 0 1-2 2h-5"], [6, "m16 16-2 2 2 2"]],
        "list-filter": [[6, "M3 6h18"], [6, "M7 12h10"], [6, "M10 18h4"]],
        "list-minus": [[6, "M11 12H3"], [6, "M16 6H3"], [6, "M16 18H3"], [6, "M21 12h-6"]],
        "list-music": [[6, "M21 15V6"], [6, "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"], [6, "M12 12H3"], [6, "M16 6H3"], [6, "M12 18H3"]],
        "list-ordered": [[0, 10, 6, 21, 6], [0, 10, 12, 21, 12], [0, 10, 18, 21, 18], [6, "M4 6h1v4"], [6, "M4 10h2"], [6, "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"]],
        "list-plus": [[6, "M11 12H3"], [6, "M16 6H3"], [6, "M16 18H3"], [6, "M18 9v6"], [6, "M21 12h-6"]],
        "list-restart": [[6, "M21 6H3"], [6, "M7 12H3"], [6, "M7 18H3"], [6, "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"], [6, "M11 10v4h4"]],
        "list-start": [[6, "M16 12H3"], [6, "M16 18H3"], [6, "M10 6H3"], [6, "M21 18V8a2 2 0 0 0-2-2h-5"], [6, "m16 8-2-2 2-2"]],
        "list-todo": [[5, 3, 5, 6, 6, 1], [6, "m3 17 2 2 4-4"], [6, "M13 6h8"], [6, "M13 12h8"], [6, "M13 18h8"]],
        "list-tree": [[6, "M21 12h-8"], [6, "M21 6H8"], [6, "M21 18h-8"], [6, "M3 6v4c0 1.1.9 2 2 2h3"], [6, "M3 10v6c0 1.1.9 2 2 2h3"]],
        "list-video": [[6, "M12 12H3"], [6, "M16 6H3"], [6, "M12 18H3"], [6, "m16 12 5 3-5 3v-6Z"]],
        "list-x": [[6, "M11 12H3"], [6, "M16 6H3"], [6, "M16 18H3"], [6, "m19 10-4 4"], [6, "m15 10 4 4"]],
        loader: [[0, 12, 2, 12, 6], [0, 12, 18, 12, 22], [0, 4.93, 4.93, 7.76, 7.76], [0, 16.24, 16.24, 19.07, 19.07], [0, 2, 12, 6, 12], [0, 18, 12, 22, 12], [0, 4.93, 19.07, 7.76, 16.24], [0, 16.24, 7.76, 19.07, 4.93]],
        "loader-2": [[6, "M21 12a9 9 0 1 1-6.219-8.56"]],
        locate: [[0, 2, 12, 5, 12], [0, 19, 12, 22, 12], [0, 12, 2, 12, 5], [0, 12, 19, 12, 22], [1, 12, 12, 7]],
        "locate-fixed": [[0, 2, 12, 5, 12], [0, 19, 12, 22, 12], [0, 12, 2, 12, 5], [0, 12, 19, 12, 22], [1, 12, 12, 7], [1, 12, 12, 3]],
        "locate-off": [[0, 2, 12, 5, 12], [0, 19, 12, 22, 12], [0, 12, 2, 12, 5], [0, 12, 19, 12, 22], [6, "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"], [6, "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"], [0, 2, 2, 22, 22]],
        lock: [[5, 3, 11, 18, 11, 2, 2], [6, "M7 11V7a5 5 0 0 1 10 0v4"]],
        "lock-keyhole": [[1, 12, 16, 1], [5, 3, 10, 18, 12, 2], [6, "M7 10V7a5 5 0 0 1 10 0v3"]],
        "log-in": [[6, "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"], [2, "10 17 15 12 10 7"], [0, 15, 12, 3, 12]],
        "log-out": [[6, "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], [2, "16 17 21 12 16 7"], [0, 21, 12, 9, 12]],
        lollipop: [[1, 11, 11, 8], [6, "m21 21-4.3-4.3"], [6, "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"]],
        luggage: [[6, "M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"], [6, "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"], [6, "M10 20h4"], [1, 16, 20, 2], [1, 8, 20, 2]],
        "m-square": [[5, 3, 3, 18, 18, 2], [6, "M8 16V8l4 4 4-4v8"]],
        magnet: [[6, "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"], [6, "m5 8 4 4"], [6, "m12 15 4 4"]],
        mail: [[5, 2, 4, 20, 16, 2], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"]],
        "mail-check": [[6, "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "m16 19 2 2 4-4"]],
        "mail-minus": [[6, "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "M16 19h6"]],
        "mail-open": [[6, "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"], [6, "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"]],
        "mail-plus": [[6, "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "M19 16v6"], [6, "M16 19h6"]],
        "mail-question": [[6, "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"], [6, "M20 22v.01"]],
        "mail-search": [[6, "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"], [1, 18, 18, 3], [6, "m22 22-1.5-1.5"]],
        "mail-warning": [[6, "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "M20 14v4"], [6, "M20 22v.01"]],
        "mail-x": [[6, "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "m17 17 4 4"], [6, "m21 17-4 4"]],
        mailbox: [[6, "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"], [2, "15,9 18,9 18,11"], [6, "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"], [0, 6, 10, 7, 10]],
        mails: [[5, 6, 4, 16, 13, 2], [6, "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"], [6, "M2 8v11c0 1.1.9 2 2 2h14"]],
        map: [[3, "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"], [0, 9, 3, 9, 18], [0, 15, 6, 15, 21]],
        "map-pin": [[6, "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"], [1, 12, 10, 3]],
        "map-pin-off": [[6, "M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5"], [6, "M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82"], [6, "M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13"], [6, "M14.9 9.25a3 3 0 0 0-2.15-2.16"], [0, 2, 2, 22, 22]],
        "map-pinned": [[6, "M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"], [1, 12, 8, 2], [6, "M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"]],
        martini: [[6, "M8 22h8"], [6, "M12 11v11"], [6, "m19 3-7 8-7-8Z"]],
        maximize: [[6, "M8 3H5a2 2 0 0 0-2 2v3"], [6, "M21 8V5a2 2 0 0 0-2-2h-3"], [6, "M3 16v3a2 2 0 0 0 2 2h3"], [6, "M16 21h3a2 2 0 0 0 2-2v-3"]],
        "maximize-2": [[2, "15 3 21 3 21 9"], [2, "9 21 3 21 3 15"], [0, 21, 3, 14, 10], [0, 3, 21, 10, 14]],
        medal: [[6, "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"], [6, "M11 12 5.12 2.2"], [6, "m13 12 5.88-9.8"], [6, "M8 7h8"], [1, 12, 17, 5], [6, "M12 18v-2h-.5"]],
        megaphone: [[6, "m3 11 18-5v12L3 14v-3z"], [6, "M11.6 16.8a3 3 0 1 1-5.8-1.6"]],
        "megaphone-off": [[6, "M9.26 9.26 3 11v3l14.14 3.14"], [6, "M21 15.34V6l-7.31 2.03"], [6, "M11.6 16.8a3 3 0 1 1-5.8-1.6"], [0, 2, 2, 22, 22]],
        meh: [[1, 12, 12, 10], [0, 8, 15, 16, 15], [0, 9, 9, 9.01, 9], [0, 15, 9, 15.01, 9]],
        "memory-stick": [[6, "M6 19v-3"], [6, "M10 19v-3"], [6, "M14 19v-3"], [6, "M18 19v-3"], [6, "M8 11V9"], [6, "M16 11V9"], [6, "M12 11V9"], [6, "M2 15h20"], [6, "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"]],
        menu: [[0, 4, 12, 20, 12], [0, 4, 6, 20, 6], [0, 4, 18, 20, 18]],
        "menu-square": [[5, 3, 3, 18, 18, 2], [6, "M7 8h10"], [6, "M7 12h10"], [6, "M7 16h10"]],
        merge: [[6, "m8 6 4-4 4 4"], [6, "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"], [6, "m20 22-5-5"]],
        "message-circle": [[6, "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"]],
        "message-square": [[6, "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"]],
        "message-square-dashed": [[6, "M3 6V5c0-1.1.9-2 2-2h2"], [6, "M11 3h3"], [6, "M18 3h1c1.1 0 2 .9 2 2"], [6, "M21 9v2"], [6, "M21 15c0 1.1-.9 2-2 2h-1"], [6, "M14 17h-3"], [6, "m7 17-4 4v-5"], [6, "M3 12v-2"]],
        "message-square-plus": [[6, "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [0, 9, 10, 15, 10], [0, 12, 7, 12, 13]],
        "messages-square": [[6, "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"], [6, "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"]],
        mic: [[6, "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"], [6, "M19 10v2a7 7 0 0 1-14 0v-2"], [0, 12, 19, 12, 22]],
        "mic-2": [[6, "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"], [1, 17, 7, 5]],
        "mic-off": [[0, 2, 2, 22, 22], [6, "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"], [6, "M5 10v2a7 7 0 0 0 12 5"], [6, "M15 9.34V5a3 3 0 0 0-5.68-1.33"], [6, "M9 9v3a3 3 0 0 0 5.12 2.12"], [0, 12, 19, 12, 22]],
        microscope: [[6, "M6 18h8"], [6, "M3 22h18"], [6, "M14 22a7 7 0 1 0 0-14h-1"], [6, "M9 14h2"], [6, "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"], [6, "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"]],
        microwave: [[5, 2, 4, 20, 15, 2], [5, 6, 8, 8, 7, 1], [6, "M18 8v7"], [6, "M6 19v2"], [6, "M18 19v2"]],
        milestone: [[6, "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"], [6, "M12 13v8"], [6, "M12 3v3"]],
        milk: [[6, "M8 2h8"], [6, "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"], [6, "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"]],
        "milk-off": [[6, "M8 2h8"], [6, "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"], [6, "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"], [0, 2, 2, 22, 22]],
        minimize: [[6, "M8 3v3a2 2 0 0 1-2 2H3"], [6, "M21 8h-3a2 2 0 0 1-2-2V3"], [6, "M3 16h3a2 2 0 0 1 2 2v3"], [6, "M16 21v-3a2 2 0 0 1 2-2h3"]],
        "minimize-2": [[2, "4 14 10 14 10 20"], [2, "20 10 14 10 14 4"], [0, 14, 10, 21, 3], [0, 3, 21, 10, 14]],
        minus: [[6, "M5 12h14"]],
        "minus-circle": [[1, 12, 12, 10], [6, "M8 12h8"]],
        "minus-square": [[5, 3, 3, 18, 18, 2], [6, "M8 12h8"]],
        monitor: [[5, 2, 3, 20, 14, 2], [0, 8, 21, 16, 21], [0, 12, 17, 12, 21]],
        "monitor-check": [[6, "m9 10 2 2 4-4"], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-dot": [[1, 19, 6, 3], [6, "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-down": [[6, "M12 13V7"], [6, "m15 10-3 3-3-3"], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-off": [[6, "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"], [6, "M22 15V5a2 2 0 0 0-2-2H9"], [6, "M8 21h8"], [6, "M12 17v4"], [6, "m2 2 20 20"]],
        "monitor-pause": [[6, "M10 13V7"], [6, "M14 13V7"], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-play": [[6, "m10 7 5 3-5 3Z"], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-smartphone": [[6, "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"], [6, "M10 19v-3.96 3.15"], [6, "M7 19h5"], [5, 16, 12, 6, 10, 2]],
        "monitor-speaker": [[6, "M5.5 20H8"], [6, "M17 9h.01"], [5, 12, 4, 10, 16, 2], [6, "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"], [1, 17, 15, 1]],
        "monitor-stop": [[5, 9, 7, 6, 6], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-up": [[6, "m9 10 3-3 3 3"], [6, "M12 13V7"], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-x": [[6, "m14.5 12.5-5-5"], [6, "m9.5 12.5 5-5"], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        moon: [[6, "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"]],
        "moon-star": [[6, "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"], [6, "M19 3v4"], [6, "M21 5h-4"]],
        "more-horizontal": [[1, 12, 12, 1], [1, 19, 12, 1], [1, 5, 12, 1]],
        "more-vertical": [[1, 12, 12, 1], [1, 12, 5, 1], [1, 12, 19, 1]],
        mountain: [[6, "m8 3 4 8 5-5 5 15H2L8 3z"]],
        "mountain-snow": [[6, "m8 3 4 8 5-5 5 15H2L8 3z"], [6, "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"]],
        mouse: [[5, 5, 2, 14, 20, 7], [6, "M12 6v4"]],
        "mouse-pointer": [[6, "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"], [6, "m13 13 6 6"]],
        "mouse-pointer-2": [[6, "m4 4 7.07 17 2.51-7.39L21 11.07z"]],
        "mouse-pointer-click": [[6, "m9 9 5 12 1.8-5.2L21 14Z"], [6, "M7.2 2.2 8 5.1"], [6, "m5.1 8-2.9-.8"], [6, "M14 4.1 12 6"], [6, "m6 12-1.9 2"]],
        "mouse-pointer-square": [[6, "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"], [6, "m12 12 4 10 1.7-4.3L22 16Z"]],
        "mouse-pointer-square-dashed": [[6, "M5 3a2 2 0 0 0-2 2"], [6, "M19 3a2 2 0 0 1 2 2"], [6, "m12 12 4 10 1.7-4.3L22 16Z"], [6, "M5 21a2 2 0 0 1-2-2"], [6, "M9 3h1"], [6, "M9 21h2"], [6, "M14 3h1"], [6, "M3 9v1"], [6, "M21 9v2"], [6, "M3 14v1"]],
        move: [[2, "5 9 2 12 5 15"], [2, "9 5 12 2 15 5"], [2, "15 19 12 22 9 19"], [2, "19 9 22 12 19 15"], [0, 2, 12, 22, 12], [0, 12, 2, 12, 22]],
        "move-3d": [[6, "M5 3v16h16"], [6, "m5 19 6-6"], [6, "m2 6 3-3 3 3"], [6, "m18 16 3 3-3 3"]],
        "move-diagonal": [[2, "13 5 19 5 19 11"], [2, "11 19 5 19 5 13"], [0, 19, 5, 5, 19]],
        "move-diagonal-2": [[2, "5 11 5 5 11 5"], [2, "19 13 19 19 13 19"], [0, 5, 5, 19, 19]],
        "move-down": [[6, "M8 18L12 22L16 18"], [6, "M12 2V22"]],
        "move-down-left": [[6, "M11 19H5V13"], [6, "M19 5L5 19"]],
        "move-down-right": [[6, "M19 13V19H13"], [6, "M5 5L19 19"]],
        "move-horizontal": [[2, "18 8 22 12 18 16"], [2, "6 8 2 12 6 16"], [0, 2, 12, 22, 12]],
        "move-left": [[6, "M6 8L2 12L6 16"], [6, "M2 12H22"]],
        "move-right": [[6, "M18 8L22 12L18 16"], [6, "M2 12H22"]],
        "move-up": [[6, "M8 6L12 2L16 6"], [6, "M12 2V22"]],
        "move-up-left": [[6, "M5 11V5H11"], [6, "M5 5L19 19"]],
        "move-up-right": [[6, "M13 5H19V11"], [6, "M19 5L5 19"]],
        "move-vertical": [[2, "8 18 12 22 16 18"], [2, "8 6 12 2 16 6"], [0, 12, 2, 12, 22]],
        music: [[6, "M9 18V5l12-2v13"], [1, 6, 18, 3], [1, 18, 16, 3]],
        "music-2": [[1, 8, 18, 4], [6, "M12 18V2l7 4"]],
        "music-3": [[1, 12, 18, 4], [6, "M16 18V2"]],
        "music-4": [[6, "M9 18V5l12-2v13"], [6, "m9 9 12-2"], [1, 6, 18, 3], [1, 18, 16, 3]],
        navigation: [[3, "3 11 22 2 13 21 11 13 3 11"]],
        "navigation-2": [[3, "12 2 19 21 12 17 5 21 12 2"]],
        "navigation-2off": [[6, "M9.31 9.31 5 21l7-4 7 4-1.17-3.17"], [6, "M14.53 8.88 12 2l-1.17 3.17"], [0, 2, 2, 22, 22]],
        "navigation-off": [[6, "M8.43 8.43 3 11l8 2 2 8 2.57-5.43"], [6, "M17.39 11.73 22 2l-9.73 4.61"], [0, 2, 2, 22, 22]],
        network: [[5, 16, 16, 6, 6, 1], [5, 2, 16, 6, 6, 1], [5, 9, 2, 6, 6, 1], [6, "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"], [6, "M12 12V8"]],
        newspaper: [[6, "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"], [6, "M18 14h-8"], [6, "M15 18h-5"], [6, "M10 6h8v4h-8V6Z"]],
        nfc: [[6, "M6 8.32a7.43 7.43 0 0 1 0 7.36"], [6, "M9.46 6.21a11.76 11.76 0 0 1 0 11.58"], [6, "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"], [6, "M16.37 2a20.16 20.16 0 0 1 0 20"]],
        nut: [[6, "M12 4V2"], [6, "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"], [6, "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"]],
        "nut-off": [[6, "M12 4V2"], [6, "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"], [6, "M19 10v3.343"], [6, "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"], [0, 2, 2, 22, 22]],
        octagon: [[3, "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"]],
        option: [[6, "M3 3h6l6 18h6"], [6, "M14 3h7"]],
        orbit: [[1, 12, 12, 3], [1, 19, 5, 2], [1, 5, 19, 2], [6, "M10.4 21.9a10 10 0 0 0 9.941-15.416"], [6, "M13.5 2.1a10 10 0 0 0-9.841 15.416"]],
        outdent: [[2, "7 8 3 12 7 16"], [0, 21, 12, 11, 12], [0, 21, 6, 11, 6], [0, 21, 18, 11, 18]],
        package: [[6, "m7.5 4.27 9 5.15"], [6, "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"], [6, "m3.3 7 8.7 5 8.7-5"], [6, "M12 22V12"]],
        "package-2": [[6, "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"], [6, "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"], [6, "M12 3v6"]],
        "package-check": [[6, "m16 16 2 2 4-4"], [6, "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"], [6, "m7.5 4.27 9 5.15"], [2, "3.29 7 12 12 20.71 7"], [0, 12, 22, 12, 12]],
        "package-minus": [[6, "M16 16h6"], [6, "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"], [6, "m7.5 4.27 9 5.15"], [2, "3.29 7 12 12 20.71 7"], [0, 12, 22, 12, 12]],
        "package-open": [[6, "M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"], [6, "m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"], [0, 12, 22, 12, 13], [6, "M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"]],
        "package-plus": [[6, "M16 16h6"], [6, "M19 13v6"], [6, "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"], [6, "m7.5 4.27 9 5.15"], [2, "3.29 7 12 12 20.71 7"], [0, 12, 22, 12, 12]],
        "package-search": [[6, "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"], [6, "m7.5 4.27 9 5.15"], [2, "3.29 7 12 12 20.71 7"], [0, 12, 22, 12, 12], [1, 18.5, 15.5, 2.5], [6, "M20.27 17.27 22 19"]],
        "package-x": [[6, "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"], [6, "m7.5 4.27 9 5.15"], [2, "3.29 7 12 12 20.71 7"], [0, 12, 22, 12, 12], [6, "m17 13 5 5m-5 0 5-5"]],
        "paint-bucket": [[6, "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"], [6, "m5 2 5 5"], [6, "M2 13h15"], [6, "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"]],
        paintbrush: [[6, "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"], [6, "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"], [6, "M14.5 17.5 4.5 15"]],
        "paintbrush-2": [[6, "M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z"], [6, "M6 12V2h12v10"], [6, "M14 2v4"], [6, "M10 2v2"]],
        palette: [[1, 13.5, 6.5, .5], [1, 17.5, 10.5, .5], [1, 8.5, 7.5, .5], [1, 6.5, 12.5, .5], [6, "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"]],
        palmtree: [[6, "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"], [6, "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"], [6, "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z"], [6, "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"]],
        "panel-bottom": [[5, 3, 3, 18, 18, 2, 2], [0, 3, 15, 21, 15]],
        "panel-bottom-close": [[5, 3, 3, 18, 18, 2, 2], [0, 3, 15, 21, 15], [6, "m15 8-3 3-3-3"]],
        "panel-bottom-inactive": [[5, 3, 3, 18, 18, 2], [6, "M14 15h1"], [6, "M19 15h2"], [6, "M3 15h2"], [6, "M9 15h1"]],
        "panel-bottom-open": [[5, 3, 3, 18, 18, 2, 2], [0, 3, 15, 21, 15], [6, "m9 10 3-3 3 3"]],
        "panel-left": [[5, 3, 3, 18, 18, 2, 2], [0, 9, 3, 9, 21]],
        "panel-left-close": [[5, 3, 3, 18, 18, 2, 2], [6, "M9 3v18"], [6, "m16 15-3-3 3-3"]],
        "panel-left-inactive": [[5, 3, 3, 18, 18, 2], [6, "M9 14v1"], [6, "M9 19v2"], [6, "M9 3v2"], [6, "M9 9v1"]],
        "panel-left-open": [[5, 3, 3, 18, 18, 2, 2], [6, "M9 3v18"], [6, "m14 9 3 3-3 3"]],
        "panel-right": [[5, 3, 3, 18, 18, 2, 2], [0, 15, 3, 15, 21]],
        "panel-right-close": [[5, 3, 3, 18, 18, 2, 2], [0, 15, 3, 15, 21], [6, "m8 9 3 3-3 3"]],
        "panel-right-inactive": [[5, 3, 3, 18, 18, 2], [6, "M15 14v1"], [6, "M15 19v2"], [6, "M15 3v2"], [6, "M15 9v1"]],
        "panel-right-open": [[5, 3, 3, 18, 18, 2, 2], [0, 15, 3, 15, 21], [6, "m10 15-3-3 3-3"]],
        "panel-top": [[5, 3, 3, 18, 18, 2, 2], [0, 3, 9, 21, 9]],
        "panel-top-close": [[5, 3, 3, 18, 18, 2, 2], [0, 3, 9, 21, 9], [6, "m9 16 3-3 3 3"]],
        "panel-top-inactive": [[5, 3, 3, 18, 18, 2], [6, "M14 9h1"], [6, "M19 9h2"], [6, "M3 9h2"], [6, "M9 9h1"]],
        "panel-top-open": [[5, 3, 3, 18, 18, 2, 2], [0, 3, 9, 21, 9], [6, "m15 14-3 3-3-3"]],
        paperclip: [[6, "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"]],
        parentheses: [[6, "M8 21s-4-3-4-9 4-9 4-9"], [6, "M16 3s4 3 4 9-4 9-4 9"]],
        "parking-circle": [[1, 12, 12, 10], [6, "M9 17V7h4a3 3 0 0 1 0 6H9"]],
        "parking-circle-off": [[1, 12, 12, 10], [6, "m5 5 14 14"], [6, "M13 13a3 3 0 1 0 0-6H9v2"], [6, "M9 17v-2.34"]],
        "parking-meter": [[6, "M9 9a3 3 0 1 1 6 0"], [6, "M12 12v3"], [6, "M11 15h2"], [6, "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3"], [6, "M12 19v3"]],
        "parking-square": [[5, 3, 3, 18, 18, 2], [6, "M9 17V7h4a3 3 0 0 1 0 6H9"]],
        "parking-square-off": [[6, "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"], [6, "M3 8.7V19a2 2 0 0 0 2 2h10.3"], [6, "m2 2 20 20"], [6, "M13 13a3 3 0 1 0 0-6H9v2"], [6, "M9 17v-2.3"]],
        "party-popper": [[6, "M5.8 11.3 2 22l10.7-3.79"], [6, "M4 3h.01"], [6, "M22 8h.01"], [6, "M15 2h.01"], [6, "M22 20h.01"], [6, "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"], [6, "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"], [6, "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"], [6, "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"]],
        pause: [[5, 6, 4, 4, 16], [5, 14, 4, 4, 16]],
        "pause-circle": [[1, 12, 12, 10], [0, 10, 15, 10, 9], [0, 14, 15, 14, 9]],
        "pause-octagon": [[6, "M10 15V9"], [6, "M14 15V9"], [6, "M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z"]],
        "paw-print": [[1, 11, 4, 2], [1, 18, 8, 2], [1, 20, 16, 2], [6, "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"]],
        "pc-case": [[5, 5, 2, 14, 20, 2], [6, "M15 14h.01"], [6, "M9 6h6"], [6, "M9 10h6"]],
        pen: [[6, "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"]],
        "pen-box": [[6, "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], [6, "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"]],
        "pen-line": [[6, "M12 20h9"], [6, "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"]],
        "pen-square": [[6, "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], [6, "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"]],
        "pen-tool": [[6, "m12 19 7-7 3 3-7 7-3-3z"], [6, "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"], [6, "m2 2 7.586 7.586"], [1, 11, 11, 2]],
        pencil: [[6, "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"], [6, "m15 5 4 4"]],
        "pencil-line": [[6, "M12 20h9"], [6, "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"], [6, "m15 5 3 3"]],
        "pencil-ruler": [[6, "m15 5 4 4"], [6, "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"], [6, "m8 6 2-2"], [6, "m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"], [6, "m18 16 2-2"], [6, "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"]],
        pentagon: [[6, "M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z"]],
        percent: [[0, 19, 5, 5, 19], [1, 6.5, 6.5, 2.5], [1, 17.5, 17.5, 2.5]],
        "percent-circle": [[1, 12, 12, 10], [6, "m15 9-6 6"], [6, "M9 9h.01"], [6, "M15 15h.01"]],
        "percent-diamond": [[6, "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"], [6, "M9.2 9.2h.01"], [6, "m14.5 9.5-5 5"], [6, "M14.7 14.8h.01"]],
        "percent-square": [[5, 3, 3, 18, 18, 2], [6, "m15 9-6 6"], [6, "M9 9h.01"], [6, "M15 15h.01"]],
        "person-standing": [[1, 12, 5, 1], [6, "m9 20 3-6 3 6"], [6, "m6 8 6 2 6-2"], [6, "M12 10v4"]],
        phone: [[6, "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"]],
        "phone-call": [[6, "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"], [6, "M14.05 2a9 9 0 0 1 8 7.94"], [6, "M14.05 6A5 5 0 0 1 18 10"]],
        "phone-forwarded": [[2, "18 2 22 6 18 10"], [0, 14, 6, 22, 6], [6, "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"]],
        "phone-incoming": [[2, "16 2 16 8 22 8"], [0, 22, 2, 16, 8], [6, "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"]],
        "phone-missed": [[0, 22, 2, 16, 8], [0, 16, 2, 22, 8], [6, "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"]],
        "phone-off": [[6, "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"], [0, 22, 2, 2, 22]],
        "phone-outgoing": [[2, "22 8 22 2 16 2"], [0, 16, 8, 22, 2], [6, "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"]],
        pi: [[0, 9, 4, 9, 20], [6, "M4 7c0-1.7 1.3-3 3-3h13"], [6, "M18 20c-1.7 0-3-1.3-3-3V4"]],
        "pi-square": [[5, 3, 3, 18, 18, 2], [6, "M7 7h10"], [6, "M10 7v10"], [6, "M16 17a2 2 0 0 1-2-2V7"]],
        "picture-in-picture": [[6, "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"], [5, 12, 13.5, 10, 7, 0, 2]],
        "picture-in-picture-2": [[6, "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"], [5, 12, 13, 10, 7, 2]],
        "pie-chart": [[6, "M21.21 15.89A10 10 0 1 1 8 2.83"], [6, "M22 12A10 10 0 0 0 12 2v10z"]],
        "piggy-bank": [[6, "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"], [6, "M2 9v1c0 1.1.9 2 2 2h1"], [6, "M16 11h0"]],
        pilcrow: [[6, "M13 4v16"], [6, "M17 4v16"], [6, "M19 4H9.5a4.5 4.5 0 0 0 0 9H13"]],
        "pilcrow-square": [[5, 3, 3, 18, 18, 2], [6, "M12 12H9.5a2.5 2.5 0 0 1 0-5H17"], [6, "M12 7v10"], [6, "M16 7v10"]],
        pill: [[6, "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"], [6, "m8.5 8.5 7 7"]],
        pin: [[0, 12, 17, 12, 22], [6, "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"]],
        "pin-off": [[0, 2, 2, 22, 22], [0, 12, 17, 12, 22], [6, "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12"], [6, "M15 9.34V6h1a2 2 0 0 0 0-4H7.89"]],
        pipette: [[6, "m2 22 1-1h3l9-9"], [6, "M3 21v-3l9-9"], [6, "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"]],
        pizza: [[6, "M15 11h.01"], [6, "M11 15h.01"], [6, "M16 16h.01"], [6, "m2 16 20 6-6-20A20 20 0 0 0 2 16"], [6, "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"]],
        plane: [[6, "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"]],
        "plane-landing": [[6, "M2 22h20"], [6, "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"]],
        "plane-takeoff": [[6, "M2 22h20"], [6, "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"]],
        play: [[3, "5 3 19 12 5 21 5 3"]],
        "play-circle": [[1, 12, 12, 10], [3, "10 8 16 12 10 16 10 8"]],
        "play-square": [[5, 3, 3, 18, 18, 2], [6, "m9 8 6 4-6 4Z"]],
        plug: [[6, "M12 22v-5"], [6, "M9 8V2"], [6, "M15 8V2"], [6, "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"]],
        "plug-2": [[6, "M9 2v6"], [6, "M15 2v6"], [6, "M12 17v5"], [6, "M5 8h14"], [6, "M6 11V8h12v3a6 6 0 1 1-12 0v0Z"]],
        "plug-zap": [[6, "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"], [6, "m2 22 3-3"], [6, "M7.5 13.5 10 11"], [6, "M10.5 16.5 13 14"], [6, "m18 3-4 4h6l-4 4"]],
        "plug-zap-2": [[6, "m13 2-2 2.5h3L12 7"], [6, "M10 14v-3"], [6, "M14 14v-3"], [6, "M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z"], [6, "M12 22v-3"]],
        plus: [[6, "M5 12h14"], [6, "M12 5v14"]],
        "plus-circle": [[1, 12, 12, 10], [6, "M8 12h8"], [6, "M12 8v8"]],
        "plus-square": [[5, 3, 3, 18, 18, 2], [6, "M8 12h8"], [6, "M12 8v8"]],
        pocket: [[6, "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"], [2, "8 10 12 14 16 10"]],
        "pocket-knife": [[6, "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"], [6, "M18 6h.01"], [6, "M6 18h.01"], [6, "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"], [6, "M18 11.66V22a4 4 0 0 0 4-4V6"]],
        podcast: [[1, 12, 11, 1], [6, "M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"], [6, "M8 14a5 5 0 1 1 8 0"], [6, "M17 18.5a9 9 0 1 0-10 0"]],
        pointer: [[6, "M22 14a8 8 0 0 1-8 8"], [6, "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"], [6, "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"], [6, "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"], [6, "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"]],
        popcorn: [[6, "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"], [6, "M10 22 9 8"], [6, "m14 22 1-14"], [6, "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"]],
        popsicle: [[6, "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"], [6, "m22 22-5.5-5.5"]],
        "pound-sterling": [[6, "M18 7c0-5.333-8-5.333-8 0"], [6, "M10 7v14"], [6, "M6 21h12"], [6, "M6 13h10"]],
        power: [[6, "M12 2v10"], [6, "M18.4 6.6a9 9 0 1 1-12.77.04"]],
        "power-circle": [[1, 12, 12, 10], [6, "M12 12V6"], [6, "M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5"]],
        "power-off": [[6, "M18.36 6.64A9 9 0 0 1 20.77 15"], [6, "M6.16 6.16a9 9 0 1 0 12.68 12.68"], [6, "M12 2v4"], [6, "m2 2 20 20"]],
        "power-square": [[5, 3, 3, 18, 18, 2], [6, "M12 7v5"], [6, "M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8"]],
        presentation: [[6, "M2 3h20"], [6, "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"], [6, "m7 21 5-5 5 5"]],
        printer: [[2, "6 9 6 2 18 2 18 9"], [6, "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"], [5, 6, 14, 12, 8]],
        projector: [[6, "M5 7 3 5"], [6, "M9 6V3"], [6, "m13 7 2-2"], [1, 9, 13, 3], [6, "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"], [6, "M16 16h2"]],
        puzzle: [[6, "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"]],
        pyramid: [[6, "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"], [6, "M12 2v20"]],
        "qr-code": [[5, 3, 3, 5, 5, 1], [5, 16, 3, 5, 5, 1], [5, 3, 16, 5, 5, 1], [6, "M21 16h-3a2 2 0 0 0-2 2v3"], [6, "M21 21v.01"], [6, "M12 7v3a2 2 0 0 1-2 2H7"], [6, "M3 12h.01"], [6, "M12 3h.01"], [6, "M12 16v.01"], [6, "M16 12h1"], [6, "M21 12v.01"], [6, "M12 21v-1"]],
        quote: [[6, "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"], [6, "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"]],
        rabbit: [[6, "M20 8.54V4a2 2 0 1 0-4 0v3"], [6, "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.93 1.93 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1c-1.7 0-3 1.3-3 3"], [6, "M7.61 12.53a3 3 0 1 0-1.6 4.3"], [6, "M13 16a3 3 0 0 1 2.24 5"], [6, "M18 12h.01"]],
        radar: [[6, "M19.07 4.93A10 10 0 0 0 6.99 3.34"], [6, "M4 6h.01"], [6, "M2.29 9.62A10 10 0 1 0 21.31 8.35"], [6, "M16.24 7.76A6 6 0 1 0 8.23 16.67"], [6, "M12 18h.01"], [6, "M17.99 11.66A6 6 0 0 1 15.77 16.67"], [1, 12, 12, 2], [6, "m13.41 10.59 5.66-5.66"]],
        radiation: [[6, "M12 12h0.01"], [6, "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"], [6, "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"], [6, "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"]],
        radio: [[6, "M4.9 19.1C1 15.2 1 8.8 4.9 4.9"], [6, "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"], [1, 12, 12, 2], [6, "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"], [6, "M19.1 4.9C23 8.8 23 15.1 19.1 19"]],
        "radio-receiver": [[6, "M5 16v2"], [6, "M19 16v2"], [5, 2, 8, 20, 8, 2], [6, "M18 12h0"]],
        "radio-tower": [[6, "M4.9 16.1C1 12.2 1 5.8 4.9 1.9"], [6, "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"], [1, 12, 9, 2], [6, "M16.2 4.8c2 2 2.26 5.11.8 7.47"], [6, "M19.1 1.9a9.96 9.96 0 0 1 0 14.1"], [6, "M9.5 18h5"], [6, "m8 22 4-11 4 11"]],
        radius: [[6, "M20.34 17.52a10 10 0 1 0-2.82 2.82"], [1, 19, 19, 2], [6, "m13.41 13.41 4.18 4.18"], [1, 12, 12, 2]],
        "rail-symbol": [[6, "M5 15h14"], [6, "M5 9h14"], [6, "m14 20-5-5 6-6-5-5"]],
        rainbow: [[6, "M22 17a10 10 0 0 0-20 0"], [6, "M6 17a6 6 0 0 1 12 0"], [6, "M10 17a2 2 0 0 1 4 0"]],
        rat: [[6, "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4"], [6, "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"], [6, "M13.2 18a3 3 0 0 0-2.2-5"], [6, "M13 22H4a2 2 0 0 1 0-4h12"], [6, "M16 9h.01"]],
        ratio: [[5, 6, 2, 12, 20, 2], [5, 2, 6, 20, 12, 2]],
        receipt: [[6, "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"], [6, "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"], [6, "M12 17V7"]],
        "rectangle-horizontal": [[5, 2, 6, 20, 12, 2]],
        "rectangle-vertical": [[5, 6, 2, 12, 20, 2]],
        recycle: [[6, "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"], [6, "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"], [6, "m14 16-3 3 3 3"], [6, "M8.293 13.596 7.196 9.5 3.1 10.598"], [6, "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"], [6, "m13.378 9.633 4.096 1.098 1.097-4.096"]],
        redo: [[6, "M21 7v6h-6"], [6, "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"]],
        "redo-2": [[6, "m15 14 5-5-5-5"], [6, "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"]],
        "redo-dot": [[1, 12, 17, 1], [6, "M21 7v6h-6"], [6, "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"]],
        "refresh-ccw": [[6, "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"], [6, "M3 3v5h5"], [6, "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"], [6, "M16 16h5v5"]],
        "refresh-ccw-dot": [[6, "M3 2v6h6"], [6, "M21 12A9 9 0 0 0 6 5.3L3 8"], [6, "M21 22v-6h-6"], [6, "M3 12a9 9 0 0 0 15 6.7l3-2.7"], [1, 12, 12, 1]],
        "refresh-cw": [[6, "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"], [6, "M21 3v5h-5"], [6, "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"], [6, "M8 16H3v5"]],
        "refresh-cw-off": [[6, "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"], [6, "M8 16H3v5"], [6, "M3 12C3 9.51 4 7.26 5.64 5.64"], [6, "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"], [6, "M21 12c0 1-.16 1.97-.47 2.87"], [6, "M21 3v5h-5"], [6, "M22 22 2 2"]],
        refrigerator: [[6, "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"], [6, "M5 10h14"], [6, "M15 7v6"]],
        regex: [[6, "M17 3v10"], [6, "m12.67 5.5 8.66 5"], [6, "m12.67 10.5 8.66-5"], [6, "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"]],
        "remove-formatting": [[6, "M4 7V4h16v3"], [6, "M5 20h6"], [6, "M13 4 8 20"], [6, "m15 15 5 5"], [6, "m20 15-5 5"]],
        repeat: [[6, "m17 2 4 4-4 4"], [6, "M3 11v-1a4 4 0 0 1 4-4h14"], [6, "m7 22-4-4 4-4"], [6, "M21 13v1a4 4 0 0 1-4 4H3"]],
        "repeat-1": [[6, "m17 2 4 4-4 4"], [6, "M3 11v-1a4 4 0 0 1 4-4h14"], [6, "m7 22-4-4 4-4"], [6, "M21 13v1a4 4 0 0 1-4 4H3"], [6, "M11 10h1v4"]],
        "repeat-2": [[6, "m2 9 3-3 3 3"], [6, "M13 18H7a2 2 0 0 1-2-2V6"], [6, "m22 15-3 3-3-3"], [6, "M11 6h6a2 2 0 0 1 2 2v10"]],
        replace: [[6, "M14 4c0-1.1.9-2 2-2"], [6, "M20 2c1.1 0 2 .9 2 2"], [6, "M22 8c0 1.1-.9 2-2 2"], [6, "M16 10c-1.1 0-2-.9-2-2"], [6, "m3 7 3 3 3-3"], [6, "M6 10V5c0-1.7 1.3-3 3-3h1"], [5, 2, 14, 8, 8, 2]],
        "replace-all": [[6, "M14 4c0-1.1.9-2 2-2"], [6, "M20 2c1.1 0 2 .9 2 2"], [6, "M22 8c0 1.1-.9 2-2 2"], [6, "M16 10c-1.1 0-2-.9-2-2"], [6, "m3 7 3 3 3-3"], [6, "M6 10V5c0-1.7 1.3-3 3-3h1"], [5, 2, 14, 8, 8, 2], [6, "M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"], [6, "M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"]],
        reply: [[2, "9 17 4 12 9 7"], [6, "M20 18v-2a4 4 0 0 0-4-4H4"]],
        "reply-all": [[2, "7 17 2 12 7 7"], [2, "12 17 7 12 12 7"], [6, "M22 18v-2a4 4 0 0 0-4-4H7"]],
        rewind: [[3, "11 19 2 12 11 5 11 19"], [3, "22 19 13 12 22 5 22 19"]],
        ribbon: [[6, "M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44"], [6, "M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z"], [6, "m9.35 14.53 2.64-3.31"], [6, "m11.97 18.04 2.99 4 3.54-2.54-3.93-5"], [6, "M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0"]],
        rocket: [[6, "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"], [6, "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"], [6, "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"], [6, "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"]],
        "rocking-chair": [[2, "3.5 2 6.5 12.5 18 12.5"], [0, 9.5, 12.5, 5.5, 20], [0, 15, 12.5, 18.5, 20], [6, "M2.75 18a13 13 0 0 0 18.5 0"]],
        "roller-coaster": [[6, "M6 19V5"], [6, "M10 19V6.8"], [6, "M14 19v-7.8"], [6, "M18 5v4"], [6, "M18 19v-6"], [6, "M22 19V9"], [6, "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"]],
        "rotate-3d": [[6, "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"], [6, "m15.194 13.707 3.814 1.86-1.86 3.814"], [6, "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"]],
        "rotate-ccw": [[6, "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"], [6, "M3 3v5h5"]],
        "rotate-cw": [[6, "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"], [6, "M21 3v5h-5"]],
        route: [[1, 6, 19, 3], [6, "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"], [1, 18, 5, 3]],
        "route-off": [[1, 6, 19, 3], [6, "M9 19h8.5c.4 0 .9-.1 1.3-.2"], [6, "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"], [6, "m2 2 20 20"], [6, "M21 15.3a3.5 3.5 0 0 0-3.3-3.3"], [6, "M15 5h-4.3"], [1, 18, 5, 3]],
        router: [[5, 2, 14, 20, 8, 2], [6, "M6.01 18H6"], [6, "M10.01 18H10"], [6, "M15 10v4"], [6, "M17.84 7.17a4 4 0 0 0-5.66 0"], [6, "M20.66 4.34a8 8 0 0 0-11.31 0"]],
        rows: [[5, 3, 3, 18, 18, 2, 2], [0, 3, 12, 21, 12]],
        rss: [[6, "M4 11a9 9 0 0 1 9 9"], [6, "M4 4a16 16 0 0 1 16 16"], [1, 5, 19, 1]],
        ruler: [[6, "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"], [6, "m14.5 12.5 2-2"], [6, "m11.5 9.5 2-2"], [6, "m8.5 6.5 2-2"], [6, "m17.5 15.5 2-2"]],
        "russian-ruble": [[6, "M6 11h8a4 4 0 0 0 0-8H9v18"], [6, "M6 15h8"]],
        sailboat: [[6, "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"], [6, "M21 14 10 2 3 14h18Z"], [6, "M10 2v16"]],
        salad: [[6, "M7 21h10"], [6, "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"], [6, "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"], [6, "m13 12 4-4"], [6, "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"]],
        sandwich: [[6, "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"], [6, "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"], [6, "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"], [6, "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"]],
        satellite: [[6, "M13 7 9 3 5 7l4 4"], [6, "m17 11 4 4-4 4-4-4"], [6, "m8 12 4 4 6-6-4-4Z"], [6, "m16 8 3-3"], [6, "M9 21a6 6 0 0 0-6-6"]],
        "satellite-dish": [[6, "M4 10a7.31 7.31 0 0 0 10 10Z"], [6, "m9 15 3-3"], [6, "M17 13a6 6 0 0 0-6-6"], [6, "M21 13A10 10 0 0 0 11 3"]],
        save: [[6, "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"], [2, "17 21 17 13 7 13 7 21"], [2, "7 3 7 8 15 8"]],
        "save-all": [[6, "M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z"], [6, "M10 2v4h6"], [6, "M18 18v-7h-8v7"], [6, "M18 22H4a2 2 0 0 1-2-2V6"]],
        scale: [[6, "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"], [6, "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"], [6, "M7 21h10"], [6, "M12 3v18"], [6, "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"]],
        "scale-3d": [[1, 19, 19, 2], [1, 5, 5, 2], [6, "M5 7v12h12"], [6, "m5 19 6-6"]],
        scaling: [[6, "M21 3 9 15"], [6, "M12 3H3v18h18v-9"], [6, "M16 3h5v5"], [6, "M14 15H9v-5"]],
        scan: [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"]],
        "scan-barcode": [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [6, "M8 7v10"], [6, "M12 7v10"], [6, "M17 7v10"]],
        "scan-eye": [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [1, 12, 12, 1], [6, "M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5"]],
        "scan-face": [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [6, "M8 14s1.5 2 4 2 4-2 4-2"], [6, "M9 9h.01"], [6, "M15 9h.01"]],
        "scan-line": [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [6, "M7 12h10"]],
        "scan-search": [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [1, 12, 12, 3], [6, "m16 16-1.9-1.9"]],
        "scan-text": [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [6, "M7 8h8"], [6, "M7 12h10"], [6, "M7 16h6"]],
        "scatter-chart": [[1, 7.5, 7.5, .5], [1, 18.5, 5.5, .5], [1, 11.5, 11.5, .5], [1, 7.5, 16.5, .5], [1, 17.5, 14.5, .5], [6, "M3 3v18h18"]],
        school: [[6, "m4 6 8-4 8 4"], [6, "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"], [6, "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"], [6, "M18 5v17"], [6, "M6 5v17"], [1, 12, 9, 2]],
        "school-2": [[1, 12, 10, 1], [6, "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"], [6, "M6 17v.01"], [6, "M6 13v.01"], [6, "M18 17v.01"], [6, "M18 13v.01"], [6, "M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"]],
        scissors: [[1, 6, 6, 3], [6, "M8.12 8.12 12 12"], [6, "M20 4 8.12 15.88"], [1, 6, 18, 3], [6, "M14.8 14.8 20 20"]],
        "scissors-line-dashed": [[6, "M5.42 9.42 8 12"], [1, 4, 8, 2], [6, "m14 6-8.58 8.58"], [1, 4, 16, 2], [6, "M10.8 14.8 14 18"], [6, "M16 12h-2"], [6, "M22 12h-2"]],
        "scissors-square": [[5, 2, 2, 20, 20, 2], [1, 8, 8, 2], [6, "M9.414 9.414 12 12"], [6, "M14.8 14.8 18 18"], [1, 8, 16, 2], [6, "m18 6-8.586 8.586"]],
        "scissors-square-dashed-bottom": [[6, "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"], [6, "M10 22H8"], [6, "M16 22h-2"], [1, 8, 8, 2], [6, "M9.414 9.414 12 12"], [6, "M14.8 14.8 18 18"], [1, 8, 16, 2], [6, "m18 6-8.586 8.586"]],
        "screen-share": [[6, "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"], [6, "M8 21h8"], [6, "M12 17v4"], [6, "m17 8 5-5"], [6, "M17 3h5v5"]],
        "screen-share-off": [[6, "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"], [6, "M8 21h8"], [6, "M12 17v4"], [6, "m22 3-5 5"], [6, "m17 3 5 5"]],
        scroll: [[6, "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"], [6, "M19 17V5a2 2 0 0 0-2-2H4"]],
        "scroll-text": [[6, "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"], [6, "M19 17V5a2 2 0 0 0-2-2H4"], [6, "M15 8h-5"], [6, "M15 12h-5"]],
        search: [[1, 11, 11, 8], [6, "m21 21-4.3-4.3"]],
        "search-check": [[6, "m8 11 2 2 4-4"], [1, 11, 11, 8], [6, "m21 21-4.3-4.3"]],
        "search-code": [[6, "m9 9-2 2 2 2"], [6, "m13 13 2-2-2-2"], [1, 11, 11, 8], [6, "m21 21-4.3-4.3"]],
        "search-slash": [[6, "m13.5 8.5-5 5"], [1, 11, 11, 8], [6, "m21 21-4.3-4.3"]],
        "search-x": [[6, "m13.5 8.5-5 5"], [6, "m8.5 8.5 5 5"], [1, 11, 11, 8], [6, "m21 21-4.3-4.3"]],
        send: [[6, "m22 2-7 20-4-9-9-4Z"], [6, "M22 2 11 13"]],
        "send-horizonal": [[6, "m3 3 3 9-3 9 19-9Z"], [6, "M6 12h16"]],
        "send-horizontal": [[6, "m3 3 3 9-3 9 19-9Z"], [6, "M6 12h16"]],
        "send-to-back": [[5, 14, 14, 8, 8, 2], [5, 2, 2, 8, 8, 2], [6, "M7 14v1a2 2 0 0 0 2 2h1"], [6, "M14 7h1a2 2 0 0 1 2 2v1"]],
        "separator-horizontal": [[0, 3, 12, 21, 12], [2, "8 8 12 4 16 8"], [2, "16 16 12 20 8 16"]],
        "separator-vertical": [[0, 12, 3, 12, 21], [2, "8 8 4 12 8 16"], [2, "16 16 20 12 16 8"]],
        server: [[5, 2, 2, 20, 8, 2, 2], [5, 2, 14, 20, 8, 2, 2], [0, 6, 6, 6.01, 6], [0, 6, 18, 6.01, 18]],
        "server-cog": [[1, 12, 12, 3], [6, "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"], [6, "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"], [6, "M6 6h.01"], [6, "M6 18h.01"], [6, "m15.7 13.4-.9-.3"], [6, "m9.2 10.9-.9-.3"], [6, "m10.6 15.7.3-.9"], [6, "m13.6 15.7-.4-1"], [6, "m10.8 9.3-.4-1"], [6, "m8.3 13.6 1-.4"], [6, "m14.7 10.8 1-.4"], [6, "m13.4 8.3-.3.9"]],
        "server-crash": [[6, "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"], [6, "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"], [6, "M6 6h.01"], [6, "M6 18h.01"], [6, "m13 6-4 6h6l-4 6"]],
        "server-off": [[6, "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"], [6, "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"], [6, "M22 17v-1a2 2 0 0 0-2-2h-1"], [6, "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"], [6, "M6 18h.01"], [6, "m2 2 20 20"]],
        settings: [[6, "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"], [1, 12, 12, 3]],
        "settings-2": [[6, "M20 7h-9"], [6, "M14 17H5"], [1, 17, 17, 3], [1, 7, 7, 3]],
        shapes: [[6, "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"], [5, 3, 14, 7, 7, 1], [1, 17.5, 17.5, 3.5]],
        share: [[6, "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"], [2, "16 6 12 2 8 6"], [0, 12, 2, 12, 15]],
        "share-2": [[1, 18, 5, 3], [1, 6, 12, 3], [1, 18, 19, 3], [0, 8.59, 13.51, 15.42, 17.49], [0, 15.41, 6.51, 8.59, 10.49]],
        sheet: [[5, 3, 3, 18, 18, 2, 2], [0, 3, 9, 21, 9], [0, 3, 15, 21, 15], [0, 9, 9, 9, 21], [0, 15, 9, 15, 21]],
        shell: [[6, "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"]],
        shield: [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"]],
        "shield-alert": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "M12 8v4"], [6, "M12 16h.01"]],
        "shield-ban": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "m4 5 14 12"]],
        "shield-check": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "m9 12 2 2 4-4"]],
        "shield-close": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "m14.5 9-5 5"], [6, "m9.5 9 5 5"]],
        "shield-ellipsis": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "M8 11h.01"], [6, "M12 11h.01"], [6, "M16 11h.01"]],
        "shield-half": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "M12 22V2"]],
        "shield-minus": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "M8 11h8"]],
        "shield-off": [[6, "M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"], [6, "m2 2 20 20"], [6, "M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38"]],
        "shield-plus": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "M8 11h8"], [6, "M12 15V7"]],
        "shield-question": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"], [6, "M12 17h.01"]],
        "shield-x": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "m14.5 9-5 5"], [6, "m9.5 9 5 5"]],
        ship: [[6, "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"], [6, "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"], [6, "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"], [6, "M12 10v4"], [6, "M12 2v3"]],
        "ship-wheel": [[1, 12, 12, 8], [6, "M12 2v7.5"], [6, "m19 5-5.23 5.23"], [6, "M22 12h-7.5"], [6, "m19 19-5.23-5.23"], [6, "M12 14.5V22"], [6, "M10.23 13.77 5 19"], [6, "M9.5 12H2"], [6, "M10.23 10.23 5 5"], [1, 12, 12, 2.5]],
        shirt: [[6, "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"]],
        "shopping-bag": [[6, "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"], [6, "M3 6h18"], [6, "M16 10a4 4 0 0 1-8 0"]],
        "shopping-basket": [[6, "m5 11 4-7"], [6, "m19 11-4-7"], [6, "M2 11h20"], [6, "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"], [6, "m9 11 1 9"], [6, "M4.5 15.5h15"], [6, "m15 11-1 9"]],
        "shopping-cart": [[1, 8, 21, 1], [1, 19, 21, 1], [6, "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"]],
        shovel: [[6, "M2 22v-5l5-5 5 5-5 5z"], [6, "M9.5 14.5 16 8"], [6, "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"]],
        "shower-head": [[6, "m4 4 2.5 2.5"], [6, "M13.5 6.5a4.95 4.95 0 0 0-7 7"], [6, "M15 5 5 15"], [6, "M14 17v.01"], [6, "M10 16v.01"], [6, "M13 13v.01"], [6, "M16 10v.01"], [6, "M11 20v.01"], [6, "M17 14v.01"], [6, "M20 11v.01"]],
        shrink: [[6, "m15 15 6 6m-6-6v4.8m0-4.8h4.8"], [6, "M9 19.8V15m0 0H4.2M9 15l-6 6"], [6, "M15 4.2V9m0 0h4.8M15 9l6-6"], [6, "M9 4.2V9m0 0H4.2M9 9 3 3"]],
        shrub: [[6, "M12 22v-7l-2-2"], [6, "M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z"], [6, "m14 14-2 2"]],
        shuffle: [[6, "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"], [6, "m18 2 4 4-4 4"], [6, "M2 6h1.9c1.5 0 2.9.9 3.6 2.2"], [6, "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"], [6, "m18 14 4 4-4 4"]],
        sidebar: [[5, 3, 3, 18, 18, 2, 2], [0, 9, 3, 9, 21]],
        "sidebar-close": [[5, 3, 3, 18, 18, 2, 2], [6, "M9 3v18"], [6, "m16 15-3-3 3-3"]],
        "sidebar-open": [[5, 3, 3, 18, 18, 2, 2], [6, "M9 3v18"], [6, "m14 9 3 3-3 3"]],
        sigma: [[6, "M18 7V4H6l6 8-6 8h12v-3"]],
        "sigma-square": [[5, 3, 3, 18, 18, 2], [6, "M16 8.9V7H8l4 5-4 5h8v-1.9"]],
        signal: [[6, "M2 20h.01"], [6, "M7 20v-4"], [6, "M12 20v-8"], [6, "M17 20V8"], [6, "M22 4v16"]],
        "signal-high": [[6, "M2 20h.01"], [6, "M7 20v-4"], [6, "M12 20v-8"], [6, "M17 20V8"]],
        "signal-low": [[6, "M2 20h.01"], [6, "M7 20v-4"]],
        "signal-medium": [[6, "M2 20h.01"], [6, "M7 20v-4"], [6, "M12 20v-8"]],
        "signal-zero": [[6, "M2 20h.01"]],
        signpost: [[6, "M12 3v3"], [6, "M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z"], [6, "M12 13v8"]],
        "signpost-big": [[6, "M10 9H4L2 7l2-2h6"], [6, "M14 5h6l2 2-2 2h-6"], [6, "M10 22V4a2 2 0 1 1 4 0v18"], [6, "M8 22h8"]],
        siren: [[6, "M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z"], [6, "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z"], [6, "M21 12h1"], [6, "M18.5 4.5 18 5"], [6, "M2 12h1"], [6, "M12 2v1"], [6, "m4.929 4.929.707.707"], [6, "M12 12v6"]],
        "skip-back": [[3, "19 20 9 12 19 4 19 20"], [0, 5, 19, 5, 5]],
        "skip-forward": [[3, "5 4 15 12 5 20 5 4"], [0, 19, 5, 19, 19]],
        skull: [[1, 9, 12, 1], [1, 15, 12, 1], [6, "M8 20v2h8v-2"], [6, "m12.5 17-.5-1-.5 1h1z"], [6, "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"]],
        slack: [[5, 13, 2, 3, 8, 1.5], [6, "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"], [5, 8, 14, 3, 8, 1.5], [6, "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"], [5, 14, 13, 8, 3, 1.5], [6, "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"], [5, 2, 8, 8, 3, 1.5], [6, "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"]],
        slash: [[6, "M22 2 2 22"]],
        slice: [[6, "m8 14-6 6h9v-3"], [6, "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z"]],
        sliders: [[0, 4, 21, 4, 14], [0, 4, 10, 4, 3], [0, 12, 21, 12, 12], [0, 12, 8, 12, 3], [0, 20, 21, 20, 16], [0, 20, 12, 20, 3], [0, 2, 14, 6, 14], [0, 10, 8, 14, 8], [0, 18, 16, 22, 16]],
        "sliders-horizontal": [[0, 21, 4, 14, 4], [0, 10, 4, 3, 4], [0, 21, 12, 12, 12], [0, 8, 12, 3, 12], [0, 21, 20, 16, 20], [0, 12, 20, 3, 20], [0, 14, 2, 14, 6], [0, 8, 10, 8, 14], [0, 16, 18, 16, 22]],
        smartphone: [[5, 5, 2, 14, 20, 2, 2], [6, "M12 18h.01"]],
        "smartphone-charging": [[5, 5, 2, 14, 20, 2, 2], [6, "M12.667 8 10 12h4l-2.667 4"]],
        "smartphone-nfc": [[5, 2, 6, 7, 12, 1], [6, "M13 8.32a7.43 7.43 0 0 1 0 7.36"], [6, "M16.46 6.21a11.76 11.76 0 0 1 0 11.58"], [6, "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"]],
        smile: [[1, 12, 12, 10], [6, "M8 14s1.5 2 4 2 4-2 4-2"], [0, 9, 9, 9.01, 9], [0, 15, 9, 15.01, 9]],
        "smile-plus": [[6, "M22 11v1a10 10 0 1 1-9-10"], [6, "M8 14s1.5 2 4 2 4-2 4-2"], [0, 9, 9, 9.01, 9], [0, 15, 9, 15.01, 9], [6, "M16 5h6"], [6, "M19 2v6"]],
        snail: [[6, "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"], [1, 10, 13, 8], [6, "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"], [6, "M18 3 19.1 5.2"], [6, "M22 3 20.9 5.2"]],
        snowflake: [[0, 2, 12, 22, 12], [0, 12, 2, 12, 22], [6, "m20 16-4-4 4-4"], [6, "m4 8 4 4-4 4"], [6, "m16 4-4 4-4-4"], [6, "m8 20 4-4 4 4"]],
        sofa: [[6, "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"], [6, "M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"], [6, "M4 18v2"], [6, "M20 18v2"], [6, "M12 4v9"]],
        "sort-asc": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [6, "M11 12h4"], [6, "M11 16h7"], [6, "M11 20h10"]],
        "sort-desc": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [6, "M11 4h10"], [6, "M11 8h7"], [6, "M11 12h4"]],
        soup: [[6, "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"], [6, "M7 21h10"], [6, "M19.5 12 22 6"], [6, "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"], [6, "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"], [6, "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"]],
        space: [[6, "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"]],
        spade: [[6, "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"], [6, "M12 18v4"]],
        sparkle: [[6, "m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"]],
        sparkles: [[6, "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"], [6, "M5 3v4"], [6, "M19 17v4"], [6, "M3 5h4"], [6, "M17 19h4"]],
        speaker: [[5, 4, 2, 16, 20, 2, 2], [1, 12, 14, 4], [0, 12, 6, 12.01, 6]],
        speech: [[6, "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"], [6, "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"], [6, "M17 15a3.5 3.5 0 0 0-.025-4.975"]],
        "spell-check": [[6, "m6 16 6-12 6 12"], [6, "M8 12h8"], [6, "m16 20 2 2 4-4"]],
        "spell-check-2": [[6, "m6 16 6-12 6 12"], [6, "M8 12h8"], [6, "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"]],
        spline: [[1, 19, 5, 2], [1, 5, 19, 2], [6, "M5 17A12 12 0 0 1 17 5"]],
        split: [[6, "M16 3h5v5"], [6, "M8 3H3v5"], [6, "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"], [6, "m15 9 6-6"]],
        "split-square-horizontal": [[6, "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"], [6, "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"], [0, 12, 4, 12, 20]],
        "split-square-vertical": [[6, "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"], [6, "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"], [0, 4, 12, 20, 12]],
        "spray-can": [[6, "M3 3h.01"], [6, "M7 5h.01"], [6, "M11 7h.01"], [6, "M3 7h.01"], [6, "M7 9h.01"], [6, "M3 11h.01"], [5, 15, 5, 4, 4], [6, "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"], [6, "m13 14 8-2"], [6, "m13 19 8-2"]],
        sprout: [[6, "M7 20h10"], [6, "M10 20c5.5-2.5.8-6.4 3-10"], [6, "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"], [6, "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"]],
        square: [[5, 3, 3, 18, 18, 2]],
        "square-asterisk": [[5, 3, 3, 18, 18, 2], [6, "M12 8v8"], [6, "m8.5 14 7-4"], [6, "m8.5 10 7 4"]],
        "square-code": [[5, 3, 3, 18, 18, 2], [6, "m10 10-2 2 2 2"], [6, "m14 14 2-2-2-2"]],
        "square-dashed-bottom": [[6, "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"], [6, "M9 21h1"], [6, "M14 21h1"]],
        "square-dashed-bottom-code": [[6, "m10 10-2 2 2 2"], [6, "m14 14 2-2-2-2"], [6, "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"], [6, "M9 21h1"], [6, "M14 21h1"]],
        "square-dot": [[5, 3, 3, 18, 18, 2], [1, 12, 12, 1]],
        "square-equal": [[5, 3, 3, 18, 18, 2], [6, "M7 10h10"], [6, "M7 14h10"]],
        "square-gantt": [[5, 3, 3, 18, 18, 2], [6, "M9 8h7"], [6, "M8 12h6"], [6, "M11 16h5"]],
        "square-kanban": [[5, 3, 3, 18, 18, 2], [6, "M8 7v7"], [6, "M12 7v4"], [6, "M16 7v9"]],
        "square-kanban-dashed": [[6, "M8 7v7"], [6, "M12 7v4"], [6, "M16 7v9"], [6, "M5 3a2 2 0 0 0-2 2"], [6, "M9 3h1"], [6, "M14 3h1"], [6, "M19 3a2 2 0 0 1 2 2"], [6, "M21 9v1"], [6, "M21 14v1"], [6, "M21 19a2 2 0 0 1-2 2"], [6, "M14 21h1"], [6, "M9 21h1"], [6, "M5 21a2 2 0 0 1-2-2"], [6, "M3 14v1"], [6, "M3 9v1"]],
        "square-slash": [[5, 3, 3, 18, 18, 2], [0, 9, 15, 15, 9]],
        "square-stack": [[6, "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"], [6, "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"], [5, 14, 14, 8, 8, 2]],
        squirrel: [[6, "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"], [6, "M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"], [6, "M15.2 22a3 3 0 0 0-2.2-5"], [6, "M18 13h.01"]],
        stamp: [[6, "M5 22h14"], [6, "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"], [6, "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"]],
        star: [[3, "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"]],
        "star-half": [[6, "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"]],
        "star-off": [[6, "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"], [6, "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"], [0, 2, 2, 22, 22]],
        stars: [[6, "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"], [6, "M5 3v4"], [6, "M19 17v4"], [6, "M3 5h4"], [6, "M17 19h4"]],
        "step-back": [[0, 18, 20, 18, 4], [3, "14,20 4,12 14,4"]],
        "step-forward": [[0, 6, 4, 6, 20], [3, "10,4 20,12 10,20"]],
        stethoscope: [[6, "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"], [6, "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"], [1, 20, 10, 2]],
        sticker: [[6, "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"], [6, "M15 3v6h6"], [6, "M10 16s.8 1 2 1c1.3 0 2-1 2-1"], [6, "M8 13h0"], [6, "M16 13h0"]],
        "sticky-note": [[6, "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"], [6, "M15 3v6h6"]],
        "stop-circle": [[1, 12, 12, 10], [5, 9, 9, 6, 6]],
        store: [[6, "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"], [6, "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"], [6, "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"], [6, "M2 7h20"], [6, "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"]],
        "stretch-horizontal": [[5, 2, 4, 20, 6, 2], [5, 2, 14, 20, 6, 2]],
        "stretch-vertical": [[5, 4, 2, 6, 20, 2], [5, 14, 2, 6, 20, 2]],
        strikethrough: [[6, "M16 4H9a3 3 0 0 0-2.83 4"], [6, "M14 12a4 4 0 0 1 0 8H6"], [0, 4, 12, 20, 12]],
        subscript: [[6, "m4 5 8 8"], [6, "m12 5-8 8"], [6, "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"]],
        subtitles: [[6, "M7 13h4"], [6, "M15 13h2"], [6, "M7 9h2"], [6, "M13 9h4"], [6, "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"]],
        sun: [[1, 12, 12, 4], [6, "M12 2v2"], [6, "M12 20v2"], [6, "m4.93 4.93 1.41 1.41"], [6, "m17.66 17.66 1.41 1.41"], [6, "M2 12h2"], [6, "M20 12h2"], [6, "m6.34 17.66-1.41 1.41"], [6, "m19.07 4.93-1.41 1.41"]],
        "sun-dim": [[1, 12, 12, 4], [6, "M12 4h.01"], [6, "M20 12h.01"], [6, "M12 20h.01"], [6, "M4 12h.01"], [6, "M17.657 6.343h.01"], [6, "M17.657 17.657h.01"], [6, "M6.343 17.657h.01"], [6, "M6.343 6.343h.01"]],
        "sun-medium": [[1, 12, 12, 4], [6, "M12 3v1"], [6, "M12 20v1"], [6, "M3 12h1"], [6, "M20 12h1"], [6, "m18.364 5.636-.707.707"], [6, "m6.343 17.657-.707.707"], [6, "m5.636 5.636.707.707"], [6, "m17.657 17.657.707.707"]],
        "sun-moon": [[6, "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"], [6, "M12 2v2"], [6, "M12 20v2"], [6, "m4.9 4.9 1.4 1.4"], [6, "m17.7 17.7 1.4 1.4"], [6, "M2 12h2"], [6, "M20 12h2"], [6, "m6.3 17.7-1.4 1.4"], [6, "m19.1 4.9-1.4 1.4"]],
        "sun-snow": [[6, "M10 9a3 3 0 1 0 0 6"], [6, "M2 12h1"], [6, "M14 21V3"], [6, "M10 4V3"], [6, "M10 21v-1"], [6, "m3.64 18.36.7-.7"], [6, "m4.34 6.34-.7-.7"], [6, "M14 12h8"], [6, "m17 4-3 3"], [6, "m14 17 3 3"], [6, "m21 15-3-3 3-3"]],
        sunrise: [[6, "M12 2v8"], [6, "m4.93 10.93 1.41 1.41"], [6, "M2 18h2"], [6, "M20 18h2"], [6, "m19.07 10.93-1.41 1.41"], [6, "M22 22H2"], [6, "m8 6 4-4 4 4"], [6, "M16 18a4 4 0 0 0-8 0"]],
        sunset: [[6, "M12 10V2"], [6, "m4.93 10.93 1.41 1.41"], [6, "M2 18h2"], [6, "M20 18h2"], [6, "m19.07 10.93-1.41 1.41"], [6, "M22 22H2"], [6, "m16 6-4 4-4-4"], [6, "M16 18a4 4 0 0 0-8 0"]],
        superscript: [[6, "m4 19 8-8"], [6, "m12 19-8-8"], [6, "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"]],
        "swiss-franc": [[6, "M10 21V3h8"], [6, "M6 16h9"], [6, "M10 9.5h7"]],
        "switch-camera": [[6, "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"], [6, "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"], [1, 12, 12, 3], [6, "m18 22-3-3 3-3"], [6, "m6 2 3 3-3 3"]],
        sword: [[2, "14.5 17.5 3 6 3 3 6 3 17.5 14.5"], [0, 13, 19, 19, 13], [0, 16, 16, 20, 20], [0, 19, 21, 21, 19]],
        swords: [[2, "14.5 17.5 3 6 3 3 6 3 17.5 14.5"], [0, 13, 19, 19, 13], [0, 16, 16, 20, 20], [0, 19, 21, 21, 19], [2, "14.5 6.5 18 3 21 3 21 6 17.5 9.5"], [0, 5, 14, 9, 18], [0, 7, 17, 4, 20], [0, 3, 19, 5, 21]],
        syringe: [[6, "m18 2 4 4"], [6, "m17 7 3-3"], [6, "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"], [6, "m9 11 4 4"], [6, "m5 19-3 3"], [6, "m14 4 6 6"]],
        table: [[6, "M12 3v18"], [5, 3, 3, 18, 18, 2], [6, "M3 9h18"], [6, "M3 15h18"]],
        "table-2": [[6, "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"]],
        "table-properties": [[6, "M15 3v18"], [5, 3, 3, 18, 18, 2], [6, "M21 9H3"], [6, "M21 15H3"]],
        tablet: [[5, 4, 2, 16, 20, 2, 2], [0, 12, 18, 12.01, 18]],
        "tablet-smartphone": [[5, 3, 8, 10, 14, 2], [6, "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"], [6, "M8 18h.01"]],
        tablets: [[1, 7, 7, 5], [1, 17, 17, 5], [6, "M12 17h10"], [6, "m3.46 10.54 7.08-7.08"]],
        tag: [[6, "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"], [6, "M7 7h.01"]],
        tags: [[6, "M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"], [6, "M6 9.01V9"], [6, "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"]],
        "tally-1": [[6, "M4 4v16"]],
        "tally-2": [[6, "M4 4v16"], [6, "M9 4v16"]],
        "tally-3": [[6, "M4 4v16"], [6, "M9 4v16"], [6, "M14 4v16"]],
        "tally-4": [[6, "M4 4v16"], [6, "M9 4v16"], [6, "M14 4v16"], [6, "M19 4v16"]],
        "tally-5": [[6, "M4 4v16"], [6, "M9 4v16"], [6, "M14 4v16"], [6, "M19 4v16"], [6, "M22 6 2 18"]],
        tangent: [[1, 17, 4, 2], [6, "M15.59 5.41 5.41 15.59"], [1, 4, 17, 2], [6, "M12 22s-4-9-1.5-11.5S22 12 22 12"]],
        target: [[1, 12, 12, 10], [1, 12, 12, 6], [1, 12, 12, 2]],
        tent: [[6, "M3.5 21 14 3"], [6, "M20.5 21 10 3"], [6, "M15.5 21 12 15l-3.5 6"], [6, "M2 21h20"]],
        "tent-tree": [[1, 4, 4, 2], [6, "m14 5 3-3 3 3"], [6, "m14 10 3-3 3 3"], [6, "M17 14V2"], [6, "M17 14H7l-5 8h20Z"], [6, "M8 14v8"], [6, "m9 14 5 8"]],
        terminal: [[2, "4 17 10 11 4 5"], [0, 12, 19, 20, 19]],
        "terminal-square": [[6, "m7 11 2-2-2-2"], [6, "M11 13h4"], [5, 3, 3, 18, 18, 2, 2]],
        "test-tube": [[6, "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"], [6, "M8.5 2h7"], [6, "M14.5 16h-5"]],
        "test-tube-2": [[6, "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3"], [6, "m16 2 6 6"], [6, "M12 16H4"]],
        "test-tubes": [[6, "M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2"], [6, "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2"], [6, "M3 2h7"], [6, "M14 2h7"], [6, "M9 16H4"], [6, "M20 16h-5"]],
        text: [[6, "M17 6.1H3"], [6, "M21 12.1H3"], [6, "M15.1 18H3"]],
        "text-cursor": [[6, "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"], [6, "M7 22h1a4 4 0 0 0 4-4v-1"], [6, "M7 2h1a4 4 0 0 1 4 4v1"]],
        "text-cursor-input": [[6, "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"], [6, "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"], [6, "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"], [6, "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"], [6, "M9 7v10"]],
        "text-quote": [[6, "M17 6H3"], [6, "M21 12H8"], [6, "M21 18H8"], [6, "M3 12v6"]],
        "text-select": [[6, "M5 3a2 2 0 0 0-2 2"], [6, "M19 3a2 2 0 0 1 2 2"], [6, "M21 19a2 2 0 0 1-2 2"], [6, "M5 21a2 2 0 0 1-2-2"], [6, "M9 3h1"], [6, "M9 21h1"], [6, "M14 3h1"], [6, "M14 21h1"], [6, "M3 9v1"], [6, "M21 9v1"], [6, "M3 14v1"], [6, "M21 14v1"], [0, 7, 8, 15, 8], [0, 7, 12, 17, 12], [0, 7, 16, 13, 16]],
        "text-selection": [[6, "M5 3a2 2 0 0 0-2 2"], [6, "M19 3a2 2 0 0 1 2 2"], [6, "M21 19a2 2 0 0 1-2 2"], [6, "M5 21a2 2 0 0 1-2-2"], [6, "M9 3h1"], [6, "M9 21h1"], [6, "M14 3h1"], [6, "M14 21h1"], [6, "M3 9v1"], [6, "M21 9v1"], [6, "M3 14v1"], [6, "M21 14v1"], [0, 7, 8, 15, 8], [0, 7, 12, 17, 12], [0, 7, 16, 13, 16]],
        theater: [[6, "M2 10s3-3 3-8"], [6, "M22 10s-3-3-3-8"], [6, "M10 2c0 4.4-3.6 8-8 8"], [6, "M14 2c0 4.4 3.6 8 8 8"], [6, "M2 10s2 2 2 5"], [6, "M22 10s-2 2-2 5"], [6, "M8 15h8"], [6, "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"], [6, "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"]],
        thermometer: [[6, "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"]],
        "thermometer-snowflake": [[6, "M2 12h10"], [6, "M9 4v16"], [6, "m3 9 3 3-3 3"], [6, "M12 6 9 9 6 6"], [6, "m6 18 3-3 1.5 1.5"], [6, "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"]],
        "thermometer-sun": [[6, "M12 9a4 4 0 0 0-2 7.5"], [6, "M12 3v2"], [6, "m6.6 18.4-1.4 1.4"], [6, "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"], [6, "M4 13H2"], [6, "M6.34 7.34 4.93 5.93"]],
        "thumbs-down": [[6, "M17 14V2"], [6, "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"]],
        "thumbs-up": [[6, "M7 10v12"], [6, "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"]],
        ticket: [[6, "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"], [6, "M13 5v2"], [6, "M13 17v2"], [6, "M13 11v2"]],
        timer: [[0, 10, 2, 14, 2], [0, 12, 14, 15, 11], [1, 12, 14, 8]],
        "timer-off": [[6, "M10 2h4"], [6, "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"], [6, "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"], [6, "m2 2 20 20"], [6, "M12 12v-2"]],
        "timer-reset": [[6, "M10 2h4"], [6, "M12 14v-4"], [6, "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"], [6, "M9 17H4v5"]],
        "toggle-left": [[5, 2, 6, 20, 12, 6, 6], [1, 8, 12, 2]],
        "toggle-right": [[5, 2, 6, 20, 12, 6, 6], [1, 16, 12, 2]],
        tornado: [[6, "M21 4H3"], [6, "M18 8H6"], [6, "M19 12H9"], [6, "M16 16h-6"], [6, "M11 20H9"]],
        torus: [[4, 12, 11, 3, 2], [4, 12, 12.5, 10, 8.5]],
        touchpad: [[5, 2, 4, 20, 16, 2], [6, "M2 14h20"], [6, "M12 20v-6"]],
        "touchpad-off": [[6, "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"], [6, "M2 14h12"], [6, "M22 14h-2"], [6, "M12 20v-6"], [6, "m2 2 20 20"], [6, "M22 16V6a2 2 0 0 0-2-2H10"]],
        "tower-control": [[6, "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"], [6, "M8 13v9"], [6, "M16 22v-9"], [6, "m9 6 1 7"], [6, "m15 6-1 7"], [6, "M12 6V2"], [6, "M13 2h-2"]],
        "toy-brick": [[5, 3, 8, 18, 12, 1], [6, "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"], [6, "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"]],
        tractor: [[6, "M3 4h9l1 7"], [6, "M4 11V4"], [6, "M8 10V4"], [6, "M18 5c-.6 0-1 .4-1 1v5.6"], [6, "m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1"], [1, 7, 15, .5], [1, 7, 15, 5], [6, "M16 18h-5"], [1, 18, 18, 2]],
        "traffic-cone": [[6, "M9.3 6.2a4.55 4.55 0 0 0 5.4 0"], [6, "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"], [6, "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"], [6, "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"]],
        train: [[5, 4, 3, 16, 16, 2], [6, "M4 11h16"], [6, "M12 3v8"], [6, "m8 19-2 3"], [6, "m18 22-2-3"], [6, "M8 15h0"], [6, "M16 15h0"]],
        "train-front": [[6, "M8 3.1V7a4 4 0 0 0 8 0V3.1"], [6, "m9 15-1-1"], [6, "m15 15 1-1"], [6, "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"], [6, "m8 19-2 3"], [6, "m16 19 2 3"]],
        "train-front-tunnel": [[6, "M2 22V12a10 10 0 1 1 20 0v10"], [6, "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"], [6, "M10 15h.01"], [6, "M14 15h.01"], [6, "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"], [6, "m9 19-2 3"], [6, "m15 19 2 3"]],
        "train-track": [[6, "M2 17 17 2"], [6, "m2 14 8 8"], [6, "m5 11 8 8"], [6, "m8 8 8 8"], [6, "m11 5 8 8"], [6, "m14 2 8 8"], [6, "M7 22 22 7"]],
        "tram-front": [[5, 4, 3, 16, 16, 2], [6, "M4 11h16"], [6, "M12 3v8"], [6, "m8 19-2 3"], [6, "m18 22-2-3"], [6, "M8 15h0"], [6, "M16 15h0"]],
        trash: [[6, "M3 6h18"], [6, "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"], [6, "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"]],
        "trash-2": [[6, "M3 6h18"], [6, "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"], [6, "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"], [0, 10, 11, 10, 17], [0, 14, 11, 14, 17]],
        "tree-deciduous": [[6, "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"], [6, "M12 19v3"]],
        "tree-pine": [[6, "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"], [6, "M12 22v-3"]],
        trees: [[6, "M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"], [6, "M7 16v6"], [6, "M13 19v3"], [6, "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"]],
        trello: [[5, 3, 3, 18, 18, 2, 2], [5, 7, 7, 3, 9], [5, 14, 7, 3, 5]],
        "trending-down": [[2, "22 17 13.5 8.5 8.5 13.5 2 7"], [2, "16 17 22 17 22 11"]],
        "trending-up": [[2, "22 7 13.5 15.5 8.5 10.5 2 17"], [2, "16 7 22 7 22 13"]],
        triangle: [[6, "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"]],
        "triangle-right": [[6, "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"]],
        trophy: [[6, "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"], [6, "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"], [6, "M4 22h16"], [6, "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"], [6, "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"], [6, "M18 2H6v7a6 6 0 0 0 12 0V2Z"]],
        truck: [[6, "M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"], [6, "M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"], [1, 7, 18, 2], [6, "M15 18H9"], [1, 17, 18, 2]],
        turtle: [[6, "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"], [6, "M4.82 7.9 8 10"], [6, "M15.18 7.9 12 10"], [6, "M16.93 10H20a2 2 0 0 1 0 4H2"]],
        tv: [[5, 2, 7, 20, 15, 2, 2], [2, "17 2 12 7 7 2"]],
        "tv-2": [[6, "M7 21h10"], [5, 2, 3, 20, 14, 2]],
        twitch: [[6, "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"]],
        twitter: [[6, "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"]],
        type: [[2, "4 7 4 4 20 4 20 7"], [0, 9, 20, 15, 20], [0, 12, 4, 12, 20]],
        umbrella: [[6, "M22 12a10.06 10.06 1 0 0-20 0Z"], [6, "M12 12v8a2 2 0 0 0 4 0"], [6, "M12 2v1"]],
        "umbrella-off": [[6, "M12 2v1"], [6, "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"], [6, "M17.5 12H22A10 10 0 0 0 9.004 3.455"], [6, "m2 2 20 20"]],
        underline: [[6, "M6 4v6a6 6 0 0 0 12 0V4"], [0, 4, 20, 20, 20]],
        undo: [[6, "M3 7v6h6"], [6, "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"]],
        "undo-2": [[6, "M9 14 4 9l5-5"], [6, "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"]],
        "undo-dot": [[1, 12, 17, 1], [6, "M3 7v6h6"], [6, "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"]],
        "unfold-horizontal": [[6, "M16 12h6"], [6, "M8 12H2"], [6, "M12 2v2"], [6, "M12 8v2"], [6, "M12 14v2"], [6, "M12 20v2"], [6, "m19 15 3-3-3-3"], [6, "m5 9-3 3 3 3"]],
        "unfold-vertical": [[6, "M12 22v-6"], [6, "M12 8V2"], [6, "M4 12H2"], [6, "M10 12H8"], [6, "M16 12h-2"], [6, "M22 12h-2"], [6, "m15 19-3 3-3-3"], [6, "m15 5-3-3-3 3"]],
        ungroup: [[5, 5, 4, 8, 6, 1], [5, 11, 14, 8, 6, 1]],
        unlink: [[6, "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"], [6, "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"], [0, 8, 2, 8, 5], [0, 2, 8, 5, 8], [0, 16, 19, 16, 22], [0, 19, 16, 22, 16]],
        "unlink-2": [[6, "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"]],
        unlock: [[5, 3, 11, 18, 11, 2, 2], [6, "M7 11V7a5 5 0 0 1 9.9-1"]],
        "unlock-keyhole": [[1, 12, 16, 1], [5, 3, 10, 18, 12, 2], [6, "M7 10V7a5 5 0 0 1 9.33-2.5"]],
        unplug: [[6, "m19 5 3-3"], [6, "m2 22 3-3"], [6, "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"], [6, "M7.5 13.5 10 11"], [6, "M10.5 16.5 13 14"], [6, "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"]],
        upload: [[6, "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], [2, "17 8 12 3 7 8"], [0, 12, 3, 12, 15]],
        "upload-cloud": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M12 12v9"], [6, "m16 16-4-4-4 4"]],
        usb: [[1, 10, 7, 1], [1, 4, 20, 1], [6, "M4.7 19.3 19 5"], [6, "m21 3-3 1 2 2Z"], [6, "M9.26 7.68 5 12l2 5"], [6, "m10 14 5 2 3.5-3.5"], [6, "m18 12 1-1 1 1-1 1Z"]],
        user: [[6, "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"], [1, 12, 7, 4]],
        "user-2": [[1, 12, 8, 5], [6, "M20 21a8 8 0 1 0-16 0"]],
        "user-check": [[6, "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], [1, 9, 7, 4], [2, "16 11 18 13 22 9"]],
        "user-check-2": [[6, "M14 19a6 6 0 0 0-12 0"], [1, 8, 9, 4], [2, "16 11 18 13 22 9"]],
        "user-circle": [[1, 12, 12, 10], [1, 12, 10, 3], [6, "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"]],
        "user-circle-2": [[6, "M18 20a6 6 0 0 0-12 0"], [1, 12, 10, 4], [1, 12, 12, 10]],
        "user-cog": [[1, 18, 15, 3], [1, 9, 7, 4], [6, "M10 15H6a4 4 0 0 0-4 4v2"], [6, "m21.7 16.4-.9-.3"], [6, "m15.2 13.9-.9-.3"], [6, "m16.6 18.7.3-.9"], [6, "m19.1 12.2.3-.9"], [6, "m19.6 18.7-.4-1"], [6, "m16.8 12.3-.4-1"], [6, "m14.3 16.6 1-.4"], [6, "m20.7 13.8 1-.4"]],
        "user-cog-2": [[1, 18, 15, 3], [1, 8, 9, 4], [6, "M10.5 13.5A6 6 0 0 0 2 19"], [6, "m21.7 16.4-.9-.3"], [6, "m15.2 13.9-.9-.3"], [6, "m16.6 18.7.3-.9"], [6, "m19.1 12.2.3-.9"], [6, "m19.6 18.7-.4-1"], [6, "m16.8 12.3-.4-1"], [6, "m14.3 16.6 1-.4"], [6, "m20.7 13.8 1-.4"]],
        "user-minus": [[6, "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], [1, 9, 7, 4], [0, 22, 11, 16, 11]],
        "user-minus-2": [[6, "M14 19a6 6 0 0 0-12 0"], [1, 8, 9, 4], [0, 22, 11, 16, 11]],
        "user-plus": [[6, "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], [1, 9, 7, 4], [0, 19, 8, 19, 14], [0, 22, 11, 16, 11]],
        "user-plus-2": [[6, "M14 19a6 6 0 0 0-12 0"], [1, 8, 9, 4], [0, 19, 8, 19, 14], [0, 22, 11, 16, 11]],
        "user-square": [[5, 3, 3, 18, 18, 2], [1, 12, 10, 3], [6, "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"]],
        "user-square-2": [[6, "M18 21a6 6 0 0 0-12 0"], [1, 12, 11, 4], [5, 3, 3, 18, 18, 2]],
        "user-x": [[6, "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], [1, 9, 7, 4], [0, 17, 8, 22, 13], [0, 22, 8, 17, 13]],
        "user-x2": [[6, "M14 19a6 6 0 0 0-12 0"], [1, 8, 9, 4], [0, 17, 8, 22, 13], [0, 22, 8, 17, 13]],
        users: [[6, "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], [1, 9, 7, 4], [6, "M22 21v-2a4 4 0 0 0-3-3.87"], [6, "M16 3.13a4 4 0 0 1 0 7.75"]],
        "users-2": [[6, "M14 19a6 6 0 0 0-12 0"], [1, 8, 9, 4], [6, "M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"]],
        utensils: [[6, "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"], [6, "M7 2v20"], [6, "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"]],
        "utensils-crossed": [[6, "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"], [6, "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"], [6, "m2.1 21.8 6.4-6.3"], [6, "m19 5-7 7"]],
        "utility-pole": [[6, "M12 2v20"], [6, "M2 5h20"], [6, "M3 3v2"], [6, "M7 3v2"], [6, "M17 3v2"], [6, "M21 3v2"], [6, "m19 5-7 7-7-7"]],
        variable: [[6, "M8 21s-4-3-4-9 4-9 4-9"], [6, "M16 3s4 3 4 9-4 9-4 9"], [0, 15, 9, 9, 15], [0, 9, 9, 15, 15]],
        vegan: [[6, "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"], [6, "M16 8c4 0 6-2 6-6-4 0-6 2-6 6"], [6, "M17.41 3.6a10 10 0 1 0 3 3"]],
        "venetian-mask": [[6, "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"], [6, "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"], [6, "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"]],
        verified: [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "m9 12 2 2 4-4"]],
        vibrate: [[6, "m2 8 2 2-2 2 2 2-2 2"], [6, "m22 8-2 2 2 2-2 2 2 2"], [5, 8, 5, 8, 14, 1]],
        "vibrate-off": [[6, "m2 8 2 2-2 2 2 2-2 2"], [6, "m22 8-2 2 2 2-2 2 2 2"], [6, "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"], [6, "M16 10.34V6c0-.55-.45-1-1-1h-4.34"], [0, 2, 2, 22, 22]],
        video: [[6, "m22 8-6 4 6 4V8Z"], [5, 2, 6, 14, 12, 2, 2]],
        "video-off": [[6, "M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8"], [6, "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z"], [0, 2, 2, 22, 22]],
        videotape: [[5, 2, 4, 20, 16, 2], [6, "M2 8h20"], [1, 8, 14, 2], [6, "M8 12h8"], [1, 16, 14, 2]],
        view: [[6, "M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"], [6, "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"], [6, "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"], [6, "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"]],
        voicemail: [[1, 6, 12, 4], [1, 18, 12, 4], [0, 6, 16, 18, 16]],
        volume: [[3, "11 5 6 9 2 9 2 15 6 15 11 19 11 5"]],
        "volume-1": [[3, "11 5 6 9 2 9 2 15 6 15 11 19 11 5"], [6, "M15.54 8.46a5 5 0 0 1 0 7.07"]],
        "volume-2": [[3, "11 5 6 9 2 9 2 15 6 15 11 19 11 5"], [6, "M15.54 8.46a5 5 0 0 1 0 7.07"], [6, "M19.07 4.93a10 10 0 0 1 0 14.14"]],
        "volume-x": [[3, "11 5 6 9 2 9 2 15 6 15 11 19 11 5"], [0, 22, 9, 16, 15], [0, 16, 9, 22, 15]],
        vote: [[6, "m9 12 2 2 4-4"], [6, "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"], [6, "M22 19H2"]],
        wallet: [[6, "M21 12V7H5a2 2 0 0 1 0-4h14v4"], [6, "M3 5v14a2 2 0 0 0 2 2h16v-5"], [6, "M18 12a2 2 0 0 0 0 4h4v-4Z"]],
        "wallet-2": [[6, "M17 14h.01"], [6, "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"]],
        "wallet-cards": [[5, 3, 3, 18, 18, 2], [6, "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"], [6, "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"]],
        wallpaper: [[1, 8, 9, 2], [6, "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"], [6, "M8 21h8"], [6, "M12 17v4"]],
        wand: [[6, "M15 4V2"], [6, "M15 16v-2"], [6, "M8 9h2"], [6, "M20 9h2"], [6, "M17.8 11.8 19 13"], [6, "M15 9h0"], [6, "M17.8 6.2 19 5"], [6, "m3 21 9-9"], [6, "M12.2 6.2 11 5"]],
        "wand-2": [[6, "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"], [6, "m14 7 3 3"], [6, "M5 6v4"], [6, "M19 14v4"], [6, "M10 2v2"], [6, "M7 8H3"], [6, "M21 16h-4"], [6, "M11 3H9"]],
        warehouse: [[6, "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"], [6, "M6 18h12"], [6, "M6 14h12"], [5, 6, 10, 12, 12]],
        watch: [[1, 12, 12, 6], [2, "12 10 12 12 13 13"], [6, "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"], [6, "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"]],
        waves: [[6, "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"], [6, "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"], [6, "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"]],
        waypoints: [[1, 12, 4.5, 2.5], [6, "m10.2 6.3-3.9 3.9"], [1, 4.5, 12, 2.5], [6, "M7 12h10"], [1, 19.5, 12, 2.5], [6, "m13.8 17.7 3.9-3.9"], [1, 12, 19.5, 2.5]],
        webcam: [[1, 12, 10, 8], [1, 12, 10, 3], [6, "M7 22h10"], [6, "M12 22v-4"]],
        webhook: [[6, "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"], [6, "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"], [6, "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"]],
        weight: [[1, 12, 5, 3], [6, "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"]],
        wheat: [[6, "M2 22 16 8"], [6, "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"], [6, "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"], [6, "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"], [6, "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"], [6, "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"], [6, "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"], [6, "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"]],
        "wheat-off": [[6, "m2 22 10-10"], [6, "m16 8-1.17 1.17"], [6, "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"], [6, "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"], [6, "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"], [6, "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"], [6, "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"], [6, "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"], [6, "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"], [0, 2, 2, 22, 22]],
        "whole-word": [[1, 7, 12, 3], [6, "M10 9v6"], [1, 17, 12, 3], [6, "M14 7v8"], [6, "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"]],
        wifi: [[6, "M5 13a10 10 0 0 1 14 0"], [6, "M8.5 16.5a5 5 0 0 1 7 0"], [6, "M2 8.82a15 15 0 0 1 20 0"], [0, 12, 20, 12.01, 20]],
        "wifi-off": [[0, 2, 2, 22, 22], [6, "M8.5 16.5a5 5 0 0 1 7 0"], [6, "M2 8.82a15 15 0 0 1 4.17-2.65"], [6, "M10.66 5c4.01-.36 8.14.9 11.34 3.76"], [6, "M16.85 11.25a10 10 0 0 1 2.22 1.68"], [6, "M5 13a10 10 0 0 1 5.24-2.76"], [0, 12, 20, 12.01, 20]],
        wind: [[6, "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"], [6, "M9.6 4.6A2 2 0 1 1 11 8H2"], [6, "M12.6 19.4A2 2 0 1 0 14 16H2"]],
        wine: [[6, "M8 22h8"], [6, "M7 10h10"], [6, "M12 15v7"], [6, "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"]],
        "wine-off": [[6, "M8 22h8"], [6, "M7 10h3m7 0h-1.343"], [6, "M12 15v7"], [6, "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"], [0, 2, 2, 22, 22]],
        workflow: [[5, 3, 3, 8, 8, 2], [6, "M7 11v4a2 2 0 0 0 2 2h4"], [5, 13, 13, 8, 8, 2]],
        "wrap-text": [[0, 3, 6, 21, 6], [6, "M3 12h15a3 3 0 1 1 0 6h-4"], [2, "16 16 14 18 16 20"], [0, 3, 18, 10, 18]],
        wrench: [[6, "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"]],
        x: [[6, "M18 6 6 18"], [6, "m6 6 12 12"]],
        "x-circle": [[1, 12, 12, 10], [6, "m15 9-6 6"], [6, "m9 9 6 6"]],
        "x-octagon": [[3, "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"], [6, "m15 9-6 6"], [6, "m9 9 6 6"]],
        "x-square": [[5, 3, 3, 18, 18, 2, 2], [6, "m15 9-6 6"], [6, "m9 9 6 6"]],
        youtube: [[6, "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"], [6, "m10 15 5-3-5-3z"]],
        zap: [[3, "13 2 3 14 12 14 11 22 21 10 12 10 13 2"]],
        "zap-off": [[2, "12.41 6.75 13 2 10.57 4.92"], [2, "18.57 12.91 21 10 15.66 10"], [2, "8 8 3 14 12 14 11 22 16 16"], [0, 2, 2, 22, 22]],
        "zoom-in": [[1, 11, 11, 8], [0, 21, 21, 16.65, 16.65], [0, 11, 8, 11, 14], [0, 8, 11, 14, 11]],
        "zoom-out": [[1, 11, 11, 8], [0, 21, 21, 16.65, 16.65], [0, 8, 11, 14, 11]]
    };
    var ge = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    };

    function ye(e, t) {
        var a = document.createElementNS("http://www.w3.org/2000/svg", e);
        return Object.keys(t).forEach((function (e) {
            a.setAttribute(e, t[e])
        })), a
    }

    function Ve(e) {
        var t = e[0];
        if (0 === t) return ye("line", {x1: e[1], y1: e[2], x2: e[3], y2: e[4]});
        if (1 === t) return ye("circle", {cx: e[1], cy: e[2], r: e[3]});
        if (2 === t) return ye("polyline", {points: e[1]});
        if (3 === t) return ye("polygon", {points: e[1]});
        if (4 === t) return ye("ellipse", {cx: e[1], cy: e[2], rx: e[3], ry: e[4]});
        if (5 === t) {
            var a = {x: e[1], y: e[2], width: e[3], height: e[4]};
            return e[5] && (a.rx = e[5]), e[6] && (a.ry = e[6]), e[7] && (a.transform = e[7]), ye("rect", a)
        }
        return 6 === t ? ye("path", {d: e[1]}) : void 0
    }

    function He(e) {
        for (var t = ye("svg", ge), a = 0, n = e; a < n.length; a++) {
            var r = n[a];
            t.appendChild(Ve(r))
        }
        return t
    }

    var be = {
        "create-new": "edit",
        trash: "trash-2",
        search: "search",
        "right-triangle": "right-triangle",
        document: "file",
        folder: "folder-open",
        pencil: "edit-3",
        "left-arrow": "chevron-left",
        "right-arrow": "chevron-right",
        "three-horizontal-bars": "menu",
        "dot-network": "git-fork",
        "audio-file": "file-audio",
        "image-file": "image",
        "pdf-file": "file-text",
        gear: "settings",
        documents: "files",
        blocks: "layout-list",
        "go-to-file": "file-input",
        presentation: "monitor",
        "cross-in-box": "x-square",
        microphone: "mic",
        "microphone-filled": "mic",
        "two-columns": "columns",
        link: "link",
        "popup-open": "arrow-up-right",
        checkmark: "check",
        hashtag: "hash",
        "left-arrow-with-tail": "arrow-left",
        "right-arrow-with-tail": "arrow-right",
        "up-arrow-with-tail": "arrow-up",
        "down-arrow-with-tail": "arrow-down",
        "lines-of-text": "align-left",
        "vertical-three-dots": "more-vertical",
        pin: "pin",
        "magnifying-glass": "search",
        info: "info",
        "horizontal-split": "separator-horizontal",
        "vertical-split": "separator-vertical",
        "calendar-with-checkmark": "calendar-check",
        "folder-minus": "folder-minus",
        "sheets-in-box": "sheets-in-box",
        "up-and-down-arrows": "move-vertical",
        "broken-link": "unlink",
        cross: "x",
        "any-key": "plus-circle",
        reset: "rotate-ccw",
        star: "star",
        "crossed-star": "star-off",
        dice: "dice",
        "filled-pin": "pin",
        enter: "log-in",
        help: "help",
        vault: "vault",
        "open-vault": "open-vault",
        "paper-plane": "send",
        "bullet-list": "list",
        "uppercase-lowercase-a": "uppercase-lowercase-a",
        "star-list": "star-list",
        "expand-vertically": "move-vertical",
        languages: "languages",
        switch: "repeat",
        "pane-layout": "layout",
        install: "download-cloud",
        sync: "refresh-cw",
        "check-in-circle": "check-circle-2",
        "sync-small": "sync-small",
        "check-small": "check-small",
        paused: "paused",
        "forward-arrow": "forward",
        "stacked-levels": "folder-tree",
        "bracket-glyph": "bracket-glyph",
        "note-glyph": "sticky-note",
        "tag-glyph": "tag",
        "price-tag-glyph": "tag",
        "heading-glyph": "heading-glyph",
        "bold-glyph": "bold",
        "italic-glyph": "italic",
        "strikethrough-glyph": "strikethrough",
        "highlight-glyph": "highlighter",
        "code-glyph": "code-2",
        "quote-glyph": "quote",
        "link-glyph": "link",
        "bullet-list-glyph": "list",
        "number-list-glyph": "list-ordered",
        "checkbox-glyph": "check-square",
        "undo-glyph": "undo-2",
        "redo-glyph": "redo-2",
        "up-chevron-glyph": "chevron-up",
        "down-chevron-glyph": "chevron-down",
        "left-chevron-glyph": "chevron-left",
        "right-chevron-glyph": "chevron-right",
        "percent-sign-glyph": "percent",
        "keyboard-glyph": "keyboard",
        "double-up-arrow-glyph": "chevrons-up",
        "double-down-arrow-glyph": "chevrons-down",
        "image-glyph": "paperclip",
        "wrench-screwdriver-glyph": "wrench",
        clock: "clock",
        "plus-with-circle": "plus-circle",
        "minus-with-circle": "minus-circle",
        "indent-glyph": "indent",
        "unindent-glyph": "outdent",
        fullscreen: "maximize",
        "exit-fullscreen": "minimize",
        cloud: "cloud",
        "run-command": "terminal",
        "compress-glyph": "minimize-2",
        "enlarge-glyph": "maximize-2",
        "scissors-glyph": "scissors",
        "up-curly-arrow-glyph": "corner-right-up",
        "down-curly-arrow-glyph": "corner-right-down",
        "plus-minus-glyph": "diff",
        "links-going-out": "links-going-out",
        "links-coming-in": "links-coming-in",
        "add-note-glyph": "file-plus",
        "duplicate-glyph": "copy",
        "clock-glyph": "clock",
        "calendar-glyph": "calendar-days",
        "command-glyph": "terminal-square",
        "dice-glyph": "dice-glyph",
        "file-explorer-glyph": "files",
        "graph-glyph": "git-fork",
        "import-glyph": "download",
        "navigate-glyph": "navigation",
        "open-elsewhere-glyph": "arrow-up-right",
        "presentation-glyph": "monitor",
        "paper-plane-glyph": "send",
        "question-mark-glyph": "question-mark-glyph",
        "restore-file-glyph": "rotate-ccw",
        "search-glyph": "search",
        "star-glyph": "star",
        "play-audio-glyph": "play-circle",
        "stop-audio-glyph": "stop-circle",
        "tomorrow-glyph": "calendar-plus",
        "wand-glyph": "wand",
        "workspace-glyph": "layout",
        "yesterday-glyph": "calendar-minus",
        "box-glyph": "box-glyph",
        "merge-files-glyph": "git-merge",
        "merge-files": "git-merge",
        "two-blank-pages": "copy",
        scissors: "scissors",
        paste: "clipboard-check",
        "paste-text": "clipboard-type",
        split: "git-branch-plus",
        "select-all-text": "box-select",
        wand: "wand-2",
        "github-glyph": "file-code",
        "reading-glasses": "glasses",
        "user-manual-filled": "book-open",
        "discord-filled": "discord",
        "chat-bubbles-filled": "message-circle",
        "experiment-filled": "experiment"
    }, we = {
        "refresh-cw-off": '<path d="M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"/><path d="M8 16H3v5"/><path d="M3 12C3 9.51 4 7.26 5.64 5.64"/><path d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"/><path d="M21 12c0 1-.16 1.97-.47 2.87"/><path d="M21 3v5h-5"/><path d="M22 22 2 2"/>',
        "bracket-glyph": '<path d="M9 21C7.89336 21 5 21 5 21C5 21 5 6.79076 5 3C5 3 8.21882 3.00004 9 3.00004"/><path d="M15 2.99996C16.1066 2.99996 19 2.99996 19 2.99996C19 2.99996 19 17.2092 19 21C19 21 15.7812 21 15 21"/>',
        "box-glyph": '<path d="M21 13V12.5714C21 11.8964 20.8189 11 19.7143 11L4.28571 11C3.18114 11 3 11.8964 3 12.5714V20.4286C3 21.1036 3.18114 22 4.28571 22H14"/><path d="M21 4.14286C21 3.65194 20.8189 3 19.7143 3L4.28571 3C3.18114 3 3 3.65194 3 4.14286"/><path d="M21 8.14286C21 7.65194 20.8189 7 19.7143 7L4.28571 7C3.18114 7 3 7.65194 3 8.14286"/><path d="M19 16V22"/><path d="M16 19H22"/>',
        "check-small": '<path d="M12 21C16.9707 21 21 16.9707 21 12C21 7.0293 16.9707 3 12 3C7.0293 3 3 7.0293 3 12C3 16.9707 7.0293 21 12 21Z"/><path d="M7.5 12.5L10.5 15.5L16 10"/>',
        "dice-glyph": '<path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"/><path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z"/><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"/><path d="M9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z"/>',
        dice: '<path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"/><path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z"/><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"/><path d="M9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z"/>',
        discord: '<path d="M8.795 17.0865C8.34168 17.7478 7.8561 18.3864 7.34 19C3.65 18.895 2.25 16.5 2.25 16.5C2.30245 13.1065 3.12479 9.7693 4.655 6.74C6.00009 5.68771 7.63906 5.07965 9.345 5L9.845 6.155C10.5591 6.05585 11.279 6.00407 12 6C12.7242 6.00238 13.4474 6.05249 14.165 6.15L14.665 4.995C16.3726 5.07897 18.0117 5.69233 19.355 6.75C20.8803 9.7771 21.6991 13.1107 21.75 16.5C21.75 16.5 20.35 18.895 16.66 19C16.1517 18.3894 15.6744 17.7536 15.23 17.095M18.46 15.645C16.54 16.6175 14.682 17.59 12 17.59C9.318 17.59 7.46 16.6175 5.54 15.645" /><path d="M9.25 13.5C9.66421 13.5 10 12.9404 10 12.25C10 11.5596 9.66421 11 9.25 11C8.83579 11 8.5 11.5596 8.5 12.25C8.5 12.9404 8.83579 13.5 9.25 13.5Z" /><path d="M14.75 13.5C15.1642 13.5 15.5 12.9404 15.5 12.25C15.5 11.5596 15.1642 11 14.75 11C14.3358 11 14 11.5596 14 12.25C14 12.9404 14.3358 13.5 14.75 13.5Z" />',
        "right-triangle": '<path d="M3 8L12 17L21 8"/>',
        "heading-glyph": '<path d="M9 4H4"/><path d="M20 4H15"/><path d="M20 20H15"/><path d="M9 20H4"/><path d="M18 12L6 12"/><path d="M6 20L6 4"/><path d="M18 20L18 4"/>',
        help: '<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M9.09009 9.00003C9.32519 8.33169 9.78924 7.76813 10.4 7.40916C11.0108 7.05019 12.079 6.94542 12.7773 7.06519C13.9093 7.25935 14.9767 8.25497 14.9748 9.49073C14.9748 11.9908 12 11.2974 12 14"/><path d="M12 17H12.01"/>',
        "keyboard-toggle": '<path d="M20 3H4C2.89543 3 2 3.89543 2 5V13C2 14.1046 2.89543 15 4 15H20C21.1046 15 22 14.1046 22 13V5C22 3.89543 21.1046 3 20 3Z"/><path d="M6 7H6.001"/><path d="M10 7H10.001"/><path d="M14 7H14.001"/><path d="M18 7H18.001"/><path d="M6 11H6.001"/><path d="M18 11H18.001"/><path d="M10 11H14"/><path d="M7 19L12 21L17 19"/>',
        "broken-link": '<path d="M12 18.26L10.4886 19.7786L10.4886 19.761C9.64543 20.5738 8.51382 21.0192 7.34221 20.9994C6.17061 20.9795 5.05478 20.496 4.23971 19.655C3.44441 18.8312 3 17.7313 3 16.5868C3 15.4423 3.44441 14.3425 4.23971 13.5186L5.75111 12"/><path d="M12 5.75153L13.5114 4.24023C14.3546 3.42658 15.4862 2.98075 16.6578 3.00064C17.8294 3.02052 18.9452 3.50449 19.7603 4.34629C20.5556 5.17092 21 6.27188 21 7.4175C21 8.56311 20.5556 9.66407 19.7603 10.4887L18.2489 12"/><path d="M3 8L6 8"/><path d="M8 3L8 6"/><path d="M18 16L21 16"/><path d="M16 18L16 21"/>',
        experiment: '<path d="M9.18747 9.75V3H14.8125V9.75L20.1485 15.5707C20.5733 16.0343 20.8542 16.6115 20.9567 17.2319C21.0592 17.8523 20.9789 18.4891 20.7257 19.0646C20.4725 19.6402 20.0573 20.1297 19.5307 20.4733C19.0041 20.817 18.3889 21 17.7601 21H6.23994C5.61113 21 4.99591 20.817 4.46931 20.4733C3.94271 20.1297 3.52749 19.6402 3.27428 19.0646C3.02108 18.4891 2.94084 17.8523 3.04334 17.2319C3.14584 16.6115 3.42666 16.0343 3.85154 15.5707L9.18747 9.75Z"/><path d="M8 3H16"/><path d="M5 14C9.08333 16.25 9.66667 14 12 14C14.3333 14 14.9167 16.25 19 14"/>',
        "left-arrow": '<path d="M16.5 3.5L7.5 12.5L16.5 21.5"/>',
        link: '<path d="M13.1404 10C13.6728 10.3955 14.1134 10.9001 14.4322 11.4796C14.7511 12.0591 14.9407 12.6999 14.9882 13.3586C15.0357 14.0172 14.94 14.6783 14.7076 15.297C14.4751 15.9157 14.1115 16.4775 13.6412 16.9443L10.8588 19.7073C9.98423 20.5462 8.81284 21.0103 7.59697 20.9998C6.38109 20.9893 5.21801 20.505 4.35822 19.6512C3.49844 18.7974 3.01074 17.6424 3.00018 16.435C2.98961 15.2276 3.45702 14.0644 4.30173 13.1959L5.88768 11.6117"/><path d="M10.8596 14C10.3272 13.6045 9.88658 13.0999 9.56776 12.5204C9.24894 11.9409 9.05935 11.3001 9.01185 10.6414C8.96435 9.98279 9.06004 9.32171 9.29245 8.70302C9.52486 8.08433 9.88853 7.52251 10.3588 7.05567L13.1412 4.29268C14.0158 3.45384 15.1872 2.98968 16.403 3.00017C17.6189 3.01067 18.782 3.49497 19.6418 4.34877C20.5016 5.20257 20.9893 6.35756 20.9998 7.56498C21.0104 8.77239 20.543 9.93562 19.6983 10.8041L18.1123 12.379"/>',
        "link-glyph": '<path d="M13.1404 10C13.6728 10.3955 14.1134 10.9001 14.4322 11.4796C14.7511 12.0591 14.9407 12.6999 14.9882 13.3586C15.0357 14.0172 14.94 14.6783 14.7076 15.297C14.4751 15.9157 14.1115 16.4775 13.6412 16.9443L10.8588 19.7073C9.98423 20.5462 8.81284 21.0103 7.59697 20.9998C6.38109 20.9893 5.21801 20.505 4.35822 19.6512C3.49844 18.7974 3.01074 17.6424 3.00018 16.435C2.98961 15.2276 3.45702 14.0644 4.30173 13.1959L5.88768 11.6117"/><path d="M10.8596 14C10.3272 13.6045 9.88658 13.0999 9.56776 12.5204C9.24894 11.9409 9.05935 11.3001 9.01185 10.6414C8.96435 9.98279 9.06004 9.32171 9.29245 8.70302C9.52486 8.08433 9.88853 7.52251 10.3588 7.05567L13.1412 4.29268C14.0158 3.45384 15.1872 2.98968 16.403 3.00017C17.6189 3.01067 18.782 3.49497 19.6418 4.34877C20.5016 5.20257 20.9893 6.35756 20.9998 7.56498C21.0104 8.77239 20.543 9.93562 19.6983 10.8041L18.1123 12.379"/>',
        "links-coming-in": '<path d="M8.70467 12C8.21657 11.6404 7.81269 11.1817 7.52044 10.6549C7.22819 10.1281 7.0544 9.54553 7.01086 8.94677C6.96732 8.348 7.05504 7.74701 7.26808 7.18456C7.48112 6.62212 7.81449 6.11138 8.24558 5.68697L10.7961 3.17516C11.5978 2.41258 12.6716 1.99062 13.7861 2.00016C14.9007 2.0097 15.9668 2.44997 16.755 3.22615C17.5431 4.00234 17.9902 5.05233 17.9998 6.14998C18.0095 7.24763 17.5811 8.30511 16.8067 9.09467L15.9014 10"/><path d="M11.2953 8C11.7834 8.35957 12.1873 8.81831 12.4796 9.34512C12.7718 9.87192 12.9456 10.4545 12.9891 11.0532C13.0327 11.652 12.945 12.253 12.7319 12.8154C12.5189 13.3779 12.1855 13.8886 11.7544 14.313L9.20392 16.8248C8.40221 17.5874 7.32844 18.0094 6.21389 17.9998C5.09933 17.9903 4.03318 17.55 3.24504 16.7738C2.4569 15.9977 2.00985 14.9477 2.00016 13.85C1.99047 12.7524 2.41893 11.6949 3.19326 10.9053L4.09859 10"/><path d="M17 21L14 18L17 15"/><path d="M21 18H14"/>',
        "links-going-out": '<path d="M8.70467 12C8.21657 11.6404 7.81269 11.1817 7.52044 10.6549C7.22819 10.1281 7.0544 9.54553 7.01086 8.94677C6.96732 8.348 7.05504 7.74701 7.26808 7.18456C7.48112 6.62212 7.81449 6.11138 8.24558 5.68697L10.7961 3.17516C11.5978 2.41258 12.6716 1.99062 13.7861 2.00016C14.9007 2.0097 15.9668 2.44997 16.755 3.22615C17.5431 4.00234 17.9902 5.05233 17.9998 6.14998C18.0095 7.24763 17.5811 8.30511 16.8067 9.09467L15.9014 10"/><path d="M11.2953 8C11.7834 8.35957 12.1873 8.81831 12.4796 9.34512C12.7718 9.87192 12.9456 10.4545 12.9891 11.0532C13.0327 11.652 12.945 12.253 12.7319 12.8154C12.5189 13.3779 12.1855 13.8886 11.7544 14.313L9.20392 16.8248C8.40221 17.5874 7.32844 18.0094 6.21389 17.9998C5.09933 17.9903 4.03318 17.55 3.24504 16.7738C2.4569 15.9977 2.00985 14.9477 2.00016 13.85C1.99047 12.7524 2.41893 11.6949 3.19326 10.9053L4.09859 10"/><path d="M18 21L21 18L18 15"/><path d="M14 18H21"/>',
        "open-vault": '<path d="M10 21L4.5 21C3.39543 21 3 20.5255 3 19.2L3 4.80001C3 3.47452 3.39543 3.00001 4.5 3.00001L10 3"/><path d="M21 7L22.5 7"/><path d="M21 16L22.5 16"/><path d="M21 18.9104L21 5.09381C21 5.09381 21 3.94236 19.5 3.36674L11.5 1.06397C11.5 1.06397 10 0.488257 10 2.79104L10 21.0928C10 23.5159 11.5 22.9403 11.5 22.9403L19.5 20.6375C21 20.0618 21 18.9104 21 18.9104Z"/><ellipse cx="16" cy="11" rx="1.5" ry="3"/><path d="M16 14L16 17"/>',
        paused: '<path d="M12 21C16.9707 21 21 16.9707 21 12C21 7.0293 16.9707 3 12 3C7.0293 3 3 7.0293 3 12C3 16.9707 7.0293 21 12 21Z"/><path d="M10 15V9"/><path d="M14 15V9"/>',
        "question-mark-glyph": '<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M9.09009 9.00003C9.32519 8.33169 9.78924 7.76813 10.4 7.40916C11.0108 7.05019 12.079 6.94542 12.7773 7.06519C13.9093 7.25935 14.9767 8.25497 14.9748 9.49073C14.9748 11.9908 12 11.2974 12 14"/><path d="M12 17H12.01"/>',
        "right-arrow": '<path d="M7.5 21.5L16.5 12.5L7.5 3.5"/>',
        "sidebar-left": '<path d="M21 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3Z"/><path d="M10 4V20"/><path d="M4 7H7"/><path d="M4 10H7"/><path d="M4 13H7"/>',
        "sidebar-right": '<path d="M3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3Z"/><path d="M14 4V20"/><path d="M20 7H17"/><path d="M20 10H17"/><path d="M20 13H17"/>',
        "sheets-in-box": '<path d="M19 16V22"/><path d="M16 19H22"/><path d="M20.7297 13.0005C20.7297 12.4701 20.519 11.9613 20.1439 11.5863C19.7689 11.2112 19.2602 11.0005 18.7297 11.0005H4.72974C4.1993 11.0005 3.6906 11.2112 3.31552 11.5863C2.94045 11.9613 2.72974 12.4701 2.72974 13.0005L2.72974 19.9886C2.72974 20.519 2.94045 21.0277 3.31552 21.4028C3.6906 21.7779 4.1993 21.9886 4.72974 21.9886H13"/><path d="M21 8C21 8 21 7 20 7H4C3.00199 7 3 7.99347 3 7.99347"/><path d="M21 4C21 4 21.0066 3 20 3L4 3C3 3 3 4 3 4"/>',
        "star-list": '<path d="M10 12H3"/><path d="M16 6H3"/><path d="M10 18H3"/><path d="M17 11L18.236 13.3039L21 13.6756L19 15.4679L19.472 18L17 16.8039L14.528 18L15 15.4679L13 13.6756L15.764 13.3039L17 11Z"/>',
        "sync-small": '<path d="M12 21C16.9707 21 21 16.9707 21 12C21 7.0293 16.9707 3 12 3C7.0293 3 3 7.0293 3 12C3 16.9707 7.0293 21 12 21Z"/><path d="M12 21C16.9707 21 21 16.9707 21 12C21 7.0293 16.9707 3 12 3C7.0293 3 3 7.0293 3 12C3 16.9707 7.0293 21 12 21Z"/><path d="M7.6394 11.0114C8.08785 9.01426 9.87182 7.52222 12.0044 7.52222C14 7.52222 15 9 16.0121 10.0057M8.00579 14.0042C9 15 10 16.4695 12.0044 16.4695C14.1282 16.4695 15.9062 14.9897 16.3638 13.0049"/><path d="M16.5 8.5V10.5H14.5"/><path d="M8 16L8 14L10 14"/>',
        tabs: '<path d="M6 17V19.4444C6 20.3036 6.69645 21 7.55556 21H18.4444C19.3036 21 20 20.3036 20 19.4444V8.55556C20 7.69645 19.3036 7 18.4444 7H16"/><path d="M14.4444 3H3.55556C2.69645 3 2 3.69645 2 4.55556V15.4444C2 16.3036 2.69645 17 3.55556 17H14.4444C15.3036 17 16 16.3036 16 15.4444V4.55556C16 3.69645 15.3036 3 14.4444 3Z"/>',
        "uppercase-lowercase-a": '<path d="M10.5 14L4.5 14"/><path d="M12.5 18L7.5 6"/><path d="M3 18L7.5 6"/><path d="M15.9526 10.8322C15.9526 10.8322 16.6259 10 18.3832 10C20.1406 9.99999 20.9986 11.0587 20.9986 11.9682V16.7018C20.9986 17.1624 21.2815 17.7461 21.7151 18"/><path d="M20.7151 13.5C18.7151 13.5 15.7151 14.2837 15.7151 16C15.7151 17.7163 17.5908 18.2909 18.7151 18C19.5635 17.7804 20.5265 17.3116 20.889 16.6199"/>',
        vault: '<path d="M21 19.2L21 4.8C21 3.47452 20.6046 3 19.5 3L4.5 3C3.39543 3 3 3.47452 3 4.8L3 19.2C3 20.5255 3.39543 21 4.5 21L19.5 21C20.6046 21 21 20.5255 21 19.2Z"/><path d="M14.9675 10.56C15.0601 11.1841 14.9535 11.8216 14.6629 12.3817C14.3722 12.9418 13.9124 13.396 13.3488 13.6797C12.7851 13.9634 12.1464 14.0621 11.5234 13.9619C10.9004 13.8616 10.3249 13.5675 9.87868 13.1213C9.43249 12.6751 9.13835 12.0996 9.0381 11.4766C8.93786 10.8536 9.0366 10.2149 9.3203 9.65123C9.60399 9.08759 10.0582 8.62776 10.6183 8.33713C11.1784 8.04651 11.8159 7.93989 12.4401 8.03245C13.0767 8.12687 13.6662 8.42355 14.1213 8.87868C14.5765 9.33381 14.8731 9.92326 14.9675 10.56Z"/><path d="M12 14L12 17"/><path d="M21 7L22.5 7"/><path d="M21 16L22.5 16"/>',
        "stack-horizontal": '<path d="M10 5H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm10 0h-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM2 2v20"/>',
        "stack-vertical": '<path d="M19 10V8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Zm0 10v-2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Zm3-18H2"/>',
        "stretch-horizontal": '<path d="M18 8V6c0-1.105-.767-2-1.714-2H7.714C6.768 4 6 4.895 6 6v2c0 1.105.768 2 1.714 2h8.572C17.233 10 18 9.105 18 8Zm0 10v-2c0-1.105-.767-2-1.714-2H7.714C6.768 14 6 14.895 6 16v2c0 1.105.768 2 1.714 2h8.572c.947 0 1.714-.895 1.714-2ZM2 2v20M22 2v20"/>',
        "stretch-vertical": '<path d="M16 18h2c1.105 0 2-.767 2-1.714V7.714C20 6.768 19.105 6 18 6h-2c-1.105 0-2 .768-2 1.714v8.572c0 .947.895 1.714 2 1.714ZM6 18h2c1.105 0 2-.767 2-1.714V7.714C10 6.768 9.105 6 8 6H6c-1.105 0-2 .768-2 1.714v8.572C4 17.233 4.895 18 6 18ZM22 2H2m20 20H2"/>',
        "distribute-space-horizontal": '<path d="M7 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm12 0h-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM3 2v20M21 2v20"/>',
        "distribute-space-vertical": '<path d="M19 7V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Zm0 12v-2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Zm3-16H2m20 18H2"/>',
        "zoom-to-selection": '<path d="M2 6V4a2 2 0 0 1 2-2h2m12 0h2a2 2 0 0 1 2 2v2m0 12v2a2 2 0 0 1-2 2h-2M6 22H4a2 2 0 0 1-2-2v-2m9-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm7 2-3-3"/>',
        "create-group": '<path d="M2 6V4a2 2 0 0 1 2-2h2m12 0h2a2 2 0 0 1 2 2v2m0 12v2a2 2 0 0 1-2 2h-2M6 22H4a2 2 0 0 1-2-2v-2m9-12H6v5h5V6Zm7 7h-5v5h5v-5Z"/>',
        "snap-to-object": '<path d="M21 3H3m18 18H3"/><circle cx="3" cy="3" r="2"/><circle cx="3" cy="21" r="2"/><circle cx="21" cy="3" r="2"/><circle cx="21" cy="21" r="2"/><path d="M15.111 8H8.89a.889.889 0 0 0-.89.889v6.222c0 .491.398.889.889.889h6.222a.889.889 0 0 0 .889-.889V8.89a.889.889 0 0 0-.889-.89Z"/>',
        "line-horizontal": '<path d="M3 12h18"/>',
        "aspect-ratio": '<path d="M19 4H5c-1.105 0-2 .796-2 1.778v12.444C3 19.204 3.895 20 5 20h14c1.105 0 2-.796 2-1.778V5.778C21 4.796 20.105 4 19 4Z"/><path d="M14 8h3v2m-7 6H7v-2"/>',
        "rectangle-vertical-double": '<path d="M8 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm12 0h-4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/>'
    }, Ce = {}, Le = {viewBox: "0 0 100 100"}, ke = {};

    function Ae(e, t) {
        if (!ke.hasOwnProperty(e)) {
            var a = t();
            if (!a) return null;
            a.classList.add("svg-icon", e), ke[e] = a
        }
        return ke[e].cloneNode(!0)
    }

    function Ze(e, t) {
        var a = e.firstChild;
        if (!(a && a.instanceOf(SVGSVGElement) && a.classList.contains(t))) {
            a && e.removeChild(a);
            var n = function (e) {
                return e.startsWith("lucide-") ? Ae(e, (function () {
                    var t = e.substring("lucide-".length);
                    return fe.hasOwnProperty(t) ? He(fe[t]) : null
                })) : Ce.hasOwnProperty(e) ? Ae(e, (function () {
                    var t = ye("svg", Le);
                    return t.innerHTML = Ce[e], t
                })) : we.hasOwnProperty(e) ? Ae(e, (function () {
                    var t = ye("svg", ge);
                    return t.innerHTML = we[e], t
                })) : (be.hasOwnProperty(e) && (e = be[e]), fe.hasOwnProperty(e) ? Ae("lucide-" + e, (function () {
                    return He(fe[e])
                })) : null)
            }(t);
            n && e.appendChild(n)
        }
    }

    function xe(e, t) {
        e.focus();
        var a = e.win, n = a.document.createRange();
        n.selectNodeContents(e), isBoolean(t) && n.collapse(t);
        var r = a.getSelection();
        r && (r.removeAllRanges(), r.addRange(n), w.isMobile && function (e) {
            var t, a = Date.now(), n = function (r) {
                r && Date.now() - a < 100 || (window.clearTimeout(t), window.removeEventListener("resize", n), setTimeout(e, 10))
            };
            window.addEventListener("resize", n), t = window.setTimeout(n, 500)
        }((function () {
            e.scrollIntoView({block: "nearest"})
        })))
    }

    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function () {
                ({passive: !1})
            }
        }))
    } catch (e) {
    }
    for (var Ee = new Map, ze = 0, Se = "a abbr acronym b bdi bdo big br button canvas cite code data del dfn em embed i iframe img input ins kbd label map mark meter noscript object outputpicture progress q ruby s samp select small span strong sub sup svg textarea time u tt var video wbr".split(" "); ze < Se.length; ze++) {
        var De = Se[ze];
        Ee.set(De, !0)
    }
    for (var Te = 0, Pe = "address article aside blockquote details dialog dd div dl dt fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 header hgroup hr li main nav ol p pre ul".split(" "); Te < Pe.length; Te++) {
        De = Pe[Te];
        Ee.set(De, !1)
    }
    new WeakMap;
    devicePixelRatio;
    for (var Oe = {
        3: "Cancel",
        6: "Help",
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        28: "Convert",
        29: "NonConvert",
        30: "Accept",
        31: "ModeChange",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        41: "Select",
        42: "Print",
        43: "Execute",
        44: "PrintScreen",
        45: "Insert",
        46: "Delete",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        91: "OS",
        93: "ContextMenu",
        95: "Sleep",
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        144: "NumLock",
        145: "ScrollLock",
        181: "VolumeMute",
        182: "VolumeDown",
        183: "VolumeUp",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        224: "Meta",
        225: "AltGraph",
        246: "Attn",
        247: "CrSel",
        248: "ExSel",
        249: "EraseEof",
        250: "Play",
        251: "ZoomOut"
    }, qe = 1; qe < 25; qe++) Oe[111 + qe] = "F" + qe;
    for (qe = 65; qe < 91; qe++) {
        var Ie = String.fromCharCode(qe);
        Oe[qe] = Ie.toUpperCase()
    }
    for (qe = 96; qe < 106; qe++) Oe[qe] = "Numpad" + String.fromCharCode(qe - 48);
    var Be = function () {
        function e(e) {
            this.tabFocusContainerEl = null, this.keys = [], this.parent = e
        }

        return e.prototype.register = function (e, t, a) {
            var n = {scope: this, modifiers: e ? Ne.compileModifiers(e) : null, key: t, func: a};
            return this.keys.push(n), n
        }, e.prototype.unregister = function (e) {
            this.keys.remove(e)
        }, e.prototype.setTabFocusContainerEl = function (e) {
            this.tabFocusContainerEl = e
        }, e.prototype.handleKey = function (e, t) {
            for (var a = 0, n = this.keys; a < n.length; a++) {
                var r = n[a];
                if (Ne.isMatch(r, t)) {
                    var o = r.func(e, t);
                    if (void 0 !== o) return o;
                    if (null !== r.key || null !== r.modifiers) return o
                }
            }
            if (this.parent) return this.parent.handleKey(e, t)
        }, e
    }(), Ne = (function (e) {
        function a(t, a) {
            var n = e.call(this, t) || this;
            return n.cb = a, n
        }

        t(a, e), a.prototype.handleKey = function (t, a) {
            var n = this.cb();
            return n ? n.handleKey(t, a) : e.prototype.handleKey.call(this, t, a)
        }
    }(Be), function () {
        function e() {
            this.modifiers = "", this.rootScope = new Be, this.scope = this.rootScope, this.prevScopes = [], window.addEventListener("keydown", this.onKeyEvent.bind(this), !0), window.addEventListener("focusin", this.onFocusIn.bind(this))
        }

        return e.init = function () {
            return e.global || (e.global = new e), e.global
        }, e.prototype.getRootScope = function () {
            return this.rootScope
        }, e.prototype.pushScope = function (e) {
            this.scope !== e && (this.prevScopes.push(this.scope), this.scope = e)
        }, e.prototype.popScope = function (e) {
            e !== this.rootScope && (this.scope === e ? this.scope = this.prevScopes.pop() || this.rootScope : this.prevScopes.remove(e))
        }, e.prototype.onKeyEvent = function (t) {
            this.updateModifiers(t);
            var a = this.scope;
            if (a) {
                var n = function (e) {
                    var t = e.key;
                    if (!t) {
                        var a = e.which || e.keyCode;
                        t = Oe[a]
                    }
                    return t
                }(t);
                if (!e.isModifierKey(n)) {
                    var r = function (e) {
                        var t = e.which || e.keyCode;
                        return Oe[t] || "Key" + t
                    }(t);
                    54 === t.which && "^" == t.key && "KeyI" === t.code && (r = "KeyI");
                    var o = {modifiers: this.modifiers, key: n, vkey: r};
                    return !1 === a.handleKey(t, o) ? (t.preventDefault(), t.stopPropagation(), !1) : void 0
                }
            }
        }, e.prototype.onFocusIn = function (e) {
            var t = this, a = this.scope;
            if (a && a.tabFocusContainerEl) {
                var n = a.tabFocusContainerEl, r = e.targetNode;
                r && r !== activeDocument.body && r.instanceOf(Element) && !n.contains(r) && setTimeout((function () {
                    if (!(t.scope !== a || (o = n.querySelector(["a[href]", "button", "input", "select", "textarea", '[contenteditable]:not([contenteditable="false"])', "[tabindex]"].map((function (e) {
                        return e + ':not([disabled]):not([tabindex="-1"])'
                    })).join(","))) && (o.instanceOf(HTMLElement) || o.instanceOf(SVGElement)) && (o.focus(r), o))) {
                        var e = activeDocument.activeElement;
                        e && e instanceof HTMLElement && e.blur()
                    }
                    var r, o
                }), 0)
            }
        }, e.prototype.updateModifiers = function (t) {
            this.modifiers = e.getModifiers(t)
        }, e.getModifiers = function (t) {
            var a = [];
            return t.ctrlKey && a.push("Ctrl"), t.metaKey && a.push("Meta"), t.altKey && a.push("Alt"), t.shiftKey && a.push("Shift"), e.compileModifiers(a)
        }, e.compileModifiers = function (e) {
            return e.map((function (e) {
                return "Mod" === e ? "MacOS" === o ? "Meta" : "Ctrl" : e
            })).sort().join(",")
        }, e.decompileModifiers = function (e) {
            return e.split(",").map((function (e) {
                return "MacOS" === o && "Meta" === e || "MacOS" !== o && "Ctrl" === e ? "Mod" : e
            })).filter((function (e) {
                return e
            }))
        }, e.isModifierKey = function (e) {
            return "Control" === e || "Alt" === e || "Shift" === e || "OS" === e || "Meta" === e
        }, e.prototype.matchModifiers = function (e) {
            return this.modifiers === e
        }, e.prototype.hasModifier = function (t) {
            return e.decompileModifiers(this.modifiers).contains(t)
        }, e.isModifier = function (e, t) {
            return "Ctrl" === t ? e.ctrlKey : "Meta" === t ? e.metaKey : "Alt" === t ? e.altKey : "Shift" === t ? e.shiftKey : "Mod" === t && ("MacOS" === o ? e.metaKey : e.ctrlKey)
        }, e.isMatch = function (e, t) {
            var a = e.modifiers, n = e.key;
            return (null === a || a === t.modifiers) && (!n || (n === t.vkey || !(!t.key || n.toLowerCase() !== t.key.toLowerCase())))
        }, e.isModEvent = function (t) {
            return !!t && (function (e) {
                return (e.instanceOf(MouseEvent) || e.instanceOf(PointerEvent)) && 1 === e.button
            }(t) ? "tab" : !!e.isModifier(t, "Mod") && (e.isModifier(t, "Alt") ? e.isModifier(t, "Shift") ? "window" : "split" : "tab"))
        }, e
    }()), Fe = function () {
        function e(e) {
            this.submenu = null, this.disabled = !1, this.checked = null, this.section = "", this.menu = e;
            var t = this.dom = createDiv("menu-item");
            this.iconEl = t.createDiv("menu-item-icon"), this.titleEl = t.createDiv("menu-item-title"), t.addEventListener("click", this.handleEvent.bind(this))
        }

        return e.prototype.setTitle = function (e) {
            return "string" == typeof e ? this.titleEl.setText(e) : (this.titleEl.empty(), this.titleEl.appendChild(e)), this
        }, e.prototype.setIcon = function (e) {
            return e ? Ze(this.iconEl, e) : this.iconEl.empty(), this
        }, e.prototype.removeIcon = function () {
            return this.iconEl.detach(), this
        }, e.prototype.setActive = function (e) {
            return this.setChecked(e)
        }, e.prototype.setChecked = function (e) {
            e ? this.checkIconEl || Ze(this.checkIconEl = this.dom.createDiv("menu-item-icon mod-checked"), "lucide-check") : this.checkIconEl && this.checkIconEl.detach();
            return this.checked = e, this.dom.toggleClass("mod-checked", e), this
        }, e.prototype.setDisabled = function (e) {
            return this.disabled = e, this.dom.toggleClass("is-disabled", e), this
        }, e.prototype.setWarning = function (e) {
            return this.dom.toggleClass("is-warning", e), this
        }, e.prototype.setIsLabel = function (e) {
            return this.dom.toggleClass("is-label", e), this
        }, e.prototype.setSubmenu = function () {
            this.submenu || (this.dom.addClass("has-submenu"), this.submenu = new Re, Ze(this.dom.createDiv("menu-item-icon mod-submenu"), "lucide-chevron-right"), this.onClick((function (e) {
                return e.preventDefault()
            })));
            return this.submenu
        }, e.prototype.onClick = function (e) {
            return this.callback = e, this
        }, e.prototype.handleEvent = function (e) {
            if (this.disabled) e.preventDefault(); else {
                var t = this.callback;
                t && t(e)
            }
        }, e.prototype.setSection = function (e) {
            return this.section = e, this.dom.setAttr("data-section", e), this
        }, e.create = function (t) {
            return new e(t)
        }, e
    }(), je = function (e) {
        this.menu = e, this.dom = createDiv("menu-separator")
    }, We = null;
    var Re = function (e) {
        function a() {
            var t = e.call(this) || this;
            t.unloading = !1, t.useNativeMenu = a.useNativeMenu, t.items = [], t.sections = [], t.submenuConfigs = {}, t.selected = -1, t.openSubmenuSoon = function (e, t, a) {
                void 0 === t && (t = 0), void 0 === a && (a = !1);
                var n = null, r = null, o = null, i = 0, l = activeWindow, c = function () {
                    var t = r, a = o;
                    return r = null, o = null, e.apply(t, a)
                }, h = function () {
                    if (i) {
                        var e = Date.now();
                        if (e < i) return l = activeWindow, n = l.setTimeout(h, i - e), void (i = 0)
                    }
                    n = null, c()
                }, M = function () {
                    for (var e = [], c = 0; c < arguments.length; c++) e[c] = arguments[c];
                    return r = this, o = e, n ? a && (i = Date.now() + t) : (l = activeWindow, n = l.setTimeout(h, t)), M
                };
                return M.cancel = function () {
                    return n && (l.clearTimeout(n), n = null), M
                }, M.run = function () {
                    if (n) return l.clearTimeout(n), n = null, c()
                }, M
            }(t.openSubmenu.bind(t), 250, !0), t.scope = new Be(Ne.global.getRootScope());
            var n = t.dom = createDiv("menu"), r = t.bgEl = createDiv("suggestion-bg");
            if (r.style.opacity = "0", r.addEventListener("mousedown", (function (e) {
                return e.preventDefault()
            })), n.addEventListener("mousedown", (function (e) {
                0 === e.button && e.preventDefault()
            })), w.isPhone) {
                var o = function (e) {
                    e.registerCallback({
                        move: function (t, a) {
                            e.evt.stopPropagation(), n.style.overscrollBehavior = "none";
                            var o = n.offsetHeight, i = Math.clamp((a - e.startY) / o, 0, 1);
                            n.style.transform = "translateY(".concat(i * o, "px)"), r.style.opacity = String(1 - i)
                        }, cancel: function () {
                            n.style.overscrollBehavior = "", n.style.transform = "", r.style.opacity = ""
                        }, finish: function (a, o, i) {
                            n.style.overscrollBehavior = "";
                            var l, c = n.offsetHeight, h = Math.clamp((o - e.startY) / c, 0, 1);
                            i < c / 2 ? (m(n, new v({duration: 200 * (l = h)}).addProp("transform", null, "translateY(0)", "")), m(r, new v({
                                duration: 150 * l,
                                fn: "linear"
                            }).addProp("opacity", null, "1", ""))) : (m(n, new v({
                                duration: 100 * (l = 1 - h),
                                fn: "ease-out"
                            }).addProp("transform", null, "translateY(".concat(c, "px)"), ""), (function () {
                                t.dom.detach(), t.hide()
                            })), m(r, new v({duration: 150 * l, fn: "linear"}).addProp("opacity", null, "0")))
                        }
                    })
                };
                de(n, (function (e) {
                    1 === e.points && "y" === e.direction && (n.scrollTop > 0 || o(e))
                })), de(r, (function (e) {
                    1 === e.points && "y" === e.direction && o(e)
                }))
            }
            return r.onClickEvent((function () {
                return t.hide()
            })), t.scope.register([], "ArrowUp", t.onArrowUp.bind(t)), t.scope.register([], "ArrowDown", t.onArrowDown.bind(t)), t.scope.register([], "ArrowLeft", t.onArrowLeft.bind(t)), t.scope.register([], "ArrowRight", t.onArrowRight.bind(t)), t.scope.register([], "Enter", t.onEnter.bind(t)), t.scope.register([], "Escape", t.hide.bind(t)), w.isDesktop && n.addEventListener("mouseover", t.onMouseOver.bind(t)), t
        }

        return t(a, e), a.prototype.onload = function () {
            var e = this;
            this.registerDomEvent(window, "click", this.onMenuClick.bind(this)), this.registerDomEvent(window, "mousedown", (function (t) {
                var a = t.targetNode;
                a && !e.isInside(a) && e.hide()
            })), this.registerDomEvent(window, "contextmenu", this.hide.bind(this)), Ne.global.pushScope(this.scope)
        }, a.prototype.onunload = function () {
            Ne.global.popScope(this.scope)
        }, a.prototype.onMenuClick = function (e) {
            var t = e.targetNode;
            t && t.instanceOf(Element) && (t.matchParent(".menu-item.has-submenu") || t.matchParent(".menu-item.is-label")) || this.hide()
        }, a.prototype.isInside = function (e) {
            var t;
            if (this.dom.contains(e) || (null === (t = this.parentEl) || void 0 === t ? void 0 : t.contains(e))) return !0;
            for (var a = this.parentMenu; a;) {
                if (a.dom.contains(e)) return !0;
                a = a.parentMenu
            }
            for (var n = this.currentSubmenu; n;) {
                if (n.dom.contains(e)) return !0;
                n = n.currentSubmenu
            }
            return !1
        }, a.prototype.sort = function () {
            for (var e = this, t = e.items, a = e.sections, n = e.submenuConfigs, r = {"": []}, o = 0, i = t; o < i.length; o++) {
                var l = "";
                (y = i[o]) instanceof Fe && (l = y.section), "" === l || a.contains(l) || a.push(l);
                var c = r[l];
                r.hasOwnProperty(l) || (c = r[l] = []), c.push(y)
            }
            t = [];
            for (var h = null, M = null, s = "", v = 0, u = a; v < u.length; v++) {
                l = u[v];
                if (r.hasOwnProperty(l)) {
                    var d = l.split(".")[0];
                    h !== d && (null !== h && t.push(new je(this)), h = d);
                    var p = r[l];
                    if (p.length > 1 && !w.isMobile) {
                        var m = "";
                        for (var f in n) if (n.hasOwnProperty(f) && (l === f || l.substring(f.length + 1) === f + ".")) {
                            m = f;
                            break
                        }
                        if (m) {
                            if (M && m === s) M.items.push(new je(this)); else {
                                var g = n[m], y = Fe.create(this);
                                t.push(y), y.setTitle(g.title), g.icon && y.setIcon(g.icon), g.disabled && y.setDisabled(!0), M = y.setSubmenu(), s = m
                            }
                            for (var V = 0, H = r[l]; V < H.length; V++) {
                                y = H[V];
                                M.items.push(y)
                            }
                            continue
                        }
                    }
                    for (var b = 0, C = p; b < C.length; b++) {
                        y = C[b];
                        t.push(y)
                    }
                }
            }
            if (!a.contains("")) for (var L = 0, k = r[""]; L < k.length; L++) {
                y = k[L];
                t.push(y)
            }
            for (; t.last() instanceof je;) t.pop();
            this.items = t, this.dom.setChildrenInPlace(t.map((function (e) {
                return e.dom
            })))
        }, a.prototype.addSections = function (e) {
            var t = this.sections;
            e = e.filter((function (e) {
                return !t.contains(e)
            }));
            var a = t.indexOf("");
            return -1 === a && (a = t.length), t.splice.apply(t, function (e, t, a) {
                if (a || 2 === arguments.length) for (var n, r = 0, o = t.length; r < o; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
                return e.concat(n || Array.prototype.slice.call(t))
            }([a, 0], e, !1)), this
        }, a.prototype.setSectionSubmenu = function (e, t) {
            return this.submenuConfigs[e] = t, this
        }, a.prototype.setNoIcon = function () {
            return this.dom.addClass("mod-no-icon"), this
        }, a.prototype.setUseNativeMenu = function (e) {
            return this.useNativeMenu = e, this
        }, a.prototype.addItem = function (e) {
            if (this._loaded) return this;
            var t = Fe.create(this);
            return this.items.push(t), e(t), this
        }, a.prototype.addSeparator = function () {
            if (this._loaded) return this;
            var e = new je(this);
            return this.items.push(e), this
        }, a.prototype.setParentElement = function (e) {
            var t = this;
            return this.parentEl && this.parentEl.removeClass("has-active-menu"), this.parentEl = e, function (e, t, a) {
                var n = e.doc, r = setInterval((function () {
                    n.body.contains(e) || (clearInterval(r), a())
                }), t)
            }(e, 500, (function () {
                return t.hide()
            })), this
        }, a.prototype.showAtMouseEvent = function (e) {
            return this.showAtPosition({x: e.clientX, y: e.clientY}, e.doc)
        }, a.prototype.showAtPosition = function (e, t) {
            var a = this;
            if (this.unload(), 0 === this.items.length) return this;
            var n = (t = t || activeDocument).body, r = e.x, o = e.y, i = function (e) {
                var t = e.frameElement;
                if (!t) return null;
                for (var a = {x: 0, y: 0, scale: 1, win: e}; null !== t;) {
                    var n = t.getBoundingClientRect(), r = n.width / t.clientWidth;
                    a.scale *= r, a.x = a.x * r + n.x, a.y = a.y * r + n.y, a.win = t.win, t = t.win.frameElement
                }
                return a
            }(n.win);
            if (i) {
                var l = i.scale;
                r = r * l + i.x, o = o * l + i.y, n = (t = (L = i.win).document).body
            }
            if (this.parentEl && this.parentEl.addClass("has-active-menu"), this.sort(), !w.isDesktopApp || !this.useNativeMenu) {
                var c;
                c = this, pe.contains(c) || pe.push(c), setTimeout(this.load.bind(this), 0);
                var h, M = this.dom, s = this.bgEl;
                if (n.appendChild(M), n.appendChild(s), w.isPhone) {
                    var u = M.offsetHeight - 1;
                    m(M, new v({duration: 150}).addProp("transform", "translateY(".concat(u, "px)"), "")), m(s, new v({duration: 150}).addProp("opacity", "0", "0.85")), M.style.left = "0", M.style.top = "0"
                } else {
                    var d = M.offsetWidth, p = M.offsetHeight, f = n.clientWidth, g = n.clientHeight,
                        y = parseFloat(getComputedStyle(n).paddingTop);
                    y && !isNaN(y) || (y = 0);
                    var V = r, H = V;
                    e.width ? e.overlap ? (V = r, H = r + e.width) : (V = r + e.width, H = r) : (V = r + 2, H = r - 2);
                    var b = M.style, C = H - d >= 0;
                    !(V + d <= f) || e.left && C ? b.left = Math.max(0, H - d) + "px" : b.left = V + "px", b.top = o + p > g ? Math.max(y, o - p + 2) + "px" : o + 2 + "px", (h = M).addEventListener("mousemove", (function (e) {
                        var t = h.clientHeight, a = h.scrollHeight;
                        if (a > t) {
                            var n = (e.clientY - h.getBoundingClientRect().y - 30) / (t - 60);
                            h.scrollTop = (a - t) * Math.clamp(n, 0, 1)
                        }
                    })), s.style.opacity = "0.85"
                }
                return We = this, this
            }
            var L = t.win, k = function (e) {
                for (var t = [], a = function (e) {
                    if (e instanceof Fe) {
                        var a = {
                            label: e.titleEl.getText().replace(/\B&\B/, "&&"),
                            enabled: !e.disabled,
                            checked: e.checked,
                            type: isBoolean(e.checked) ? "checkbox" : void 0,
                            click: function (t, a, n) {
                                return e.handleEvent(new MouseEvent("click", n))
                            }
                        };
                        e.submenu && (e.submenu.sort(), a.submenu = k(e.submenu.items)), t.push(a)
                    } else e instanceof je && t.push({type: "separator"})
                }, n = 0, r = e; n < r.length; n++) {
                    a(r[n])
                }
                return t
            }, A = k(this.items), Z = L.electron.remote.Menu.buildFromTemplate(A);
            Z.on("menu-will-close", (function () {
                return a.hide()
            }));
            var x = L.electron.remote.getCurrentWebContents(), E = Math.pow(1.2, x.getZoomLevel());
            Z.popup({x: Math.round(r * E), y: Math.round(o * E), window: L.electron.remote.getCurrentWindow()})
        }, a.prototype.hide = function () {
            var e, t = this;
            if (this.unload(), this.unloading) return this;
            this.unloading = !0, e = this, pe.contains(e) && pe.remove(e), this.unselect(), this.closeSubmenu(), this.parentMenu && this.parentMenu.currentSubmenu === this ? (We === this && (We = this.parentMenu), this.parentMenu.currentSubmenu = null) : We = null, this.parentMenu = null, this.parentEl && (this.parentEl.removeClass("has-active-menu"), this.parentEl = null);
            var a = this, n = a.dom, r = a.bgEl, o = a.hideCallback;
            if (w.isPhone && n.isShown()) {
                var i = n.offsetHeight - 1;
                m(n, new v({duration: 150}).addProp("transform", "", "translateY(".concat(i, "px)")), (function () {
                    n.detach(), o && o(), t.unloading = !1
                })), m(r, new v({duration: 150}).addProp("opacity", null, "0"), (function () {
                    r.detach()
                }))
            } else n.detach(), r.detach(), o && o(), this.unloading = !1;
            return this
        }, a.prototype.close = function () {
            this.hide()
        }, a.prototype.onHide = function (e) {
            this.hideCallback = e
        }, a.prototype.onArrowUp = function (e) {
            e.preventDefault();
            for (var t = this.items, a = this.selected - 1, n = 0; n < t.length;) {
                var r = t[a];
                if (r && r instanceof Fe && !r.disabled) return this.select(a), !1;
                --a < 0 && (a = t.length - 1), n++
            }
            return !1
        }, a.prototype.onArrowDown = function (e) {
            e.preventDefault();
            for (var t = this.items, a = this.selected + 1, n = 0; n < t.length;) {
                var r = t[a];
                if (r && r instanceof Fe && !r.disabled) return this.select(a), !1;
                ++a >= t.length && (a = 0), n++
            }
            return !1
        }, a.prototype.onArrowLeft = function (e) {
            return e.preventDefault(), this.parentMenu && this.hide(), !1
        }, a.prototype.onArrowRight = function (e) {
            e.preventDefault();
            var t = this.items[this.selected];
            return t instanceof Fe && t.submenu && (this.openSubmenu(t), this.currentSubmenu && this.currentSubmenu.select(0)), !1
        }, a.prototype.onEnter = function (e) {
            var t = this.items[this.selected];
            return t && t instanceof Fe && (t.handleEvent(e), this.hide()), !1
        }, a.prototype.onMouseOver = function (e) {
            for (var t = e.targetNode, a = this.parentMenu, n = this.items, r = 0; r < n.length; r++) {
                var o = n[r];
                if (o.dom.contains(t)) {
                    if (a) for (var i = a.items, l = 0; l < i.length; l++) {
                        var c = i[l];
                        if (c instanceof Fe && c.submenu === this) {
                            a.selected !== l && (a.openSubmenuSoon.cancel(), a.select(l));
                            break
                        }
                    }
                    return void (o instanceof Fe && (this.select(r), this.openSubmenuSoon(o)))
                }
            }
        }, a.prototype.unselect = function () {
            var e = this.items[this.selected];
            e && e.dom.removeClass("selected"), this.selected = null, this.closeSubmenu()
        }, a.prototype.select = function (e) {
            var t = this.items, a = this.selected;
            if (0 !== t.length) {
                e < 0 && (e = t.length - 1), e >= t.length && (e = 0);
                var n = t[a];
                n && n.dom.removeClass("selected"), this.selected = e;
                var r = t[e];
                r.dom.addClass("selected"), r.dom.scrollIntoView({block: "nearest"})
            }
        }, a.prototype.openSubmenu = function (e) {
            this.openSubmenuSoon.cancel();
            var t = e.submenu, a = e.dom, n = this.currentSubmenu, r = this.parentMenu;
            if (!e.disabled) {
                if (n) {
                    if (n === t || r && r.selected !== this.parentMenu.items.indexOf(e)) return;
                    this.closeSubmenu()
                }
                if (t) {
                    t.parentMenu = this, this.currentSubmenu = t;
                    var o = getComputedStyle(this.dom), i = parseFloat(o.paddingTop) + parseFloat(o.borderTopWidth),
                        l = parseFloat(o.paddingLeft) + parseFloat(o.borderLeftWidth) + 2,
                        c = parseFloat(o.paddingRight) + parseFloat(o.borderRightWidth) + 2,
                        h = a.getBoundingClientRect();
                    t.showAtPosition({x: h.x - l, y: h.y - i, width: h.width + l + c}, a.doc)
                }
            }
        }, a.prototype.closeSubmenu = function () {
            this.openSubmenuSoon.cancel();
            var e = this.currentSubmenu;
            e && (e.hide(), e.parentMenu = null, this.currentSubmenu = null)
        }, a.useNativeMenu = !1, a
    }(me), Ke = null, Ue = null;
    var _e = null;

    function Ge() {
        _e && (clearTimeout(_e), _e = null)
    }

    function Xe(e) {
        return "true" === getComputedStyle(e).getPropertyValue("--no-tooltip").trim()
    }

    function Ye(e, t) {
        V(e, t) && (b(e) || Xe(t) || Qe(t))
    }

    function Je(e, t) {
        if (V(e, t)) {
            at();
            var a = e.relatedTarget;
            if (a && a.matchParent) {
                var n = a.matchParent("[aria-label]");
                if (n && n.instanceOf(HTMLElement)) {
                    if (Xe(n)) return;
                    Qe(n)
                }
            }
        }
    }

    var $e = new WeakMap;

    function Qe(e) {
        Ge();
        var t = e.getAttribute("aria-label") || "";
        $e.has(e) && (t = $e.get(e)(e));
        var a = "bottom";
        e.hasAttribute("data-tooltip-position") && (a = e.getAttribute("data-tooltip-position"));
        var n = [];
        e.hasAttribute("data-tooltip-classes") && (n = (e.getAttribute("data-tooltip-classes") || "").split(" "));
        var r = 750;
        e.hasAttribute("data-tooltip-delay") && (r = parseInt(e.getAttribute("data-tooltip-delay") || ""), isNaN(r) && (r = 750)), tt(e, t, {
            placement: a,
            classes: n,
            delay: r
        })
    }

    var et = 0;

    function tt(e, t, a) {
        var n = Date.now(), r = (a = a || {}).placement, o = void 0 === r ? "bottom" : r, i = a.classes,
            l = void 0 === i ? [] : i, c = a.gap, h = void 0 === c ? 8 : c, M = a.horizontalParent, s = a.delay,
            v = void 0 === s ? 0 : s;
        if (v > 0 && (Ke || n > et + 100)) return Ge(), a.delay = 0, void (_e = window.setTimeout((function () {
            return tt(e, t, a)
        }), v));
        if (t) {
            var u = e.doc, d = e.getBoundingClientRect(), p = d.top, m = d.left, f = d.width, g = d.height;
            if (M) {
                var y = M.getBoundingClientRect();
                m = y.left, f = y.width
            }
            Ke && Ue === e ? Ke.setText(t) : (at(), Ke = createDiv({cls: "tooltip", text: t}));
            var V = Ke.createDiv("tooltip-arrow"), H = 0, b = 0;
            "bottom" === o ? (H = p + g + h, b = m + f / 2) : "right" === o ? (H = p + g / 2, b = m + f + h, l.push("mod-right")) : "left" === o ? (H = p + g / 2, b = m - h, l.push("mod-left")) : "top" === o && (H = p - h - 5, b = m + f / 2, l.push("mod-top")), Ke.addClasses(l), Ke.style.top = "0px", Ke.style.left = "0px", Ke.style.width = "", Ke.style.height = "", Ke.parentNode || u.body.appendChild(Ke);
            var w = Ke.getBoundingClientRect(), C = ["bottom", "top"].contains(o) ? w.width / 2 : w.width,
                L = "right" === o || "left" === o ? w.height / 2 : w.height;
            "left" === o ? b -= C : "top" === o && (H -= L);
            var k = u.body.clientHeight, A = u.body.clientWidth;
            if (H + L > k && (H = k - L - h), H = Math.max(H, h), "top" === o || "bottom" === o) {
                if (b + C > A) b -= Z = b + C + h - A, V.style.left = "initial", V.style.right = C - Z - h / 2 + "px"; else if (b - h - C < 0) {
                    var Z;
                    b += Z = -(b - h - C), V.style.right = "initial", V.style.left = C - Z - h / 2 + "px"
                }
                b = Math.max(b, h)
            }
            Ke.style.top = H + "px", Ke.style.left = b + "px", Ke.style.width = w.width + "px", Ke.style.height = w.height + "px", Ue = e
        }
    }

    function at() {
        Ge(), Ke && (et = Date.now(), Ke.detach(), Ke = null, Ue = null)
    }

    function nt(e, t) {
        var a = t || {}, n = a.placement, r = a.classes, o = a.delay;
        n && "bottom" !== n && e.setAttribute("data-tooltip-position", n), r && e.setAttribute("data-tooltip-classes", r.join(" ")), o && e.setAttribute("data-tooltip-delay", String(o))
    }

    function rt(e, t, a) {
        e.setAttribute("aria-label", t), nt(e, a), Ue === e && tt(e, t, a)
    }

    var ot = function () {
        function e(e, t) {
            this.eWin = e, this.win = t;
            var a = this.isMac = "darwin" === window.process.platform, n = t.document, r = n.body;
            r.addClass("is-frameless");
            var o = this.titleBarEl = n.createElement("div");
            o.className = "titlebar", r.insertBefore(o, r.firstChild);
            var i = this.titleBarInnerEl = o.createDiv("titlebar-inner");
            this.titleBarTextEl = i.createDiv({
                cls: "titlebar-text",
                text: "Obsidian"
            }), t.addEventListener("resize", this.updateStatus.bind(this)), new MutationObserver(this.updateTitle.bind(this)).observe(document.head.querySelector("title"), {
                subtree: !0,
                characterData: !0,
                childList: !0
            }), this.leftButtonContainerEl = i.createDiv("titlebar-button-container mod-left");
            var l = i.createDiv("titlebar-button-container mod-right");
            if (this.updateStatus(), this.updateTitle(), !a) {
                if (e.minimizable) {
                    var c = l.createDiv({
                        cls: "titlebar-button mod-minimize", onclick: function () {
                            return e.minimize()
                        }
                    });
                    c.innerHTML = '<svg aria-hidden="false" width="10" height="10" viewBox="0 0 12 12"><rect fill="currentColor" width="10" height="1" x="1" y="6"></rect></svg>', Me.then((function () {
                        rt(c, ue.interface.window.minimize())
                    }))
                }
                if (e.maximizable) {
                    var h = l.createDiv({
                        cls: "titlebar-button mod-maximize", onclick: function () {
                            e.isMaximized() ? e.unmaximize() : e.maximize(), M()
                        }
                    });
                    h.innerHTML = '<svg aria-hidden="false" width="10" height="10" viewBox="0 0 12 12"><rect width="9" height="9" x="1.5" y="1.5" fill="none" stroke="currentColor"></rect></svg>';
                    var M = function () {
                        t.closed || (e.isMaximized() ? rt(h, ue.interface.window.restoreDown()) : rt(h, ue.interface.window.maximize()))
                    };
                    Me.then((function () {
                        M()
                    })), t.addEventListener("resize", M)
                }
                if (e.closable) {
                    var s = l.createDiv({
                        cls: "titlebar-button mod-close", onclick: function () {
                            return e.close()
                        }
                    });
                    s.innerHTML = '<svg aria-hidden="false" width="10" height="10" viewBox="0 0 12 12"><polygon fill="currentColor" fill-rule="evenodd" points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"></polygon></svg>', Me.then((function () {
                        rt(s, ue.interface.window.closeWindow())
                    }))
                }
            }
            !function (e) {
                if (!w.isMacOS || !w.isDesktopApp) return;
                e.addEventListener("dblclick", (function (t) {
                    if (0 === t.button) {
                        var a = t.target;
                        if (!a.instanceOf(HTMLElement) || !a.closest(".clickable-icon") && !a.closest(".workspace-tab-header-inner-close-button")) {
                            var n = e.win.electronWindow;
                            n.isMaximizable && k((function (e) {
                                var t = e.remote.systemPreferences.getUserDefault("AppleActionOnDoubleClick", "string");
                                "Minimize" === t ? n.minimize() : "Maximize" !== t && "" !== t || (n.isMaximized() ? n.unmaximize() : n.maximize())
                            }))
                        }
                    }
                }))
            }(i)
        }

        return e.prototype.updateTitle = function () {
            this.titleBarTextEl.setText(this.win.document.title)
        }, e.prototype.updateStatus = function () {
            var e = this.win, t = this.eWin;
            if (!e.closed) {
                var a = t.webContents.getZoomFactor(), n = e.document.body;
                if (n.toggleClass("is-fullscreen", t.isFullScreen()), n.toggleClass("is-maximized", t.isMaximized()), n.style.setProperty("--zoom-factor", String(a)), this.isMac && "hidden" === e.titlebarStyle) {
                    var r = 40, o = getComputedStyle(n).getPropertyValue("--header-height");
                    o && (r = parseFloat(o)), (isNaN(r) || 0 === r) && (r = 40);
                    var i = Math.floor(r * a / 2 - 8);
                    i < -5 && (i = 0), t.setTrafficLightPosition({x: i + 2, y: i})
                }
            }
        }, e
    }();
    var it = createDiv("notice-container"), lt = function () {
        function e(e, t) {
            void 0 === t && (t = 4e3);
            var a = this;
            activeDocument.body.appendChild(it);
            var n = this.noticeEl = it.createDiv({cls: "notice", text: e});
            w.isMobile ? m(n, (new v).addProp("marginBottom", -n.offsetHeight + "px", "0", "")) : m(n, (new v).addProp("transform", "translateX(350px)", "", "")), t && setTimeout((function () {
                return a.hide()
            }), t), n.addEventListener("click", (function () {
                return a.hide()
            }))
        }

        return e.prototype.setMessage = function (e) {
            return this.noticeEl.setText(e), this
        }, e.prototype.hide = function () {
            var e = this;
            setTimeout((function () {
                var t = e.noticeEl;
                if (w.isMobile) m(t, (new v).addProp("opacity", null, "0", ""), (function () {
                    t.detach(), 0 === it.childElementCount && it.detach()
                })); else {
                    var a = getComputedStyle(t), n = -(t.offsetHeight + parseInt(a.marginBottom)) + "px";
                    m(t, (new v).addProp("marginTop", "0", n, ""), (function () {
                        t.detach(), 0 === it.childElementCount && it.detach()
                    }))
                }
            }))
        }, e
    }();
    window.Notice = lt;
    var ct = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

    function ht(e, t, a) {
        return a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6 ? e + 6 * (t - e) * a : a < .5 ? t : a < 2 / 3 ? e + (t - e) * (2 / 3 - a) * 6 : e
    }

    function Mt(e) {
        var t, a, n, r = e.h, o = e.s, i = e.l;
        if (r /= 360, i /= 100, 0 == (o /= 100)) t = a = n = i; else {
            var l = i < .5 ? i * (1 + o) : i + o - i * o, c = 2 * i - l;
            t = ht(c, l, r + 1 / 3), a = ht(c, l, r), n = ht(c, l, r - 1 / 3)
        }
        return {r: Math.round(255 * t), g: Math.round(255 * a), b: Math.round(255 * n)}
    }

    function st(e) {
        var t = e.toString(16);
        return 1 === t.length ? "0" + t : t
    }

    function vt(e) {
        var t = ct.exec(e);
        return t ? {r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16)} : null
    }

    var ut = function () {
        function e(e) {
            this.components = [];
            var t = this.settingEl = e.createDiv("setting-item"), a = this.infoEl = t.createDiv("setting-item-info");
            this.nameEl = a.createDiv("setting-item-name"), this.descEl = a.createDiv("setting-item-description"), this.controlEl = t.createDiv("setting-item-control")
        }

        return e.prototype.setName = function (e) {
            return this.nameEl.setText(e), this
        }, e.prototype.setDesc = function (e) {
            return this.descEl.setText(e), this
        }, e.prototype.setClass = function (e) {
            return this.settingEl.addClass(e), this
        }, e.prototype.setTooltip = function (e, t) {
            return rt(this.nameEl, e, t), this
        }, e.prototype.setHeading = function () {
            return this.settingEl.addClass("setting-item-heading"), this
        }, e.prototype.setDisabled = function (e) {
            this.settingEl.toggleClass("is-disabled", e);
            for (var t = 0, a = this.components; t < a.length; t++) {
                a[t].setDisabled(e)
            }
            return this
        }, e.prototype.setNoInfo = function () {
            return this.infoEl.hide(), this
        }, e.prototype.addButton = function (e) {
            var t = new mt(this.controlEl);
            return this.components.push(t), e(t), this
        }, e.prototype.addExtraButton = function (e) {
            var t = new ft(this.controlEl);
            return this.components.push(t), e(t), this
        }, e.prototype.addToggle = function (e) {
            var t = new gt(this.controlEl);
            return this.components.push(t), e(t), this.settingEl.addClass("mod-toggle"), this
        }, e.prototype.addText = function (e) {
            var t = new Vt(this.controlEl);
            return this.components.push(t), e(t), this
        }, e.prototype.addSearch = function (e) {
            var t = new Ht(this.controlEl);
            return this.components.push(t), e(t), this
        }, e.prototype.addTextArea = function (e) {
            var t = new bt(this.controlEl);
            return this.components.push(t), e(t), this
        }, e.prototype.addMomentFormat = function (e) {
            var t = new wt(this.controlEl);
            return this.components.push(t), e(t), this
        }, e.prototype.addDropdown = function (e) {
            var t = new Ct(this.controlEl);
            return this.components.push(t), e(t), this
        }, e.prototype.addColorPicker = function (e) {
            var t = new At(this.controlEl);
            return this.components.push(t), e(t), this
        }, e.prototype.addProgressBar = function (e) {
            var t = new Lt(this.controlEl);
            return this.components.push(t), e(t), this
        }, e.prototype.addSlider = function (e) {
            var t = new kt(this.controlEl);
            return this.components.push(t), e(t), this
        }, e.prototype.then = function (e) {
            return e(this), this
        }, e.prototype.clear = function () {
            return this.controlEl.empty(), this.components = [], this
        }, e.prototype.setVisibility = function (e) {
            return this.settingEl.toggle(e), this
        }, e
    }(), dt = function () {
        function e() {
            this.disabled = !1
        }

        return e.prototype.then = function (e) {
            return e(this), this
        }, e.prototype.setDisabled = function (e) {
            return this.disabled = e, this
        }, e
    }(), pt = function (e) {
        function a() {
            return null !== e && e.apply(this, arguments) || this
        }

        return t(a, e), a.prototype.registerOptionListener = function (e, t) {
            var a = this;
            return e[t] = function (e) {
                return void 0 !== e && a.setValue(e), a.getValue()
            }, this
        }, a
    }(dt), mt = function (e) {
        function a(t) {
            var a = e.call(this) || this;
            return (a.buttonEl = t.createEl("button")).addEventListener("click", (function (e) {
                var t = a.clickCallback;
                !a.disabled && t && t(e)
            })), a
        }

        return t(a, e), a.prototype.setDisabled = function (t) {
            return e.prototype.setDisabled.call(this, t), this.buttonEl.disabled = t, this
        }, a.prototype.setCta = function () {
            return this.buttonEl.addClass("mod-cta"), this
        }, a.prototype.removeCta = function () {
            return this.buttonEl.removeClass("mod-cta"), this
        }, a.prototype.setWarning = function () {
            return this.buttonEl.addClass("mod-warning"), this
        }, a.prototype.setTooltip = function (e, t) {
            return rt(this.buttonEl, e, t), this
        }, a.prototype.setButtonText = function (e) {
            return this.buttonEl.setText(e), this
        }, a.prototype.setIcon = function (e) {
            return Ze(this.buttonEl, e), this
        }, a.prototype.setClass = function (e) {
            return this.buttonEl.addClass(e), this
        }, a.prototype.onClick = function (e) {
            return this.clickCallback = e, this
        }, a
    }(dt), ft = function (e) {
        function a(t) {
            var a = e.call(this) || this,
                n = a.extraSettingsEl = t.createDiv("clickable-icon setting-editor-extra-setting-button");
            return Ze(n, "lucide-settings"), n.addEventListener("click", (function () {
                var e = a.changeCallback;
                !a.disabled && e && e()
            })), a
        }

        return t(a, e), a.prototype.setDisabled = function (t) {
            return e.prototype.setDisabled.call(this, t), this.extraSettingsEl.toggleClass("is-disabled", t), this
        }, a.prototype.setTooltip = function (e, t) {
            return rt(this.extraSettingsEl, e, t), this
        }, a.prototype.setIcon = function (e) {
            return Ze(this.extraSettingsEl, e), this
        }, a.prototype.onClick = function (e) {
            return this.changeCallback = e, this
        }, a
    }(dt), gt = function (e) {
        function a(t) {
            var a = e.call(this) || this;
            return a.on = !1, (a.toggleEl = t.createDiv("checkbox-container", (function (e) {
                e.createEl("input", {attr: {type: "checkbox", tabIndex: 0}})
            }))).addEventListener("click", a.onClick.bind(a)), a
        }

        return t(a, e), a.prototype.setDisabled = function (t) {
            return e.prototype.setDisabled.call(this, t), this.toggleEl.toggleClass("is-disabled", t), this
        }, a.prototype.getValue = function () {
            return this.on
        }, a.prototype.setValue = function (e) {
            var t;
            return this.on = e, this.toggleEl.toggleClass("is-enabled", e), null === (t = this.changeCallback) || void 0 === t || t.call(this, e), this
        }, a.prototype.setSmall = function () {
            return this.toggleEl.addClass("mod-small"), this
        }, a.prototype.setTooltip = function (e, t) {
            return rt(this.toggleEl, e, t), this
        }, a.prototype.onClick = function () {
            this.disabled || this.setValue(!this.getValue())
        }, a.prototype.onChange = function (e) {
            return this.changeCallback = e, this
        }, a
    }(pt), yt = function (e) {
        function a(t) {
            var a = e.call(this) || this;
            return a.inputEl = t, t.addEventListener("input", a.onChanged.bind(a)), t.setAttribute("spellcheck", "false"), a
        }

        return t(a, e), a.prototype.setDisabled = function (t) {
            return e.prototype.setDisabled.call(this, t), this.inputEl.disabled = t, this
        }, a.prototype.getValue = function () {
            return this.inputEl.value
        }, a.prototype.setValue = function (e) {
            return String.isString(e) && (this.inputEl.value = e), this
        }, a.prototype.setPlaceholder = function (e) {
            return this.inputEl.setAttribute("placeholder", e), this
        }, a.prototype.onChanged = function () {
            var e = this.changeCallback;
            e && e(this.inputEl.value)
        }, a.prototype.onChange = function (e) {
            return this.changeCallback = e, this
        }, a
    }(pt), Vt = function (e) {
        function a(t) {
            return e.call(this, t.createEl("input", {type: "text"})) || this
        }

        return t(a, e), a
    }(yt), Ht = function (e) {
        function a(t) {
            var a = this, n = t.createDiv("search-input-container"),
                r = n.createEl("input", {type: "search", attr: {enterkeyhint: "search"}});
            return (a = e.call(this, r) || this).containerEl = n, a.clearButtonEl = n.createDiv("search-input-clear-button", (function (e) {
                e.addEventListener("click", (function () {
                    a.disabled || (r.value = "", r.focus(), a.onChanged())
                }))
            })), a
        }

        return t(a, e), a.prototype.onChanged = function () {
            e.prototype.onChanged.call(this)
        }, a.prototype.setValue = function (t) {
            return e.prototype.setValue.call(this, t)
        }, a.prototype.setClass = function (e) {
            return this.containerEl.addClass(e), this
        }, a.prototype.addRightDecorator = function (e) {
            return e(this.containerEl.createDiv("input-right-decorator")), this
        }, a
    }(yt), bt = function (e) {
        function a(t) {
            return e.call(this, t.createEl("textarea")) || this
        }

        return t(a, e), a
    }(yt), wt = function (e) {
        function a() {
            return null !== e && e.apply(this, arguments) || this
        }

        return t(a, e), a.prototype.setDefaultFormat = function (e) {
            return this.defaultFormat = e, this.setPlaceholder(e), this.updateSample(), this
        }, a.prototype.setSampleEl = function (e) {
            return this.sampleEl = e, this.updateSample(), this
        }, a.prototype.setValue = function (t) {
            return e.prototype.setValue.call(this, t), this.updateSample(), this
        }, a.prototype.onChanged = function () {
            e.prototype.onChanged.call(this), this.updateSample()
        }, a.prototype.updateSample = function () {
            var e = this.sampleEl;
            if (e) {
                var t = this.inputEl.value || this.defaultFormat;
                if (t) {
                    var a = window.moment().format(t);
                    e.setText(a)
                } else e.setText("")
            }
        }, a
    }(Vt), Ct = function (e) {
        function a(t) {
            var a = e.call(this) || this;
            return a.selectEl = t.createEl("select", "dropdown"), a.selectEl.addEventListener("change", (function () {
                var e = a.changeCallback;
                e && e(a.getValue())
            })), a
        }

        return t(a, e), a.prototype.setDisabled = function (t) {
            return e.prototype.setDisabled.call(this, t), this.selectEl.disabled = t, this
        }, a.prototype.addOption = function (e, t) {
            return this.selectEl.createEl("option", {value: e, text: t}), this
        }, a.prototype.addOptions = function (e) {
            for (var t in e) e.hasOwnProperty(t) && this.selectEl.createEl("option", {value: t, text: e[t]});
            return this
        }, a.prototype.getValue = function () {
            return this.selectEl.value
        }, a.prototype.setValue = function (e) {
            return this.selectEl.value = e, this
        }, a.prototype.onChange = function (e) {
            return this.changeCallback = e, this
        }, a
    }(pt), Lt = function (e) {
        function a(t) {
            var a = e.call(this) || this;
            return a.progressBar = t.createDiv("setting-progress-bar", (function (e) {
                a.lineEl = e.createDiv("setting-progress-bar-inner")
            })), a
        }

        return t(a, e), a.prototype.getValue = function () {
            return this.value
        }, a.prototype.setValue = function (e) {
            return e = Math.clamp(e, 0, 100), this.value = e, this.lineEl.style.width = "".concat(e, "%"), this
        }, a.prototype.setVisibility = function (e) {
            return this.progressBar.hidden = !e, this
        }, a
    }(pt), kt = function (e) {
        function a(t) {
            var a = e.call(this) || this;
            a.dynamicTooltip = !1;
            var n = a.sliderEl = t.createEl("input", {type: "range", cls: "slider"});
            return n.addEventListener("input", (function () {
                var e = a.changeCallback;
                e && e(a.getValue()), a.dynamicTooltip && a.showTooltip()
            })), n.addEventListener("click", (function (e) {
                e.stopPropagation()
            })), a
        }

        return t(a, e), a.prototype.setDisabled = function (t) {
            return e.prototype.setDisabled.call(this, t), this.sliderEl.disabled = t, this
        }, a.prototype.setLimits = function (e, t, a) {
            return this.sliderEl.setAttrs({min: e, max: t, step: a}), this
        }, a.prototype.getValue = function () {
            return this.sliderEl.valueAsNumber
        }, a.prototype.setValue = function (e) {
            this.sliderEl.valueAsNumber = e;
            var t = this.changeCallback;
            return t && t(e), this
        }, a.prototype.getValuePretty = function () {
            var e = this.sliderEl, t = this.getValue();
            return "any" === e.step || parseFloat(e.step) < 1 ? t.toFixed(2) : t.toString()
        }, a.prototype.setDynamicTooltip = function () {
            var e = this.sliderEl;
            return e.addEventListener("mouseenter", this.showTooltip.bind(this)), e.addEventListener("mouseleave", at), this.dynamicTooltip = !0, this
        }, a.prototype.showTooltip = function () {
            tt(this.sliderEl, this.getValuePretty(), {placement: "top"})
        }, a.prototype.onChange = function (e) {
            return this.changeCallback = e, this
        }, a
    }(pt), At = function (e) {
        function a(t) {
            var a = e.call(this) || this;
            return a.colorPickerEl = t.createEl("input", {type: "color"}), a.colorPickerEl.addEventListener("change", (function () {
                var e = a.changeCallback;
                e && e(a.getValue())
            })), a
        }

        return t(a, e), a.prototype.setDisabled = function (t) {
            return e.prototype.setDisabled.call(this, t), this.colorPickerEl.disabled = t, this
        }, a.prototype.getValue = function () {
            return this.colorPickerEl.value
        }, a.prototype.getValueRgb = function () {
            return vt(this.getValue()) || {r: 0, g: 0, b: 0}
        }, a.prototype.getValueHsl = function () {
            return function (e) {
                var t = e.r, a = e.g, n = e.b;
                t /= 255, a /= 255, n /= 255;
                var r, o, i = Math.max(t, a, n), l = Math.min(t, a, n), c = (i + l) / 2;
                if (i == l) r = o = 0; else {
                    var h = i - l;
                    switch (o = c > .5 ? h / (2 - i - l) : h / (i + l), i) {
                        case t:
                            r = (a - n) / h + (a < n ? 6 : 0);
                            break;
                        case a:
                            r = (n - t) / h + 2;
                            break;
                        case n:
                            r = (t - a) / h + 4
                    }
                    r /= 6
                }
                return {h: Math.round(360 * r), s: Math.round(100 * o), l: Math.round(100 * c)}
            }(this.getValueRgb())
        }, a.prototype.getValueInt = function () {
            return parseInt(this.getValue().slice(1), 16)
        }, a.prototype.setValue = function (e) {
            this.colorPickerEl.value = e;
            var t = this.changeCallback;
            return t && t(this.getValue()), this
        }, a.prototype.setValueRgb = function (e) {
            return this.setValue(function (e) {
                var t = e.r, a = e.g, n = e.b;
                return "#" + st(t) + st(a) + st(n)
            }(e))
        }, a.prototype.setValueHsl = function (e) {
            return this.setValueRgb(Mt(e))
        }, a.prototype.setValueInt = function (e) {
            return this.setValue("#" + e.toString(16).padStart(6, "0"))
        }, a.prototype.onChange = function (e) {
            return this.changeCallback = e, this
        }, a
    }(pt);
    !function (e) {
        for (var t = e; t !== t.parent && null !== t.parent;) t = t.parent;
        var a = t.require;
        if (a) {
            var n = a("electron");
            if (n) {
                if (e.electron = n, !n.remote) try {
                    n.remote = a("@electron/remote")
                } catch (e) {
                    console.error(e)
                }
                e.electronWindow = n.remote.getCurrentWindow();
                var r = e.open;
                e.open = function (e, t, a) {
                    return "string" == typeof e && 0 === e.indexOf("file:") ? (n.ipcRenderer.send("open-url", e), null) : r.apply(this, arguments)
                }, e.parent === e && function (e) {
                    var t = e.electron.ipcRenderer.sendSync("frame") || "hidden";
                    e.titlebarStyle = t, "native" !== t && (e.frameDom = new ot(e.electronWindow, e), "hidden" === t && e.document.body.addClass("is-hidden-frameless"))
                }(e)
            }
        }
    }(window), function (e) {
        e || (e = document);
        var t = e.body;
        t.on("mouseover", "[aria-label]", Ye), t.on("mouseout", "[aria-label]", Je), t.addEventListener("mouseup", at)
    }(), function (e) {
        try {
            var t = "";
            l ? t = "mod-macos" : c ? t = "mod-windows" : h && (t = "mod-linux"), t && e.body.addClass(t)
        } catch (e) {
            console.error(e)
        }
    }(document);
    try {
        electron.remote.getCurrentWebContents().setZoomLevel(0)
    } catch (e) {
    }
    ready((function () {
        return a(void 0, void 0, void 0, (function () {
            function e(e, t) {
                var a = h.dialog.showOpenDialogSync({
                    title: e,
                    properties: ["openDirectory", "createDirectory", "dontAddToRecent"],
                    defaultPath: t
                });
                return a && a.length > 0 ? a[0] : null
            }

            function t() {
                var r = this, o = M.sendSync("vault-list"), i = Object.keys(o).length > 0;
                for (var l in f.empty(), m.toggle(i), C.toggle(!i), o) o.hasOwnProperty(l) && (o[l].id = l);
                var h = Object.values(o);
                h.sort((function (e, t) {
                    return t.ts - e.ts
                }));
                for (var u = function (o) {
                    var i = f.createDiv("recent-vaults-list-item"), l = s.basename(o.path), h = s.dirname(o.path),
                        u = i.createDiv({cls: "recent-vaults-list-item-name", text: l});
                    i.createDiv({cls: "recent-vaults-list-item-path", text: h});
                    var d = function (e, i) {
                        return a(r, void 0, void 0, (function () {
                            var a, r;
                            return n(this, (function (n) {
                                return e === o.path ? [2] : v.existsSync(e) ? (new lt(c("msg-error-".concat(i, "-exists"))), [2]) : !(a = s.relative(o.path, e)) || a.startsWith("..") || s.isAbsolute(a) ? (r = M.sendSync("vault-move", o.path, e), new lt("EVAULTOPEN" === r ? c("msg-error-".concat(i, "-open")) : r ? c("msg-".concat(i, "-failed")) + " " + r : c("msg-".concat(i, "-success"))), t(), [2]) : (new lt(c.msgErrorNested()), [2])
                            }))
                        }))
                    }, p = function () {
                        u.contentEditable = "true", u.tabIndex = -1, xe(u);
                        var e = function () {
                            a(), n(), u.setText(l)
                        }, t = function (e) {
                            e.isComposing || "Enter" !== e.key && "Escape" !== e.key || (a(), "Enter" === e.key && n(), u.setText(l))
                        }, a = function () {
                            u.removeAttribute("contenteditable"), u.removeAttribute("tabindex"), u.removeEventListener("blur", e), u.removeEventListener("keydown", t)
                        }, n = function () {
                            var e = u.innerText;
                            d(s.join(h, e), "rename")
                        };
                        u.addEventListener("blur", e), u.addEventListener("keydown", t), u.addEventListener("click", (function (e) {
                            e.preventDefault()
                        }))
                    }, m = function (r) {
                        r.preventDefault(), (new Re).addItem((function (e) {
                            return e.setIcon("lucide-folder-open").setTitle(w.isMacOS ? c.optionRevealVaultInExplorerMac() : c.optionRevealVaultInExplorer()).onClick((function () {
                                var e;
                                e = o.path, window.electron && (w.isMacOS ? electron.remote.shell : electron.shell).showItemInFolder(e)
                            }))
                        })).addItem((function (e) {
                            return e.setIcon("lucide-edit-3").setTitle(c.optionRenameVault()).onClick(p)
                        })).addItem((function (t) {
                            return t.setIcon("lucide-send").setTitle(c.optionMoveVault()).onClick((function () {
                                var t = e(c.msgMoveSelectDest(), h);
                                t && d(s.join(t, l), "move")
                            }))
                        })).addItem((function (e) {
                            return e.setIcon("lucide-copy").setTitle(c.optionCopyVaultID()).onClick((function () {
                                navigator.clipboard.writeText(o.id), new lt(ue.interface.copied_generic())
                            }))
                        })).addItem((function (e) {
                            return e.setIcon("lucide-x").setTitle(c.optionRemove()).onClick((function () {
                                M.sendSync("vault-remove", o.path) ? function (e) {
                                    a(this, void 0, void 0, (function () {
                                        return n(this, (function (t) {
                                            try {
                                                indexedDB.databases().then((function (t) {
                                                    for (var a = 0, n = t; a < n.length; a++) {
                                                        var r = n[a];
                                                        r.name.startsWith(e + "-") && X(r.name)
                                                    }
                                                }))
                                            } catch (e) {
                                            }
                                            try {
                                                ee((function (t) {
                                                    return t.startsWith(e + "-")
                                                }))
                                            } catch (e) {
                                            }
                                            return [2]
                                        }))
                                    }))
                                }(o.id) : new lt(c.msgErrorRemoveCurrentOpenVault()), t()
                            }))
                        })).showAtMouseEvent(r)
                    };
                    i.addEventListener("contextmenu", (function (e) {
                        return m(e)
                    })), i.createDiv("recent-vaults-list-item-option-button", (function (e) {
                        Ze(e, "lucide-more-vertical"), rt(e, ue.interface.menu.moreOptions()), e.addEventListener("click", (function (e) {
                            return m(e)
                        }))
                    })), i.addEventListener("click", (function (e) {
                        if (!e.defaultPrevented) {
                            e.preventDefault();
                            var t = M.sendSync("vault-open", o.path, !1);
                            !0 === t ? window.close() : new lt("".concat(c.msgErrorFailedToOpenVault(), " ").concat(t, "."))
                        }
                    })), rt(i, o.path, {placement: "right"})
                }, d = 0, p = h; d < p.length; d++) {
                    u(p[d])
                }
            }

            function r() {
                var e = this;
                J.empty(), function (e) {
                    for (var t = createDiv("loader-cube"), a = 1; a <= 9; a++) t.createDiv({cls: "sk-cube sk-cube".concat(a)});
                    e && e.appendChild(t)
                }(J), y(H, J, "right", (function () {
                    return a(e, void 0, void 0, (function () {
                        var e, t, a;
                        return n(this, (function (n) {
                            switch (n.label) {
                                case 0:
                                    e = [], n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, (r = o.token, T("/vault/list", {token: r}))];
                                case 2:
                                    return t = n.sent(), e = t.vaults.concat(t.shared), [3, 4];
                                case 3:
                                    return a = n.sent(), new lt(a.message), [3, 4];
                                case 4:
                                    return $(e), [2]
                            }
                            var r
                        }))
                    }))
                }))
            }

            var o, i, l, c, h, M, s, v, u, d, p, m, f, g, V, H, b, C, L, k, A, Z, x, E, z, S, q, I, B, N, F, j, W, R, K,
                U, _, G, Y, J, $, Q;
            return n(this, (function (w) {
                switch (w.label) {
                    case 0:
                        return Ne.init(), [4, Me];
                    case 1:
                        return w.sent(), document.body.addClass("is-focused"), o = new O, i = ue.plugins.sync, l = ue.setting.account, c = ue.interface.startScreen, h = electron.remote, M = electron.ipcRenderer, setTimeout((function () {
                            ee((function (e) {
                                return e.startsWith("shownLivePreview-") || e.endsWith("-legacyDeprecation")
                            }))
                        }), 0), s = window.require("path"), v = window.require("original-fs"), u = document.body.createDiv("starter-screen"), (d = localStorage.getItem("obsidian-vault-path")) && (localStorage.removeItem("obsidian-vault-path"), !0 === M.sendSync("vault-open", d, !1) && window.close()), p = u.createDiv("starter-screen-inner"), m = p.createDiv("recent-vaults"), f = m.createDiv("recent-vaults-list"), g = p.createDiv("splash"), (V = g.createDiv("splash-brand")).createDiv("splash-brand-logo").appendChild((T = 90, (X = document.createElementNS("http://www.w3.org/2000/svg", "svg")).setAttrs({
                            viewBox: "0 0 512 512",
                            width: String(T),
                            height: String(T)
                        }), X.innerHTML = '<radialGradient id="logo-bottom-left" cx="0" cy="0" gradientTransform="matrix(-59 -225 150 -39 161.4 470)" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#fff" stop-opacity=".4"/><stop offset="1" stop-opacity=".1"/></radialGradient><radialGradient id="logo-top-right" cx="0" cy="0" gradientTransform="matrix(50 -379 280 37 360 374.2)" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset="1" stop-color="#fff" stop-opacity=".1"/></radialGradient><radialGradient id="logo-top-left" cx="0" cy="0" gradientTransform="matrix(69 -319 218 47 175.4 307)" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity=".4"/></radialGradient><radialGradient id="logo-bottom-right" cx="0" cy="0" gradientTransform="matrix(-96 -163 187 -111 335.3 512.2)" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-opacity=".3"/></radialGradient><radialGradient id="logo-top-edge" cx="0" cy="0" gradientTransform="matrix(-36 166 -112 -24 310 128.2)" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".2"/></radialGradient><radialGradient id="logo-left-edge" cx="0" cy="0" gradientTransform="matrix(88 89 -190 187 111 220.2)" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#fff" stop-opacity=".2"/><stop offset="1" stop-color="#fff" stop-opacity=".4"/></radialGradient><radialGradient id="logo-bottom-edge" cx="0" cy="0" gradientTransform="matrix(9 130 -276 20 215 284)" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#fff" stop-opacity=".2"/><stop offset="1" stop-color="#fff" stop-opacity=".3"/></radialGradient><radialGradient id="logo-middle-edge" cx="0" cy="0" gradientTransform="matrix(-198 -104 327 -623 400 399.2)" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#fff" stop-opacity=".2"/><stop offset=".5" stop-color="#fff" stop-opacity=".2"/><stop offset="1" stop-color="#fff" stop-opacity=".3"/></radialGradient><clipPath id="clip"><path d="M.2.2h512v512H.2z"/></clipPath><g clip-path="url(#clip)"><path d="M382.3 475.6c-3.1 23.4-26 41.6-48.7 35.3-32.4-8.9-69.9-22.8-103.6-25.4l-51.7-4a34 34 0 0 1-22-10.2l-89-91.7a34 34 0 0 1-6.7-37.7s55-121 57.1-127.3c2-6.3 9.6-61.2 14-90.6 1.2-7.9 5-15 11-20.3L248 8.9a34.1 34.1 0 0 1 49.6 4.3L386 125.6a37 37 0 0 1 7.6 22.4c0 21.3 1.8 65 13.6 93.2 11.5 27.3 32.5 57 43.5 71.5a17.3 17.3 0 0 1 1.3 19.2 1494 1494 0 0 1-44.8 70.6c-15 22.3-21.9 49.9-25 73.1z" fill="#6c31e3"/><path d="M165.9 478.3c41.4-84 40.2-144.2 22.6-187-16.2-39.6-46.3-64.5-70-80-.6 2.3-1.3 4.4-2.2 6.5L60.6 342a34 34 0 0 0 6.6 37.7l89.1 91.7a34 34 0 0 0 9.6 7z" fill="url(#logo-bottom-left)"/><path d="M278.4 307.8c11.2 1.2 22.2 3.6 32.8 7.6 34 12.7 65 41.2 90.5 96.3 1.8-3.1 3.6-6.2 5.6-9.2a1536 1536 0 0 0 44.8-70.6 17 17 0 0 0-1.3-19.2c-11-14.6-32-44.2-43.5-71.5-11.8-28.2-13.5-72-13.6-93.2 0-8.1-2.6-16-7.6-22.4L297.6 13.2a34 34 0 0 0-1.5-1.7 96 96 0 0 1 2 54 198.3 198.3 0 0 1-17.6 41.3l-7.2 14.2a171 171 0 0 0-19.4 71c-1.2 29.4 4.8 66.4 24.5 115.8z" fill="url(#logo-top-right)"/><path d="M278.4 307.8c-19.7-49.4-25.8-86.4-24.5-115.9a171 171 0 0 1 19.4-71c2.3-4.8 4.8-9.5 7.2-14.1 7.1-13.9 14-27 17.6-41.4a96 96 0 0 0-2-54A34.1 34.1 0 0 0 248 9l-105.4 94.8a34.1 34.1 0 0 0-10.9 20.3l-12.8 85-.5 2.3c23.8 15.5 54 40.4 70.1 80a147 147 0 0 1 7.8 24.8c28-6.8 55.7-11 82.1-8.3z" fill="url(#logo-top-left)"/><path d="M333.6 511c22.7 6.2 45.6-12 48.7-35.4a187 187 0 0 1 19.4-63.9c-25.6-55-56.5-83.6-90.4-96.3-36-13.4-75.2-9-115 .7 8.9 40.4 3.6 93.3-30.4 162.2 4 1.8 8.1 3 12.5 3.3 0 0 24.4 2 53.6 4.1 29 2 72.4 17.1 101.6 25.2z" fill="url(#logo-bottom-right)"/><g clip-rule="evenodd" fill-rule="evenodd"><path d="M254.1 190c-1.3 29.2 2.4 62.8 22.1 112.1l-6.2-.5c-17.7-51.5-21.5-78-20.2-107.6a174.7 174.7 0 0 1 20.4-72c2.4-4.9 8-14.1 10.5-18.8 7.1-13.7 11.9-21 16-33.6 5.7-17.5 4.5-25.9 3.8-34.1 4.6 29.9-12.7 56-25.7 82.4a177.1 177.1 0 0 0-20.7 72z" fill="url(#logo-top-edge)"/><path d="M194.3 293.4c2.4 5.4 4.6 9.8 6 16.5L195 311c-2.1-7.8-3.8-13.4-6.8-20-17.8-42-46.3-63.6-69.7-79.5 28.2 15.2 57.2 39 75.7 81.9z" fill="url(#logo-left-edge)"/><path d="M200.6 315.1c9.8 46-1.2 104.2-33.6 160.9 27.1-56.2 40.2-110.1 29.3-160z" fill="url(#logo-bottom-edge)"/><path d="M312.5 311c53.1 19.9 73.6 63.6 88.9 100-19-38.1-45.2-80.3-90.8-96-34.8-11.8-64.1-10.4-114.3 1l-1.1-5c53.2-12.1 81-13.5 117.3 0z" fill="url(#logo-middle-edge)"/></g></g>', X)), V.createDiv("splash-brand-logo-text").appendChild(function (e) {
                            var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            return t.setAttrs({
                                viewBox: "0 0 512 82",
                                width: String(e),
                                fill: "currentColor"
                            }), t.innerHTML = '<path d="M46.9 0c27 0 46.9 17.4 46.9 41S74 81.7 46.8 81.7C19.8 81.8 0 64.5 0 41S19.7 0 46.9 0zm0 14.3c-17.8 0-30.2 10.6-30.2 26.6s12.4 26.7 30.2 26.7S77 56.9 77 40.9 64.7 14.3 46.9 14.3zm70.8 59.3v7h-15.5V1.2h15.5v28.3c4-4.4 11.6-8.2 21.8-8.2 20 0 31.6 13.8 31.6 30.2 0 16.6-11.7 30.3-31.6 30.3a29.3 29.3 0 0 1-21.8-8.2zm-.6-22.4v.8c0 9.8 8.6 17.2 19.6 17.2 10.5 0 19.6-6.3 19.6-17.7 0-11.2-9-17.6-19.6-17.6-11 0-19.6 7.3-19.6 17.3zm56.3 18.5 8.8-10.2a33 33 0 0 0 25.3 10.3c8.5 0 14.2-1.9 14.2-6.2 0-4.4-5.3-4.4-18.7-6.1-14.6-1.9-26.2-4.4-26.2-16.8 0-11.5 11-19.4 28.7-19.4 13.9 0 24.7 4.8 30.1 11l-8.8 9.4a29.2 29.2 0 0 0-22-8.4c-8.7 0-12.9 2.3-12.9 5.7 0 3.7 4.1 4.1 16.7 5.7 15.3 1.7 28.5 4 28.5 17.3s-13.6 19.8-30.2 19.8c-14 0-26.9-4.4-33.5-12.1zm70.8-54.1V1.2h15.9v14.4zm15.7 6.8v58.2h-15.4V22.4zm62 51.2a29 29 0 0 1-21.8 8.2c-20 0-31.6-13.7-31.6-30.3 0-16.4 11.7-30.2 31.6-30.2 10.2 0 17.8 3.8 21.8 8.2V1.2h15.5v79.4h-15.5zm.6-22.4c0-10-8.6-17.3-19.6-17.3-10.5 0-19.6 6.4-19.6 17.6 0 11.4 9 17.7 19.6 17.7 11 0 19.6-7.4 19.6-17.2zm26.6-35.6V1.2h15.8v14.4zm15.7 6.8v58.2h-15.5V22.4zm32.7 59.4c-13.9 0-24.4-6.3-24.4-18 0-10.7 9.2-16.7 23.1-18.1l24.2-2.6v-.4c0-4.9-4.3-8.9-14.5-8.9-8.5 0-15.4 3.8-17.4 8.9L375 38.2c3.6-10.2 16.5-16.9 31.4-16.9 18.2 0 28.9 7.5 28.9 21.6v22.9c0 3.2 1.4 4.6 8 3.2v11.6c-12.7 2.6-19-1.5-21.4-7.2a36 36 0 0 1-24.5 8.4zm23-23.6v-4l-22 2.4c-6.8.8-10.4 2.5-10.4 6.8 0 4.4 4.4 6.6 11.5 6.6 9.5 0 20.8-4 20.8-11.8zM450 80.6V22.4h15.4v7.3a27.8 27.8 0 0 1 21.3-8.4c15.7 0 25.3 10.8 25.3 27v32.3h-15.5V52c0-10-5-16.6-15-16.6-10.3 0-16 6.4-16 16.8v28.5z"/>', t
                        }(128)), V.createDiv({
                            cls: "splash-brand-version",
                            text: "".concat(c.labelVersion(), " ").concat(M.sendSync("version"))
                        }), H = g.createDiv("open-vault-options-container"), b = H.createDiv("open-vault-options mod-open-vault"), C = b.createDiv("quick-start-container u-center-text"), new mt(C).setCta().setButtonText(c.buttonQuickStart()).onClick((function () {
                            var e = M.sendSync("get-default-vault-path"), t = M.sendSync("vault-open", e, !0);
                            !0 === t ? window.close() : new lt("".concat(c.msgErrorFailedToOpenVault(), " ").concat(t, "."))
                        })), new ut(b).setName(c.optionCreateVault()).setDesc(c.optionCreateVaultDescription()).addButton((function (e) {
                            return e.setButtonText(c.buttonCreateVault()).setCta().onClick((function () {
                                E = null, z = b, q.setName(c.labelCreateLocalVault()), y(H, S, "right")
                            }))
                        })), new ut(b).setName(c.optionOpenFolderAsVault()).setDesc(c.optionOpenFolderAsVaultDescription()).addButton((function (t) {
                            return t.setButtonText(c.buttonOpen()).onClick((function () {
                                var t = e(c.optionOpenFolderAsVault());
                                if (t) {
                                    var a = M.sendSync("vault-open", t, !1);
                                    !0 === a ? window.close() : new lt("".concat(c.msgErrorFailedToOpenVault(), " ").concat(a, "."))
                                }
                            }))
                        })), L = new ut(b).setName(c.optionConnectObsidianSync()).setDesc(c.optionConnectObsidianSyncDescription()), o.email && o.token ? L.addButton((function (e) {
                            return e.setButtonText(c.buttonSetup()).onClick((function () {
                                return r()
                            }))
                        })) : L.addButton((function (e) {
                            return e.setButtonText(c.buttonSignIn()).onClick((function () {
                                y(H, N, "right")
                            }))
                        })), k = localStorage.getItem(te) || ae, Ze((A = new ut(b).addDropdown((function (e) {
                            for (var t = 0, a = re; t < a.length; t++) {
                                var n = a[t];
                                e.addOption(n, ne[n])
                            }
                            e.setValue(k), e.onChange((function (e) {
                                e === ae ? localStorage.removeItem(te) : localStorage.setItem(te, e), window.location.reload()
                            }))
                        }))).nameEl, "help"), rt(A.nameEl, c.optionGetHelp()), A.nameEl.addEventListener("click", (function () {
                            M.sendSync("help")
                        })), A.setClass("mod-change-language"), x = "", E = null, z = b, (S = createDiv("open-vault-options mod-create-vault")).createDiv({cls: "back-button"}, (function (e) {
                            Ze(e, "lucide-arrow-left"), e.appendText(c.buttonBack()), e.addEventListener("click", (function () {
                                y(H, z, "left")
                            }))
                        })), q = new ut(S).setHeading(), new ut(S).setName(c.optionNewVaultName()).setDesc(c.optionNewVaultNameDescription()).addText((function (e) {
                            return e.setPlaceholder(c.optionNewVaultName()).then((function (e) {
                                return Z = e
                            }))
                        })), I = new ut(S).setName(c.optionNewVaultLocation()).setDesc(c.optionNewVaultLocationDescription()).addButton((function (t) {
                            return t.setButtonText(c.buttonBrowse()).onClick((function () {
                                var t = e(c.optionNewVaultLocation());
                                t && B(t)
                            }))
                        })), B = function (e) {
                            x = e, I.setDesc(createFragment((function (t) {
                                t.appendText(c.labelNewVaultLocationPreview()), t.createSpan({cls: "u-pop", text: e})
                            })))
                        }, S.createDiv("u-center-text", (function (e) {
                            e.createEl("button", {cls: "mod-cta", text: c.buttonCreateVault()}, (function (e) {
                                e.addEventListener("click", (function () {
                                    var e = Z.getValue().trim();
                                    if (e) if (x) {
                                        var t = x + "/" + e;
                                        try {
                                            var a = M.sendSync("vault-open", t, !0);
                                            if (!0 === a) return E ? (M.sendSync("vault-message", t, {
                                                action: "sync-setup",
                                                vault: JSON.stringify(E)
                                            }), y(H, b, "left")) : M.sendSync("vault-message", t, {action: "vault-setup"}), void window.close();
                                            new lt("".concat(c.msgFailedToCreateVault(), " ").concat(a, "."))
                                        } catch (e) {
                                            new lt(c.msgFailedToCreateVaultAtLocation())
                                        }
                                    } else new lt(c.msgInvalidFolder()); else new lt(c.msgEmptyVaultName())
                                }))
                            }))
                        })), (N = createDiv("open-vault-options mod-login")).createDiv({cls: "back-button"}, (function (e) {
                            Ze(e, "lucide-arrow-left"), e.appendText(c.buttonBack()), e.addEventListener("click", (function () {
                                y(H, b, "left")
                            }))
                        })), F = N.createDiv("message-container", (function (e) {
                            j = e.createDiv("message mod-error")
                        })), U = function (e) {
                            j.setText(e), F.show()
                        }, function () {
                            j.setText(""), F.hide()
                        }(), _ = new ut(N).setName(c.optionUserEmail()).addText((function (e) {
                            return e.setPlaceholder(c.placeholderYourEmail()).then((function (e) {
                                return W = e
                            }))
                        })), G = new ut(N).setName(c.optionUserPassword()).addText((function (e) {
                            return e.setPlaceholder(c.placeholderYourPassword()).then((function (e) {
                                R = e, e.inputEl.setAttribute("type", "password")
                            }))
                        })), (Y = new ut(N).setName(l.labelMfaCode()).addText((function (e) {
                            K = e, e.inputEl.setAttribute("maxlength", "6"), e.inputEl.inputMode = "numeric"
                        }))).settingEl.hide(), new ut(N).addButton((function (e) {
                            return e.setButtonText(c.buttonSignIn()).setCta().onClick((function () {
                                return a(void 0, void 0, void 0, (function () {
                                    var e, t, a, i, c;
                                    return n(this, (function (n) {
                                        switch (n.label) {
                                            case 0:
                                                if (e = W.getValue(), t = R.getValue(), a = K.getValue(), "" === e) return U(l.messageEmptyEmail()), [2];
                                                if (!e.contains("@")) return U(l.messageInvalidEmail()), [2];
                                                if ("" === t) return U(l.messageEmptyPassword()), [2];
                                                if ("" !== a && !/^\d{6}$/.test(a)) return U(l.mfaWrongFormat()), [2];
                                                n.label = 1;
                                            case 1:
                                                return n.trys.push([1, 3, , 4]), [4, P(o, e, t, a)];
                                            case 2:
                                                return n.sent(), [3, 4];
                                            case 3:
                                                return (i = n.sent()) instanceof D ? (c = i.error).contains("2FA code is incorrect") ? U(l.mfaVerificationFailed()) : c.contains("2FA code") ? (_.settingEl.hide(), G.settingEl.hide(), Y.settingEl.show()) : U(c) : U(i.message), [2];
                                            case 4:
                                                return r(), [2]
                                        }
                                    }))
                                }))
                            }))
                        })), J = createDiv("open-vault-options"), $ = function (e) {
                            if (J.empty(), J.createDiv({cls: "back-button"}, (function (e) {
                                Ze(e, "lucide-arrow-left"), e.appendText(c.buttonBack()), e.addEventListener("click", (function () {
                                    y(H, b, "left"), E = null
                                }))
                            })), 0 === e.length) J.createEl("p", {text: i.labelNotRemoteVaults()}); else for (var t = function (e) {
                                var t = createDiv("setting-icon", (function (t) {
                                    "share_uid" in e && e.share_uid ? (Ze(t, "lucide-users"), rt(t, c.tooltipSharedVault())) : (Ze(t, "vault"), rt(t, c.tooltipOwnVault()))
                                }));
                                new ut(J).setName(e.name).setDesc(c.optionConnectVaultDesc()).addButton((function (t) {
                                    return t.setButtonText(c.buttonConnect()).onClick((function () {
                                        Z.setValue(e.name), q.setName('Create synced local vault for "'.concat(e.name, '"')), z = J, B(M.sendSync("get-documents-path")), E = e, y(H, S, "right")
                                    }))
                                })).settingEl.prepend(t)
                            }, a = 0, n = e; a < n.length; a++) {
                                t(n[a])
                            }
                        }, Q = createDiv("open-vault-options"), new ut(Q).setName(c.optionNewVaultName()).setDesc(c.optionNewVaultNameDescription()), t(), function () {
                            a(this, void 0, void 0, (function () {
                                var e, t, a, r, o, i;
                                return n(this, (function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return e = M.sendSync("vault-list"), [4, indexedDB.databases()];
                                        case 1:
                                            t = n.sent(), a = 0, r = t, n.label = 2;
                                        case 2:
                                            return a < r.length ? (o = r[a]).name && o.name.endsWith("-browser") ? (i = o.name.slice(0, -8), e[i] ? [3, 4] : [4, indexedDB.deleteDatabase(o.name)]) : [3, 4] : [3, 5];
                                        case 3:
                                            n.sent(), n.label = 4;
                                        case 4:
                                            return a++, [3, 2];
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }))
                        }(), [2]
                }
                var T, X
            }))
        }))
    }))
})();
