(() => {
    "use strict";
    function t() {
        function t(t, e, n) {
            Object.defineProperty(t, e, {value: n, enumerable: false, configurable: true, writable: true})
        }

        function e(t, e, n) {
            Object.defineProperty(t, e, {get: n, enumerable: false, configurable: true})
        }

        var n = window;

        for (var r = 0, o = ["TouchEvent"]; r < o.length; r++) {
            var i = o[r];
            undefined === n[i] && (n[i] = function () {
            })
        }
        try {
            var s = window.matchMedia;
            s && !s("(prefers-color-scheme: dark)").addEventListener && (window.matchMedia = function (t) {
                var e = s(t);

                e.addEventListener || (e.addEventListener = function (t, e) {
                    this.addListener(e)
                });

                e.removeEventListener || (e.removeEventListener = function (t, e) {
                    this.removeListener(e)
                });

                return e;
            })
        } catch (t) {
            console.error(t)
        }

        window.ResizeObserver || (window.ResizeObserver = function () {
            function t() {
            }

            t.prototype.observe = function () {
            };

            t.prototype.unobserve = function () {
            };

            t.prototype.disconnect = function () {
            };

            return t;
        }());

        Object.isEmpty || t(Object, "isEmpty", (function (t) {
            for (var e in t) if (t.hasOwnProperty(e)) {
                return false;
            }
            return true;
        }));

        Object.each || (Object.each = function (t, e, n) {
            for (var r in t) if (t.hasOwnProperty(r) && false === e.call(n, t[r], r)) {
                return false;
            }
            return true;
        });

        Array.combine || (Array.combine = function (t) {
            var e = 0;
            for (var n = 0, r = t; n < r.length; n++) {
                e += r[n].length
            }
            var o = new Array(e);
            var i = 0;
            for (var s = 0, a = t; s < a.length; s++) {
                for (var p = 0, c = a[s]; p < c.length; p++) {
                    var u = c[p];
                    o[i] = u;
                    i++;
                }
            }
            return o
        });

        Array.prototype.first || t(Array.prototype, "first", (function () {
            if (0 !== this.length) {
                return this[0]
            }
        }));

        Array.prototype.last || t(Array.prototype, "last", (function () {
            if (0 !== this.length) {
                return this[this.length - 1]
            }
        }));

        Array.prototype.contains || t(Array.prototype, "contains", (function (t) {
            return -1 !== this.indexOf(t)
        }));

        Array.prototype.remove || t(Array.prototype, "remove", (function (t) {
            for (var e = this.length - 1; e >= 0; e--) {
                this[e] === t && this.splice(e, 1)
            }
        }));

        Array.prototype.shuffle || t(Array.prototype, "shuffle", (function () {
            var t;
            var e;
            for (var n = this.length; 0 !== n; ) {
                e = Math.floor(Math.random() * n);
                t = this[n -= 1];
                this[n] = this[e];
                this[e] = t;
            }
            return this
        }));

        Array.prototype.findLastIndex || t(Array.prototype, "findLastIndex", (function (t) {
            for (var e = this.length - 1; e <= 0; e--) {
                if (t(this[e], e)) {
                    return e;
                }
            }
            return -1
        }));

        Array.prototype.unique || t(Array.prototype, "unique", (function () {
            return Array.from(new Set(this).values())
        }));

        Math.clamp || (Math.clamp = function (t, e, n) {
            return Math.min(Math.max(t, e), n)
        });

        Math.square || (Math.square = function (t) {
            return t * t
        });

        String.isString || (String.isString = function (t) {
            return "string" == typeof t || t instanceof String
        });

        String.prototype.contains || (String.prototype.contains = function (t) {
            return -1 !== this.indexOf(t)
        });

        String.prototype.startsWith || (String.prototype.startsWith = function (t, e) {
            return this.substr(!e || e < 0 ? 0 : +e, t.length) === t
        });

        String.prototype.endsWith || (String.prototype.endsWith = function (t, e) {
            var n = undefined === e || e > this.length ? this.length : e;
            return this.substring(n - t.length, n) === t
        });

        String.prototype.format || (String.prototype.format = function () {
            var t = [];
            for (var e = 0; e < arguments.length; e++) {
                t[e] = arguments[e];
            }
            return this.replace(/{(\d+)}/g, (function (e, n) {
                return undefined !== t[n] ? t[n] : e;
            }));
        });

        Number.isNumber || t(Number, "isNumber", (function (t) {
            return "number" == typeof t
        }));

        t(window, "isBoolean", (function (t) {
            return "boolean" == typeof t
        }));

        var a = function (t) {
            var e = t.nodeType;
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) {
                    return t.textContent;
                }
                var n = [];
                for (var r = t.firstChild; r; r = r.nextSibling) {
                    n.push(a(r));
                }
                return n.join("")
            }
            return (3 === e || 4 === e) && t.nodeValue || ""
        };

        function p(t) {
            var e = this.style;
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }

        function c(t) {
            var e = this.style;
            for (var n in t) t.hasOwnProperty(n) && e.setProperty(n, t[n])
        }

        Element.prototype.getText = function () {
            return a(this)
        };

        Element.prototype.setText = function (t) {
            !function (t, e) {
                if (e instanceof DocumentFragment || e instanceof Node) {
                    t.empty();
                    return void t.appendChild(e);
                }
                String.isString(e) || (e = String(e));
                var n = t.nodeType;
                1 !== n && 9 !== n && 11 !== n || (t.textContent = e)
            }(this, t)
        };

        Element.prototype.addClass = function () {
            var t = [];
            for (var e = 0; e < arguments.length; e++) {
                t[e] = arguments[e];
            }
            this.addClasses(t)
        };

        Element.prototype.addClasses = function (t) {
            if (t) {
                for (var e = 0; e < t.length; e++) {
                    this.classList.add(t[e])
                }
            }
        };

        Element.prototype.removeClass = function () {
            var t = [];
            for (var e = 0; e < arguments.length; e++) {
                t[e] = arguments[e];
            }
            this.removeClasses(t)
        };

        Element.prototype.removeClasses = function (t) {
            for (var e = 0; e < t.length; e++) {
                this.classList.remove(t[e])
            }
        };

        Element.prototype.toggleClass = function (t, e) {
            t instanceof Array || (t = [t]);
            e ? this.addClasses(t) : this.removeClasses(t);
        };

        Element.prototype.hasClass = function (t) {
            return this.classList.contains(t)
        };

        [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach((function (e) {
            t(e, "prepend", (function () {
                var t = [];
                for (var e = 0; e < arguments.length; e++) {
                    t[e] = arguments[e];
                }
                var n = document.createDocumentFragment();
                for (var r = 0, o = t; r < o.length; r++) {
                    var i = o[r];
                    n.appendChild(i instanceof Node ? i : document.createTextNode(String(i)))
                }
                this.insertBefore(n, this.firstChild)
            }))
        }));

        Node.prototype.detach = function () {
            this.parentNode && this.parentNode.removeChild(this)
        };

        Node.prototype.empty = function () {
            for (; this.lastChild; ) {
                this.removeChild(this.lastChild)
            }
        };

        Node.prototype.insertAfter = function (t, e) {
            e ? this.insertBefore(t, e.nextSibling) : this.insertBefore(t, this.firstChild);
            return t;
        };

        Node.prototype.indexOf = function (t) {
            return Array.prototype.indexOf.call(this.childNodes, t)
        };

        Node.prototype.setChildrenInPlace = function (t) {
            var e = this.firstChild;
            var n = new Set(t);
            for (var r = 0, o = t; r < o.length; r++) {
                for (var i = o[r]; e && !n.has(e);) {
                    var s = e;
                    e = e.nextSibling;
                    this.removeChild(s);
                }
                i !== e ? this.insertBefore(i, e) : e = e.nextSibling
            }
            for (; e;) {
                s = e;
                e = e.nextSibling;
                this.removeChild(s);
            }
        };

        Node.prototype.appendText = function (t) {
            this.appendChild(document.createTextNode(t))
        };

        Node.prototype.instanceOf = function (t) {
            if (this instanceof t) {
                return true;
            }
            var e = this.win[t.name];
            return !!(e && this instanceof e) || !!((e = this.constructorWin[t.name]) && this instanceof e)
        };

        e(Node.prototype, "doc", (function () {
            return this.ownerDocument || document
        }));

        e(Node.prototype, "win", (function () {
            return this.doc.defaultView || window
        }));

        Node.prototype.constructorWin = window;

        Element.prototype.setAttr = function (t, e) {
            null === e ? this.removeAttribute(t) : this.setAttribute(t, String(e))
        };

        Element.prototype.setAttrs = function (t) {
            for (var e in t) if (t.hasOwnProperty(e)) {
                var n = t[e];
                this.setAttr(e, n)
            }
        };

        Element.prototype.getAttr = Element.prototype.getAttribute;

        t(Element.prototype, "matchParent", (function (t, e) {
            if (this.matches(t)) {
                return this;
            }
            if (this === e) {
                return null;
            }
            var n = this.parentElement;
            return n ? n.matchParent(t, e) : null
        }));

        Element.prototype.getCssPropertyValue = function (t, e) {
            return getComputedStyle(this, e).getPropertyValue(t).trim()
        };

        t(Element.prototype, "isActiveElement", (function () {
            for (var t = this; t;) {
                if (t.doc.activeElement !== t) {
                    return false;
                }
                var e = t.win.frameElement;
                if (!e) {
                    return t.win === activeWindow;
                }
                t = e
            }
            return false;
        }));

        HTMLElement.prototype.show || (HTMLElement.prototype.show = function () {
            "none" === this.style.display && (this.style.display = this.getAttribute("data-display") || "", this.removeAttribute("data-display"))
        });

        HTMLElement.prototype.hide || (HTMLElement.prototype.hide = function () {
            var t = this.style.display;
            "none" !== t && (this.style.display = "none", t ? this.setAttribute("data-display", t) : this.removeAttribute("data-display"))
        });

        HTMLElement.prototype.toggle || (HTMLElement.prototype.toggle = function (t) {
            t ? this.show() : this.hide()
        });

        HTMLElement.prototype.toggleVisibility || (HTMLElement.prototype.toggleVisibility = function (t) {
            this.style.visibility = t ? "" : "hidden"
        });

        t(HTMLElement.prototype, "isShown", (function () {
            return !!this.offsetParent
        }));

        e(HTMLElement.prototype, "innerWidth", (function () {
            var t = getComputedStyle(this);
            var e = parseFloat(t.paddingLeft);
            var n = parseFloat(t.paddingRight);
            isNaN(e) && (e = 0);
            isNaN(n) && (n = 0);
            return this.scrollWidth - e - n;
        }));

        e(HTMLElement.prototype, "innerHeight", (function () {
            var t = getComputedStyle(this);
            var e = parseFloat(t.paddingTop);
            var n = parseFloat(t.paddingBottom);
            isNaN(e) && (e = 0);
            isNaN(n) && (n = 0);
            return this.scrollHeight - e - n;
        }));

        t(HTMLElement.prototype, "setCssStyles", p);
        t(SVGElement.prototype, "setCssStyles", p);
        t(HTMLElement.prototype, "setCssProps", c);
        t(SVGElement.prototype, "setCssProps", c);

        t(HTMLElement.prototype, "addEventListeners", (function (t) {
            for (var e in t) if (t.hasOwnProperty(e)) {
                var n = e;
                var r = t[n];
                "function" == typeof r && this.addEventListener(n, r)
            }
        }));

        window.fish = function (t) {
            return document.querySelector(t)
        };

        window.fishAll = function (t) {
            return Array.prototype.slice.call(document.querySelectorAll(t))
        };

        Element.prototype.find = function (t) {
            return this.querySelector(t)
        };

        Element.prototype.findAll = function (t) {
            return Array.prototype.slice.call(this.querySelectorAll(t))
        };

        Element.prototype.findAllSelf = function (t) {
            var e = Array.prototype.slice.call(this.querySelectorAll(t));
            this.matches(t) && e.unshift(this);
            return e;
        };

        DocumentFragment.prototype.find = function (t) {
            return this.querySelector(t)
        };

        DocumentFragment.prototype.findAll = function (t) {
            return Array.prototype.slice.call(this.querySelectorAll(t))
        };

        Node.prototype.createEl = function (t, e, n) {
            "string" == typeof e && (e = {cls: e});
            (e = e || {}).parent = this;
            return createEl(t, e, n);
        };

        Node.prototype.createDiv = function (t, e) {
            return this.createEl("div", t, e)
        };

        Node.prototype.createSpan = function (t, e) {
            return this.createEl("span", t, e)
        };

        Node.prototype.createSvg = function (t, e, n) {
            "string" == typeof e && (e = {cls: e});
            (e = e || {}).parent = this;
            return createSvg(t, e, n);
        };

        window.createEl = function (t, e, n) {
            var r = document.createElement(t);
            "string" == typeof e && (e = {cls: e});
            var o = e || {};
            var i = o.cls;
            var s = o.text;
            var a = o.attr;
            var p = o.title;
            var c = o.value;
            var u = o.placeholder;
            var l = o.type;
            var f = o.parent;
            var d = o.prepend;
            var h = o.href;
            for (var y in (i && (Array.isArray(i) ? r.className = i.join(" ") : r.className = i), s && r.setText(s), a && r.setAttrs(a), undefined !== p && (r.title = p), undefined !== c && (r instanceof HTMLInputElement || r instanceof HTMLSelectElement || r instanceof HTMLOptionElement) && (r.value = c), l && r instanceof HTMLInputElement && (r.type = l), l && r instanceof HTMLStyleElement && r.setAttribute("type", l), u && r instanceof HTMLInputElement && (r.placeholder = u), h && (r instanceof HTMLAnchorElement || r instanceof HTMLLinkElement || r instanceof HTMLBaseElement) && (r.href = h), n && n(r), f && (d ? f.insertBefore(r, f.firstChild) : f.appendChild(r)), e)) if (e.hasOwnProperty(y) && y.startsWith("on")) {
                var m = y;
                var v = e[m];
                "function" == typeof v && r.addEventListener(m.substring(2), v)
            }
            return r
        };

        window.createDiv = function (t, e) {
            return createEl("div", t, e)
        };

        window.createSpan = function (t, e) {
            return createEl("span", t, e)
        };

        window.createSvg = function (t, e, n) {
            var r;
            var o = document.createElementNS("http://www.w3.org/2000/svg", t);
            "string" == typeof e && (e = {cls: e});
            var i = e || {};
            var s = i.cls;
            var a = i.attr;
            var p = i.parent;
            var c = i.prepend;
            s && (Array.isArray(s) ? (r = o.classList).add.apply(r, s) : o.classList.add(s));
            a && o.setAttrs(a);
            n && n(o);
            p && (c ? p.insertBefore(o, p.firstChild) : p.appendChild(o));
            return o;
        };

        window.createFragment = function (t) {
            var e = document.createDocumentFragment();
            t && t(e);
            return e;
        };

        var u = function (t, e, n, r) {
            var o = this._EVENTS;
            o || (o = {}, this._EVENTS = o);
            var i = o[t];
            i || (i = [], o[t] = i);
            var s = function (t) {
                var r = t.target;
                if (r.matchParent) {
                    var o = r.matchParent(e, t.currentTarget);
                    o && n.call(this, t, o)
                }
            };
            i.push({selector: e, listener: n, options: r, callback: s});
            this.addEventListener(t, s, r);
        };

        var l = function (t, e, n, r) {
            var o = this;
            var i = this._EVENTS;
            if (i) {
                var s = i[t];
                s && (i[t] = s.filter((function (i) {
                    if (i.selector === e && i.listener === n && i.options === r) {
                        var s = i.callback;
                        o.removeEventListener(t, s, r);
                        return false;
                    }
                    return true;
                })))
            }
        };

        HTMLElement.prototype.on = u;
        HTMLElement.prototype.off = l;
        Document.prototype.on = u;
        Document.prototype.off = l;

        HTMLElement.prototype.onClickEvent = function (t, e) {
            this.addEventListener("click", t, e);
            this.addEventListener("auxclick", t, e);
        };

        HTMLElement.prototype.trigger = function (t) {
            var e = document.createEvent("HTMLEvents");
            e.initEvent(t, true, false);
            this.dispatchEvent(e);
        };

        e(UIEvent.prototype, "targetNode", (function () {
            return this.target
        }));

        e(UIEvent.prototype, "win", (function () {
            return this.view || window
        }));

        e(UIEvent.prototype, "doc", (function () {
            return this.win.document
        }));

        UIEvent.prototype.instanceOf = function (t) {
            if (this instanceof t) {
                return true;
            }
            var e = this.view;
            if (!e) {
                return false;
            }
            var n = e[t.name];
            return !(!n || n === t) && this instanceof n
        };

        var f = new WeakMap;

        HTMLElement.prototype.onNodeInserted = function (t, e) {
            var n = this;

            var r = function (r) {
                n.isShown() && (e && o(), "node-inserted" === r.animationName && t())
            };

            var o = function () {
                n.removeEventListener("animationstart", r);
                var t = (f.get(n) || 0) - 1;
                t <= 0 ? (f.delete(n), n.removeClass("node-insert-event")) : f.set(n, t)
            };

            f.set(this, (f.get(this) || 0) + 1);
            this.addClass("node-insert-event");
            this.addEventListener("animationstart", r);
            return o;
        };

        HTMLElement.prototype.onWindowMigrated = function (t) {
            var e = this;
            var n = this.win;
            return this.onNodeInserted((function () {
                var r = e.win;
                r !== n && t(n = r)
            }))
        };

        window.ajax = function (t) {
            var e = t.method;
            var n = t.url;
            var r = t.success;
            var o = t.error;
            var i = t.data;
            var s = t.headers;
            var a = t.withCredentials;
            e = e || "GET";
            var p = new XMLHttpRequest;
            t.req = p;
            p.open(e, n, true);

            p.onload = function () {
                var t = p.status;
                var e = p.response;
                t >= 200 && t < 400 ? r && r(e, p) : o && o(e, p)
            };

            p.onerror = function (t) {
                o && o(t, p)
            };

            if ((s)) {
                for (var c in s) s.hasOwnProperty(c) && p.setRequestHeader(c, s[c]);
            }
            p.withCredentials = a || false;
            i ? (undefined === a && (p.withCredentials = true), String.isString(i) ? p.send(i) : i instanceof ArrayBuffer ? (p.setRequestHeader("Content-Type", "application/octet-stream"), p.send(i)) : (p.setRequestHeader("Content-Type", "application/json; charset=utf-8"), p.send(JSON.stringify(i)))) : p.send();
        };

        window.ajaxPromise = function (t) {
            return new Promise((function (e, n) {
                t.success = e;

                t.error = function (t, e) {
                    return n(e)
                };

                ajax(t);
            }));
        };

        window.ready = function (t) {
            "loading" !== document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
        };

        window.sleep = function (t) {
            return new Promise((function (e) {
                return window.setTimeout(e, t)
            }))
        };

        window.nextFrame = function () {
            return new Promise((function (t) {
                return window.requestAnimationFrame((function () {
                    return t()
                }))
            }))
        };

        window.activeWindow = window;
        window.activeDocument = document;
    }

    t();
    window.globalEnhance = t;
})();
