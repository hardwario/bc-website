function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}

function uncamel(e) {
    return e.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
    })
}

function setUnit(e, t) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + t : e
}

function setFilter(e, t, n) {
    var r = uncamel(t),
        i = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e[i + "filter"] = e[i + "filter"] || "", n = setUnit(n > jQuery.CSS.filters[t].max ? jQuery.CSS.filters[t].max : n, jQuery.CSS.filters[t].unit), e[i + "filter"] += r + "(" + n + ") ", delete e[t]
}

function isTouchSupported() {
    var e = nAgt.msMaxTouchPoints,
        t = "ontouchstart" in document.createElement("div");
    return !(!e && !t)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, n) {
        return he.isFunction(t) ? he.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? he.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? he.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n
        }) : Se.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) {
        var t = {};
        return he.each(e.match(_e) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function u(e) {
        throw e
    }

    function c(e, t, n, r) {
        var i;
        try {
            e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function d() {
        te.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), he.ready()
    }

    function p() {
        this.expando = he.expando + p.uid++
    }

    function f(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : De.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Me, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = f(n)
                } catch (e) {}
                Oe.set(e, t, n)
            } else n = void 0;
        return n
    }

    function y(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return he.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            c = (he.cssNumber[t] || "px" !== u && +l) && Be.exec(he.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do {
                o = o || ".5", c /= o, he.style(e, t, c + u)
            } while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }

    function m(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = He[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = he.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), He[r] = i, i)
    }

    function g(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Ee.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Fe(r) && (i[o] = m(r))) : "none" !== n && (i[o] = "none", Ee.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function v(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? he.merge([e], n) : n
    }

    function T(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"))
    }

    function b(e, t, n, r, i) {
        for (var o, a, s, l, u, c, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((o = e[f]) || 0 === o)
                if ("object" === he.type(o)) he.merge(p, o.nodeType ? [o] : o);
                else if (Ve.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (qe.exec(o) || ["", ""])[1].toLowerCase(), l = Ue[s] || Ue._default, a.innerHTML = l[1] + he.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
            he.merge(p, a.childNodes), (a = d.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (d.textContent = "", f = 0; o = p[f++];)
            if (r && he.inArray(o, r) > -1) i && i.push(o);
            else if (u = he.contains(o.ownerDocument, o), a = v(d.appendChild(o), "script"), u && T(a), n)
            for (c = 0; o = a[c++];) We.test(o.type || "") && n.push(o);
        return d
    }

    function w() {
        return !0
    }

    function P() {
        return !1
    }

    function k() {
        try {
            return te.activeElement
        } catch (e) {}
    }

    function S(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) S(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = P;
        else if (!i) return e;
        return 1 === o && (a = i, i = function(e) {
            return he().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = he.guid++)), e.each(function() {
            he.event.add(this, t, i, r, n)
        })
    }

    function x(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e
    }

    function C(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function j(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Y(e, t) {
        var n, r, i, o, a, s, l, u;
        if (1 === t.nodeType) {
            if (Ee.hasData(e) && (o = Ee.access(e), a = Ee.set(t, o), u = o.events)) {
                delete a.handle, a.events = {};
                for (i in u)
                    for (n = 0, r = u[i].length; n < r; n++) he.event.add(t, i, u[i][n])
            }
            Oe.hasData(e) && (s = Oe.access(e), l = he.extend({}, s), Oe.set(t, l))
        }
    }

    function _(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Re.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Q(e, t, r, i) {
        t = ie.apply([], t);
        var o, a, s, l, u, c, d = 0,
            p = e.length,
            f = p - 1,
            h = t[0],
            y = he.isFunction(h);
        if (y || p > 1 && "string" == typeof h && !pe.checkClone && tt.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            y && (t[0] = h.call(this, n, o.html())), Q(o, t, r, i)
        });
        if (p && (o = b(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (l = (s = he.map(v(o, "script"), C)).length; d < p; d++) u = o, d !== f && (u = he.clone(u, !0, !0), l && he.merge(s, v(u, "script"))), r.call(e[d], u, d);
            if (l)
                for (c = s[s.length - 1].ownerDocument, he.map(s, j), d = 0; d < l; d++) u = s[d], We.test(u.type || "") && !Ee.access(u, "globalEval") && he.contains(c, u) && (u.src ? he._evalUrl && he._evalUrl(u.src) : n(u.textContent.replace(rt, ""), c))
        }
        return e
    }

    function A(e, t, n) {
        for (var r, i = t ? he.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || he.cleanData(v(r)), r.parentNode && (n && he.contains(r.ownerDocument, r) && T(v(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function $(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || at(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !pe.pixelMarginRight() && ot.test(a) && it.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function I(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function E(e) {
        if (e in pt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
            if ((e = dt[n] + t) in pt) return e
    }

    function O(e) {
        var t = he.cssProps[e];
        return t || (t = he.cssProps[e] = E(e) || e), t
    }

    function D(e, t, n) {
        var r = Be.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function M(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += he.css(e, n + Ne[o], !0, i)), r ? ("content" === n && (a -= he.css(e, "padding" + Ne[o], !0, i)), "margin" !== n && (a -= he.css(e, "border" + Ne[o] + "Width", !0, i))) : (a += he.css(e, "padding" + Ne[o], !0, i), "padding" !== n && (a += he.css(e, "border" + Ne[o] + "Width", !0, i)));
        return a
    }

    function L(e, t, n) {
        var r, i = at(e),
            o = $(e, t, i),
            a = "border-box" === he.css(e, "boxSizing", !1, i);
        return ot.test(o) ? o : (r = a && (pe.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + M(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }

    function B(e, t, n, r, i) {
        return new B.prototype.init(e, t, n, r, i)
    }

    function N() {
        ht && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(N) : e.setTimeout(N, he.fx.interval), he.fx.tick())
    }

    function F() {
        return e.setTimeout(function() {
            ft = void 0
        }), ft = he.now()
    }

    function z(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Ne[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function H(e, t, n) {
        for (var r, i = (q.tweeners[t] || []).concat(q.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function R(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = he.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = he.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function q(e, t, n) {
        var r, i, o = 0,
            a = q.prefilters.length,
            s = he.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = ft || F(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);
                return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: he.extend({}, t),
                opts: he.extend(!0, {
                    specialEasing: {},
                    easing: he.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ft || F(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = he.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (R(c, u.opts.specialEasing); o < a; o++)
            if (r = q.prefilters[o].call(u, e, c, u.opts)) return he.isFunction(r.stop) && (he._queueHooks(u.elem, u.opts.queue).stop = he.proxy(r.stop, r)), r;
        return he.map(c, H, u), he.isFunction(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), he.fx.timer(he.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function W(e) {
        return (e.match(_e) || []).join(" ")
    }

    function U(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function V(e, t, n, r) {
        var i;
        if (Array.isArray(t)) he.each(t, function(t, i) {
            n || Ct.test(e) ? r(e, i) : V(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== he.type(t)) r(e, t);
        else
            for (i in t) V(e + "[" + i + "]", t[i], n, r)
    }

    function X(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(_e) || [];
            if (he.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function G(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, he.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            a = e === Lt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function K(e, t) {
        var n, r, i = he.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && he.extend(!0, e, r), e
    }

    function Z(e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    l.unshift(i);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function J(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(a = u[l + " " + o] || u["* " + o]))
                for (i in u)
                    if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var ee = [],
        te = e.document,
        ne = Object.getPrototypeOf,
        re = ee.slice,
        ie = ee.concat,
        oe = ee.push,
        ae = ee.indexOf,
        se = {},
        le = se.toString,
        ue = se.hasOwnProperty,
        ce = ue.toString,
        de = ce.call(Object),
        pe = {},
        fe = "3.2.1",
        he = function(e, t) {
            return new he.fn.init(e, t)
        },
        ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ge = /-([a-z])/g,
        ve = function(e, t) {
            return t.toUpperCase()
        };
    he.fn = he.prototype = {
        jquery: fe,
        constructor: he,
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return he.each(this, e)
        },
        map: function(e) {
            return this.pushStack(he.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    }, he.extend = he.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], r = e[t], a !== r && (u && r && (he.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {}, a[t] = he.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, he.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === he.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== le.call(e) || (t = ne(e)) && ("function" != typeof(n = ue.call(t, "constructor") && t.constructor) || ce.call(n) !== de))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[le.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ve)
        },
        each: function(e, t) {
            var n, i = 0;
            if (r(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ye, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ae.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var i, o, a = 0,
                s = [];
            if (r(e))
                for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
            return ie.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return r = re.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(re.call(arguments)))
            }, i.guid = e.guid = e.guid || he.guid++, i
        },
        now: Date.now,
        support: pe
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        se["[object " + t + "]"] = t.toLowerCase()
    });
    var Te = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, c, p, f = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : B) !== A && Q(t), t = t || A, I)) {
                if (11 !== h && (l = ye.exec(e)))
                    if (i = l[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && M(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (l[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && b.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(i)), n
                    }
                if (b.qsa && !R[e + " "] && (!E || !E.test(e))) {
                    if (1 !== h) f = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(Te, be) : t.setAttribute("id", s = L), o = (c = S(e)).length; o--;) c[o] = "#" + s + " " + d(c[o]);
                        p = c.join(","), f = me.test(e) && u(t.parentNode) || t
                    }
                    if (p) try {
                        return G.apply(n, f.querySelectorAll(p)), n
                    } catch (e) {} finally {
                        s === L && t.removeAttribute("id")
                    }
                }
            }
            return C(e.replace(oe, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[L] = !0, e
        }

        function i(e) {
            var t = A.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Pe(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {}

        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = F++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, l) {
                var u, c, d, p = [N, s];
                if (l) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (d = t[L] || (t[L] = {}), c = d[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((u = c[o]) && u[0] === N && u[1] === s) return p[2] = u[2];
                                if (c[o] = p, p[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function h(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function y(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
            return a
        }

        function m(e, t, n, i, o, a) {
            return i && !i[L] && (i = m(i)), o && !o[L] && (o = m(o, a)), r(function(r, a, s, l) {
                var u, c, d, p = [],
                    f = [],
                    m = a.length,
                    g = r || h(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !r && t ? g : y(g, p, e, s, l),
                    T = n ? o || (r ? e : m || i) ? [] : a : v;
                if (n && n(v, T, s, l), i)
                    for (u = y(T, f), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (T[f[c]] = !(v[f[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = T.length; c--;)(d = T[c]) && u.push(v[c] = d);
                            o(null, T = [], u, l)
                        }
                        for (c = T.length; c--;)(d = T[c]) && (u = o ? Z(r, d) : p[c]) > -1 && (r[u] = !(a[u] = d))
                    }
                } else T = y(T === a ? T.splice(m, T.length) : T), o ? o(null, a, T, l) : G.apply(a, T)
            })
        }

        function g(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                    return e === t
                }, a, !0), u = p(function(e) {
                    return Z(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== j) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                    return t = null, i
                }]; s < i; s++)
                if (n = w.relative[e[s].type]) c = [p(f(c), n)];
                else {
                    if ((n = w.filter[e[s].type].apply(null, e[s].matches))[L]) {
                        for (r = ++s; r < i && !w.relative[e[r].type]; r++);
                        return m(s > 1 && f(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, s < r && g(e.slice(s, r)), r < i && g(e = e.slice(r)), r < i && d(e))
                    }
                    c.push(n)
                }
            return f(c)
        }

        function v(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, l, u) {
                    var c, d, p, f = 0,
                        h = "0",
                        m = r && [],
                        g = [],
                        v = j,
                        T = r || o && w.find.TAG("*", u),
                        b = N += null == v ? 1 : Math.random() || .1,
                        P = T.length;
                    for (u && (j = a === A || a || u); h !== P && null != (c = T[h]); h++) {
                        if (o && c) {
                            for (d = 0, a || c.ownerDocument === A || (Q(c), s = !I); p = e[d++];)
                                if (p(c, a || A, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (N = b)
                        }
                        i && ((c = !p && c) && f--, r && m.push(c))
                    }
                    if (f += h, i && h !== f) {
                        for (d = 0; p = n[d++];) p(m, g, a, s);
                        if (r) {
                            if (f > 0)
                                for (; h--;) m[h] || g[h] || (g[h] = V.call(l));
                            g = y(g)
                        }
                        G.apply(l, g), u && !r && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (N = b, j = v), m
                };
            return i ? r(a) : a
        }
        var T, b, w, P, k, S, x, C, j, Y, _, Q, A, $, I, E, O, D, M, L = "sizzle" + 1 * new Date,
            B = e.document,
            N = 0,
            F = 0,
            z = n(),
            H = n(),
            R = n(),
            q = function(e, t) {
                return e === t && (_ = !0), 0
            },
            W = {}.hasOwnProperty,
            U = [],
            V = U.pop,
            X = U.push,
            G = U.push,
            K = U.slice,
            Z = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ue = new RegExp(re),
            ce = new RegExp("^" + te + "$"),
            de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            fe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            me = /[+~]/,
            ge = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ve = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            be = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            we = function() {
                Q()
            },
            Pe = p(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(U = K.call(B.childNodes), B.childNodes), U[B.childNodes.length].nodeType
        } catch (e) {
            G = {
                apply: U.length ? function(e, t) {
                    X.apply(e, K.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, Q = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : B;
            return r !== A && 9 === r.nodeType && r.documentElement ? (A = r, $ = A.documentElement, I = !k(A), B !== A && (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), b.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = i(function(e) {
                return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = he.test(A.getElementsByClassName), b.getById = i(function(e) {
                return $.appendChild(e).id = L, !A.getElementsByName || !A.getElementsByName(L).length
            }), b.getById ? (w.filter.ID = function(e) {
                var t = e.replace(ge, ve);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (w.filter.ID = function(e) {
                var t = e.replace(ge, ve);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && I) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), w.find.TAG = b.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, w.find.CLASS = b.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && I) return t.getElementsByClassName(e)
            }, O = [], E = [], (b.qsa = he.test(A.querySelectorAll)) && (i(function(e) {
                $.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && E.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || E.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + L + "-]").length || E.push("~="), e.querySelectorAll(":checked").length || E.push(":checked"), e.querySelectorAll("a#" + L + "+*").length || E.push(".#.+[+~]")
            }), i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = A.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && E.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && E.push(":enabled", ":disabled"), $.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && E.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), E.push(",.*:")
            })), (b.matchesSelector = he.test(D = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && i(function(e) {
                b.disconnectedMatch = D.call(e, "*"), D.call(e, "[s!='']:x"), O.push("!=", re)
            }), E = E.length && new RegExp(E.join("|")), O = O.length && new RegExp(O.join("|")), t = he.test($.compareDocumentPosition), M = t || he.test($.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, q = t ? function(e, t) {
                if (e === t) return _ = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === B && M(B, e) ? -1 : t === A || t.ownerDocument === B && M(B, t) ? 1 : Y ? Z(Y, e) - Z(Y, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return _ = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                if (!i || !o) return e === A ? -1 : t === A ? 1 : i ? -1 : o ? 1 : Y ? Z(Y, e) - Z(Y, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[r] === l[r];) r++;
                return r ? a(s[r], l[r]) : s[r] === B ? -1 : l[r] === B ? 1 : 0
            }, A) : A
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== A && Q(e), n = n.replace(le, "='$1']"), b.matchesSelector && I && !R[n + " "] && (!O || !O.test(n)) && (!E || !E.test(n))) try {
                var r = D.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return t(n, A, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== A && Q(e), M(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== A && Q(e);
            var n = w.attrHandle[t.toLowerCase()],
                r = n && W.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== r ? r : b.attributes || !I ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function(e) {
            return (e + "").replace(Te, be)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (_ = !b.detectDuplicates, Y = !b.sortStable && e.slice(0), e.sort(q), _) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return Y = null, e
        }, P = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += P(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += P(t);
            return n
        }, (w = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ge, ve), e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ve), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ge, ve).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, p, f, h, y = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            v = !l && !s,
                            T = !1;
                        if (m) {
                            if (o) {
                                for (; y;) {
                                    for (p = t; p = p[y];)
                                        if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    h = y = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                for (T = (f = (u = (c = (d = (p = m)[L] || (p[L] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === N && u[1]) && u[2], p = f && m.childNodes[f]; p = ++f && p && p[y] || (T = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++T && p === t) {
                                        c[e] = [N, f, T];
                                        break
                                    }
                            } else if (v && (p = t, d = p[L] || (p[L] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], f = u[0] === N && u[1], T = f), !1 === T)
                                for (;
                                    (p = ++f && p && p[y] || (T = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++T || (v && (d = p[L] || (p[L] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[e] = [N, T]), p !== t)););
                            return (T -= i) === r || T % r == 0 && T / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[L] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = Z(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = x(e.replace(oe, "$1"));
                    return i[L] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(ge, ve),
                        function(t) {
                            return (t.textContent || t.innerText || P(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ge, ve).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === $
                },
                focus: function(e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return fe.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (T in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[T] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(T);
        for (T in {
                submit: !0,
                reset: !0
            }) w.pseudos[T] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(T);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c, S = t.tokenize = function(e, n) {
            var r, i, o, a, s, l, u, c = H[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = w.preFilter; s;) {
                r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), s = s.slice(r.length));
                for (a in w.filter) !(i = de[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : H(e, l).slice(0)
        }, x = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = R[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;) o = g(t[n]), o[L] ? r.push(o) : i.push(o);
                (o = R(e, v(i, r))).selector = e
            }
            return o
        }, C = t.select = function(e, t, n, r) {
            var i, o, a, s, l, c = "function" == typeof e && e,
                p = !r && S(e = c.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((o = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && I && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(ge, ve), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
                    if ((l = w.find[s]) && (r = l(a.matches[0].replace(ge, ve), me.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && d(o))) return G.apply(n, r), n;
                        break
                    }
            }
            return (c || x(e, p))(r, t, !I, n, !t || me.test(e) && u(t.parentNode) || t), n
        }, b.sortStable = L.split("").sort(q).join("") === L, b.detectDuplicates = !!_, Q(), b.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(A.createElement("fieldset"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(J, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    he.find = Te, he.expr = Te.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = Te.uniqueSort, he.text = Te.getText, he.isXMLDoc = Te.isXML, he.contains = Te.contains, he.escapeSelector = Te.escape;
    var be = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && he(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        we = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Pe = he.expr.match.needsContext,
        ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Se = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? he.find.matchesSelector(r, e) ? [r] : [] : he.find.matches(e, he.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, he.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (he.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) he.find(e, i[t], n);
            return r > 1 ? he.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && Pe.test(e) ? he(e) : e || [], !1).length
        }
    });
    var xe, Ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || xe, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ce.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), ke.test(r[1]) && he.isPlainObject(t))
                    for (r in t) he.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = te.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
    }).prototype = he.fn, xe = he(te);
    var je = /^(?:parents|prev(?:Until|All))/,
        Ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    he.fn.extend({
        has: function(e) {
            var t = he(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (he.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && he(e);
            if (!Pe.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), he.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return we(e.firstChild)
        },
        contents: function(e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), he.merge([], e.childNodes))
        }
    }, function(e, t) {
        he.fn[e] = function(n, r) {
            var i = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = he.filter(r, i)), this.length > 1 && (Ye[e] || he.uniqueSort(i), je.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var _e = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : he.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            l = -1,
            u = function() {
                for (i = i || e.once, r = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < o.length;) !1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (l = o.length - 1, a.push(n)), function t(n) {
                        he.each(n, function(n, r) {
                            he.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== he.type(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return he.each(arguments, function(e, t) {
                        for (var n;
                            (n = he.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? he.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, he.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                    ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return he.Deferred(function(t) {
                            he.each(n, function(n, r) {
                                var i = he.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        function o(t, n, r, i) {
                            return function() {
                                var s = this,
                                    c = arguments,
                                    d = function() {
                                        var e, d;
                                        if (!(t < a)) {
                                            if ((e = r.apply(s, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(d) ? i ? d.call(e, o(a, n, l, i), o(a, n, u, i)) : (a++, d.call(e, o(a, n, l, i), o(a, n, u, i), o(a, n, l, n.notifyWith))) : (r !== l && (s = void 0, c = [e]), (i || n.resolveWith)(s, c))
                                        }
                                    },
                                    p = i ? d : function() {
                                        try {
                                            d()
                                        } catch (e) {
                                            he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (r !== u && (s = void 0, c = [e]), n.rejectWith(s, c))
                                        }
                                    };
                                t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }
                        var a = 0;
                        return he.Deferred(function(e) {
                            n[0][3].add(o(0, e, he.isFunction(i) ? i : l, e.notifyWith)), n[1][3].add(o(0, e, he.isFunction(t) ? t : l)), n[2][3].add(o(0, e, he.isFunction(r) ? r : u))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? he.extend(e, i) : i
                    }
                },
                o = {};
            return he.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = re.call(arguments),
                o = he.Deferred(),
                a = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || he.isFunction(i[n] && i[n].then))) return o.then();
            for (; n--;) c(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var Qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Qe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, he.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Ae = he.Deferred();
    he.fn.ready = function(e) {
        return Ae.then(e).catch(function(e) {
            he.readyException(e)
        }), this
    }, he.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || Ae.resolveWith(te, [he]))
        }
    }), he.ready.then = Ae.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
    var $e = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === he.type(n)) {
                i = !0;
                for (s in n) $e(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, he.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(he(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        Ie = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    p.uid = 1, p.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[he.camelCase(t)] = n;
            else
                for (r in t) i[he.camelCase(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in r ? [t] : t.match(_e) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t)
        }
    };
    var Ee = new p,
        Oe = new p,
        De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /[A-Z]/g;
    he.extend({
        hasData: function(e) {
            return Oe.hasData(e) || Ee.hasData(e)
        },
        data: function(e, t, n) {
            return Oe.access(e, t, n)
        },
        removeData: function(e, t) {
            Oe.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ee.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ee.remove(e, t)
        }
    }), he.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Oe.get(o), 1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = he.camelCase(r.slice(5)), h(o, r, i[r]));
                    Ee.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Oe.set(this, e)
            }) : $e(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Oe.get(o, e))) return n;
                    if (void 0 !== (n = h(o, e))) return n
                } else this.each(function() {
                    Oe.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Oe.remove(this, e)
            })
        }
    }), he.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Ee.get(e, t), n && (!r || Array.isArray(n) ? r = Ee.access(e, t, he.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = he.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = he._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                he.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ee.get(e, n) || Ee.access(e, n, {
                empty: he.Callbacks("once memory").add(function() {
                    Ee.remove(e, [t + "queue", n])
                })
            })
        }
    }), he.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                he.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = he.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Ee.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Be = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
        Ne = ["Top", "Right", "Bottom", "Left"],
        Fe = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
        },
        ze = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        },
        He = {};
    he.fn.extend({
        show: function() {
            return g(this, !0)
        },
        hide: function() {
            return g(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Fe(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var Re = /^(?:checkbox|radio)$/i,
        qe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        We = /^$|\/(?:java|ecma)script/i,
        Ue = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td;
    var Ve = /<|&#?\w+;/;
    ! function() {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")),
            t = te.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), pe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Xe = te.documentElement,
        Ge = /^key/,
        Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ze = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, p, f, h, y, m = Ee.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, i = o.selector), i && he.find.matchesSelector(Xe, i), n.guid || (n.guid = he.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                        return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(_e) || [""]).length; u--;) s = Ze.exec(t[u]) || [], f = y = s[1], h = (s[2] || "").split(".").sort(), f && (d = he.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, d = he.event.special[f] || {}, c = he.extend({
                    type: f,
                    origType: y,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && he.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), he.event.global[f] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, p, f, h, y, m = Ee.hasData(e) && Ee.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(_e) || [""]).length; u--;)
                    if (s = Ze.exec(t[u]) || [], f = y = s[1], h = (s[2] || "").split(".").sort(), f) {
                        for (d = he.event.special[f] || {}, p = l[f = (r ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && y !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                        a && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || he.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) he.event.remove(e, f + t[u], n, r, !0);
                he.isEmptyObject(l) && Ee.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = he.event.fix(e),
                l = new Array(arguments.length),
                u = (Ee.get(this, "events") || {})[s.type] || [],
                c = he.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = he.event.handlers.call(this, s, u), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((he.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? he(i, this).index(u) > -1 : he.find(i, this, null, [u]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[he.expando] ? e : new he.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === k() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && i(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return i(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, he.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, he.Event = function(e, t) {
        return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : P, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: P,
        isPropagationStopped: P,
        isImmediatePropagationStopped: P,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || he.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), he.fn.extend({
        on: function(e, t, n, r) {
            return S(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return S(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = P), this.each(function() {
                he.event.remove(this, e, n, t)
            })
        }
    });
    var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        et = /<script|<style|<link/i,
        tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        nt = /^true\/(.*)/,
        rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function(e) {
            return e.replace(Je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                l = he.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (a = v(s), o = v(e), r = 0, i = o.length; r < i; r++) _(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || v(e), a = a || v(s), r = 0, i = o.length; r < i; r++) Y(o[r], a[r]);
                else Y(e, s);
            return (a = v(s, "script")).length > 0 && T(a, !l && v(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Ie(n)) {
                    if (t = n[Ee.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? he.event.remove(n, r) : he.removeEvent(n, r, t.handle);
                        n[Ee.expando] = void 0
                    }
                    n[Oe.expando] && (n[Oe.expando] = void 0)
                }
        }
    }), he.fn.extend({
        detach: function(e) {
            return A(this, e, !0)
        },
        remove: function(e) {
            return A(this, e)
        },
        text: function(e) {
            return $e(this, function(e) {
                return void 0 === e ? he.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Q(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || x(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Q(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = x(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Q(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Q(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return he.clone(this, e, t)
            })
        },
        html: function(e) {
            return $e(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !Ue[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Q(this, arguments, function(t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(v(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        he.fn[e] = function(e) {
            for (var n, r = [], i = he(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), he(i[a])[t](n), oe.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var it = /^margin/,
        ot = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
        at = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Xe.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Xe.removeChild(a), s = null
            }
        }
        var n, r, i, o, a = te.createElement("div"),
            s = te.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), he.extend(pe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), r
            },
            pixelMarginRight: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), o
            }
        }))
    }();
    var st = /^(none|table(?!-c[ea]).+)/,
        lt = /^--/,
        ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ct = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dt = ["Webkit", "Moz", "ms"],
        pt = te.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = $(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = he.camelCase(t),
                    l = lt.test(t),
                    u = e.style;
                return l || (t = O(s)), a = he.cssHooks[t] || he.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = Be.exec(n)) && i[1] && (n = y(e, t, i), o = "number"), void(null != n && n === n && ("number" === o && (n += i && i[3] || (he.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = he.camelCase(t);
            return lt.test(t) || (t = O(s)), (a = he.cssHooks[t] || he.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = $(e, t, r)), "normal" === i && t in ct && (i = ct[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), he.each(["height", "width"], function(e, t) {
        he.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !st.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? L(e, t, r) : ze(e, ut, function() {
                    return L(e, t, r)
                })
            },
            set: function(e, n, r) {
                var i, o = r && at(e),
                    a = r && M(e, t, r, "border-box" === he.css(e, "boxSizing", !1, o), o);
                return a && (i = Be.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = he.css(e, t)), D(e, n, a)
            }
        }
    }), he.cssHooks.marginLeft = I(pe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat($(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        he.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Ne[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, it.test(e) || (he.cssHooks[e + t].set = D)
    }), he.fn.extend({
        css: function(e, t) {
            return $e(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = at(e), i = t.length; a < i; a++) o[t[a]] = he.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), he.Tween = B, B.prototype = {
        constructor: B,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (he.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, he.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, he.fx = B.prototype.init, he.fx.step = {};
    var ft, ht, yt = /^(?:toggle|show|hide)$/,
        mt = /queueHooks$/;
    he.Animation = he.extend(q, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return y(n.elem, e, Be.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(_e);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], q.tweeners[n] = q.tweeners[n] || [], q.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, l, u, c, d = "width" in t || "height" in t,
                    p = this,
                    f = {},
                    h = e.style,
                    y = e.nodeType && Fe(e),
                    m = Ee.get(e, "fxshow");
                n.queue || (null == (a = he._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, he.queue(e, "fx").length || a.empty.fire()
                    })
                }));
                for (r in t)
                    if (i = t[r], yt.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (y ? "hide" : "show")) {
                            if ("show" !== i || !m || void 0 === m[r]) continue;
                            y = !0
                        }
                        f[r] = m && m[r] || he.style(e, r)
                    }
                if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(f)) {
                    d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = m && m.display) && (u = Ee.get(e, "display")), "none" === (c = he.css(e, "display")) && (u ? c = u : (g([e], !0), u = e.style.display || u, c = he.css(e, "display"), g([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === he.css(e, "float") && (l || (p.done(function() {
                        h.display = u
                    }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), l = !1;
                    for (r in f) l || (m ? "hidden" in m && (y = m.hidden) : m = Ee.access(e, "fxshow", {
                        display: u
                    }), o && (m.hidden = !y), y && g([e], !0), p.done(function() {
                        y || g([e]), Ee.remove(e, "fxshow");
                        for (r in f) he.style(e, r, f[r])
                    })), l = H(y ? m[r] : 0, r, p), r in m || (m[r] = l.start, y && (l.end = l.start, l.start = 0))
                }
            }],
            prefilter: function(e, t) {
                t ? q.prefilters.unshift(e) : q.prefilters.push(e)
            }
        }), he.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? he.extend({}, e) : {
                complete: n || !n && t || he.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !he.isFunction(t) && t
            };
            return he.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in he.fx.speeds ? r.duration = he.fx.speeds[r.duration] : r.duration = he.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                he.isFunction(r.old) && r.old.call(this), r.queue && he.dequeue(this, r.queue)
            }, r
        }, he.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Fe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = he.isEmptyObject(e),
                    o = he.speed(t, n, r),
                    a = function() {
                        var t = q(this, he.extend({}, e), o);
                        (i || Ee.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = he.timers,
                        a = Ee.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && mt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || he.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Ee.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = he.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, he.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), he.each(["toggle", "show", "hide"], function(e, t) {
            var n = he.fn[t];
            he.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, r, i)
            }
        }), he.each({
            slideDown: z("show"),
            slideUp: z("hide"),
            slideToggle: z("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            he.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), he.timers = [], he.fx.tick = function() {
            var e, t = 0,
                n = he.timers;
            for (ft = he.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || he.fx.stop(), ft = void 0
        }, he.fx.timer = function(e) {
            he.timers.push(e), he.fx.start()
        }, he.fx.interval = 13, he.fx.start = function() {
            ht || (ht = !0, N())
        }, he.fx.stop = function() {
            ht = null
        }, he.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, he.fn.delay = function(t, n) {
            return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = te.createElement("input"),
                t = te.createElement("select").appendChild(te.createElement("option"));
            e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", pe.radioValue = "t" === e.value
        }();
    var gt, vt = he.expr.attrHandle;
    he.fn.extend({
        attr: function(e, t) {
            return $e(this, he.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                he.removeAttr(this, e)
            })
        }
    }), he.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = he.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(_e);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), gt = {
        set: function(e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = vt[t] || he.find.attr;
        vt[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = vt[a], vt[a] = i, i = null != n(e, t, r) ? a : null, vt[a] = o), i
        }
    });
    var Tt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function(e, t) {
            return $e(this, he.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[he.propFix[e] || e]
            })
        }
    }), he.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, i = he.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Tt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), pe.optSelected || (he.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        he.propFix[this.toLowerCase()] = this
    }), he.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).addClass(e.call(this, t, U(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(_e) || []; n = this[l++];)
                    if (i = U(n), r = 1 === n.nodeType && " " + W(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = W(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (he.isFunction(e)) return this.each(function(t) {
                he(this).removeClass(e.call(this, t, U(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(_e) || []; n = this[l++];)
                    if (i = U(n), r = 1 === n.nodeType && " " + W(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = W(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) {
                he(this).toggleClass(e.call(this, n, U(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = he(this), o = e.match(_e) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = U(this)) && Ee.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ee.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + W(U(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    he.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = he.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, he(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = he.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = he.valHooks[i.type] || he.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : W(he.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        l = s ? null : [],
                        u = s ? a + 1 : o.length;
                    for (r = a < 0 ? u : s ? a : 0; r < u; r++)
                        if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(), s) return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = he.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = he.inArray(he.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), he.each(["radio", "checkbox"], function() {
        he.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
            }
        }, pe.checkOn || (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Pt = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, l, u, c, d, p = [r || te],
                f = ue.call(t, "type") ? t.type : t,
                h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || te, 3 !== r.nodeType && 8 !== r.nodeType && !Pt.test(f + he.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[he.expando] ? t : new he.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : he.makeArray(n, [t]), d = he.event.special[f] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!i && !d.noBubble && !he.isWindow(r)) {
                    for (l = d.delegateType || f, Pt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (r.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || f, (c = (Ee.get(a, "events") || {})[t.type] && Ee.get(a, "handle")) && c.apply(a, n), (c = u && a[u]) && c.apply && Ie(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = f, i || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !Ie(r) || u && he.isFunction(r[f]) && !he.isWindow(r) && ((s = r[u]) && (r[u] = null), he.event.triggered = f, r[f](), he.event.triggered = void 0, s && (r[u] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = he.extend(new he.Event, n, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(r, null, t)
        }
    }), he.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                he.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0)
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        he.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), he.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = Ee.access(r, t);
                i || r.addEventListener(e, n, !0), Ee.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = Ee.access(r, t) - 1;
                i ? Ee.access(r, t, i) : (r.removeEventListener(e, n, !0), Ee.remove(r, t))
            }
        }
    });
    var kt = e.location,
        St = he.now(),
        xt = /\?/;
    he.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
    };
    var Ct = /\[\]$/,
        jt = /\r?\n/g,
        Yt = /^(?:submit|button|image|reset|file)$/i,
        _t = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = he.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) V(n, e[n], t, i);
        return r.join("&")
    }, he.fn.extend({
        serialize: function() {
            return he.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && _t.test(this.nodeName) && !Yt.test(e) && (this.checked || !Re.test(e))
            }).map(function(e, t) {
                var n = he(this).val();
                return null == n ? null : Array.isArray(n) ? he.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(jt, "\r\n")
                }
            }).get()
        }
    });
    var Qt = /%20/g,
        At = /#.*$/,
        $t = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Et = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ot = /^(?:GET|HEAD)$/,
        Dt = /^\/\//,
        Mt = {},
        Lt = {},
        Bt = "*/".concat("*"),
        Nt = te.createElement("a");
    Nt.href = kt.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal: Et.test(kt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, he.ajaxSettings), t) : K(he.ajaxSettings, e)
        },
        ajaxPrefilter: X(Mt),
        ajaxTransport: X(Lt),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var u, p, f, b, w, P = n;
                c || (c = !0, l && e.clearTimeout(l), i = void 0, a = s || "", k.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, r && (b = Z(h, k, r)), b = J(h, b, k, u), u ? (h.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (he.lastModified[o] = w), (w = k.getResponseHeader("etag")) && (he.etag[o] = w)), 204 === t || "HEAD" === h.type ? P = "nocontent" : 304 === t ? P = "notmodified" : (P = b.state, p = b.data, f = b.error, u = !f)) : (f = P, !t && P || (P = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || P) + "", u ? g.resolveWith(y, [p, P, k]) : g.rejectWith(y, [k, P, f]), k.statusCode(T), T = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [k, h, u ? p : f]), v.fireWith(y, [k, P]), d && (m.trigger("ajaxComplete", [k, h]), --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, l, u, c, d, p, f, h = he.ajaxSetup({}, n),
                y = h.context || h,
                m = h.context && (y.nodeType || y.jquery) ? he(y) : he.event,
                g = he.Deferred(),
                v = he.Callbacks("once memory"),
                T = h.statusCode || {},
                b = {},
                w = {},
                P = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = It.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) k.always(e[k.status]);
                            else
                                for (t in e) T[t] = [T[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || P;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (g.promise(k), h.url = ((t || h.url || kt.href) + "").replace(Dt, kt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(_e) || [""], null == h.crossDomain) {
                u = te.createElement("a");
                try {
                    u.href = h.url, u.href = u.href, h.crossDomain = Nt.protocol + "//" + Nt.host != u.protocol + "//" + u.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), G(Mt, h, n, k), c) return k;
            (d = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ot.test(h.type), o = h.url.replace(At, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Qt, "+")) : (f = h.url.slice(o.length), h.data && (o += (xt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace($t, "$1"), f = (xt.test(o) ? "&" : "?") + "_=" + St++ + f), h.url = o + f), h.ifModified && (he.lastModified[o] && k.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && k.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) k.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(y, k, h) || c)) return k.abort();
            if (P = "abort", v.add(h.complete), k.done(h.success), k.fail(h.error), i = G(Lt, h, n, k)) {
                if (k.readyState = 1, d && m.trigger("ajaxSend", [k, h]), c) return k;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    k.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, r)
                } catch (e) {
                    if (c) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return k
        },
        getJSON: function(e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return he.get(e, void 0, t, "script")
        }
    }), he.each(["get", "post"], function(e, t) {
        he[t] = function(e, n, r, i) {
            return he.isFunction(n) && (i = i || r, r = n, n = void 0), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function(e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, he.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return he.isFunction(e) ? this.each(function(t) {
                he(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = he(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = he.isFunction(e);
            return this.each(function(n) {
                he(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                he(this).replaceWith(this.childNodes)
            }), this
        }
    }), he.expr.pseudos.hidden = function(e) {
        return !he.expr.pseudos.visible(e)
    }, he.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, he.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ft = {
            0: 200,
            1223: 204
        },
        zt = he.ajaxSettings.xhr();
    pe.cors = !!zt && "withCredentials" in zt, pe.ajax = zt = !!zt, he.ajaxTransport(function(t) {
        var n, r;
        if (pe.cors || zt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ft[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), he.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return he.globalEval(e), e
            }
        }
    }), he.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), he.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = he("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), te.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ht = [],
        Rt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ht.pop() || he.expando + "_" + St++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Rt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Rt, "$1" + i) : !1 !== t.jsonp && (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || he.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? he(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ht.push(i)), a && he.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), pe.createHTMLDocument = function() {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), he.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = te.location.href, t.head.appendChild(r)) : t = te), i = ke.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = b([e], t, o), o && o.length && he(o).remove(), he.merge([], i.childNodes))
    }, he.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = W(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && he.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        he.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), he.expr.pseudos.animated = function(e) {
        return he.grep(he.timers, function(t) {
            return e === t.elem
        }).length
    }, he.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u = he.css(e, "position"),
                c = he(e),
                d = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), o = he.css(e, "top"), l = he.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (r = c.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, he.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                he.offset.setOffset(this, e, t)
            });
            var t, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + he.css(e[0], "borderTopWidth", !0),
                    left: r.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - he.css(n, "marginTop", !0),
                    left: t.left - r.left - he.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || Xe
            })
        }
    }), he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function(r) {
            return $e(this, function(e, r, i) {
                var o;
                return he.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), he.each(["top", "left"], function(e, t) {
        he.cssHooks[t] = I(pe.pixelPosition, function(e, n) {
            if (n) return n = $(e, t), ot.test(n) ? he(e).position()[t] + "px" : n
        })
    }), he.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        he.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            he.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return $e(this, function(t, n, i) {
                    var o;
                    return he.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? he.css(t, n, s) : he.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), he.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), he.holdReady = function(e) {
        e ? he.readyWait++ : he.ready(!0)
    }, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function() {
        return he
    });
    var qt = e.jQuery,
        Wt = e.$;
    return he.noConflict = function(t) {
        return e.$ === he && (e.$ = Wt), t && e.jQuery === he && (e.jQuery = qt), he
    }, t || (e.jQuery = e.$ = he), he
});
var ytp = ytp || {},
    getYTPVideoID = function(e) {
        var t, n;
        return e.indexOf("youtu.be") > 0 ? (t = e.substr(e.lastIndexOf("/") + 1, e.length), n = t.indexOf("?list=") > 0 ? t.substr(t.lastIndexOf("="), t.length) : null, t = n ? t.substr(0, t.lastIndexOf("?")) : t) : e.indexOf("http") > -1 ? (t = e.match(/[\\?&]v=([^&#]*)/)[1], n = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : (t = e.length > 15 ? null : e, n = t ? null : e), {
            videoID: t,
            playlistID: n
        }
    };
! function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.0.20",
        build: "6252",
        author: "Matteo Bicocchi (pupunzi)",
        apiKey: "",
        defaults: {
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            mask: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            fadeOnStartTime: 500,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            mobileFallbackImage: null,
            gaTrack: !0,
            optimizeDisplay: !0,
            remember_last_time: !1,
            anchor: "center,center",
            onReady: function(e) {},
            onError: function(e, t) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        controlBar: null,
        loading: null,
        locationProtocol: "https:",
        filters: {
            grayscale: {
                value: 0,
                unit: "%"
            },
            hue_rotate: {
                value: 0,
                unit: "deg"
            },
            invert: {
                value: 0,
                unit: "%"
            },
            opacity: {
                value: 0,
                unit: "%"
            },
            saturate: {
                value: 0,
                unit: "%"
            },
            sepia: {
                value: 0,
                unit: "%"
            },
            brightness: {
                value: 0,
                unit: "%"
            },
            contrast: {
                value: 0,
                unit: "%"
            },
            blur: {
                value: 0,
                unit: "px"
            }
        },
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this,
                    $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filters = jQuery.mbYTPlayer.filters, YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(), $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                void 0 !== property && void 0 !== property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options)), "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                var isIframe = function() {
                    var e = !1;
                    try {
                        self.location.href != top.location.href && (e = !0)
                    } catch (t) {
                        e = !0
                    }
                    return e
                };
                YTPlayer.canGoFullScreen = !(jQuery.mbBrowser.msie || jQuery.mbBrowser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime());
                var playerID = "iframe_" + YTPlayer.id;
                YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0, YTPlayer.videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID, YTPlayer.playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3";
                var start_from_last = 0;
                jQuery.mbCookie.get("YTPlayer_" + YTPlayer.videoID) && (start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_" + YTPlayer.videoID))), YTPlayer.opt.remember_last_time && start_from_last && (YTPlayer.start_from_last = start_from_last, jQuery.mbCookie.remove("YTPlayer_" + YTPlayer.videoID));
                var playerVars = {
                    modestbranding: 1,
                    autoplay: 0,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                if (document.createElement("video").canPlayType && jQuery.extend(playerVars, {
                        html5: 1
                    }), jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (this.opt.opacity = 1), YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                    YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length, YTPlayer.isPlayer = !1, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide();
                    var overlay = jQuery("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }).addClass("YTPOverlay");
                    YTPlayer.isPlayer && overlay.on("click", function() {
                        $YTPlayer.YTPTogglePlay()
                    });
                    var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + YTPlayer.id);
                    wrapper.css({
                        position: "absolute",
                        zIndex: 0,
                        minWidth: "100%",
                        minHeight: "100%",
                        left: 0,
                        top: 0,
                        overflow: "hidden",
                        opacity: 0
                    });
                    var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
                    if (playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden"
                        }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function() {
                            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                        }), YTPlayer.isBackground ? (jQuery("body").css({
                            boxSizing: "border-box"
                        }), wrapper.css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
                            position: "relative"
                        }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
                            opacity: 1
                        }), jQuery.mbBrowser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
                        }).on("mouseleave", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
                        }), ytp.YTAPIReady) setTimeout(function() {
                        jQuery(document).trigger("YTAPIReady")
                    }, 100);
                    else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script><\/script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    if (jQuery.mbBrowser.mobile && !YTPlayer.canPlayOnMobile) return YTPlayer.opt.mobileFallbackImage && wrapper.css({
                        backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        opacity: 1
                    }), $YTPlayer.remove(), void jQuery(document).trigger("YTPUnavailable");
                    jQuery(document).on("YTAPIReady", function() {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = void 0 === YTPlayer.opt.autoPlay ? !!YTPlayer.isBackground : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function() {
                            if (!YTPlayer.isInit) {
                                if (YTPlayer.isInit = !0, jQuery.mbBrowser.mobile && YTPlayer.canPlayOnMobile) {
                                    if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                        YTPlayer.opt.containment.css({
                                            maxWidth: "100%"
                                        });
                                        var h = .563 * YTPlayer.opt.containment.outerWidth();
                                        YTPlayer.opt.containment.css({
                                            maxHeight: h
                                        })
                                    }
                                    return void new YT.Player(playerID, {
                                        videoId: YTPlayer.videoID.toString(),
                                        width: "100%",
                                        height: h,
                                        playerVars: playerVars,
                                        events: {
                                            onReady: function(e) {
                                                YTPlayer.player = e.target, playerBox.css({
                                                    opacity: 1
                                                }), YTPlayer.wrapper.css({
                                                    opacity: 1
                                                })
                                            }
                                        }
                                    })
                                }
                                new YT.Player(playerID, {
                                    videoId: YTPlayer.videoID.toString(),
                                    playerVars: playerVars,
                                    events: {
                                        onReady: function(e) {
                                            YTPlayer.player = e.target, YTPlayer.isReady || (YTPlayer.isReady = !(YTPlayer.isPlayer && !YTPlayer.opt.autoPlay), YTPlayer.playerEl = YTPlayer.player.getIframe(), jQuery(YTPlayer.playerEl).unselectable(), $YTPlayer.optimizeDisplay(), jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function() {
                                                $YTPlayer.optimizeDisplay()
                                            }), YTPlayer.opt.remember_last_time && jQuery(window).on("unload.YTP_" + YTPlayer.id, function() {
                                                var e = YTPlayer.player.getCurrentTime();
                                                jQuery.mbCookie.set("YTPlayer_" + YTPlayer.videoID, e, 1)
                                            }), jQuery.mbYTPlayer.checkForState(YTPlayer))
                                        },
                                        onStateChange: function(event) {
                                            if ("function" == typeof event.target.getPlayerState) {
                                                var state = event.target.getPlayerState();
                                                if (YTPlayer.preventTrigger) return void(YTPlayer.preventTrigger = !1);
                                                YTPlayer.state = state;
                                                var eventType;
                                                switch (state) {
                                                    case -1:
                                                        eventType = "YTPUnstarted";
                                                        break;
                                                    case 0:
                                                        eventType = "YTPRealEnd";
                                                        break;
                                                    case 1:
                                                        eventType = "YTPPlay", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                                                        break;
                                                    case 2:
                                                        eventType = "YTPPause", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                        break;
                                                    case 3:
                                                        YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                        break;
                                                    case 5:
                                                        eventType = "YTPCued"
                                                }
                                                var YTPEvent = jQuery.Event(eventType);
                                                YTPEvent.time = YTPlayer.currentTime, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent)
                                            }
                                        },
                                        onPlaybackQualityChange: function(e) {
                                            var t = e.target.getPlaybackQuality(),
                                                n = jQuery.Event("YTPQualityChange");
                                            n.quality = t, jQuery(YTPlayer).trigger(n)
                                        },
                                        onError: function(e) {
                                            150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                        }
                                    }
                                })
                            }
                        }))
                    }), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer)
                }
            })
        },
        getDataFromAPI: function(e) {
            if (e.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e.videoID), jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                    if (e.hasData && e.isPlayer && !e.opt.autoPlay) {
                        var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
                        e.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                            backgroundSize: "cover"
                        }), e.opt.backgroundUrl = t
                    }
                }), e.videoData) setTimeout(function() {
                e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.dataReceived = !0, jQuery(e).trigger("YTPChanged");
                var t = jQuery.Event("YTPData");
                t.prop = {};
                for (var n in e.videoData) t.prop[n] = e.videoData[n];
                jQuery(e).trigger(t)
            }, e.opt.fadeOnStartTime), e.hasData = !0;
            else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(t) {
                e.dataReceived = !0, jQuery(e).trigger("YTPChanged"),
                    function(t) {
                        e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = t.channelTitle, e.videoData.title = t.title, e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...", e.videoData.aspectratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.opt.ratio = e.videoData.aspectratio, e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null, e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null, e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + e.videoID, e.videoData)
                    }(t.items[0].snippet), e.hasData = !0;
                var n = jQuery.Event("YTPData");
                n.prop = {};
                for (var r in e.videoData) n.prop[r] = e.videoData[r];
                jQuery(e).trigger(n)
            });
            else {
                if (setTimeout(function() {
                        jQuery(e).trigger("YTPChanged")
                    }, 50), e.isPlayer && !e.opt.autoPlay) {
                    var t = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";
                    t && e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                        backgroundSize: "cover"
                    }), e.opt.backgroundUrl = t
                }
                e.videoData = null, e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio
            }!e.isPlayer || e.opt.autoPlay || jQuery.mbBrowser.mobile || (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn())
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove()
        },
        getVideoData: function() {
            return this.get(0).videoData
        },
        getVideoID: function() {
            return this.get(0).videoID || !1
        },
        setVideoQuality: function(e) {
            this.get(0).player.setPlaybackQuality(e)
        },
        playlist: function(e, t, n) {
            var r = this.get(0);
            return r.isPlayList = !0, t && (e = jQuery.shuffle(e)), r.videoID || (r.videos = e, r.videoCounter = 0, r.videoLength = e.length, jQuery(r).data("property", e[0]), jQuery(r).mb_YTPlayer()), "function" == typeof n && jQuery(r).one("YTPChanged", function() {
                n(r)
            }), jQuery(r).on("YTPEnd", function() {
                jQuery(r).playNext()
            }), this
        },
        playNext: function() {
            var e = this.get(0);
            return e.checkForStartAt && (clearInterval(e.checkForStartAt), clearInterval(e.getState)), ++e.videoCounter >= e.videoLength && (e.videoCounter = 0), jQuery(e).YTPChangeMovie(e.videos[e.videoCounter]), this
        },
        playPrev: function() {
            var e = this.get(0);
            return e.checkForStartAt && (clearInterval(e.checkForStartAt), clearInterval(e.getState)), --e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e).YTPChangeMovie(e.videos[e.videoCounter]), this
        },
        playIndex: function(e) {
            var t = this.get(0);
            return e -= 1, t.checkForStartAt && (clearInterval(t.checkForStartAt), clearInterval(t.getState)), t.videoCounter = e, t.videoCounter >= t.videoLength - 1 && (t.videoCounter = t.videoLength - 1), jQuery(t).YTPChangeMovie(t.videos[t.videoCounter]), this
        },
        changeMovie: function(e) {
            var t = this.get(0);
            t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mask = !1, t.opt.mute = !0, t.hasData = !1, t.hasChanged = !0, t.player.loopTime = void 0, e && jQuery.extend(t.opt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, "true" == t.opt.loop && (t.opt.loop = 9999), jQuery(t.playerEl).CSSAnimate({
                opacity: 0
            }, t.opt.fadeOnStartTime, function() {
                var e = jQuery.Event("YTPChangeMovie");
                e.time = t.currentTime, e.videoId = t.videoID, jQuery(t).trigger(e), jQuery(t).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + t.videoID), 1, t.opt.quality), jQuery(t).optimizeDisplay(), jQuery.mbYTPlayer.checkForState(t), jQuery.mbYTPlayer.getDataFromAPI(t)
            }), jQuery.mbYTPlayer.applyMask(t)
        },
        getPlayer: function() {
            return jQuery(this).get(0).player
        },
        playerDestroy: function() {
            var e = this.get(0);
            return ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null, e.isReady = !1, e.wrapper.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState), this
        },
        fullscreen: function(real) {
            function hideMouse() {
                YTPlayer.overlay.css({
                    cursor: "none"
                })
            }

            function RunPrefixMethod(e, t) {
                for (var n, r, i = ["webkit", "moz", "ms", "o", ""], o = 0; o < i.length && !e[n];) {
                    if (n = t, "" == i[o] && (n = n.substr(0, 1).toLowerCase() + n.substr(1)), n = i[o] + n, "undefined" != (r = typeof e[n])) return i = [i[o]], "function" == r ? e[n]() : e[n];
                    o++
                }
            }

            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            void 0 === real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id),
                fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
                        zIndex: 0
                    }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({
                cursor: "auto"
            }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
                zIndex: 0
            })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function(e) {
                YTPlayer.overlay.css({
                    cursor: "auto"
                }), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
            }), hideMouse(), real ? (videoWrapper.css({
                opacity: 0
            }), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
                videoWrapper.CSSAnimate({
                    opacity: 1
                }, 2 * YTPlayer.opt.fadeOnStartTime), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
            }, YTPlayer.opt.fadeOnStartTime)) : videoWrapper.css({
                zIndex: 1e4
            }).CSSAnimate({
                opacity: 1
            }, 2 * YTPlayer.opt.fadeOnStartTime), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0), this
        },
        toggleLoops: function() {
            var e = this.get(0),
                t = e.opt;
            return 1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(), t.loop = 1), this
        },
        play: function() {
            var e = this.get(0);
            return e.isReady ? (e.player.playVideo(), e.wrapper.CSSAnimate({
                opacity: e.isAlone ? 1 : e.opt.opacity
            }, 4 * e.opt.fadeOnStartTime), jQuery(e.playerEl).CSSAnimate({
                opacity: 1
            }, 2 * e.opt.fadeOnStartTime), jQuery("#controlBar_" + e.id).find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), e.state = 1, e.orig_background = jQuery(e).css("background-image"), this) : this
        },
        togglePlay: function(e) {
            var t = this.get(0);
            return 1 == t.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(t.state), this
        },
        stop: function() {
            var e = this.get(0);
            return jQuery("#controlBar_" + e.id).find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo(), this
        },
        pause: function() {
            var e = this.get(0);
            return e.player.pauseVideo(), e.state = 2, this
        },
        seekTo: function(e) {
            return this.get(0).player.seekTo(e, !0), this
        },
        setVolume: function(e) {
            var t = this.get(0);
            return e || t.opt.vol || 0 != t.player.getVolume() ? !e && t.player.getVolume() > 0 || e && t.opt.vol == e ? t.isMute ? jQuery(t).YTPUnmute() : jQuery(t).YTPMute() : (t.opt.vol = e, t.player.setVolume(t.opt.vol), t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)) : jQuery(t).YTPUnmute(), this
        },
        toggleVolume: function() {
            var e = this.get(0);
            if (e) return e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1)
        },
        mute: function() {
            var e = this.get(0);
            if (!e.isMute) {
                e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.width() > 10 && e.volumeBar.updateSliderVal(0), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
                var t = jQuery.Event("YTPMuted");
                return t.time = e.currentTime, e.canTrigger && jQuery(e).trigger(t), this
            }
        },
        unmute: function() {
            var e = this.get(0);
            if (e.isMute) {
                e.player.unMute(), e.isMute = !1, e.player.setVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
                var t = jQuery.Event("YTPUnmuted");
                return t.time = e.currentTime, e.canTrigger && jQuery(e).trigger(t), this
            }
        },
        applyFilter: function(e, t) {
            return this.each(function() {
                var n = this;
                n.filters[e].value = t, n.filtersEnabled && jQuery(n).YTPEnableFilters()
            })
        },
        applyFilters: function(e) {
            return this.each(function() {
                var t = this;
                if (t.isReady) {
                    for (var n in e) jQuery(t).YTPApplyFilter(n, e[n]);
                    jQuery(t).trigger("YTPFiltersApplied")
                } else jQuery(t).on("YTPReady", function() {
                    jQuery(t).YTPApplyFilters(e)
                })
            })
        },
        toggleFilter: function(e, t) {
            return this.each(function() {
                var n = this;
                n.filters[e].value ? n.filters[e].value = 0 : n.filters[e].value = t, n.filtersEnabled && jQuery(this).YTPEnableFilters()
            })
        },
        toggleFilters: function(e) {
            return this.each(function() {
                var t = this;
                t.filtersEnabled ? (jQuery(t).trigger("YTPDisableFilters"), jQuery(t).YTPDisableFilters()) : (jQuery(t).YTPEnableFilters(), jQuery(t).trigger("YTPEnableFilters")), "function" == typeof e && e(t.filtersEnabled)
            })
        },
        disableFilters: function() {
            return this.each(function() {
                var e = this,
                    t = jQuery(e.playerEl);
                t.css("-webkit-filter", ""), t.css("filter", ""), e.filtersEnabled = !1
            })
        },
        enableFilters: function() {
            return this.each(function() {
                var e = this,
                    t = jQuery(e.playerEl),
                    n = "";
                for (var r in e.filters) e.filters[r].value && (n += r.replace("_", "-") + "(" + e.filters[r].value + e.filters[r].unit + ") ");
                t.css("-webkit-filter", n), t.css("filter", n), e.filtersEnabled = !0
            })
        },
        removeFilter: function(e, t) {
            return this.each(function() {
                var n = this;
                if ("function" == typeof e && (t = e, e = null), e) jQuery(this).YTPApplyFilter(e, 0), "function" == typeof t && t(e);
                else
                    for (var r in n.filters) jQuery(this).YTPApplyFilter(r, 0), "function" == typeof t && t(r)
            })
        },
        getFilters: function() {
            return this.get(0).filters
        },
        addMask: function(e) {
            var t = this.get(0),
                n = t.overlay;
            e || (e = t.actualMask);
            var r = jQuery("<img/>").attr("src", e).on("load", function() {
                n.CSSAnimate({
                    opacity: 0
                }, t.opt.fadeOnStartTime, function() {
                    t.hasMask = !0, r.remove(), n.css({
                        backgroundImage: "url(" + e + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    }), n.CSSAnimate({
                        opacity: 1
                    }, t.opt.fadeOnStartTime)
                })
            });
            return this
        },
        removeMask: function() {
            var e = this.get(0),
                t = e.overlay;
            return t.CSSAnimate({
                opacity: 0
            }, e.opt.fadeOnStartTime, function() {
                e.hasMask = !1, t.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                }), t.CSSAnimate({
                    opacity: 1
                }, e.opt.fadeOnStartTime)
            }), this
        },
        applyMask: function(e) {
            var t = jQuery(e);
            if (t.off("YTPTime.mask"), e.opt.mask)
                if ("string" == typeof e.opt.mask) t.YTPAddMask(e.opt.mask), e.actualMask = e.opt.mask;
                else if ("object" == typeof e.opt.mask) {
                for (var n in e.opt.mask) e.opt.mask[n] && jQuery("<img/>").attr("src", e.opt.mask[n]);
                e.opt.mask[0] && t.YTPAddMask(e.opt.mask[0]), t.on("YTPTime.mask", function(n) {
                    for (var r in e.opt.mask) n.time == r && (e.opt.mask[r] ? (t.YTPAddMask(e.opt.mask[r]), e.actualMask = e.opt.mask[r]) : t.YTPRemoveMask())
                })
            }
        },
        toggleMask: function() {
            var e = this.get(0),
                t = $(e);
            return e.hasMask ? t.YTPRemoveMask() : t.YTPAddMask(), this
        },
        manageProgress: function() {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                n = t.find(".mb_YTPProgress"),
                r = t.find(".mb_YTPLoaded"),
                i = t.find(".mb_YTPseekbar"),
                o = n.outerWidth(),
                a = Math.floor(e.player.getCurrentTime()),
                s = Math.floor(e.player.getDuration()),
                l = a * o / s,
                u = 100 * e.player.getVideoLoadedFraction();
            return r.css({
                left: 0,
                width: u + "%"
            }), i.css({
                left: 0,
                width: l
            }), {
                totalTime: s,
                currentTime: a
            }
        },
        buildControls: function(YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide();
                var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                    playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
                        1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                    }),
                    MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
                        0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                    }),
                    volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                        display: "inline-block"
                    });
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime"),
                    vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                        window.open(vURL, "viewOnYT")
                    }),
                    onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                        jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                    }),
                    progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(e) {
                        timeBar.css({
                            width: e.clientX - timeBar.offset().left
                        }), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        });
                        var t = Math.floor(YTPlayer.player.getDuration());
                        YTPlayer.goto = timeBar.outerWidth() * t / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        })
                    }),
                    loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                    timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function(e) {
                        0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                    }
                })
            }
        },
        checkForState: function(YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 400;
            return clearInterval(YTPlayer.getState), jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function() {
                var prog = jQuery(YTPlayer).YTPManageProgress(),
                    $YTPlayer = jQuery(YTPlayer),
                    data = YTPlayer.opt,
                    startAt = YTPlayer.opt.startAt ? YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt : 1;
                YTPlayer.start_from_last = null;
                var stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
                    var YTPEvent = jQuery.Event("YTPTime");
                    YTPEvent.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPEvent)
                }
                if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - .5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                    if (YTPlayer.isEnded) return;
                    if (YTPlayer.isEnded = !0, setTimeout(function() {
                            YTPlayer.isEnded = !1
                        }, 1e3), YTPlayer.isPlayList) {
                        if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
                            YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            return YTPEnd.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(YTPEnd)
                        }
                    } else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) return YTPlayer.player.loopTime = void 0, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({
                        opacity: 0
                    }, YTPlayer.opt.fadeOnStartTime, function() {
                        YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                        var e = jQuery.Event("YTPEnd");
                        e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground ? YTPlayer.orig_background && jQuery(YTPlayer).css("background-image", YTPlayer.orig_background) : YTPlayer.opt.backgroundUrl && YTPlayer.isPlayer && (YTPlayer.opt.backgroundUrl = YTPlayer.opt.backgroundUrl || YTPlayer.orig_background, YTPlayer.opt.containment.css({
                            background: "url(" + YTPlayer.opt.backgroundUrl + ") center center",
                            backgroundSize: "cover"
                        }))
                    });
                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, startAt = startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), YTPlayer.player.seekTo(startAt, !0), $YTPlayer.YTPPlay()
                }
            }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
        },
        getTime: function() {
            var e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.currentTime)
        },
        getTotalTime: function() {
            var e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.totalTime)
        },
        checkForStart: function(e) {
            var t = jQuery(e);
            if (jQuery.contains(document, e)) {
                if (e.preventTrigger = !0, e.state = 2, jQuery(e).YTPPause(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.controlBar = !1, e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.opt.addRaster) {
                    var n = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
                    e.overlay.addClass(e.isRetina ? n + " retina" : n)
                } else e.overlay.removeClass(function(e, t) {
                    var n = t.split(" "),
                        r = [];
                    return jQuery.each(n, function(e, t) {
                        /raster.*/.test(t) && r.push(t)
                    }), r.push("retina"), r.join(" ")
                });
                var r = e.opt.startAt ? e.start_from_last ? e.start_from_last : e.opt.startAt : 1;
                e.start_from_last = null, e.player.playVideo(), e.player.seekTo(r, !0), clearInterval(e.checkForStartAt), e.checkForStartAt = setInterval(function() {
                    jQuery(e).YTPMute();
                    var n = e.player.getVideoLoadedFraction() >= r / e.player.getDuration();
                    if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= r && n) {
                        clearInterval(e.checkForStartAt), "function" == typeof e.opt.onReady && e.opt.onReady(e), e.isReady = !0;
                        var i = jQuery.Event("YTPReady");
                        if (i.time = e.currentTime, jQuery(e).trigger(i), e.preventTrigger = !0, e.state = 2, jQuery(e).YTPPause(), e.opt.mute || jQuery(e).YTPUnmute(), e.canTrigger = !0, e.opt.autoPlay) {
                            var o = jQuery.Event("YTPStart");
                            o.time = e.currentTime, jQuery(e).trigger(o), jQuery(e.playerEl).CSSAnimate({
                                opacity: 1
                            }, 1e3), t.YTPPlay(), e.wrapper.CSSAnimate({
                                opacity: e.isAlone ? 1 : e.opt.opacity
                            }, 2 * e.opt.fadeOnStartTime), "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion, "10.1") < 0 && (e.safariPlay = setInterval(function() {
                                1 != e.state ? t.YTPPlay() : clearInterval(e.safariPlay)
                            }, 10)), t.one("YTPReady", function() {
                                t.YTPPlay()
                            })
                        } else e.player.pauseVideo(), e.isPlayer || (jQuery(e.playerEl).CSSAnimate({
                            opacity: 1
                        }, e.opt.fadeOnStartTime), e.wrapper.CSSAnimate({
                            opacity: e.isAlone ? 1 : e.opt.opacity
                        }, e.opt.fadeOnStartTime)), e.controlBar.length && e.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                        e.isPlayer && !e.opt.autoPlay && e.loading && e.loading.length && (e.loading.html("Ready"), setTimeout(function() {
                            e.loading.fadeOut()
                        }, 100)), e.controlBar && e.controlBar.length && e.controlBar.slideDown(1e3)
                    } else "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery.mbBrowser.fullVersion && jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion, "10.1") < 0 && (e.player.playVideo(), r >= 0 && e.player.seekTo(r, !0))
                }, 10)
            } else jQuery(e).YTPPlayerDestroy()
        },
        setAnchor: function(e) {
            this.optimizeDisplay(e)
        },
        getAnchor: function() {
            return this.get(0).opt.anchor
        },
        formatTime: function(e) {
            var t = Math.floor(e / 60),
                n = Math.floor(e - 60 * t);
            return (9 >= t ? "0" + t : t) + " : " + (9 >= n ? "0" + n : n)
        }
    }, jQuery.fn.optimizeDisplay = function(anchor) {
        var YTPlayer = this.get(0),
            playerBox = jQuery(YTPlayer.playerEl),
            vid = {};
        YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor, YTPlayer.opt.anchor = "undefined " != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : "center,center";
        var YTPAlign = YTPlayer.opt.anchor.split(",");
        if (YTPlayer.opt.optimizeDisplay) {
            var abundance = YTPlayer.isPlayer ? 0 : 80,
                win = {},
                el = YTPlayer.wrapper;
            win.width = el.outerWidth(), win.height = el.outerHeight() + abundance, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), vid.width = win.width, vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio), vid.marginTop = Math.ceil(-(vid.height - win.height) / 2), vid.marginLeft = 0;
            var lowest = vid.height < win.height;
            lowest && (vid.height = win.height, vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio), vid.marginTop = 0, vid.marginLeft = Math.ceil(-(vid.width - win.width) / 2));
            for (var a in YTPAlign)
                if (YTPAlign.hasOwnProperty(a)) {
                    var al = YTPAlign[a].replace(/ /g, "");
                    switch (al) {
                        case "top":
                            vid.marginTop = lowest ? -(vid.height - win.height) / 2 : 0;
                            break;
                        case "bottom":
                            vid.marginTop = lowest ? 0 : -(vid.height - win.height);
                            break;
                        case "left":
                            vid.marginLeft = 0;
                            break;
                        case "right":
                            vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
                            break;
                        default:
                            vid.width > win.width && (vid.marginLeft = -(vid.width - win.width) / 2)
                    }
                }
        } else vid.width = "100%", vid.height = "100%", vid.marginTop = 0, vid.marginLeft = 0;
        playerBox.css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft,
            maxWidth: "initial"
        })
    }, jQuery.shuffle = function(e) {
        for (var t = e.slice(), n = t.length, r = n; r--;) {
            var i = parseInt(Math.random() * n),
                o = t[r];
            t[r] = t[i], t[i] = o
        }
        return t
    }, jQuery.fn.unselectable = function() {
        return this.each(function() {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on")
        })
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor, jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp), jQuery.support.CSStransition = function() {
    var e = (document.body || document.documentElement).style;
    return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
}(), jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {
            min: 0,
            max: 100,
            unit: "px"
        },
        brightness: {
            min: 0,
            max: 400,
            unit: "%"
        },
        contrast: {
            min: 0,
            max: 400,
            unit: "%"
        },
        grayscale: {
            min: 0,
            max: 100,
            unit: "%"
        },
        hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
        },
        invert: {
            min: 0,
            max: 100,
            unit: "%"
        },
        saturate: {
            min: 0,
            max: 400,
            unit: "%"
        },
        sepia: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    normalizeCss: function(e) {
        var t = jQuery.extend(!0, {}, e);
        jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
        for (var n in t) {
            "transform" === n && (t[jQuery.CSS.sfx + "transform"] = t[n], delete t[n]), "transform-origin" === n && (t[jQuery.CSS.sfx + "transform-origin"] = e[n], delete t[n]), "filter" !== n || jQuery.browser.mozilla || (t[jQuery.CSS.sfx + "filter"] = e[n], delete t[n]), "blur" === n && setFilter(t, "blur", e[n]), "brightness" === n && setFilter(t, "brightness", e[n]), "contrast" === n && setFilter(t, "contrast", e[n]), "grayscale" === n && setFilter(t, "grayscale", e[n]), "hueRotate" === n && setFilter(t, "hueRotate", e[n]), "invert" === n && setFilter(t, "invert", e[n]), "saturate" === n && setFilter(t, "saturate", e[n]), "sepia" === n && setFilter(t, "sepia", e[n]);
            var r = "";
            "x" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " translateX(" + setUnit(e[n], "px") + ")", delete t[n]), "y" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " translateY(" + setUnit(e[n], "px") + ")", delete t[n]), "z" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " translateZ(" + setUnit(e[n], "px") + ")", delete t[n]), "rotate" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " rotate(" + setUnit(e[n], "deg") + ")", delete t[n]), "rotateX" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " rotateX(" + setUnit(e[n], "deg") + ")", delete t[n]), "rotateY" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " rotateY(" + setUnit(e[n], "deg") + ")", delete t[n]), "rotateZ" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " rotateZ(" + setUnit(e[n], "deg") + ")", delete t[n]), "scale" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " scale(" + setUnit(e[n], "") + ")", delete t[n]), "scaleX" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " scaleX(" + setUnit(e[n], "") + ")", delete t[n]), "scaleY" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " scaleY(" + setUnit(e[n], "") + ")", delete t[n]), "scaleZ" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " scaleZ(" + setUnit(e[n], "") + ")", delete t[n]), "skew" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " skew(" + setUnit(e[n], "deg") + ")", delete t[n]), "skewX" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " skewX(" + setUnit(e[n], "deg") + ")", delete t[n]), "skewY" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " skewY(" + setUnit(e[n], "deg") + ")", delete t[n]), "perspective" === n && (r = jQuery.CSS.sfx + "transform", t[r] = t[r] || "", t[r] += " perspective(" + setUnit(e[n], "px") + ")", delete t[n])
        }
        return t
    },
    getProp: function(e) {
        var t = [];
        for (var n in e) t.indexOf(n) < 0 && t.push(uncamel(n));
        return t.join(",")
    },
    animate: function(e, t, n, r, i) {
        return this.each(function() {
            function o() {
                a.called = !0, a.CSSAIsRunning = !1, s.off(jQuery.CSS.transitionEnd + "." + a.id), clearTimeout(a.timeout), s.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof i && i.apply(a), "function" == typeof a.CSSqueue && (a.CSSqueue(), a.CSSqueue = null)
            }
            var a = this,
                s = jQuery(this);
            a.id = a.id || "CSSA_" + (new Date).getTime();
            var l = l || {
                type: "noEvent"
            };
            if (a.CSSAIsRunning && a.eventType == l.type && !jQuery.browser.msie && jQuery.browser.version <= 9) a.CSSqueue = function() {
                s.CSSAnimate(e, t, n, r, i)
            };
            else if (a.CSSqueue = null, a.eventType = l.type, 0 !== s.length && e) {
                if (e = jQuery.normalizeCss(e), a.CSSAIsRunning = !0, "function" == typeof t && (i = t, t = jQuery.fx.speeds._default), "function" == typeof n && (r = n, n = 0), "string" == typeof n && (i = n, n = 0), "function" == typeof r && (i = r, r = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t)
                    for (var u in jQuery.fx.speeds) {
                        if (t == u) {
                            t = jQuery.fx.speeds[u];
                            break
                        }
                        t = jQuery.fx.speeds._default
                    }
                if (t || (t = jQuery.fx.speeds._default), "string" == typeof i && (r = i, i = null), !jQuery.support.CSStransition) {
                    for (var c in e) {
                        if ("transform" === c && delete e[c], "filter" === c && delete e[c], "transform-origin" === c && delete e[c], "auto" === e[c] && delete e[c], "x" === c) {
                            d = e[c];
                            e[p = "left"] = d, delete e[c]
                        }
                        if ("y" === c) {
                            var d = e[c],
                                p = "top";
                            e[p] = d, delete e[c]
                        }("-ms-transform" === c || "-ms-filter" === c) && delete e[c]
                    }
                    return void s.delay(n).animate(e, t, i)
                }
                var f = {
                    default: "ease",
                    in : "ease-in",
                    out: "ease-out",
                    "in-out": "ease-in-out",
                    snap: "cubic-bezier(0,1,.5,1)",
                    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                    easeInOutExpo: "cubic-bezier(1,0,0,1)",
                    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                    easeInSine: "cubic-bezier(.47,0,.745,.715)",
                    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                };
                f[r] && (r = f[r]), s.off(jQuery.CSS.transitionEnd + "." + a.id);
                var h = jQuery.CSS.getProp(e),
                    y = {};
                jQuery.extend(y, e), y[jQuery.CSS.sfx + "transition-property"] = h, y[jQuery.CSS.sfx + "transition-duration"] = t + "ms", y[jQuery.CSS.sfx + "transition-delay"] = n + "ms", y[jQuery.CSS.sfx + "transition-timing-function"] = r, setTimeout(function() {
                    s.one(jQuery.CSS.transitionEnd + "." + a.id, o), s.css(y)
                }, 1), a.timeout = setTimeout(function() {
                    return a.called || !i ? (a.called = !1, void(a.CSSAIsRunning = !1)) : (s.css(jQuery.CSS.sfx + "transition", ""), i.apply(a), a.CSSAIsRunning = !1, void("function" == typeof a.CSSqueue && (a.CSSqueue(), a.CSSqueue = null)))
                }, t + n + 10)
            }
        })
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function(e) {
    return this.each(function() {
        var t = jQuery(this),
            n = jQuery.normalizeCss(e);
        t.css(n)
    })
};
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function() {
    var e = {
        version: "Unknown version",
        name: "Unknown OS"
    };
    return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
};
jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function(e, t) {
        if ("stringstring" != typeof e + typeof t) return !1;
        for (var n = e.split("."), r = t.split("."), i = 0, o = Math.max(n.length, r.length); o > i; i++) {
            if (n[i] && !r[i] && 0 < parseInt(n[i]) || parseInt(n[i]) > parseInt(r[i])) return 1;
            if (r[i] && !n[i] && 0 < parseInt(r[i]) || parseInt(n[i]) < parseInt(r[i])) return -1
        }
        return 0
    },
    function(e) {
        e.simpleSlider = {
            defaults: {
                initialval: 0,
                scale: 100,
                orientation: "h",
                readonly: !1,
                callback: !1
            },
            events: {
                start: e.browser.mobile ? "touchstart" : "mousedown",
                end: e.browser.mobile ? "touchend" : "mouseup",
                move: e.browser.mobile ? "touchmove" : "mousemove"
            },
            init: function(t) {
                return this.each(function() {
                    var n = this,
                        r = e(n);
                    r.addClass("simpleSlider"), n.opt = {}, e.extend(n.opt, e.simpleSlider.defaults, t), e.extend(n.opt, r.data());
                    var i = "h" == n.opt.orientation ? "horizontal" : "vertical",
                        i = e("<div/>").addClass("level").addClass(i);
                    r.prepend(i), n.level = i, r.css({
                        cursor: "default"
                    }), "auto" == n.opt.scale && (n.opt.scale = e(n).outerWidth()), r.updateSliderVal(), n.opt.readonly || (r.on(e.simpleSlider.events.start, function(t) {
                        e.browser.mobile && (t = t.changedTouches[0]), n.canSlide = !0, r.updateSliderVal(t), "h" == n.opt.orientation ? r.css({
                            cursor: "col-resize"
                        }) : r.css({
                            cursor: "row-resize"
                        }), t.preventDefault(), t.stopPropagation()
                    }), e(document).on(e.simpleSlider.events.move, function(t) {
                        e.browser.mobile && (t = t.changedTouches[0]), n.canSlide && (e(document).css({
                            cursor: "default"
                        }), r.updateSliderVal(t), t.preventDefault(), t.stopPropagation())
                    }).on(e.simpleSlider.events.end, function() {
                        e(document).css({
                            cursor: "auto"
                        }), n.canSlide = !1, r.css({
                            cursor: "auto"
                        })
                    }))
                })
            },
            updateSliderVal: function(t) {
                var n = this.get(0);
                if (n.opt) {
                    n.opt.initialval = "number" == typeof n.opt.initialval ? n.opt.initialval : n.opt.initialval(n);
                    var r = e(n).outerWidth(),
                        i = e(n).outerHeight();
                    n.x = "object" == typeof t ? t.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof t ? t * r / n.opt.scale : n.opt.initialval * r / n.opt.scale, n.y = "object" == typeof t ? t.clientY + document.body.scrollTop - this.offset().top : "number" == typeof t ? (n.opt.scale - n.opt.initialval - t) * i / n.opt.scale : n.opt.initialval * i / n.opt.scale, n.y = this.outerHeight() - n.y, n.scaleX = n.x * n.opt.scale / r, n.scaleY = n.y * n.opt.scale / i, n.outOfRangeX = n.scaleX > n.opt.scale ? n.scaleX - n.opt.scale : 0 > n.scaleX ? n.scaleX : 0, n.outOfRangeY = n.scaleY > n.opt.scale ? n.scaleY - n.opt.scale : 0 > n.scaleY ? n.scaleY : 0, n.outOfRange = "h" == n.opt.orientation ? n.outOfRangeX : n.outOfRangeY, n.value = void 0 !== t ? "h" == n.opt.orientation ? n.x >= this.outerWidth() ? n.opt.scale : 0 >= n.x ? 0 : n.scaleX : n.y >= this.outerHeight() ? n.opt.scale : 0 >= n.y ? 0 : n.scaleY : "h" == n.opt.orientation ? n.scaleX : n.scaleY, "h" == n.opt.orientation ? n.level.width(Math.floor(100 * n.x / r) + "%") : n.level.height(Math.floor(100 * n.y / i)), "function" == typeof n.opt.callback && n.opt.callback(n)
                }
            }
        }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
    }(jQuery),
    function(e) {
        e.mbCookie = {
            set: function(e, t, n, r) {
                "object" == typeof t && (t = JSON.stringify(t)), n || (n = 7), r = r ? "; domain=" + r : "";
                var i = new Date;
                i.setTime(i.getTime() + 864e5 * n), n = "; expires=" + i.toGMTString(), document.cookie = e + "=" + t + n + "; path=/" + r
            },
            get: function(e) {
                e += "=";
                for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                    for (var r = t[n];
                        " " == r.charAt(0);) r = r.substring(1, r.length);
                    if (0 == r.indexOf(e)) try {
                        return JSON.parse(r.substring(e.length, r.length))
                    } catch (t) {
                        return r.substring(e.length, r.length)
                    }
                }
                return null
            },
            remove: function(t) {
                e.mbCookie.set(t, "", -1)
            }
        }, e.mbStorage = {
            set: function(e, t) {
                "object" == typeof t && (t = JSON.stringify(t)), localStorage.setItem(e, t)
            },
            get: function(e) {
                if (!localStorage[e]) return null;
                try {
                    return JSON.parse(localStorage[e])
                } catch (t) {
                    return localStorage[e]
                }
            },
            remove: function(e) {
                e ? localStorage.removeItem(e) : localStorage.clear()
            }
        }
    }(jQuery);
var Util = function(e) {
        function t(e) {
            return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }

        function n(e) {
            return (e[0] || e).nodeType
        }

        function r() {
            return {
                bindType: a.end,
                delegateType: a.end,
                handle: function(t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }
        }

        function i() {
            if (window.QUnit) return !1;
            var e = document.createElement("bootstrap");
            for (var t in s)
                if (void 0 !== e.style[t]) return {
                    end: s[t]
                };
            return !1
        }

        function o(t) {
            var n = this,
                r = !1;
            return e(this).one(l.TRANSITION_END, function() {
                r = !0
            }), setTimeout(function() {
                r || l.triggerTransitionEnd(n)
            }, t), this
        }
        var a = !1,
            s = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            },
            l = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(e) {
                    do {
                        e += ~~(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                },
                getSelectorFromElement: function(t) {
                    var n = t.getAttribute("data-target");
                    n && "#" !== n || (n = t.getAttribute("href") || "");
                    try {
                        return e(n).length > 0 ? n : null
                    } catch (e) {
                        return null
                    }
                },
                reflow: function(e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function(t) {
                    e(t).trigger(a.end)
                },
                supportsTransitionEnd: function() {
                    return Boolean(a)
                },
                typeCheckConfig: function(e, r, i) {
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var a = i[o],
                                s = r[o],
                                l = s && n(s) ? "element" : t(s);
                            if (!new RegExp(a).test(l)) throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + l + '" but expected type "' + a + '".')
                        }
                }
            };
        return a = i(), e.fn.emulateTransitionEnd = o, l.supportsTransitionEnd() && (e.event.special[l.TRANSITION_END] = r()), l
    }(jQuery),
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    _createClass = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    Modal = function(e) {
        var t = "modal",
            n = ".bs.modal",
            r = e.fn[t],
            i = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            },
            o = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            },
            a = {
                HIDE: "hide.bs.modal",
                HIDDEN: "hidden.bs.modal",
                SHOW: "show.bs.modal",
                SHOWN: "shown.bs.modal",
                FOCUSIN: "focusin.bs.modal",
                RESIZE: "resize.bs.modal",
                CLICK_DISMISS: "click.dismiss.bs.modal",
                KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                CLICK_DATA_API: "click.bs.modal.data-api"
            },
            s = {
                SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                BACKDROP: "modal-backdrop",
                OPEN: "modal-open",
                FADE: "fade",
                SHOW: "show"
            },
            l = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                NAVBAR_TOGGLER: ".navbar-toggler"
            },
            u = function() {
                function r(t, n) {
                    _classCallCheck(this, r), this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(l.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                }
                return r.prototype.toggle = function(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, r.prototype.show = function(t) {
                    var n = this;
                    if (!this._isTransitioning) {
                        Util.supportsTransitionEnd() && e(this._element).hasClass(s.FADE) && (this._isTransitioning = !0);
                        var r = e.Event(a.SHOW, {
                            relatedTarget: t
                        });
                        e(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), e(document.body).addClass(s.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(a.CLICK_DISMISS, l.DATA_DISMISS, function(e) {
                            return n.hide(e)
                        }), e(this._dialog).on(a.MOUSEDOWN_DISMISS, function() {
                            e(n._element).one(a.MOUSEUP_DISMISS, function(t) {
                                e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function() {
                            return n._showElement(t)
                        }))
                    }
                }, r.prototype.hide = function(t) {
                    var n = this;
                    if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                        var r = Util.supportsTransitionEnd() && e(this._element).hasClass(s.FADE);
                        r && (this._isTransitioning = !0);
                        var i = e.Event(a.HIDE);
                        e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), e(document).off(a.FOCUSIN), e(this._element).removeClass(s.SHOW), e(this._element).off(a.CLICK_DISMISS), e(this._dialog).off(a.MOUSEDOWN_DISMISS), r ? e(this._element).one(Util.TRANSITION_END, function(e) {
                            return n._hideModal(e)
                        }).emulateTransitionEnd(300) : this._hideModal())
                    }
                }, r.prototype.dispose = function() {
                    e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                }, r.prototype.handleUpdate = function() {
                    this._adjustDialog()
                }, r.prototype._getConfig = function(n) {
                    return n = e.extend({}, i, n), Util.typeCheckConfig(t, n, o), n
                }, r.prototype._showElement = function(t) {
                    var n = this,
                        r = Util.supportsTransitionEnd() && e(this._element).hasClass(s.FADE);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, r && Util.reflow(this._element), e(this._element).addClass(s.SHOW), this._config.focus && this._enforceFocus();
                    var i = e.Event(a.SHOWN, {
                            relatedTarget: t
                        }),
                        o = function() {
                            n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(i)
                        };
                    r ? e(this._dialog).one(Util.TRANSITION_END, o).emulateTransitionEnd(300) : o()
                }, r.prototype._enforceFocus = function() {
                    var t = this;
                    e(document).off(a.FOCUSIN).on(a.FOCUSIN, function(n) {
                        document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus()
                    })
                }, r.prototype._setEscapeEvent = function() {
                    var t = this;
                    this._isShown && this._config.keyboard ? e(this._element).on(a.KEYDOWN_DISMISS, function(e) {
                        27 === e.which && (e.preventDefault(), t.hide())
                    }) : this._isShown || e(this._element).off(a.KEYDOWN_DISMISS)
                }, r.prototype._setResizeEvent = function() {
                    var t = this;
                    this._isShown ? e(window).on(a.RESIZE, function(e) {
                        return t.handleUpdate(e)
                    }) : e(window).off(a.RESIZE)
                }, r.prototype._hideModal = function() {
                    var t = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                        e(document.body).removeClass(s.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(a.HIDDEN)
                    })
                }, r.prototype._removeBackdrop = function() {
                    this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                }, r.prototype._showBackdrop = function(t) {
                    var n = this,
                        r = e(this._element).hasClass(s.FADE) ? s.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        var i = Util.supportsTransitionEnd() && r;
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = s.BACKDROP, r && e(this._backdrop).addClass(r), e(this._backdrop).appendTo(document.body), e(this._element).on(a.CLICK_DISMISS, function(e) {
                                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                            }), i && Util.reflow(this._backdrop), e(this._backdrop).addClass(s.SHOW), !t) return;
                        if (!i) return void t();
                        e(this._backdrop).one(Util.TRANSITION_END, t).emulateTransitionEnd(150)
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass(s.SHOW);
                        var o = function() {
                            n._removeBackdrop(), t && t()
                        };
                        Util.supportsTransitionEnd() && e(this._element).hasClass(s.FADE) ? e(this._backdrop).one(Util.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                    } else t && t()
                }, r.prototype._adjustDialog = function() {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, r.prototype._resetAdjustments = function() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, r.prototype._checkScrollbar = function() {
                    this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, r.prototype._setScrollbar = function() {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        e(l.FIXED_CONTENT).each(function(n, r) {
                            var i = e(r)[0].style.paddingRight,
                                o = e(r).css("padding-right");
                            e(r).data("padding-right", i).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                        }), e(l.NAVBAR_TOGGLER).each(function(n, r) {
                            var i = e(r)[0].style.marginRight,
                                o = e(r).css("margin-right");
                            e(r).data("margin-right", i).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px")
                        });
                        var n = document.body.style.paddingRight,
                            r = e("body").css("padding-right");
                        e("body").data("padding-right", n).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                    }
                }, r.prototype._resetScrollbar = function() {
                    e(l.FIXED_CONTENT).each(function(t, n) {
                        var r = e(n).data("padding-right");
                        void 0 !== r && e(n).css("padding-right", r).removeData("padding-right")
                    }), e(l.NAVBAR_TOGGLER).each(function(t, n) {
                        var r = e(n).data("margin-right");
                        void 0 !== r && e(n).css("margin-right", r).removeData("margin-right")
                    });
                    var t = e("body").data("padding-right");
                    void 0 !== t && e("body").css("padding-right", t).removeData("padding-right")
                }, r.prototype._getScrollbarWidth = function() {
                    var e = document.createElement("div");
                    e.className = s.SCROLLBAR_MEASURER, document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, r._jQueryInterface = function(t, n) {
                    return this.each(function() {
                        var i = e(this).data("bs.modal"),
                            o = e.extend({}, r.Default, e(this).data(), "object" === (void 0 === t ? "undefined" : _typeof(t)) && t);
                        if (i || (i = new r(this, o), e(this).data("bs.modal", i)), "string" == typeof t) {
                            if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                            i[t](n)
                        } else o.show && i.show(n)
                    })
                }, _createClass(r, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-beta"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return i
                    }
                }]), r
            }();
        return e(document).on(a.CLICK_DATA_API, l.DATA_TOGGLE, function(t) {
            var n = this,
                r = void 0,
                i = Util.getSelectorFromElement(this);
            i && (r = e(i)[0]);
            var o = e(r).data("bs.modal") ? "toggle" : e.extend({}, e(r).data(), e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var s = e(r).one(a.SHOW, function(t) {
                t.isDefaultPrevented() || s.one(a.HIDDEN, function() {
                    e(n).is(":visible") && n.focus()
                })
            });
            u._jQueryInterface.call(e(r), o, this)
        }), e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function() {
            return e.fn[t] = r, u._jQueryInterface
        }, u
    }(jQuery);
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    (t = function() {
        var t = 0;
        return function(n, r) {
            var i, o = this;
            o.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(n),
                appendDots: e(n),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, n) {
                    return e('<button type="button" />').text(n + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, o.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = e(n), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, i = e(n).data("slick") || {}, o.options = e.extend({}, o.defaults, r, i), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = e.proxy(o.autoPlay, o), o.autoPlayClear = e.proxy(o.autoPlayClear, o), o.autoPlayIterator = e.proxy(o.autoPlayIterator, o), o.changeSlide = e.proxy(o.changeSlide, o), o.clickHandler = e.proxy(o.clickHandler, o), o.selectHandler = e.proxy(o.selectHandler, o), o.setPosition = e.proxy(o.setPosition, o), o.swipeHandler = e.proxy(o.swipeHandler, o), o.dragHandler = e.proxy(o.dragHandler, o), o.keyHandler = e.proxy(o.keyHandler, o), o.instanceUid = t++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, r) {
        var i = this;
        if ("boolean" == typeof n) r = n, n = null;
        else if (n < 0 || n >= i.slideCount) return !1;
        i.unload(), "number" == typeof n ? 0 === n && 0 === i.$slides.length ? e(t).appendTo(i.$slideTrack) : r ? e(t).insertBefore(i.$slides.eq(n)) : e(t).insertAfter(i.$slides.eq(n)) : !0 === r ? e(t).prependTo(i.$slideTrack) : e(t).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t)
        }), i.$slidesCache = i.$slides, i.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, n) {
        var r = {},
            i = this;
        i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (t = -t), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
            left: t
        }, i.options.speed, i.options.easing, n) : i.$slideTrack.animate({
            top: t
        }, i.options.speed, i.options.easing, n) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), e({
            animStart: i.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: i.options.speed,
            easing: i.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === i.options.vertical ? (r[i.animType] = "translate(" + e + "px, 0px)", i.$slideTrack.css(r)) : (r[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(r))
            },
            complete: function() {
                n && n.call()
            }
        })) : (i.applyTransition(), t = Math.ceil(t), !1 === i.options.vertical ? r[i.animType] = "translate3d(" + t + "px, 0px, 0px)" : r[i.animType] = "translate3d(0px," + t + "px, 0px)", i.$slideTrack.css(r), n && setTimeout(function() {
            i.disableTransition(), n.call()
        }, i.options.speed))
    }, t.prototype.getNavTarget = function() {
        var t = this,
            n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)), n
    }, t.prototype.asNavFor = function(t) {
        var n = this.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t, n, r = this;
        if (!0 === r.options.dots) {
            for (r.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(r.options.dotsClass), t = 0; t <= r.getDotCount(); t += 1) n.append(e("<li />").append(r.options.customPaging.call(this, r, t)));
            r.$dots = n.appendTo(r.options.appendDots), r.$dots.find("li").first().addClass("slick-active")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, n, r, i, o, a, s = this;
        if (r = document.createDocumentFragment(), o = s.$slider.children(), s.options.rows > 1) {
            for (a = s.options.slidesPerRow * s.options.rows, i = Math.ceil(o.length / a), e = 0; e < i; e++) {
                var l = document.createElement("div");
                for (t = 0; t < s.options.rows; t++) {
                    var u = document.createElement("div");
                    for (n = 0; n < s.options.slidesPerRow; n++) {
                        var c = e * a + (t * s.options.slidesPerRow + n);
                        o.get(c) && u.appendChild(o.get(c))
                    }
                    l.appendChild(u)
                }
                r.appendChild(l)
            }
            s.$slider.empty().append(r), s.$slider.children().children().children().css({
                width: 100 / s.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t, n) {
        var r, i, o, a = this,
            s = !1,
            l = a.$slider.width(),
            u = window.innerWidth || e(window).width();
        if ("window" === a.respondTo ? o = u : "slider" === a.respondTo ? o = l : "min" === a.respondTo && (o = Math.min(u, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
            i = null;
            for (r in a.breakpoints) a.breakpoints.hasOwnProperty(r) && (!1 === a.originalSettings.mobileFirst ? o < a.breakpoints[r] && (i = a.breakpoints[r]) : o > a.breakpoints[r] && (i = a.breakpoints[r]));
            null !== i ? null !== a.activeBreakpoint ? (i !== a.activeBreakpoint || n) && (a.activeBreakpoint = i, "unslick" === a.breakpointSettings[i] ? a.unslick(i) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[i]), !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t)), s = i) : (a.activeBreakpoint = i, "unslick" === a.breakpointSettings[i] ? a.unslick(i) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[i]), !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t)), s = i) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t), s = i), t || !1 === s || a.$slider.trigger("breakpoint", [a, s])
        }
    }, t.prototype.changeSlide = function(t, n) {
        var r, i, o, a = this,
            s = e(t.currentTarget);
        switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), o = a.slideCount % a.options.slidesToScroll != 0, r = o ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll, t.data.message) {
            case "previous":
                i = 0 === r ? a.options.slidesToScroll : a.options.slidesToShow - r, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - i, !1, n);
                break;
            case "next":
                i = 0 === r ? a.options.slidesToScroll : r, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + i, !1, n);
                break;
            case "index":
                var l = 0 === t.data.index ? 0 : t.data.index || s.index() * a.options.slidesToScroll;
                a.slideHandler(a.checkNavigable(l), !1, n), s.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, n;
        if (t = this.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var r in t) {
                if (e < t[r]) {
                    e = n;
                    break
                }
                n = t[r]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            n = {};
        n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function() {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(n) {
            n.stopImmediatePropagation();
            var r = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = r.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            n = 0,
            r = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++r;
            else
                for (; t < e.slideCount;) ++r, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) r = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++r, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else r = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return r - 1
    }, t.prototype.getLeft = function(e) {
        var t, n, r, i, o = this,
            a = 0;
        return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, i = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? i = -1.5 : 1 === o.options.slidesToShow && (i = -2)), a = n * o.options.slidesToShow * i), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, a = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, a = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, a = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, a = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + a, !0 === o.options.variableWidth && (r = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? r[0] ? -1 * (o.$slideTrack.width() - r[0].offsetLeft - r.width()) : 0 : r[0] ? -1 * r[0].offsetLeft : 0, !0 === o.options.centerMode && (r = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? r[0] ? -1 * (o.$slideTrack.width() - r[0].offsetLeft - r.width()) : 0 : r[0] ? -1 * r[0].offsetLeft : 0, t += (o.$list.width() - r.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            n = 0,
            r = 0,
            i = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, r = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) i.push(n), n = r + t.options.slidesToScroll, r += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return i
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, n, r = this;
        return n = !0 === r.options.centerMode ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, !0 === r.options.swipeToSlide ? (r.$slideTrack.find(".slick-slide").each(function(i, o) {
            if (o.offsetLeft - n + e(o).outerWidth() / 2 > -1 * r.swipeLeft) return t = o, !1
        }), Math.abs(e(t).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function(t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
    }, t.prototype.initADA = function() {
        var t = this,
            n = Math.ceil(t.slideCount / t.options.slidesToShow),
            r = t.getNavigableIndexes().filter(function(e) {
                return e >= 0 && e < t.slideCount
            });
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
            var i = r.indexOf(n);
            e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + n,
                tabindex: -1
            }), -1 !== i && e(this).attr({
                "aria-describedby": "slick-slide-control" + t.instanceUid + i
            })
        }), t.$dots.attr("role", "tablist").find("li").each(function(i) {
            var o = r[i];
            e(this).attr({
                role: "presentation"
            }), e(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + i,
                "aria-controls": "slick-slide" + t.instanceUid + o,
                "aria-label": i + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(t.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var i = t.currentSlide, o = i + t.options.slidesToShow; i < o; i++) t.$slides.eq(i).attr("tabindex", 0);
        t.activateADA()
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                    n = e(this).attr("data-lazy"),
                    r = e(this).attr("data-srcset"),
                    i = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                    a = document.createElement("img");
                a.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        r && (t.attr("srcset", r), i && t.attr("sizes", i)), t.attr("src", n).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), o.$slider.trigger("lazyLoaded", [o, t, n])
                    })
                }, a.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, n])
                }, a.src = n
            })
        }
        var n, r, i, o = this;
        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? i = (r = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (r = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (r = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, i = Math.ceil(r + o.options.slidesToShow), !0 === o.options.fade && (r > 0 && r--, i <= o.slideCount && i++)), n = o.$slider.find(".slick-slide").slice(r, i), "anticipated" === o.options.lazyLoad)
            for (var a = r - 1, s = i, l = o.$slider.find(".slick-slide"), u = 0; u < o.options.slidesToScroll; u++) a < 0 && (a = o.slideCount - 1), n = (n = n.add(l.eq(a))).add(l.eq(s)), a--, s++;
        t(n), o.slideCount <= o.options.slidesToShow ? t(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? t(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && t(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(t) {
        var n = this;
        n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var n, r, i, o, a, s = this,
            l = e("img[data-lazy]", s.$slider);
        l.length ? (n = l.first(), r = n.attr("data-lazy"), i = n.attr("data-srcset"), o = n.attr("data-sizes") || s.$slider.attr("data-sizes"), (a = document.createElement("img")).onload = function() {
            i && (n.attr("srcset", i), o && n.attr("sizes", o)), n.attr("src", r).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, n, r]), s.progressiveLazyLoad()
        }, a.onerror = function() {
            t < 3 ? setTimeout(function() {
                s.progressiveLazyLoad(t + 1)
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, n, r]), s.progressiveLazyLoad())
        }, a.src = r) : s.$slider.trigger("allImagesLoaded", [s])
    }, t.prototype.refresh = function(t) {
        var n, r, i = this;
        r = i.slideCount - i.options.slidesToShow, !i.options.infinite && i.currentSlide > r && (i.currentSlide = r), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), n = i.currentSlide, i.destroy(!0), e.extend(i, i.initials, {
            currentSlide: n
        }), i.init(), t || i.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function() {
        var t, n, r, i = this,
            o = i.options.responsive || null;
        if ("array" === e.type(o) && o.length) {
            i.respondTo = i.options.respondTo || "window";
            for (t in o)
                if (r = i.breakpoints.length - 1, o.hasOwnProperty(t)) {
                    for (n = o[t].breakpoint; r >= 0;) i.breakpoints[r] && i.breakpoints[r] === n && i.breakpoints.splice(r, 1), r--;
                    i.breakpoints.push(n), i.breakpointSettings[n] = o[t].settings
                }
            i.breakpoints.sort(function(e, t) {
                return i.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
        var r = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : r.slideCount - 1 : !0 === t ? --e : e, r.slideCount < 1 || e < 0 || e > r.slideCount - 1) return !1;
        r.unload(), !0 === n ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(e).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, r.reinit()
    }, t.prototype.setCSS = function(e) {
        var t, n, r = this,
            i = {};
        !0 === r.options.rtl && (e = -e), t = "left" == r.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == r.positionProp ? Math.ceil(e) + "px" : "0px", i[r.positionProp] = e, !1 === r.transformsEnabled ? r.$slideTrack.css(i) : (i = {}, !1 === r.cssTransitions ? (i[r.animType] = "translate(" + t + ", " + n + ")", r.$slideTrack.css(i)) : (i[r.animType] = "translate3d(" + t + ", " + n + ", 0px)", r.$slideTrack.css(i)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, n = this;
        n.$slides.each(function(r, i) {
            t = n.slideWidth * r * -1, !0 === n.options.rtl ? e(i).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(i).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, n, r, i, o, a = this,
            s = !1;
        if ("object" === e.type(arguments[0]) ? (r = arguments[0], s = arguments[1], o = "multiple") : "string" === e.type(arguments[0]) && (r = arguments[0], i = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) a.options[r] = i;
        else if ("multiple" === o) e.each(r, function(e, t) {
            a.options[e] = t
        });
        else if ("responsive" === o)
            for (n in i)
                if ("array" !== e.type(a.options.responsive)) a.options.responsive = [i[n]];
                else {
                    for (t = a.options.responsive.length - 1; t >= 0;) a.options.responsive[t].breakpoint === i[n].breakpoint && a.options.responsive.splice(t, 1), t--;
                    a.options.responsive.push(i[n])
                }
        s && (a.unload(), a.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function(e) {
        var t, n, r, i, o = this;
        if (n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode) {
            var a = o.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t + a, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (r = o.options.slidesToShow + e, n.slice(r - t + 1 + a, r + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")
        } else e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= o.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (i = o.slideCount % o.options.slidesToShow, r = !0 === o.options.infinite ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? n.slice(r - (o.options.slidesToShow - i), r + i).addClass("slick-active").attr("aria-hidden", "false") : n.slice(r, r + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, n, r, i = this;
        if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (n = null, i.slideCount > i.options.slidesToShow)) {
            for (r = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, t = i.slideCount; t > i.slideCount - r; t -= 1) n = t - 1, e(i.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < r + i.slideCount; t += 1) n = t, e(i.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
            i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e
    }, t.prototype.selectHandler = function(t) {
        var n = this,
            r = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            i = parseInt(r.attr("data-slick-index"));
        i || (i = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(i, !1, !0) : n.slideHandler(i)
    }, t.prototype.slideHandler = function(e, t, n) {
        var r, i, o, a, s, l = null,
            u = this;
        if (t = t || !1, !(!0 === u.animating && !0 === u.options.waitForAnimate || !0 === u.options.fade && u.currentSlide === e))
            if (!1 === t && u.asNavFor(e), r = e, l = u.getLeft(r), a = u.getLeft(u.currentSlide), u.currentLeft = null === u.swipeLeft ? a : u.swipeLeft, !1 === u.options.infinite && !1 === u.options.centerMode && (e < 0 || e > u.getDotCount() * u.options.slidesToScroll)) !1 === u.options.fade && (r = u.currentSlide, !0 !== n ? u.animateSlide(a, function() {
                u.postSlide(r)
            }) : u.postSlide(r));
            else if (!1 === u.options.infinite && !0 === u.options.centerMode && (e < 0 || e > u.slideCount - u.options.slidesToScroll)) !1 === u.options.fade && (r = u.currentSlide, !0 !== n ? u.animateSlide(a, function() {
            u.postSlide(r)
        }) : u.postSlide(r));
        else {
            if (u.options.autoplay && clearInterval(u.autoPlayTimer), i = r < 0 ? u.slideCount % u.options.slidesToScroll != 0 ? u.slideCount - u.slideCount % u.options.slidesToScroll : u.slideCount + r : r >= u.slideCount ? u.slideCount % u.options.slidesToScroll != 0 ? 0 : r - u.slideCount : r, u.animating = !0, u.$slider.trigger("beforeChange", [u, u.currentSlide, i]), o = u.currentSlide, u.currentSlide = i, u.setSlideClasses(u.currentSlide), u.options.asNavFor && (s = (s = u.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(u.currentSlide), u.updateDots(), u.updateArrows(), !0 === u.options.fade) return !0 !== n ? (u.fadeSlideOut(o), u.fadeSlide(i, function() {
                u.postSlide(i)
            })) : u.postSlide(i), void u.animateHeight();
            !0 !== n ? u.animateSlide(l, function() {
                u.postSlide(i)
            }) : u.postSlide(i)
        }
    }, t.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, n, r, i = this;
        return e = i.touchObject.startX - i.touchObject.curX, t = i.touchObject.startY - i.touchObject.curY, n = Math.atan2(t, e), (r = Math.round(180 * n / Math.PI)) < 0 && (r = 360 - Math.abs(r)), r <= 45 && r >= 0 ? !1 === i.options.rtl ? "left" : "right" : r <= 360 && r >= 315 ? !1 === i.options.rtl ? "left" : "right" : r >= 135 && r <= 225 ? !1 === i.options.rtl ? "right" : "left" : !0 === i.options.verticalSwiping ? r >= 35 && r <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
        var t, n, r = this;
        if (r.dragging = !1, r.swiping = !1, r.scrolling) return r.scrolling = !1, !1;
        if (r.interrupted = !1, r.shouldClick = !(r.touchObject.swipeLength > 10), void 0 === r.touchObject.curX) return !1;
        if (!0 === r.touchObject.edgeHit && r.$slider.trigger("edge", [r, r.swipeDirection()]), r.touchObject.swipeLength >= r.touchObject.minSwipe) {
            switch (n = r.swipeDirection()) {
                case "left":
                case "down":
                    t = r.options.swipeToSlide ? r.checkNavigable(r.currentSlide + r.getSlideCount()) : r.currentSlide + r.getSlideCount(), r.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = r.options.swipeToSlide ? r.checkNavigable(r.currentSlide - r.getSlideCount()) : r.currentSlide - r.getSlideCount(), r.currentDirection = 1
            }
            "vertical" != n && (r.slideHandler(t), r.touchObject = {}, r.$slider.trigger("swipe", [r, n]))
        } else r.touchObject.startX !== r.touchObject.curX && (r.slideHandler(r.currentSlide), r.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, n, r, i, o, a, s = this;
        return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || s.scrolling || o && 1 !== o.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, s.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), a = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2))), !s.options.verticalSwiping && !s.swiping && a > 4 ? (s.scrolling = !0, !1) : (!0 === s.options.verticalSwiping && (s.touchObject.swipeLength = a), n = s.swipeDirection(), void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && (s.swiping = !0, e.preventDefault()), i = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (i = s.touchObject.curY > s.touchObject.startY ? 1 : -1), r = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (r = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + r * i : s.swipeLeft = t + r * (s.$list.height() / s.listWidth) * i, !0 === s.options.verticalSwiping && (s.swipeLeft = t + r * i), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))))
    }, t.prototype.swipeStart = function(e) {
        var t, n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function() {
        var e, n, r = this,
            i = arguments[0],
            o = Array.prototype.slice.call(arguments, 1),
            a = r.length;
        for (e = 0; e < a; e++)
            if ("object" == typeof i || void 0 === i ? r[e].slick = new t(r[e], i) : n = r[e].slick[i].apply(r[e].slick, o), void 0 !== n) return n;
        return r
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
    var t, n, r, i, o, a, s = "Close",
        l = "BeforeClose",
        u = "MarkupParse",
        c = "Open",
        d = "Change",
        p = "mfp",
        f = "." + p,
        h = "mfp-ready",
        y = "mfp-removing",
        m = "mfp-prevent-close",
        g = function() {},
        v = !!window.jQuery,
        T = e(window),
        b = function(e, n) {
            t.ev.on(p + e + f, n)
        },
        w = function(t, n, r, i) {
            var o = document.createElement("div");
            return o.className = "mfp-" + t, r && (o.innerHTML = r), i ? n && n.appendChild(o) : (o = e(o), n && o.appendTo(n)), o
        },
        P = function(n, r) {
            t.ev.triggerHandler(p + n, r), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(r) ? r : [r]))
        },
        k = function(n) {
            return n === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = n), t.currTemplate.closeBtn
        },
        S = function() {
            e.magnificPopup.instance || ((t = new g).init(), e.magnificPopup.instance = t)
        },
        x = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    g.prototype = {
        constructor: g,
        init: function() {
            var n = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = x(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), r = e(document), t.popupsCache = {}
        },
        open: function(n) {
            var i;
            if (!1 === n.isObj) {
                t.items = n.items.toArray(), t.index = 0;
                var a, s = n.items;
                for (i = 0; i < s.length; i++)
                    if ((a = s[i]).parsed && (a = a.el[0]), a === n.el[0]) {
                        t.index = i;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0; {
                if (!t.isOpen) {
                    t.types = [], o = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = r, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = w("bg").on("click" + f, function() {
                        t.close()
                    }), t.wrap = w("wrap").attr("tabindex", -1).on("click" + f, function(e) {
                        t._checkIfClose(e.target) && t.close()
                    }), t.container = w("container", t.wrap)), t.contentContainer = w("content"), t.st.preloader && (t.preloader = w("preloader", t.container, t.st.tLoading));
                    var l = e.magnificPopup.modules;
                    for (i = 0; i < l.length; i++) {
                        var d = l[i];
                        d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
                    }
                    P("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (b(u, function(e, t, n, r) {
                        n.close_replaceWith = k(r.type)
                    }), o += " mfp-close-btn-in") : t.wrap.append(k())), t.st.alignTop && (o += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                        overflow: t.st.overflowY,
                        overflowX: "hidden",
                        overflowY: t.st.overflowY
                    }) : t.wrap.css({
                        top: T.scrollTop(),
                        position: "absolute"
                    }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                        height: r.height(),
                        position: "absolute"
                    }), t.st.enableEscapeKey && r.on("keyup" + f, function(e) {
                        27 === e.keyCode && t.close()
                    }), T.on("resize" + f, function() {
                        t.updateSize()
                    }), t.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && t.wrap.addClass(o);
                    var p = t.wH = T.height(),
                        y = {};
                    if (t.fixedContentPos && t._hasScrollBar(p)) {
                        var m = t._getScrollbarSize();
                        m && (y.marginRight = m)
                    }
                    t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : y.overflow = "hidden");
                    var g = t.st.mainClass;
                    return t.isIE7 && (g += " mfp-ie7"), g && t._addClassToMFP(g), t.updateItemHTML(), P("BuildControls"), e("html").css(y), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                        t.content ? (t._addClassToMFP(h), t._setFocus()) : t.bgOverlay.addClass(h), r.on("focusin" + f, t._onFocusIn)
                    }, 16), t.isOpen = !0, t.updateSize(p), P(c), n
                }
                t.updateItemHTML()
            }
        },
        close: function() {
            t.isOpen && (P(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(y), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            P(s);
            var n = y + " " + h + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
            }
            r.off("keyup.mfp focusin" + f), t.ev.off(f), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, P("AfterClose")
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    r = window.innerHeight * n;
                t.wrap.css("height", r), t.wH = r
            } else t.wH = e || T.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), P("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var r = n.type;
            if (P("BeforeChange", [t.currItem ? t.currItem.type : "", r]), t.currItem = n, !t.currTemplate[r]) {
                var o = !!t.st[r] && t.st[r].markup;
                P("FirstMarkupParse", o), t.currTemplate[r] = !o || e(o)
            }
            i && i !== n.type && t.container.removeClass("mfp-" + i + "-holder");
            var a = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](n, t.currTemplate[r]);
            t.appendContent(a, r), n.preloaded = !0, P(d, n), i = n.type, t.container.prepend(t.contentContainer), P("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(k()) : t.content = e : t.content = "", P("BeforeAppend"), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var r, i = t.items[n];
            if (i.tagName ? i = {
                    el: e(i)
                } : (r = i.type, i = {
                    data: i,
                    src: i.src
                }), i.el) {
                for (var o = t.types, a = 0; a < o.length; a++)
                    if (i.el.hasClass("mfp-" + o[a])) {
                        r = o[a];
                        break
                    }
                i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
            }
            return i.type = r || t.st.type || "inline", i.index = n, i.parsed = !0, t.items[n] = i, P("ElementParse", i), t.items[n]
        },
        addGroup: function(e, n) {
            var r = function(r) {
                r.mfpEl = this, t._openClick(r, e, n)
            };
            n || (n = {});
            var i = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(i).on(i, r)) : (n.isObj = !1, n.delegate ? e.off(i).on(i, n.delegate, r) : (n.items = e, e.off(i).on(i, r)))
        },
        _openClick: function(n, r, i) {
            if ((void 0 !== i.midClick ? i.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var o = void 0 !== i.disableOn ? i.disableOn : e.magnificPopup.defaults.disableOn;
                if (o)
                    if (e.isFunction(o)) {
                        if (!o.call(t)) return !0
                    } else if (T.width() < o) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), i.el = e(n.mfpEl), i.delegate && (i.items = r.find(i.delegate)), t.open(i)
            }
        },
        updateStatus: function(e, r) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), r || "loading" !== e || (r = t.st.tLoading);
                var i = {
                    status: e,
                    text: r
                };
                P("UpdateStatus", i), e = i.status, r = i.text, t.preloader.html(r), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(m)) {
                var r = t.st.closeOnContentClick,
                    i = t.st.closeOnBgClick;
                if (r && i) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (r) return !0
                } else if (i && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? r.height() : document.body.scrollHeight) > (e || T.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, n, r) {
            var i;
            r.data && (n = e.extend(r.data, n)), P(u, [t, n, r]), e.each(n, function(n, r) {
                if (void 0 === r || !1 === r) return !0;
                if ((i = n.split("_")).length > 1) {
                    var o = t.find(f + "-" + i[0]);
                    if (o.length > 0) {
                        var a = i[1];
                        "replaceWith" === a ? o[0] !== r[0] && o.replaceWith(r) : "img" === a ? o.is("img") ? o.attr("src", r) : o.replaceWith(e("<img>").attr("src", r).attr("class", o.attr("class"))) : o.attr(i[1], r)
                    }
                } else t.find(f + "-" + n).html(r)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: g.prototype,
        modules: [],
        open: function(t, n) {
            return S(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function(n) {
        S();
        var r = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var i, o = v ? r.data("magnificPopup") : r[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                o.items ? i = o.items[a] : (i = r, o.delegate && (i = i.find(o.delegate)), i = i.eq(a)), t._openClick({
                    mfpEl: i
                }, r, o)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), v ? r.data("magnificPopup", n) : r[0].magnificPopup = n, t.addGroup(r, n);
        return r
    };
    var C, j, Y, _ = "inline",
        Q = function() {
            Y && (j.after(Y.addClass(C)).detach(), Y = null)
        };
    e.magnificPopup.registerModule(_, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(_), b(s + "." + _, function() {
                    Q()
                })
            },
            getInline: function(n, r) {
                if (Q(), n.src) {
                    var i = t.st.inline,
                        o = e(n.src);
                    if (o.length) {
                        var a = o[0].parentNode;
                        a && a.tagName && (j || (C = i.hiddenClass, j = w(C), C = "mfp-" + C), Y = o.after(j).detach().removeClass(C)), t.updateStatus("ready")
                    } else t.updateStatus("error", i.tNotFound), o = e("<div>");
                    return n.inlineElement = o, o
                }
                return t.updateStatus("ready"), t._parseMarkup(r, {}, n), r
            }
        }
    });
    var A, $ = "ajax",
        I = function() {
            A && e(document.body).removeClass(A)
        },
        E = function() {
            I(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule($, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push($), A = t.st.ajax.cursor, b(s + "." + $, E), b("BeforeChange." + $, E)
            },
            getAjax: function(n) {
                A && e(document.body).addClass(A), t.updateStatus("loading");
                var r = e.extend({
                    url: n.src,
                    success: function(r, i, o) {
                        var a = {
                            data: r,
                            xhr: o
                        };
                        P("ParseAjax", a), t.appendContent(e(a.data), $), n.finished = !0, I(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass(h)
                        }, 16), t.updateStatus("ready"), P("AjaxContentAdded")
                    },
                    error: function() {
                        I(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(r), ""
            }
        }
    });
    var O, D = function(n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var r = t.st.image.titleSrc;
        if (r) {
            if (e.isFunction(r)) return r.call(t, n);
            if (n.el) return n.el.attr(r) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var n = t.st.image,
                    r = ".image";
                t.types.push("image"), b(c + r, function() {
                    "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
                }), b(s + r, function() {
                    n.cursor && e(document.body).removeClass(n.cursor), T.off("resize" + f)
                }), b("Resize" + r, t.resizeImage), t.isLowIE && b("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, O && clearInterval(O), e.isCheckingImgSize = !1, P("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    r = e.img[0],
                    i = function(o) {
                        O && clearInterval(O), O = setInterval(function() {
                            return r.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(O), n++, void(3 === n ? i(10) : 40 === n ? i(50) : 100 === n && i(500)))
                        }, o)
                    };
                i(1)
            },
            getImage: function(n, r) {
                var i = 0,
                    o = function() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, P("ImageLoadComplete")) : (i++, 200 > i ? setTimeout(o, 100) : a()))
                    },
                    a = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    l = r.find(".mfp-img");
                if (l.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img", n.el && n.el.find("img").length && (u.alt = n.el.find("img").attr("alt")), n.img = e(u).on("load.mfploader", o).on("error.mfploader", a), u.src = n.src, l.is("img") && (n.img = n.img.clone()), (u = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : u.width || (n.hasSize = !1)
                }
                return t._parseMarkup(r, {
                    title: D(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (O && clearInterval(O), n.loadError ? (r.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (r.removeClass("mfp-loading"), t.updateStatus("ready")), r) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, r.addClass("mfp-loading"), t.findImageSize(n)), r)
            }
        }
    });
    var M, L = function() {
        return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), M
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    r = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var i, o, a = n.duration,
                        u = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                r = "all " + n.duration / 1e3 + "s " + n.easing,
                                i = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                o = "transition";
                            return i["-webkit-" + o] = i["-moz-" + o] = i["-o-" + o] = i[o] = r, t.css(i), t
                        },
                        c = function() {
                            t.content.css("visibility", "visible")
                        };
                    b("BuildControls" + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(i), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void c();
                            (o = u(e)).css(t._getOffset()), t.wrap.append(o), i = setTimeout(function() {
                                o.css(t._getOffset(!0)), i = setTimeout(function() {
                                    c(), setTimeout(function() {
                                        o.remove(), e = o = null, P("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), b(l + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(i), t.st.removalDelay = a, !e) {
                                if (!(e = t._getItemToZoom())) return;
                                o = u(e)
                            }
                            o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function() {
                                o.css(t._getOffset())
                            }, 16)
                        }
                    }), b(s + r, function() {
                        t._allowZoom() && (c(), o && o.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function(n) {
                var r, i = (r = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
                    o = parseInt(r.css("padding-top"), 10),
                    a = parseInt(r.css("padding-bottom"), 10);
                i.top -= e(window).scrollTop() - o;
                var s = {
                    width: r.width(),
                    height: (v ? r.innerHeight() : r[0].offsetHeight) - a - o
                };
                return L() ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left, s.top = i.top), s
            }
        }
    });
    var B = "iframe",
        N = function(e) {
            if (t.currTemplate[B]) {
                var n = t.currTemplate[B].find("iframe");
                n.length && (e || (n[0].src = "//about:blank"), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(B, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(B), b("BeforeChange", function(e, t, n) {
                    t !== n && (t === B ? N() : n === B && N(!0))
                }), b(s + "." + B, function() {
                    N()
                })
            },
            getIframe: function(n, r) {
                var i = n.src,
                    o = t.st.iframe;
                e.each(o.patterns, function() {
                    return i.indexOf(this.index) > -1 ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
                });
                var a = {};
                return o.srcAction && (a[o.srcAction] = i), t._parseMarkup(r, a, n), t.updateStatus("ready"), r
            }
        }
    });
    var F = function(e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : 0 > e ? n + e : e
        },
        z = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    i = ".mfp-gallery";
                return t.direction = !0, !(!n || !n.enabled) && (o += " mfp-gallery", b(c + i, function() {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), r.on("keydown" + i, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), b("UpdateStatus" + i, function(e, n) {
                    n.text && (n.text = z(n.text, t.currItem.index, t.items.length))
                }), b(u + i, function(e, r, i, o) {
                    var a = t.items.length;
                    i.counter = a > 1 ? z(n.tCounter, o.index, a) : ""
                }), b("BuildControls" + i, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var r = n.arrowMarkup,
                            i = t.arrowLeft = e(r.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(m),
                            o = t.arrowRight = e(r.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(m);
                        i.click(function() {
                            t.prev()
                        }), o.click(function() {
                            t.next()
                        }), t.container.append(i.add(o))
                    }
                }), b(d + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), void b(s + i, function() {
                    r.off(i), t.wrap.off("click" + i), t.arrowRight = t.arrowLeft = null
                }))
            },
            next: function() {
                t.direction = !0, t.index = F(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = F(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    r = Math.min(n[0], t.items.length),
                    i = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? i : r); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? r : i); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = F(n), !t.items[n].preloaded) {
                    var r = t.items[n];
                    r.parsed || (r = t.parseEl(n)), P("LazyLoad", r), "image" === r.type && (r.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        r.hasSize = !0
                    }).on("error.mfploader", function() {
                        r.hasSize = !0, r.loadError = !0, P("LazyLoadError", r)
                    }).attr("src", r.src)), r.preloaded = !0
                }
            }
        }
    });
    var H = "retina";
    e.magnificPopup.registerModule(H, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    (n = isNaN(n) ? n() : n) > 1 && (b("ImageHasSize." + H, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), b("ElementParse." + H, function(t, r) {
                        r.src = e.replaceSrc(r, n)
                    }))
                }
            }
        }
    }), S()
}),
function(e) {
    var t = "function" == typeof define && define.amd && (define(["jquery"], e) || !0),
        n = !t && "object" == typeof module && "object" == typeof module.exports && (module.exports = e);
    !t && !n && e()
}(function() {
    return jQuery.reel || function(e, t, n, r) {
        function i(e) {
            return C.instances.push(e[0]) && e
        }

        function o(e) {
            return (C.instances = C.instances.not(g(e.attr($t)))) && e
        }

        function a(e) {
            return C.instances.first().data(e)
        }

        function s(e) {
            return "<" + e + "/>"
        }

        function l(e) {
            return "." + (e || "")
        }

        function u(e) {
            return e.replace(jt, C.cdn)
        }

        function c(e) {
            return "url('" + b(e) + "')"
        }

        function d(e, t) {
            return typeof t == Dt ? t[e] : t
        }

        function p(e, t, n) {
            return U(e, W(t, n))
        }

        function f(e, t) {
            return V(e) * (t ? -1 : 1)
        }

        function h(e) {
            return e.touch || e.originalEvent.touches && e.originalEvent.touches[0] || e
        }

        function y(e) {
            return e.originalEvent
        }

        function m(e) {
            return e === r ? 0 : typeof e == Mt ? e : e + "px"
        }

        function g(e) {
            return "#" + e
        }

        function v(e, t, n) {
            for (; e.length < t;) e = n + e;
            return e
        }

        function T(e) {
            return v(e, 2, "0")
        }

        function b(e) {
            return encodeURI(decodeURI(e))
        }

        function w(e) {
            return C.re.array.exec(e) ? e.split(C.re.array) : e
        }

        function P(e) {
            return !e.parents(At).length
        }

        function k(t) {
            return typeof t == Mt ? t : e.each(t, function(e, n) {
                t[e] = n ? +n : r
            })
        }

        function S(e) {
            try {
                console.error("[ Reel ] " + e)
            } catch (e) {}
        }
        if (e) {
            var x = e && e().jquery.split(/\./);
            if (!x || +(T(x[0]) + T(x[1]) + T(x[2] || "")) < 10602) return S("Too old jQuery library. Please upgrade your jQuery to version 1.6.2 or higher");
            var C = e.reel = {
                    version: "1.3.0",
                    def: {
                        frame: 1,
                        frames: 36,
                        loops: !0,
                        clickfree: !1,
                        draggable: !0,
                        scrollable: !0,
                        steppable: !0,
                        throwable: !0,
                        wheelable: !0,
                        orientable: !1,
                        cw: !1,
                        revolution: r,
                        stitched: 0,
                        directional: !1,
                        row: 1,
                        rows: 0,
                        rowlock: !1,
                        framelock: !1,
                        orbital: 0,
                        vertical: !1,
                        inversed: !1,
                        footage: 6,
                        spacing: 0,
                        horizontal: !0,
                        suffix: "-reel",
                        image: r,
                        images: "",
                        path: "",
                        preload: "fidelity",
                        shy: !1,
                        speed: 0,
                        delay: 0,
                        timeout: 2,
                        duration: r,
                        rebound: .5,
                        entry: r,
                        opening: 0,
                        brake: .23,
                        velocity: 0,
                        tempo: 36,
                        laziness: 6,
                        cursor: r,
                        hint: "",
                        indicator: 0,
                        klass: "",
                        preloader: 2,
                        area: r,
                        attr: {},
                        annotations: r,
                        responsive: !1,
                        graph: r,
                        monitor: r
                    },
                    scan: function() {
                        return e(l($) + ":not(" + l(I) + " > " + l($) + ")").each(function(t, n) {
                            (n = (t = e(n)).data()).images = w(n.images);
                            var r = {};
                            e(l(L) + "[data-for=" + t.attr($t) + "]").each(function(t, n) {
                                (n = (t = e(n)).data()).x = k(w(n.x)), n.y = k(w(n.y));
                                var i = t.attr($t);
                                n.node = t.removeData(), r[i] = n
                            }), n.annotations = r, t.removeData().reel(n)
                        })
                    },
                    fn: {
                        reel: function() {
                            var n = arguments,
                                p = e(this),
                                v = p.data(),
                                T = n[0] || {},
                                w = n[1];
                            if ("object" != typeof T) return ":" == T.slice(0, 1) ? p.trigger(T.slice(1), w) : 1 == n.length ? v[T] : (w !== r && (C.normal[T] && (w = C.normal[T](w, v)), v[T] === r ? v[T] = w : v[T] !== w && p.trigger(T + "Change", [r, v[T] = w])), p);
                            var k = e.extend({}, C.def, T),
                                x = [];
                            return p.filter(It).unreel().filter(function() {
                                var t = e(this),
                                    n = k.attr,
                                    r = n.src || t.attr(We),
                                    i = n.width || t.attr(Pe) || t.width();
                                return t = n.height || t.attr(ot) || t.height(), r ? !(!i || !t) || S("Dimension(s) of the target image unknown") : S("`src` attribute missing on target image")
                            }).each(function() {
                                var n, p, v, T = e(this),
                                    w = function(e, t) {
                                        return T.reel(e, t) && S(e)
                                    },
                                    S = function(e) {
                                        return T.data(e)
                                    },
                                    Y = {
                                        setup: function() {
                                            if (!T.hasClass($) || !T.parent().hasClass(I)) {
                                                w(Ae, k);
                                                var t = {
                                                        src: T.attr(We),
                                                        width: T.attr(ot) || null,
                                                        height: T.attr(Pe) || null,
                                                        style: T.attr(Ze) || null,
                                                        class: T.attr(se) || null
                                                    },
                                                    n = T.attr(k.attr).attr(We),
                                                    r = w($t, T.attr($t) || T.attr($t, $ + "-" + +new Date).attr($t)),
                                                    o = e.extend({}, T.data()),
                                                    a = w(Ce, k.images || []),
                                                    u = w(Ve, k.stitched),
                                                    c = !a.length || u;
                                                c = w(Me, k.responsive && (!!A || !c));
                                                var p = w(nt, {}),
                                                    h = k.loops,
                                                    y = k.orbital,
                                                    v = k.revolution,
                                                    b = k.rows,
                                                    P = w(ge, W(k.footage, k.frames));
                                                w(Re, k.spacing);
                                                var _ = w(ot, +T.attr(ot) || T.width()),
                                                    Q = w(Pe, +T.attr(Pe) || T.height()),
                                                    O = w(He, k.shy),
                                                    D = w(we, y && P || b <= 1 && a.length || k.frames),
                                                    M = b > 1 || y;
                                                w(Le, d("x", v) || u / 2 || 2 * _), w(Be, M ? d("y", v) || (b > 3 ? Q : Q / (5 - b)) : 0), b = u ? 1 : q(D / P), w(Ge, u - (h ? 0 : _)), w(Xe, 0), r = g(r + k.suffix), h = (h = T.attr(se)) ? h + kt : Pt, h = e(s(Yt), {
                                                    id: r.substr(1),
                                                    class: h + kt + I + kt + F + "0"
                                                }), h = T.wrap(h.addClass(k.klass)).addClass($), x.push(i(h)[0]), h = h.parent().bind(Y.instance), w(xe, a.length ? Pt : k.image || n.replace(C.re.image, "$1" + k.suffix + ".$2")), w(ie, e(s(Yt), {
                                                    class: E
                                                }).appendTo("body")), w(Z, e()), w(oe, []), w(Te, null), w(ve, null), w(Ne, k.row), w(tt, 0), w(ze, b), w(Fe, k.rowlock), w(be, k.framelock), w(he, w(ye, w(me, 0))), w(ne, 1 / D), w(Ue, r), w(te, w(qe, k.speed) < 0), w(Ye, !1), w(rt, 0), w(it, k.vertical), w(Ie, 0), w(fe, f(1, !k.cw && !u)), w(ce, {}), w(ue, !1), w(de, w(pe, 0)), w(je, w(ke, 0)), w(Oe, !1), w(De, !1), w(_e, !1), w(re, k.brake), w(ae, !!y), w(Je, k.tempo / (C.lazy ? k.laziness : 1)), w(Qe, -1), w(et, -1), w(K, k.annotations || h.unbind(l(K)) && {}), w(Ee, 1), w(ee, {
                                                    attr: t,
                                                    data: o
                                                }), k.steppable || h.unbind("up.steppable"), k.indicator || h.unbind(".indicator"), Zt(Pt, {
                                                    overflow: Se,
                                                    position: "relative"
                                                }), c || Zt(Pt, {
                                                    width: _,
                                                    height: Q
                                                }), c && e.each(Lt, function(e, t) {
                                                    p[t] = S(t)
                                                }), Zt(St + kt + l($), {
                                                    display: Ct
                                                }), Zt(l(E), {
                                                    position: "fixed",
                                                    left: m(-100),
                                                    top: m(-100)
                                                }, !0), Zt(l(E) + kt + It, {
                                                    position: xt,
                                                    width: 10,
                                                    height: 10
                                                }, !0), j.bind(Y.pool), T.trigger(O ? "prepare" : "setup")
                                            }
                                        },
                                        instance: {
                                            teardown: function() {
                                                var n = T.data(ee);
                                                T.parent().unbind(Y.instance), S(He) ? T.parent().unbind(le, jt) : S(Ze).remove() && S(Z).unbind(at), S(ie).empty(), clearTimeout(p), clearTimeout(v), e(t).unbind(wt, sn), e(t).unbind(at), j.unbind(Y.pool), pn.unbind(st), T.siblings().unbind(at).remove(), rn(), T.removeAttr("onloaded"), o(T.unbind(at).removeData().unwrap().attr(n.attr).data(n.data)), T.attr(Ze) == Pt && T.removeAttr(Ze)
                                            },
                                            setup: function() {
                                                function n(e) {
                                                    return T.trigger("down", [h(e).clientX, h(e).clientY, e]) && e.give
                                                }
                                                var i = T.parent().append(Gt()),
                                                    o = w(Z, e(k.area || i)),
                                                    a = k.rows > 1,
                                                    c = k.cursor,
                                                    d = c == _t ? zt : c || Ft;
                                                c = c == _t ? Ht + kt + "!important" : r, Zt(kt + l($), {
                                                    MozUserSelect: Ot,
                                                    WebkitUserSelect: Ot,
                                                    MozTransform: "translateZ(0)"
                                                }), T.unbind(le, jt), o.bind(Tt, n).bind(k.clickfree ? dt : ct, n).bind(k.wheelable ? yt : null, function(e, t) {
                                                    return !t || T.trigger("wheel", [t, e]) && e.give
                                                }).bind(ut, function() {
                                                    return !1
                                                }), Zt(Pt, {
                                                    cursor: u(d)
                                                }), Zt(l(N), {
                                                    cursor: "wait"
                                                }), Zt(l(B) + St + l(B) + " *", {
                                                    cursor: u(c || d)
                                                }, !0), S(Me) && (Zt(kt + l($), {
                                                    width: "100%",
                                                    height: J
                                                }), e(t).bind(wt, sn)), k.hint && o.attr("title", k.hint), k.indicator && i.append(Kt("x")), a && k.indicator && i.append(Kt("y")), k.monitor && i.append(Xt = e(s(Yt), {
                                                    class: M
                                                })) && Zt(kt + l(M), {
                                                    position: xt,
                                                    left: 0,
                                                    top: 0
                                                })
                                            },
                                            preload: function() {
                                                function t() {
                                                    var e = l.children(":not([src]):first");
                                                    return e.attr(We, e.data(We))
                                                }
                                                var n = T.parent(),
                                                    r = S(Ce),
                                                    i = !r.length,
                                                    o = C.preload[k.preload] || C.preload[C.def.preload];
                                                r = i ? [S(xe)] : o(r.slice(0), k, S), w(Ie, i ? .5 : 0);
                                                var a = 0,
                                                    l = S(ie).empty();
                                                for (i = [], n.addClass(N), w(Ze, S(Ze) || e("<" + Ze + ' type="text/css">' + Zt.rules.join("\n") + "</" + Ze + ">").prependTo(Qt)), w(Ye, !0), T.trigger("stop"), k.responsive && ln(), T.trigger("resize", !0); r.length;) o = C.substitute(k.path + r.shift(), S), e(s(It)).data(We, o).appendTo(l).bind("load error abort", function(e) {
                                                    return "load" != e.type && T.trigger(e.type), !P(n) && T.trigger("preloaded") && t() && !1
                                                }), i.push(o);
                                                setTimeout(function() {
                                                    for (; ++a < C.concurrent_requests;) t()
                                                }, 0), w(oe, i), w(He, !1)
                                            },
                                            preloaded: function() {
                                                var e = S(Ce).length || 1,
                                                    t = w(Ie, W(S(Ie) + 1, e));
                                                1 === t && T.trigger("frameChange", [r, S(Te)]), t === e && (T.parent().removeClass(N), T.trigger("loaded"))
                                            },
                                            loaded: function() {
                                                S(Ce).length > 1 || T.css({
                                                    backgroundImage: c(C.substitute(k.path + S(xe), S))
                                                }).attr({
                                                    src: u(Nt)
                                                }), S(Ve) && T.attr({
                                                    src: u(Nt)
                                                }), S(De) || w(rt, k.velocity || 0), w(Ye, !1), _ = !0
                                            },
                                            prepare: function() {
                                                T.css("display", Ct).parent().one(le, jt)
                                            },
                                            opening: function() {
                                                if (!k.opening) return T.trigger("openingDone");
                                                w(_e, !0), w(Ke, !S(qe));
                                                var e = k.entry || k.speed,
                                                    t = S(ve),
                                                    n = k.opening;
                                                w(ve, t - e * n), w(Qe, q(n * a(Je)))
                                            },
                                            openingDone: function() {
                                                w($e, !1), w(_e, !1);
                                                var n = mt + l(_e);
                                                j.unbind(n, Y.pool[n]), k.orientable && e(t).bind(lt, function(e) {
                                                    return T.trigger("orient", [y(e).alpha, y(e).beta, y(e).gamma, e]) && e.give
                                                }), k.delay > 0 ? p = setTimeout(function() {
                                                    T.trigger("play")
                                                }, 1e3 * k.delay) : T.trigger("play")
                                            },
                                            play: function(e, t) {
                                                t = t ? w(qe, t) : S(qe) * f(1, S(te)), (e = k.duration) && w(et, q(e * a(Je))), w(te, t < 0), t = w($e, !!t), w(Ke, !t), Bt()
                                            },
                                            reach: function(e, t, n) {
                                                if (t != S(Te)) {
                                                    e = S(we), w(Ne, q(t / e));
                                                    var r = w(he, S(Te));
                                                    t = w(ye, t), t = w(me, C.math.distance(r, t, e)), n = V(n || S(qe)) * f(1, t < 0), T.trigger("play", n)
                                                }
                                            },
                                            pause: function() {
                                                qt()
                                            },
                                            stop: function() {
                                                var e = w(Ke, !0);
                                                w($e, !e)
                                            },
                                            down: function(t, n, i, o) {
                                                function a(e) {
                                                    return T.trigger("up", [e]) && e.give
                                                }!k.clickfree && o && o.button !== r && o.button != Rt || k.draggable && (w(ue, S(Te)), t = k.clickfree, w(rt, 0), o = t ? S(Z) : pn, tn = un(S(Le), n, i), qt(), rn(), Wt = 0, e(At, pn).addClass(B), o.bind(bt + kt + ft, function(e) {
                                                    return T.trigger("pan", [h(e).clientX, h(e).clientY, e]) && e.give
                                                }).bind(vt + kt + gt, a).bind(t ? pt : ht, a))
                                            },
                                            up: function() {
                                                w(ue, !1), w(Oe, !1);
                                                var t = k.throwable,
                                                    n = V(on[0] + on[1]) / 60;
                                                Et = w(rt, t ? !0 === t ? n : W(t, n) : 0) ? 1 : 0, qt(), rn(), e(At, pn).removeClass(B), (k.clickfree ? S(Z) : pn).unbind(st)
                                            },
                                            pan: function(e, t, n, r) {
                                                if (k.draggable && cn) {
                                                    cn = !1, qt(), e = k.rows;
                                                    var i = k.orbital,
                                                        o = !S(Oe) && e <= 1 && !i && k.scrollable,
                                                        a = {
                                                            x: t - tn.x,
                                                            y: n - tn.y
                                                        },
                                                        s = {
                                                            x: V(a.x),
                                                            y: V(a.y)
                                                        };
                                                    if (r && o && s.x < s.y) return r.give = !0;
                                                    if (s.x > 0 || s.y > 0) {
                                                        if (r && (r.give = !1), Wt = U(s.x, s.y), tn = {
                                                                x: t,
                                                                y: n
                                                            }, r = S(Le), o = S(ce), s = S(it), !S(be)) {
                                                            var l = w(ve, an(s ? n - o.y : t - o.x, S(de), r, S(je), S(ke), S(fe), s ? n - o.y : t - o.x));
                                                            w(Oe, S(Oe) || S(Te) != S(ue)), (a = nn(s ? a.y : a.x || 0)) && w(te, a < 0)
                                                        }
                                                        i && S(ae) && (w(it, V(n - o.y) > V(t - o.x)), o = un(r, t, n)), e > 1 && !S(Fe) && (e = S(Be), a = -(i = S(pe)) * e, w(tt, C.math.envelope(n - o.y, i, e, a, a + e, -1))), !(l % 1) && !k.loops && un(r, t, n)
                                                    }
                                                }
                                            },
                                            wheel: function(e, t, n) {
                                                t && (Ut = !0, e = f(e = q(z.sqrt(V(t)) / 2), t > 0), t = .0833 * S(Le), un(t), e && w(te, e < 0), w(rt, 0), w(ve, an(e, S(de), t, S(je), S(ke), S(fe))), n && n.preventDefault(), n && (n.give = !1), qt(), T.trigger("up", [n]))
                                            },
                                            orient: function(e, t) {
                                                cn && !n && (Vt = !0, e = t / 360, fraction = w(ve, +(k.stitched || k.cw ? 1 - e : e).toFixed(2)), cn = !1)
                                            },
                                            fractionChange: function(e, t, n) {
                                                t === r && (e = 1 + R(n / S(ne)), t = k.rows > 1, n = k.orbital, w(ae, !!n && (e <= n || e >= S(ge) - n + 2)), t && (e += (S(Ne) - 1) * S(we)), w(Te, e))
                                            },
                                            tierChange: function(e, t, n) {
                                                t === r && (e = w(Ne, H(G(n, 1, k.rows))), t = S(we), n = S(Te) % t || t, w(Te, n + e * t - t))
                                            },
                                            rowChange: function(e, t, n) {
                                                t === r && dn(tt, r, n, k.rows)
                                            },
                                            frameChange: function(e, t, n) {
                                                if (t === r) {
                                                    this.className = this.className.replace(C.re.frame_klass, F + n), e = S(we), t = k.rows;
                                                    var i = k.path,
                                                        o = n % e || e,
                                                        a = ((n - o) / e + 1 - 1) / (t - 1),
                                                        s = S(Ne);
                                                    t ? dn(tt, a, s, t) : S(tt);
                                                    var l = dn(ve, r, o, e),
                                                        u = S(ge);
                                                    k.orbital && S(it) && (n = k.inversed ? u + 1 - n : n, n += u);
                                                    var d = S(Ve);
                                                    if (!(e = S(Ce)).length || d) {
                                                        o = S(Re);
                                                        var p = S(ot);
                                                        a = S(Pe), d ? (n = w(Xe, H(G(l, 0, S(Ge))) % d), t = t <= 1 ? 0 : (a + o) * (t - s), n = [m(-n), m(-t)], e = e.length > 1 && e[s - 1], t = C.substitute(i + e, S), e && T.css("backgroundImage").search(t) < 0 && T.css({
                                                            backgroundImage: c(t)
                                                        })) : (i = k.horizontal, s = (s = n % u - 1) < 0 ? u - 1 : s, n = R((n - .1) / u), n += t > 1 ? 0 : S(te) ? 0 : k.directional ? S(ze) : 0, n *= (i ? a : p) + o, t = s * ((i ? p : a) + o), n = e.length ? [0, 0] : i ? [m(-t), m(-n)] : [m(-n), m(-t)]), T.css({
                                                            backgroundPosition: n.join(kt)
                                                        })
                                                    } else S(Me) && ln(), S(Ie) && T.attr({
                                                        src: b(C.substitute(i + e[n - 1], S))
                                                    })
                                                }
                                            },
                                            "frameChange.reach": function(e, t, n) {
                                                S(ye) && t === r && (e = C.math.distance(S(he), n, S(we)), V(e) >= V(S(me)) && (w(Te, w(ye)), w(ye, w(me, w(he, 0))), T.trigger("stop")))
                                            },
                                            "imageChange imagesChange": function() {
                                                T.trigger("preload")
                                            },
                                            "fractionChange.indicator": function(e, t, n) {
                                                if (k.indicator && t === r) {
                                                    e = k.indicator;
                                                    var i = k.orbital;
                                                    t = S(i && S(it) ? Pe : ot), i = i ? S(ge) : k.images.length || S(we), i = q(t / i), n = H(G(n, 0, t -= i)), n = !k.cw || S(Ve) ? n : t - n, Kt.$x.css(S(it) ? {
                                                        left: 0,
                                                        top: m(n),
                                                        bottom: J,
                                                        width: e,
                                                        height: i
                                                    } : {
                                                        bottom: 0,
                                                        left: m(n),
                                                        top: J,
                                                        width: i,
                                                        height: e
                                                    })
                                                }
                                            },
                                            "tierChange.indicator": function(e, t, n) {
                                                if (k.rows > 1 && k.indicator && t === r) {
                                                    var i = S(Pe);
                                                    e = k.indicator, t = q(i / k.rows), n = H(n * (i -= t)), Kt.$y.css({
                                                        left: 0,
                                                        top: n,
                                                        width: e,
                                                        height: t
                                                    })
                                                }
                                            },
                                            "setup.annotations": function() {
                                                var t = T.parent();
                                                e.each(S(K), function(n, r) {
                                                    var i = typeof r.node == Mt ? e(r.node) : r.node || {};
                                                    i = (i = i.jquery ? i : e(s(Yt), i)).attr({
                                                        id: n
                                                    }).addClass(L);
                                                    var o = r.image ? e(s(It), r.image) : e(),
                                                        a = r.link ? e(s("a"), r.link).click(function() {
                                                            T.trigger("up.annotations", {
                                                                target: a
                                                            })
                                                        }) : e();
                                                    Zt(g(n), {
                                                        display: Ot,
                                                        position: xt
                                                    }, !0), r.image || r.link && i.append(a), r.link || r.image && i.append(o), r.link && r.image && i.append(a.append(o)), i.appendTo(t)
                                                })
                                            },
                                            "prepare.annotations": function() {
                                                e.each(S(K), function(t) {
                                                    e(g(t)).hide()
                                                })
                                            },
                                            "frameChange.annotations": function(t, n) {
                                                if (S(Ie) && n === r) {
                                                    var i = S(ot),
                                                        o = S(Ve),
                                                        a = S(Xe);
                                                    e.each(S(K), function(t, n) {
                                                        t = e(g(t));
                                                        var s = n.start || 1,
                                                            l = n.end,
                                                            u = u || S(Te),
                                                            c = u - 1,
                                                            d = !!n.at && "+" == n.at[c];
                                                        c = n.at ? c : c - s + 1, u = typeof n.x != Dt ? n.x : n.x[c];
                                                        var p = typeof n.y != Dt ? n.y : n.y[c];
                                                        n = u !== r && p !== r && (n.at ? d : c >= 0 && (!l || c <= l - s)), o && (s = u > o - i && a >= 0 && a < i, u = u < i && a > o - i ? u + o : u, u = s ? u - o : u, u -= a), S(Me) && (s = S(Ee), u = u && u * s, p = p && p * s), u = {
                                                            display: n ? Ct : Ot,
                                                            left: m(u),
                                                            top: m(p)
                                                        }, t.css(u)
                                                    })
                                                }
                                            },
                                            "up.annotations": function(t, n) {
                                                Wt > 10 || Ut || ((t = e(n.target)).is("a") ? t : t.parents("a")).attr("href") && (Wt = 10)
                                            },
                                            "up.steppable": function() {
                                                Wt || Ut || T.trigger(S(ce).x - T.offset().left > .5 * S(ot) ? "stepRight" : "stepLeft")
                                            },
                                            "stepLeft stepRight": function() {
                                                qt()
                                            },
                                            stepLeft: function() {
                                                w(te, !1), w(ve, S(ve) - S(ne) * S(fe))
                                            },
                                            stepRight: function() {
                                                w(te, !0), w(ve, S(ve) + S(ne) * S(fe))
                                            },
                                            stepUp: function() {
                                                w(Ne, S(Ne) - 1)
                                            },
                                            stepDown: function() {
                                                w(Ne, S(Ne) + 1)
                                            },
                                            resize: function(e, t) {
                                                if (!S(Ye) || t) {
                                                    var n = S(Ve),
                                                        i = S(Re);
                                                    e = S(Pe);
                                                    var o = !S(Ce).length || n,
                                                        a = k.rows || 1;
                                                    n = S(Ce).length ? n ? m(n) + kt + m(e) : r : n && m(n) + kt + m((e + i) * a - i) || m((S(ot) + i) * S(ge) - i) + kt + m((e + i) * S(ze) * a * (k.directional ? 2 : 1) - i), T.css({
                                                        height: o ? m(e) : null,
                                                        backgroundSize: n || null
                                                    }), t || T.trigger("imagesChange")
                                                }
                                            },
                                            "setup.fu": function() {
                                                w(Te, k.frame + (S(Ne) - 1) * S(we)), T.trigger("preload")
                                            },
                                            "wheel.fu": function() {
                                                Ut = !1
                                            },
                                            "clean.fu": function() {
                                                T.trigger("teardown")
                                            },
                                            "loaded.fu": function() {
                                                T.trigger("opening")
                                            }
                                        },
                                        pool: {
                                            "tick.reel.preload": function() {
                                                if ((_ || S(Ye)) && !S(He)) {
                                                    var e = S(ot),
                                                        t = X(Gt.$.css(ot)),
                                                        n = S(Ce).length || 1,
                                                        r = H(1 / n * S(Ie) * e);
                                                    Gt.$.css({
                                                        width: t + (r - t) / 3 + 1
                                                    }), S(Ie) === n && t > e - 1 && (_ = !1, Gt.$.fadeOut(300, function() {
                                                        Gt.$.css({
                                                            opacity: 1,
                                                            width: 0
                                                        })
                                                    }))
                                                }
                                            },
                                            "tick.reel": function(e) {
                                                if (!S(He)) {
                                                    var t = S(rt),
                                                        r = a(Je),
                                                        i = k.monitor;
                                                    if (C.intense || !Jt()) {
                                                        if (Et && (t -= S(re) / r * Et, t = w(rt, t > .1 ? t : Et = n = 0)), i && Xt.text(S(i)), t && Et++, n && n++, nn(0), cn = !0, n && !t) return Q(e);
                                                        if (S(ue)) return Q(e, qt());
                                                        S(Qe) > 0 || (!k.loops && k.rebound && (n || S(ve) % 1 ? en = 0 : en++, en >= 1e3 * k.rebound / r && w(te, !S(te))), e = S(fe) * f(1, S(te)), r = S(et), t = (S($e) && !Vt && r ? V(S(qe)) + t : t) / a(Je), w(ve, S(ve) - t * e), !(r = k.duration ? r > 0 && w(et, r - 1) : r) && S($e) && T.trigger("stop"))
                                                    }
                                                }
                                            },
                                            "tick.reel.opening": function() {
                                                if (S(_e)) {
                                                    var e = (k.entry || k.speed) / a(Je) * (k.cw ? -1 : 1),
                                                        t = w(Qe, S(Qe) - 1);
                                                    w(ve, S(ve) + e), t || T.trigger("openingDone")
                                                }
                                            }
                                        }
                                    },
                                    _ = !1,
                                    Q = function(e, t) {
                                        return e.stopImmediatePropagation() || t
                                    },
                                    jt = function() {
                                        T.trigger("setup")
                                    },
                                    Et = 0,
                                    Bt = function() {
                                        return n = 0
                                    },
                                    qt = function() {
                                        return clearTimeout(p), j.unbind(mt + l(_e), Y.pool[mt + l(_e)]), w(Qe, 0), w(De, !0), n = -k.timeout * a(Je)
                                    },
                                    Wt = 0,
                                    Ut = !1,
                                    Vt = !1,
                                    Xt = e(),
                                    Gt = function() {
                                        return Zt(kt + l(D), {
                                            position: xt,
                                            left: 0,
                                            bottom: 0,
                                            height: k.preloader,
                                            overflow: Se,
                                            backgroundColor: "#000"
                                        }), Gt.$ = e(s(Yt), {
                                            class: D
                                        })
                                    },
                                    Kt = function(t) {
                                        return Zt(kt + l(O) + l(t), {
                                            position: xt,
                                            width: 0,
                                            height: 0,
                                            overflow: Se,
                                            backgroundColor: "#000"
                                        }), Kt["$" + t] = e(s(Yt), {
                                            class: O + kt + t
                                        })
                                    },
                                    Zt = function(t, n, r) {
                                        return r = r ? Pt : S(Ue), t = t.replace(/^/, r).replace(St, St + r), Zt.rules.push(t + function(t) {
                                            var n = [];
                                            return e.each(t, function(e, t) {
                                                n.push(e.replace(/([A-Z])/g, "-$1").toLowerCase() + ":" + m(t) + ";")
                                            }), "{" + n.join(Pt) + "}"
                                        }(n)) && n
                                    },
                                    Jt = function() {
                                        var n = S(Pe),
                                            r = S(ot),
                                            i = T[0].getBoundingClientRect();
                                        return i.top < -n || i.left < -r || i.right > r + e(t).width() || i.bottom > n + e(t).height()
                                    },
                                    en = 0,
                                    tn = {
                                        x: 0,
                                        y: 0
                                    },
                                    nn = function(e) {
                                        return on.push(e) && on.shift() && e
                                    },
                                    rn = function() {
                                        return on = [0, 0]
                                    },
                                    on = rn(),
                                    an = k.graph || C.math[k.loops ? "hatch" : "envelope"],
                                    sn = function() {
                                        clearTimeout(v), v = setTimeout(ln, C.resize_gauge)
                                    },
                                    ln = function() {
                                        if (T.width() != S(ot)) {
                                            var t = S(nt),
                                                n = w(Ee, T.width() / t.width);
                                            e.each(t, function(e, t) {
                                                w(e, H(t * n))
                                            }), T.trigger("resize")
                                        }
                                    },
                                    un = function(e, t, n) {
                                        var i = w(de, S(ve));
                                        w(pe, S(tt));
                                        var o = k.loops;
                                        return w(je, o ? 0 : -i * e), w(ke, o ? e : e - i * e), t !== r && w(ce, {
                                            x: t,
                                            y: n
                                        }) || r
                                    },
                                    cn = !0,
                                    dn = function(e, t, n, i) {
                                        if (i) {
                                            var o = S(e) || 0;
                                            return n = t !== r ? t : (n - 1) / (i - 1), n = e != ve ? n : W(n, .9999), t = +V(o - n).toFixed(8) >= +(1 / (i - 1)).toFixed(8) ? w(e, n) : t || o
                                        }
                                    },
                                    pn = j;
                                try {
                                    j[0] != top.document && (pn = j.add(top.document))
                                } catch (e) {}
                                top === self ? e() : function(t) {
                                    e("iframe", pn.last()).each(function() {
                                        try {
                                            if (e(this).contents().find(Qt).html() == e(Qt).html()) return (t = e(this)) && !1
                                        } catch (e) {}
                                    })
                                }(), Zt.rules = [], Y.setup()
                            }), _ = _ || function e() {
                                var t = +new Date,
                                    n = a(Je);
                                return n ? (j.trigger(mt), C.cost = (+new Date + C.cost - t) / 2, _ = setTimeout(e, U(4, 1e3 / n - C.cost))) : _ = null
                            }(), e(x)
                        },
                        unreel: function() {
                            return this.trigger("teardown")
                        }
                    },
                    re: {
                        image: /^(.*)\.(jpg|jpeg|png|gif)\??.*$/i,
                        ua: [/(msie|opera|firefox|chrome|safari)[ \/:]([\d.]+)/i, /(webkit)\/([\d.]+)/i, /(mozilla)\/([\d.]+)/i],
                        array: / *, */,
                        lazy_agent: /\(iphone|ipod|android|fennec|blackberry/i,
                        frame_klass: /frame-\d+/,
                        substitution: /(@([A-Z]))/g,
                        no_match: /^(undefined|)$/,
                        sequence: /(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/
                    },
                    cdn: "http://code.vostrel.net/",
                    math: {
                        envelope: function(e, t, n, r, i, o) {
                            return t + p(r, i, -e * o) / n
                        },
                        hatch: function(e, t, n, r, i, o) {
                            return e = (e < r ? i : 0) + e % i, (e = t + -e * o / n) - R(e)
                        },
                        interpolate: function(e, t, n) {
                            return t + e * (n - t)
                        },
                        distance: function(e, t, n) {
                            var r = n / 2;
                            return e = t - e, e < -r ? e + n : e > r ? e - n : e
                        }
                    },
                    preload: {
                        fidelity: function(e, t, n) {
                            function r(e, n, r) {
                                function i(e) {
                                    for (; !(e >= 1 && e <= u);) e += e < 1 ? +u : -u;
                                    return s[r + e] || (s[r + e] = !!o.push(e))
                                }
                                if (!e.length) return [];
                                var o = [],
                                    a = 4 * n,
                                    l = t.frame,
                                    u = e.length;
                                n = !0;
                                for (var c = u / a, d = 0; d < a; d++) i(l + H(d * c));
                                for (; c > 1;)
                                    for (d = 0, a = o.length, c /= 2, n = !n; d < a; d++) i(o[d] + (n ? 1 : -1) * H(c));
                                for (d = 0; d <= u; d++) i(d);
                                for (d = 0; d < o.length; d++) o[d] = e[o[d] - 1];
                                return o
                            }
                            var i = t.orbital,
                                o = i ? 2 : t.rows || 1,
                                a = n(i ? ge : we);
                            n = (t.row - 1) * a, i = [].concat(e);
                            var s = new Array(e.length + 1);
                            return e = o < 2 ? [] : i.slice(n, n + a), r(e, 1, n).concat(r(i, o, 0))
                        },
                        linear: function(e) {
                            return e
                        }
                    },
                    substitute: function(e, t) {
                        return e.replace(C.re.substitution, function(e, n, r) {
                            return "function" == typeof C.substitutes[r] ? C.substitutes[r](t) : Bt[r] ? t(Bt[r]) : n
                        })
                    },
                    substitutes: {
                        T: function() {
                            return +new Date
                        }
                    },
                    normal: {
                        fraction: function(e, t) {
                            return null === e ? e : t[Ae].loops ? e - R(e) : p(0, 1, e)
                        },
                        tier: function(e) {
                            return null === e ? e : p(0, 1, e)
                        },
                        row: function(e, t) {
                            return null === e ? e : H(p(1, t[Ae].rows, e))
                        },
                        frame: function(e, t) {
                            if (null === e) return e;
                            var n = t[Ae];
                            return t = t[we] * (n.orbital ? 2 : n.rows || 1), e = H(n.loops ? e % t || t : p(1, t, e)), e < 0 ? e + t : e
                        },
                        images: function(e, t) {
                            var n = C.re.sequence.exec(e);
                            return n ? C.sequence(n, t[Ae]) : e
                        }
                    },
                    sequence: function(e, t) {
                        if (e.length <= 1) return t.images;
                        var n = [],
                            r = t.orbital,
                            i = e[1],
                            o = e[2],
                            a = e[4];
                        a = C.re.no_match.test(a + Pt) ? 1 : +a;
                        var s = r ? 2 : t.rows || 1;
                        for (t = r ? t.footage : t.stitched ? 1 : t.frames, s = +(e[5] || s * t) - a, e = +e[7] || 1, t = 0; t <= s;) n.push(i.replace(o, v(a + t + Pt, o.length, "0"))), t += e;
                        return n
                    },
                    instances: e(),
                    leader: a,
                    resize_gauge: 300,
                    concurrent_requests: 4,
                    cost: 0
                },
                j = e(n);
            n = navigator.userAgent;
            var Y = C.re.ua[0].exec(n) || C.re.ua[1].exec(n) || C.re.ua[2].exec(n);
            x = +Y[2].split(".").slice(0, 2).join(".");
            var _, Q = !((Y = "MSIE" == Y[1]) && x < 8),
                A = !(Y && x < 9),
                $ = "reel",
                I = $ + "-overlay",
                E = $ + "-cache",
                O = $ + "-indicator",
                D = $ + "-preloader",
                M = $ + "-monitor",
                L = $ + "-annotation",
                B = $ + "-panning",
                N = $ + "-loading",
                F = "frame-",
                z = Math,
                H = z.round,
                R = z.floor,
                q = z.ceil,
                W = z.min,
                U = z.max,
                V = z.abs,
                X = parseInt,
                G = C.math.interpolate,
                K = "annotations",
                Z = "area",
                J = "auto",
                ee = "backup",
                te = "backwards",
                ne = "bit",
                re = "brake",
                ie = "cache",
                oe = ie + "d",
                ae = "center",
                se = "class",
                le = "click",
                ue = le + "ed",
                ce = ue + "_location",
                de = ue + "_on",
                pe = ue + "_tier",
                fe = "cwish",
                he = "departure",
                ye = "destination",
                me = "distance",
                ge = "footage",
                ve = "fraction",
                Te = "frame",
                be = "framelock",
                we = "frames",
                Pe = "height",
                ke = "hi",
                Se = "hidden",
                xe = "image",
                Ce = "images",
                je = "lo",
                Ye = "loading",
                _e = "opening",
                Qe = _e + "_ticks",
                Ae = "options",
                $e = "playing",
                Ie = "preloaded",
                Ee = "ratio",
                Oe = "reeling",
                De = "reeled",
                Me = "responsive",
                Le = "revolution",
                Be = "revolution_y",
                Ne = "row",
                Fe = "rowlock",
                ze = "rows",
                He = "shy",
                Re = "spacing",
                qe = "speed",
                We = "src",
                Ue = "stage",
                Ve = "stitched",
                Xe = Ve + "_shift",
                Ge = Ve + "_travel",
                Ke = "stopped",
                Ze = "style",
                Je = "tempo",
                et = "ticks",
                tt = "tier",
                nt = "truescale",
                rt = "velocity",
                it = "vertical",
                ot = "width",
                at = l($),
                st = l("pan") + at,
                lt = "deviceorientation" + at,
                ut = "dragstart" + at,
                ct = "mousedown" + at,
                dt = "mouseenter" + at,
                pt = "mouseleave" + st,
                ft = "mousemove" + st,
                ht = "mouseup" + st,
                yt = "mousewheel" + at,
                mt = "tick" + at,
                gt = "touchcancel" + st,
                vt = "touchend" + st,
                Tt = "touchstart" + at,
                bt = "touchmove" + st,
                wt = "resize" + at,
                Pt = "",
                kt = " ",
                St = ",",
                xt = "absolute",
                Ct = "block",
                jt = "@CDN@",
                Yt = "div",
                _t = "hand",
                Qt = "head",
                At = "html",
                $t = "id",
                It = "img",
                Et = "jquery." + $,
                Ot = "none",
                Dt = "object",
                Mt = "string",
                Lt = [ot, Pe, Re, Le, Be, Ve, Xe, Ge],
                Bt = {
                    W: ot,
                    H: Pe
                },
                Nt = Q ? "data:image/gif;base64,R0lGODlh" + "CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7" : jt + "blank.gif",
                Ft = c(jt + Et + ".cur") + St + "move",
                zt = c(jt + Et + "-drag.cur") + St + "move",
                Ht = c(jt + Et + "-drag-down.cur") + St + "move";
            C.lazy = C.re.lazy_agent.test(n);
            var Rt = Y && x < 9 ? 1 : 0,
                qt = e.cleanData;
            return e.cleanData = function(t) {
                return e(t).each(function() {
                    e(this).triggerHandler("clean")
                }), qt.apply(this, arguments)
            }, e.extend(e.fn, C.fn) && e(C.scan), C
        }
    }(jQuery, window, document)
}), $(function() {
    $("#video").YTPlayer(), $("#player").YTPlayer(), $(".intro__play--2").on("click", function() {
        $(".intro__content").animate({
            left: "-50vw"
        }, 1500), $(".intro__half").animate({
            left: "-100vw"
        }, 1400), $(this).fadeOut(), $("#video").YTPStop().YTPPlay().YTPUnmute(), $(".intro__close").fadeIn(), $(this).removeClass("d-lg-block")
    }), $(".intro__close").click(function() {
        $(".intro__content").animate({
            left: "0vw"
        }, 1500), $(".intro__half").animate({
            left: "-10vw"
        }, 1400), $(".intro__play--2").addClass("d-lg-block"), $("#video").YTPMute(), $(this).fadeOut()
    }), $(".mydropdown").each(function() {
        var e = $(this);
        $(this).parent().hover(function(t) {
            t.stopPropagation(), e.toggle()
        }, function(t) {
            t.stopPropagation(), e.toggle()
        })
    }), $(window).click(function() {
        $(".mydropdown").hide()
    }), $(".button--arrowtop").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, "slow"), !1
    }), $(".header__menu").click(function() {
        $(".navtop").hasClass("d-block") ? ($(".navtop").removeClass("d-block"), $(".button--arrow").removeClass("d-block").addClass("d-none"), $(".button--iconcart").addClass("d-block").removeClass("d-none"), $(this).removeClass("header__menu--active")) : ($(".button--iconcart").removeClass("d-block").addClass("d-none"), $(".button--arrow").addClass("d-block").removeClass("d-none"), $(".navtop").addClass("d-block"), $(this).addClass("header__menu--active"))
    }), $(".magnificPopup").magnificPopup({
        type: "image",
        fixedContentPos: !1,
        closeOnContentClick: !0,
        image: {
            verticalFit: !1
        },
        gallery: {
            enabled: !0
        }
    }), $(".magnificYoutube").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), $(".collapsor__item").length > 0 && $(".collapsor__item").each(function() {
        var e = $(this);
        e.find(".collapsor__header").click(function() {
            e.siblings().find(".collapsor__body").slideUp(function() {
                $(this).parents(".collapsor__item").find(".collapsor__header").removeClass("collapsor__header--active"), $(this).removeClass("collapsor__body--active")
            }), $(this).toggleClass("collapsor__header--active"), e.find(".collapsor__body").slideToggle(function() {
                $(this).toggleClass("collapsor__body--active")
            })
        })
    }), $(window).resize(function() {
        $(window).width() < 992 && ($(".navtop__link").unbind("click"), $(".navtop__link").on("click", function(e) {
            var t = $(this);
            if ($(this).parent().find(".navtop__submenu").length > 0) return $(this).parent().find(".navtop__submenu").hasClass("active") ? ($(this).parent().find(".navtop__submenu").removeClass("active").hide(), t.removeClass("navtop__link--active")) : ($(this).parent().find(".navtop__submenu").addClass("active").show(), t.addClass("navtop__link--active")), !1
        }));
        var e = null;
        if ($(window).scroll(function() {
                if ($("#playerArea").length > 0 && $(window).width() > 1199) {
                    var t = $("#playerArea").offset().top - 100,
                        n = parseInt($("#playerArea").offset().top) + parseInt($("#playerArea").outerHeight()) - 100;
                    null == e && $(window).scrollTop() >= t && $(window).scrollTop() <= n && ($("#player").YTPStop().YTPPlay(), e = 1)
                }
            }).scroll(), $(window).scroll(function() {
                var e = $(".indiegogo").height(),
                    t = $(window).scrollTop();
                $(window).scrollTop() < e ? $(".header").css("top", e - t + "px") : $(".header").css("top", "0px")
            }), $(".submenu").length > 0 && $(window).width() > 1199) {
            var t = $(".submenu").offset().top,
                n = parseInt($("body").css("padding-top"));
            $(window).scroll(function() {
                $(window).scrollTop() > t ? ($(".submenu").addClass("submenu--fixed"), $("body").css("padding-top", n + parseInt($(".submenu").height()) + "px")) : ($(".submenu").removeClass("submenu--fixed"), $("body").css("padding-top", n + "px"));

                var e = $("#benefits").offset().top - 100,
                    r = parseInt($("#benefits").offset().top) + parseInt($("#benefits").outerHeight()) - 100;
                $(window).scrollTop() >= e && $(window).scrollTop() <= r ? $(".submenu__link--benefits").addClass("active") : $(".submenu__link--benefits").removeClass("active");
                var e = $("#modules").offset().top - 100,
                    r = parseInt($("#modules").offset().top) + parseInt($("#modules").outerHeight()) - 100;
                $(window).scrollTop() >= e && $(window).scrollTop() <= r ? $(".submenu__link--modules").addClass("active") : $(".submenu__link--modules").removeClass("active");
                var e = $("#extend").offset().top - 100,
                    r = parseInt($("#extend").offset().top) + parseInt($("#extend").outerHeight()) - 100;
                $(window).scrollTop() >= e && $(window).scrollTop() <= r ? $(".submenu__link--extend").addClass("active") : $(".submenu__link--extend").removeClass("active");
                var e = $("#faq").offset().top - 100,
                    r = parseInt($("#faq").offset().top) + parseInt($("#faq").outerHeight()) - 100;
                $(window).scrollTop() >= e && $(window).scrollTop() <= r ? $(".submenu__link--faq").addClass("active") : $(".submenu__link--faq").removeClass("active");

                var e = $("#overview").offset().top - 100,
                    r = parseInt($("#overview").offset().top) + parseInt($("#overview").outerHeight()) - 100;
                $(window).scrollTop() >= e && $(window).scrollTop() <= r ? $(".submenu__link--overview").addClass("active") : $(".submenu__link--overview").removeClass("active");

                var e = $("#kit").offset().top - 100,
                    r = parseInt($("#kit").offset().top) + parseInt($("#kit").outerHeight()) - 100;
                $(window).scrollTop() >= e && $(window).scrollTop() <= r ? $(".submenu__link--kit").addClass("active") : $(".submenu__link--kit").removeClass("active");

                var e = $("#integration").offset().top - 100,
                    r = parseInt($("#integration").offset().top) + parseInt($("#integration").outerHeight()) - 100;
                $(window).scrollTop() >= e && $(window).scrollTop() <= r ? $(".submenu__link--integration").addClass("active") : $(".submenu__link--integration").removeClass("active");
                var e = $("#specification").offset().top - 100,
                    r = parseInt($("#specification").offset().top) + parseInt($("#specification").outerHeight()) - 100;
                $(window).scrollTop() >= e && $(window).scrollTop() <= r ? $(".submenu__link--specification").addClass("active") : $(".submenu__link--specification").removeClass("active");
                var e = $("#support").offset().top - 100,
                    r = parseInt($("#support").offset().top) + parseInt($("#support").outerHeight()) - 100;
                $(window).scrollTop() >= e && $(window).scrollTop() <= r ? $(".submenu__link--support").addClass("active") : $(".submenu__link--support").removeClass("active")
            }).scroll()
        }
    }).resize(), $("#3d").reel({
        responsive: !0,
        frames: 218,
        timeout: 3,
        cursor: "move",
        speed: .05,
        images: "./images/3d/big-clown-3-#-2.jpg|1..218"
    }).bind("frameChange", function(e, t, n) {
        var r = n / 218 * 100;
        $(".threed__slider__active").width(r + "%"), $(".threed__slider__point").removeClass("threed__slider__point--active"), $(".threed__slider__point").removeClass("threed__slider__point--full"), r > 0 && $(".threed__slider__point--1").addClass("threed__slider__point--active"), r > 20 && $(".threed__slider__point--2").addClass("threed__slider__point--active"), r > 40 && $(".threed__slider__point--3").addClass("threed__slider__point--active"), r > 60 && $(".threed__slider__point--4").addClass("threed__slider__point--active"), r > 80 && $(".threed__slider__point--5").addClass("threed__slider__point--active"), r >= 100 && $(".threed__slider__point--6").addClass("threed__slider__point--active"), r >= 0 && r <= 1 && $(".threed__slider__point--1").addClass("threed__slider__point--full"), r >= 20 && r <= 21 && $(".threed__slider__point--2").addClass("threed__slider__point--full"), r >= 40 && r <= 41 && $(".threed__slider__point--3").addClass("threed__slider__point--full"), r >= 60 && r <= 61 && $(".threed__slider__point--4").addClass("threed__slider__point--full"), r >= 80 && r <= 81 && $(".threed__slider__point--5").addClass("threed__slider__point--full"), r >= 99 && r <= 100 && $(".threed__slider__point--6").addClass("threed__slider__point--full")
    }), $(".threed__slider__point--1").on("click", function(e) {
        $("#3d").reel("frame", Math.round(0))
    }), $(".threed__slider__point--2").on("click", function(e) {
        $("#3d").reel("frame", Math.round(43.6))
    }), $(".threed__slider__point--3").on("click", function(e) {
        $("#3d").reel("frame", Math.round(87.2))
    }), $(".threed__slider__point--4").on("click", function(e) {
        $("#3d").reel("frame", Math.round(.6 * 218))
    }), $(".threed__slider__point--5").on("click", function(e) {
        $("#3d").reel("frame", Math.round(174.4))
    }), $(".threed__slider__point--6").on("click", function(e) {
        $("#3d").reel("frame", Math.round(218))
    }), $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e) {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length && (e.preventDefault(), $(".submenu__link").removeClass("active"), $(this).addClass("active"), $("html, body").animate({
                scrollTop: t.offset().top
            }, 1e3, function() {
                var e = $(t);
                if (e.focus(), e.is(":focus")) return !1;
                e.attr("tabindex", "-1"), e.focus()
            }))
        }
    }), $(".slick").not(".slick--2").slick({
        dots: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }]
    }), $(".slick--2").slick({
        dots: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1
    })
});
