function resize_intro() {
    page_height = jQuery(window).height(), right_height = jQuery(".right section").height() + 40, left_height = jQuery(".left section").height() + 40, left_height < page_height && (jQuery(".left").css("height", page_height + "px"), left_content_margin = (page_height - left_height) / 2 - 30, jQuery(".left section").css("margin-top", left_content_margin + "px")), right_height < page_height && jQuery(window).width() > 800 && (right_content_margin = (page_height - right_height) / 2, jQuery(".right section").css("margin-top", right_content_margin + "px"))
}

function makeTransactionsChart() {
    new Chart(ctx, {
        type: "bar",
        defaultFontSize: 18,
        data: {
            labels: $("#transactions-chart-wrap").data("transactions").dates,
            datasets: [{
                label: "Pending",
                data: $("#transactions-chart-wrap").data("transactions").pending,
                backgroundColor: "rgba(189, 0, 2, 0.3)",
                borderColor: "rgba(189, 0, 2, 0.15)",
                borderWidth: 1
            }, {
                label: "Confirmed",
                data: $("#transactions-chart-wrap").data("transactions").success,
                backgroundColor: "rgba(118, 159, 198, 0.5)",
                borderColor: "rgba(118, 159, 198, 0.3)",
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                onClick: function() {
                    return !1
                }
            },
            scales: {
                yAxes: [{
                    stacked: !0,
                    ticks: {
                        beginAtZero: !0,
                        maxTicksLimit: 4,
                        suggestedMax: 10
                    },
                    gridLines: {
                        display: !1,
                        color: "rgba(221, 221, 221, 1)"
                    }
                }],
                xAxes: [{
                    stacked: !0,
                    ticks: {
                        display: !1
                    },
                    gridLines: {
                        display: !1,
                        color: "rgba(221, 221, 221, 1)"
                    },
                    time: {
                        unit: "day"
                    }
                }]
            }
        }
    })
}

function makeAppChart() {
    new Chart(ctx, {
        type: "bar",
        defaultFontSize: 18,
        data: {
            labels: $("#app-chart-wrap").data("transactions").dates,
            datasets: [{
                label: "Pending",
                data: $("#app-chart-wrap").data("transactions").pending,
                backgroundColor: "rgba(189, 0, 2, 0.3)",
                borderColor: "rgba(189, 0, 2, 0.15)",
                borderWidth: 1
            }, {
                label: "Confirmed",
                data: $("#app-chart-wrap").data("transactions").success,
                backgroundColor: "rgba(118, 159, 198, 0.5)",
                borderColor: "rgba(118, 159, 198, 0.3)",
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                onClick: function() {
                    return !1
                }
            },
            scales: {
                yAxes: [{
                    stacked: !0,
                    ticks: {
                        beginAtZero: !0,
                        maxTicksLimit: 4,
                        suggestedMax: 10
                    },
                    gridLines: {
                        display: !1,
                        color: "rgba(221, 221, 221, 1)"
                    }
                }],
                xAxes: [{
                    stacked: !0,
                    ticks: {
                        display: !1
                    },
                    gridLines: {
                        display: !1,
                        color: "rgba(221, 221, 221, 1)"
                    }
                }]
            }
        }
    })
}! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
            n = ft.type(t);
        return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t, e, n) {
        if (ft.isFunction(e)) return ft.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return ft.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (kt.test(e)) return ft.filter(e, t, n);
            e = ft.filter(e, t)
        }
        return ft.grep(t, function(t) {
            return ft.inArray(t, e) > -1 !== n
        })
    }

    function r(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = {};
        return ft.each(t.match(Ot) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function a() {
        it.addEventListener ? (it.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s)) : (it.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
    }

    function s() {
        (it.addEventListener || "load" === t.event.type || "complete" === it.readyState) && (a(), ft.ready())
    }

    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(Et, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ft.test(n) ? ft.parseJSON(n) : n)
                } catch (t) {}
                ft.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function d(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function u(t, e, n, i) {
        if (It(t)) {
            var r, o, a = ft.expando,
                s = t.nodeType,
                l = s ? ft.cache : t,
                d = s ? t[a] : t[a] && a;
            if (d && l[d] && (i || l[d].data) || void 0 !== n || "string" != typeof e) return d || (d = s ? t[a] = nt.pop() || ft.guid++ : a), l[d] || (l[d] = s ? {} : {
                toJSON: ft.noop
            }), "object" != typeof e && "function" != typeof e || (i ? l[d] = ft.extend(l[d], e) : l[d].data = ft.extend(l[d].data, e)), o = l[d], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ft.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[ft.camelCase(e)])) : r = o, r
        }
    }

    function c(t, e, n) {
        if (It(t)) {
            var i, r, o = t.nodeType,
                a = o ? ft.cache : t,
                s = o ? t[ft.expando] : ft.expando;
            if (a[s]) {
                if (e && (i = n ? a[s] : a[s].data)) {
                    ft.isArray(e) ? e = e.concat(ft.map(e, ft.camelCase)) : e in i ? e = [e] : (e = ft.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                    for (; r--;) delete i[e[r]];
                    if (n ? !d(i) : !ft.isEmptyObject(i)) return
                }(n || (delete a[s].data, d(a[s]))) && (o ? ft.cleanData([t], !0) : ct.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }

    function h(t, e, n, i) {
        var r, o = 1,
            a = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return ft.css(t, e, "")
            },
            l = s(),
            d = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
            u = (ft.cssNumber[e] || "px" !== d && +l) && Rt.exec(ft.css(t, e));
        if (u && u[3] !== d) {
            d = d || u[3], n = n || [], u = +l || 1;
            do o = o || ".5", u /= o, ft.style(t, e, u + d); while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = u, i.end = r)), r
    }

    function f(t) {
        var e = Vt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function p(t, e) {
        var n, i, r = 0,
            o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || ft.nodeName(i, e) ? o.push(i) : ft.merge(o, p(i, e));
        return void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], o) : o
    }

    function g(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) ft._data(n, "globalEval", !e || ft._data(e[i], "globalEval"))
    }

    function m(t) {
        Nt.test(t.type) && (t.defaultChecked = t.checked)
    }

    function v(t, e, n, i, r) {
        for (var o, a, s, l, d, u, c, h = t.length, v = f(e), y = [], b = 0; b < h; b++)
            if (a = t[b], a || 0 === a)
                if ("object" === ft.type(a)) ft.merge(y, a.nodeType ? [a] : a);
                else if (qt.test(a)) {
            for (l = l || v.appendChild(e.createElement("div")), d = (jt.exec(a) || ["", ""])[1].toLowerCase(), c = Bt[d] || Bt._default, l.innerHTML = c[1] + ft.htmlPrefilter(a) + c[2], o = c[0]; o--;) l = l.lastChild;
            if (!ct.leadingWhitespace && zt.test(a) && y.push(e.createTextNode(zt.exec(a)[0])), !ct.tbody)
                for (a = "table" !== d || Ut.test(a) ? "<table>" !== c[1] || Ut.test(a) ? 0 : l : l.firstChild, o = a && a.childNodes.length; o--;) ft.nodeName(u = a.childNodes[o], "tbody") && !u.childNodes.length && a.removeChild(u);
            for (ft.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = v.lastChild
        } else y.push(e.createTextNode(a));
        for (l && v.removeChild(l), ct.appendChecked || ft.grep(p(y, "input"), m), b = 0; a = y[b++];)
            if (i && ft.inArray(a, i) > -1) r && r.push(a);
            else if (s = ft.contains(a.ownerDocument, a), l = p(v.appendChild(a), "script"), s && g(l), n)
            for (o = 0; a = l[o++];) Yt.test(a.type || "") && n.push(a);
        return l = null, v
    }

    function y() {
        return !0
    }

    function b() {
        return !1
    }

    function x() {
        try {
            return it.activeElement
        } catch (t) {}
    }

    function w(t, e, n, i, r, o) {
        var a, s;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in e) w(t, s, n, i, e[s], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = b;
        else if (!r) return t;
        return 1 === o && (a = r, r = function(t) {
            return ft().off(t), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = ft.guid++)), t.each(function() {
            ft.event.add(this, e, r, i, n)
        })
    }

    function _(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function k(t) {
        return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type, t
    }

    function S(t) {
        var e = re.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function C(t, e) {
        if (1 === e.nodeType && ft.hasData(t)) {
            var n, i, r, o = ft._data(t),
                a = ft._data(e, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, r = s[n].length; i < r; i++) ft.event.add(e, n, s[n][i])
            }
            a.data && (a.data = ft.extend({}, a.data))
        }
    }

    function D(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ct.noCloneEvent && e[ft.expando]) {
                r = ft._data(e);
                for (i in r.events) ft.removeEvent(e, i, r.handle);
                e.removeAttribute(ft.expando)
            }
            "script" === n && e.text !== t.text ? (k(e).text = t.text, S(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ct.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Nt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }

    function M(t, e, n, i) {
        e = ot.apply([], e);
        var r, o, a, s, l, d, u = 0,
            c = t.length,
            h = c - 1,
            f = e[0],
            g = ft.isFunction(f);
        if (g || c > 1 && "string" == typeof f && !ct.checkClone && ie.test(f)) return t.each(function(r) {
            var o = t.eq(r);
            g && (e[0] = f.call(this, r, o.html())), M(o, e, n, i)
        });
        if (c && (d = v(e, t[0].ownerDocument, !1, t, i), r = d.firstChild, 1 === d.childNodes.length && (d = r), r || i)) {
            for (s = ft.map(p(d, "script"), k), a = s.length; u < c; u++) o = d, u !== h && (o = ft.clone(o, !0, !0), a && ft.merge(s, p(o, "script"))), n.call(t[u], o, u);
            if (a)
                for (l = s[s.length - 1].ownerDocument, ft.map(s, S), u = 0; u < a; u++) o = s[u], Yt.test(o.type || "") && !ft._data(o, "globalEval") && ft.contains(l, o) && (o.src ? ft._evalUrl && ft._evalUrl(o.src) : ft.globalEval((o.text || o.textContent || o.innerHTML || "").replace(oe, "")));
            d = r = null
        }
        return t
    }

    function T(t, e, n) {
        for (var i, r = e ? ft.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ft.cleanData(p(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && g(p(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function O(t, e) {
        var n = ft(e.createElement(t)).appendTo(e.body),
            i = ft.css(n[0], "display");
        return n.detach(), i
    }

    function A(t) {
        var e = it,
            n = de[t];
        return n || (n = O(t, e), "none" !== n && n || (le = (le || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write(), e.close(), n = O(t, e), le.detach()), de[t] = n), n
    }

    function P(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function I(t) {
        if (t in Se) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = ke.length; n--;)
            if (t = ke[n] + e, t in Se) return t
    }

    function F(t, e) {
        for (var n, i, r, o = [], a = 0, s = t.length; a < s; a++) i = t[a], i.style && (o[a] = ft._data(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Wt(i) && (o[a] = ft._data(i, "olddisplay", A(i.nodeName)))) : (r = Wt(i), (n && "none" !== n || !r) && ft._data(i, "olddisplay", r ? n : ft.css(i, "display"))));
        for (a = 0; a < s; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
        return t
    }

    function E(t, e, n) {
        var i = xe.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function L(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += ft.css(t, n + $t[o], !0, r)), i ? ("content" === n && (a -= ft.css(t, "padding" + $t[o], !0, r)), "margin" !== n && (a -= ft.css(t, "border" + $t[o] + "Width", !0, r))) : (a += ft.css(t, "padding" + $t[o], !0, r), "padding" !== n && (a += ft.css(t, "border" + $t[o] + "Width", !0, r)));
        return a
    }

    function R(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = pe(t),
            a = ct.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (r = ge(t, e, o), (r < 0 || null == r) && (r = t.style[e]), ce.test(r)) return r;
            i = a && (ct.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + L(t, e, n || (a ? "border" : "content"), i, o) + "px"
    }

    function $(t, e, n, i, r) {
        return new $.prototype.init(t, e, n, i, r)
    }

    function W() {
        return t.setTimeout(function() {
            Ce = void 0
        }), Ce = ft.now()
    }

    function H(t, e) {
        var n, i = {
                height: t
            },
            r = 0;
        for (e = e ? 1 : 0; r < 4; r += 2 - e) n = $t[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function N(t, e, n) {
        for (var i, r = (z.tweeners[e] || []).concat(z.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function j(t, e, n) {
        var i, r, o, a, s, l, d, u, c = this,
            h = {},
            f = t.style,
            p = t.nodeType && Wt(t),
            g = ft._data(t, "fxshow");
        n.queue || (s = ft._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, c.always(function() {
            c.always(function() {
                s.unqueued--, ft.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], d = ft.css(t, "display"), u = "none" === d ? ft._data(t, "olddisplay") || A(t.nodeName) : d, "inline" === u && "none" === ft.css(t, "float") && (ct.inlineBlockNeedsLayout && "inline" !== A(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ct.shrinkWrapBlocks() || c.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], Me.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    p = !0
                }
                h[i] = g && g[i] || ft.style(t, i)
            } else d = void 0;
        if (ft.isEmptyObject(h)) "inline" === ("none" === d ? A(t.nodeName) : d) && (f.display = d);
        else {
            g ? "hidden" in g && (p = g.hidden) : g = ft._data(t, "fxshow", {}), o && (g.hidden = !p), p ? ft(t).show() : c.done(function() {
                ft(t).hide()
            }), c.done(function() {
                var e;
                ft._removeData(t, "fxshow");
                for (e in h) ft.style(t, e, h[e])
            });
            for (i in h) a = N(p ? g[i] : 0, i, c), i in g || (g[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function Y(t, e) {
        var n, i, r, o, a;
        for (n in t)
            if (i = ft.camelCase(n), r = e[i], o = t[n], ft.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), a = ft.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
    }

    function z(t, e, n) {
        var i, r, o = 0,
            a = z.prefilters.length,
            s = ft.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = Ce || W(), n = Math.max(0, d.startTime + d.duration - e), i = n / d.duration || 0, o = 1 - i, a = 0, l = d.tweens.length; a < l; a++) d.tweens[a].run(o);
                return s.notifyWith(t, [d, o, n]), o < 1 && l ? n : (s.resolveWith(t, [d]), !1)
            },
            d = s.promise({
                elem: t,
                props: ft.extend({}, e),
                opts: ft.extend(!0, {
                    specialEasing: {},
                    easing: ft.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Ce || W(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = ft.Tween(t, d.opts, e, n, d.opts.specialEasing[e] || d.opts.easing);
                    return d.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? d.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) d.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [d, 1, 0]), s.resolveWith(t, [d, e])) : s.rejectWith(t, [d, e]), this
                }
            }),
            u = d.props;
        for (Y(u, d.opts.specialEasing); o < a; o++)
            if (i = z.prefilters[o].call(d, t, u, d.opts)) return ft.isFunction(i.stop) && (ft._queueHooks(d.elem, d.opts.queue).stop = ft.proxy(i.stop, i)), i;
        return ft.map(u, N, d), ft.isFunction(d.opts.start) && d.opts.start.call(t, d), ft.fx.timer(ft.extend(l, {
            elem: t,
            anim: d,
            queue: d.opts.queue
        })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }

    function V(t) {
        return ft.attr(t, "class") || ""
    }

    function B(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(Ot) || [];
            if (ft.isFunction(n))
                for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function q(t, e, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, ft.each(t[s] || [], function(t, s) {
                var d = s(e, n, i);
                return "string" != typeof d || a || o[d] ? a ? !(l = d) : void 0 : (e.dataTypes.unshift(d), r(d), !1)
            }), l
        }
        var o = {},
            a = t === Je;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function U(t, e) {
        var n, i, r = ft.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && ft.extend(!0, t, n), t
    }

    function G(t, e, n) {
        for (var i, r, o, a, s = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || t.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function Z(t, e, n, i) {
        var r, o, a, s, l, d = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (a in t.converters) d[a.toLowerCase()] = t.converters[a];
        for (o = u.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = d[l + " " + o] || d["* " + o], !a)
                for (r in d)
                    if (s = r.split(" "), s[1] === o && (a = d[l + " " + s[0]] || d["* " + s[0]])) {
                        a === !0 ? a = d[r] : d[r] !== !0 && (o = s[0], u.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && t["throws"]) e = a(e);
                else try {
                    e = a(e)
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: a ? t : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function Q(t) {
        return t.style && t.style.display || ft.css(t, "display")
    }

    function X(t) {
        if (!ft.contains(t.ownerDocument || it, t)) return !0;
        for (; t && 1 === t.nodeType;) {
            if ("none" === Q(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function J(t, e, n, i) {
        var r;
        if (ft.isArray(e)) ft.each(e, function(e, r) {
            n || rn.test(t) ? i(t, r) : J(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== ft.type(e)) i(t, e);
        else
            for (r in e) J(t + "[" + r + "]", e[r], n, i)
    }

    function K() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }

    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function et(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var nt = [],
        it = t.document,
        rt = nt.slice,
        ot = nt.concat,
        at = nt.push,
        st = nt.indexOf,
        lt = {},
        dt = lt.toString,
        ut = lt.hasOwnProperty,
        ct = {},
        ht = "1.12.4",
        ft = function(t, e) {
            return new ft.fn.init(t, e)
        },
        pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        gt = /^-ms-/,
        mt = /-([\da-z])/gi,
        vt = function(t, e) {
            return e.toUpperCase()
        };
    ft.fn = ft.prototype = {
        jquery: ht,
        constructor: ft,
        selector: "",
        length: 0,
        toArray: function() {
            return rt.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : rt.call(this)
        },
        pushStack: function(t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return ft.each(this, t)
        },
        map: function(t) {
            return this.pushStack(ft.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(rt.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: at,
        sort: nt.sort,
        splice: nt.splice
    }, ft.extend = ft.fn.extend = function() {
        var t, e, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            d = !1;
        for ("boolean" == typeof a && (d = a, a = arguments[s] || {}, s++), "object" == typeof a || ft.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (r = arguments[s]))
                for (i in r) t = a[i], n = r[i], a !== n && (d && n && (ft.isPlainObject(n) || (e = ft.isArray(n))) ? (e ? (e = !1, o = t && ft.isArray(t) ? t : []) : o = t && ft.isPlainObject(t) ? t : {}, a[i] = ft.extend(d, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }, ft.extend({
        expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ft.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === ft.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !ft.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t)) return !1;
            try {
                if (t.constructor && !ut.call(t, "constructor") && !ut.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            if (!ct.ownFirst)
                for (e in t) return ut.call(t, e);
            for (e in t);
            return void 0 === e || ut.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[dt.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && ft.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(gt, "ms-").replace(mt, vt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, r = 0;
            if (n(t))
                for (i = t.length; r < i && e.call(t[r], r, t[r]) !== !1; r++);
            else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(pt, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? ft.merge(i, "string" == typeof t ? [t] : t) : at.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (st) return st.call(e, t, n);
                for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n;) t[r++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];) t[r++] = e[i++];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, a = t.length, s = !n; o < a; o++) i = !e(t[o], o), i !== s && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o, a = 0,
                s = [];
            if (n(t))
                for (r = t.length; a < r; a++) o = e(t[a], a, i), null != o && s.push(o);
            else
                for (a in t) o = e(t[a], a, i), null != o && s.push(o);
            return ot.apply([], s)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            if ("string" == typeof e && (r = t[e], e = t, t = r), ft.isFunction(t)) return n = rt.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(rt.call(arguments)))
            }, i.guid = t.guid = t.guid || ft.guid++, i
        },
        now: function() {
            return +new Date
        },
        support: ct
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = nt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        lt["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = function(t) {
        function e(t, e, n, i) {
            var r, o, a, s, l, d, c, f, p = e && e.ownerDocument,
                g = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!i && ((e ? e.ownerDocument || e : N) !== I && P(e), e = e || I, E)) {
                if (11 !== g && (d = vt.exec(t)))
                    if (r = d[1]) {
                        if (9 === g) {
                            if (!(a = e.getElementById(r))) return n;
                            if (a.id === r) return n.push(a), n
                        } else if (p && (a = p.getElementById(r)) && W(e, a) && a.id === r) return n.push(a), n
                    } else {
                        if (d[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = d[3]) && w.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(r)), n
                    }
                if (w.qsa && !B[t + " "] && (!L || !L.test(t))) {
                    if (1 !== g) p = e, f = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(bt, "\\$&") : e.setAttribute("id", s = H), c = C(t), o = c.length, l = ht.test(s) ? "#" + s : "[id='" + s + "']"; o--;) c[o] = l + " " + h(c[o]);
                        f = c.join(","), p = yt.test(t) && u(e.parentNode) || e
                    }
                    if (f) try {
                        return J.apply(n, p.querySelectorAll(f)), n
                    } catch (t) {} finally {
                        s === H && e.removeAttribute("id")
                    }
                }
            }
            return M(t.replace(st, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[H] = !0, t
        }

        function r(t) {
            var e = I.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = e
        }

        function a(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function s(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function d(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, o = t([], n.length, e), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function u(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function c() {}

        function h(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                o = Y++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, o)
            } : function(e, n, a) {
                var s, l, d, u = [j, o];
                if (a) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, a)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (d = e[H] || (e[H] = {}), l = d[e.uniqueID] || (d[e.uniqueID] = {}), (s = l[i]) && s[0] === j && s[1] === o) return u[2] = s[2];
                            if (l[i] = u, u[2] = t(e, n, a)) return !0
                        }
            }
        }

        function p(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, i) {
            for (var r = 0, o = n.length; r < o; r++) e(t, n[r], i);
            return i
        }

        function m(t, e, n, i, r) {
            for (var o, a = [], s = 0, l = t.length, d = null != e; s < l; s++)(o = t[s]) && (n && !n(o, i, r) || (a.push(o), d && e.push(s)));
            return a
        }

        function v(t, e, n, r, o, a) {
            return r && !r[H] && (r = v(r)), o && !o[H] && (o = v(o, a)), i(function(i, a, s, l) {
                var d, u, c, h = [],
                    f = [],
                    p = a.length,
                    v = i || g(e || "*", s.nodeType ? [s] : s, []),
                    y = !t || !i && e ? v : m(v, h, t, s, l),
                    b = n ? o || (i ? t : p || r) ? [] : a : y;
                if (n && n(y, b, s, l), r)
                    for (d = m(b, f), r(d, [], s, l), u = d.length; u--;)(c = d[u]) && (b[f[u]] = !(y[f[u]] = c));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (d = [], u = b.length; u--;)(c = b[u]) && d.push(y[u] = c);
                            o(null, b = [], d, l)
                        }
                        for (u = b.length; u--;)(c = b[u]) && (d = o ? tt(i, c) : h[u]) > -1 && (i[d] = !(a[d] = c))
                    }
                } else b = m(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, l) : J.apply(a, b)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, o = _.relative[t[0].type], a = o || _.relative[" "], s = o ? 1 : 0, l = f(function(t) {
                    return t === e
                }, a, !0), d = f(function(t) {
                    return tt(e, t) > -1
                }, a, !0), u = [function(t, n, i) {
                    var r = !o && (i || n !== T) || ((e = n).nodeType ? l(t, n, i) : d(t, n, i));
                    return e = null, r
                }]; s < r; s++)
                if (n = _.relative[t[s].type]) u = [f(p(u), n)];
                else {
                    if (n = _.filter[t[s].type].apply(null, t[s].matches), n[H]) {
                        for (i = ++s; i < r && !_.relative[t[i].type]; i++);
                        return v(s > 1 && p(u), s > 1 && h(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(st, "$1"), n, s < i && y(t.slice(s, i)), i < r && y(t = t.slice(i)), i < r && h(t))
                    }
                    u.push(n)
                }
            return p(u)
        }

        function b(t, n) {
            var r = n.length > 0,
                o = t.length > 0,
                a = function(i, a, s, l, d) {
                    var u, c, h, f = 0,
                        p = "0",
                        g = i && [],
                        v = [],
                        y = T,
                        b = i || o && _.find.TAG("*", d),
                        x = j += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (d && (T = a === I || a || d); p !== w && null != (u = b[p]); p++) {
                        if (o && u) {
                            for (c = 0, a || u.ownerDocument === I || (P(u), s = !E); h = t[c++];)
                                if (h(u, a || I, s)) {
                                    l.push(u);
                                    break
                                }
                            d && (j = x)
                        }
                        r && ((u = !h && u) && f--, i && g.push(u))
                    }
                    if (f += p, r && p !== f) {
                        for (c = 0; h = n[c++];) h(g, v, a, s);
                        if (i) {
                            if (f > 0)
                                for (; p--;) g[p] || v[p] || (v[p] = Q.call(l));
                            v = m(v)
                        }
                        J.apply(l, v), d && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return d && (j = x, T = y), g
                };
            return r ? i(a) : a
        }
        var x, w, _, k, S, C, D, M, T, O, A, P, I, F, E, L, R, $, W, H = "sizzle" + 1 * new Date,
            N = t.document,
            j = 0,
            Y = 0,
            z = n(),
            V = n(),
            B = n(),
            q = function(t, e) {
                return t === e && (A = !0), 0
            },
            U = 1 << 31,
            G = {}.hasOwnProperty,
            Z = [],
            Q = Z.pop,
            X = Z.push,
            J = Z.push,
            K = Z.slice,
            tt = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            dt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            ct = new RegExp(ot),
            ht = new RegExp("^" + it + "$"),
            ft = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            pt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            bt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            wt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            _t = function() {
                P()
            };
        try {
            J.apply(Z = K.call(N.childNodes), N.childNodes), Z[N.childNodes.length].nodeType
        } catch (t) {
            J = {
                apply: Z.length ? function(t, e) {
                    X.apply(t, K.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        w = e.support = {}, S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, P = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : N;
            return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, F = I.documentElement, E = !S(I), (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), w.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = r(function(t) {
                return t.appendChild(I.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = mt.test(I.getElementsByClassName), w.getById = r(function(t) {
                return F.appendChild(t).id = H, !I.getElementsByName || !I.getElementsByName(H).length
            }), w.getById ? (_.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && E) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, _.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete _.find.ID, _.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), _.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, _.find.CLASS = w.getElementsByClassName && function(t, e) {
                if ("undefined" != typeof e.getElementsByClassName && E) return e.getElementsByClassName(t)
            }, R = [], L = [], (w.qsa = mt.test(I.querySelectorAll)) && (r(function(t) {
                F.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + H + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + H + "+*").length || L.push(".#.+[+~]")
            }), r(function(t) {
                var e = I.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
            })), (w.matchesSelector = mt.test($ = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && r(function(t) {
                w.disconnectedMatch = $.call(t, "div"), $.call(t, "[s!='']:x"), R.push("!=", ot)
            }), L = L.length && new RegExp(L.join("|")), R = R.length && new RegExp(R.join("|")), e = mt.test(F.compareDocumentPosition), W = e || mt.test(F.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, q = e ? function(t, e) {
                if (t === e) return A = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === I || t.ownerDocument === N && W(N, t) ? -1 : e === I || e.ownerDocument === N && W(N, e) ? 1 : O ? tt(O, t) - tt(O, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return A = !0, 0;
                var n, i = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    s = [t],
                    l = [e];
                if (!r || !o) return t === I ? -1 : e === I ? 1 : r ? -1 : o ? 1 : O ? tt(O, t) - tt(O, e) : 0;
                if (r === o) return a(t, e);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? a(s[i], l[i]) : s[i] === N ? -1 : l[i] === N ? 1 : 0
            }, I) : I
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== I && P(t), n = n.replace(ut, "='$1']"), w.matchesSelector && E && !B[n + " "] && (!R || !R.test(n)) && (!L || !L.test(n))) try {
                var i = $.call(t, n);
                if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (t) {}
            return e(n, I, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== I && P(t), W(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== I && P(t);
            var n = _.attrHandle[e.toLowerCase()],
                i = n && G.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !E) : void 0;
            return void 0 !== i ? i : w.attributes || !E ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (A = !w.detectDuplicates, O = !w.sortStable && t.slice(0), t.sort(q), A) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return O = null, t
        }, k = e.getText = function(t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += k(e);
            return n
        }, _ = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ft,
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                        t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && z(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        s = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var d, u, c, h, f, p, g = o !== a ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = s && e.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (h = e; h = h[g];)
                                        if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    p = g = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                for (h = m, c = h[H] || (h[H] = {}), u = c[h.uniqueID] || (c[h.uniqueID] = {}), d = u[t] || [], f = d[0] === j && d[1], b = f && d[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();)
                                    if (1 === h.nodeType && ++b && h === e) {
                                        u[t] = [j, f, b];
                                        break
                                    }
                            } else if (y && (h = e, c = h[H] || (h[H] = {}), u = c[h.uniqueID] || (c[h.uniqueID] = {}), d = u[t] || [], f = d[0] === j && d[1], b = f), b === !1)
                                for (;
                                    (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (c = h[H] || (h[H] = {}), u = c[h.uniqueID] || (c[h.uniqueID] = {}), u[t] = [j, b]), h !== e)););
                            return b -= r, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[H] ? o(n) : o.length > 1 ? (r = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), a = r.length; a--;) i = tt(t, r[a]), t[i] = !(e[i] = r[a])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        r = D(t.replace(st, "$1"));
                    return r[H] ? i(function(t, e, n, i) {
                        for (var o, a = r(t, null, i, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                    }) : function(t, i, o) {
                        return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(xt, wt),
                        function(e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function(t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, wt).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === F
                },
                focus: function(t) {
                    return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !_.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: d(function() {
                    return [0]
                }),
                last: d(function(t, e) {
                    return [e - 1]
                }),
                eq: d(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: d(function(t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }),
                odd: d(function(t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }),
                lt: d(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: d(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) _.pseudos[x] = l(x);
        return c.prototype = _.filters = _.pseudos, _.setFilters = new c, C = e.tokenize = function(t, n) {
            var i, r, o, a, s, l, d, u = V[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = t, l = [], d = _.preFilter; s;) {
                i && !(r = lt.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = dt.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(st, " ")
                }), s = s.slice(i.length));
                for (a in _.filter) !(r = ft[a].exec(s)) || d[a] && !(r = d[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? e.error(t) : V(t, l).slice(0)
        }, D = e.compile = function(t, e) {
            var n, i = [],
                r = [],
                o = B[t + " "];
            if (!o) {
                for (e || (e = C(t)), n = e.length; n--;) o = y(e[n]), o[H] ? i.push(o) : r.push(o);
                o = B(t, b(r, i)), o.selector = t
            }
            return o
        }, M = e.select = function(t, e, n, i) {
            var r, o, a, s, l, d = "function" == typeof t && t,
                c = !i && C(t = d.selector || t);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && E && _.relative[o[1].type]) {
                    if (e = (_.find.ID(a.matches[0].replace(xt, wt), e) || [])[0], !e) return n;
                    d && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = ft.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !_.relative[s = a.type]);)
                    if ((l = _.find[s]) && (i = l(a.matches[0].replace(xt, wt), yt.test(o[0].type) && u(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && h(o), !t) return J.apply(n, i), n;
                        break
                    }
            }
            return (d || D(t, c))(i, e, !E, n, !e || yt.test(t) && u(e.parentNode) || e), n
        }, w.sortStable = H.split("").sort(q).join("") === H, w.detectDuplicates = !!A, P(), w.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(I.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function(t, e, n) {
            var i;
            if (!n) return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    ft.find = yt, ft.expr = yt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = yt.uniqueSort, ft.text = yt.getText, ft.isXMLDoc = yt.isXML, ft.contains = yt.contains;
    var bt = function(t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && ft(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        xt = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        wt = ft.expr.match.needsContext,
        _t = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        kt = /^.[^:#\[\.,]*$/;
    ft.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, ft.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof t) return this.pushStack(ft(t).filter(function() {
                for (e = 0; e < r; e++)
                    if (ft.contains(i[e], this)) return !0
            }));
            for (e = 0; e < r; e++) ft.find(t, i[e], n);
            return n = this.pushStack(r > 1 ? ft.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && wt.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var St, Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Dt = ft.fn.init = function(t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || St, "string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Ct.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), _t.test(i[1]) && ft.isPlainObject(e))
                        for (i in e) ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (r = it.getElementById(i[2]), r && r.parentNode) {
                    if (r.id !== i[2]) return St.find(t);
                    this.length = 1, this[0] = r
                }
                return this.context = it, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ft.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ft) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ft.makeArray(t, this))
        };
    Dt.prototype = ft.fn, St = ft(it);
    var Mt = /^(?:parents|prev(?:Until|All))/,
        Tt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ft.fn.extend({
        has: function(t) {
            var e, n = ft(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; e < i; e++)
                    if (ft.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], a = wt.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ft.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ft.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return bt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return bt(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return bt(t, "nextSibling")
        },
        prevAll: function(t) {
            return bt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return bt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return bt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return xt(t.firstChild)
        },
        contents: function(t) {
            return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
        }
    }, function(t, e) {
        ft.fn[t] = function(n, i) {
            var r = ft.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ft.filter(i, r)), this.length > 1 && (Tt[t] || (r = ft.uniqueSort(r)), Mt.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var Ot = /\S+/g;
    ft.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : ft.extend({}, t);
        var e, n, i, r, a = [],
            s = [],
            l = -1,
            d = function() {
                for (r = t.once, i = e = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = a.length, n = !1);
                t.memory || (n = !1), e = !1, r && (a = n ? [] : "")
            },
            u = {
                add: function() {
                    return a && (n && !e && (l = a.length - 1, s.push(n)), function e(n) {
                        ft.each(n, function(n, i) {
                            ft.isFunction(i) ? t.unique && u.has(i) || a.push(i) : i && i.length && "string" !== ft.type(i) && e(i)
                        })
                    }(arguments), n && !e && d()), this
                },
                remove: function() {
                    return ft.each(arguments, function(t, e) {
                        for (var n;
                            (n = ft.inArray(e, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(t) {
                    return t ? ft.inArray(t, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = !0, n || u.disable(), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, n) {
                    return r || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || d()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, ft.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", ft.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ft.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ft.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return ft.Deferred(function(n) {
                            ft.each(e, function(e, o) {
                                var a = ft.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && ft.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ft.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, ft.each(e, function(t, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0,
                o = rt.call(arguments),
                a = o.length,
                s = 1 !== a || t && ft.isFunction(t.promise) ? a : 0,
                l = 1 === s ? t : ft.Deferred(),
                d = function(t, n, i) {
                    return function(r) {
                        n[t] = this, i[t] = arguments.length > 1 ? rt.call(arguments) : r, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) o[r] && ft.isFunction(o[r].promise) ? o[r].promise().progress(d(r, n, e)).done(d(r, i, o)).fail(l.reject) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var At;
    ft.fn.ready = function(t) {
        return ft.ready.promise().done(t), this
    }, ft.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ft.readyWait++ : ft.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, t !== !0 && --ft.readyWait > 0 || (At.resolveWith(it, [ft]), ft.fn.triggerHandler && (ft(it).triggerHandler("ready"), ft(it).off("ready"))))
        }
    }), ft.ready.promise = function(e) {
        if (!At)
            if (At = ft.Deferred(), "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll) t.setTimeout(ft.ready);
            else if (it.addEventListener) it.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s);
        else {
            it.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == t.frameElement && it.documentElement
            } catch (t) {}
            n && n.doScroll && ! function e() {
                if (!ft.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (n) {
                        return t.setTimeout(e, 50)
                    }
                    a(), ft.ready()
                }
            }()
        }
        return At.promise(e)
    }, ft.ready.promise();
    var Pt;
    for (Pt in ft(ct)) break;
    ct.ownFirst = "0" === Pt, ct.inlineBlockNeedsLayout = !1, ft(function() {
            var t, e, n, i;
            n = it.getElementsByTagName("body")[0], n && n.style && (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ct.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var t = it.createElement("div");
            ct.deleteExpando = !0;
            try {
                delete t.test
            } catch (t) {
                ct.deleteExpando = !1
            }
            t = null
        }();
    var It = function(t) {
            var e = ft.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
        },
        Ft = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Et = /([A-Z])/g;
    ft.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando], !!t && !d(t)
            },
            data: function(t, e, n) {
                return u(t, e, n)
            },
            removeData: function(t, e) {
                return c(t, e)
            },
            _data: function(t, e, n) {
                return u(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return c(t, e, !0)
            }
        }), ft.fn.extend({
            data: function(t, e) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = ft.data(o), 1 === o.nodeType && !ft._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ft.camelCase(i.slice(5)), l(o, i, r[i])));
                        ft._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    ft.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    ft.data(this, t, e)
                }) : o ? l(o, t, ft.data(o, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    ft.removeData(this, t)
                })
            }
        }), ft.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = ft._data(t, e), n && (!i || ft.isArray(n) ? i = ft._data(t, e, ft.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ft.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = ft._queueHooks(t, e),
                    a = function() {
                        ft.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return ft._data(t, n) || ft._data(t, n, {
                    empty: ft.Callbacks("once memory").add(function() {
                        ft._removeData(t, e + "queue"), ft._removeData(t, n)
                    })
                })
            }
        }), ft.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = ft.queue(this, t, e);
                    ft._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ft.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    r = ft.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = ft._data(o[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(e)
            }
        }),
        function() {
            var t;
            ct.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, n, i;
                return n = it.getElementsByTagName("body")[0], n && n.style ? (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(it.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
    var Lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Rt = new RegExp("^(?:([+-])=|)(" + Lt + ")([a-z%]*)$", "i"),
        $t = ["Top", "Right", "Bottom", "Left"],
        Wt = function(t, e) {
            return t = e || t, "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
        },
        Ht = function(t, e, n, i, r, o, a) {
            var s = 0,
                l = t.length,
                d = null == n;
            if ("object" === ft.type(n)) {
                r = !0;
                for (s in n) Ht(t, e, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, ft.isFunction(i) || (a = !0), d && (a ? (e.call(t, i), e = null) : (d = e, e = function(t, e, n) {
                    return d.call(ft(t), n)
                })), e))
                for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
            return r ? t : d ? e.call(t) : l ? e(t[0], n) : o
        },
        Nt = /^(?:checkbox|radio)$/i,
        jt = /<([\w:-]+)/,
        Yt = /^$|\/(?:java|ecma)script/i,
        zt = /^\s+/,
        Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var t = it.createElement("div"),
            e = it.createDocumentFragment(),
            n = it.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ct.leadingWhitespace = 3 === t.firstChild.nodeType, ct.tbody = !t.getElementsByTagName("tbody").length, ct.htmlSerialize = !!t.getElementsByTagName("link").length, ct.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), ct.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", ct.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), n = it.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ct.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ct.noCloneEvent = !!t.addEventListener, t[ft.expando] = 1, ct.attributes = !t.getAttribute(ft.expando)
    }();
    var Bt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ct.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Bt.optgroup = Bt.option, Bt.tbody = Bt.tfoot = Bt.colgroup = Bt.caption = Bt.thead, Bt.th = Bt.td;
    var qt = /<|&#?\w+;/,
        Ut = /<tbody/i;
    ! function() {
        var e, n, i = it.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (ct[e] = n in t) || (i.setAttribute(n, "t"), ct[e] = i.attributes[n].expando === !1);
        i = null
    }();
    var Gt = /^(?:input|select|textarea)$/i,
        Zt = /^key/,
        Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Xt = /^(?:focusinfocus|focusoutblur)$/,
        Jt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, a, s, l, d, u, c, h, f, p, g, m = ft._data(t);
            if (m) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = ft.guid++), (a = m.events) || (a = m.events = {}), (u = m.handle) || (u = m.handle = function(t) {
                        return "undefined" == typeof ft || t && ft.event.triggered === t.type ? void 0 : ft.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = t), e = (e || "").match(Ot) || [""], s = e.length; s--;) o = Jt.exec(e[s]) || [], f = g = o[1], p = (o[2] || "").split(".").sort(), f && (d = ft.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = ft.event.special[f] || {}, c = ft.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && ft.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, l), (h = a[f]) || (h = a[f] = [], h.delegateCount = 0, d.setup && d.setup.call(t, i, p, u) !== !1 || (t.addEventListener ? t.addEventListener(f, u, !1) : t.attachEvent && t.attachEvent("on" + f, u))), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), ft.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, r) {
            var o, a, s, l, d, u, c, h, f, p, g, m = ft.hasData(t) && ft._data(t);
            if (m && (u = m.events)) {
                for (e = (e || "").match(Ot) || [""], d = e.length; d--;)
                    if (s = Jt.exec(e[d]) || [], f = g = s[1], p = (s[2] || "").split(".").sort(), f) {
                        for (c = ft.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, h = u[f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) a = h[o], !r && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, c.remove && c.remove.call(t, a));
                        l && !h.length && (c.teardown && c.teardown.call(t, p, m.handle) !== !1 || ft.removeEvent(t, f, m.handle), delete u[f])
                    } else
                        for (f in u) ft.event.remove(t, f + e[d], n, i, !0);
                ft.isEmptyObject(u) && (delete m.handle, ft._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, a, s, l, d, u, c, h = [i || it],
                f = ut.call(e, "type") ? e.type : e,
                p = ut.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = u = i = i || it, 3 !== i.nodeType && 8 !== i.nodeType && !Xt.test(f + ft.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), a = f.indexOf(":") < 0 && "on" + f, e = e[ft.expando] ? e : new ft.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ft.makeArray(n, [e]), d = ft.event.special[f] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!r && !d.noBubble && !ft.isWindow(i)) {
                    for (l = d.delegateType || f, Xt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), u = s;
                    u === (i.ownerDocument || it) && h.push(u.defaultView || u.parentWindow || t)
                }
                for (c = 0;
                    (s = h[c++]) && !e.isPropagationStopped();) e.type = c > 1 ? l : d.bindType || f, o = (ft._data(s, "events") || {})[e.type] && ft._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && It(s) && (e.result = o.apply(s, n), e.result === !1 && e.preventDefault());
                if (e.type = f, !r && !e.isDefaultPrevented() && (!d._default || d._default.apply(h.pop(), n) === !1) && It(i) && a && i[f] && !ft.isWindow(i)) {
                    u = i[a], u && (i[a] = null), ft.event.triggered = f;
                    try {
                        i[f]()
                    } catch (t) {}
                    ft.event.triggered = void 0, u && (i[a] = u)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = ft.event.fix(t);
            var e, n, i, r, o, a = [],
                s = rt.call(arguments),
                l = (ft._data(this, "events") || {})[t.type] || [],
                d = ft.event.special[t.type] || {};
            if (s[0] = t, t.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, t) !== !1) {
                for (a = ft.event.handlers.call(this, t, l), e = 0;
                    (r = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, i = ((ft.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, a = [],
                s = e.delegateCount,
                l = t.target;
            if (s && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (i = [], n = 0; n < s; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ft(r, this).index(l) > -1 : ft.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }), a
        },
        fix: function(t) {
            if (t[ft.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Qt.test(r) ? this.mouseHooks : Zt.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new ft.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = o.srcElement || it), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button,
                    a = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || it, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === x() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (ft.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(t) {
                    return ft.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n) {
            var i = ft.extend(new ft.Event, n, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ft.removeEvent = it.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
    }, ft.Event = function(t, e) {
        return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : b) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(t, e)
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = y, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = y, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = y, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ft.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return r && (r === i || ft.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ct.submit || (ft.event.special.submit = {
        setup: function() {
            return !ft.nodeName(this, "form") && void ft.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : void 0;
                n && !ft._data(n, "submit") && (ft.event.add(n, "submit._submit", function(t) {
                    t._submitBubble = !0
                }), ft._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            return !ft.nodeName(this, "form") && void ft.event.remove(this, "._submit")
        }
    }), ct.change || (ft.event.special.change = {
        setup: function() {
            return Gt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ft.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), ft.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), ft.event.simulate("change", this, t)
            })), !1) : void ft.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Gt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
                }), ft._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return ft.event.remove(this, "._change"), !Gt.test(this.nodeName)
        }
    }), ct.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            ft.event.simulate(e, t.target, ft.event.fix(t))
        };
        ft.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = ft._data(i, e);
                r || i.addEventListener(t, n, !0), ft._data(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = ft._data(i, e) - 1;
                r ? ft._data(i, e, r) : (i.removeEventListener(t, n, !0), ft._removeData(i, e))
            }
        }
    }), ft.fn.extend({
        on: function(t, e, n, i) {
            return w(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return w(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = b), this.each(function() {
                ft.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                ft.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return ft.event.trigger(t, e, n, !0)
        }
    });
    var Kt = / jQuery\d+="(?:null|\d+)"/g,
        te = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
        ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ne = /<script|<style|<link/i,
        ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        re = /^true\/(.*)/,
        oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ae = f(it),
        se = ae.appendChild(it.createElement("div"));
    ft.extend({
        htmlPrefilter: function(t) {
            return t.replace(ee, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, r, o, a, s, l = ft.contains(t.ownerDocument, t);
            if (ct.html5Clone || ft.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (se.innerHTML = t.outerHTML, se.removeChild(o = se.firstChild)), !(ct.noCloneEvent && ct.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                for (i = p(o), s = p(t), a = 0; null != (r = s[a]); ++a) i[a] && D(r, i[a]);
            if (e)
                if (n)
                    for (s = s || p(t), i = i || p(o), a = 0; null != (r = s[a]); a++) C(r, i[a]);
                else C(t, o);
            return i = p(o, "script"), i.length > 0 && g(i, !l && p(t, "script")), i = s = r = null, o
        },
        cleanData: function(t, e) {
            for (var n, i, r, o, a = 0, s = ft.expando, l = ft.cache, d = ct.attributes, u = ft.event.special; null != (n = t[a]); a++)
                if ((e || It(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events) u[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], d || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), nt.push(r))
                }
        }
    }), ft.fn.extend({
        domManip: M,
        detach: function(t) {
            return T(this, t, !0)
        },
        remove: function(t) {
            return T(this, t)
        },
        text: function(t) {
            return Ht(this, function(t) {
                return void 0 === t ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return M(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = _(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return M(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = _(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return M(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return M(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ft.cleanData(p(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ft.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return ft.clone(this, t, e)
            })
        },
        html: function(t) {
            return Ht(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Kt, "") : void 0;
                if ("string" == typeof t && !ne.test(t) && (ct.htmlSerialize || !te.test(t)) && (ct.leadingWhitespace || !zt.test(t)) && !Bt[(jt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (ft.cleanData(p(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return M(this, arguments, function(e) {
                var n = this.parentNode;
                ft.inArray(this, t) < 0 && (ft.cleanData(p(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ft.fn[t] = function(t) {
            for (var n, i = 0, r = [], o = ft(t), a = o.length - 1; i <= a; i++) n = i === a ? this : this.clone(!0), ft(o[i])[e](n), at.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var le, de = {
            HTML: "block",
            BODY: "block"
        },
        ue = /^margin/,
        ce = new RegExp("^(" + Lt + ")(?!px)[a-z%]+$", "i"),
        he = function(t, e, n, i) {
            var r, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e) t.style[o] = a[o];
            return r
        },
        fe = it.documentElement;
    ! function() {
        function e() {
            var e, u, c = it.documentElement;
            c.appendChild(l), d.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = s = !1, i = a = !0, t.getComputedStyle && (u = t.getComputedStyle(d), n = "1%" !== (u || {}).top, s = "2px" === (u || {}).marginLeft, r = "4px" === (u || {
                width: "4px"
            }).width, d.style.marginRight = "50%", i = "4px" === (u || {
                marginRight: "4px"
            }).marginRight, e = d.appendChild(it.createElement("div")), e.style.cssText = d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", d.style.width = "1px", a = !parseFloat((t.getComputedStyle(e) || {}).marginRight), d.removeChild(e)), d.style.display = "none", o = 0 === d.getClientRects().length, o && (d.style.display = "", d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d.childNodes[0].style.borderCollapse = "separate", e = d.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), c.removeChild(l)
        }
        var n, i, r, o, a, s, l = it.createElement("div"),
            d = it.createElement("div");
        d.style && (d.style.cssText = "float:left;opacity:.5", ct.opacity = "0.5" === d.style.opacity, ct.cssFloat = !!d.style.cssFloat, d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", ct.clearCloneStyle = "content-box" === d.style.backgroundClip, l = it.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", d.innerHTML = "", l.appendChild(d), ct.boxSizing = "" === d.style.boxSizing || "" === d.style.MozBoxSizing || "" === d.style.WebkitBoxSizing, ft.extend(ct, {
            reliableHiddenOffsets: function() {
                return null == n && e(), o
            },
            boxSizingReliable: function() {
                return null == n && e(), r
            },
            pixelMarginRight: function() {
                return null == n && e(), i
            },
            pixelPosition: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                return null == n && e(), a
            },
            reliableMarginLeft: function() {
                return null == n && e(), s
            }
        }))
    }();
    var pe, ge, me = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (pe = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
    }, ge = function(t, e, n) {
        var i, r, o, a, s = t.style;
        return n = n || pe(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== a && void 0 !== a || ft.contains(t.ownerDocument, t) || (a = ft.style(t, e)), n && !ct.pixelMarginRight() && ce.test(a) && ue.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 === a ? a : a + ""
    }) : fe.currentStyle && (pe = function(t) {
        return t.currentStyle
    }, ge = function(t, e, n) {
        var i, r, o, a, s = t.style;
        return n = n || pe(t), a = n ? n[e] : void 0, null == a && s && s[e] && (a = s[e]), ce.test(a) && !me.test(e) && (i = s.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
    });
    var ve = /alpha\([^)]*\)/i,
        ye = /opacity\s*=\s*([^)]*)/i,
        be = /^(none|table(?!-c[ea]).+)/,
        xe = new RegExp("^(" + Lt + ")(.*)$", "i"),
        we = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        _e = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ke = ["Webkit", "O", "Moz", "ms"],
        Se = it.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ge(t, "opacity");
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
            "float": ct.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, a, s = ft.camelCase(e),
                    l = t.style;
                if (e = ft.cssProps[s] || (ft.cssProps[s] = I(s) || s), a = ft.cssHooks[e] || ft.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : l[e];
                if (o = typeof n, "string" === o && (r = Rt.exec(n)) && r[1] && (n = h(t, e, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (ft.cssNumber[s] ? "" : "px")), ct.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, i))))) try {
                    l[e] = n
                } catch (t) {}
            }
        },
        css: function(t, e, n, i) {
            var r, o, a, s = ft.camelCase(e);
            return e = ft.cssProps[s] || (ft.cssProps[s] = I(s) || s), a = ft.cssHooks[e] || ft.cssHooks[s], a && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = ge(t, e, i)), "normal" === o && e in _e && (o = _e[e]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), ft.each(["height", "width"], function(t, e) {
        ft.cssHooks[e] = {
            get: function(t, n, i) {
                if (n) return be.test(ft.css(t, "display")) && 0 === t.offsetWidth ? he(t, we, function() {
                    return R(t, e, i)
                }) : R(t, e, i)
            },
            set: function(t, n, i) {
                var r = i && pe(t);
                return E(t, n, i ? L(t, e, i, ct.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ct.opacity || (ft.cssHooks.opacity = {
        get: function(t, e) {
            return ye.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                r = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === ft.trim(o.replace(ve, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = ve.test(o) ? o.replace(ve, r) : o + " " + r)
        }
    }), ft.cssHooks.marginRight = P(ct.reliableMarginRight, function(t, e) {
        if (e) return he(t, {
            display: "inline-block"
        }, ge, [t, "marginRight"])
    }), ft.cssHooks.marginLeft = P(ct.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(ge(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - he(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px"
    }), ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ft.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + $t[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, ue.test(t) || (ft.cssHooks[t + e].set = E)
    }), ft.fn.extend({
        css: function(t, e) {
            return Ht(this, function(t, e, n) {
                var i, r, o = {},
                    a = 0;
                if (ft.isArray(e)) {
                    for (i = pe(t), r = e.length; a < r; a++) o[e[a]] = ft.css(t, e[a], !1, i);
                    return o
                }
                return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return F(this, !0)
        },
        hide: function() {
            return F(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Wt(this) ? ft(this).show() : ft(this).hide()
            })
        }
    }), ft.Tween = $, $.prototype = {
        constructor: $,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ft.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = $.propHooks[this.prop];
            return t && t.get ? t.get(this) : $.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = $.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ft.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ft.fx = $.prototype.init, ft.fx.step = {};
    var Ce, De, Me = /^(?:toggle|show|hide)$/,
        Te = /queueHooks$/;
    ft.Animation = ft.extend(z, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return h(n.elem, t, Rt.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Ot);
                for (var n, i = 0, r = t.length; i < r; i++) n = t[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(e)
            },
            prefilters: [j],
            prefilter: function(t, e) {
                e ? z.prefilters.unshift(t) : z.prefilters.push(t)
            }
        }), ft.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? ft.extend({}, t) : {
                complete: n || !n && e || ft.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ft.isFunction(e) && e
            };
            return i.duration = ft.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ft.fx.speeds ? ft.fx.speeds[i.duration] : ft.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
            }, i
        }, ft.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Wt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = ft.isEmptyObject(t),
                    o = ft.speed(e, n, i),
                    a = function() {
                        var e = z(this, ft.extend({}, t), o);
                        (r || ft._data(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = ft.timers,
                        a = ft._data(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && Te.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    !e && n || ft.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = ft._data(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = ft.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, ft.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ft.each(["toggle", "show", "hide"], function(t, e) {
            var n = ft.fn[e];
            ft.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(H(e, !0), t, i, r)
            }
        }), ft.each({
            slideDown: H("show"),
            slideUp: H("hide"),
            slideToggle: H("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ft.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ft.timers = [], ft.fx.tick = function() {
            var t, e = ft.timers,
                n = 0;
            for (Ce = ft.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || ft.fx.stop(), Ce = void 0
        }, ft.fx.timer = function(t) {
            ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
        }, ft.fx.interval = 13, ft.fx.start = function() {
            De || (De = t.setInterval(ft.fx.tick, ft.fx.interval))
        }, ft.fx.stop = function() {
            t.clearInterval(De), De = null
        }, ft.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ft.fn.delay = function(e, n) {
            return e = ft.fx ? ft.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function() {
                    t.clearTimeout(r)
                }
            })
        },
        function() {
            var t, e = it.createElement("input"),
                n = it.createElement("div"),
                i = it.createElement("select"),
                r = i.appendChild(it.createElement("option"));
            n = it.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), t = n.getElementsByTagName("a")[0], t.style.cssText = "top:1px", ct.getSetAttribute = "t" !== n.className, ct.style = /top/.test(t.getAttribute("style")), ct.hrefNormalized = "/a" === t.getAttribute("href"), ct.checkOn = !!e.value, ct.optSelected = r.selected, ct.enctype = !!it.createElement("form").enctype, i.disabled = !0, ct.optDisabled = !r.disabled, e = it.createElement("input"), e.setAttribute("value", ""), ct.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ct.radioValue = "t" === e.value
        }();
    var Oe = /\r/g,
        Ae = /[\x20\t\r\n\f]+/g;
    ft.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0]; {
                if (arguments.length) return i = ft.isFunction(t), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, ft(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ft.isArray(r) && (r = ft.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r) return e = ft.valHooks[r.type] || ft.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Oe, "") : null == n ? "" : n)
            }
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : ft.trim(ft.text(t)).replace(Ae, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                        if (n = i[l], (n.selected || l === r) && (ct.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ft(n).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = ft.makeArray(e), a = r.length; a--;)
                        if (i = r[a], ft.inArray(ft.valHooks.option.get(i), o) > -1) try {
                            i.selected = n = !0
                        } catch (t) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), ft.each(["radio", "checkbox"], function() {
        ft.valHooks[this] = {
            set: function(t, e) {
                if (ft.isArray(e)) return t.checked = ft.inArray(ft(t).val(), e) > -1
            }
        }, ct.checkOn || (ft.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Pe, Ie, Fe = ft.expr.attrHandle,
        Ee = /^(?:checked|selected)$/i,
        Le = ct.getSetAttribute,
        Re = ct.input;
    ft.fn.extend({
        attr: function(t, e) {
            return Ht(this, ft.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ft.removeAttr(this, t)
            })
        }
    }), ft.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === o && ft.isXMLDoc(t) || (e = e.toLowerCase(), r = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? Ie : Pe)), void 0 !== n ? null === n ? void ft.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = ft.find.attr(t, e), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ct.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                o = e && e.match(Ot);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = ft.propFix[n] || n, ft.expr.match.bool.test(n) ? Re && Le || !Ee.test(n) ? t[i] = !1 : t[ft.camelCase("default-" + n)] = t[i] = !1 : ft.attr(t, n, ""), t.removeAttribute(Le ? n : i)
        }
    }), Ie = {
        set: function(t, e, n) {
            return e === !1 ? ft.removeAttr(t, n) : Re && Le || !Ee.test(n) ? t.setAttribute(!Le && ft.propFix[n] || n, n) : t[ft.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = Fe[e] || ft.find.attr;
        Re && Le || !Ee.test(e) ? Fe[e] = function(t, e, i) {
            var r, o;
            return i || (o = Fe[e], Fe[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Fe[e] = o), r
        } : Fe[e] = function(t, e, n) {
            if (!n) return t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Re && Le || (ft.attrHooks.value = {
        set: function(t, e, n) {
            return ft.nodeName(t, "input") ? void(t.defaultValue = e) : Pe && Pe.set(t, e, n)
        }
    }), Le || (Pe = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n)) return e
        }
    }, Fe.id = Fe.name = Fe.coords = function(t, e, n) {
        var i;
        if (!n) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, ft.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            if (n && n.specified) return n.value
        },
        set: Pe.set
    }, ft.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Pe.set(t, "" !== e && e, n)
        }
    }, ft.each(["width", "height"], function(t, e) {
        ft.attrHooks[e] = {
            set: function(t, n) {
                if ("" === n) return t.setAttribute(e, "auto"), n
            }
        }
    })), ct.style || (ft.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var $e = /^(?:input|select|textarea|button|object)$/i,
        We = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function(t, e) {
            return Ht(this, ft.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = ft.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (t) {}
            })
        }
    }), ft.extend({
        prop: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, r = ft.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : $e.test(t.nodeName) || We.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ct.hrefNormalized || ft.each(["href", "src"], function(t, e) {
        ft.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ct.optSelected || (ft.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ft.propFix[this.toLowerCase()] = this
    }), ct.enctype || (ft.propFix.enctype = "encoding");
    var He = /[\t\r\n\f]/g;
    ft.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, a, s, l = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).addClass(t.call(this, e, V(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(Ot) || []; n = this[l++];)
                    if (r = V(n), i = 1 === n.nodeType && (" " + r + " ").replace(He, " ")) {
                        for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = ft.trim(i), r !== s && ft.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, a, s, l = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).removeClass(t.call(this, e, V(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Ot) || []; n = this[l++];)
                    if (r = V(n), i = 1 === n.nodeType && (" " + r + " ").replace(He, " ")) {
                        for (a = 0; o = e[a++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        s = ft.trim(i), r !== s && ft.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(n) {
                ft(this).toggleClass(t.call(this, n, V(this), e), e)
            }) : this.each(function() {
                var e, i, r, o;
                if ("string" === n)
                    for (i = 0, r = ft(this), o = t.match(Ot) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else void 0 !== t && "boolean" !== n || (e = V(this), e && ft._data(this, "__className__", e), ft.attr(this, "class", e || t === !1 ? "" : ft._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + V(n) + " ").replace(He, " ").indexOf(e) > -1) return !0;
            return !1
        }
    }), ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ft.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ft.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Ne = t.location,
        je = ft.now(),
        Ye = /\?/,
        ze = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ft.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
            r = ft.trim(e + "");
        return r && !ft.trim(r.replace(ze, function(t, e, r, o) {
            return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
        })) ? Function("return " + r)() : ft.error("Invalid JSON: " + e)
    }, ft.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new t.DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (t) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), n
    };
    var Ve = /#.*$/,
        Be = /([?&])_=[^&]*/,
        qe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ue = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ge = /^(?:GET|HEAD)$/,
        Ze = /^\/\//,
        Qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Xe = {},
        Je = {},
        Ke = "*/".concat("*"),
        tn = Ne.href,
        en = Qe.exec(tn.toLowerCase()) || [];
    ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tn,
            type: "GET",
            isLocal: Ue.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ke,
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
                "text json": ft.parseJSON,
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? U(U(t, ft.ajaxSettings), e) : U(ft.ajaxSettings, t)
        },
        ajaxPrefilter: B(Xe),
        ajaxTransport: B(Je),
        ajax: function(e, n) {
            function i(e, n, i, r) {
                var o, c, y, b, w, k = n;
                2 !== x && (x = 2, l && t.clearTimeout(l), u = void 0, s = r || "", _.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, i && (b = G(h, _, i)), b = Z(h, b, _, o), o ? (h.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (ft.lastModified[a] = w), w = _.getResponseHeader("etag"), w && (ft.etag[a] = w)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, c = b.data, y = b.error, o = !y)) : (y = k, !e && k || (k = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (n || k) + "", o ? g.resolveWith(f, [c, k, _]) : g.rejectWith(f, [_, k, y]), _.statusCode(v), v = void 0, d && p.trigger(o ? "ajaxSuccess" : "ajaxError", [_, h, o ? c : y]), m.fireWith(f, [_, k]), d && (p.trigger("ajaxComplete", [_, h]), --ft.active || ft.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, o, a, s, l, d, u, c, h = ft.ajaxSetup({}, n),
                f = h.context || h,
                p = h.context && (f.nodeType || f.jquery) ? ft(f) : ft.event,
                g = ft.Deferred(),
                m = ft.Callbacks("once memory"),
                v = h.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!c)
                                for (c = {}; e = qe.exec(s);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return x || (t = b[n] = b[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return x || (h.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (x < 2)
                                for (e in t) v[e] = [v[e], t[e]];
                            else _.always(t[_.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return u && u.abort(e), i(0, e), this
                    }
                };
            if (g.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, h.url = ((e || h.url || tn) + "").replace(Ve, "").replace(Ze, en[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ft.trim(h.dataType || "*").toLowerCase().match(Ot) || [""], null == h.crossDomain && (r = Qe.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === en[1] && r[2] === en[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ft.param(h.data, h.traditional)), q(Xe, h, n, _), 2 === x) return _;
            d = ft.event && h.global, d && 0 === ft.active++ && ft.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ge.test(h.type), a = h.url, h.hasContent || (h.data && (a = h.url += (Ye.test(a) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Be.test(a) ? a.replace(Be, "$1_=" + je++) : a + (Ye.test(a) ? "&" : "?") + "_=" + je++)), h.ifModified && (ft.lastModified[a] && _.setRequestHeader("If-Modified-Since", ft.lastModified[a]), ft.etag[a] && _.setRequestHeader("If-None-Match", ft.etag[a])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", h.contentType), _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ke + "; q=0.01" : "") : h.accepts["*"]);
            for (o in h.headers) _.setRequestHeader(o, h.headers[o]);
            if (h.beforeSend && (h.beforeSend.call(f, _, h) === !1 || 2 === x)) return _.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[o](h[o]);
            if (u = q(Je, h, n, _)) {
                if (_.readyState = 1, d && p.trigger("ajaxSend", [_, h]), 2 === x) return _;
                h.async && h.timeout > 0 && (l = t.setTimeout(function() {
                    _.abort("timeout")
                }, h.timeout));
                try {
                    x = 1, u.send(y, i)
                } catch (t) {
                    if (!(x < 2)) throw t;
                    i(-1, t)
                }
            } else i(-1, "No Transport");
            return _
        },
        getJSON: function(t, e, n) {
            return ft.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return ft.get(t, void 0, e, "script")
        }
    }), ft.each(["get", "post"], function(t, e) {
        ft[e] = function(t, n, i, r) {
            return ft.isFunction(n) && (r = r || i, i = n, n = void 0), ft.ajax(ft.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, ft.isPlainObject(t) && t))
        }
    }), ft._evalUrl = function(t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ft.fn.extend({
        wrapAll: function(t) {
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = ft(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return ft.isFunction(t) ? this.each(function(e) {
                ft(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ft(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ft.isFunction(t);
            return this.each(function(n) {
                ft(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ft.expr.filters.hidden = function(t) {
        return ct.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : X(t)
    }, ft.expr.filters.visible = function(t) {
        return !ft.expr.filters.hidden(t)
    };
    var nn = /%20/g,
        rn = /\[\]$/,
        on = /\r?\n/g,
        an = /^(?:submit|button|image|reset|file)$/i,
        sn = /^(?:input|select|textarea|keygen)/i;
    ft.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = ft.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = ft.ajaxSettings && ft.ajaxSettings.traditional), ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) J(n, t[n], e, r);
        return i.join("&").replace(nn, "+")
    }, ft.fn.extend({
        serialize: function() {
            return ft.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && sn.test(this.nodeName) && !an.test(t) && (this.checked || !Nt.test(t))
            }).map(function(t, e) {
                var n = ft(this).val();
                return null == n ? null : ft.isArray(n) ? ft.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(on, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), ft.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return this.isLocal ? tt() : it.documentMode > 8 ? K() : /^(get|post|head|put|delete|options)$/i.test(this.type) && K() || tt()
    } : K;
    var ln = 0,
        dn = {},
        un = ft.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in dn) dn[t](void 0, !0)
    }), ct.cors = !!un && "withCredentials" in un, un = ct.ajax = !!un, un && ft.ajaxTransport(function(e) {
        if (!e.crossDomain || ct.cors) {
            var n;
            return {
                send: function(i, r) {
                    var o, a = e.xhr(),
                        s = ++ln;
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i) void 0 !== i[o] && a.setRequestHeader(o, i[o] + "");
                    a.send(e.hasContent && e.data || null), n = function(t, i) {
                        var o, l, d;
                        if (n && (i || 4 === a.readyState))
                            if (delete dn[s], n = void 0, a.onreadystatechange = ft.noop, i) 4 !== a.readyState && a.abort();
                            else {
                                d = {}, o = a.status, "string" == typeof a.responseText && (d.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (t) {
                                    l = ""
                                }
                                o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = d.text ? 200 : 404
                            }
                        d && r(o, l, d, a.getAllResponseHeaders())
                    }, e.async ? 4 === a.readyState ? t.setTimeout(n) : a.onreadystatechange = dn[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }), ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ft.globalEval(t), t
            }
        }
    }), ft.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ft.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = it.head || ft("head")[0] || it.documentElement;
            return {
                send: function(i, r) {
                    e = it.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var cn = [],
        hn = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = cn.pop() || ft.expando + "_" + je++;
            return this[t] = !0, t
        }
    }), ft.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, a, s = e.jsonp !== !1 && (hn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(hn, "$1" + r) : e.jsonp !== !1 && (e.url += (Ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return a || ft.error(r + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            a = arguments
        }, i.always(function() {
            void 0 === o ? ft(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, cn.push(r)), a && ft.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), ft.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || it;
        var i = _t.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = v([t], e, r), r && r.length && ft(r).remove(), ft.merge([], i.childNodes))
    };
    var fn = ft.fn.load;
    ft.fn.load = function(t, e, n) {
        if ("string" != typeof t && fn) return fn.apply(this, arguments);
        var i, r, o, a = this,
            s = t.indexOf(" ");
        return s > -1 && (i = ft.trim(t.slice(s, t.length)), t = t.slice(0, s)), ft.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && ft.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, a.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            a.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ft.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ft.expr.filters.animated = function(t) {
        return ft.grep(ft.timers, function(e) {
            return t === e.elem
        }).length
    }, ft.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, a, s, l, d, u = ft.css(t, "position"),
                c = ft(t),
                h = {};
            "static" === u && (t.style.position = "relative"), s = c.offset(), o = ft.css(t, "top"), l = ft.css(t, "left"), d = ("absolute" === u || "fixed" === u) && ft.inArray("auto", [o, l]) > -1, d ? (i = c.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, s))), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + r), "using" in e ? e.using.call(t, h) : c.css(h)
        }
    }, ft.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ft.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            if (o) return e = o.documentElement, ft.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = et(o), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === ft.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (n = t.offset()), n.top += ft.css(t[0], "borderTopWidth", !0), n.left += ft.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - ft.css(i, "marginTop", !0),
                    left: e.left - n.left - ft.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position");) t = t.offsetParent;
                return t || fe
            })
        }
    }), ft.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        ft.fn[t] = function(i) {
            return Ht(this, function(t, i, r) {
                var o = et(t);
                return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? ft(o).scrollLeft() : r, n ? r : ft(o).scrollTop()) : t[i] = r)
            }, t, i, arguments.length, null)
        }
    }), ft.each(["top", "left"], function(t, e) {
        ft.cssHooks[e] = P(ct.pixelPosition, function(t, n) {
            if (n) return n = ge(t, e), ce.test(n) ? ft(t).position()[e] + "px" : n
        })
    }), ft.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ft.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            ft.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin" : "border");
                return Ht(this, function(e, n, i) {
                    var r;
                    return ft.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? ft.css(e, n, a) : ft.style(e, n, i, a)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), ft.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), ft.fn.size = function() {
        return this.length
    }, ft.fn.andSelf = ft.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ft
    });
    var pn = t.jQuery,
        gn = t.$;
    return ft.noConflict = function(e) {
        return t.$ === ft && (t.$ = gn), e && t.jQuery === ft && (t.jQuery = pn), ft
    }, e || (t.jQuery = t.$ = ft), ft
}),
function(t, e) {
    "use strict";
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return t("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return t("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(t) {
            var e = n.csrfToken();
            e && t.setRequestHeader("X-CSRF-Token", e)
        },
        refreshCSRFTokens: function() {
            t('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(e, n, i) {
            var r = t.Event(n);
            return e.trigger(r, i), r.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t[0].href
        },
        isRemote: function(t) {
            return t.data("remote") !== e && t.data("remote") !== !1
        },
        handleRemote: function(i) {
            var r, o, a, s, l, d;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    r = i.data("ujs:submit-button-formmethod") || i.attr("method"), o = i.data("ujs:submit-button-formaction") || i.attr("action"), a = t(i[0]).serializeArray();
                    var u = i.data("ujs:submit-button");
                    u && (a.push(u), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), a = i.data("params") || null);
                return d = {
                    type: r || "GET",
                    data: a,
                    dataType: l,
                    beforeSend: function(t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), !!n.fire(i, "ajax:beforeSend", [t, r]) && void i.trigger("ajax:send", t)
                    },
                    success: function(t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, s && (d.xhrFields = {
                    withCredentials: s
                }), o && (d.url = o), n.ajax(d)
            }
            return !1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
            } catch (t) {
                return !0
            }
        },
        handleMethod: function(i) {
            var r = n.href(i),
                o = i.data("method"),
                a = i.attr("target"),
                s = n.csrfToken(),
                l = n.csrfParam(),
                d = t('<form method="post" action="' + r + '"></form>'),
                u = '<input name="_method" value="' + o + '" type="hidden" />';
            l === e || s === e || n.isCrossDomain(r) || (u += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && d.attr("target", a), d.hide().append(u).appendTo("body"), d.submit()
        },
        formElements: function(e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        },
        disableFormElements: function(e) {
            n.formElements(e, n.disableSelector).each(function() {
                n.disableFormElement(t(this))
            })
        },
        disableFormElement: function(t) {
            var n, i;
            n = t.is("button") ? "html" : "val", i = t.data("disable-with"), i !== e && (t.data("ujs:enable-with", t[n]()), t[n](i)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
        },
        enableFormElements: function(e) {
            n.formElements(e, n.enableSelector).each(function() {
                n.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var n = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") !== e && (t[n](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled")
        },
        allowAction: function(t) {
            var e, i = t.data("confirm"),
                r = !1;
            if (!i) return !0;
            if (n.fire(t, "confirm")) {
                try {
                    r = n.confirm(i)
                } catch (t) {
                    (console.error || console.log).call(console, t.stack || t)
                }
                e = n.fire(t, "confirm:complete", [r])
            }
            return r && e
        },
        blankInputs: function(e, n, i) {
            var r, o, a, s, l = t(),
                d = n || "input,textarea",
                u = e.find(d),
                c = {};
            return u.each(function() {
                r = t(this), r.is("input[type=radio]") ? (s = r.attr("name"), c[s] || (0 === e.find('input[type=radio]:checked[name="' + s + '"]').length && (a = e.find('input[type=radio][name="' + s + '"]'), l = l.add(a)), c[s] = s)) : (o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val(), o === i && (l = l.add(r)))
            }), !!l.length && l
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var i = t.data("disable-with");
            i !== e && (t.data("ujs:enable-with", t.html()), t.html(i)), t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            }), t.data("ujs:disabled", !0)
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), t(window).on("pageshow.rails", function() {
        t(t.rails.enableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableFormElement(e)
        }), t(t.rails.linkDisableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableElement(e)
        })
    }), i.on("ajax:complete", n.linkDisableSelector, function() {
        n.enableElement(t(this))
    }), i.on("ajax:complete", n.buttonDisableSelector, function() {
        n.enableFormElement(t(this))
    }), i.on("click.rails", n.linkClickSelector, function(e) {
        var i = t(this),
            r = i.data("method"),
            o = i.data("params"),
            a = e.metaKey || e.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(e);
        if (!a && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (a && (!r || "GET" === r) && !o) return !0;
            var s = n.handleRemote(i);
            return s === !1 ? n.enableElement(i) : s.fail(function() {
                n.enableElement(i)
            }), !1
        }
        return r ? (n.handleMethod(i), !1) : void 0
    }), i.on("click.rails", n.buttonClickSelector, function(e) {
        var i = t(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(e);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return r === !1 ? n.enableFormElement(i) : r.fail(function() {
            n.enableFormElement(i)
        }), !1
    }), i.on("change.rails", n.inputChangeSelector, function(e) {
        var i = t(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.on("submit.rails", n.formSubmitSelector, function(i) {
        var r, o, a = t(this),
            s = n.isRemote(a);
        if (!n.allowAction(a)) return n.stopEverything(i);
        if (a.attr("novalidate") === e)
            if (a.data("ujs:formnovalidate-button") === e) {
                if (r = n.blankInputs(a, n.requiredInputSelector, !1), r && n.fire(a, "ajax:aborted:required", [r])) return n.stopEverything(i)
            } else a.data("ujs:formnovalidate-button", e);
        if (s) {
            if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(a)
                }, 13);
                var l = n.fire(a, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    n.enableFormElements(a)
                }, 13), l
            }
            return n.handleRemote(a), !1
        }
        setTimeout(function() {
            n.disableFormElements(a)
        }, 13)
    }), i.on("click.rails", n.formInputClickSelector, function(e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        var r = i.attr("name"),
            o = r ? {
                name: r,
                value: i.val()
            } : null,
            a = i.closest("form");
        0 === a.length && (a = t("#" + i.attr("form"))), a.data("ujs:submit-button", o), a.data("ujs:formnovalidate-button", i.attr("formnovalidate")), a.data("ujs:submit-button-formaction", i.attr("formaction")), a.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }), i.on("ajax:send.rails", n.formSubmitSelector, function(e) {
        this === e.target && n.disableFormElements(t(this))
    }), i.on("ajax:complete.rails", n.formSubmitSelector, function(e) {
        this === e.target && n.enableFormElements(t(this))
    }), t(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery);
var hoverOutTimer = null;
jQuery(document).ready(function(t) {
        "use strict";
        t(".menulink a").click(function() {
            jQuery("nav").stop(!0, !0).fadeToggle("fast")
        }), resize_intro(), jQuery(".left section").stop(!0, !0).fadeIn("fast"), jQuery(".right section").stop(!0, !0).fadeIn("fast")
    }), jQuery(window).resize(function() {
        "use strict";
        resize_intro()
    }), jQuery(document).ready(function(t) {
        t("select#country").select2()
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
    }(function(t) {
        var e = function() {
                if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var e = t.fn.select2.amd;
                var e;
                return function() {
                    if (!e || !e.requirejs) {
                        e ? n = e : e = {};
                        var t, n, i;
                        ! function(e) {
                            function r(t, e) {
                                return x.call(t, e)
                            }

                            function o(t, e) {
                                var n, i, r, o, a, s, l, d, u, c, h, f = e && e.split("/"),
                                    p = y.map,
                                    g = p && p["*"] || {};
                                if (t && "." === t.charAt(0))
                                    if (e) {
                                        for (t = t.split("/"), a = t.length - 1, y.nodeIdCompat && _.test(t[a]) && (t[a] = t[a].replace(_, "")), t = f.slice(0, f.length - 1).concat(t), u = 0; u < t.length; u += 1)
                                            if (h = t[u], "." === h) t.splice(u, 1), u -= 1;
                                            else if (".." === h) {
                                            if (1 === u && (".." === t[2] || ".." === t[0])) break;
                                            u > 0 && (t.splice(u - 1, 2), u -= 2)
                                        }
                                        t = t.join("/")
                                    } else 0 === t.indexOf("./") && (t = t.substring(2));
                                if ((f || g) && p) {
                                    for (n = t.split("/"), u = n.length; u > 0; u -= 1) {
                                        if (i = n.slice(0, u).join("/"), f)
                                            for (c = f.length; c > 0; c -= 1)
                                                if (r = p[f.slice(0, c).join("/")], r && (r = r[i])) {
                                                    o = r, s = u;
                                                    break
                                                }
                                        if (o) break;
                                        !l && g && g[i] && (l = g[i], d = u)
                                    }!o && l && (o = l, s = d), o && (n.splice(0, s, o), t = n.join("/"))
                                }
                                return t
                            }

                            function a(t, n) {
                                return function() {
                                    var i = w.call(arguments, 0);
                                    return "string" != typeof i[0] && 1 === i.length && i.push(null), f.apply(e, i.concat([t, n]))
                                }
                            }

                            function s(t) {
                                return function(e) {
                                    return o(e, t)
                                }
                            }

                            function l(t) {
                                return function(e) {
                                    m[t] = e
                                }
                            }

                            function d(t) {
                                if (r(v, t)) {
                                    var n = v[t];
                                    delete v[t], b[t] = !0, h.apply(e, n)
                                }
                                if (!r(m, t) && !r(b, t)) throw new Error("No " + t);
                                return m[t]
                            }

                            function u(t) {
                                var e, n = t ? t.indexOf("!") : -1;
                                return n > -1 && (e = t.substring(0, n), t = t.substring(n + 1, t.length)), [e, t]
                            }

                            function c(t) {
                                return function() {
                                    return y && y.config && y.config[t] || {}
                                }
                            }
                            var h, f, p, g, m = {},
                                v = {},
                                y = {},
                                b = {},
                                x = Object.prototype.hasOwnProperty,
                                w = [].slice,
                                _ = /\.js$/;
                            p = function(t, e) {
                                var n, i = u(t),
                                    r = i[0];
                                return t = i[1], r && (r = o(r, e), n = d(r)), r ? t = n && n.normalize ? n.normalize(t, s(e)) : o(t, e) : (t = o(t, e), i = u(t), r = i[0], t = i[1], r && (n = d(r))), {
                                    f: r ? r + "!" + t : t,
                                    n: t,
                                    pr: r,
                                    p: n
                                }
                            }, g = {
                                require: function(t) {
                                    return a(t)
                                },
                                exports: function(t) {
                                    var e = m[t];
                                    return "undefined" != typeof e ? e : m[t] = {}
                                },
                                module: function(t) {
                                    return {
                                        id: t,
                                        uri: "",
                                        exports: m[t],
                                        config: c(t)
                                    }
                                }
                            }, h = function(t, n, i, o) {
                                var s, u, c, h, f, y, x = [],
                                    w = typeof i;
                                if (o = o || t, "undefined" === w || "function" === w) {
                                    for (n = !n.length && i.length ? ["require", "exports", "module"] : n, f = 0; f < n.length; f += 1)
                                        if (h = p(n[f], o), u = h.f, "require" === u) x[f] = g.require(t);
                                        else if ("exports" === u) x[f] = g.exports(t), y = !0;
                                    else if ("module" === u) s = x[f] = g.module(t);
                                    else if (r(m, u) || r(v, u) || r(b, u)) x[f] = d(u);
                                    else {
                                        if (!h.p) throw new Error(t + " missing " + u);
                                        h.p.load(h.n, a(o, !0), l(u), {}), x[f] = m[u]
                                    }
                                    c = i ? i.apply(m[t], x) : void 0, t && (s && s.exports !== e && s.exports !== m[t] ? m[t] = s.exports : c === e && y || (m[t] = c))
                                } else t && (m[t] = i)
                            }, t = n = f = function(t, n, i, r, o) {
                                if ("string" == typeof t) return g[t] ? g[t](n) : d(p(t, n).f);
                                if (!t.splice) {
                                    if (y = t, y.deps && f(y.deps, y.callback), !n) return;
                                    n.splice ? (t = n, n = i, i = null) : t = e
                                }
                                return n = n || function() {}, "function" == typeof i && (i = r, r = o), r ? h(e, t, n, i) : setTimeout(function() {
                                    h(e, t, n, i)
                                }, 4), f
                            }, f.config = function(t) {
                                return f(t)
                            }, t._defined = m, i = function(t, e, n) {
                                if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                                e.splice || (n = e, e = []), r(m, t) || r(v, t) || (v[t] = [t, e, n])
                            }, i.amd = {
                                jQuery: !0
                            }
                        }(), e.requirejs = t, e.require = n, e.define = i
                    }
                }(), e.define("almond", function() {}), e.define("jquery", [], function() {
                    var e = t || $;
                    return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
                }), e.define("select2/utils", ["jquery"], function(t) {
                    function e(t) {
                        var e = t.prototype,
                            n = [];
                        for (var i in e) {
                            var r = e[i];
                            "function" == typeof r && "constructor" !== i && n.push(i)
                        }
                        return n
                    }
                    var n = {};
                    n.Extend = function(t, e) {
                        function n() {
                            this.constructor = t
                        }
                        var i = {}.hasOwnProperty;
                        for (var r in e) i.call(e, r) && (t[r] = e[r]);
                        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                    }, n.Decorate = function(t, n) {
                        function i() {
                            var e = Array.prototype.unshift,
                                i = n.prototype.constructor.length,
                                r = t.prototype.constructor;
                            i > 0 && (e.call(arguments, t.prototype.constructor), r = n.prototype.constructor), r.apply(this, arguments)
                        }

                        function r() {
                            this.constructor = i
                        }
                        var o = e(n),
                            a = e(t);
                        n.displayName = t.displayName, i.prototype = new r;
                        for (var s = 0; s < a.length; s++) {
                            var l = a[s];
                            i.prototype[l] = t.prototype[l]
                        }
                        for (var d = (function(t) {
                                var e = function() {};
                                t in i.prototype && (e = i.prototype[t]);
                                var r = n.prototype[t];
                                return function() {
                                    var t = Array.prototype.unshift;
                                    return t.call(arguments, e), r.apply(this, arguments)
                                }
                            }), u = 0; u < o.length; u++) {
                            var c = o[u];
                            i.prototype[c] = d(c)
                        }
                        return i
                    };
                    var i = function() {
                        this.listeners = {}
                    };
                    return i.prototype.on = function(t, e) {
                        this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
                    }, i.prototype.trigger = function(t) {
                        var e = Array.prototype.slice,
                            n = e.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = t, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, i.prototype.invoke = function(t, e) {
                        for (var n = 0, i = t.length; n < i; n++) t[n].apply(this, e)
                    }, n.Observable = i, n.generateChars = function(t) {
                        for (var e = "", n = 0; n < t; n++) {
                            var i = Math.floor(36 * Math.random());
                            e += i.toString(36)
                        }
                        return e
                    }, n.bind = function(t, e) {
                        return function() {
                            t.apply(e, arguments)
                        }
                    }, n._convertData = function(t) {
                        for (var e in t) {
                            var n = e.split("-"),
                                i = t;
                            if (1 !== n.length) {
                                for (var r = 0; r < n.length; r++) {
                                    var o = n[r];
                                    o = o.substring(0, 1).toLowerCase() + o.substring(1), o in i || (i[o] = {}), r == n.length - 1 && (i[o] = t[e]), i = i[o]
                                }
                                delete t[e]
                            }
                        }
                        return t
                    }, n.hasScroll = function(e, n) {
                        var i = t(n),
                            r = n.style.overflowX,
                            o = n.style.overflowY;
                        return (r !== o || "hidden" !== o && "visible" !== o) && ("scroll" === r || "scroll" === o || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth))
                    }, n.escapeMarkup = function(t) {
                        var e = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function(t) {
                            return e[t]
                        })
                    }, n.appendMany = function(e, n) {
                        if ("1.7" === t.fn.jquery.substr(0, 3)) {
                            var i = t();
                            t.map(n, function(t) {
                                i = i.add(t)
                            }), n = i
                        }
                        e.append(n)
                    }, n
                }), e.define("select2/results", ["jquery", "./utils"], function(t, e) {
                    function n(t, e, i) {
                        this.$element = t, this.data = i, this.options = e, n.__super__.constructor.call(this)
                    }
                    return e.Extend(n, e.Observable), n.prototype.render = function() {
                        var e = t('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e
                    }, n.prototype.clear = function() {
                        this.$results.empty()
                    }, n.prototype.displayMessage = function(e) {
                        var n = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var i = t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            r = this.options.get("translations").get(e.message);
                        i.append(n(r(e.args))), i[0].className += " select2-results__message", this.$results.append(i)
                    }, n.prototype.hideMessages = function() {
                        this.$results.find(".select2-results__message").remove()
                    }, n.prototype.append = function(t) {
                        this.hideLoading();
                        var e = [];
                        if (null == t.results || 0 === t.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        }));
                        t.results = this.sort(t.results);
                        for (var n = 0; n < t.results.length; n++) {
                            var i = t.results[n],
                                r = this.option(i);
                            e.push(r)
                        }
                        this.$results.append(e)
                    }, n.prototype.position = function(t, e) {
                        var n = e.find(".select2-results");
                        n.append(t)
                    }, n.prototype.sort = function(t) {
                        var e = this.options.get("sorter");
                        return e(t)
                    }, n.prototype.highlightFirstItem = function() {
                        var t = this.$results.find(".select2-results__option[aria-selected]"),
                            e = t.filter("[aria-selected=true]");
                        e.length > 0 ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, n.prototype.setClasses = function() {
                        var e = this;
                        this.data.current(function(n) {
                            var i = t.map(n, function(t) {
                                    return t.id.toString()
                                }),
                                r = e.$results.find(".select2-results__option[aria-selected]");
                            r.each(function() {
                                var e = t(this),
                                    n = t.data(this, "data"),
                                    r = "" + n.id;
                                null != n.element && n.element.selected || null == n.element && t.inArray(r, i) > -1 ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                            })
                        })
                    }, n.prototype.showLoading = function(t) {
                        this.hideLoading();
                        var e = this.options.get("translations").get("searching"),
                            n = {
                                disabled: !0,
                                loading: !0,
                                text: e(t)
                            },
                            i = this.option(n);
                        i.className += " loading-results", this.$results.prepend(i)
                    }, n.prototype.hideLoading = function() {
                        this.$results.find(".loading-results").remove()
                    }, n.prototype.option = function(e) {
                        var n = document.createElement("li");
                        n.className = "select2-results__option";
                        var i = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        e.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == e.id && delete i["aria-selected"], null != e._resultId && (n.id = e._resultId), e.title && (n.title = e.title), e.children && (i.role = "group", i["aria-label"] = e.text, delete i["aria-selected"]);
                        for (var r in i) {
                            var o = i[r];
                            n.setAttribute(r, o)
                        }
                        if (e.children) {
                            var a = t(n),
                                s = document.createElement("strong");
                            s.className = "select2-results__group";
                            t(s);
                            this.template(e, s);
                            for (var l = [], d = 0; d < e.children.length; d++) {
                                var u = e.children[d],
                                    c = this.option(u);
                                l.push(c)
                            }
                            var h = t("<ul></ul>", {
                                "class": "select2-results__options select2-results__options--nested"
                            });
                            h.append(l), a.append(s), a.append(h)
                        } else this.template(e, n);
                        return t.data(n, "data", e), n
                    }, n.prototype.bind = function(e) {
                        var n = this,
                            i = e.id + "-results";
                        this.$results.attr("id", i), e.on("results:all", function(t) {
                            n.clear(), n.append(t.data), e.isOpen() && (n.setClasses(), n.highlightFirstItem())
                        }), e.on("results:append", function(t) {
                            n.append(t.data), e.isOpen() && n.setClasses()
                        }), e.on("query", function(t) {
                            n.hideMessages(), n.showLoading(t)
                        }), e.on("select", function() {
                            e.isOpen() && (n.setClasses(), n.highlightFirstItem())
                        }), e.on("unselect", function() {
                            e.isOpen() && (n.setClasses(), n.highlightFirstItem())
                        }), e.on("open", function() {
                            n.$results.attr("aria-expanded", "true"), n.$results.attr("aria-hidden", "false"), n.setClasses(), n.ensureHighlightVisible()
                        }), e.on("close", function() {
                            n.$results.attr("aria-expanded", "false"), n.$results.attr("aria-hidden", "true"), n.$results.removeAttr("aria-activedescendant")
                        }), e.on("results:toggle", function() {
                            var t = n.getHighlightedResults();
                            0 !== t.length && t.trigger("mouseup")
                        }), e.on("results:select", function() {
                            var t = n.getHighlightedResults();
                            if (0 !== t.length) {
                                var e = t.data("data");
                                "true" == t.attr("aria-selected") ? n.trigger("close", {}) : n.trigger("select", {
                                    data: e
                                })
                            }
                        }), e.on("results:previous", function() {
                            var t = n.getHighlightedResults(),
                                e = n.$results.find("[aria-selected]"),
                                i = e.index(t);
                            if (0 !== i) {
                                var r = i - 1;
                                0 === t.length && (r = 0);
                                var o = e.eq(r);
                                o.trigger("mouseenter");
                                var a = n.$results.offset().top,
                                    s = o.offset().top,
                                    l = n.$results.scrollTop() + (s - a);
                                0 === r ? n.$results.scrollTop(0) : s - a < 0 && n.$results.scrollTop(l)
                            }
                        }), e.on("results:next", function() {
                            var t = n.getHighlightedResults(),
                                e = n.$results.find("[aria-selected]"),
                                i = e.index(t),
                                r = i + 1;
                            if (!(r >= e.length)) {
                                var o = e.eq(r);
                                o.trigger("mouseenter");
                                var a = n.$results.offset().top + n.$results.outerHeight(!1),
                                    s = o.offset().top + o.outerHeight(!1),
                                    l = n.$results.scrollTop() + s - a;
                                0 === r ? n.$results.scrollTop(0) : s > a && n.$results.scrollTop(l)
                            }
                        }), e.on("results:focus", function(t) {
                            t.element.addClass("select2-results__option--highlighted")
                        }), e.on("results:message", function(t) {
                            n.displayMessage(t)
                        }), t.fn.mousewheel && this.$results.on("mousewheel", function(t) {
                            var e = n.$results.scrollTop(),
                                i = n.$results.get(0).scrollHeight - e + t.deltaY,
                                r = t.deltaY > 0 && e - t.deltaY <= 0,
                                o = t.deltaY < 0 && i <= n.$results.height();
                            r ? (n.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : o && (n.$results.scrollTop(n.$results.get(0).scrollHeight - n.$results.height()), t.preventDefault(), t.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(e) {
                            var i = t(this),
                                r = i.data("data");
                            return "true" === i.attr("aria-selected") ? void(n.options.get("multiple") ? n.trigger("unselect", {
                                originalEvent: e,
                                data: r
                            }) : n.trigger("close", {})) : void n.trigger("select", {
                                originalEvent: e,
                                data: r
                            })
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function() {
                            var e = t(this).data("data");
                            n.getHighlightedResults().removeClass("select2-results__option--highlighted"), n.trigger("results:focus", {
                                data: e,
                                element: t(this)
                            })
                        })
                    }, n.prototype.getHighlightedResults = function() {
                        var t = this.$results.find(".select2-results__option--highlighted");
                        return t
                    }, n.prototype.destroy = function() {
                        this.$results.remove()
                    }, n.prototype.ensureHighlightVisible = function() {
                        var t = this.getHighlightedResults();
                        if (0 !== t.length) {
                            var e = this.$results.find("[aria-selected]"),
                                n = e.index(t),
                                i = this.$results.offset().top,
                                r = t.offset().top,
                                o = this.$results.scrollTop() + (r - i),
                                a = r - i;
                            o -= 2 * t.outerHeight(!1), n <= 2 ? this.$results.scrollTop(0) : (a > this.$results.outerHeight() || a < 0) && this.$results.scrollTop(o)
                        }
                    }, n.prototype.template = function(e, n) {
                        var i = this.options.get("templateResult"),
                            r = this.options.get("escapeMarkup"),
                            o = i(e, n);
                        null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : t(n).append(o)
                    }, n
                }), e.define("select2/keys", [], function() {
                    var t = {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    };
                    return t
                }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(t, e, n) {
                    function i(t, e) {
                        this.$element = t, this.options = e, i.__super__.constructor.call(this)
                    }
                    return e.Extend(i, e.Observable), i.prototype.render = function() {
                        var e = t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e, e
                    }, i.prototype.bind = function(t) {
                        var e = this,
                            i = (t.id + "-container", t.id + "-results");
                        this.container = t, this.$selection.on("focus", function(t) {
                            e.trigger("focus", t)
                        }), this.$selection.on("blur", function(t) {
                            e._handleBlur(t)
                        }), this.$selection.on("keydown", function(t) {
                            e.trigger("keypress", t), t.which === n.SPACE && t.preventDefault()
                        }), t.on("results:focus", function(t) {
                            e.$selection.attr("aria-activedescendant", t.data._resultId)
                        }), t.on("selection:update", function(t) {
                            e.update(t.data)
                        }), t.on("open", function() {
                            e.$selection.attr("aria-expanded", "true"), e.$selection.attr("aria-owns", i), e._attachCloseHandler(t)
                        }), t.on("close", function() {
                            e.$selection.attr("aria-expanded", "false"), e.$selection.removeAttr("aria-activedescendant"), e.$selection.removeAttr("aria-owns"), e.$selection.focus(), e._detachCloseHandler(t)
                        }), t.on("enable", function() {
                            e.$selection.attr("tabindex", e._tabindex)
                        }), t.on("disable", function() {
                            e.$selection.attr("tabindex", "-1")
                        })
                    }, i.prototype._handleBlur = function(e) {
                        var n = this;
                        window.setTimeout(function() {
                            document.activeElement == n.$selection[0] || t.contains(n.$selection[0], document.activeElement) || n.trigger("blur", e)
                        }, 1)
                    }, i.prototype._attachCloseHandler = function(e) {
                        t(document.body).on("mousedown.select2." + e.id, function(e) {
                            var n = t(e.target),
                                i = n.closest(".select2"),
                                r = t(".select2.select2-container--open");
                            r.each(function() {
                                var e = t(this);
                                if (this != i[0]) {
                                    var n = e.data("element");
                                    n.select2("close")
                                }
                            })
                        })
                    }, i.prototype._detachCloseHandler = function(e) {
                        t(document.body).off("mousedown.select2." + e.id)
                    }, i.prototype.position = function(t, e) {
                        var n = e.find(".selection");
                        n.append(t)
                    }, i.prototype.destroy = function() {
                        this._detachCloseHandler(this.container)
                    }, i.prototype.update = function() {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, i
                }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(t, e, n) {
                    function i() {
                        i.__super__.constructor.apply(this, arguments)
                    }
                    return n.Extend(i, e), i.prototype.render = function() {
                        var t = i.__super__.render.call(this);
                        return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
                    }, i.prototype.bind = function(t) {
                        var e = this;
                        i.__super__.bind.apply(this, arguments);
                        var n = t.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.attr("aria-labelledby", n), this.$selection.on("mousedown", function(t) {
                            1 === t.which && e.trigger("toggle", {
                                originalEvent: t
                            })
                        }), this.$selection.on("focus", function() {}), this.$selection.on("blur", function() {}), t.on("focus", function() {
                            t.isOpen() || e.$selection.focus()
                        }), t.on("selection:update", function(t) {
                            e.update(t.data)
                        })
                    }, i.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, i.prototype.display = function(t, e) {
                        var n = this.options.get("templateSelection"),
                            i = this.options.get("escapeMarkup");
                        return i(n(t, e))
                    }, i.prototype.selectionContainer = function() {
                        return t("<span></span>")
                    }, i.prototype.update = function(t) {
                        if (0 === t.length) return void this.clear();
                        var e = t[0],
                            n = this.$selection.find(".select2-selection__rendered"),
                            i = this.display(e, n);
                        n.empty().append(i), n.prop("title", e.title || e.text)
                    }, i
                }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(t, e, n) {
                    function i() {
                        i.__super__.constructor.apply(this, arguments)
                    }
                    return n.Extend(i, e), i.prototype.render = function() {
                        var t = i.__super__.render.call(this);
                        return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
                    }, i.prototype.bind = function() {
                        var e = this;
                        i.__super__.bind.apply(this, arguments), this.$selection.on("click", function(t) {
                            e.trigger("toggle", {
                                originalEvent: t
                            })
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function(n) {
                            if (!e.options.get("disabled")) {
                                var i = t(this),
                                    r = i.parent(),
                                    o = r.data("data");
                                e.trigger("unselect", {
                                    originalEvent: n,
                                    data: o
                                })
                            }
                        })
                    }, i.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, i.prototype.display = function(t, e) {
                        var n = this.options.get("templateSelection"),
                            i = this.options.get("escapeMarkup");
                        return i(n(t, e))
                    }, i.prototype.selectionContainer = function() {
                        var e = t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                        return e
                    }, i.prototype.update = function(t) {
                        if (this.clear(), 0 !== t.length) {
                            for (var e = [], i = 0; i < t.length; i++) {
                                var r = t[i],
                                    o = this.selectionContainer(),
                                    a = this.display(r, o);
                                o.append(a), o.prop("title", r.title || r.text), o.data("data", r), e.push(o)
                            }
                            var s = this.$selection.find(".select2-selection__rendered");
                            n.appendMany(s, e)
                        }
                    }, i
                }), e.define("select2/selection/placeholder", ["../utils"], function() {
                    function t(t, e, n) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n)
                    }
                    return t.prototype.normalizePlaceholder = function(t, e) {
                        return "string" == typeof e && (e = {
                            id: "",
                            text: e
                        }), e
                    }, t.prototype.createPlaceholder = function(t, e) {
                        var n = this.selectionContainer();
                        return n.html(this.display(e)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                    }, t.prototype.update = function(t, e) {
                        var n = 1 == e.length && e[0].id != this.placeholder.id,
                            i = e.length > 1;
                        if (i || n) return t.call(this, e);
                        this.clear();
                        var r = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(r)
                    }, t
                }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function(t, e) {
                    function n() {}
                    return n.prototype.bind = function(t, e, n) {
                        var i = this;
                        t.call(this, e, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(t) {
                            i._handleClear(t)
                        }), e.on("keypress", function(t) {
                            i._handleKeyboardClear(t, e)
                        })
                    }, n.prototype._handleClear = function(t, e) {
                        if (!this.options.get("disabled")) {
                            var n = this.$selection.find(".select2-selection__clear");
                            if (0 !== n.length) {
                                e.stopPropagation();
                                for (var i = n.data("data"), r = 0; r < i.length; r++) {
                                    var o = {
                                        data: i[r]
                                    };
                                    if (this.trigger("unselect", o), o.prevented) return
                                }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, n.prototype._handleKeyboardClear = function(t, n, i) {
                        i.isOpen() || n.which != e.DELETE && n.which != e.BACKSPACE || this._handleClear(n)
                    }, n.prototype.update = function(e, n) {
                        if (e.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                            var i = t('<span class="select2-selection__clear">&times;</span>');
                            i.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(i)
                        }
                    }, n
                }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(t, e, n) {
                    function i(t, e, n) {
                        t.call(this, e, n)
                    }
                    return i.prototype.render = function(e) {
                        var n = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = n, this.$search = n.find("input");
                        var i = e.call(this);
                        return this._transferTabIndex(), i
                    }, i.prototype.bind = function(t, e, i) {
                        var r = this;
                        t.call(this, e, i), e.on("open", function() {
                            r.$search.trigger("focus")
                        }), e.on("close", function() {
                            r.$search.val(""), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus")
                        }), e.on("enable", function() {
                            r.$search.prop("disabled", !1), r._transferTabIndex()
                        }), e.on("disable", function() {
                            r.$search.prop("disabled", !0)
                        }), e.on("focus", function() {
                            r.$search.trigger("focus")
                        }), e.on("results:focus", function(t) {
                            r.$search.attr("aria-activedescendant", t.id)
                        }), this.$selection.on("focusin", ".select2-search--inline", function(t) {
                            r.trigger("focus", t)
                        }), this.$selection.on("focusout", ".select2-search--inline", function(t) {
                            r._handleBlur(t)
                        }), this.$selection.on("keydown", ".select2-search--inline", function(t) {
                            t.stopPropagation(), r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented();
                            var e = t.which;
                            if (e === n.BACKSPACE && "" === r.$search.val()) {
                                var i = r.$searchContainer.prev(".select2-selection__choice");
                                if (i.length > 0) {
                                    var o = i.data("data");
                                    r.searchRemoveChoice(o), t.preventDefault()
                                }
                            }
                        });
                        var o = document.documentMode,
                            a = o && o <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function() {
                            return a ? void r.$selection.off("input.search input.searchcheck") : void r.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(t) {
                            if (a && "input" === t.type) return void r.$selection.off("input.search input.searchcheck");
                            var e = t.which;
                            e != n.SHIFT && e != n.CTRL && e != n.ALT && e != n.TAB && r.handleSearch(t)
                        })
                    }, i.prototype._transferTabIndex = function() {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                            this.$selection.attr("tabindex", "-1")
                    }, i.prototype.createPlaceholder = function(t, e) {
                        this.$search.attr("placeholder", e.text)
                    }, i.prototype.update = function(t, e) {
                        var n = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                    }, i.prototype.handleSearch = function() {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var t = this.$search.val();
                            this.trigger("query", {
                                term: t
                            })
                        }
                        this._keyUpPrevented = !1
                    }, i.prototype.searchRemoveChoice = function(t, e) {
                        this.trigger("unselect", {
                            data: e
                        }), this.$search.val(e.text), this.handleSearch()
                    }, i.prototype.resizeSearch = function() {
                        this.$search.css("width", "25px");
                        var t = "";
                        if ("" !== this.$search.attr("placeholder")) t = this.$selection.find(".select2-selection__rendered").innerWidth();
                        else {
                            var e = this.$search.val().length + 1;
                            t = .75 * e + "em"
                        }
                        this.$search.css("width", t)
                    }, i
                }), e.define("select2/selection/eventRelay", ["jquery"], function(t) {
                    function e() {}
                    return e.prototype.bind = function(e, n, i) {
                        var r = this,
                            o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            a = ["opening", "closing", "selecting", "unselecting"];
                        e.call(this, n, i), n.on("*", function(e, n) {
                            if (t.inArray(e, o) !== -1) {
                                n = n || {};
                                var i = t.Event("select2:" + e, {
                                    params: n
                                });
                                r.$element.trigger(i), t.inArray(e, a) !== -1 && (n.prevented = i.isDefaultPrevented())
                            }
                        })
                    }, e
                }), e.define("select2/translation", ["jquery", "require"], function(t, e) {
                    function n(t) {
                        this.dict = t || {}
                    }
                    return n.prototype.all = function() {
                        return this.dict
                    }, n.prototype.get = function(t) {
                        return this.dict[t]
                    }, n.prototype.extend = function(e) {
                        this.dict = t.extend({}, e.all(), this.dict)
                    }, n._cache = {}, n.loadPath = function(t) {
                        if (!(t in n._cache)) {
                            var i = e(t);
                            n._cache[t] = i
                        }
                        return new n(n._cache[t])
                    }, n
                }), e.define("select2/diacritics", [], function() {
                    var t = {
                        "\u24b6": "A",
                        "\uff21": "A",
                        "\xc0": "A",
                        "\xc1": "A",
                        "\xc2": "A",
                        "\u1ea6": "A",
                        "\u1ea4": "A",
                        "\u1eaa": "A",
                        "\u1ea8": "A",
                        "\xc3": "A",
                        "\u0100": "A",
                        "\u0102": "A",
                        "\u1eb0": "A",
                        "\u1eae": "A",
                        "\u1eb4": "A",
                        "\u1eb2": "A",
                        "\u0226": "A",
                        "\u01e0": "A",
                        "\xc4": "A",
                        "\u01de": "A",
                        "\u1ea2": "A",
                        "\xc5": "A",
                        "\u01fa": "A",
                        "\u01cd": "A",
                        "\u0200": "A",
                        "\u0202": "A",
                        "\u1ea0": "A",
                        "\u1eac": "A",
                        "\u1eb6": "A",
                        "\u1e00": "A",
                        "\u0104": "A",
                        "\u023a": "A",
                        "\u2c6f": "A",
                        "\ua732": "AA",
                        "\xc6": "AE",
                        "\u01fc": "AE",
                        "\u01e2": "AE",
                        "\ua734": "AO",
                        "\ua736": "AU",
                        "\ua738": "AV",
                        "\ua73a": "AV",
                        "\ua73c": "AY",
                        "\u24b7": "B",
                        "\uff22": "B",
                        "\u1e02": "B",
                        "\u1e04": "B",
                        "\u1e06": "B",
                        "\u0243": "B",
                        "\u0182": "B",
                        "\u0181": "B",
                        "\u24b8": "C",
                        "\uff23": "C",
                        "\u0106": "C",
                        "\u0108": "C",
                        "\u010a": "C",
                        "\u010c": "C",
                        "\xc7": "C",
                        "\u1e08": "C",
                        "\u0187": "C",
                        "\u023b": "C",
                        "\ua73e": "C",
                        "\u24b9": "D",
                        "\uff24": "D",
                        "\u1e0a": "D",
                        "\u010e": "D",
                        "\u1e0c": "D",
                        "\u1e10": "D",
                        "\u1e12": "D",
                        "\u1e0e": "D",
                        "\u0110": "D",
                        "\u018b": "D",
                        "\u018a": "D",
                        "\u0189": "D",
                        "\ua779": "D",
                        "\u01f1": "DZ",
                        "\u01c4": "DZ",
                        "\u01f2": "Dz",
                        "\u01c5": "Dz",
                        "\u24ba": "E",
                        "\uff25": "E",
                        "\xc8": "E",
                        "\xc9": "E",
                        "\xca": "E",
                        "\u1ec0": "E",
                        "\u1ebe": "E",
                        "\u1ec4": "E",
                        "\u1ec2": "E",
                        "\u1ebc": "E",
                        "\u0112": "E",
                        "\u1e14": "E",
                        "\u1e16": "E",
                        "\u0114": "E",
                        "\u0116": "E",
                        "\xcb": "E",
                        "\u1eba": "E",
                        "\u011a": "E",
                        "\u0204": "E",
                        "\u0206": "E",
                        "\u1eb8": "E",
                        "\u1ec6": "E",
                        "\u0228": "E",
                        "\u1e1c": "E",
                        "\u0118": "E",
                        "\u1e18": "E",
                        "\u1e1a": "E",
                        "\u0190": "E",
                        "\u018e": "E",
                        "\u24bb": "F",
                        "\uff26": "F",
                        "\u1e1e": "F",
                        "\u0191": "F",
                        "\ua77b": "F",
                        "\u24bc": "G",
                        "\uff27": "G",
                        "\u01f4": "G",
                        "\u011c": "G",
                        "\u1e20": "G",
                        "\u011e": "G",
                        "\u0120": "G",
                        "\u01e6": "G",
                        "\u0122": "G",
                        "\u01e4": "G",
                        "\u0193": "G",
                        "\ua7a0": "G",
                        "\ua77d": "G",
                        "\ua77e": "G",
                        "\u24bd": "H",
                        "\uff28": "H",
                        "\u0124": "H",
                        "\u1e22": "H",
                        "\u1e26": "H",
                        "\u021e": "H",
                        "\u1e24": "H",
                        "\u1e28": "H",
                        "\u1e2a": "H",
                        "\u0126": "H",
                        "\u2c67": "H",
                        "\u2c75": "H",
                        "\ua78d": "H",
                        "\u24be": "I",
                        "\uff29": "I",
                        "\xcc": "I",
                        "\xcd": "I",
                        "\xce": "I",
                        "\u0128": "I",
                        "\u012a": "I",
                        "\u012c": "I",
                        "\u0130": "I",
                        "\xcf": "I",
                        "\u1e2e": "I",
                        "\u1ec8": "I",
                        "\u01cf": "I",
                        "\u0208": "I",
                        "\u020a": "I",
                        "\u1eca": "I",
                        "\u012e": "I",
                        "\u1e2c": "I",
                        "\u0197": "I",
                        "\u24bf": "J",
                        "\uff2a": "J",
                        "\u0134": "J",
                        "\u0248": "J",
                        "\u24c0": "K",
                        "\uff2b": "K",
                        "\u1e30": "K",
                        "\u01e8": "K",
                        "\u1e32": "K",
                        "\u0136": "K",
                        "\u1e34": "K",
                        "\u0198": "K",
                        "\u2c69": "K",
                        "\ua740": "K",
                        "\ua742": "K",
                        "\ua744": "K",
                        "\ua7a2": "K",
                        "\u24c1": "L",
                        "\uff2c": "L",
                        "\u013f": "L",
                        "\u0139": "L",
                        "\u013d": "L",
                        "\u1e36": "L",
                        "\u1e38": "L",
                        "\u013b": "L",
                        "\u1e3c": "L",
                        "\u1e3a": "L",
                        "\u0141": "L",
                        "\u023d": "L",
                        "\u2c62": "L",
                        "\u2c60": "L",
                        "\ua748": "L",
                        "\ua746": "L",
                        "\ua780": "L",
                        "\u01c7": "LJ",
                        "\u01c8": "Lj",
                        "\u24c2": "M",
                        "\uff2d": "M",
                        "\u1e3e": "M",
                        "\u1e40": "M",
                        "\u1e42": "M",
                        "\u2c6e": "M",
                        "\u019c": "M",
                        "\u24c3": "N",
                        "\uff2e": "N",
                        "\u01f8": "N",
                        "\u0143": "N",
                        "\xd1": "N",
                        "\u1e44": "N",
                        "\u0147": "N",
                        "\u1e46": "N",
                        "\u0145": "N",
                        "\u1e4a": "N",
                        "\u1e48": "N",
                        "\u0220": "N",
                        "\u019d": "N",
                        "\ua790": "N",
                        "\ua7a4": "N",
                        "\u01ca": "NJ",
                        "\u01cb": "Nj",
                        "\u24c4": "O",
                        "\uff2f": "O",
                        "\xd2": "O",
                        "\xd3": "O",
                        "\xd4": "O",
                        "\u1ed2": "O",
                        "\u1ed0": "O",
                        "\u1ed6": "O",
                        "\u1ed4": "O",
                        "\xd5": "O",
                        "\u1e4c": "O",
                        "\u022c": "O",
                        "\u1e4e": "O",
                        "\u014c": "O",
                        "\u1e50": "O",
                        "\u1e52": "O",
                        "\u014e": "O",
                        "\u022e": "O",
                        "\u0230": "O",
                        "\xd6": "O",
                        "\u022a": "O",
                        "\u1ece": "O",
                        "\u0150": "O",
                        "\u01d1": "O",
                        "\u020c": "O",
                        "\u020e": "O",
                        "\u01a0": "O",
                        "\u1edc": "O",
                        "\u1eda": "O",
                        "\u1ee0": "O",
                        "\u1ede": "O",
                        "\u1ee2": "O",
                        "\u1ecc": "O",
                        "\u1ed8": "O",
                        "\u01ea": "O",
                        "\u01ec": "O",
                        "\xd8": "O",
                        "\u01fe": "O",
                        "\u0186": "O",
                        "\u019f": "O",
                        "\ua74a": "O",
                        "\ua74c": "O",
                        "\u01a2": "OI",
                        "\ua74e": "OO",
                        "\u0222": "OU",
                        "\u24c5": "P",
                        "\uff30": "P",
                        "\u1e54": "P",
                        "\u1e56": "P",
                        "\u01a4": "P",
                        "\u2c63": "P",
                        "\ua750": "P",
                        "\ua752": "P",
                        "\ua754": "P",
                        "\u24c6": "Q",
                        "\uff31": "Q",
                        "\ua756": "Q",
                        "\ua758": "Q",
                        "\u024a": "Q",
                        "\u24c7": "R",
                        "\uff32": "R",
                        "\u0154": "R",
                        "\u1e58": "R",
                        "\u0158": "R",
                        "\u0210": "R",
                        "\u0212": "R",
                        "\u1e5a": "R",
                        "\u1e5c": "R",
                        "\u0156": "R",
                        "\u1e5e": "R",
                        "\u024c": "R",
                        "\u2c64": "R",
                        "\ua75a": "R",
                        "\ua7a6": "R",
                        "\ua782": "R",
                        "\u24c8": "S",
                        "\uff33": "S",
                        "\u1e9e": "S",
                        "\u015a": "S",
                        "\u1e64": "S",
                        "\u015c": "S",
                        "\u1e60": "S",
                        "\u0160": "S",
                        "\u1e66": "S",
                        "\u1e62": "S",
                        "\u1e68": "S",
                        "\u0218": "S",
                        "\u015e": "S",
                        "\u2c7e": "S",
                        "\ua7a8": "S",
                        "\ua784": "S",
                        "\u24c9": "T",
                        "\uff34": "T",
                        "\u1e6a": "T",
                        "\u0164": "T",
                        "\u1e6c": "T",
                        "\u021a": "T",
                        "\u0162": "T",
                        "\u1e70": "T",
                        "\u1e6e": "T",
                        "\u0166": "T",
                        "\u01ac": "T",
                        "\u01ae": "T",
                        "\u023e": "T",
                        "\ua786": "T",
                        "\ua728": "TZ",
                        "\u24ca": "U",
                        "\uff35": "U",
                        "\xd9": "U",
                        "\xda": "U",
                        "\xdb": "U",
                        "\u0168": "U",
                        "\u1e78": "U",
                        "\u016a": "U",
                        "\u1e7a": "U",
                        "\u016c": "U",
                        "\xdc": "U",
                        "\u01db": "U",
                        "\u01d7": "U",
                        "\u01d5": "U",
                        "\u01d9": "U",
                        "\u1ee6": "U",
                        "\u016e": "U",
                        "\u0170": "U",
                        "\u01d3": "U",
                        "\u0214": "U",
                        "\u0216": "U",
                        "\u01af": "U",
                        "\u1eea": "U",
                        "\u1ee8": "U",
                        "\u1eee": "U",
                        "\u1eec": "U",
                        "\u1ef0": "U",
                        "\u1ee4": "U",
                        "\u1e72": "U",
                        "\u0172": "U",
                        "\u1e76": "U",
                        "\u1e74": "U",
                        "\u0244": "U",
                        "\u24cb": "V",
                        "\uff36": "V",
                        "\u1e7c": "V",
                        "\u1e7e": "V",
                        "\u01b2": "V",
                        "\ua75e": "V",
                        "\u0245": "V",
                        "\ua760": "VY",
                        "\u24cc": "W",
                        "\uff37": "W",
                        "\u1e80": "W",
                        "\u1e82": "W",
                        "\u0174": "W",
                        "\u1e86": "W",
                        "\u1e84": "W",
                        "\u1e88": "W",
                        "\u2c72": "W",
                        "\u24cd": "X",
                        "\uff38": "X",
                        "\u1e8a": "X",
                        "\u1e8c": "X",
                        "\u24ce": "Y",
                        "\uff39": "Y",
                        "\u1ef2": "Y",
                        "\xdd": "Y",
                        "\u0176": "Y",
                        "\u1ef8": "Y",
                        "\u0232": "Y",
                        "\u1e8e": "Y",
                        "\u0178": "Y",
                        "\u1ef6": "Y",
                        "\u1ef4": "Y",
                        "\u01b3": "Y",
                        "\u024e": "Y",
                        "\u1efe": "Y",
                        "\u24cf": "Z",
                        "\uff3a": "Z",
                        "\u0179": "Z",
                        "\u1e90": "Z",
                        "\u017b": "Z",
                        "\u017d": "Z",
                        "\u1e92": "Z",
                        "\u1e94": "Z",
                        "\u01b5": "Z",
                        "\u0224": "Z",
                        "\u2c7f": "Z",
                        "\u2c6b": "Z",
                        "\ua762": "Z",
                        "\u24d0": "a",
                        "\uff41": "a",
                        "\u1e9a": "a",
                        "\xe0": "a",
                        "\xe1": "a",
                        "\xe2": "a",
                        "\u1ea7": "a",
                        "\u1ea5": "a",
                        "\u1eab": "a",
                        "\u1ea9": "a",
                        "\xe3": "a",
                        "\u0101": "a",
                        "\u0103": "a",
                        "\u1eb1": "a",
                        "\u1eaf": "a",
                        "\u1eb5": "a",
                        "\u1eb3": "a",
                        "\u0227": "a",
                        "\u01e1": "a",
                        "\xe4": "a",
                        "\u01df": "a",
                        "\u1ea3": "a",
                        "\xe5": "a",
                        "\u01fb": "a",
                        "\u01ce": "a",
                        "\u0201": "a",
                        "\u0203": "a",
                        "\u1ea1": "a",
                        "\u1ead": "a",
                        "\u1eb7": "a",
                        "\u1e01": "a",
                        "\u0105": "a",
                        "\u2c65": "a",
                        "\u0250": "a",
                        "\ua733": "aa",
                        "\xe6": "ae",
                        "\u01fd": "ae",
                        "\u01e3": "ae",
                        "\ua735": "ao",
                        "\ua737": "au",
                        "\ua739": "av",
                        "\ua73b": "av",
                        "\ua73d": "ay",
                        "\u24d1": "b",
                        "\uff42": "b",
                        "\u1e03": "b",
                        "\u1e05": "b",
                        "\u1e07": "b",
                        "\u0180": "b",
                        "\u0183": "b",
                        "\u0253": "b",
                        "\u24d2": "c",
                        "\uff43": "c",
                        "\u0107": "c",
                        "\u0109": "c",
                        "\u010b": "c",
                        "\u010d": "c",
                        "\xe7": "c",
                        "\u1e09": "c",
                        "\u0188": "c",
                        "\u023c": "c",
                        "\ua73f": "c",
                        "\u2184": "c",
                        "\u24d3": "d",
                        "\uff44": "d",
                        "\u1e0b": "d",
                        "\u010f": "d",
                        "\u1e0d": "d",
                        "\u1e11": "d",
                        "\u1e13": "d",
                        "\u1e0f": "d",
                        "\u0111": "d",
                        "\u018c": "d",
                        "\u0256": "d",
                        "\u0257": "d",
                        "\ua77a": "d",
                        "\u01f3": "dz",
                        "\u01c6": "dz",
                        "\u24d4": "e",
                        "\uff45": "e",
                        "\xe8": "e",
                        "\xe9": "e",
                        "\xea": "e",
                        "\u1ec1": "e",
                        "\u1ebf": "e",
                        "\u1ec5": "e",
                        "\u1ec3": "e",
                        "\u1ebd": "e",
                        "\u0113": "e",
                        "\u1e15": "e",
                        "\u1e17": "e",
                        "\u0115": "e",
                        "\u0117": "e",
                        "\xeb": "e",
                        "\u1ebb": "e",
                        "\u011b": "e",
                        "\u0205": "e",
                        "\u0207": "e",
                        "\u1eb9": "e",
                        "\u1ec7": "e",
                        "\u0229": "e",
                        "\u1e1d": "e",
                        "\u0119": "e",
                        "\u1e19": "e",
                        "\u1e1b": "e",
                        "\u0247": "e",
                        "\u025b": "e",
                        "\u01dd": "e",
                        "\u24d5": "f",
                        "\uff46": "f",
                        "\u1e1f": "f",
                        "\u0192": "f",
                        "\ua77c": "f",
                        "\u24d6": "g",
                        "\uff47": "g",
                        "\u01f5": "g",
                        "\u011d": "g",
                        "\u1e21": "g",
                        "\u011f": "g",
                        "\u0121": "g",
                        "\u01e7": "g",
                        "\u0123": "g",
                        "\u01e5": "g",
                        "\u0260": "g",
                        "\ua7a1": "g",
                        "\u1d79": "g",
                        "\ua77f": "g",
                        "\u24d7": "h",
                        "\uff48": "h",
                        "\u0125": "h",
                        "\u1e23": "h",
                        "\u1e27": "h",
                        "\u021f": "h",
                        "\u1e25": "h",
                        "\u1e29": "h",
                        "\u1e2b": "h",
                        "\u1e96": "h",
                        "\u0127": "h",
                        "\u2c68": "h",
                        "\u2c76": "h",
                        "\u0265": "h",
                        "\u0195": "hv",
                        "\u24d8": "i",
                        "\uff49": "i",
                        "\xec": "i",
                        "\xed": "i",
                        "\xee": "i",
                        "\u0129": "i",
                        "\u012b": "i",
                        "\u012d": "i",
                        "\xef": "i",
                        "\u1e2f": "i",
                        "\u1ec9": "i",
                        "\u01d0": "i",
                        "\u0209": "i",
                        "\u020b": "i",
                        "\u1ecb": "i",
                        "\u012f": "i",
                        "\u1e2d": "i",
                        "\u0268": "i",
                        "\u0131": "i",
                        "\u24d9": "j",
                        "\uff4a": "j",
                        "\u0135": "j",
                        "\u01f0": "j",
                        "\u0249": "j",
                        "\u24da": "k",
                        "\uff4b": "k",
                        "\u1e31": "k",
                        "\u01e9": "k",
                        "\u1e33": "k",
                        "\u0137": "k",
                        "\u1e35": "k",
                        "\u0199": "k",
                        "\u2c6a": "k",
                        "\ua741": "k",
                        "\ua743": "k",
                        "\ua745": "k",
                        "\ua7a3": "k",
                        "\u24db": "l",
                        "\uff4c": "l",
                        "\u0140": "l",
                        "\u013a": "l",
                        "\u013e": "l",
                        "\u1e37": "l",
                        "\u1e39": "l",
                        "\u013c": "l",
                        "\u1e3d": "l",
                        "\u1e3b": "l",
                        "\u017f": "l",
                        "\u0142": "l",
                        "\u019a": "l",
                        "\u026b": "l",
                        "\u2c61": "l",
                        "\ua749": "l",
                        "\ua781": "l",
                        "\ua747": "l",
                        "\u01c9": "lj",
                        "\u24dc": "m",
                        "\uff4d": "m",
                        "\u1e3f": "m",
                        "\u1e41": "m",
                        "\u1e43": "m",
                        "\u0271": "m",
                        "\u026f": "m",
                        "\u24dd": "n",
                        "\uff4e": "n",
                        "\u01f9": "n",
                        "\u0144": "n",
                        "\xf1": "n",
                        "\u1e45": "n",
                        "\u0148": "n",
                        "\u1e47": "n",
                        "\u0146": "n",
                        "\u1e4b": "n",
                        "\u1e49": "n",
                        "\u019e": "n",
                        "\u0272": "n",
                        "\u0149": "n",
                        "\ua791": "n",
                        "\ua7a5": "n",
                        "\u01cc": "nj",
                        "\u24de": "o",
                        "\uff4f": "o",
                        "\xf2": "o",
                        "\xf3": "o",
                        "\xf4": "o",
                        "\u1ed3": "o",
                        "\u1ed1": "o",
                        "\u1ed7": "o",
                        "\u1ed5": "o",
                        "\xf5": "o",
                        "\u1e4d": "o",
                        "\u022d": "o",
                        "\u1e4f": "o",
                        "\u014d": "o",
                        "\u1e51": "o",
                        "\u1e53": "o",
                        "\u014f": "o",
                        "\u022f": "o",
                        "\u0231": "o",
                        "\xf6": "o",
                        "\u022b": "o",
                        "\u1ecf": "o",
                        "\u0151": "o",
                        "\u01d2": "o",
                        "\u020d": "o",
                        "\u020f": "o",
                        "\u01a1": "o",
                        "\u1edd": "o",
                        "\u1edb": "o",
                        "\u1ee1": "o",
                        "\u1edf": "o",
                        "\u1ee3": "o",
                        "\u1ecd": "o",
                        "\u1ed9": "o",
                        "\u01eb": "o",
                        "\u01ed": "o",
                        "\xf8": "o",
                        "\u01ff": "o",
                        "\u0254": "o",
                        "\ua74b": "o",
                        "\ua74d": "o",
                        "\u0275": "o",
                        "\u01a3": "oi",
                        "\u0223": "ou",
                        "\ua74f": "oo",
                        "\u24df": "p",
                        "\uff50": "p",
                        "\u1e55": "p",
                        "\u1e57": "p",
                        "\u01a5": "p",
                        "\u1d7d": "p",
                        "\ua751": "p",
                        "\ua753": "p",
                        "\ua755": "p",
                        "\u24e0": "q",
                        "\uff51": "q",
                        "\u024b": "q",
                        "\ua757": "q",
                        "\ua759": "q",
                        "\u24e1": "r",
                        "\uff52": "r",
                        "\u0155": "r",
                        "\u1e59": "r",
                        "\u0159": "r",
                        "\u0211": "r",
                        "\u0213": "r",
                        "\u1e5b": "r",
                        "\u1e5d": "r",
                        "\u0157": "r",
                        "\u1e5f": "r",
                        "\u024d": "r",
                        "\u027d": "r",
                        "\ua75b": "r",
                        "\ua7a7": "r",
                        "\ua783": "r",
                        "\u24e2": "s",
                        "\uff53": "s",
                        "\xdf": "s",
                        "\u015b": "s",
                        "\u1e65": "s",
                        "\u015d": "s",
                        "\u1e61": "s",
                        "\u0161": "s",
                        "\u1e67": "s",
                        "\u1e63": "s",
                        "\u1e69": "s",
                        "\u0219": "s",
                        "\u015f": "s",
                        "\u023f": "s",
                        "\ua7a9": "s",
                        "\ua785": "s",
                        "\u1e9b": "s",
                        "\u24e3": "t",
                        "\uff54": "t",
                        "\u1e6b": "t",
                        "\u1e97": "t",
                        "\u0165": "t",
                        "\u1e6d": "t",
                        "\u021b": "t",
                        "\u0163": "t",
                        "\u1e71": "t",
                        "\u1e6f": "t",
                        "\u0167": "t",
                        "\u01ad": "t",
                        "\u0288": "t",
                        "\u2c66": "t",
                        "\ua787": "t",
                        "\ua729": "tz",
                        "\u24e4": "u",
                        "\uff55": "u",
                        "\xf9": "u",
                        "\xfa": "u",
                        "\xfb": "u",
                        "\u0169": "u",
                        "\u1e79": "u",
                        "\u016b": "u",
                        "\u1e7b": "u",
                        "\u016d": "u",
                        "\xfc": "u",
                        "\u01dc": "u",
                        "\u01d8": "u",
                        "\u01d6": "u",
                        "\u01da": "u",
                        "\u1ee7": "u",
                        "\u016f": "u",
                        "\u0171": "u",
                        "\u01d4": "u",
                        "\u0215": "u",
                        "\u0217": "u",
                        "\u01b0": "u",
                        "\u1eeb": "u",
                        "\u1ee9": "u",
                        "\u1eef": "u",
                        "\u1eed": "u",
                        "\u1ef1": "u",
                        "\u1ee5": "u",
                        "\u1e73": "u",
                        "\u0173": "u",
                        "\u1e77": "u",
                        "\u1e75": "u",
                        "\u0289": "u",
                        "\u24e5": "v",
                        "\uff56": "v",
                        "\u1e7d": "v",
                        "\u1e7f": "v",
                        "\u028b": "v",
                        "\ua75f": "v",
                        "\u028c": "v",
                        "\ua761": "vy",
                        "\u24e6": "w",
                        "\uff57": "w",
                        "\u1e81": "w",
                        "\u1e83": "w",
                        "\u0175": "w",
                        "\u1e87": "w",
                        "\u1e85": "w",
                        "\u1e98": "w",
                        "\u1e89": "w",
                        "\u2c73": "w",
                        "\u24e7": "x",
                        "\uff58": "x",
                        "\u1e8b": "x",
                        "\u1e8d": "x",
                        "\u24e8": "y",
                        "\uff59": "y",
                        "\u1ef3": "y",
                        "\xfd": "y",
                        "\u0177": "y",
                        "\u1ef9": "y",
                        "\u0233": "y",
                        "\u1e8f": "y",
                        "\xff": "y",
                        "\u1ef7": "y",
                        "\u1e99": "y",
                        "\u1ef5": "y",
                        "\u01b4": "y",
                        "\u024f": "y",
                        "\u1eff": "y",
                        "\u24e9": "z",
                        "\uff5a": "z",
                        "\u017a": "z",
                        "\u1e91": "z",
                        "\u017c": "z",
                        "\u017e": "z",
                        "\u1e93": "z",
                        "\u1e95": "z",
                        "\u01b6": "z",
                        "\u0225": "z",
                        "\u0240": "z",
                        "\u2c6c": "z",
                        "\ua763": "z",
                        "\u0386": "\u0391",
                        "\u0388": "\u0395",
                        "\u0389": "\u0397",
                        "\u038a": "\u0399",
                        "\u03aa": "\u0399",
                        "\u038c": "\u039f",
                        "\u038e": "\u03a5",
                        "\u03ab": "\u03a5",
                        "\u038f": "\u03a9",
                        "\u03ac": "\u03b1",
                        "\u03ad": "\u03b5",
                        "\u03ae": "\u03b7",
                        "\u03af": "\u03b9",
                        "\u03ca": "\u03b9",
                        "\u0390": "\u03b9",
                        "\u03cc": "\u03bf",
                        "\u03cd": "\u03c5",
                        "\u03cb": "\u03c5",
                        "\u03b0": "\u03c5",
                        "\u03c9": "\u03c9",
                        "\u03c2": "\u03c3"
                    };
                    return t
                }), e.define("select2/data/base", ["../utils"], function(t) {
                    function e() {
                        e.__super__.constructor.call(this)
                    }
                    return t.Extend(e, t.Observable), e.prototype.current = function() {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, e.prototype.query = function() {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, e.prototype.bind = function() {}, e.prototype.destroy = function() {}, e.prototype.generateResultId = function(e, n) {
                        var i = e.id + "-result-";
                        return i += t.generateChars(4), i += null != n.id ? "-" + n.id.toString() : "-" + t.generateChars(4)
                    }, e
                }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function(t, e, n) {
                    function i(t, e) {
                        this.$element = t, this.options = e, i.__super__.constructor.call(this)
                    }
                    return e.Extend(i, t), i.prototype.current = function(t) {
                        var e = [],
                            i = this;
                        this.$element.find(":selected").each(function() {
                            var t = n(this),
                                r = i.item(t);
                            e.push(r)
                        }), t(e)
                    }, i.prototype.select = function(t) {
                        var e = this;
                        if (t.selected = !0, n(t.element).is("option")) return t.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function(i) {
                            var r = [];
                            t = [t], t.push.apply(t, i);
                            for (var o = 0; o < t.length; o++) {
                                var a = t[o].id;
                                n.inArray(a, r) === -1 && r.push(a)
                            }
                            e.$element.val(r), e.$element.trigger("change")
                        });
                        else {
                            var i = t.id;
                            this.$element.val(i), this.$element.trigger("change")
                        }
                    }, i.prototype.unselect = function(t) {
                        var e = this;
                        if (this.$element.prop("multiple")) return t.selected = !1, n(t.element).is("option") ? (t.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(i) {
                            for (var r = [], o = 0; o < i.length; o++) {
                                var a = i[o].id;
                                a !== t.id && n.inArray(a, r) === -1 && r.push(a)
                            }
                            e.$element.val(r), e.$element.trigger("change")
                        })
                    }, i.prototype.bind = function(t) {
                        var e = this;
                        this.container = t, t.on("select", function(t) {
                            e.select(t.data)
                        }), t.on("unselect", function(t) {
                            e.unselect(t.data)
                        })
                    }, i.prototype.destroy = function() {
                        this.$element.find("*").each(function() {
                            n.removeData(this, "data")
                        })
                    }, i.prototype.query = function(t, e) {
                        var i = [],
                            r = this,
                            o = this.$element.children();
                        o.each(function() {
                            var e = n(this);
                            if (e.is("option") || e.is("optgroup")) {
                                var o = r.item(e),
                                    a = r.matches(t, o);
                                null !== a && i.push(a)
                            }
                        }), e({
                            results: i
                        })
                    }, i.prototype.addOptions = function(t) {
                        e.appendMany(this.$element, t)
                    }, i.prototype.option = function(t) {
                        var e;
                        t.children ? (e = document.createElement("optgroup"), e.label = t.text) : (e = document.createElement("option"), void 0 !== e.textContent ? e.textContent = t.text : e.innerText = t.text), t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title);
                        var i = n(e),
                            r = this._normalizeItem(t);
                        return r.element = e, n.data(e, "data", r), i
                    }, i.prototype.item = function(t) {
                        var e = {};
                        if (e = n.data(t[0], "data"), null != e) return e;
                        if (t.is("option")) e = {
                            id: t.val(),
                            text: t.text(),
                            disabled: t.prop("disabled"),
                            selected: t.prop("selected"),
                            title: t.prop("title")
                        };
                        else if (t.is("optgroup")) {
                            e = {
                                text: t.prop("label"),
                                children: [],
                                title: t.prop("title")
                            };
                            for (var i = t.children("option"), r = [], o = 0; o < i.length; o++) {
                                var a = n(i[o]),
                                    s = this.item(a);
                                r.push(s)
                            }
                            e.children = r
                        }
                        return e = this._normalizeItem(e), e.element = t[0], n.data(t[0], "data", e), e
                    }, i.prototype._normalizeItem = function(t) {
                        n.isPlainObject(t) || (t = {
                            id: t,
                            text: t
                        }), t = n.extend({}, {
                            text: ""
                        }, t);
                        var e = {
                            selected: !1,
                            disabled: !1
                        };
                        return null != t.id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), n.extend({}, e, t)
                    }, i.prototype.matches = function(t, e) {
                        var n = this.options.get("matcher");
                        return n(t, e)
                    }, i
                }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function(t, e, n) {
                    function i(t, e) {
                        var n = e.get("data") || [];
                        i.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(n))
                    }
                    return e.Extend(i, t), i.prototype.select = function(t) {
                        var e = this.$element.find("option").filter(function(e, n) {
                            return n.value == t.id.toString()
                        });
                        0 === e.length && (e = this.option(t), this.addOptions(e)), i.__super__.select.call(this, t)
                    }, i.prototype.convertToOptions = function(t) {
                        function i(t) {
                            return function() {
                                return n(this).val() == t.id
                            }
                        }
                        for (var r = this, o = this.$element.find("option"), a = o.map(function() {
                                return r.item(n(this)).id
                            }).get(), s = [], l = 0; l < t.length; l++) {
                            var d = this._normalizeItem(t[l]);
                            if (n.inArray(d.id, a) >= 0) {
                                var u = o.filter(i(d)),
                                    c = this.item(u),
                                    h = n.extend(!0, {}, d, c),
                                    f = this.option(h);
                                u.replaceWith(f)
                            } else {
                                var p = this.option(d);
                                if (d.children) {
                                    var g = this.convertToOptions(d.children);
                                    e.appendMany(p, g)
                                }
                                s.push(p)
                            }
                        }
                        return s
                    }, i
                }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(t, e, n) {
                    function i(t, e) {
                        this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, t, e)
                    }
                    return e.Extend(i, t), i.prototype._applyDefaults = function(t) {
                        var e = {
                            data: function(t) {
                                return n.extend({}, t, {
                                    q: t.term
                                })
                            },
                            transport: function(t, e, i) {
                                var r = n.ajax(t);
                                return r.then(e), r.fail(i), r
                            }
                        };
                        return n.extend({}, e, t, !0)
                    }, i.prototype.processResults = function(t) {
                        return t
                    }, i.prototype.query = function(t, e) {
                        function i() {
                            var i = o.transport(o, function(i) {
                                var o = r.processResults(i, t);
                                r.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), e(o)
                            }, function() {
                                i.status && "0" === i.status || r.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            r._request = i
                        }
                        var r = this;
                        null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var o = n.extend({
                            type: "GET"
                        }, this.ajaxOptions);
                        "function" == typeof o.url && (o.url = o.url.call(this.$element, t)), "function" == typeof o.data && (o.data = o.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                    }, i
                }), e.define("select2/data/tags", ["jquery"], function(t) {
                    function e(e, n, i) {
                        var r = i.get("tags"),
                            o = i.get("createTag");
                        void 0 !== o && (this.createTag = o);
                        var a = i.get("insertTag");
                        if (void 0 !== a && (this.insertTag = a), e.call(this, n, i), t.isArray(r))
                            for (var s = 0; s < r.length; s++) {
                                var l = r[s],
                                    d = this._normalizeItem(l),
                                    u = this.option(d);
                                this.$element.append(u)
                            }
                    }
                    return e.prototype.query = function(t, e, n) {
                        function i(t, o) {
                            for (var a = t.results, s = 0; s < a.length; s++) {
                                var l = a[s],
                                    d = null != l.children && !i({
                                        results: l.children
                                    }, !0),
                                    u = l.text === e.term;
                                if (u || d) return !o && (t.data = a, void n(t))
                            }
                            if (o) return !0;
                            var c = r.createTag(e);
                            if (null != c) {
                                var h = r.option(c);
                                h.attr("data-select2-tag", !0), r.addOptions([h]), r.insertTag(a, c)
                            }
                            t.results = a, n(t)
                        }
                        var r = this;
                        return this._removeOldTags(), null == e.term || null != e.page ? void t.call(this, e, n) : void t.call(this, e, i)
                    }, e.prototype.createTag = function(e, n) {
                        var i = t.trim(n.term);
                        return "" === i ? null : {
                            id: i,
                            text: i
                        }
                    }, e.prototype.insertTag = function(t, e, n) {
                        e.unshift(n)
                    }, e.prototype._removeOldTags = function() {
                        var e = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                        e.each(function() {
                            this.selected || t(this).remove()
                        })
                    }, e
                }), e.define("select2/data/tokenizer", ["jquery"], function(t) {
                    function e(t, e, n) {
                        var i = n.get("tokenizer");
                        void 0 !== i && (this.tokenizer = i), t.call(this, e, n)
                    }
                    return e.prototype.bind = function(t, e, n) {
                        t.call(this, e, n), this.$search = e.dropdown.$search || e.selection.$search || n.find(".select2-search__field")
                    }, e.prototype.query = function(e, n, i) {
                        function r(e) {
                            var n = a._normalizeItem(e),
                                i = a.$element.find("option").filter(function() {
                                    return t(this).val() === n.id
                                });
                            if (!i.length) {
                                var r = a.option(n);
                                r.attr("data-select2-tag", !0), a._removeOldTags(), a.addOptions([r])
                            }
                            o(n)
                        }

                        function o(t) {
                            a.trigger("select", {
                                data: t
                            })
                        }
                        var a = this;
                        n.term = n.term || "";
                        var s = this.tokenizer(n, this.options, r);
                        s.term !== n.term && (this.$search.length && (this.$search.val(s.term), this.$search.focus()), n.term = s.term), e.call(this, n, i)
                    }, e.prototype.tokenizer = function(e, n, i, r) {
                        for (var o = i.get("tokenSeparators") || [], a = n.term, s = 0, l = this.createTag || function(t) {
                                return {
                                    id: t.term,
                                    text: t.term
                                }
                            }; s < a.length;) {
                            var d = a[s];
                            if (t.inArray(d, o) !== -1) {
                                var u = a.substr(0, s),
                                    c = t.extend({}, n, {
                                        term: u
                                    }),
                                    h = l(c);
                                null != h ? (r(h), a = a.substr(s + 1) || "", s = 0) : s++
                            } else s++
                        }
                        return {
                            term: a
                        }
                    }, e
                }), e.define("select2/data/minimumInputLength", [], function() {
                    function t(t, e, n) {
                        this.minimumInputLength = n.get("minimumInputLength"), t.call(this, e, n)
                    }
                    return t.prototype.query = function(t, e, n) {
                        return e.term = e.term || "", e.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: e.term,
                                params: e
                            }
                        }) : void t.call(this, e, n)
                    }, t
                }), e.define("select2/data/maximumInputLength", [], function() {
                    function t(t, e, n) {
                        this.maximumInputLength = n.get("maximumInputLength"), t.call(this, e, n)
                    }
                    return t.prototype.query = function(t, e, n) {
                        return e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: e.term,
                                params: e
                            }
                        }) : void t.call(this, e, n)
                    }, t
                }), e.define("select2/data/maximumSelectionLength", [], function() {
                    function t(t, e, n) {
                        this.maximumSelectionLength = n.get("maximumSelectionLength"), t.call(this, e, n)
                    }
                    return t.prototype.query = function(t, e, n) {
                        var i = this;
                        this.current(function(r) {
                            var o = null != r ? r.length : 0;
                            return i.maximumSelectionLength > 0 && o >= i.maximumSelectionLength ? void i.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: i.maximumSelectionLength
                                }
                            }) : void t.call(i, e, n)
                        })
                    }, t
                }), e.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
                    function n(t, e) {
                        this.$element = t, this.options = e, n.__super__.constructor.call(this)
                    }
                    return e.Extend(n, e.Observable), n.prototype.render = function() {
                        var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e
                    }, n.prototype.bind = function() {}, n.prototype.position = function() {}, n.prototype.destroy = function() {
                        this.$dropdown.remove()
                    }, n
                }), e.define("select2/dropdown/search", ["jquery", "../utils"], function(t) {
                    function e() {}
                    return e.prototype.render = function(e) {
                        var n = e.call(this),
                            i = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                    }, e.prototype.bind = function(e, n, i) {
                        var r = this;
                        e.call(this, n, i), this.$search.on("keydown", function(t) {
                            r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented()
                        }), this.$search.on("input", function() {
                            t(this).off("keyup")
                        }), this.$search.on("keyup input", function(t) {
                            r.handleSearch(t)
                        }), n.on("open", function() {
                            r.$search.attr("tabindex", 0), r.$search.focus(), window.setTimeout(function() {
                                r.$search.focus()
                            }, 0)
                        }), n.on("close", function() {
                            r.$search.attr("tabindex", -1), r.$search.val("")
                        }), n.on("focus", function() {
                            n.isOpen() && r.$search.focus()
                        }), n.on("results:all", function(t) {
                            if (null == t.query.term || "" === t.query.term) {
                                var e = r.showSearch(t);
                                e ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide")
                            }
                        })
                    }, e.prototype.handleSearch = function() {
                        if (!this._keyUpPrevented) {
                            var t = this.$search.val();
                            this.trigger("query", {
                                term: t
                            })
                        }
                        this._keyUpPrevented = !1
                    }, e.prototype.showSearch = function() {
                        return !0
                    }, e
                }), e.define("select2/dropdown/hidePlaceholder", [], function() {
                    function t(t, e, n, i) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n, i)
                    }
                    return t.prototype.append = function(t, e) {
                        e.results = this.removePlaceholder(e.results), t.call(this, e)
                    }, t.prototype.normalizePlaceholder = function(t, e) {
                        return "string" == typeof e && (e = {
                            id: "",
                            text: e
                        }), e
                    }, t.prototype.removePlaceholder = function(t, e) {
                        for (var n = e.slice(0), i = e.length - 1; i >= 0; i--) {
                            var r = e[i];
                            this.placeholder.id === r.id && n.splice(i, 1)
                        }
                        return n
                    }, t
                }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function(t) {
                    function e(t, e, n, i) {
                        this.lastParams = {}, t.call(this, e, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }
                    return e.prototype.append = function(t, e) {
                        this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
                    }, e.prototype.bind = function(e, n, i) {
                        var r = this;
                        e.call(this, n, i), n.on("query", function(t) {
                            r.lastParams = t, r.loading = !0
                        }), n.on("query:append", function(t) {
                            r.lastParams = t, r.loading = !0
                        }), this.$results.on("scroll", function() {
                            var e = t.contains(document.documentElement, r.$loadingMore[0]);
                            if (!r.loading && e) {
                                var n = r.$results.offset().top + r.$results.outerHeight(!1),
                                    i = r.$loadingMore.offset().top + r.$loadingMore.outerHeight(!1);
                                n + 50 >= i && r.loadMore()
                            }
                        })
                    }, e.prototype.loadMore = function() {
                        this.loading = !0;
                        var e = t.extend({}, {
                            page: 1
                        }, this.lastParams);
                        e.page++, this.trigger("query:append", e)
                    }, e.prototype.showLoadingMore = function(t, e) {
                        return e.pagination && e.pagination.more
                    }, e.prototype.createLoadingMore = function() {
                        var e = t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            n = this.options.get("translations").get("loadingMore");
                        return e.html(n(this.lastParams)), e
                    }, e
                }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(t, e) {
                    function n(e, n, i) {
                        this.$dropdownParent = i.get("dropdownParent") || t(document.body), e.call(this, n, i)
                    }
                    return n.prototype.bind = function(t, e, n) {
                        var i = this,
                            r = !1;
                        t.call(this, e, n), e.on("open", function() {
                            i._showDropdown(), i._attachPositioningHandler(e), r || (r = !0, e.on("results:all", function() {
                                i._positionDropdown(), i._resizeDropdown()
                            }), e.on("results:append", function() {
                                i._positionDropdown(), i._resizeDropdown()
                            }))
                        }), e.on("close", function() {
                            i._hideDropdown(), i._detachPositioningHandler(e)
                        }), this.$dropdownContainer.on("mousedown", function(t) {
                            t.stopPropagation()
                        })
                    }, n.prototype.destroy = function(t) {
                        t.call(this), this.$dropdownContainer.remove()
                    }, n.prototype.position = function(t, e, n) {
                        e.attr("class", n.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = n
                    }, n.prototype.render = function(e) {
                        var n = t("<span></span>"),
                            i = e.call(this);
                        return n.append(i), this.$dropdownContainer = n, n
                    }, n.prototype._hideDropdown = function() {
                        this.$dropdownContainer.detach()
                    }, n.prototype._attachPositioningHandler = function(n, i) {
                        var r = this,
                            o = "scroll.select2." + i.id,
                            a = "resize.select2." + i.id,
                            s = "orientationchange.select2." + i.id,
                            l = this.$container.parents().filter(e.hasScroll);
                        l.each(function() {
                            t(this).data("select2-scroll-position", {
                                x: t(this).scrollLeft(),
                                y: t(this).scrollTop()
                            })
                        }), l.on(o, function() {
                            var e = t(this).data("select2-scroll-position");
                            t(this).scrollTop(e.y)
                        }), t(window).on(o + " " + a + " " + s, function() {
                            r._positionDropdown(), r._resizeDropdown()
                        })
                    }, n.prototype._detachPositioningHandler = function(n, i) {
                        var r = "scroll.select2." + i.id,
                            o = "resize.select2." + i.id,
                            a = "orientationchange.select2." + i.id,
                            s = this.$container.parents().filter(e.hasScroll);
                        s.off(r), t(window).off(r + " " + o + " " + a)
                    }, n.prototype._positionDropdown = function() {
                        var e = t(window),
                            n = this.$dropdown.hasClass("select2-dropdown--above"),
                            i = this.$dropdown.hasClass("select2-dropdown--below"),
                            r = null,
                            o = this.$container.offset();
                        o.bottom = o.top + this.$container.outerHeight(!1);
                        var a = {
                            height: this.$container.outerHeight(!1)
                        };
                        a.top = o.top, a.bottom = o.top + a.height;
                        var s = {
                                height: this.$dropdown.outerHeight(!1)
                            },
                            l = {
                                top: e.scrollTop(),
                                bottom: e.scrollTop() + e.height()
                            },
                            d = l.top < o.top - s.height,
                            u = l.bottom > o.bottom + s.height,
                            c = {
                                left: o.left,
                                top: a.bottom
                            },
                            h = this.$dropdownParent;
                        "static" === h.css("position") && (h = h.offsetParent());
                        var f = h.offset();
                        c.top -= f.top, c.left -= f.left, n || i || (r = "below"), u || !d || n ? !d && u && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (c.top = a.top - f.top - s.height), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(c)
                    }, n.prototype._resizeDropdown = function() {
                        var t = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t)
                    }, n.prototype._showDropdown = function() {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, n
                }), e.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function t(e) {
                        for (var n = 0, i = 0; i < e.length; i++) {
                            var r = e[i];
                            r.children ? n += t(r.children) : n++
                        }
                        return n
                    }

                    function e(t, e, n, i) {
                        this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, n, i)
                    }
                    return e.prototype.showSearch = function(e, n) {
                        return !(t(n.data.results) < this.minimumResultsForSearch) && e.call(this, n)
                    }, e
                }), e.define("select2/dropdown/selectOnClose", [], function() {
                    function t() {}
                    return t.prototype.bind = function(t, e, n) {
                        var i = this;
                        t.call(this, e, n), e.on("close", function(t) {
                            i._handleSelectOnClose(t)
                        })
                    }, t.prototype._handleSelectOnClose = function(t, e) {
                        if (e && null != e.originalSelect2Event) {
                            var n = e.originalSelect2Event;
                            if ("select" === n._type || "unselect" === n._type) return
                        }
                        var i = this.getHighlightedResults();
                        if (!(i.length < 1)) {
                            var r = i.data("data");
                            null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                                data: r
                            })
                        }
                    }, t
                }), e.define("select2/dropdown/closeOnSelect", [], function() {
                    function t() {}
                    return t.prototype.bind = function(t, e, n) {
                        var i = this;
                        t.call(this, e, n), e.on("select", function(t) {
                            i._selectTriggered(t)
                        }), e.on("unselect", function(t) {
                            i._selectTriggered(t)
                        })
                    }, t.prototype._selectTriggered = function(t, e) {
                        var n = e.originalEvent;
                        n && n.ctrlKey || this.trigger("close", {
                            originalEvent: n,
                            originalSelect2Event: e
                        })
                    }, t
                }), e.define("select2/i18n/en", [], function() {
                    return {
                        errorLoading: function() {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function(t) {
                            var e = t.input.length - t.maximum,
                                n = "Please delete " + e + " character";
                            return 1 != e && (n += "s"), n
                        },
                        inputTooShort: function(t) {
                            var e = t.minimum - t.input.length,
                                n = "Please enter " + e + " or more characters";
                            return n
                        },
                        loadingMore: function() {
                            return "Loading more results\u2026"
                        },
                        maximumSelected: function(t) {
                            var e = "You can only select " + t.maximum + " item";
                            return 1 != t.maximum && (e += "s"), e
                        },
                        noResults: function() {
                            return "No results found"
                        },
                        searching: function() {
                            return "Searching\u2026"
                        }
                    }
                }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(t, e, n, i, r, o, a, s, l, d, u, c, h, f, p, g, m, v, y, b, x, w, _, k, S, C, D, M, T) {
                    function O() {
                        this.reset()
                    }
                    O.prototype.apply = function(c) {
                        if (c = t.extend(!0, {}, this.defaults, c), null == c.dataAdapter) {
                            if (null != c.ajax ? c.dataAdapter = p : null != c.data ? c.dataAdapter = f : c.dataAdapter = h, c.minimumInputLength > 0 && (c.dataAdapter = d.Decorate(c.dataAdapter, v)), c.maximumInputLength > 0 && (c.dataAdapter = d.Decorate(c.dataAdapter, y)), c.maximumSelectionLength > 0 && (c.dataAdapter = d.Decorate(c.dataAdapter, b)), c.tags && (c.dataAdapter = d.Decorate(c.dataAdapter, g)), null == c.tokenSeparators && null == c.tokenizer || (c.dataAdapter = d.Decorate(c.dataAdapter, m)), null != c.query) {
                                var T = e(c.amdBase + "compat/query");
                                c.dataAdapter = d.Decorate(c.dataAdapter, T)
                            }
                            if (null != c.initSelection) {
                                var O = e(c.amdBase + "compat/initSelection");
                                c.dataAdapter = d.Decorate(c.dataAdapter, O)
                            }
                        }
                        if (null == c.resultsAdapter && (c.resultsAdapter = n, null != c.ajax && (c.resultsAdapter = d.Decorate(c.resultsAdapter, k)), null != c.placeholder && (c.resultsAdapter = d.Decorate(c.resultsAdapter, _)), c.selectOnClose && (c.resultsAdapter = d.Decorate(c.resultsAdapter, D))), null == c.dropdownAdapter) {
                            if (c.multiple) c.dropdownAdapter = x;
                            else {
                                var A = d.Decorate(x, w);
                                c.dropdownAdapter = A
                            }
                            if (0 !== c.minimumResultsForSearch && (c.dropdownAdapter = d.Decorate(c.dropdownAdapter, C)), c.closeOnSelect && (c.dropdownAdapter = d.Decorate(c.dropdownAdapter, M)),
                                null != c.dropdownCssClass || null != c.dropdownCss || null != c.adaptDropdownCssClass) {
                                var P = e(c.amdBase + "compat/dropdownCss");
                                c.dropdownAdapter = d.Decorate(c.dropdownAdapter, P)
                            }
                            c.dropdownAdapter = d.Decorate(c.dropdownAdapter, S)
                        }
                        if (null == c.selectionAdapter) {
                            if (c.multiple ? c.selectionAdapter = r : c.selectionAdapter = i, null != c.placeholder && (c.selectionAdapter = d.Decorate(c.selectionAdapter, o)), c.allowClear && (c.selectionAdapter = d.Decorate(c.selectionAdapter, a)), c.multiple && (c.selectionAdapter = d.Decorate(c.selectionAdapter, s)), null != c.containerCssClass || null != c.containerCss || null != c.adaptContainerCssClass) {
                                var I = e(c.amdBase + "compat/containerCss");
                                c.selectionAdapter = d.Decorate(c.selectionAdapter, I)
                            }
                            c.selectionAdapter = d.Decorate(c.selectionAdapter, l)
                        }
                        if ("string" == typeof c.language)
                            if (c.language.indexOf("-") > 0) {
                                var F = c.language.split("-"),
                                    E = F[0];
                                c.language = [c.language, E]
                            } else c.language = [c.language];
                        if (t.isArray(c.language)) {
                            var L = new u;
                            c.language.push("en");
                            for (var R = c.language, $ = 0; $ < R.length; $++) {
                                var W = R[$],
                                    H = {};
                                try {
                                    H = u.loadPath(W)
                                } catch (t) {
                                    try {
                                        W = this.defaults.amdLanguageBase + W, H = u.loadPath(W)
                                    } catch (t) {
                                        c.debug && window.console && console.warn && console.warn('Select2: The language file for "' + W + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                L.extend(H)
                            }
                            c.translations = L
                        } else {
                            var N = u.loadPath(this.defaults.amdLanguageBase + "en"),
                                j = new u(c.language);
                            j.extend(N), c.translations = j
                        }
                        return c
                    }, O.prototype.reset = function() {
                        function e(t) {
                            function e(t) {
                                return c[t] || t
                            }
                            return t.replace(/[^\u0000-\u007E]/g, e)
                        }

                        function n(i, r) {
                            if ("" === t.trim(i.term)) return r;
                            if (r.children && r.children.length > 0) {
                                for (var o = t.extend(!0, {}, r), a = r.children.length - 1; a >= 0; a--) {
                                    var s = r.children[a],
                                        l = n(i, s);
                                    null == l && o.children.splice(a, 1)
                                }
                                return o.children.length > 0 ? o : n(i, o)
                            }
                            var d = e(r.text).toUpperCase(),
                                u = e(i.term).toUpperCase();
                            return d.indexOf(u) > -1 ? r : null
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: d.escapeMarkup,
                            language: T,
                            matcher: n,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function(t) {
                                return t
                            },
                            templateResult: function(t) {
                                return t.text
                            },
                            templateSelection: function(t) {
                                return t.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, O.prototype.set = function(e, n) {
                        var i = t.camelCase(e),
                            r = {};
                        r[i] = n;
                        var o = d._convertData(r);
                        t.extend(this.defaults, o)
                    };
                    var A = new O;
                    return A
                }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(t, e, n, i) {
                    function r(e, r) {
                        if (this.options = e, null != r && this.fromElement(r), this.options = n.apply(this.options), r && r.is("input")) {
                            var o = t(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
                        }
                    }
                    return r.prototype.fromElement = function(t) {
                        var n = ["select2"];
                        null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), t.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), t.data("data", t.data("select2Tags")), t.data("tags", !0)), t.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", t.data("ajaxUrl")), t.data("ajax--url", t.data("ajaxUrl")));
                        var r = {};
                        r = e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset ? e.extend(!0, {}, t[0].dataset, t.data()) : t.data();
                        var o = e.extend(!0, {}, r);
                        o = i._convertData(o);
                        for (var a in o) e.inArray(a, n) > -1 || (e.isPlainObject(this.options[a]) ? e.extend(this.options[a], o[a]) : this.options[a] = o[a]);
                        return this
                    }, r.prototype.get = function(t) {
                        return this.options[t]
                    }, r.prototype.set = function(t, e) {
                        this.options[t] = e
                    }, r
                }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(t, e, n, i) {
                    var r = function(t, n) {
                        null != t.data("select2") && t.data("select2").destroy(), this.$element = t, this.id = this._generateId(t), n = n || {}, this.options = new e(n, t), r.__super__.constructor.call(this);
                        var i = t.attr("tabindex") || 0;
                        t.data("old-tabindex", i), t.attr("tabindex", "-1");
                        var o = this.options.get("dataAdapter");
                        this.dataAdapter = new o(t, this.options);
                        var a = this.render();
                        this._placeContainer(a);
                        var s = this.options.get("selectionAdapter");
                        this.selection = new s(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, a);
                        var l = this.options.get("dropdownAdapter");
                        this.dropdown = new l(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, a);
                        var d = this.options.get("resultsAdapter");
                        this.results = new d(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var u = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(t) {
                            u.trigger("selection:update", {
                                data: t
                            })
                        }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), t.data("select2", this)
                    };
                    return n.Extend(r, n.Observable), r.prototype._generateId = function(t) {
                        var e = "";
                        return e = null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), e = e.replace(/(:|\.|\[|\]|,)/g, ""), e = "select2-" + e
                    }, r.prototype._placeContainer = function(t) {
                        t.insertAfter(this.$element);
                        var e = this._resolveWidth(this.$element, this.options.get("width"));
                        null != e && t.css("width", e)
                    }, r.prototype._resolveWidth = function(t, e) {
                        var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == e) {
                            var i = this._resolveWidth(t, "style");
                            return null != i ? i : this._resolveWidth(t, "element")
                        }
                        if ("element" == e) {
                            var r = t.outerWidth(!1);
                            return r <= 0 ? "auto" : r + "px"
                        }
                        if ("style" == e) {
                            var o = t.attr("style");
                            if ("string" != typeof o) return null;
                            for (var a = o.split(";"), s = 0, l = a.length; s < l; s += 1) {
                                var d = a[s].replace(/\s/g, ""),
                                    u = d.match(n);
                                if (null !== u && u.length >= 1) return u[1]
                            }
                            return null
                        }
                        return e
                    }, r.prototype._bindAdapters = function() {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, r.prototype._registerDomEvents = function() {
                        var e = this;
                        this.$element.on("change.select2", function() {
                            e.dataAdapter.current(function(t) {
                                e.trigger("selection:update", {
                                    data: t
                                })
                            })
                        }), this.$element.on("focus.select2", function(t) {
                            e.trigger("focus", t)
                        }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != i ? (this._observer = new i(function(n) {
                            t.each(n, e._syncA), t.each(n, e._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
                    }, r.prototype._registerDataEvents = function() {
                        var t = this;
                        this.dataAdapter.on("*", function(e, n) {
                            t.trigger(e, n)
                        })
                    }, r.prototype._registerSelectionEvents = function() {
                        var e = this,
                            n = ["toggle", "focus"];
                        this.selection.on("toggle", function() {
                            e.toggleDropdown()
                        }), this.selection.on("focus", function(t) {
                            e.focus(t)
                        }), this.selection.on("*", function(i, r) {
                            t.inArray(i, n) === -1 && e.trigger(i, r)
                        })
                    }, r.prototype._registerDropdownEvents = function() {
                        var t = this;
                        this.dropdown.on("*", function(e, n) {
                            t.trigger(e, n)
                        })
                    }, r.prototype._registerResultsEvents = function() {
                        var t = this;
                        this.results.on("*", function(e, n) {
                            t.trigger(e, n)
                        })
                    }, r.prototype._registerEvents = function() {
                        var t = this;
                        this.on("open", function() {
                            t.$container.addClass("select2-container--open")
                        }), this.on("close", function() {
                            t.$container.removeClass("select2-container--open")
                        }), this.on("enable", function() {
                            t.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function() {
                            t.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function() {
                            t.$container.removeClass("select2-container--focus")
                        }), this.on("query", function(e) {
                            t.isOpen() || t.trigger("open", {}), this.dataAdapter.query(e, function(n) {
                                t.trigger("results:all", {
                                    data: n,
                                    query: e
                                })
                            })
                        }), this.on("query:append", function(e) {
                            this.dataAdapter.query(e, function(n) {
                                t.trigger("results:append", {
                                    data: n,
                                    query: e
                                })
                            })
                        }), this.on("keypress", function(e) {
                            var n = e.which;
                            t.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && e.altKey ? (t.close(), e.preventDefault()) : n === i.ENTER ? (t.trigger("results:select", {}), e.preventDefault()) : n === i.SPACE && e.ctrlKey ? (t.trigger("results:toggle", {}), e.preventDefault()) : n === i.UP ? (t.trigger("results:previous", {}), e.preventDefault()) : n === i.DOWN && (t.trigger("results:next", {}), e.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && e.altKey) && (t.open(), e.preventDefault())
                        })
                    }, r.prototype._syncAttributes = function() {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, r.prototype._syncSubtree = function(t, e) {
                        var n = !1,
                            i = this;
                        if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                            if (e)
                                if (e.addedNodes && e.addedNodes.length > 0)
                                    for (var r = 0; r < e.addedNodes.length; r++) {
                                        var o = e.addedNodes[r];
                                        o.selected && (n = !0)
                                    } else e.removedNodes && e.removedNodes.length > 0 && (n = !0);
                                else n = !0;
                            n && this.dataAdapter.current(function(t) {
                                i.trigger("selection:update", {
                                    data: t
                                })
                            })
                        }
                    }, r.prototype.trigger = function(t, e) {
                        var n = r.__super__.trigger,
                            i = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting"
                            };
                        if (void 0 === e && (e = {}), t in i) {
                            var o = i[t],
                                a = {
                                    prevented: !1,
                                    name: t,
                                    args: e
                                };
                            if (n.call(this, o, a), a.prevented) return void(e.prevented = !0)
                        }
                        n.call(this, t, e)
                    }, r.prototype.toggleDropdown = function() {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, r.prototype.open = function() {
                        this.isOpen() || this.trigger("query", {})
                    }, r.prototype.close = function() {
                        this.isOpen() && this.trigger("close", {})
                    }, r.prototype.isOpen = function() {
                        return this.$container.hasClass("select2-container--open")
                    }, r.prototype.hasFocus = function() {
                        return this.$container.hasClass("select2-container--focus")
                    }, r.prototype.focus = function() {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, r.prototype.enable = function(t) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != t && 0 !== t.length || (t = [!0]);
                        var e = !t[0];
                        this.$element.prop("disabled", e)
                    }, r.prototype.data = function() {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var t = [];
                        return this.dataAdapter.current(function(e) {
                            t = e
                        }), t
                    }, r.prototype.val = function(e) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                        var n = e[0];
                        t.isArray(n) && (n = t.map(n, function(t) {
                            return t.toString()
                        })), this.$element.val(n).trigger("change")
                    }, r.prototype.destroy = function() {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                    }, r.prototype.render = function() {
                        var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
                    }, r
                }), e.define("jquery-mousewheel", ["jquery"], function(t) {
                    return t
                }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(t, e, n, i) {
                    if (null == t.fn.select2) {
                        var r = ["open", "close", "destroy"];
                        t.fn.select2 = function(e) {
                            if (e = e || {}, "object" == typeof e) return this.each(function() {
                                var i = t.extend(!0, {}, e);
                                new n(t(this), i)
                            }), this;
                            if ("string" == typeof e) {
                                var i, o = Array.prototype.slice.call(arguments, 1);
                                return this.each(function() {
                                    var n = t(this).data("select2");
                                    null == n && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), i = n[e].apply(n, o)
                                }), t.inArray(e, r) > -1 ? this : i
                            }
                            throw new Error("Invalid arguments for Select2: " + e)
                        }
                    }
                    return null == t.fn.select2.defaults && (t.fn.select2.defaults = i), n
                }), {
                    define: e.define,
                    require: e.require
                }
            }(),
            n = e.require("jquery.select2");
        return t.fn.select2.amd = e, n
    }), $(document).ready(function() {
        var t = $("#js-mobile-menu").unbind();
        $("#js-navigation-menu").removeClass("show"), t.on("click", function(t) {
            t.preventDefault(), $("#js-navigation-menu").slideToggle(function() {
                $("#js-navigation-menu").is(":hidden") && $("#js-navigation-menu").removeAttr("style")
            })
        })
    }), $(document).ready(function() {
        var t = $("#js-mobile-menu").unbind();
        $("#js-landing-navigation-menu").removeClass("show"), t.on("click", function(t) {
            t.preventDefault(), $("#js-landing-navigation-menu").slideToggle(function() {
                $("#js-landing-navigation-menu").is(":hidden") && $("#js-landing-navigation-menu").removeAttr("style")
            })
        })
    }), $(document).ready(function() {
        $(".feature").on("click", function(t) {
            $(".feature").removeClass("active"), $(t.currentTarget).addClass("active"), idx = $(".feature").index(t.currentTarget), $(".feature-body-medium-screen").removeClass("active"), $($(".feature-body-medium-screen")[idx]).addClass("active")
        })
    }), ! function t(e, n, i) {
        function r(a, s) {
            if (!n[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (o) return o(a, !0);
                    var d = new Error("Cannot find module '" + a + "'");
                    throw d.code = "MODULE_NOT_FOUND", d
                }
                var u = n[a] = {
                    exports: {}
                };
                e[a][0].call(u.exports, function(t) {
                    var n = e[a][1][t];
                    return r(n ? n : t)
                }, u, u.exports, t, e, n, i)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
        return r
    }({
        1: [function(t, e) {
            function n(t) {
                if (t) {
                    var e = /^#([a-fA-F0-9]{3})$/,
                        n = /^#([a-fA-F0-9]{6})$/,
                        i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                        r = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                        o = /(\w+)/,
                        a = [0, 0, 0],
                        s = 1,
                        l = t.match(e);
                    if (l) {
                        l = l[1];
                        for (var d = 0; d < a.length; d++) a[d] = parseInt(l[d] + l[d], 16)
                    } else if (l = t.match(n)) {
                        l = l[1];
                        for (var d = 0; d < a.length; d++) a[d] = parseInt(l.slice(2 * d, 2 * d + 2), 16)
                    } else if (l = t.match(i)) {
                        for (var d = 0; d < a.length; d++) a[d] = parseInt(l[d + 1]);
                        s = parseFloat(l[4])
                    } else if (l = t.match(r)) {
                        for (var d = 0; d < a.length; d++) a[d] = Math.round(2.55 * parseFloat(l[d + 1]));
                        s = parseFloat(l[4])
                    } else if (l = t.match(o)) {
                        if ("transparent" == l[1]) return [0, 0, 0, 0];
                        if (a = b[l[1]], !a) return
                    }
                    for (var d = 0; d < a.length; d++) a[d] = v(a[d], 0, 255);
                    return s = s || 0 == s ? v(s, 0, 1) : 1, a[3] = s, a
                }
            }

            function i(t) {
                if (t) {
                    var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                        n = t.match(e);
                    if (n) {
                        var i = parseFloat(n[4]),
                            r = v(parseInt(n[1]), 0, 360),
                            o = v(parseFloat(n[2]), 0, 100),
                            a = v(parseFloat(n[3]), 0, 100),
                            s = v(isNaN(i) ? 1 : i, 0, 1);
                        return [r, o, a, s]
                    }
                }
            }

            function r(t) {
                if (t) {
                    var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                        n = t.match(e);
                    if (n) {
                        var i = parseFloat(n[4]),
                            r = v(parseInt(n[1]), 0, 360),
                            o = v(parseFloat(n[2]), 0, 100),
                            a = v(parseFloat(n[3]), 0, 100),
                            s = v(isNaN(i) ? 1 : i, 0, 1);
                        return [r, o, a, s]
                    }
                }
            }

            function o(t) {
                var e = n(t);
                return e && e.slice(0, 3)
            }

            function a(t) {
                var e = i(t);
                return e && e.slice(0, 3)
            }

            function s(t) {
                var e = n(t);
                return e ? e[3] : (e = i(t)) ? e[3] : (e = r(t)) ? e[3] : void 0
            }

            function l(t) {
                return "#" + y(t[0]) + y(t[1]) + y(t[2])
            }

            function d(t, e) {
                return 1 > e || t[3] && t[3] < 1 ? u(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            }

            function u(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }

            function c(t, e) {
                if (1 > e || t[3] && t[3] < 1) return h(t, e);
                var n = Math.round(t[0] / 255 * 100),
                    i = Math.round(t[1] / 255 * 100),
                    r = Math.round(t[2] / 255 * 100);
                return "rgb(" + n + "%, " + i + "%, " + r + "%)"
            }

            function h(t, e) {
                var n = Math.round(t[0] / 255 * 100),
                    i = Math.round(t[1] / 255 * 100),
                    r = Math.round(t[2] / 255 * 100);
                return "rgba(" + n + "%, " + i + "%, " + r + "%, " + (e || t[3] || 1) + ")"
            }

            function f(t, e) {
                return 1 > e || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            }

            function p(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }

            function g(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
            }

            function m(t) {
                return x[t.slice(0, 3)]
            }

            function v(t, e, n) {
                return Math.min(Math.max(e, t), n)
            }

            function y(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }
            var b = t("color-name");
            e.exports = {
                getRgba: n,
                getHsla: i,
                getRgb: o,
                getHsl: a,
                getHwb: r,
                getAlpha: s,
                hexString: l,
                rgbString: d,
                rgbaString: u,
                percentString: c,
                percentaString: h,
                hslString: f,
                hslaString: p,
                hwbString: g,
                keyword: m
            };
            var x = {};
            for (var w in b) x[b[w]] = w
        }, {
            "color-name": 5
        }],
        2: [function(t, e) {
            var n = t("color-convert"),
                i = t("chartjs-color-string"),
                r = function(t) {
                    if (t instanceof r) return t;
                    if (!(this instanceof r)) return new r(t);
                    this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    };
                    var e;
                    if ("string" == typeof t)
                        if (e = i.getRgba(t)) this.setValues("rgb", e);
                        else if (e = i.getHsla(t)) this.setValues("hsl", e);
                    else {
                        if (!(e = i.getHwb(t))) throw new Error('Unable to parse color from string "' + t + '"');
                        this.setValues("hwb", e)
                    } else if ("object" == typeof t)
                        if (e = t, void 0 !== e.r || void 0 !== e.red) this.setValues("rgb", e);
                        else if (void 0 !== e.l || void 0 !== e.lightness) this.setValues("hsl", e);
                    else if (void 0 !== e.v || void 0 !== e.value) this.setValues("hsv", e);
                    else if (void 0 !== e.w || void 0 !== e.whiteness) this.setValues("hwb", e);
                    else {
                        if (void 0 === e.c && void 0 === e.cyan) throw new Error("Unable to parse color from object " + JSON.stringify(t));
                        this.setValues("cmyk", e)
                    }
                };
            r.prototype = {
                rgb: function() {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function() {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function() {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function() {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function() {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function() {
                    return this.values.rgb
                },
                hslArray: function() {
                    return this.values.hsl
                },
                hsvArray: function() {
                    return this.values.hsv
                },
                hwbArray: function() {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                },
                cmykArray: function() {
                    return this.values.cmyk
                },
                rgbaArray: function() {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray: function() {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha: function(t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                },
                red: function(t) {
                    return this.setChannel("rgb", 0, t)
                },
                green: function(t) {
                    return this.setChannel("rgb", 1, t)
                },
                blue: function(t) {
                    return this.setChannel("rgb", 2, t)
                },
                hue: function(t) {
                    return t && (t %= 360, t = 0 > t ? 360 + t : t), this.setChannel("hsl", 0, t)
                },
                saturation: function(t) {
                    return this.setChannel("hsl", 1, t)
                },
                lightness: function(t) {
                    return this.setChannel("hsl", 2, t)
                },
                saturationv: function(t) {
                    return this.setChannel("hsv", 1, t)
                },
                whiteness: function(t) {
                    return this.setChannel("hwb", 1, t)
                },
                blackness: function(t) {
                    return this.setChannel("hwb", 2, t)
                },
                value: function(t) {
                    return this.setChannel("hsv", 2, t)
                },
                cyan: function(t) {
                    return this.setChannel("cmyk", 0, t)
                },
                magenta: function(t) {
                    return this.setChannel("cmyk", 1, t)
                },
                yellow: function(t) {
                    return this.setChannel("cmyk", 2, t)
                },
                black: function(t) {
                    return this.setChannel("cmyk", 3, t)
                },
                hexString: function() {
                    return i.hexString(this.values.rgb)
                },
                rgbString: function() {
                    return i.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function() {
                    return i.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function() {
                    return i.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function() {
                    return i.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function() {
                    return i.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function() {
                    return i.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function() {
                    return i.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function() {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                },
                luminosity: function() {
                    for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                        var i = t[n] / 255;
                        e[n] = .03928 >= i ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                },
                contrast: function(t) {
                    var e = this.luminosity(),
                        n = t.luminosity();
                    return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
                },
                level: function(t) {
                    var e = this.contrast(t);
                    return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                },
                dark: function() {
                    var t = this.values.rgb,
                        e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
                    return 128 > e
                },
                light: function() {
                    return !this.dark()
                },
                negate: function() {
                    for (var t = [], e = 0; 3 > e; e++) t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                },
                lighten: function(t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                },
                darken: function(t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                },
                saturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                },
                desaturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                },
                whiten: function(t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                },
                blacken: function(t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                },
                greyscale: function() {
                    var t = this.values.rgb,
                        e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                },
                clearer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                },
                opaquer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                },
                rotate: function(t) {
                    var e = this.values.hsl,
                        n = (e[0] + t) % 360;
                    return e[0] = 0 > n ? 360 + n : n, this.setValues("hsl", e), this
                },
                mix: function(t, e) {
                    var n = this,
                        i = t,
                        r = void 0 === e ? .5 : e,
                        o = 2 * r - 1,
                        a = n.alpha() - i.alpha(),
                        s = ((o * a === -1 ? o : (o + a) / (1 + o * a)) + 1) / 2,
                        l = 1 - s;
                    return this.rgb(s * n.red() + l * i.red(), s * n.green() + l * i.green(), s * n.blue() + l * i.blue()).alpha(n.alpha() * r + i.alpha() * (1 - r))
                },
                toJSON: function() {
                    return this.rgb()
                },
                clone: function() {
                    var t, e, n = new r,
                        i = this.values,
                        o = n.values;
                    for (var a in i) i.hasOwnProperty(a) && (t = i[a], e = {}.toString.call(t), "[object Array]" === e ? o[a] = t.slice(0) : "[object Number]" === e ? o[a] = t : console.error("unexpected color value:", t));
                    return n
                }
            }, r.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, r.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, r.prototype.getValues = function(t) {
                for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
                return 1 !== e.alpha && (n.a = e.alpha), n
            }, r.prototype.setValues = function(t, e) {
                var i, r = this.values,
                    o = this.spaces,
                    a = this.maxes,
                    s = 1;
                if ("alpha" === t) s = e;
                else if (e.length) r[t] = e.slice(0, t.length), s = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (i = 0; i < t.length; i++) r[t][i] = e[t.charAt(i)];
                    s = e.a
                } else if (void 0 !== e[o[t][0]]) {
                    var l = o[t];
                    for (i = 0; i < t.length; i++) r[t][i] = e[l[i]];
                    s = e.alpha
                }
                if (r.alpha = Math.max(0, Math.min(1, void 0 === s ? r.alpha : s)), "alpha" === t) return !1;
                var d;
                for (i = 0; i < t.length; i++) d = Math.max(0, Math.min(a[t][i], r[t][i])), r[t][i] = Math.round(d);
                for (var u in o) u !== t && (r[u] = n[t][u](r[t]));
                return !0
            }, r.prototype.setSpace = function(t, e) {
                var n = e[0];
                return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
            }, r.prototype.setChannel = function(t, e, n) {
                var i = this.values[t];
                return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this)
            }, "undefined" != typeof window && (window.Color = r), e.exports = r
        }, {
            "chartjs-color-string": 1,
            "color-convert": 4
        }],
        3: [function(t, e) {
            function n(t) {
                var e, n, i, r = t[0] / 255,
                    o = t[1] / 255,
                    a = t[2] / 255,
                    s = Math.min(r, o, a),
                    l = Math.max(r, o, a),
                    d = l - s;
                return l == s ? e = 0 : r == l ? e = (o - a) / d : o == l ? e = 2 + (a - r) / d : a == l && (e = 4 + (r - o) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = (s + l) / 2, n = l == s ? 0 : .5 >= i ? d / (l + s) : d / (2 - l - s), [e, 100 * n, 100 * i]
            }

            function i(t) {
                var e, n, i, r = t[0],
                    o = t[1],
                    a = t[2],
                    s = Math.min(r, o, a),
                    l = Math.max(r, o, a),
                    d = l - s;
                return n = 0 == l ? 0 : d / l * 1e3 / 10, l == s ? e = 0 : r == l ? e = (o - a) / d : o == l ? e = 2 + (a - r) / d : a == l && (e = 4 + (r - o) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = l / 255 * 1e3 / 10, [e, n, i]
            }

            function o(t) {
                var e = t[0],
                    i = t[1],
                    r = t[2],
                    o = n(t)[0],
                    a = 1 / 255 * Math.min(e, Math.min(i, r)),
                    r = 1 - 1 / 255 * Math.max(e, Math.max(i, r));
                return [o, 100 * a, 100 * r]
            }

            function a(t) {
                var e, n, i, r, o = t[0] / 255,
                    a = t[1] / 255,
                    s = t[2] / 255;
                return r = Math.min(1 - o, 1 - a, 1 - s), e = (1 - o - r) / (1 - r) || 0, n = (1 - a - r) / (1 - r) || 0, i = (1 - s - r) / (1 - r) || 0, [100 * e, 100 * n, 100 * i, 100 * r]
            }

            function s(t) {
                return Q[JSON.stringify(t)]
            }

            function l(t) {
                var e = t[0] / 255,
                    n = t[1] / 255,
                    i = t[2] / 255;
                e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92;
                var r = .4124 * e + .3576 * n + .1805 * i,
                    o = .2126 * e + .7152 * n + .0722 * i,
                    a = .0193 * e + .1192 * n + .9505 * i;
                return [100 * r, 100 * o, 100 * a]
            }

            function d(t) {
                var e, n, i, r = l(t),
                    o = r[0],
                    a = r[1],
                    s = r[2];
                return o /= 95.047, a /= 100, s /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, e = 116 * a - 16, n = 500 * (o - a), i = 200 * (a - s), [e, n, i]
            }

            function u(t) {
                return $(d(t))
            }

            function c(t) {
                var e, n, i, r, o, a = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100;
                if (0 == s) return o = 255 * l, [o, o, o];
                n = .5 > l ? l * (1 + s) : l + s - l * s, e = 2 * l - n, r = [0, 0, 0];
                for (var d = 0; 3 > d; d++) i = a + 1 / 3 * -(d - 1), 0 > i && i++, i > 1 && i--, o = 1 > 6 * i ? e + 6 * (n - e) * i : 1 > 2 * i ? n : 2 > 3 * i ? e + (n - e) * (2 / 3 - i) * 6 : e, r[d] = 255 * o;
                return r
            }

            function h(t) {
                var e, n, i = t[0],
                    r = t[1] / 100,
                    o = t[2] / 100;
                return 0 === o ? [0, 0, 0] : (o *= 2, r *= 1 >= o ? o : 2 - o, n = (o + r) / 2, e = 2 * r / (o + r), [i, 100 * e, 100 * n])
            }

            function f(t) {
                return o(c(t))
            }

            function p(t) {
                return a(c(t))
            }

            function m(t) {
                return s(c(t))
            }

            function v(t) {
                var e = t[0] / 60,
                    n = t[1] / 100,
                    i = t[2] / 100,
                    r = Math.floor(e) % 6,
                    o = e - Math.floor(e),
                    a = 255 * i * (1 - n),
                    s = 255 * i * (1 - n * o),
                    l = 255 * i * (1 - n * (1 - o)),
                    i = 255 * i;
                switch (r) {
                    case 0:
                        return [i, l, a];
                    case 1:
                        return [s, i, a];
                    case 2:
                        return [a, i, l];
                    case 3:
                        return [a, s, i];
                    case 4:
                        return [l, a, i];
                    case 5:
                        return [i, a, s]
                }
            }

            function y(t) {
                var e, n, i = t[0],
                    r = t[1] / 100,
                    o = t[2] / 100;
                return n = (2 - r) * o, e = r * o, e /= 1 >= n ? n : 2 - n, e = e || 0, n /= 2, [i, 100 * e, 100 * n]
            }

            function x(t) {
                return o(v(t))
            }

            function w(t) {
                return a(v(t))
            }

            function _(t) {
                return s(v(t))
            }

            function k(t) {
                var e, n, i, o, a = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100,
                    d = s + l;
                switch (d > 1 && (s /= d, l /= d), e = Math.floor(6 * a), n = 1 - l, i = 6 * a - e, 0 != (1 & e) && (i = 1 - i), o = s + i * (n - s), e) {
                    default:
                        case 6:
                        case 0:
                        r = n,
                    g = o,
                    b = s;
                    break;
                    case 1:
                            r = o,
                        g = n,
                        b = s;
                        break;
                    case 2:
                            r = s,
                        g = n,
                        b = o;
                        break;
                    case 3:
                            r = s,
                        g = o,
                        b = n;
                        break;
                    case 4:
                            r = o,
                        g = s,
                        b = n;
                        break;
                    case 5:
                            r = n,
                        g = s,
                        b = o
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function S(t) {
                return n(k(t))
            }

            function C(t) {
                return i(k(t))
            }

            function D(t) {
                return a(k(t))
            }

            function M(t) {
                return s(k(t))
            }

            function T(t) {
                var e, n, i, r = t[0] / 100,
                    o = t[1] / 100,
                    a = t[2] / 100,
                    s = t[3] / 100;
                return e = 1 - Math.min(1, r * (1 - s) + s), n = 1 - Math.min(1, o * (1 - s) + s), i = 1 - Math.min(1, a * (1 - s) + s), [255 * e, 255 * n, 255 * i]
            }

            function O(t) {
                return n(T(t))
            }

            function A(t) {
                return i(T(t))
            }

            function P(t) {
                return o(T(t))
            }

            function I(t) {
                return s(T(t))
            }

            function F(t) {
                var e, n, i, r = t[0] / 100,
                    o = t[1] / 100,
                    a = t[2] / 100;
                return e = 3.2406 * r + -1.5372 * o + a * -.4986, n = r * -.9689 + 1.8758 * o + .0415 * a, i = .0557 * r + o * -.204 + 1.057 * a, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, e = Math.min(Math.max(0, e), 1), n = Math.min(Math.max(0, n), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * n, 255 * i]
            }

            function E(t) {
                var e, n, i, r = t[0],
                    o = t[1],
                    a = t[2];
                return r /= 95.047, o /= 100, a /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, e = 116 * o - 16, n = 500 * (r - o), i = 200 * (o - a), [e, n, i]
            }

            function L(t) {
                return $(E(t))
            }

            function R(t) {
                var e, n, i, r, o = t[0],
                    a = t[1],
                    s = t[2];
                return 8 >= o ? (n = 100 * o / 903.3, r = 7.787 * (n / 100) + 16 / 116) : (n = 100 * Math.pow((o + 16) / 116, 3), r = Math.pow(n / 100, 1 / 3)), e = .008856 >= e / 95.047 ? e = 95.047 * (a / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + r, 3), i = .008859 >= i / 108.883 ? i = 108.883 * (r - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - s / 200, 3), [e, n, i]
            }

            function $(t) {
                var e, n, i, r = t[0],
                    o = t[1],
                    a = t[2];
                return e = Math.atan2(a, o), n = 360 * e / 2 / Math.PI, 0 > n && (n += 360), i = Math.sqrt(o * o + a * a), [r, i, n]
            }

            function W(t) {
                return F(R(t))
            }

            function H(t) {
                var e, n, i, r = t[0],
                    o = t[1],
                    a = t[2];
                return i = a / 360 * 2 * Math.PI, e = o * Math.cos(i), n = o * Math.sin(i), [r, e, n]
            }

            function N(t) {
                return R(H(t))
            }

            function j(t) {
                return W(H(t))
            }

            function Y(t) {
                return Z[t]
            }

            function z(t) {
                return n(Y(t))
            }

            function V(t) {
                return i(Y(t))
            }

            function B(t) {
                return o(Y(t))
            }

            function q(t) {
                return a(Y(t))
            }

            function U(t) {
                return d(Y(t))
            }

            function G(t) {
                return l(Y(t))
            }
            e.exports = {
                rgb2hsl: n,
                rgb2hsv: i,
                rgb2hwb: o,
                rgb2cmyk: a,
                rgb2keyword: s,
                rgb2xyz: l,
                rgb2lab: d,
                rgb2lch: u,
                hsl2rgb: c,
                hsl2hsv: h,
                hsl2hwb: f,
                hsl2cmyk: p,
                hsl2keyword: m,
                hsv2rgb: v,
                hsv2hsl: y,
                hsv2hwb: x,
                hsv2cmyk: w,
                hsv2keyword: _,
                hwb2rgb: k,
                hwb2hsl: S,
                hwb2hsv: C,
                hwb2cmyk: D,
                hwb2keyword: M,
                cmyk2rgb: T,
                cmyk2hsl: O,
                cmyk2hsv: A,
                cmyk2hwb: P,
                cmyk2keyword: I,
                keyword2rgb: Y,
                keyword2hsl: z,
                keyword2hsv: V,
                keyword2hwb: B,
                keyword2cmyk: q,
                keyword2lab: U,
                keyword2xyz: G,
                xyz2rgb: F,
                xyz2lab: E,
                xyz2lch: L,
                lab2xyz: R,
                lab2rgb: W,
                lab2lch: $,
                lch2lab: H,
                lch2xyz: N,
                lch2rgb: j
            };
            var Z = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                },
                Q = {};
            for (var X in Z) Q[JSON.stringify(Z[X])] = X
        }, {}],
        4: [function(t, e) {
            var n = t("./conversions"),
                i = function() {
                    return new l
                };
            for (var r in n) {
                i[r + "Raw"] = function(t) {
                    return function(e) {
                        return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e)
                    }
                }(r);
                var o = /(\w+)2(\w+)/.exec(r),
                    a = o[1],
                    s = o[2];
                i[a] = i[a] || {}, i[a][s] = i[r] = function(t) {
                    return function(e) {
                        "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                        var i = n[t](e);
                        if ("string" == typeof i || void 0 === i) return i;
                        for (var r = 0; r < i.length; r++) i[r] = Math.round(i[r]);
                        return i
                    }
                }(r)
            }
            var l = function() {
                this.convs = {}
            };
            l.prototype.routeSpace = function(t, e) {
                var n = e[0];
                return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n))
            }, l.prototype.setValues = function(t, e) {
                return this.space = t, this.convs = {}, this.convs[t] = e, this
            }, l.prototype.getValues = function(t) {
                var e = this.convs[t];
                if (!e) {
                    var n = this.space,
                        r = this.convs[n];
                    e = i[n][t](r), this.convs[t] = e
                }
                return e
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
                l.prototype[t] = function() {
                    return this.routeSpace(t, arguments)
                }
            }), e.exports = i
        }, {
            "./conversions": 3
        }],
        5: [function(t, e) {
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}],
        6: [function(t, e, n) {
            ! function(t, i) {
                "object" == typeof n && "undefined" != typeof e ? e.exports = i() : "function" == typeof define && define.amd ? define(i) : t.moment = i()
            }(this, function() {
                "use strict";

                function n() {
                    return li.apply(null, arguments)
                }

                function i(t) {
                    li = t
                }

                function r(t) {
                    return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
                }

                function o(t) {
                    return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
                }

                function a(t, e) {
                    var n, i = [];
                    for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
                    return i
                }

                function s(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }

                function l(t, e) {
                    for (var n in e) s(e, n) && (t[n] = e[n]);
                    return s(e, "toString") && (t.toString = e.toString), s(e, "valueOf") && (t.valueOf = e.valueOf), t
                }

                function d(t, e, n, i) {
                    return $t(t, e, n, i, !0).utc()
                }

                function u() {
                    return {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        meridiem: null
                    }
                }

                function c(t) {
                    return null == t._pf && (t._pf = u()), t._pf
                }

                function h(t) {
                    if (null == t._isValid) {
                        var e = c(t),
                            n = di.call(e.parsedDateParts, function(t) {
                                return null != t
                            });
                        t._isValid = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n), t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
                    }
                    return t._isValid
                }

                function f(t) {
                    var e = d(NaN);
                    return null != t ? l(c(e), t) : c(e).userInvalidated = !0, e
                }

                function p(t) {
                    return void 0 === t
                }

                function g(t, e) {
                    var n, i, r;
                    if (p(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), p(e._i) || (t._i = e._i), p(e._f) || (t._f = e._f), p(e._l) || (t._l = e._l), p(e._strict) || (t._strict = e._strict), p(e._tzm) || (t._tzm = e._tzm), p(e._isUTC) || (t._isUTC = e._isUTC), p(e._offset) || (t._offset = e._offset), p(e._pf) || (t._pf = c(e)), p(e._locale) || (t._locale = e._locale), ui.length > 0)
                        for (n in ui) i = ui[n], r = e[i], p(r) || (t[i] = r);
                    return t
                }

                function m(t) {
                    g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), ci === !1 && (ci = !0, n.updateOffset(this), ci = !1)
                }

                function v(t) {
                    return t instanceof m || null != t && null != t._isAMomentObject
                }

                function y(t) {
                    return 0 > t ? Math.ceil(t) : Math.floor(t)
                }

                function b(t) {
                    var e = +t,
                        n = 0;
                    return 0 !== e && isFinite(e) && (n = y(e)), n
                }

                function x(t, e, n) {
                    var i, r = Math.min(t.length, e.length),
                        o = Math.abs(t.length - e.length),
                        a = 0;
                    for (i = 0; r > i; i++)(n && t[i] !== e[i] || !n && b(t[i]) !== b(e[i])) && a++;
                    return a + o
                }

                function w(t) {
                    n.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
                }

                function _(t, e) {
                    var i = !0;
                    return l(function() {
                        return null != n.deprecationHandler && n.deprecationHandler(null, t), i && (w(t + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), i = !1), e.apply(this, arguments)
                    }, e)
                }

                function k(t, e) {
                    null != n.deprecationHandler && n.deprecationHandler(t, e), hi[t] || (w(e), hi[t] = !0)
                }

                function S(t) {
                    return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
                }

                function C(t) {
                    return "[object Object]" === Object.prototype.toString.call(t)
                }

                function D(t) {
                    var e, n;
                    for (n in t) e = t[n], S(e) ? this[n] = e : this["_" + n] = e;
                    this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
                }

                function M(t, e) {
                    var n, i = l({}, t);
                    for (n in e) s(e, n) && (C(t[n]) && C(e[n]) ? (i[n] = {}, l(i[n], t[n]), l(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
                    return i
                }

                function T(t) {
                    null != t && this.set(t)
                }

                function O(t) {
                    return t ? t.toLowerCase().replace("_", "-") : t
                }

                function A(t) {
                    for (var e, n, i, r, o = 0; o < t.length;) {
                        for (r = O(t[o]).split("-"), e = r.length, n = O(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
                            if (i = P(r.slice(0, e).join("-"))) return i;
                            if (n && n.length >= e && x(r, n, !0) >= e - 1) break;
                            e--
                        }
                        o++
                    }
                    return null
                }

                function P(n) {
                    var i = null;
                    if (!mi[n] && "undefined" != typeof e && e && e.exports) try {
                        i = pi._abbr, t("./locale/" + n), I(i)
                    } catch (t) {}
                    return mi[n]
                }

                function I(t, e) {
                    var n;
                    return t && (n = p(e) ? L(t) : F(t, e), n && (pi = n)), pi._abbr
                }

                function F(t, e) {
                    return null !== e ? (e.abbr = t, null != mi[t] ? (k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), e = M(mi[t]._config, e)) : null != e.parentLocale && (null != mi[e.parentLocale] ? e = M(mi[e.parentLocale]._config, e) : k("parentLocaleUndefined", "specified parentLocale is not defined yet")), mi[t] = new T(e), I(t), mi[t]) : (delete mi[t], null)
                }

                function E(t, e) {
                    if (null != e) {
                        var n;
                        null != mi[t] && (e = M(mi[t]._config, e)), n = new T(e), n.parentLocale = mi[t], mi[t] = n, I(t)
                    } else null != mi[t] && (null != mi[t].parentLocale ? mi[t] = mi[t].parentLocale : null != mi[t] && delete mi[t]);
                    return mi[t]
                }

                function L(t) {
                    var e;
                    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return pi;
                    if (!r(t)) {
                        if (e = P(t)) return e;
                        t = [t]
                    }
                    return A(t)
                }

                function R() {
                    return fi(mi)
                }

                function $(t, e) {
                    var n = t.toLowerCase();
                    vi[n] = vi[n + "s"] = vi[e] = t
                }

                function W(t) {
                    return "string" == typeof t ? vi[t] || vi[t.toLowerCase()] : void 0
                }

                function H(t) {
                    var e, n, i = {};
                    for (n in t) s(t, n) && (e = W(n), e && (i[e] = t[n]));
                    return i
                }

                function N(t, e) {
                    return function(i) {
                        return null != i ? (Y(this, t, i), n.updateOffset(this, e), this) : j(this, t)
                    }
                }

                function j(t, e) {
                    return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
                }

                function Y(t, e, n) {
                    t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
                }

                function z(t, e) {
                    var n;
                    if ("object" == typeof t)
                        for (n in t) this.set(n, t[n]);
                    else if (t = W(t), S(this[t])) return this[t](e);
                    return this
                }

                function V(t, e, n) {
                    var i = "" + Math.abs(t),
                        r = e - i.length,
                        o = t >= 0;
                    return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
                }

                function B(t, e, n, i) {
                    var r = i;
                    "string" == typeof i && (r = function() {
                        return this[i]()
                    }), t && (wi[t] = r), e && (wi[e[0]] = function() {
                        return V(r.apply(this, arguments), e[1], e[2])
                    }), n && (wi[n] = function() {
                        return this.localeData().ordinal(r.apply(this, arguments), t)
                    })
                }

                function q(t) {
                    return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
                }

                function U(t) {
                    var e, n, i = t.match(yi);
                    for (e = 0, n = i.length; n > e; e++) wi[i[e]] ? i[e] = wi[i[e]] : i[e] = q(i[e]);
                    return function(e) {
                        var r, o = "";
                        for (r = 0; n > r; r++) o += i[r] instanceof Function ? i[r].call(e, t) : i[r];
                        return o
                    }
                }

                function G(t, e) {
                    return t.isValid() ? (e = Z(e, t.localeData()), xi[e] = xi[e] || U(e), xi[e](t)) : t.localeData().invalidDate()
                }

                function Z(t, e) {
                    function n(t) {
                        return e.longDateFormat(t) || t
                    }
                    var i = 5;
                    for (bi.lastIndex = 0; i >= 0 && bi.test(t);) t = t.replace(bi, n), bi.lastIndex = 0, i -= 1;
                    return t
                }

                function Q(t, e, n) {
                    Hi[t] = S(e) ? e : function(t) {
                        return t && n ? n : e
                    }
                }

                function X(t, e) {
                    return s(Hi, t) ? Hi[t](e._strict, e._locale) : new RegExp(J(t))
                }

                function J(t) {
                    return K(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
                        return e || n || i || r
                    }))
                }

                function K(t) {
                    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }

                function tt(t, e) {
                    var n, i = e;
                    for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function(t, n) {
                            n[e] = b(t)
                        }), n = 0; n < t.length; n++) Ni[t[n]] = i
                }

                function et(t, e) {
                    tt(t, function(t, n, i, r) {
                        i._w = i._w || {}, e(t, i._w, i, r)
                    })
                }

                function nt(t, e, n) {
                    null != e && s(Ni, t) && Ni[t](e, n._a, n, t)
                }

                function it(t, e) {
                    return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
                }

                function rt(t, e) {
                    return r(this._months) ? this._months[t.month()] : this._months[Qi.test(e) ? "format" : "standalone"][t.month()]
                }

                function ot(t, e) {
                    return r(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Qi.test(e) ? "format" : "standalone"][t.month()]
                }

                function at(t, e, n) {
                    var i, r, o, a = t.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; 12 > i; ++i) o = d([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
                    return n ? "MMM" === e ? (r = gi.call(this._shortMonthsParse, a), -1 !== r ? r : null) : (r = gi.call(this._longMonthsParse, a), -1 !== r ? r : null) : "MMM" === e ? (r = gi.call(this._shortMonthsParse, a), -1 !== r ? r : (r = gi.call(this._longMonthsParse, a), -1 !== r ? r : null)) : (r = gi.call(this._longMonthsParse, a), -1 !== r ? r : (r = gi.call(this._shortMonthsParse, a), -1 !== r ? r : null))
                }

                function st(t, e, n) {
                    var i, r, o;
                    if (this._monthsParseExact) return at.call(this, t, e, n);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
                        if (r = d([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
                        if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
                        if (!n && this._monthsParse[i].test(t)) return i
                    }
                }

                function lt(t, e) {
                    var n;
                    if (!t.isValid()) return t;
                    if ("string" == typeof e)
                        if (/^\d+$/.test(e)) e = b(e);
                        else if (e = t.localeData().monthsParse(e), "number" != typeof e) return t;
                    return n = Math.min(t.date(), it(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
                }

                function dt(t) {
                    return null != t ? (lt(this, t), n.updateOffset(this, !0), this) : j(this, "Month")
                }

                function ut() {
                    return it(this.year(), this.month())
                }

                function ct(t) {
                    return this._monthsParseExact ? (s(this, "_monthsRegex") || ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex
                }

                function ht(t) {
                    return this._monthsParseExact ? (s(this, "_monthsRegex") || ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex
                }

                function ft() {
                    function t(t, e) {
                        return e.length - t.length
                    }
                    var e, n, i = [],
                        r = [],
                        o = [];
                    for (e = 0; 12 > e; e++) n = d([2e3, e]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
                    for (i.sort(t), r.sort(t), o.sort(t), e = 0; 12 > e; e++) i[e] = K(i[e]), r[e] = K(r[e]), o[e] = K(o[e]);
                    this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
                }

                function pt(t) {
                    var e, n = t._a;
                    return n && -2 === c(t).overflow && (e = n[Yi] < 0 || n[Yi] > 11 ? Yi : n[zi] < 1 || n[zi] > it(n[ji], n[Yi]) ? zi : n[Vi] < 0 || n[Vi] > 24 || 24 === n[Vi] && (0 !== n[Bi] || 0 !== n[qi] || 0 !== n[Ui]) ? Vi : n[Bi] < 0 || n[Bi] > 59 ? Bi : n[qi] < 0 || n[qi] > 59 ? qi : n[Ui] < 0 || n[Ui] > 999 ? Ui : -1, c(t)._overflowDayOfYear && (ji > e || e > zi) && (e = zi), c(t)._overflowWeeks && -1 === e && (e = Gi), c(t)._overflowWeekday && -1 === e && (e = Zi), c(t).overflow = e), t
                }

                function gt(t) {
                    var e, n, i, r, o, a, s = t._i,
                        l = er.exec(s) || nr.exec(s);
                    if (l) {
                        for (c(t).iso = !0, e = 0, n = rr.length; n > e; e++)
                            if (rr[e][1].exec(l[1])) {
                                r = rr[e][0], i = rr[e][2] !== !1;
                                break
                            }
                        if (null == r) return void(t._isValid = !1);
                        if (l[3]) {
                            for (e = 0, n = or.length; n > e; e++)
                                if (or[e][1].exec(l[3])) {
                                    o = (l[2] || " ") + or[e][0];
                                    break
                                }
                            if (null == o) return void(t._isValid = !1)
                        }
                        if (!i && null != o) return void(t._isValid = !1);
                        if (l[4]) {
                            if (!ir.exec(l[4])) return void(t._isValid = !1);
                            a = "Z"
                        }
                        t._f = r + (o || "") + (a || ""), At(t)
                    } else t._isValid = !1
                }

                function mt(t) {
                    var e = ar.exec(t._i);
                    return null !== e ? void(t._d = new Date(+e[1])) : (gt(t), void(t._isValid === !1 && (delete t._isValid, n.createFromInputFallback(t))))
                }

                function vt(t, e, n, i, r, o, a) {
                    var s = new Date(t, e, n, i, r, o, a);
                    return 100 > t && t >= 0 && isFinite(s.getFullYear()) && s.setFullYear(t), s
                }

                function yt(t) {
                    var e = new Date(Date.UTC.apply(null, arguments));
                    return 100 > t && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
                }

                function bt(t) {
                    return xt(t) ? 366 : 365
                }

                function xt(t) {
                    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
                }

                function wt() {
                    return xt(this.year())
                }

                function _t(t, e, n) {
                    var i = 7 + e - n,
                        r = (7 + yt(t, 0, i).getUTCDay() - e) % 7;
                    return -r + i - 1
                }

                function kt(t, e, n, i, r) {
                    var o, a, s = (7 + n - i) % 7,
                        l = _t(t, i, r),
                        d = 1 + 7 * (e - 1) + s + l;
                    return 0 >= d ? (o = t - 1, a = bt(o) + d) : d > bt(t) ? (o = t + 1, a = d - bt(t)) : (o = t, a = d), {
                        year: o,
                        dayOfYear: a
                    }
                }

                function St(t, e, n) {
                    var i, r, o = _t(t.year(), e, n),
                        a = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
                    return 1 > a ? (r = t.year() - 1, i = a + Ct(r, e, n)) : a > Ct(t.year(), e, n) ? (i = a - Ct(t.year(), e, n), r = t.year() + 1) : (r = t.year(), i = a), {
                        week: i,
                        year: r
                    }
                }

                function Ct(t, e, n) {
                    var i = _t(t, e, n),
                        r = _t(t + 1, e, n);
                    return (bt(t) - i + r) / 7
                }

                function Dt(t, e, n) {
                    return null != t ? t : null != e ? e : n
                }

                function Mt(t) {
                    var e = new Date(n.now());
                    return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
                }

                function Tt(t) {
                    var e, n, i, r, o = [];
                    if (!t._d) {
                        for (i = Mt(t), t._w && null == t._a[zi] && null == t._a[Yi] && Ot(t), t._dayOfYear && (r = Dt(t._a[ji], i[ji]), t._dayOfYear > bt(r) && (c(t)._overflowDayOfYear = !0), n = yt(r, 0, t._dayOfYear), t._a[Yi] = n.getUTCMonth(), t._a[zi] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = o[e] = i[e];
                        for (; 7 > e; e++) t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                        24 === t._a[Vi] && 0 === t._a[Bi] && 0 === t._a[qi] && 0 === t._a[Ui] && (t._nextDay = !0, t._a[Vi] = 0), t._d = (t._useUTC ? yt : vt).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[Vi] = 24)
                    }
                }

                function Ot(t) {
                    var e, n, i, r, o, a, s, l;
                    e = t._w, null != e.GG || null != e.W || null != e.E ? (o = 1, a = 4, n = Dt(e.GG, t._a[ji], St(Wt(), 1, 4).year), i = Dt(e.W, 1), r = Dt(e.E, 1), (1 > r || r > 7) && (l = !0)) : (o = t._locale._week.dow, a = t._locale._week.doy, n = Dt(e.gg, t._a[ji], St(Wt(), o, a).year), i = Dt(e.w, 1), null != e.d ? (r = e.d, (0 > r || r > 6) && (l = !0)) : null != e.e ? (r = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : r = o), 1 > i || i > Ct(n, o, a) ? c(t)._overflowWeeks = !0 : null != l ? c(t)._overflowWeekday = !0 : (s = kt(n, i, r, o, a), t._a[ji] = s.year, t._dayOfYear = s.dayOfYear)
                }

                function At(t) {
                    if (t._f === n.ISO_8601) return void gt(t);
                    t._a = [], c(t).empty = !0;
                    var e, i, r, o, a, s = "" + t._i,
                        l = s.length,
                        d = 0;
                    for (r = Z(t._f, t._locale).match(yi) || [], e = 0; e < r.length; e++) o = r[e], i = (s.match(X(o, t)) || [])[0], i && (a = s.substr(0, s.indexOf(i)), a.length > 0 && c(t).unusedInput.push(a), s = s.slice(s.indexOf(i) + i.length), d += i.length), wi[o] ? (i ? c(t).empty = !1 : c(t).unusedTokens.push(o), nt(o, i, t)) : t._strict && !i && c(t).unusedTokens.push(o);
                    c(t).charsLeftOver = l - d, s.length > 0 && c(t).unusedInput.push(s), c(t).bigHour === !0 && t._a[Vi] <= 12 && t._a[Vi] > 0 && (c(t).bigHour = void 0), c(t).parsedDateParts = t._a.slice(0), c(t).meridiem = t._meridiem, t._a[Vi] = Pt(t._locale, t._a[Vi], t._meridiem), Tt(t), pt(t)
                }

                function Pt(t, e, n) {
                    var i;
                    return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && 12 > e && (e += 12), i || 12 !== e || (e = 0), e) : e
                }

                function It(t) {
                    var e, n, i, r, o;
                    if (0 === t._f.length) return c(t).invalidFormat = !0, void(t._d = new Date(NaN));
                    for (r = 0; r < t._f.length; r++) o = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], At(e), h(e) && (o += c(e).charsLeftOver, o += 10 * c(e).unusedTokens.length, c(e).score = o, (null == i || i > o) && (i = o, n = e));
                    l(t, n || e)
                }

                function Ft(t) {
                    if (!t._d) {
                        var e = H(t._i);
                        t._a = a([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                            return t && parseInt(t, 10)
                        }), Tt(t)
                    }
                }

                function Et(t) {
                    var e = new m(pt(Lt(t)));
                    return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
                }

                function Lt(t) {
                    var e = t._i,
                        n = t._f;
                    return t._locale = t._locale || L(t._l), null === e || void 0 === n && "" === e ? f({
                        nullInput: !0
                    }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), v(e) ? new m(pt(e)) : (r(n) ? It(t) : n ? At(t) : o(e) ? t._d = e : Rt(t), h(t) || (t._d = null), t))
                }

                function Rt(t) {
                    var e = t._i;
                    void 0 === e ? t._d = new Date(n.now()) : o(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? mt(t) : r(e) ? (t._a = a(e.slice(0), function(t) {
                        return parseInt(t, 10)
                    }), Tt(t)) : "object" == typeof e ? Ft(t) : "number" == typeof e ? t._d = new Date(e) : n.createFromInputFallback(t)
                }

                function $t(t, e, n, i, r) {
                    var o = {};
                    return "boolean" == typeof n && (i = n, n = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = r, o._l = n, o._i = t, o._f = e, o._strict = i, Et(o)
                }

                function Wt(t, e, n, i) {
                    return $t(t, e, n, i, !1)
                }

                function Ht(t, e) {
                    var n, i;
                    if (1 === e.length && r(e[0]) && (e = e[0]), !e.length) return Wt();
                    for (n = e[0], i = 1; i < e.length; ++i)(!e[i].isValid() || e[i][t](n)) && (n = e[i]);
                    return n
                }

                function Nt() {
                    var t = [].slice.call(arguments, 0);
                    return Ht("isBefore", t)
                }

                function jt() {
                    var t = [].slice.call(arguments, 0);
                    return Ht("isAfter", t)
                }

                function Yt(t) {
                    var e = H(t),
                        n = e.year || 0,
                        i = e.quarter || 0,
                        r = e.month || 0,
                        o = e.week || 0,
                        a = e.day || 0,
                        s = e.hour || 0,
                        l = e.minute || 0,
                        d = e.second || 0,
                        u = e.millisecond || 0;
                    this._milliseconds = +u + 1e3 * d + 6e4 * l + 1e3 * s * 60 * 60, this._days = +a + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = L(), this._bubble()
                }

                function zt(t) {
                    return t instanceof Yt
                }

                function Vt(t, e) {
                    B(t, 0, 0, function() {
                        var t = this.utcOffset(),
                            n = "+";
                        return 0 > t && (t = -t, n = "-"), n + V(~~(t / 60), 2) + e + V(~~t % 60, 2)
                    })
                }

                function Bt(t, e) {
                    var n = (e || "").match(t) || [],
                        i = n[n.length - 1] || [],
                        r = (i + "").match(cr) || ["-", 0, 0],
                        o = +(60 * r[1]) + b(r[2]);
                    return "+" === r[0] ? o : -o
                }

                function qt(t, e) {
                    var i, r;
                    return e._isUTC ? (i = e.clone(), r = (v(t) || o(t) ? t.valueOf() : Wt(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + r), n.updateOffset(i, !1), i) : Wt(t).local()
                }

                function Ut(t) {
                    return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
                }

                function Gt(t, e) {
                    var i, r = this._offset || 0;
                    return this.isValid() ? null != t ? ("string" == typeof t ? t = Bt(Ri, t) : Math.abs(t) < 16 && (t *= 60), !this._isUTC && e && (i = Ut(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), r !== t && (!e || this._changeInProgress ? ce(this, oe(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : Ut(this) : null != t ? this : NaN
                }

                function Zt(t, e) {
                    return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
                }

                function Qt(t) {
                    return this.utcOffset(0, t)
                }

                function Xt(t) {
                    return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ut(this), "m")), this
                }

                function Jt() {
                    return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Bt(Li, this._i)), this
                }

                function Kt(t) {
                    return !!this.isValid() && (t = t ? Wt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
                }

                function te() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }

                function ee() {
                    if (!p(this._isDSTShifted)) return this._isDSTShifted;
                    var t = {};
                    if (g(t, this), t = Lt(t), t._a) {
                        var e = t._isUTC ? d(t._a) : Wt(t._a);
                        this._isDSTShifted = this.isValid() && x(t._a, e.toArray()) > 0
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                }

                function ne() {
                    return !!this.isValid() && !this._isUTC
                }

                function ie() {
                    return !!this.isValid() && this._isUTC
                }

                function re() {
                    return !!this.isValid() && (this._isUTC && 0 === this._offset)
                }

                function oe(t, e) {
                    var n, i, r, o = t,
                        a = null;
                    return zt(t) ? o = {
                        ms: t._milliseconds,
                        d: t._days,
                        M: t._months
                    } : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (a = hr.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = {
                        y: 0,
                        d: b(a[zi]) * n,
                        h: b(a[Vi]) * n,
                        m: b(a[Bi]) * n,
                        s: b(a[qi]) * n,
                        ms: b(a[Ui]) * n
                    }) : (a = fr.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = {
                        y: ae(a[2], n),
                        M: ae(a[3], n),
                        w: ae(a[4], n),
                        d: ae(a[5], n),
                        h: ae(a[6], n),
                        m: ae(a[7], n),
                        s: ae(a[8], n)
                    }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = le(Wt(o.from), Wt(o.to)), o = {}, o.ms = r.milliseconds, o.M = r.months), i = new Yt(o), zt(t) && s(t, "_locale") && (i._locale = t._locale), i
                }

                function ae(t, e) {
                    var n = t && parseFloat(t.replace(",", "."));
                    return (isNaN(n) ? 0 : n) * e
                }

                function se(t, e) {
                    var n = {
                        milliseconds: 0,
                        months: 0
                    };
                    return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
                }

                function le(t, e) {
                    var n;
                    return t.isValid() && e.isValid() ? (e = qt(e, t), t.isBefore(e) ? n = se(t, e) : (n = se(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                        milliseconds: 0,
                        months: 0
                    }
                }

                function de(t) {
                    return 0 > t ? -1 * Math.round(-1 * t) : Math.round(t)
                }

                function ue(t, e) {
                    return function(n, i) {
                        var r, o;
                        return null === i || isNaN(+i) || (k(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, r = oe(n, i), ce(this, r, t), this
                    }
                }

                function ce(t, e, i, r) {
                    var o = e._milliseconds,
                        a = de(e._days),
                        s = de(e._months);
                    t.isValid() && (r = null == r || r, o && t._d.setTime(t._d.valueOf() + o * i), a && Y(t, "Date", j(t, "Date") + a * i), s && lt(t, j(t, "Month") + s * i), r && n.updateOffset(t, a || s))
                }

                function he(t, e) {
                    var n = t || Wt(),
                        i = qt(n, this).startOf("day"),
                        r = this.diff(i, "days", !0),
                        o = -6 > r ? "sameElse" : -1 > r ? "lastWeek" : 0 > r ? "lastDay" : 1 > r ? "sameDay" : 2 > r ? "nextDay" : 7 > r ? "nextWeek" : "sameElse",
                        a = e && (S(e[o]) ? e[o]() : e[o]);
                    return this.format(a || this.localeData().calendar(o, this, Wt(n)))
                }

                function fe() {
                    return new m(this)
                }

                function pe(t, e) {
                    var n = v(t) ? t : Wt(t);
                    return !(!this.isValid() || !n.isValid()) && (e = W(p(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
                }

                function ge(t, e) {
                    var n = v(t) ? t : Wt(t);
                    return !(!this.isValid() || !n.isValid()) && (e = W(p(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
                }

                function me(t, e, n, i) {
                    return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
                }

                function ve(t, e) {
                    var n, i = v(t) ? t : Wt(t);
                    return !(!this.isValid() || !i.isValid()) && (e = W(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
                }

                function ye(t, e) {
                    return this.isSame(t, e) || this.isAfter(t, e)
                }

                function be(t, e) {
                    return this.isSame(t, e) || this.isBefore(t, e)
                }

                function xe(t, e, n) {
                    var i, r, o, a;
                    return this.isValid() ? (i = qt(t, this), i.isValid() ? (r = 6e4 * (i.utcOffset() - this.utcOffset()), e = W(e), "year" === e || "month" === e || "quarter" === e ? (a = we(this, i), "quarter" === e ? a /= 3 : "year" === e && (a /= 12)) : (o = this - i, a = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - r) / 864e5 : "week" === e ? (o - r) / 6048e5 : o), n ? a : y(a)) : NaN) : NaN
                }

                function we(t, e) {
                    var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                        o = t.clone().add(r, "months");
                    return 0 > e - o ? (n = t.clone().add(r - 1, "months"), i = (e - o) / (o - n)) : (n = t.clone().add(r + 1, "months"), i = (e - o) / (n - o)), -(r + i) || 0
                }

                function _e() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }

                function ke() {
                    var t = this.clone().utc();
                    return 0 < t.year() && t.year() <= 9999 ? S(Date.prototype.toISOString) ? this.toDate().toISOString() : G(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : G(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }

                function Se(t) {
                    t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                    var e = G(this, t);
                    return this.localeData().postformat(e)
                }

                function Ce(t, e) {
                    return this.isValid() && (v(t) && t.isValid() || Wt(t).isValid()) ? oe({
                        to: this,
                        from: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }

                function De(t) {
                    return this.from(Wt(), t)
                }

                function Me(t, e) {
                    return this.isValid() && (v(t) && t.isValid() || Wt(t).isValid()) ? oe({
                        from: this,
                        to: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }

                function Te(t) {
                    return this.to(Wt(), t)
                }

                function Oe(t) {
                    var e;
                    return void 0 === t ? this._locale._abbr : (e = L(t), null != e && (this._locale = e), this)
                }

                function Ae() {
                    return this._locale
                }

                function Pe(t) {
                    switch (t = W(t)) {
                        case "year":
                            this.month(0);
                        case "quarter":
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                        case "date":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
                }

                function Ie(t) {
                    return t = W(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
                }

                function Fe() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }

                function Ee() {
                    return Math.floor(this.valueOf() / 1e3)
                }

                function Le() {
                    return this._offset ? new Date(this.valueOf()) : this._d
                }

                function Re() {
                    var t = this;
                    return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
                }

                function $e() {
                    var t = this;
                    return {
                        years: t.year(),
                        months: t.month(),
                        date: t.date(),
                        hours: t.hours(),
                        minutes: t.minutes(),
                        seconds: t.seconds(),
                        milliseconds: t.milliseconds()
                    }
                }

                function We() {
                    return this.isValid() ? this.toISOString() : null
                }

                function He() {
                    return h(this)
                }

                function Ne() {
                    return l({}, c(this))
                }

                function je() {
                    return c(this).overflow
                }

                function Ye() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }

                function ze(t, e) {
                    B(0, [t, t.length], 0, e)
                }

                function Ve(t) {
                    return Ge.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }

                function Be(t) {
                    return Ge.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
                }

                function qe() {
                    return Ct(this.year(), 1, 4)
                }

                function Ue() {
                    var t = this.localeData()._week;
                    return Ct(this.year(), t.dow, t.doy)
                }

                function Ge(t, e, n, i, r) {
                    var o;
                    return null == t ? St(this, i, r).year : (o = Ct(t, i, r), e > o && (e = o), Ze.call(this, t, e, n, i, r))
                }

                function Ze(t, e, n, i, r) {
                    var o = kt(t, e, n, i, r),
                        a = yt(o.year, 0, o.dayOfYear);
                    return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
                }

                function Qe(t) {
                    return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
                }

                function Xe(t) {
                    return St(t, this._week.dow, this._week.doy).week
                }

                function Je() {
                    return this._week.dow
                }

                function Ke() {
                    return this._week.doy
                }

                function tn(t) {
                    var e = this.localeData().week(this);
                    return null == t ? e : this.add(7 * (t - e), "d")
                }

                function en(t) {
                    var e = St(this, 1, 4).week;
                    return null == t ? e : this.add(7 * (t - e), "d")
                }

                function nn(t, e) {
                    return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
                }

                function rn(t, e) {
                    return r(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()]
                }

                function on(t) {
                    return this._weekdaysShort[t.day()]
                }

                function an(t) {
                    return this._weekdaysMin[t.day()]
                }

                function sn(t, e, n) {
                    var i, r, o, a = t.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; 7 > i; ++i) o = d([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
                    return n ? "dddd" === e ? (r = gi.call(this._weekdaysParse, a), -1 !== r ? r : null) : "ddd" === e ? (r = gi.call(this._shortWeekdaysParse, a), -1 !== r ? r : null) : (r = gi.call(this._minWeekdaysParse, a), -1 !== r ? r : null) : "dddd" === e ? (r = gi.call(this._weekdaysParse, a), -1 !== r ? r : (r = gi.call(this._shortWeekdaysParse, a), -1 !== r ? r : (r = gi.call(this._minWeekdaysParse, a), -1 !== r ? r : null))) : "ddd" === e ? (r = gi.call(this._shortWeekdaysParse, a), -1 !== r ? r : (r = gi.call(this._weekdaysParse, a), -1 !== r ? r : (r = gi.call(this._minWeekdaysParse, a), -1 !== r ? r : null))) : (r = gi.call(this._minWeekdaysParse, a), -1 !== r ? r : (r = gi.call(this._weekdaysParse, a), -1 !== r ? r : (r = gi.call(this._shortWeekdaysParse, a), -1 !== r ? r : null)))
                }

                function ln(t, e, n) {
                    var i, r, o;
                    if (this._weekdaysParseExact) return sn.call(this, t, e, n);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; 7 > i; i++) {
                        if (r = d([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
                        if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
                        if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
                        if (!n && this._weekdaysParse[i].test(t)) return i
                    }
                }

                function dn(t) {
                    if (!this.isValid()) return null != t ? this : NaN;
                    var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != t ? (t = nn(t, this.localeData()), this.add(t - e, "d")) : e
                }

                function un(t) {
                    if (!this.isValid()) return null != t ? this : NaN;
                    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == t ? e : this.add(t - e, "d")
                }

                function cn(t) {
                    return this.isValid() ? null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7) : null != t ? this : NaN
                }

                function hn(t) {
                    return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || gn.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex
                }

                function fn(t) {
                    return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || gn.call(this),
                        t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
                }

                function pn(t) {
                    return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || gn.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
                }

                function gn() {
                    function t(t, e) {
                        return e.length - t.length
                    }
                    var e, n, i, r, o, a = [],
                        s = [],
                        l = [],
                        u = [];
                    for (e = 0; 7 > e; e++) n = d([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), a.push(i), s.push(r), l.push(o), u.push(i), u.push(r), u.push(o);
                    for (a.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; 7 > e; e++) s[e] = K(s[e]), l[e] = K(l[e]), u[e] = K(u[e]);
                    this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
                }

                function mn(t) {
                    var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == t ? e : this.add(t - e, "d")
                }

                function vn() {
                    return this.hours() % 12 || 12
                }

                function yn() {
                    return this.hours() || 24
                }

                function bn(t, e) {
                    B(t, 0, 0, function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), e)
                    })
                }

                function xn(t, e) {
                    return e._meridiemParse
                }

                function wn(t) {
                    return "p" === (t + "").toLowerCase().charAt(0)
                }

                function _n(t, e, n) {
                    return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                }

                function kn(t, e) {
                    e[Ui] = b(1e3 * ("0." + t))
                }

                function Sn() {
                    return this._isUTC ? "UTC" : ""
                }

                function Cn() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }

                function Dn(t) {
                    return Wt(1e3 * t)
                }

                function Mn() {
                    return Wt.apply(null, arguments).parseZone()
                }

                function Tn(t, e, n) {
                    var i = this._calendar[t];
                    return S(i) ? i.call(e, n) : i
                }

                function On(t) {
                    var e = this._longDateFormat[t],
                        n = this._longDateFormat[t.toUpperCase()];
                    return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
                        return t.slice(1)
                    }), this._longDateFormat[t])
                }

                function An() {
                    return this._invalidDate
                }

                function Pn(t) {
                    return this._ordinal.replace("%d", t)
                }

                function In(t) {
                    return t
                }

                function Fn(t, e, n, i) {
                    var r = this._relativeTime[n];
                    return S(r) ? r(t, e, n, i) : r.replace(/%d/i, t)
                }

                function En(t, e) {
                    var n = this._relativeTime[t > 0 ? "future" : "past"];
                    return S(n) ? n(e) : n.replace(/%s/i, e)
                }

                function Ln(t, e, n, i) {
                    var r = L(),
                        o = d().set(i, e);
                    return r[n](o, t)
                }

                function Rn(t, e, n) {
                    if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e) return Ln(t, e, n, "month");
                    var i, r = [];
                    for (i = 0; 12 > i; i++) r[i] = Ln(t, i, n, "month");
                    return r
                }

                function $n(t, e, n, i) {
                    "boolean" == typeof t ? ("number" == typeof e && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, "number" == typeof e && (n = e, e = void 0), e = e || "");
                    var r = L(),
                        o = t ? r._week.dow : 0;
                    if (null != n) return Ln(e, (n + o) % 7, i, "day");
                    var a, s = [];
                    for (a = 0; 7 > a; a++) s[a] = Ln(e, (a + o) % 7, i, "day");
                    return s
                }

                function Wn(t, e) {
                    return Rn(t, e, "months")
                }

                function Hn(t, e) {
                    return Rn(t, e, "monthsShort")
                }

                function Nn(t, e, n) {
                    return $n(t, e, n, "weekdays")
                }

                function jn(t, e, n) {
                    return $n(t, e, n, "weekdaysShort")
                }

                function Yn(t, e, n) {
                    return $n(t, e, n, "weekdaysMin")
                }

                function zn() {
                    var t = this._data;
                    return this._milliseconds = Nr(this._milliseconds), this._days = Nr(this._days), this._months = Nr(this._months), t.milliseconds = Nr(t.milliseconds), t.seconds = Nr(t.seconds), t.minutes = Nr(t.minutes), t.hours = Nr(t.hours), t.months = Nr(t.months), t.years = Nr(t.years), this
                }

                function Vn(t, e, n, i) {
                    var r = oe(e, n);
                    return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble()
                }

                function Bn(t, e) {
                    return Vn(this, t, e, 1)
                }

                function qn(t, e) {
                    return Vn(this, t, e, -1)
                }

                function Un(t) {
                    return 0 > t ? Math.floor(t) : Math.ceil(t)
                }

                function Gn() {
                    var t, e, n, i, r, o = this._milliseconds,
                        a = this._days,
                        s = this._months,
                        l = this._data;
                    return o >= 0 && a >= 0 && s >= 0 || 0 >= o && 0 >= a && 0 >= s || (o += 864e5 * Un(Qn(s) + a), a = 0, s = 0), l.milliseconds = o % 1e3, t = y(o / 1e3), l.seconds = t % 60, e = y(t / 60), l.minutes = e % 60, n = y(e / 60), l.hours = n % 24, a += y(n / 24), r = y(Zn(a)), s += r, a -= Un(Qn(r)), i = y(s / 12), s %= 12, l.days = a, l.months = s, l.years = i, this
                }

                function Zn(t) {
                    return 4800 * t / 146097
                }

                function Qn(t) {
                    return 146097 * t / 4800
                }

                function Xn(t) {
                    var e, n, i = this._milliseconds;
                    if (t = W(t), "month" === t || "year" === t) return e = this._days + i / 864e5, n = this._months + Zn(e), "month" === t ? n : n / 12;
                    switch (e = this._days + Math.round(Qn(this._months)), t) {
                        case "week":
                            return e / 7 + i / 6048e5;
                        case "day":
                            return e + i / 864e5;
                        case "hour":
                            return 24 * e + i / 36e5;
                        case "minute":
                            return 1440 * e + i / 6e4;
                        case "second":
                            return 86400 * e + i / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * e) + i;
                        default:
                            throw new Error("Unknown unit " + t)
                    }
                }

                function Jn() {
                    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12)
                }

                function Kn(t) {
                    return function() {
                        return this.as(t)
                    }
                }

                function ti(t) {
                    return t = W(t), this[t + "s"]()
                }

                function ei(t) {
                    return function() {
                        return this._data[t]
                    }
                }

                function ni() {
                    return y(this.days() / 7)
                }

                function ii(t, e, n, i, r) {
                    return r.relativeTime(e || 1, !!n, t, i)
                }

                function ri(t, e, n) {
                    var i = oe(t).abs(),
                        r = no(i.as("s")),
                        o = no(i.as("m")),
                        a = no(i.as("h")),
                        s = no(i.as("d")),
                        l = no(i.as("M")),
                        d = no(i.as("y")),
                        u = r < io.s && ["s", r] || 1 >= o && ["m"] || o < io.m && ["mm", o] || 1 >= a && ["h"] || a < io.h && ["hh", a] || 1 >= s && ["d"] || s < io.d && ["dd", s] || 1 >= l && ["M"] || l < io.M && ["MM", l] || 1 >= d && ["y"] || ["yy", d];
                    return u[2] = e, u[3] = +t > 0, u[4] = n, ii.apply(null, u)
                }

                function oi(t, e) {
                    return void 0 !== io[t] && (void 0 === e ? io[t] : (io[t] = e, !0))
                }

                function ai(t) {
                    var e = this.localeData(),
                        n = ri(this, !t, e);
                    return t && (n = e.pastFuture(+this, n)), e.postformat(n)
                }

                function si() {
                    var t, e, n, i = ro(this._milliseconds) / 1e3,
                        r = ro(this._days),
                        o = ro(this._months);
                    t = y(i / 60), e = y(t / 60), i %= 60, t %= 60, n = y(o / 12), o %= 12;
                    var a = n,
                        s = o,
                        l = r,
                        d = e,
                        u = t,
                        c = i,
                        h = this.asSeconds();
                    return h ? (0 > h ? "-" : "") + "P" + (a ? a + "Y" : "") + (s ? s + "M" : "") + (l ? l + "D" : "") + (d || u || c ? "T" : "") + (d ? d + "H" : "") + (u ? u + "M" : "") + (c ? c + "S" : "") : "P0D"
                }
                var li, di;
                di = Array.prototype.some ? Array.prototype.some : function(t) {
                    for (var e = Object(this), n = e.length >>> 0, i = 0; n > i; i++)
                        if (i in e && t.call(this, e[i], i, e)) return !0;
                    return !1
                };
                var ui = n.momentProperties = [],
                    ci = !1,
                    hi = {};
                n.suppressDeprecationWarnings = !1, n.deprecationHandler = null;
                var fi;
                fi = Object.keys ? Object.keys : function(t) {
                    var e, n = [];
                    for (e in t) s(t, e) && n.push(e);
                    return n
                };
                var pi, gi, mi = {},
                    vi = {},
                    yi = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    bi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    xi = {},
                    wi = {},
                    _i = /\d/,
                    ki = /\d\d/,
                    Si = /\d{3}/,
                    Ci = /\d{4}/,
                    Di = /[+-]?\d{6}/,
                    Mi = /\d\d?/,
                    Ti = /\d\d\d\d?/,
                    Oi = /\d\d\d\d\d\d?/,
                    Ai = /\d{1,3}/,
                    Pi = /\d{1,4}/,
                    Ii = /[+-]?\d{1,6}/,
                    Fi = /\d+/,
                    Ei = /[+-]?\d+/,
                    Li = /Z|[+-]\d\d:?\d\d/gi,
                    Ri = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    $i = /[+-]?\d+(\.\d{1,3})?/,
                    Wi = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                    Hi = {},
                    Ni = {},
                    ji = 0,
                    Yi = 1,
                    zi = 2,
                    Vi = 3,
                    Bi = 4,
                    qi = 5,
                    Ui = 6,
                    Gi = 7,
                    Zi = 8;
                gi = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                    var e;
                    for (e = 0; e < this.length; ++e)
                        if (this[e] === t) return e;
                    return -1
                }, B("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), B("MMM", 0, 0, function(t) {
                    return this.localeData().monthsShort(this, t)
                }), B("MMMM", 0, 0, function(t) {
                    return this.localeData().months(this, t)
                }), $("month", "M"), Q("M", Mi), Q("MM", Mi, ki), Q("MMM", function(t, e) {
                    return e.monthsShortRegex(t)
                }), Q("MMMM", function(t, e) {
                    return e.monthsRegex(t)
                }), tt(["M", "MM"], function(t, e) {
                    e[Yi] = b(t) - 1
                }), tt(["MMM", "MMMM"], function(t, e, n, i) {
                    var r = n._locale.monthsParse(t, i, n._strict);
                    null != r ? e[Yi] = r : c(n).invalidMonth = t
                });
                var Qi = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
                    Xi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    Ji = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    Ki = Wi,
                    tr = Wi,
                    er = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                    nr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                    ir = /Z|[+-]\d\d(?::?\d\d)?/,
                    rr = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                        ["YYYY-DDD", /\d{4}-\d{3}/],
                        ["YYYY-MM", /\d{4}-\d\d/, !1],
                        ["YYYYYYMMDD", /[+-]\d{10}/],
                        ["YYYYMMDD", /\d{8}/],
                        ["GGGG[W]WWE", /\d{4}W\d{3}/],
                        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                        ["YYYYDDD", /\d{7}/]
                    ],
                    or = [
                        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                        ["HH:mm", /\d\d:\d\d/],
                        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                        ["HHmmss", /\d\d\d\d\d\d/],
                        ["HHmm", /\d\d\d\d/],
                        ["HH", /\d\d/]
                    ],
                    ar = /^\/?Date\((\-?\d+)/i;
                n.createFromInputFallback = _("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) {
                    t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
                }), B("Y", 0, 0, function() {
                    var t = this.year();
                    return 9999 >= t ? "" + t : "+" + t
                }), B(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), $("year", "y"), Q("Y", Ei), Q("YY", Mi, ki), Q("YYYY", Pi, Ci), Q("YYYYY", Ii, Di), Q("YYYYYY", Ii, Di), tt(["YYYYY", "YYYYYY"], ji), tt("YYYY", function(t, e) {
                    e[ji] = 2 === t.length ? n.parseTwoDigitYear(t) : b(t)
                }), tt("YY", function(t, e) {
                    e[ji] = n.parseTwoDigitYear(t)
                }), tt("Y", function(t, e) {
                    e[ji] = parseInt(t, 10)
                }), n.parseTwoDigitYear = function(t) {
                    return b(t) + (b(t) > 68 ? 1900 : 2e3)
                };
                var sr = N("FullYear", !0);
                n.ISO_8601 = function() {};
                var lr = _("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                        var t = Wt.apply(null, arguments);
                        return this.isValid() && t.isValid() ? this > t ? this : t : f()
                    }),
                    dr = _("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                        var t = Wt.apply(null, arguments);
                        return this.isValid() && t.isValid() ? t > this ? this : t : f()
                    }),
                    ur = function() {
                        return Date.now ? Date.now() : +new Date
                    };
                Vt("Z", ":"), Vt("ZZ", ""), Q("Z", Ri), Q("ZZ", Ri), tt(["Z", "ZZ"], function(t, e, n) {
                    n._useUTC = !0, n._tzm = Bt(Ri, t)
                });
                var cr = /([\+\-]|\d\d)/gi;
                n.updateOffset = function() {};
                var hr = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
                    fr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                oe.fn = Yt.prototype;
                var pr = ue(1, "add"),
                    gr = ue(-1, "subtract");
                n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var mr = _("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                    return void 0 === t ? this.localeData() : this.locale(t)
                });
                B(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), B(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), ze("gggg", "weekYear"), ze("ggggg", "weekYear"), ze("GGGG", "isoWeekYear"), ze("GGGGG", "isoWeekYear"), $("weekYear", "gg"), $("isoWeekYear", "GG"), Q("G", Ei), Q("g", Ei), Q("GG", Mi, ki), Q("gg", Mi, ki), Q("GGGG", Pi, Ci), Q("gggg", Pi, Ci), Q("GGGGG", Ii, Di), Q("ggggg", Ii, Di), et(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
                    e[i.substr(0, 2)] = b(t)
                }), et(["gg", "GG"], function(t, e, i, r) {
                    e[r] = n.parseTwoDigitYear(t)
                }), B("Q", 0, "Qo", "quarter"), $("quarter", "Q"), Q("Q", _i), tt("Q", function(t, e) {
                    e[Yi] = 3 * (b(t) - 1)
                }), B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), $("week", "w"), $("isoWeek", "W"), Q("w", Mi), Q("ww", Mi, ki), Q("W", Mi), Q("WW", Mi, ki), et(["w", "ww", "W", "WW"], function(t, e, n, i) {
                    e[i.substr(0, 1)] = b(t)
                });
                var vr = {
                    dow: 0,
                    doy: 6
                };
                B("D", ["DD", 2], "Do", "date"), $("date", "D"), Q("D", Mi), Q("DD", Mi, ki), Q("Do", function(t, e) {
                    return t ? e._ordinalParse : e._ordinalParseLenient
                }), tt(["D", "DD"], zi), tt("Do", function(t, e) {
                    e[zi] = b(t.match(Mi)[0], 10)
                });
                var yr = N("Date", !0);
                B("d", 0, "do", "day"), B("dd", 0, 0, function(t) {
                    return this.localeData().weekdaysMin(this, t)
                }), B("ddd", 0, 0, function(t) {
                    return this.localeData().weekdaysShort(this, t)
                }), B("dddd", 0, 0, function(t) {
                    return this.localeData().weekdays(this, t)
                }), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), $("day", "d"), $("weekday", "e"), $("isoWeekday", "E"), Q("d", Mi), Q("e", Mi), Q("E", Mi), Q("dd", function(t, e) {
                    return e.weekdaysMinRegex(t)
                }), Q("ddd", function(t, e) {
                    return e.weekdaysShortRegex(t)
                }), Q("dddd", function(t, e) {
                    return e.weekdaysRegex(t)
                }), et(["dd", "ddd", "dddd"], function(t, e, n, i) {
                    var r = n._locale.weekdaysParse(t, i, n._strict);
                    null != r ? e.d = r : c(n).invalidWeekday = t
                }), et(["d", "e", "E"], function(t, e, n, i) {
                    e[i] = b(t)
                });
                var br = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    xr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    wr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    _r = Wi,
                    kr = Wi,
                    Sr = Wi;
                B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), $("dayOfYear", "DDD"), Q("DDD", Ai), Q("DDDD", Si), tt(["DDD", "DDDD"], function(t, e, n) {
                    n._dayOfYear = b(t)
                }), B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, vn), B("k", ["kk", 2], 0, yn), B("hmm", 0, 0, function() {
                    return "" + vn.apply(this) + V(this.minutes(), 2)
                }), B("hmmss", 0, 0, function() {
                    return "" + vn.apply(this) + V(this.minutes(), 2) + V(this.seconds(), 2)
                }), B("Hmm", 0, 0, function() {
                    return "" + this.hours() + V(this.minutes(), 2)
                }), B("Hmmss", 0, 0, function() {
                    return "" + this.hours() + V(this.minutes(), 2) + V(this.seconds(), 2)
                }), bn("a", !0), bn("A", !1), $("hour", "h"), Q("a", xn), Q("A", xn), Q("H", Mi), Q("h", Mi), Q("HH", Mi, ki), Q("hh", Mi, ki), Q("hmm", Ti), Q("hmmss", Oi), Q("Hmm", Ti), Q("Hmmss", Oi), tt(["H", "HH"], Vi), tt(["a", "A"], function(t, e, n) {
                    n._isPm = n._locale.isPM(t), n._meridiem = t
                }), tt(["h", "hh"], function(t, e, n) {
                    e[Vi] = b(t), c(n).bigHour = !0
                }), tt("hmm", function(t, e, n) {
                    var i = t.length - 2;
                    e[Vi] = b(t.substr(0, i)), e[Bi] = b(t.substr(i)), c(n).bigHour = !0
                }), tt("hmmss", function(t, e, n) {
                    var i = t.length - 4,
                        r = t.length - 2;
                    e[Vi] = b(t.substr(0, i)), e[Bi] = b(t.substr(i, 2)), e[qi] = b(t.substr(r)), c(n).bigHour = !0
                }), tt("Hmm", function(t, e) {
                    var n = t.length - 2;
                    e[Vi] = b(t.substr(0, n)), e[Bi] = b(t.substr(n))
                }), tt("Hmmss", function(t, e) {
                    var n = t.length - 4,
                        i = t.length - 2;
                    e[Vi] = b(t.substr(0, n)), e[Bi] = b(t.substr(n, 2)), e[qi] = b(t.substr(i))
                });
                var Cr = /[ap]\.?m?\.?/i,
                    Dr = N("Hours", !0);
                B("m", ["mm", 2], 0, "minute"), $("minute", "m"), Q("m", Mi), Q("mm", Mi, ki), tt(["m", "mm"], Bi);
                var Mr = N("Minutes", !1);
                B("s", ["ss", 2], 0, "second"), $("second", "s"), Q("s", Mi), Q("ss", Mi, ki), tt(["s", "ss"], qi);
                var Tr = N("Seconds", !1);
                B("S", 0, 0, function() {
                    return ~~(this.millisecond() / 100)
                }), B(0, ["SS", 2], 0, function() {
                    return ~~(this.millisecond() / 10)
                }), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function() {
                    return 10 * this.millisecond()
                }), B(0, ["SSSSS", 5], 0, function() {
                    return 100 * this.millisecond()
                }), B(0, ["SSSSSS", 6], 0, function() {
                    return 1e3 * this.millisecond()
                }), B(0, ["SSSSSSS", 7], 0, function() {
                    return 1e4 * this.millisecond()
                }), B(0, ["SSSSSSSS", 8], 0, function() {
                    return 1e5 * this.millisecond()
                }), B(0, ["SSSSSSSSS", 9], 0, function() {
                    return 1e6 * this.millisecond()
                }), $("millisecond", "ms"), Q("S", Ai, _i), Q("SS", Ai, ki), Q("SSS", Ai, Si);
                var Or;
                for (Or = "SSSS"; Or.length <= 9; Or += "S") Q(Or, Fi);
                for (Or = "S"; Or.length <= 9; Or += "S") tt(Or, kn);
                var Ar = N("Milliseconds", !1);
                B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
                var Pr = m.prototype;
                Pr.add = pr, Pr.calendar = he, Pr.clone = fe, Pr.diff = xe, Pr.endOf = Ie, Pr.format = Se, Pr.from = Ce, Pr.fromNow = De, Pr.to = Me, Pr.toNow = Te, Pr.get = z, Pr.invalidAt = je, Pr.isAfter = pe, Pr.isBefore = ge, Pr.isBetween = me, Pr.isSame = ve, Pr.isSameOrAfter = ye, Pr.isSameOrBefore = be, Pr.isValid = He, Pr.lang = mr, Pr.locale = Oe, Pr.localeData = Ae, Pr.max = dr, Pr.min = lr, Pr.parsingFlags = Ne, Pr.set = z, Pr.startOf = Pe, Pr.subtract = gr, Pr.toArray = Re, Pr.toObject = $e, Pr.toDate = Le, Pr.toISOString = ke, Pr.toJSON = We, Pr.toString = _e, Pr.unix = Ee, Pr.valueOf = Fe, Pr.creationData = Ye, Pr.year = sr, Pr.isLeapYear = wt, Pr.weekYear = Ve, Pr.isoWeekYear = Be, Pr.quarter = Pr.quarters = Qe, Pr.month = dt, Pr.daysInMonth = ut, Pr.week = Pr.weeks = tn, Pr.isoWeek = Pr.isoWeeks = en, Pr.weeksInYear = Ue, Pr.isoWeeksInYear = qe, Pr.date = yr, Pr.day = Pr.days = dn, Pr.weekday = un, Pr.isoWeekday = cn, Pr.dayOfYear = mn, Pr.hour = Pr.hours = Dr, Pr.minute = Pr.minutes = Mr, Pr.second = Pr.seconds = Tr, Pr.millisecond = Pr.milliseconds = Ar, Pr.utcOffset = Gt, Pr.utc = Qt, Pr.local = Xt, Pr.parseZone = Jt, Pr.hasAlignedHourOffset = Kt, Pr.isDST = te, Pr.isDSTShifted = ee, Pr.isLocal = ne, Pr.isUtcOffset = ie, Pr.isUtc = re, Pr.isUTC = re, Pr.zoneAbbr = Sn, Pr.zoneName = Cn, Pr.dates = _("dates accessor is deprecated. Use date instead.", yr), Pr.months = _("months accessor is deprecated. Use month instead", dt), Pr.years = _("years accessor is deprecated. Use year instead", sr), Pr.zone = _("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Zt);
                var Ir = Pr,
                    Fr = {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    Er = {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    Lr = "Invalid date",
                    Rr = "%d",
                    $r = /\d{1,2}/,
                    Wr = {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    Hr = T.prototype;
                Hr._calendar = Fr, Hr.calendar = Tn, Hr._longDateFormat = Er, Hr.longDateFormat = On, Hr._invalidDate = Lr, Hr.invalidDate = An, Hr._ordinal = Rr, Hr.ordinal = Pn, Hr._ordinalParse = $r, Hr.preparse = In, Hr.postformat = In, Hr._relativeTime = Wr, Hr.relativeTime = Fn, Hr.pastFuture = En, Hr.set = D, Hr.months = rt, Hr._months = Xi, Hr.monthsShort = ot, Hr._monthsShort = Ji, Hr.monthsParse = st, Hr._monthsRegex = tr, Hr.monthsRegex = ht, Hr._monthsShortRegex = Ki, Hr.monthsShortRegex = ct, Hr.week = Xe, Hr._week = vr, Hr.firstDayOfYear = Ke, Hr.firstDayOfWeek = Je, Hr.weekdays = rn, Hr._weekdays = br, Hr.weekdaysMin = an, Hr._weekdaysMin = wr, Hr.weekdaysShort = on, Hr._weekdaysShort = xr, Hr.weekdaysParse = ln, Hr._weekdaysRegex = _r, Hr.weekdaysRegex = hn, Hr._weekdaysShortRegex = kr, Hr.weekdaysShortRegex = fn, Hr._weekdaysMinRegex = Sr, Hr.weekdaysMinRegex = pn, Hr.isPM = wn, Hr._meridiemParse = Cr, Hr.meridiem = _n, I("en", {
                    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(t) {
                        var e = t % 10,
                            n = 1 === b(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                        return t + n
                    }
                }), n.lang = _("moment.lang is deprecated. Use moment.locale instead.", I), n.langData = _("moment.langData is deprecated. Use moment.localeData instead.", L);
                var Nr = Math.abs,
                    jr = Kn("ms"),
                    Yr = Kn("s"),
                    zr = Kn("m"),
                    Vr = Kn("h"),
                    Br = Kn("d"),
                    qr = Kn("w"),
                    Ur = Kn("M"),
                    Gr = Kn("y"),
                    Zr = ei("milliseconds"),
                    Qr = ei("seconds"),
                    Xr = ei("minutes"),
                    Jr = ei("hours"),
                    Kr = ei("days"),
                    to = ei("months"),
                    eo = ei("years"),
                    no = Math.round,
                    io = {
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        M: 11
                    },
                    ro = Math.abs,
                    oo = Yt.prototype;
                oo.abs = zn, oo.add = Bn, oo.subtract = qn, oo.as = Xn, oo.asMilliseconds = jr, oo.asSeconds = Yr, oo.asMinutes = zr, oo.asHours = Vr, oo.asDays = Br, oo.asWeeks = qr, oo.asMonths = Ur, oo.asYears = Gr, oo.valueOf = Jn, oo._bubble = Gn, oo.get = ti, oo.milliseconds = Zr, oo.seconds = Qr, oo.minutes = Xr, oo.hours = Jr, oo.days = Kr, oo.weeks = ni, oo.months = to, oo.years = eo, oo.humanize = ai, oo.toISOString = si, oo.toString = si, oo.toJSON = si, oo.locale = Oe, oo.localeData = Ae, oo.toIsoString = _("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", si), oo.lang = mr, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), Q("x", Ei), Q("X", $i), tt("X", function(t, e, n) {
                    n._d = new Date(1e3 * parseFloat(t, 10))
                }), tt("x", function(t, e, n) {
                    n._d = new Date(b(t))
                }), n.version = "2.13.0", i(Wt), n.fn = Ir, n.min = Nt, n.max = jt, n.now = ur, n.utc = d, n.unix = Dn, n.months = Wn, n.isDate = o, n.locale = I, n.invalid = f, n.duration = oe, n.isMoment = v, n.weekdays = Nn, n.parseZone = Mn, n.localeData = L, n.isDuration = zt, n.monthsShort = Hn, n.weekdaysMin = Yn, n.defineLocale = F, n.updateLocale = E, n.locales = R, n.weekdaysShort = jn, n.normalizeUnits = W, n.relativeTimeThreshold = oi, n.prototype = Ir;
                var ao = n;
                return ao
            })
        }, {}],
        7: [function(t, e) {
            var n = t("./core/core.js")();
            t("./core/core.helpers")(n), t("./core/core.element")(n), t("./core/core.animation")(n), t("./core/core.controller")(n), t("./core/core.datasetController")(n), t("./core/core.layoutService")(n), t("./core/core.legend")(n), t("./core/core.plugin.js")(n), t("./core/core.scale")(n), t("./core/core.scaleService")(n), t("./core/core.title")(n), t("./core/core.tooltip")(n), t("./elements/element.arc")(n), t("./elements/element.line")(n), t("./elements/element.point")(n), t("./elements/element.rectangle")(n), t("./scales/scale.category")(n), t("./scales/scale.linear")(n), t("./scales/scale.logarithmic")(n), t("./scales/scale.radialLinear")(n), t("./scales/scale.time")(n), t("./controllers/controller.bar")(n), t("./controllers/controller.bubble")(n), t("./controllers/controller.doughnut")(n), t("./controllers/controller.line")(n), t("./controllers/controller.polarArea")(n), t("./controllers/controller.radar")(n), t("./charts/Chart.Bar")(n), t("./charts/Chart.Bubble")(n), t("./charts/Chart.Doughnut")(n), t("./charts/Chart.Line")(n), t("./charts/Chart.PolarArea")(n), t("./charts/Chart.Radar")(n), t("./charts/Chart.Scatter")(n), window.Chart = e.exports = n
        }, {
            "./charts/Chart.Bar": 8,
            "./charts/Chart.Bubble": 9,
            "./charts/Chart.Doughnut": 10,
            "./charts/Chart.Line": 11,
            "./charts/Chart.PolarArea": 12,
            "./charts/Chart.Radar": 13,
            "./charts/Chart.Scatter": 14,
            "./controllers/controller.bar": 15,
            "./controllers/controller.bubble": 16,
            "./controllers/controller.doughnut": 17,
            "./controllers/controller.line": 18,
            "./controllers/controller.polarArea": 19,
            "./controllers/controller.radar": 20,
            "./core/core.animation": 21,
            "./core/core.controller": 22,
            "./core/core.datasetController": 23,
            "./core/core.element": 24,
            "./core/core.helpers": 25,
            "./core/core.js": 26,
            "./core/core.layoutService": 27,
            "./core/core.legend": 28,
            "./core/core.plugin.js": 29,
            "./core/core.scale": 30,
            "./core/core.scaleService": 31,
            "./core/core.title": 32,
            "./core/core.tooltip": 33,
            "./elements/element.arc": 34,
            "./elements/element.line": 35,
            "./elements/element.point": 36,
            "./elements/element.rectangle": 37,
            "./scales/scale.category": 38,
            "./scales/scale.linear": 39,
            "./scales/scale.logarithmic": 40,
            "./scales/scale.radialLinear": 41,
            "./scales/scale.time": 42
        }],
        8: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                t.Bar = function(e, n) {
                    return n.type = "bar", new t(e, n)
                }
            }
        }, {}],
        9: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                t.Bubble = function(e, n) {
                    return n.type = "bubble", new t(e, n)
                }
            }
        }, {}],
        10: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                t.Doughnut = function(e, n) {
                    return n.type = "doughnut", new t(e, n)
                }
            }
        }, {}],
        11: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                t.Line = function(e, n) {
                    return n.type = "line", new t(e, n)
                }
            }
        }, {}],
        12: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                t.PolarArea = function(e, n) {
                    return n.type = "polarArea", new t(e, n)
                }
            }
        }, {}],
        13: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                t.Radar = function(e, n) {
                    return n.options = t.helpers.configMerge({
                        aspectRatio: 1
                    }, n.options), n.type = "radar", new t(e, n)
                }
            }
        }, {}],
        14: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom",
                            id: "x-axis-1"
                        }],
                        yAxes: [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-1"
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t) {
                                return "(" + t.xLabel + ", " + t.yLabel + ")"
                            }
                        }
                    }
                };
                t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function(e, n) {
                    return n.type = "scatter", new t(e, n)
                }
            }
        }, {}],
        15: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.bar = {
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }],
                        yAxes: [{
                            type: "linear"
                        }]
                    }
                }, t.controllers.bar = t.DatasetController.extend({
                    dataElementType: t.elements.Rectangle,
                    initialize: function(e, n) {
                        t.DatasetController.prototype.initialize.call(this, e, n), this.getMeta().bar = !0
                    },
                    getBarCount: function() {
                        var t = 0;
                        return e.each(this.chart.data.datasets, function(e, n) {
                            var i = this.chart.getDatasetMeta(n);
                            i.bar && this.chart.isDatasetVisible(n) && ++t
                        }, this), t
                    },
                    update: function(t) {
                        e.each(this.getMeta().data, function(e, n) {
                            this.updateElement(e, n, t)
                        }, this)
                    },
                    updateElement: function(t, n, i) {
                        var r = this.getMeta(),
                            o = this.getScaleForId(r.xAxisID),
                            a = this.getScaleForId(r.yAxisID),
                            s = a.getBasePixel(),
                            l = this.chart.options.elements.rectangle,
                            d = t.custom || {},
                            u = this.getDataset();
                        e.extend(t, {
                            _xScale: o,
                            _yScale: a,
                            _datasetIndex: this.index,
                            _index: n,
                            _model: {
                                x: this.calculateBarX(n, this.index),
                                y: i ? s : this.calculateBarY(n, this.index),
                                label: this.chart.data.labels[n],
                                datasetLabel: u.label,
                                base: i ? s : this.calculateBarBase(this.index, n),
                                width: this.calculateBarWidth(n),
                                backgroundColor: d.backgroundColor ? d.backgroundColor : e.getValueAtIndexOrDefault(u.backgroundColor, n, l.backgroundColor),
                                borderSkipped: d.borderSkipped ? d.borderSkipped : l.borderSkipped,
                                borderColor: d.borderColor ? d.borderColor : e.getValueAtIndexOrDefault(u.borderColor, n, l.borderColor),
                                borderWidth: d.borderWidth ? d.borderWidth : e.getValueAtIndexOrDefault(u.borderWidth, n, l.borderWidth)
                            }
                        }), t.pivot()
                    },
                    calculateBarBase: function(t, e) {
                        var n = this.getMeta(),
                            i = this.getScaleForId(n.yAxisID),
                            r = 0;
                        if (i.options.stacked) {
                            var o = this.chart,
                                a = o.data.datasets,
                                s = a[t].data[e];
                            if (0 > s)
                                for (var l = 0; t > l; l++) {
                                    var d = a[l],
                                        u = o.getDatasetMeta(l);
                                    u.bar && u.yAxisID === i.id && o.isDatasetVisible(l) && (r += d.data[e] < 0 ? d.data[e] : 0)
                                } else
                                    for (var c = 0; t > c; c++) {
                                        var h = a[c],
                                            f = o.getDatasetMeta(c);
                                        f.bar && f.yAxisID === i.id && o.isDatasetVisible(c) && (r += h.data[e] > 0 ? h.data[e] : 0)
                                    }
                            return i.getPixelForValue(r)
                        }
                        return i.getBasePixel()
                    },
                    getRuler: function(t) {
                        var e, n = this.getMeta(),
                            i = this.getScaleForId(n.xAxisID),
                            r = this.getBarCount();
                        e = "category" === i.options.type ? i.getPixelForTick(t + 1) - i.getPixelForTick(t) : i.width / i.ticks.length;
                        var o = e * i.options.categoryPercentage,
                            a = (e - e * i.options.categoryPercentage) / 2,
                            s = o / r;
                        if (i.ticks.length !== this.chart.data.labels.length) {
                            var l = i.ticks.length / this.chart.data.labels.length;
                            s *= l
                        }
                        var d = s * i.options.barPercentage,
                            u = s - s * i.options.barPercentage;
                        return {
                            datasetCount: r,
                            tickWidth: e,
                            categoryWidth: o,
                            categorySpacing: a,
                            fullBarWidth: s,
                            barWidth: d,
                            barSpacing: u
                        }
                    },
                    calculateBarWidth: function(t) {
                        var e = this.getScaleForId(this.getMeta().xAxisID),
                            n = this.getRuler(t);
                        return e.options.stacked ? n.categoryWidth : n.barWidth
                    },
                    getBarIndex: function(t) {
                        var e, n, i = 0;
                        for (n = 0; t > n; ++n) e = this.chart.getDatasetMeta(n), e.bar && this.chart.isDatasetVisible(n) && ++i;
                        return i
                    },
                    calculateBarX: function(t, e) {
                        var n = this.getMeta(),
                            i = this.getScaleForId(n.xAxisID),
                            r = this.getBarIndex(e),
                            o = this.getRuler(t),
                            a = i.getPixelForValue(null, t, e, this.chart.isCombo);
                        return a -= this.chart.isCombo ? o.tickWidth / 2 : 0, i.options.stacked ? a + o.categoryWidth / 2 + o.categorySpacing : a + o.barWidth / 2 + o.categorySpacing + o.barWidth * r + o.barSpacing / 2 + o.barSpacing * r
                    },
                    calculateBarY: function(t, e) {
                        var n = this.getMeta(),
                            i = this.getScaleForId(n.yAxisID),
                            r = this.getDataset().data[t];
                        if (i.options.stacked) {
                            for (var o = 0, a = 0, s = 0; e > s; s++) {
                                var l = this.chart.data.datasets[s],
                                    d = this.chart.getDatasetMeta(s);
                                d.bar && d.yAxisID === i.id && this.chart.isDatasetVisible(s) && (l.data[t] < 0 ? a += l.data[t] || 0 : o += l.data[t] || 0)
                            }
                            return 0 > r ? i.getPixelForValue(a + r) : i.getPixelForValue(o + r)
                        }
                        return i.getPixelForValue(r)
                    },
                    draw: function(t) {
                        var n = t || 1;
                        e.each(this.getMeta().data, function(t, e) {
                            var i = this.getDataset().data[e];
                            null === i || void 0 === i || isNaN(i) || t.transition(n).draw()
                        }, this)
                    },
                    setHoverStyle: function(t) {
                        var n = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            r = t.custom || {},
                            o = t._model;
                        o.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.hoverBackgroundColor, i, e.getHoverColor(o.backgroundColor)), o.borderColor = r.hoverBorderColor ? r.hoverBorderColor : e.getValueAtIndexOrDefault(n.hoverBorderColor, i, e.getHoverColor(o.borderColor)), o.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : e.getValueAtIndexOrDefault(n.hoverBorderWidth, i, o.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var n = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            r = t.custom || {},
                            o = t._model,
                            a = this.chart.options.elements.rectangle;
                        o.backgroundColor = r.backgroundColor ? r.backgroundColor : e.getValueAtIndexOrDefault(n.backgroundColor, i, a.backgroundColor), o.borderColor = r.borderColor ? r.borderColor : e.getValueAtIndexOrDefault(n.borderColor, i, a.borderColor), o.borderWidth = r.borderWidth ? r.borderWidth : e.getValueAtIndexOrDefault(n.borderWidth, i, a.borderWidth)
                    }
                }), t.defaults.horizontalBar = {
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom"
                        }],
                        yAxes: [{
                            position: "left",
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }]
                    },
                    elements: {
                        rectangle: {
                            borderSkipped: "left"
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function(t, e) {
                                var n = "";
                                return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                            },
                            label: function(t, e) {
                                var n = e.datasets[t.datasetIndex].label || "";
                                return n + ": " + t.xLabel
                            }
                        }
                    }
                }, t.controllers.horizontalBar = t.controllers.bar.extend({
                    updateElement: function(t, n, i) {
                        var r = this.getMeta(),
                            o = this.getScaleForId(r.xAxisID),
                            a = this.getScaleForId(r.yAxisID),
                            s = o.getBasePixel(),
                            l = t.custom || {},
                            d = this.getDataset(),
                            u = this.chart.options.elements.rectangle;
                        e.extend(t, {
                            _xScale: o,
                            _yScale: a,
                            _datasetIndex: this.index,
                            _index: n,
                            _model: {
                                x: i ? s : this.calculateBarX(n, this.index),
                                y: this.calculateBarY(n, this.index),
                                label: this.chart.data.labels[n],
                                datasetLabel: d.label,
                                base: i ? s : this.calculateBarBase(this.index, n),
                                height: this.calculateBarHeight(n),
                                backgroundColor: l.backgroundColor ? l.backgroundColor : e.getValueAtIndexOrDefault(d.backgroundColor, n, u.backgroundColor),
                                borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
                                borderColor: l.borderColor ? l.borderColor : e.getValueAtIndexOrDefault(d.borderColor, n, u.borderColor),
                                borderWidth: l.borderWidth ? l.borderWidth : e.getValueAtIndexOrDefault(d.borderWidth, n, u.borderWidth)
                            },
                            draw: function() {
                                function t(t) {
                                    return l[(u + t) % 4]
                                }
                                var e = this._chart.ctx,
                                    n = this._view,
                                    i = n.height / 2,
                                    r = n.y - i,
                                    o = n.y + i,
                                    a = n.base - (n.base - n.x),
                                    s = n.borderWidth / 2;
                                n.borderWidth && (r += s, o -= s, a += s), e.beginPath(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth;
                                var l = [
                                        [n.base, o],
                                        [n.base, r],
                                        [a, r],
                                        [a, o]
                                    ],
                                    d = ["bottom", "left", "top", "right"],
                                    u = d.indexOf(n.borderSkipped, 0); - 1 === u && (u = 0), e.moveTo.apply(e, t(0));
                                for (var c = 1; 4 > c; c++) e.lineTo.apply(e, t(c));
                                e.fill(), n.borderWidth && e.stroke()
                            },
                            inRange: function(t, e) {
                                var n = this._view,
                                    i = !1;
                                return n && (i = n.x < n.base ? e >= n.y - n.height / 2 && e <= n.y + n.height / 2 && t >= n.x && t <= n.base : e >= n.y - n.height / 2 && e <= n.y + n.height / 2 && t >= n.base && t <= n.x), i
                            }
                        }), t.pivot()
                    },
                    calculateBarBase: function(t, e) {
                        var n = this.getMeta(),
                            i = this.getScaleForId(n.xAxisID),
                            r = 0;
                        if (i.options.stacked) {
                            var o = this.chart.data.datasets[t].data[e];
                            if (0 > o)
                                for (var a = 0; t > a; a++) {
                                    var s = this.chart.data.datasets[a],
                                        l = this.chart.getDatasetMeta(a);
                                    l.bar && l.xAxisID === i.id && this.chart.isDatasetVisible(a) && (r += s.data[e] < 0 ? s.data[e] : 0)
                                } else
                                    for (var d = 0; t > d; d++) {
                                        var u = this.chart.data.datasets[d],
                                            c = this.chart.getDatasetMeta(d);
                                        c.bar && c.xAxisID === i.id && this.chart.isDatasetVisible(d) && (r += u.data[e] > 0 ? u.data[e] : 0)
                                    }
                            return i.getPixelForValue(r)
                        }
                        return i.getBasePixel()
                    },
                    getRuler: function(t) {
                        var e, n = this.getMeta(),
                            i = this.getScaleForId(n.yAxisID),
                            r = this.getBarCount();
                        e = "category" === i.options.type ? i.getPixelForTick(t + 1) - i.getPixelForTick(t) : i.width / i.ticks.length;
                        var o = e * i.options.categoryPercentage,
                            a = (e - e * i.options.categoryPercentage) / 2,
                            s = o / r;
                        if (i.ticks.length !== this.chart.data.labels.length) {
                            var l = i.ticks.length / this.chart.data.labels.length;
                            s *= l
                        }
                        var d = s * i.options.barPercentage,
                            u = s - s * i.options.barPercentage;
                        return {
                            datasetCount: r,
                            tickHeight: e,
                            categoryHeight: o,
                            categorySpacing: a,
                            fullBarHeight: s,
                            barHeight: d,
                            barSpacing: u
                        }
                    },
                    calculateBarHeight: function(t) {
                        var e = this.getScaleForId(this.getMeta().yAxisID),
                            n = this.getRuler(t);
                        return e.options.stacked ? n.categoryHeight : n.barHeight
                    },
                    calculateBarX: function(t, e) {
                        var n = this.getMeta(),
                            i = this.getScaleForId(n.xAxisID),
                            r = this.getDataset().data[t];
                        if (i.options.stacked) {
                            for (var o = 0, a = 0, s = 0; e > s; s++) {
                                var l = this.chart.data.datasets[s],
                                    d = this.chart.getDatasetMeta(s);
                                d.bar && d.xAxisID === i.id && this.chart.isDatasetVisible(s) && (l.data[t] < 0 ? a += l.data[t] || 0 : o += l.data[t] || 0)
                            }
                            return 0 > r ? i.getPixelForValue(a + r) : i.getPixelForValue(o + r)
                        }
                        return i.getPixelForValue(r)
                    },
                    calculateBarY: function(t, e) {
                        var n = this.getMeta(),
                            i = this.getScaleForId(n.yAxisID),
                            r = this.getBarIndex(e),
                            o = this.getRuler(t),
                            a = i.getPixelForValue(null, t, e, this.chart.isCombo);
                        return a -= this.chart.isCombo ? o.tickHeight / 2 : 0, i.options.stacked ? a + o.categoryHeight / 2 + o.categorySpacing : a + o.barHeight / 2 + o.categorySpacing + o.barHeight * r + o.barSpacing / 2 + o.barSpacing * r
                    }
                })
            }
        }, {}],
        16: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.bubble = {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-0"
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                var n = e.datasets[t.datasetIndex].label || "",
                                    i = e.datasets[t.datasetIndex].data[t.index];
                                return n + ": (" + i.x + ", " + i.y + ", " + i.r + ")"
                            }
                        }
                    }
                }, t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: t.elements.Point,
                    update: function(t) {
                        var n = this.getMeta(),
                            i = n.data;
                        e.each(i, function(e, n) {
                            this.updateElement(e, n, t)
                        }, this)
                    },
                    updateElement: function(t, n, i) {
                        var r = this.getMeta(),
                            o = this.getScaleForId(r.xAxisID),
                            a = this.getScaleForId(r.yAxisID),
                            s = t.custom || {},
                            l = this.getDataset(),
                            d = l.data[n],
                            u = this.chart.options.elements.point;
                        e.extend(t, {
                            _xScale: o,
                            _yScale: a,
                            _datasetIndex: this.index,
                            _index: n,
                            _model: {
                                x: i ? o.getPixelForDecimal(.5) : o.getPixelForValue(d, n, this.index, this.chart.isCombo),
                                y: i ? a.getBasePixel() : a.getPixelForValue(d, n, this.index),
                                radius: i ? 0 : s.radius ? s.radius : this.getRadius(d),
                                backgroundColor: s.backgroundColor ? s.backgroundColor : e.getValueAtIndexOrDefault(l.backgroundColor, n, u.backgroundColor),
                                borderColor: s.borderColor ? s.borderColor : e.getValueAtIndexOrDefault(l.borderColor, n, u.borderColor),
                                borderWidth: s.borderWidth ? s.borderWidth : e.getValueAtIndexOrDefault(l.borderWidth, n, u.borderWidth),
                                hitRadius: s.hitRadius ? s.hitRadius : e.getValueAtIndexOrDefault(l.hitRadius, n, u.hitRadius)
                            }
                        });
                        var c = t._model;
                        c.skip = s.skip ? s.skip : isNaN(c.x) || isNaN(c.y), t.pivot()
                    },
                    getRadius: function(t) {
                        return t.r || this.chart.options.elements.point.radius
                    },
                    setHoverStyle: function(t) {
                        var n = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            r = t.custom || {},
                            o = t._model;
                        o.radius = r.hoverRadius ? r.hoverRadius : e.getValueAtIndexOrDefault(n.hoverRadius, i, this.chart.options.elements.point.hoverRadius) + this.getRadius(this.getDataset().data[t._index]), o.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.hoverBackgroundColor, i, e.getHoverColor(o.backgroundColor)), o.borderColor = r.hoverBorderColor ? r.hoverBorderColor : e.getValueAtIndexOrDefault(n.hoverBorderColor, i, e.getHoverColor(o.borderColor)), o.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : e.getValueAtIndexOrDefault(n.hoverBorderWidth, i, o.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var n = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            r = t.custom || {},
                            o = t._model,
                            a = this.chart.options.elements.point;
                        o.radius = r.radius ? r.radius : this.getRadius(n.data[t._index]), o.backgroundColor = r.backgroundColor ? r.backgroundColor : e.getValueAtIndexOrDefault(n.backgroundColor, i, a.backgroundColor), o.borderColor = r.borderColor ? r.borderColor : e.getValueAtIndexOrDefault(n.borderColor, i, a.borderColor), o.borderWidth = r.borderWidth ? r.borderWidth : e.getValueAtIndexOrDefault(n.borderWidth, i, a.borderWidth)
                    }
                })
            }
        }, {}],
        17: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    n = t.defaults;
                n.doughnut = {
                    animation: {
                        animateRotate: !0,
                        animateScale: !1
                    },
                    aspectRatio: 1,
                    hover: {
                        mode: "single"
                    },
                    legendCallback: function(t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var n = t.data,
                            i = n.datasets,
                            r = n.labels;
                        if (i.length)
                            for (var o = 0; o < i[0].data.length; ++o) e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), r[o] && e.push(r[o]), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var n = t.data;
                                return n.labels.length && n.datasets.length ? n.labels.map(function(i, r) {
                                    var o = t.getDatasetMeta(0),
                                        a = n.datasets[0],
                                        s = o.data[r],
                                        l = s.custom || {},
                                        d = e.getValueAtIndexOrDefault,
                                        u = t.options.elements.arc,
                                        c = l.backgroundColor ? l.backgroundColor : d(a.backgroundColor, r, u.backgroundColor),
                                        h = l.borderColor ? l.borderColor : d(a.borderColor, r, u.borderColor),
                                        f = l.borderWidth ? l.borderWidth : d(a.borderWidth, r, u.borderWidth);
                                    return {
                                        text: i,
                                        fillStyle: c,
                                        strokeStyle: h,
                                        lineWidth: f,
                                        hidden: isNaN(a.data[r]) || o.data[r].hidden,
                                        index: r
                                    }
                                }) : []
                            }
                        },
                        onClick: function(t, e) {
                            var n, i, r, o = e.index,
                                a = this.chart;
                            for (n = 0, i = (a.data.datasets || []).length; i > n; ++n) r = a.getDatasetMeta(n), r.data[o].hidden = !r.data[o].hidden;
                            a.update()
                        }
                    },
                    cutoutPercentage: 50,
                    rotation: Math.PI * -.5,
                    circumference: 2 * Math.PI,
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                return e.labels[t.index] + ": " + e.datasets[t.datasetIndex].data[t.index]
                            }
                        }
                    }
                }, n.pie = e.clone(n.doughnut), e.extend(n.pie, {
                    cutoutPercentage: 0
                }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                    dataElementType: t.elements.Arc,
                    linkScales: e.noop,
                    getRingIndex: function(t) {
                        for (var e = 0, n = 0; t > n; ++n) this.chart.isDatasetVisible(n) && ++e;
                        return e
                    },
                    update: function(t) {
                        var n = this,
                            i = n.chart,
                            r = i.chartArea,
                            o = i.options,
                            a = o.elements.arc,
                            s = r.right - r.left - a.borderWidth,
                            l = r.bottom - r.top - a.borderWidth,
                            d = Math.min(s, l),
                            u = {
                                x: 0,
                                y: 0
                            },
                            c = n.getMeta(),
                            h = o.cutoutPercentage,
                            f = o.circumference;
                        if (f < 2 * Math.PI) {
                            var p = o.rotation % (2 * Math.PI);
                            p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0);
                            var g = p + f,
                                m = {
                                    x: Math.cos(p),
                                    y: Math.sin(p)
                                },
                                v = {
                                    x: Math.cos(g),
                                    y: Math.sin(g)
                                },
                                y = 0 >= p && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                                b = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                x = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                                w = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                _ = h / 100,
                                k = {
                                    x: x ? -1 : Math.min(m.x * (m.x < 0 ? 1 : _), v.x * (v.x < 0 ? 1 : _)),
                                    y: w ? -1 : Math.min(m.y * (m.y < 0 ? 1 : _), v.y * (v.y < 0 ? 1 : _))
                                },
                                S = {
                                    x: y ? 1 : Math.max(m.x * (m.x > 0 ? 1 : _), v.x * (v.x > 0 ? 1 : _)),
                                    y: b ? 1 : Math.max(m.y * (m.y > 0 ? 1 : _), v.y * (v.y > 0 ? 1 : _))
                                },
                                C = {
                                    width: .5 * (S.x - k.x),
                                    height: .5 * (S.y - k.y)
                                };
                            d = Math.min(s / C.width, l / C.height), u = {
                                x: (S.x + k.x) * -.5,
                                y: (S.y + k.y) * -.5
                            }
                        }
                        i.outerRadius = Math.max(d / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = u.x * i.outerRadius, i.offsetY = u.y * i.outerRadius, c.total = n.calculateTotal(), n.outerRadius = i.outerRadius - i.radiusLength * n.getRingIndex(n.index), n.innerRadius = n.outerRadius - i.radiusLength, e.each(c.data, function(e, i) {
                            n.updateElement(e, i, t)
                        })
                    },
                    updateElement: function(t, n, i) {
                        var r = this,
                            o = r.chart,
                            a = o.chartArea,
                            s = o.options,
                            l = s.animation,
                            d = s.elements.arc,
                            u = (a.left + a.right) / 2,
                            c = (a.top + a.bottom) / 2,
                            h = s.rotation,
                            f = s.rotation,
                            p = r.getDataset(),
                            g = i && l.animateRotate ? 0 : t.hidden ? 0 : r.calculateCircumference(p.data[n]) * (s.circumference / (2 * Math.PI)),
                            m = i && l.animateScale ? 0 : r.innerRadius,
                            v = i && l.animateScale ? 0 : r.outerRadius,
                            y = t.custom || {},
                            b = e.getValueAtIndexOrDefault;
                        e.extend(t, {
                            _datasetIndex: r.index,
                            _index: n,
                            _model: {
                                x: u + o.offsetX,
                                y: c + o.offsetY,
                                startAngle: h,
                                endAngle: f,
                                circumference: g,
                                outerRadius: v,
                                innerRadius: m,
                                label: b(p.label, n, o.data.labels[n])
                            }
                        });
                        var x = t._model;
                        x.backgroundColor = y.backgroundColor ? y.backgroundColor : b(p.backgroundColor, n, d.backgroundColor), x.hoverBackgroundColor = y.hoverBackgroundColor ? y.hoverBackgroundColor : b(p.hoverBackgroundColor, n, d.hoverBackgroundColor), x.borderWidth = y.borderWidth ? y.borderWidth : b(p.borderWidth, n, d.borderWidth), x.borderColor = y.borderColor ? y.borderColor : b(p.borderColor, n, d.borderColor), i && l.animateRotate || (0 === n ? x.startAngle = s.rotation : x.startAngle = r.getMeta().data[n - 1]._model.endAngle, x.endAngle = x.startAngle + x.circumference), t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    calculateTotal: function() {
                        var t, n = this.getDataset(),
                            i = this.getMeta(),
                            r = 0;
                        return e.each(i.data, function(e, i) {
                            t = n.data[i], isNaN(t) || e.hidden || (r += Math.abs(t))
                        }), r
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().total;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
                    }
                })
            }
        }, {}],
        18: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.line = {
                    showLines: !0,
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            id: "y-axis-0"
                        }]
                    }
                }, t.controllers.line = t.DatasetController.extend({
                    datasetElementType: t.elements.Line,
                    dataElementType: t.elements.Point,
                    addElementAndReset: function(e) {
                        var n = this,
                            i = n.chart.options;
                        t.DatasetController.prototype.addElementAndReset.call(n, e), i.showLines && 0 !== i.elements.line.tension && n.updateBezierControlPoints()
                    },
                    update: function(t) {
                        var n, i, r, o, a = this,
                            s = a.getMeta(),
                            l = s.dataset,
                            d = s.data || [],
                            u = a.chart.options,
                            c = u.elements.line,
                            h = a.getScaleForId(s.yAxisID);
                        for (u.showLines && (r = a.getDataset(), o = l.custom || {}, void 0 !== r.tension && void 0 === r.lineTension && (r.lineTension = r.tension), l._scale = h, l._datasetIndex = a.index, l._children = d, l._model = {
                                tension: o.tension ? o.tension : e.getValueOrDefault(r.lineTension, c.tension),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : r.backgroundColor || c.backgroundColor,
                                borderWidth: o.borderWidth ? o.borderWidth : r.borderWidth || c.borderWidth,
                                borderColor: o.borderColor ? o.borderColor : r.borderColor || c.borderColor,
                                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : r.borderCapStyle || c.borderCapStyle,
                                borderDash: o.borderDash ? o.borderDash : r.borderDash || c.borderDash,
                                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : r.borderDashOffset || c.borderDashOffset,
                                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : r.borderJoinStyle || c.borderJoinStyle,
                                fill: o.fill ? o.fill : void 0 !== r.fill ? r.fill : c.fill,
                                scaleTop: h.top,
                                scaleBottom: h.bottom,
                                scaleZero: h.getBasePixel()
                            }, l.pivot()), n = 0, i = d.length; i > n; ++n) a.updateElement(d[n], n, t);
                        u.showLines && 0 !== c.tension && a.updateBezierControlPoints()
                    },
                    getPointBackgroundColor: function(t, n) {
                        var i = this.chart.options.elements.point.backgroundColor,
                            r = this.getDataset(),
                            o = t.custom || {};
                        return o.backgroundColor ? i = o.backgroundColor : r.pointBackgroundColor ? i = e.getValueAtIndexOrDefault(r.pointBackgroundColor, n, i) : r.backgroundColor && (i = r.backgroundColor), i
                    },
                    getPointBorderColor: function(t, n) {
                        var i = this.chart.options.elements.point.borderColor,
                            r = this.getDataset(),
                            o = t.custom || {};
                        return o.borderColor ? i = o.borderColor : r.pointBorderColor ? i = e.getValueAtIndexOrDefault(r.pointBorderColor, n, i) : r.borderColor && (i = r.borderColor), i
                    },
                    getPointBorderWidth: function(t, n) {
                        var i = this.chart.options.elements.point.borderWidth,
                            r = this.getDataset(),
                            o = t.custom || {};
                        return o.borderWidth ? i = o.borderWidth : r.pointBorderWidth ? i = e.getValueAtIndexOrDefault(r.pointBorderWidth, n, i) : r.borderWidth && (i = r.borderWidth), i
                    },
                    updateElement: function(t, n, i) {
                        var r, o, a = this,
                            s = a.getMeta(),
                            l = t.custom || {},
                            d = a.getDataset(),
                            u = a.index,
                            c = d.data[n],
                            h = a.getScaleForId(s.yAxisID),
                            f = a.getScaleForId(s.xAxisID),
                            p = a.chart.options.elements.point;
                        void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius), void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius), r = f.getPixelForValue(c, n, u, a.chart.isCombo), o = i ? h.getBasePixel() : a.calculatePointY(c, n, u, a.chart.isCombo), t._xScale = f, t._yScale = h, t._datasetIndex = u, t._index = n, t._model = {
                            x: r,
                            y: o,
                            skip: l.skip || isNaN(r) || isNaN(o),
                            radius: l.radius || e.getValueAtIndexOrDefault(d.pointRadius, n, p.radius),
                            pointStyle: l.pointStyle || e.getValueAtIndexOrDefault(d.pointStyle, n, p.pointStyle),
                            backgroundColor: a.getPointBackgroundColor(t, n),
                            borderColor: a.getPointBorderColor(t, n),
                            borderWidth: a.getPointBorderWidth(t, n),
                            tension: s.dataset._model ? s.dataset._model.tension : 0,
                            hitRadius: l.hitRadius || e.getValueAtIndexOrDefault(d.pointHitRadius, n, p.hitRadius)
                        }
                    },
                    calculatePointY: function(t, e, n) {
                        var i, r, o, a = this,
                            s = a.chart,
                            l = a.getMeta(),
                            d = a.getScaleForId(l.yAxisID),
                            u = 0,
                            c = 0;
                        if (d.options.stacked) {
                            for (i = 0; n > i; i++) r = s.data.datasets[i], o = s.getDatasetMeta(i), "line" === o.type && s.isDatasetVisible(i) && (r.data[e] < 0 ? c += r.data[e] || 0 : u += r.data[e] || 0);
                            return 0 > t ? d.getPixelForValue(c + t) : d.getPixelForValue(u + t)
                        }
                        return d.getPixelForValue(t)
                    },
                    updateBezierControlPoints: function() {
                        var t, n, i, r, o, a = this.getMeta(),
                            s = this.chart.chartArea,
                            l = a.data || [];
                        for (t = 0, n = l.length; n > t; ++t) i = l[t], r = i._model, o = e.splineCurve(e.previousItem(l, t)._model, r, e.nextItem(l, t)._model, a.dataset._model.tension), r.controlPointPreviousX = Math.max(Math.min(o.previous.x, s.right), s.left), r.controlPointPreviousY = Math.max(Math.min(o.previous.y, s.bottom), s.top), r.controlPointNextX = Math.max(Math.min(o.next.x, s.right), s.left), r.controlPointNextY = Math.max(Math.min(o.next.y, s.bottom), s.top), i.pivot()
                    },
                    draw: function(t) {
                        var e, n, i = this.getMeta(),
                            r = i.data || [],
                            o = t || 1;
                        for (e = 0, n = r.length; n > e; ++e) r[e].transition(o);
                        for (this.chart.options.showLines && i.dataset.transition(o).draw(), e = 0, n = r.length; n > e; ++e) r[e].draw()
                    },
                    setHoverStyle: function(t) {
                        var n = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            r = t.custom || {},
                            o = t._model;
                        o.radius = r.hoverRadius || e.getValueAtIndexOrDefault(n.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), o.backgroundColor = r.hoverBackgroundColor || e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor, i, e.getHoverColor(o.backgroundColor)), o.borderColor = r.hoverBorderColor || e.getValueAtIndexOrDefault(n.pointHoverBorderColor, i, e.getHoverColor(o.borderColor)), o.borderWidth = r.hoverBorderWidth || e.getValueAtIndexOrDefault(n.pointHoverBorderWidth, i, o.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var n = this,
                            i = n.chart.data.datasets[t._datasetIndex],
                            r = t._index,
                            o = t.custom || {},
                            a = t._model;
                        void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), a.radius = o.radius || e.getValueAtIndexOrDefault(i.pointRadius, r, n.chart.options.elements.point.radius), a.backgroundColor = n.getPointBackgroundColor(t, r), a.borderColor = n.getPointBorderColor(t, r), a.borderWidth = n.getPointBorderWidth(t, r)
                    }
                })
            }
        }, {}],
        19: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.polarArea = {
                    scale: {
                        type: "radialLinear",
                        lineArc: !0
                    },
                    animation: {
                        animateRotate: !0,
                        animateScale: !0
                    },
                    aspectRatio: 1,
                    legendCallback: function(t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var n = t.data,
                            i = n.datasets,
                            r = n.labels;
                        if (i.length)
                            for (var o = 0; o < i[0].data.length; ++o) e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '">'), r[o] && e.push(r[o]), e.push("</span></li>");
                        return e.push("</ul>"), e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var n = t.data;
                                return n.labels.length && n.datasets.length ? n.labels.map(function(i, r) {
                                    var o = t.getDatasetMeta(0),
                                        a = n.datasets[0],
                                        s = o.data[r],
                                        l = s.custom || {},
                                        d = e.getValueAtIndexOrDefault,
                                        u = t.options.elements.arc,
                                        c = l.backgroundColor ? l.backgroundColor : d(a.backgroundColor, r, u.backgroundColor),
                                        h = l.borderColor ? l.borderColor : d(a.borderColor, r, u.borderColor),
                                        f = l.borderWidth ? l.borderWidth : d(a.borderWidth, r, u.borderWidth);
                                    return {
                                        text: i,
                                        fillStyle: c,
                                        strokeStyle: h,
                                        lineWidth: f,
                                        hidden: isNaN(a.data[r]) || o.data[r].hidden,
                                        index: r
                                    }
                                }) : []
                            }
                        },
                        onClick: function(t, e) {
                            var n, i, r, o = e.index,
                                a = this.chart;
                            for (n = 0, i = (a.data.datasets || []).length; i > n; ++n) r = a.getDatasetMeta(n), r.data[o].hidden = !r.data[o].hidden;
                            a.update()
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                return e.labels[t.index] + ": " + t.yLabel
                            }
                        }
                    }
                }, t.controllers.polarArea = t.DatasetController.extend({
                    dataElementType: t.elements.Arc,
                    linkScales: e.noop,
                    update: function(t) {
                        var n = this,
                            i = n.chart,
                            r = i.chartArea,
                            o = this.getMeta(),
                            a = i.options,
                            s = a.elements.arc,
                            l = Math.min(r.right - r.left, r.bottom - r.top);
                        i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(a.cutoutPercentage ? i.outerRadius / 100 * a.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), n.outerRadius = i.outerRadius - i.radiusLength * n.index, n.innerRadius = n.outerRadius - i.radiusLength, o.count = n.countVisibleElements(), e.each(o.data, function(e, i) {
                            n.updateElement(e, i, t)
                        })
                    },
                    updateElement: function(t, n, i) {
                        for (var r = this, o = r.chart, a = o.chartArea, s = r.getDataset(), l = o.options, d = l.animation, u = l.elements.arc, c = t.custom || {}, h = o.scale, f = e.getValueAtIndexOrDefault, p = o.data.labels, g = r.calculateCircumference(s.data[n]), m = (a.left + a.right) / 2, v = (a.top + a.bottom) / 2, y = 0, b = r.getMeta(), x = 0; n > x; ++x) isNaN(s.data[x]) || b.data[x].hidden || ++y;
                        var w = t.hidden ? 0 : h.getDistanceFromCenterForValue(s.data[n]),
                            _ = -.5 * Math.PI + g * y,
                            k = _ + (t.hidden ? 0 : g),
                            S = {
                                x: m,
                                y: v,
                                innerRadius: 0,
                                outerRadius: d.animateScale ? 0 : h.getDistanceFromCenterForValue(s.data[n]),
                                startAngle: d.animateRotate ? Math.PI * -.5 : _,
                                endAngle: d.animateRotate ? Math.PI * -.5 : k,
                                backgroundColor: c.backgroundColor ? c.backgroundColor : f(s.backgroundColor, n, u.backgroundColor),
                                borderWidth: c.borderWidth ? c.borderWidth : f(s.borderWidth, n, u.borderWidth),
                                borderColor: c.borderColor ? c.borderColor : f(s.borderColor, n, u.borderColor),
                                label: f(p, n, p[n])
                            };
                        e.extend(t, {
                            _datasetIndex: r.index,
                            _index: n,
                            _scale: h,
                            _model: i ? S : {
                                x: m,
                                y: v,
                                innerRadius: 0,
                                outerRadius: w,
                                startAngle: _,
                                endAngle: k,
                                backgroundColor: c.backgroundColor ? c.backgroundColor : f(s.backgroundColor, n, u.backgroundColor),
                                borderWidth: c.borderWidth ? c.borderWidth : f(s.borderWidth, n, u.borderWidth),
                                borderColor: c.borderColor ? c.borderColor : f(s.borderColor, n, u.borderColor),
                                label: f(p, n, p[n])
                            }
                        }), t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    countVisibleElements: function() {
                        var t = this.getDataset(),
                            n = this.getMeta(),
                            i = 0;
                        return e.each(n.data, function(e, n) {
                            isNaN(t.data[n]) || e.hidden || i++
                        }), i
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().count;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
                    }
                })
            }
        }, {}],
        20: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.radar = {
                    scale: {
                        type: "radialLinear"
                    },
                    elements: {
                        line: {
                            tension: 0
                        }
                    }
                }, t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: t.elements.Line,
                    dataElementType: t.elements.Point,
                    linkScales: e.noop,
                    addElementAndReset: function(e) {
                        t.DatasetController.prototype.addElementAndReset.call(this, e), this.updateBezierControlPoints()
                    },
                    update: function(t) {
                        var n = this.getMeta(),
                            i = n.dataset,
                            r = n.data,
                            o = i.custom || {},
                            a = this.getDataset(),
                            s = this.chart.options.elements.line,
                            l = this.chart.scale;
                        void 0 !== a.tension && void 0 === a.lineTension && (a.lineTension = a.tension), e.extend(n.dataset, {
                            _datasetIndex: this.index,
                            _children: r,
                            _loop: !0,
                            _model: {
                                tension: o.tension ? o.tension : e.getValueOrDefault(a.lineTension, s.tension),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : a.backgroundColor || s.backgroundColor,
                                borderWidth: o.borderWidth ? o.borderWidth : a.borderWidth || s.borderWidth,
                                borderColor: o.borderColor ? o.borderColor : a.borderColor || s.borderColor,
                                fill: o.fill ? o.fill : void 0 !== a.fill ? a.fill : s.fill,
                                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : a.borderCapStyle || s.borderCapStyle,
                                borderDash: o.borderDash ? o.borderDash : a.borderDash || s.borderDash,
                                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : a.borderDashOffset || s.borderDashOffset,
                                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : a.borderJoinStyle || s.borderJoinStyle,
                                scaleTop: l.top,
                                scaleBottom: l.bottom,
                                scaleZero: l.getBasePosition()
                            }
                        }), n.dataset.pivot(), e.each(r, function(e, n) {
                            this.updateElement(e, n, t)
                        }, this), this.updateBezierControlPoints()
                    },
                    updateElement: function(t, n, i) {
                        var r = t.custom || {},
                            o = this.getDataset(),
                            a = this.chart.scale,
                            s = this.chart.options.elements.point,
                            l = a.getPointPositionForValue(n, o.data[n]);
                        e.extend(t, {
                            _datasetIndex: this.index,
                            _index: n,
                            _scale: a,
                            _model: {
                                x: i ? a.xCenter : l.x,
                                y: i ? a.yCenter : l.y,
                                tension: r.tension ? r.tension : e.getValueOrDefault(o.tension, this.chart.options.elements.line.tension),
                                radius: r.radius ? r.radius : e.getValueAtIndexOrDefault(o.pointRadius, n, s.radius),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : e.getValueAtIndexOrDefault(o.pointBackgroundColor, n, s.backgroundColor),
                                borderColor: r.borderColor ? r.borderColor : e.getValueAtIndexOrDefault(o.pointBorderColor, n, s.borderColor),
                                borderWidth: r.borderWidth ? r.borderWidth : e.getValueAtIndexOrDefault(o.pointBorderWidth, n, s.borderWidth),
                                pointStyle: r.pointStyle ? r.pointStyle : e.getValueAtIndexOrDefault(o.pointStyle, n, s.pointStyle),
                                hitRadius: r.hitRadius ? r.hitRadius : e.getValueAtIndexOrDefault(o.hitRadius, n, s.hitRadius)
                            }
                        }), t._model.skip = r.skip ? r.skip : isNaN(t._model.x) || isNaN(t._model.y)
                    },
                    updateBezierControlPoints: function() {
                        var t = this.chart.chartArea,
                            n = this.getMeta();
                        e.each(n.data, function(i, r) {
                            var o = i._model,
                                a = e.splineCurve(e.previousItem(n.data, r, !0)._model, o, e.nextItem(n.data, r, !0)._model, o.tension);
                            o.controlPointPreviousX = Math.max(Math.min(a.previous.x, t.right), t.left), o.controlPointPreviousY = Math.max(Math.min(a.previous.y, t.bottom), t.top), o.controlPointNextX = Math.max(Math.min(a.next.x, t.right), t.left), o.controlPointNextY = Math.max(Math.min(a.next.y, t.bottom), t.top), i.pivot()
                        }, this)
                    },
                    draw: function(t) {
                        var n = this.getMeta(),
                            i = t || 1;
                        e.each(n.data, function(t) {
                            t.transition(i)
                        }), n.dataset.transition(i).draw(), e.each(n.data, function(t) {
                            t.draw()
                        })
                    },
                    setHoverStyle: function(t) {
                        var n = this.chart.data.datasets[t._datasetIndex],
                            i = t.custom || {},
                            r = t._index,
                            o = t._model;
                        o.radius = i.hoverRadius ? i.hoverRadius : e.getValueAtIndexOrDefault(n.pointHoverRadius, r, this.chart.options.elements.point.hoverRadius), o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor, r, e.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : e.getValueAtIndexOrDefault(n.pointHoverBorderColor, r, e.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : e.getValueAtIndexOrDefault(n.pointHoverBorderWidth, r, o.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var n = this.chart.data.datasets[t._datasetIndex],
                            i = t.custom || {},
                            r = t._index,
                            o = t._model,
                            a = this.chart.options.elements.point;
                        o.radius = i.radius ? i.radius : e.getValueAtIndexOrDefault(n.radius, r, a.radius), o.backgroundColor = i.backgroundColor ? i.backgroundColor : e.getValueAtIndexOrDefault(n.pointBackgroundColor, r, a.backgroundColor), o.borderColor = i.borderColor ? i.borderColor : e.getValueAtIndexOrDefault(n.pointBorderColor, r, a.borderColor), o.borderWidth = i.borderWidth ? i.borderWidth : e.getValueAtIndexOrDefault(n.pointBorderWidth, r, a.borderWidth)
                    }
                })
            }
        }, {}],
        21: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.global.animation = {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: e.noop,
                    onComplete: e.noop
                }, t.Animation = t.Element.extend({
                    currentStep: null,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }), t.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function(t, e, n, i) {
                        i || (t.animating = !0);
                        for (var r = 0; r < this.animations.length; ++r)
                            if (this.animations[r].chartInstance === t) return void(this.animations[r].animationObject = e);
                        this.animations.push({
                            chartInstance: t,
                            animationObject: e
                        }), 1 === this.animations.length && this.requestAnimationFrame()
                    },
                    cancelAnimation: function(t) {
                        var n = e.findIndex(this.animations, function(e) {
                            return e.chartInstance === t
                        }); - 1 !== n && (this.animations.splice(n, 1), t.animating = !1)
                    },
                    requestAnimationFrame: function() {
                        var t = this;
                        null === t.request && (t.request = e.requestAnimFrame.call(window, function() {
                            t.request = null, t.startDigest()
                        }))
                    },
                    startDigest: function() {
                        var t = Date.now(),
                            e = 0;
                        this.dropFrames > 1 && (e = Math.floor(this.dropFrames), this.dropFrames = this.dropFrames % 1);
                        for (var n = 0; n < this.animations.length;) null === this.animations[n].animationObject.currentStep && (this.animations[n].animationObject.currentStep = 0), this.animations[n].animationObject.currentStep += 1 + e, this.animations[n].animationObject.currentStep > this.animations[n].animationObject.numSteps && (this.animations[n].animationObject.currentStep = this.animations[n].animationObject.numSteps), this.animations[n].animationObject.render(this.animations[n].chartInstance, this.animations[n].animationObject), this.animations[n].animationObject.onAnimationProgress && this.animations[n].animationObject.onAnimationProgress.call && this.animations[n].animationObject.onAnimationProgress.call(this.animations[n].chartInstance, this.animations[n]), this.animations[n].animationObject.currentStep === this.animations[n].animationObject.numSteps ? (this.animations[n].animationObject.onAnimationComplete && this.animations[n].animationObject.onAnimationComplete.call && this.animations[n].animationObject.onAnimationComplete.call(this.animations[n].chartInstance, this.animations[n]), this.animations[n].chartInstance.animating = !1, this.animations.splice(n, 1)) : ++n;
                        var i = Date.now(),
                            r = (i - t) / this.frameDuration;
                        this.dropFrames += r, this.animations.length > 0 && this.requestAnimationFrame()
                    }
                }
            }
        }, {}],
        22: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.types = {}, t.instances = {}, t.controllers = {}, t.Controller = function(n) {
                    return this.chart = n, this.config = n.config, this.options = this.config.options = e.configMerge(t.defaults.global, t.defaults[this.config.type], this.config.options || {}), this.id = e.uid(), Object.defineProperty(this, "data", {
                        get: function() {
                            return this.config.data
                        }
                    }), t.instances[this.id] = this, this.options.responsive && this.resize(!0), this.initialize(), this
                }, e.extend(t.Controller.prototype, {
                    initialize: function() {
                        return t.pluginService.notifyPlugins("beforeInit", [this]), this.bindEvents(), this.ensureScalesHaveIDs(), this.buildOrUpdateControllers(), this.buildScales(), this.buildSurroundingItems(), this.updateLayout(), this.resetElements(), this.initToolTip(), this.update(), t.pluginService.notifyPlugins("afterInit", [this]), this
                    },
                    clear: function() {
                        return e.clear(this.chart), this
                    },
                    stop: function() {
                        return t.animationService.cancelAnimation(this), this
                    },
                    resize: function(t) {
                        var n = this.chart.canvas,
                            i = e.getMaximumWidth(this.chart.canvas),
                            r = this.options.maintainAspectRatio && isNaN(this.chart.aspectRatio) === !1 && isFinite(this.chart.aspectRatio) && 0 !== this.chart.aspectRatio ? i / this.chart.aspectRatio : e.getMaximumHeight(this.chart.canvas),
                            o = this.chart.width !== i || this.chart.height !== r;
                        return o ? (n.width = this.chart.width = i, n.height = this.chart.height = r, e.retinaScale(this.chart), t || (this.stop(), this.update(this.options.responsiveAnimationDuration)), this) : this
                    },
                    ensureScalesHaveIDs: function() {
                        var t = this.options,
                            n = t.scales || {},
                            i = t.scale;
                        e.each(n.xAxes, function(t, e) {
                            t.id = t.id || "x-axis-" + e
                        }), e.each(n.yAxes, function(t, e) {
                            t.id = t.id || "y-axis-" + e
                        }), i && (i.id = i.id || "scale")
                    },
                    buildScales: function() {
                        var n = this,
                            i = n.options,
                            r = n.scales = {},
                            o = [];
                        i.scales && (o = o.concat((i.scales.xAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "category"
                            }
                        }), (i.scales.yAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "linear"
                            }
                        }))), i.scale && o.push({
                            options: i.scale,
                            dtype: "radialLinear",
                            isDefault: !0
                        }), e.each(o, function(i) {
                            var o = i.options,
                                a = e.getValueOrDefault(o.type, i.dtype),
                                s = t.scaleService.getScaleConstructor(a);
                            if (s) {
                                var l = new s({
                                    id: o.id,
                                    options: o,
                                    ctx: n.chart.ctx,
                                    chart: n
                                });
                                r[l.id] = l, i.isDefault && (n.scale = l)
                            }
                        }), t.scaleService.addScalesToLayout(this)
                    },
                    buildSurroundingItems: function() {
                        this.options.title && (this.titleBlock = new t.Title({
                            ctx: this.chart.ctx,
                            options: this.options.title,
                            chart: this
                        }), t.layoutService.addBox(this, this.titleBlock)), this.options.legend && (this.legend = new t.Legend({
                            ctx: this.chart.ctx,
                            options: this.options.legend,
                            chart: this
                        }), t.layoutService.addBox(this, this.legend))
                    },
                    updateLayout: function() {
                        t.layoutService.update(this, this.chart.width, this.chart.height)
                    },
                    buildOrUpdateControllers: function() {
                        var n = [],
                            i = [];
                        if (e.each(this.data.datasets, function(e, r) {
                                var o = this.getDatasetMeta(r);
                                o.type || (o.type = e.type || this.config.type), n.push(o.type), o.controller ? o.controller.updateIndex(r) : (o.controller = new t.controllers[o.type](this, r), i.push(o.controller))
                            }, this), n.length > 1)
                            for (var r = 1; r < n.length; r++)
                                if (n[r] !== n[r - 1]) {
                                    this.isCombo = !0;
                                    break
                                }
                        return i
                    },
                    resetElements: function() {
                        e.each(this.data.datasets, function(t, e) {
                            this.getDatasetMeta(e).controller.reset()
                        }, this)
                    },
                    update: function(n, i) {
                        t.pluginService.notifyPlugins("beforeUpdate", [this]), this.tooltip._data = this.data;
                        var r = this.buildOrUpdateControllers();
                        e.each(this.data.datasets, function(t, e) {
                            this.getDatasetMeta(e).controller.buildOrUpdateElements()
                        }, this), t.layoutService.update(this, this.chart.width, this.chart.height), t.pluginService.notifyPlugins("afterScaleUpdate", [this]), e.each(r, function(t) {
                            t.reset()
                        }), e.each(this.data.datasets, function(t, e) {
                            this.getDatasetMeta(e).controller.update()
                        }, this), t.pluginService.notifyPlugins("afterUpdate", [this]), this.render(n, i)
                    },
                    render: function(n, i) {
                        t.pluginService.notifyPlugins("beforeRender", [this]);
                        var r = this.options.animation;
                        if (r && ("undefined" != typeof n && 0 !== n || "undefined" == typeof n && 0 !== r.duration)) {
                            var o = new t.Animation;
                            o.numSteps = (n || r.duration) / 16.66, o.easing = r.easing, o.render = function(t, n) {
                                var i = e.easingEffects[n.easing],
                                    r = n.currentStep / n.numSteps,
                                    o = i(r);
                                t.draw(o, r, n.currentStep)
                            }, o.onAnimationProgress = r.onProgress, o.onAnimationComplete = r.onComplete, t.animationService.addAnimation(this, o, n, i)
                        } else this.draw(), r && r.onComplete && r.onComplete.call && r.onComplete.call(this);
                        return this
                    },
                    draw: function(n) {
                        var i = n || 1;
                        this.clear(), t.pluginService.notifyPlugins("beforeDraw", [this, i]), e.each(this.boxes, function(t) {
                            t.draw(this.chartArea)
                        }, this), this.scale && this.scale.draw();
                        var r = this.chart.ctx;
                        r.save(), r.beginPath(), r.rect(this.chartArea.left, this.chartArea.top, this.chartArea.right - this.chartArea.left, this.chartArea.bottom - this.chartArea.top), r.clip(), e.each(this.data.datasets, function(t, e) {
                            this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.draw(n)
                        }, this, !0), r.restore(), this.tooltip.transition(i).draw(), t.pluginService.notifyPlugins("afterDraw", [this, i])
                    },
                    getElementAtEvent: function(t) {
                        var n = e.getRelativePosition(t, this.chart),
                            i = [];
                        return e.each(this.data.datasets, function(t, r) {
                            if (this.isDatasetVisible(r)) {
                                var o = this.getDatasetMeta(r);
                                e.each(o.data, function(t) {
                                    return t.inRange(n.x, n.y) ? (i.push(t), i) : void 0
                                })
                            }
                        }, this), i
                    },
                    getElementsAtEvent: function(t) {
                        var n = e.getRelativePosition(t, this.chart),
                            i = [],
                            r = function() {
                                if (this.data.datasets)
                                    for (var t = 0; t < this.data.datasets.length; t++) {
                                        var e = this.getDatasetMeta(t);
                                        if (this.isDatasetVisible(t))
                                            for (var i = 0; i < e.data.length; i++)
                                                if (e.data[i].inRange(n.x, n.y)) return e.data[i]
                                    }
                            }.call(this);
                        return r ? (e.each(this.data.datasets, function(t, e) {
                            if (this.isDatasetVisible(e)) {
                                var n = this.getDatasetMeta(e);
                                i.push(n.data[r._index])
                            }
                        }, this), i) : i
                    },
                    getElementsAtEventForMode: function(t, e) {
                        var n = this;
                        switch (e) {
                            case "single":
                                return n.getElementAtEvent(t);
                            case "label":
                                return n.getElementsAtEvent(t);
                            case "dataset":
                                return n.getDatasetAtEvent(t);
                            default:
                                return t
                        }
                    },
                    getDatasetAtEvent: function(t) {
                        var e = this.getElementAtEvent(t);
                        return e.length > 0 && (e = this.getDatasetMeta(e[0]._datasetIndex).data), e
                    },
                    getDatasetMeta: function(t) {
                        var e = this.data.datasets[t];
                        e._meta || (e._meta = {});
                        var n = e._meta[this.id];
                        return n || (n = e._meta[this.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), n
                    },
                    getVisibleDatasetCount: function() {
                        for (var t = 0, e = 0, n = this.data.datasets.length; n > e; ++e) this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible: function(t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function() {
                        return this.options.legendCallback(this)
                    },
                    destroy: function() {
                        this.clear(), e.unbindEvents(this, this.events), e.removeResizeListener(this.chart.canvas.parentNode);
                        var n = this.chart.canvas;
                        n.width = this.chart.width, n.height = this.chart.height, void 0 !== this.chart.originalDevicePixelRatio && this.chart.ctx.scale(1 / this.chart.originalDevicePixelRatio, 1 / this.chart.originalDevicePixelRatio), n.style.width = this.chart.originalCanvasStyleWidth, n.style.height = this.chart.originalCanvasStyleHeight, t.pluginService.notifyPlugins("destroy", [this]), delete t.instances[this.id]
                    },
                    toBase64Image: function() {
                        return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
                    },
                    initToolTip: function() {
                        this.tooltip = new t.Tooltip({
                            _chart: this.chart,
                            _chartInstance: this,
                            _data: this.data,
                            _options: this.options
                        }, this)
                    },
                    bindEvents: function() {
                        e.bindEvents(this, this.options.events, function(t) {
                            this.eventHandler(t)
                        })
                    },
                    updateHoverStyle: function(t, e, n) {
                        var i, r, o, a = n ? "setHoverStyle" : "removeHoverStyle";
                        switch (e) {
                            case "single":
                                t = [t[0]];
                                break;
                            case "label":
                            case "dataset":
                                break;
                            default:
                                return
                        }
                        for (r = 0, o = t.length; o > r; ++r) i = t[r], i && this.getDatasetMeta(i._datasetIndex).controller[a](i)
                    },
                    eventHandler: function(t) {
                        var n = this,
                            i = n.tooltip,
                            r = n.options || {},
                            o = r.hover,
                            a = r.tooltips;
                        return n.lastActive = n.lastActive || [], n.lastTooltipActive = n.lastTooltipActive || [], "mouseout" === t.type ? (n.active = [], n.tooltipActive = []) : (n.active = n.getElementsAtEventForMode(t, o.mode), n.tooltipActive = n.getElementsAtEventForMode(t, a.mode)), o.onHover && o.onHover.call(n, n.active), ("mouseup" === t.type || "click" === t.type) && (r.onClick && r.onClick.call(n, t, n.active), n.legend && n.legend.handleEvent && n.legend.handleEvent(t)), n.lastActive.length && n.updateHoverStyle(n.lastActive, o.mode, !1), n.active.length && o.mode && n.updateHoverStyle(n.active, o.mode, !0), (a.enabled || a.custom) && (i.initialize(), i._active = n.tooltipActive, i.update(!0)), i.pivot(), n.animating || e.arrayEquals(n.active, n.lastActive) && e.arrayEquals(n.tooltipActive, n.lastTooltipActive) || (n.stop(), (a.enabled || a.custom) && i.update(!0), n.render(o.animationDuration, !0)), n.lastActive = n.active, n.lastTooltipActive = n.tooltipActive, n
                    }
                })
            }
        }, {}],
        23: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    n = e.noop;
                t.DatasetController = function(t, e) {
                    this.initialize.call(this, t, e)
                }, e.extend(t.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function(t, e) {
                        this.chart = t, this.index = e, this.linkScales(), this.addElements()
                    },
                    updateIndex: function(t) {
                        this.index = t
                    },
                    linkScales: function() {
                        var t = this.getMeta(),
                            e = this.getDataset();
                        null === t.xAxisID && (t.xAxisID = e.xAxisID || this.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = e.yAxisID || this.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function(t) {
                        return this.chart.scales[t]
                    },
                    reset: function() {
                        this.update(!0)
                    },
                    createMetaDataset: function() {
                        var t = this,
                            e = t.datasetElementType;
                        return e && new e({
                            _chart: t.chart.chart,
                            _datasetIndex: t.index
                        })
                    },
                    createMetaData: function(t) {
                        var e = this,
                            n = e.dataElementType;
                        return n && new n({
                            _chart: e.chart.chart,
                            _datasetIndex: e.index,
                            _index: t
                        })
                    },
                    addElements: function() {
                        var t, e, n = this,
                            i = n.getMeta(),
                            r = n.getDataset().data || [],
                            o = i.data;
                        for (t = 0, e = r.length; e > t; ++t) o[t] = o[t] || n.createMetaData(i, t);
                        i.dataset = i.dataset || n.createMetaDataset()
                    },
                    addElementAndReset: function(t) {
                        var e = this,
                            n = e.createMetaData(t);
                        e.getMeta().data.splice(t, 0, n), e.updateElement(n, t, !0)
                    },
                    buildOrUpdateElements: function() {
                        var t = this.getMeta(),
                            e = t.data,
                            n = this.getDataset().data.length,
                            i = e.length;
                        if (i > n) e.splice(n, i - n);
                        else if (n > i)
                            for (var r = i; n > r; ++r) this.addElementAndReset(r)
                    },
                    update: n,
                    draw: function(t) {
                        var n = t || 1;
                        e.each(this.getMeta().data, function(t) {
                            t.transition(n).draw()
                        })
                    },
                    removeHoverStyle: function(t, n) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            r = t._index,
                            o = t.custom || {},
                            a = e.getValueAtIndexOrDefault,
                            s = (e.color, t._model);
                        s.backgroundColor = o.backgroundColor ? o.backgroundColor : a(i.backgroundColor, r, n.backgroundColor),
                            s.borderColor = o.borderColor ? o.borderColor : a(i.borderColor, r, n.borderColor), s.borderWidth = o.borderWidth ? o.borderWidth : a(i.borderWidth, r, n.borderWidth)
                    },
                    setHoverStyle: function(t) {
                        var n = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            r = t.custom || {},
                            o = e.getValueAtIndexOrDefault,
                            a = (e.color, e.getHoverColor),
                            s = t._model;
                        s.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : o(n.hoverBackgroundColor, i, a(s.backgroundColor)), s.borderColor = r.hoverBorderColor ? r.hoverBorderColor : o(n.hoverBorderColor, i, a(s.borderColor)), s.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : o(n.hoverBorderWidth, i, s.borderWidth)
                    }
                }), t.DatasetController.extend = e.inherits
            }
        }, {}],
        24: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.elements = {}, t.Element = function(t) {
                    e.extend(this, t), this.initialize.apply(this, arguments)
                }, e.extend(t.Element.prototype, {
                    initialize: function() {
                        this.hidden = !1
                    },
                    pivot: function() {
                        return this._view || (this._view = e.clone(this._model)), this._start = e.clone(this._view), this
                    },
                    transition: function(t) {
                        return this._view || (this._view = e.clone(this._model)), 1 === t ? (this._view = this._model, this._start = null, this) : (this._start || this.pivot(), e.each(this._model, function(n, i) {
                            if ("_" === i[0]);
                            else if (this._view.hasOwnProperty(i))
                                if (n === this._view[i]);
                                else if ("string" == typeof n) try {
                                var r = e.color(this._model[i]).mix(e.color(this._start[i]), t);
                                this._view[i] = r.rgbString()
                            } catch (t) {
                                this._view[i] = n
                            } else if ("number" == typeof n) {
                                var o = void 0 !== this._start[i] && isNaN(this._start[i]) === !1 ? this._start[i] : 0;
                                this._view[i] = (this._model[i] - o) * t + o
                            } else this._view[i] = n;
                            else "number" != typeof n || isNaN(this._view[i]) ? this._view[i] = n : this._view[i] = n * t
                        }, this), this)
                    },
                    tooltipPosition: function() {
                        return {
                            x: this._model.x,
                            y: this._model.y
                        }
                    },
                    hasValue: function() {
                        return e.isNumber(this._model.x) && e.isNumber(this._model.y)
                    }
                }), t.Element.extend = e.inherits
            }
        }, {}],
        25: [function(t, e) {
            "use strict";
            var n = t("chartjs-color");
            e.exports = function(t) {
                function e(t, e, n) {
                    var i;
                    return "string" == typeof t ? (i = parseInt(t, 10), -1 != t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
                }

                function i(t) {
                    return void 0 !== t && null !== t && "none" !== t
                }

                function r(t, n, r) {
                    var o = document.defaultView,
                        a = t.parentNode,
                        s = o.getComputedStyle(t)[n],
                        l = o.getComputedStyle(a)[n],
                        d = i(s),
                        u = i(l),
                        c = Number.POSITIVE_INFINITY;
                    return d || u ? Math.min(d ? e(s, t, r) : c, u ? e(l, a, r) : c) : "none"
                }
                var o = t.helpers = {};
                o.each = function(t, e, n, i) {
                    var r, a;
                    if (o.isArray(t))
                        if (a = t.length, i)
                            for (r = a - 1; r >= 0; r--) e.call(n, t[r], r);
                        else
                            for (r = 0; a > r; r++) e.call(n, t[r], r);
                    else if ("object" == typeof t) {
                        var s = Object.keys(t);
                        for (a = s.length, r = 0; a > r; r++) e.call(n, t[s[r]], s[r])
                    }
                }, o.clone = function(t) {
                    var e = {};
                    return o.each(t, function(t, n) {
                        o.isArray(t) ? e[n] = t.slice(0) : "object" == typeof t && null !== t ? e[n] = o.clone(t) : e[n] = t
                    }), e
                }, o.extend = function(t) {
                    for (var e = arguments.length, n = [], i = 1; e > i; i++) n.push(arguments[i]);
                    return o.each(n, function(e) {
                        o.each(e, function(e, n) {
                            t[n] = e
                        })
                    }), t
                }, o.configMerge = function(e) {
                    var n = o.clone(e);
                    return o.each(Array.prototype.slice.call(arguments, 1), function(e) {
                        o.each(e, function(e, i) {
                            if ("scales" === i) n[i] = o.scaleMerge(n.hasOwnProperty(i) ? n[i] : {}, e);
                            else if ("scale" === i) n[i] = o.configMerge(n.hasOwnProperty(i) ? n[i] : {}, t.scaleService.getScaleDefaults(e.type), e);
                            else if (n.hasOwnProperty(i) && o.isArray(n[i]) && o.isArray(e)) {
                                var r = n[i];
                                o.each(e, function(t, e) {
                                    e < r.length ? "object" == typeof r[e] && null !== r[e] && "object" == typeof t && null !== t ? r[e] = o.configMerge(r[e], t) : r[e] = t : r.push(t)
                                })
                            } else n.hasOwnProperty(i) && "object" == typeof n[i] && null !== n[i] && "object" == typeof e ? n[i] = o.configMerge(n[i], e) : n[i] = e
                        })
                    }), n
                }, o.extendDeep = function() {
                    function t(e) {
                        return o.each(arguments, function(n) {
                            n !== e && o.each(n, function(n, i) {
                                e[i] && e[i].constructor && e[i].constructor === Object ? t(e[i], n) : e[i] = n
                            })
                        }), e
                    }
                    return t.apply(this, arguments)
                }, o.scaleMerge = function(e, n) {
                    var i = o.clone(e);
                    return o.each(n, function(e, n) {
                        "xAxes" === n || "yAxes" === n ? i.hasOwnProperty(n) ? o.each(e, function(e, r) {
                            var a = o.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear"),
                                s = t.scaleService.getScaleDefaults(a);
                            r >= i[n].length || !i[n][r].type ? i[n].push(o.configMerge(s, e)) : e.type && e.type !== i[n][r].type ? i[n][r] = o.configMerge(i[n][r], s, e) : i[n][r] = o.configMerge(i[n][r], e)
                        }) : (i[n] = [], o.each(e, function(e) {
                            var r = o.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear");
                            i[n].push(o.configMerge(t.scaleService.getScaleDefaults(r), e))
                        })) : i.hasOwnProperty(n) && "object" == typeof i[n] && null !== i[n] && "object" == typeof e ? i[n] = o.configMerge(i[n], e) : i[n] = e
                    }), i
                }, o.getValueAtIndexOrDefault = function(t, e, n) {
                    return void 0 === t || null === t ? n : o.isArray(t) ? e < t.length ? t[e] : n : t
                }, o.getValueOrDefault = function(t, e) {
                    return void 0 === t ? e : t
                }, o.indexOf = function(t, e) {
                    if (Array.prototype.indexOf) return t.indexOf(e);
                    for (var n = 0; n < t.length; n++)
                        if (t[n] === e) return n;
                    return -1
                }, o.where = function(t, e) {
                    if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var n = [];
                    return o.each(t, function(t) {
                        e(t) && n.push(t)
                    }), n
                }, o.findIndex = function(t, e, n) {
                    var i = -1;
                    if (Array.prototype.findIndex) i = t.findIndex(e, n);
                    else
                        for (var r = 0; r < t.length; ++r)
                            if (n = void 0 !== n ? n : t, e.call(n, t[r], r, t)) {
                                i = r;
                                break
                            } return i
                }, o.findNextWhere = function(t, e, n) {
                    (void 0 === n || null === n) && (n = -1);
                    for (var i = n + 1; i < t.length; i++) {
                        var r = t[i];
                        if (e(r)) return r
                    }
                }, o.findPreviousWhere = function(t, e, n) {
                    (void 0 === n || null === n) && (n = t.length);
                    for (var i = n - 1; i >= 0; i--) {
                        var r = t[i];
                        if (e(r)) return r
                    }
                }, o.inherits = function(t) {
                    var e = this,
                        n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                            return e.apply(this, arguments)
                        },
                        i = function() {
                            this.constructor = n
                        };
                    return i.prototype = e.prototype, n.prototype = new i, n.extend = o.inherits, t && o.extend(n.prototype, t), n.__super__ = e.prototype, n
                }, o.noop = function() {}, o.uid = function() {
                    var t = 0;
                    return function() {
                        return t++
                    }
                }(), o.warn = function(t) {
                    console && "function" == typeof console.warn && console.warn(t)
                }, o.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, o.almostEquals = function(t, e, n) {
                    return Math.abs(t - e) < n
                }, o.max = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, o.min = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, o.sign = function(t) {
                    return Math.sign ? Math.sign(t) : (t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1)
                }, o.log10 = function(t) {
                    return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10
                }, o.toRadians = function(t) {
                    return t * (Math.PI / 180)
                }, o.toDegrees = function(t) {
                    return t * (180 / Math.PI)
                }, o.getAngleFromPoint = function(t, e) {
                    var n = e.x - t.x,
                        i = e.y - t.y,
                        r = Math.sqrt(n * n + i * i),
                        o = Math.atan2(i, n);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI), {
                        angle: o,
                        distance: r
                    }
                }, o.aliasPixel = function(t) {
                    return t % 2 === 0 ? 0 : .5
                }, o.splineCurve = function(t, e, n, i) {
                    var r = t.skip ? e : t,
                        o = e,
                        a = n.skip ? e : n,
                        s = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                        l = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
                        d = s / (s + l),
                        u = l / (s + l);
                    d = isNaN(d) ? 0 : d, u = isNaN(u) ? 0 : u;
                    var c = i * d,
                        h = i * u;
                    return {
                        previous: {
                            x: o.x - c * (a.x - r.x),
                            y: o.y - c * (a.y - r.y)
                        },
                        next: {
                            x: o.x + h * (a.x - r.x),
                            y: o.y + h * (a.y - r.y)
                        }
                    }
                }, o.nextItem = function(t, e, n) {
                    return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, o.previousItem = function(t, e, n) {
                    return n ? 0 >= e ? t[t.length - 1] : t[e - 1] : 0 >= e ? t[0] : t[e - 1]
                }, o.niceNum = function(t, e) {
                    var n, i = Math.floor(o.log10(t)),
                        r = t / Math.pow(10, i);
                    return n = e ? 1.5 > r ? 1 : 3 > r ? 2 : 7 > r ? 5 : 10 : 1 >= r ? 1 : 2 >= r ? 2 : 5 >= r ? 5 : 10, n * Math.pow(10, i)
                };
                var a = o.easingEffects = {
                    linear: function(t) {
                        return t
                    },
                    easeInQuad: function(t) {
                        return t * t
                    },
                    easeOutQuad: function(t) {
                        return -1 * t * (t - 2)
                    },
                    easeInOutQuad: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function(t) {
                        return t * t * t
                    },
                    easeOutCubic: function(t) {
                        return 1 * ((t = t / 1 - 1) * t * t + 1)
                    },
                    easeInOutCubic: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function(t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function(t) {
                        return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                    },
                    easeInOutQuart: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function(t) {
                        return 1 * (t /= 1) * t * t * t * t
                    },
                    easeOutQuint: function(t) {
                        return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                    },
                    easeInOutQuint: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function(t) {
                        return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                    },
                    easeOutSine: function(t) {
                        return 1 * Math.sin(t / 1 * (Math.PI / 2))
                    },
                    easeInOutSine: function(t) {
                        return -.5 * (Math.cos(Math.PI * t / 1) - 1)
                    },
                    easeInExpo: function(t) {
                        return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                    },
                    easeOutExpo: function(t) {
                        return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                    },
                    easeInOutExpo: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                    },
                    easeInCirc: function(t) {
                        return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                    },
                    easeOutCirc: function(t) {
                        return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                    },
                    easeInOutCirc: function(t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function(t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)))
                    },
                    easeOutElastic: function(t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / n) + 1)
                    },
                    easeInOutElastic: function(t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (n || (n = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n) * .5 + 1)
                    },
                    easeInBack: function(t) {
                        var e = 1.70158;
                        return 1 * (t /= 1) * t * ((e + 1) * t - e)
                    },
                    easeOutBack: function(t) {
                        var e = 1.70158;
                        return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                    },
                    easeInOutBack: function(t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                    },
                    easeInBounce: function(t) {
                        return 1 - a.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function(t) {
                        return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                    },
                    easeInOutBounce: function(t) {
                        return .5 > t ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5
                    }
                };
                o.requestAnimFrame = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                        return window.setTimeout(t, 1e3 / 60)
                    }
                }(), o.cancelAnimFrame = function() {
                    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                        return window.clearTimeout(t, 1e3 / 60)
                    }
                }(), o.getRelativePosition = function(t, e) {
                    var n, i, r = t.originalEvent || t,
                        a = t.currentTarget || t.srcElement,
                        s = a.getBoundingClientRect(),
                        l = r.touches;
                    l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = r.clientX, i = r.clientY);
                    var d = parseFloat(o.getStyle(a, "padding-left")),
                        u = parseFloat(o.getStyle(a, "padding-top")),
                        c = parseFloat(o.getStyle(a, "padding-right")),
                        h = parseFloat(o.getStyle(a, "padding-bottom")),
                        f = s.right - s.left - d - c,
                        p = s.bottom - s.top - u - h;
                    return n = Math.round((n - s.left - d) / f * a.width / e.currentDevicePixelRatio), i = Math.round((i - s.top - u) / p * a.height / e.currentDevicePixelRatio), {
                        x: n,
                        y: i
                    }
                }, o.addEvent = function(t, e, n) {
                    t.addEventListener ? t.addEventListener(e, n) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n
                }, o.removeEvent = function(t, e, n) {
                    t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = o.noop
                }, o.bindEvents = function(t, e, n) {
                    var i = t.events = t.events || {};
                    o.each(e, function(e) {
                        i[e] = function() {
                            n.apply(t, arguments)
                        }, o.addEvent(t.chart.canvas, e, i[e])
                    })
                }, o.unbindEvents = function(t, e) {
                    var n = t.chart.canvas;
                    o.each(e, function(t, e) {
                        o.removeEvent(n, e, t)
                    })
                }, o.getConstraintWidth = function(t) {
                    return r(t, "max-width", "clientWidth")
                }, o.getConstraintHeight = function(t) {
                    return r(t, "max-height", "clientHeight")
                }, o.getMaximumWidth = function(t) {
                    var e = t.parentNode,
                        n = parseInt(o.getStyle(e, "padding-left")) + parseInt(o.getStyle(e, "padding-right")),
                        i = e.clientWidth - n,
                        r = o.getConstraintWidth(t);
                    return isNaN(r) ? i : Math.min(i, r)
                }, o.getMaximumHeight = function(t) {
                    var e = t.parentNode,
                        n = parseInt(o.getStyle(e, "padding-top")) + parseInt(o.getStyle(e, "padding-bottom")),
                        i = e.clientHeight - n,
                        r = o.getConstraintHeight(t);
                    return isNaN(r) ? i : Math.min(i, r)
                }, o.getStyle = function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, o.retinaScale = function(t) {
                    var e = t.ctx,
                        n = t.canvas,
                        i = n.width,
                        r = n.height,
                        o = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
                    1 !== o && (n.height = r * o, n.width = i * o, e.scale(o, o), t.originalDevicePixelRatio = t.originalDevicePixelRatio || o), n.style.width = i + "px", n.style.height = r + "px"
                }, o.clear = function(t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                }, o.fontString = function(t, e, n) {
                    return e + " " + t + "px " + n
                }, o.longestText = function(t, e, n, i) {
                    i = i || {};
                    var r = i.data = i.data || {},
                        a = i.garbageCollect = i.garbageCollect || [];
                    i.font !== e && (r = i.data = {}, a = i.garbageCollect = [], i.font = e), t.font = e;
                    var s = 0;
                    o.each(n, function(e) {
                        if (void 0 !== e && null !== e) {
                            var n = r[e];
                            n || (n = r[e] = t.measureText(e).width, a.push(e)), n > s && (s = n)
                        }
                    });
                    var l = a.length / 2;
                    if (l > n.length) {
                        for (var d = 0; l > d; d++) delete r[a[d]];
                        a.splice(0, l)
                    }
                    return s
                }, o.drawRoundedRectangle = function(t, e, n, i, r, o) {
                    t.beginPath(), t.moveTo(e + o, n), t.lineTo(e + i - o, n), t.quadraticCurveTo(e + i, n, e + i, n + o), t.lineTo(e + i, n + r - o), t.quadraticCurveTo(e + i, n + r, e + i - o, n + r), t.lineTo(e + o, n + r), t.quadraticCurveTo(e, n + r, e, n + r - o), t.lineTo(e, n + o), t.quadraticCurveTo(e, n, e + o, n), t.closePath()
                }, o.color = function(e) {
                    return n ? n(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.log("Color.js not found!"), e)
                }, o.addResizeListener = function(t, e) {
                    var n = document.createElement("iframe"),
                        i = "chartjs-hidden-iframe";
                    n.classlist ? n.classlist.add(i) : n.setAttribute("class", i);
                    var r = n.style;
                    r.width = "100%", r.display = "block", r.border = 0, r.height = 0, r.margin = 0, r.position = "absolute", r.left = 0, r.right = 0, r.top = 0, r.bottom = 0, t.insertBefore(n, t.firstChild), (n.contentWindow || n).onresize = function() {
                        e && e()
                    }
                }, o.removeResizeListener = function(t) {
                    var e = t.querySelector(".chartjs-hidden-iframe");
                    e && e.parentNode.removeChild(e)
                }, o.isArray = function(t) {
                    return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
                }, o.arrayEquals = function(t, e) {
                    var n, i, r, a;
                    if (!t || !e || t.length != e.length) return !1;
                    for (n = 0, i = t.length; i > n; ++n)
                        if (r = t[n], a = e[n], r instanceof Array && a instanceof Array) {
                            if (!o.arrayEquals(r, a)) return !1
                        } else if (r != a) return !1;
                    return !0
                }, o.pushAllIfDefined = function(t, e) {
                    "undefined" != typeof t && (o.isArray(t) ? e.push.apply(e, t) : e.push(t))
                }, o.callCallback = function(t, e, n) {
                    t && "function" == typeof t.call && t.apply(n, e)
                }, o.getHoverColor = function(t) {
                    return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {
            "chartjs-color": 2
        }],
        26: [function(t, e) {
            "use strict";
            e.exports = function() {
                var t = function(e, n) {
                    this.config = n, e.length && e[0].getContext && (e = e[0]), e.getContext && (e = e.getContext("2d")), this.ctx = e, this.canvas = e.canvas, this.width = e.canvas.width || parseInt(t.helpers.getStyle(e.canvas, "width")) || t.helpers.getMaximumWidth(e.canvas), this.height = e.canvas.height || parseInt(t.helpers.getStyle(e.canvas, "height")) || t.helpers.getMaximumHeight(e.canvas), this.aspectRatio = this.width / this.height, (isNaN(this.aspectRatio) || isFinite(this.aspectRatio) === !1) && (this.aspectRatio = void 0 !== n.aspectRatio ? n.aspectRatio : 2), this.originalCanvasStyleWidth = e.canvas.style.width, this.originalCanvasStyleHeight = e.canvas.style.height, t.helpers.retinaScale(this), n && (this.controller = new t.Controller(this));
                    var i = this;
                    return t.helpers.addResizeListener(e.canvas.parentNode, function() {
                        i.controller && i.controller.config.options.responsive && i.controller.resize()
                    }), this.controller ? this.controller : this
                };
                return t.defaults = {
                    global: {
                        responsive: !0,
                        responsiveAnimationDuration: 0,
                        maintainAspectRatio: !0,
                        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                        hover: {
                            onHover: null,
                            mode: "single",
                            animationDuration: 400
                        },
                        onClick: null,
                        defaultColor: "rgba(0,0,0,0.1)",
                        defaultFontColor: "#666",
                        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        defaultFontSize: 12,
                        defaultFontStyle: "normal",
                        showLines: !0,
                        elements: {},
                        legendCallback: function(t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            for (var n = 0; n < t.data.datasets.length; n++) e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
                            return e.push("</ul>"), e.join("")
                        }
                    }
                }, t
            }
        }, {}],
        27: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.layoutService = {
                    defaults: {},
                    addBox: function(t, e) {
                        t.boxes || (t.boxes = []), t.boxes.push(e)
                    },
                    removeBox: function(t, e) {
                        t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1)
                    },
                    update: function(t, n, i) {
                        function r(t) {
                            var e, n = t.isHorizontal();
                            n ? (e = t.update(t.options.fullWidth ? g : w, x), _ -= e.height) : (e = t.update(b, y), w -= e.width), k.push({
                                horizontal: n,
                                minSize: e,
                                box: t
                            })
                        }

                        function o(t) {
                            var n = e.findNextWhere(k, function(e) {
                                return e.box === t
                            });
                            if (n)
                                if (t.isHorizontal()) {
                                    var i = {
                                        left: S,
                                        right: C,
                                        top: 0,
                                        bottom: 0
                                    };
                                    t.update(t.options.fullWidth ? g : w, m / 2, i)
                                } else t.update(n.minSize.width, _)
                        }

                        function a(t) {
                            var n = e.findNextWhere(k, function(e) {
                                    return e.box === t
                                }),
                                i = {
                                    left: 0,
                                    right: 0,
                                    top: D,
                                    bottom: M
                                };
                            n && t.update(n.minSize.width, _, i)
                        }

                        function s(t) {
                            t.isHorizontal() ? (t.left = t.options.fullWidth ? l : S, t.right = t.options.fullWidth ? n - l : S + w, t.top = P, t.bottom = P + t.height, P = t.bottom) : (t.left = A, t.right = A + t.width, t.top = D, t.bottom = D + _, A = t.right)
                        }
                        if (t) {
                            var l = 0,
                                d = 0,
                                u = e.where(t.boxes, function(t) {
                                    return "left" === t.options.position
                                }),
                                c = e.where(t.boxes, function(t) {
                                    return "right" === t.options.position
                                }),
                                h = e.where(t.boxes, function(t) {
                                    return "top" === t.options.position
                                }),
                                f = e.where(t.boxes, function(t) {
                                    return "bottom" === t.options.position
                                }),
                                p = e.where(t.boxes, function(t) {
                                    return "chartArea" === t.options.position
                                });
                            h.sort(function(t, e) {
                                return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0)
                            }), f.sort(function(t, e) {
                                return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0)
                            });
                            var g = n - 2 * l,
                                m = i - 2 * d,
                                v = g / 2,
                                y = m / 2,
                                b = (n - v) / (u.length + c.length),
                                x = (i - y) / (h.length + f.length),
                                w = g,
                                _ = m,
                                k = [];
                            e.each(u.concat(c, h, f), r);
                            var S = l,
                                C = l,
                                D = d,
                                M = d;
                            e.each(u.concat(c), o), e.each(u, function(t) {
                                S += t.width
                            }), e.each(c, function(t) {
                                C += t.width
                            }), e.each(h.concat(f), o), e.each(h, function(t) {
                                D += t.height
                            }), e.each(f, function(t) {
                                M += t.height
                            }), e.each(u.concat(c), a), S = l, C = l, D = d, M = d, e.each(u, function(t) {
                                S += t.width
                            }), e.each(c, function(t) {
                                C += t.width
                            }), e.each(h, function(t) {
                                D += t.height
                            }), e.each(f, function(t) {
                                M += t.height
                            });
                            var T = i - D - M,
                                O = n - S - C;
                            (O !== w || T !== _) && (e.each(u, function(t) {
                                t.height = T
                            }), e.each(c, function(t) {
                                t.height = T
                            }), e.each(h, function(t) {
                                t.options.fullWidth || (t.width = O)
                            }), e.each(f, function(t) {
                                t.options.fullWidth || (t.width = O)
                            }), _ = T, w = O);
                            var A = l,
                                P = d;
                            e.each(u.concat(h), s), A += w, P += _, e.each(c, s), e.each(f, s), t.chartArea = {
                                left: S,
                                top: D,
                                right: S + w,
                                bottom: D + _
                            }, e.each(p, function(e) {
                                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(w, _)
                            })
                        }
                    }
                }
            }
        }, {}],
        28: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    n = e.noop;
                t.defaults.global.legend = {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    onClick: function(t, e) {
                        var n = e.datasetIndex,
                            i = this.chart,
                            r = i.getDatasetMeta(n);
                        r.hidden = null === r.hidden ? !i.data.datasets[n].hidden : null, i.update()
                    },
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function(t) {
                            var n = t.data;
                            return e.isArray(n.datasets) ? n.datasets.map(function(e, n) {
                                return {
                                    text: e.label,
                                    fillStyle: e.backgroundColor,
                                    hidden: !t.isDatasetVisible(n),
                                    lineCap: e.borderCapStyle,
                                    lineDash: e.borderDash,
                                    lineDashOffset: e.borderDashOffset,
                                    lineJoin: e.borderJoinStyle,
                                    lineWidth: e.borderWidth,
                                    strokeStyle: e.borderColor,
                                    datasetIndex: n
                                }
                            }, this) : []
                        }
                    }
                }, t.Legend = t.Element.extend({
                    initialize: function(t) {
                        e.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                    },
                    beforeUpdate: n,
                    update: function(t, e, n) {
                        return this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this.margins = n, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeBuildLabels(), this.buildLabels(), this.afterBuildLabels(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
                    },
                    afterUpdate: n,
                    beforeSetDimensions: n,
                    setDimensions: function() {
                        this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0, this.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: n,
                    beforeBuildLabels: n,
                    buildLabels: function() {
                        this.legendItems = this.options.labels.generateLabels.call(this, this.chart), this.options.reverse && this.legendItems.reverse()
                    },
                    afterBuildLabels: n,
                    beforeFit: n,
                    fit: function() {
                        var n = this.options,
                            i = n.labels,
                            r = n.display,
                            o = this.ctx,
                            a = t.defaults.global,
                            s = e.getValueOrDefault,
                            l = s(i.fontSize, a.defaultFontSize),
                            d = s(i.fontStyle, a.defaultFontStyle),
                            u = s(i.fontFamily, a.defaultFontFamily),
                            c = e.fontString(l, d, u),
                            h = this.legendHitBoxes = [],
                            f = this.minSize,
                            p = this.isHorizontal();
                        if (p ? (f.width = this.maxWidth, f.height = r ? 10 : 0) : (f.width = r ? 10 : 0, f.height = this.maxHeight), r && p) {
                            var g = this.lineWidths = [0],
                                m = this.legendItems.length ? l + i.padding : 0;
                            o.textAlign = "left", o.textBaseline = "top", o.font = c, e.each(this.legendItems, function(t, e) {
                                var n = i.boxWidth + l / 2 + o.measureText(t.text).width;
                                g[g.length - 1] + n + i.padding >= this.width && (m += l + i.padding, g[g.length] = this.left), h[e] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
                                    height: l
                                }, g[g.length - 1] += n + i.padding
                            }, this), f.height += m
                        }
                        this.width = f.width, this.height = f.height
                    },
                    afterFit: n,
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    draw: function() {
                        var n = this.options,
                            i = n.labels,
                            r = t.defaults.global,
                            o = r.elements.line,
                            a = this.width,
                            s = this.lineWidths;
                        if (n.display) {
                            var l = this.ctx,
                                d = {
                                    x: this.left + (a - s[0]) / 2,
                                    y: this.top + i.padding,
                                    line: 0
                                },
                                u = e.getValueOrDefault,
                                c = u(i.fontColor, r.defaultFontColor),
                                h = u(i.fontSize, r.defaultFontSize),
                                f = u(i.fontStyle, r.defaultFontStyle),
                                p = u(i.fontFamily, r.defaultFontFamily),
                                g = e.fontString(h, f, p);
                            if (this.isHorizontal()) {
                                l.textAlign = "left", l.textBaseline = "top", l.lineWidth = .5, l.strokeStyle = c, l.fillStyle = c, l.font = g;
                                var m = i.boxWidth,
                                    v = this.legendHitBoxes;
                                e.each(this.legendItems, function(t, e) {
                                    var n = l.measureText(t.text).width,
                                        c = m + h / 2 + n,
                                        f = d.x,
                                        p = d.y;
                                    f + c >= a && (p = d.y += h + i.padding, d.line++, f = d.x = this.left + (a - s[d.line]) / 2), l.save(), l.fillStyle = u(t.fillStyle, r.defaultColor), l.lineCap = u(t.lineCap, o.borderCapStyle), l.lineDashOffset = u(t.lineDashOffset, o.borderDashOffset), l.lineJoin = u(t.lineJoin, o.borderJoinStyle), l.lineWidth = u(t.lineWidth, o.borderWidth), l.strokeStyle = u(t.strokeStyle, r.defaultColor), l.setLineDash && l.setLineDash(u(t.lineDash, o.borderDash)), l.strokeRect(f, p, m, h), l.fillRect(f, p, m, h), l.restore(), v[e].left = f, v[e].top = p, l.fillText(t.text, m + h / 2 + f, p), t.hidden && (l.beginPath(), l.lineWidth = 2, l.moveTo(m + h / 2 + f, p + h / 2), l.lineTo(m + h / 2 + f + n, p + h / 2), l.stroke()), d.x += c + i.padding
                                }, this)
                            }
                        }
                    },
                    handleEvent: function(t) {
                        var n = e.getRelativePosition(t, this.chart.chart),
                            i = n.x,
                            r = n.y,
                            o = this.options;
                        if (i >= this.left && i <= this.right && r >= this.top && r <= this.bottom)
                            for (var a = this.legendHitBoxes, s = 0; s < a.length; ++s) {
                                var l = a[s];
                                if (i >= l.left && i <= l.left + l.width && r >= l.top && r <= l.top + l.height) {
                                    o.onClick && o.onClick.call(this, t, this.legendItems[s]);
                                    break
                                }
                            }
                    }
                })
            }
        }, {}],
        29: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.plugins = [], t.pluginService = {
                    register: function(e) {
                        var n = t.plugins; - 1 === n.indexOf(e) && n.push(e)
                    },
                    remove: function(e) {
                        var n = t.plugins,
                            i = n.indexOf(e); - 1 !== i && n.splice(i, 1)
                    },
                    notifyPlugins: function(n, i, r) {
                        e.each(t.plugins, function(t) {
                            t[n] && "function" == typeof t[n] && t[n].apply(r, i)
                        }, r)
                    }
                };
                var n = e.noop;
                t.PluginBase = t.Element.extend({
                    beforeInit: n,
                    afterInit: n,
                    beforeUpdate: n,
                    afterUpdate: n,
                    beforeDraw: n,
                    afterDraw: n,
                    destroy: n
                })
            }
        }, {}],
        30: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.scale = {
                    display: !0,
                    position: "left",
                    gridLines: {
                        display: !0,
                        color: "rgba(0, 0, 0, 0.1)",
                        lineWidth: 1,
                        drawBorder: !0,
                        drawOnChartArea: !0,
                        drawTicks: !0,
                        tickMarkLength: 10,
                        zeroLineWidth: 1,
                        zeroLineColor: "rgba(0,0,0,0.25)",
                        offsetGridLines: !1
                    },
                    scaleLabel: {
                        labelString: "",
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !1,
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        padding: 10,
                        reverse: !1,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 0,
                        labelOffset: 0,
                        callback: function(t) {
                            return "" + t
                        }
                    }
                }, t.Scale = t.Element.extend({
                    beforeUpdate: function() {
                        e.callCallback(this.options.beforeUpdate, [this])
                    },
                    update: function(t, n, i) {
                        return this.beforeUpdate(), this.maxWidth = t, this.maxHeight = n, this.margins = e.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, i), this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this.beforeBuildTicks(), this.buildTicks(), this.afterBuildTicks(), this.beforeTickToLabelConversion(), this.convertTicksToLabels(), this.afterTickToLabelConversion(), this.beforeCalculateTickRotation(), this.calculateTickRotation(), this.afterCalculateTickRotation(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
                    },
                    afterUpdate: function() {
                        e.callCallback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function() {
                        e.callCallback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function() {
                        this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
                    },
                    afterSetDimensions: function() {
                        e.callCallback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function() {
                        e.callCallback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: e.noop,
                    afterDataLimits: function() {
                        e.callCallback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function() {
                        e.callCallback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: e.noop,
                    afterBuildTicks: function() {
                        e.callCallback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function() {
                        e.callCallback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function() {
                        this.ticks = this.ticks.map(function(t, e, n) {
                            return this.options.ticks.userCallback ? this.options.ticks.userCallback(t, e, n) : this.options.ticks.callback(t, e, n)
                        }, this)
                    },
                    afterTickToLabelConversion: function() {
                        e.callCallback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function() {
                        e.callCallback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function() {
                        var n = this.ctx,
                            i = t.defaults.global,
                            r = this.options.ticks,
                            o = e.getValueOrDefault(r.fontSize, i.defaultFontSize),
                            a = e.getValueOrDefault(r.fontStyle, i.defaultFontStyle),
                            s = e.getValueOrDefault(r.fontFamily, i.defaultFontFamily),
                            l = e.fontString(o, a, s);
                        n.font = l;
                        var d, u = n.measureText(this.ticks[0]).width,
                            c = n.measureText(this.ticks[this.ticks.length - 1]).width;
                        if (this.labelRotation = r.minRotation || 0, this.paddingRight = 0, this.paddingLeft = 0, this.options.display && this.isHorizontal()) {
                            this.paddingRight = c / 2 + 3, this.paddingLeft = u / 2 + 3, this.longestTextCache || (this.longestTextCache = {});
                            for (var h, f, p = e.longestText(n, l, this.ticks, this.longestTextCache), g = p, m = this.getPixelForTick(1) - this.getPixelForTick(0) - 6; g > m && this.labelRotation < r.maxRotation;) {
                                if (h = Math.cos(e.toRadians(this.labelRotation)), f = Math.sin(e.toRadians(this.labelRotation)), d = h * u, d + o / 2 > this.yLabelWidth && (this.paddingLeft = d + o / 2), this.paddingRight = o / 2, f * p > this.maxHeight) {
                                    this.labelRotation--;
                                    break
                                }
                                this.labelRotation++, g = h * p
                            }
                        }
                        this.margins && (this.paddingLeft = Math.max(this.paddingLeft - this.margins.left, 0), this.paddingRight = Math.max(this.paddingRight - this.margins.right, 0))
                    },
                    afterCalculateTickRotation: function() {
                        e.callCallback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function() {
                        e.callCallback(this.options.beforeFit, [this])
                    },
                    fit: function() {
                        var n = this.minSize = {
                                width: 0,
                                height: 0
                            },
                            i = this.options,
                            r = t.defaults.global,
                            o = i.ticks,
                            a = i.scaleLabel,
                            s = i.display,
                            l = this.isHorizontal(),
                            d = e.getValueOrDefault(o.fontSize, r.defaultFontSize),
                            u = e.getValueOrDefault(o.fontStyle, r.defaultFontStyle),
                            c = e.getValueOrDefault(o.fontFamily, r.defaultFontFamily),
                            h = e.fontString(d, u, c),
                            f = e.getValueOrDefault(a.fontSize, r.defaultFontSize),
                            p = e.getValueOrDefault(a.fontStyle, r.defaultFontStyle),
                            g = e.getValueOrDefault(a.fontFamily, r.defaultFontFamily),
                            m = (e.fontString(f, p, g), i.gridLines.tickMarkLength);
                        if (l ? n.width = this.isFullWidth() ? this.maxWidth - this.margins.left - this.margins.right : this.maxWidth : n.width = s ? m : 0, l ? n.height = s ? m : 0 : n.height = this.maxHeight, a.display && s && (l ? n.height += 1.5 * f : n.width += 1.5 * f), o.display && s) {
                            this.longestTextCache || (this.longestTextCache = {});
                            var v = e.longestText(this.ctx, h, this.ticks, this.longestTextCache);
                            if (l) {
                                this.longestLabelWidth = v;
                                var y = Math.sin(e.toRadians(this.labelRotation)) * this.longestLabelWidth + 1.5 * d;
                                n.height = Math.min(this.maxHeight, n.height + y), this.ctx.font = h;
                                var b = this.ctx.measureText(this.ticks[0]).width,
                                    x = this.ctx.measureText(this.ticks[this.ticks.length - 1]).width,
                                    w = Math.cos(e.toRadians(this.labelRotation)),
                                    _ = Math.sin(e.toRadians(this.labelRotation));
                                this.paddingLeft = 0 !== this.labelRotation ? w * b + 3 : b / 2 + 3, this.paddingRight = 0 !== this.labelRotation ? _ * (d / 2) + 3 : x / 2 + 3
                            } else {
                                var k = this.maxWidth - n.width,
                                    S = o.mirror;
                                S ? v = 0 : v += this.options.ticks.padding, k > v ? n.width += v : n.width = this.maxWidth, this.paddingTop = d / 2, this.paddingBottom = d / 2
                            }
                        }
                        this.margins && (this.paddingLeft = Math.max(this.paddingLeft - this.margins.left, 0), this.paddingTop = Math.max(this.paddingTop - this.margins.top, 0), this.paddingRight = Math.max(this.paddingRight - this.margins.right, 0), this.paddingBottom = Math.max(this.paddingBottom - this.margins.bottom, 0)), this.width = n.width, this.height = n.height
                    },
                    afterFit: function() {
                        e.callCallback(this.options.afterFit, [this])
                    },
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function() {
                        return this.options.fullWidth
                    },
                    getRightValue: function t(e) {
                        return null === e || "undefined" == typeof e ? NaN : "number" == typeof e && isNaN(e) ? NaN : "object" == typeof e ? e instanceof Date || e.isValid ? e : t(this.isHorizontal() ? e.x : e.y) : e
                    },
                    getLabelForIndex: e.noop,
                    getPixelForValue: e.noop,
                    getValueForPixel: e.noop,
                    getPixelForTick: function(t, e) {
                        if (this.isHorizontal()) {
                            var n = this.width - (this.paddingLeft + this.paddingRight),
                                i = n / Math.max(this.ticks.length - (this.options.gridLines.offsetGridLines ? 0 : 1), 1),
                                r = i * t + this.paddingLeft;
                            e && (r += i / 2);
                            var o = this.left + Math.round(r);
                            return o += this.isFullWidth() ? this.margins.left : 0
                        }
                        var a = this.height - (this.paddingTop + this.paddingBottom);
                        return this.top + t * (a / (this.ticks.length - 1))
                    },
                    getPixelForDecimal: function(t) {
                        if (this.isHorizontal()) {
                            var e = this.width - (this.paddingLeft + this.paddingRight),
                                n = e * t + this.paddingLeft,
                                i = this.left + Math.round(n);
                            return i += this.isFullWidth() ? this.margins.left : 0
                        }
                        return this.top + t * this.height
                    },
                    getBasePixel: function() {
                        var t = this,
                            e = t.min,
                            n = t.max;
                        return t.getPixelForValue(t.beginAtZero ? 0 : 0 > e && 0 > n ? n : e > 0 && n > 0 ? e : 0)
                    },
                    draw: function(n) {
                        var i = this.options;
                        if (i.display) {
                            var r, o, a, s, l, d = this.ctx,
                                u = t.defaults.global,
                                c = i.ticks,
                                h = i.gridLines,
                                f = i.scaleLabel,
                                p = 0 !== this.labelRotation,
                                g = c.autoSkip;
                            c.maxTicksLimit && (l = c.maxTicksLimit);
                            var m = e.getValueOrDefault(c.fontColor, u.defaultFontColor),
                                v = e.getValueOrDefault(c.fontSize, u.defaultFontSize),
                                y = e.getValueOrDefault(c.fontStyle, u.defaultFontStyle),
                                b = e.getValueOrDefault(c.fontFamily, u.defaultFontFamily),
                                x = e.fontString(v, y, b),
                                w = h.tickMarkLength,
                                _ = e.getValueOrDefault(f.fontColor, u.defaultFontColor),
                                k = e.getValueOrDefault(f.fontSize, u.defaultFontSize),
                                S = e.getValueOrDefault(f.fontStyle, u.defaultFontStyle),
                                C = e.getValueOrDefault(f.fontFamily, u.defaultFontFamily),
                                D = e.fontString(k, S, C),
                                M = e.toRadians(this.labelRotation),
                                T = Math.cos(M),
                                O = (Math.sin(M), this.longestLabelWidth * T);
                            if (d.fillStyle = m, this.isHorizontal()) {
                                r = !0;
                                var A = "bottom" === i.position ? this.top : this.bottom - w,
                                    P = "bottom" === i.position ? this.top + w : this.bottom;
                                if (o = !1, p && (O /= 2), (O + c.autoSkipPadding) * this.ticks.length > this.width - (this.paddingLeft + this.paddingRight) && (o = 1 + Math.floor((O + c.autoSkipPadding) * this.ticks.length / (this.width - (this.paddingLeft + this.paddingRight)))), l && this.ticks.length > l)
                                    for (; !o || this.ticks.length / (o || 1) > l;) o || (o = 1), o += 1;
                                g || (o = !1), e.each(this.ticks, function(t, a) {
                                    var s = this.ticks.length === a + 1,
                                        l = o > 1 && a % o > 0 || a % o === 0 && a + o >= this.ticks.length;
                                    if ((!l || s) && void 0 !== t && null !== t) {
                                        var u = this.getPixelForTick(a),
                                            f = this.getPixelForTick(a, h.offsetGridLines);
                                        h.display && (a === ("undefined" != typeof this.zeroLineIndex ? this.zeroLineIndex : 0) ? (d.lineWidth = h.zeroLineWidth, d.strokeStyle = h.zeroLineColor, r = !0) : r && (d.lineWidth = h.lineWidth, d.strokeStyle = h.color, r = !1), u += e.aliasPixel(d.lineWidth), d.beginPath(), h.drawTicks && (d.moveTo(u, A), d.lineTo(u, P)), h.drawOnChartArea && (d.moveTo(u, n.top), d.lineTo(u, n.bottom)), d.stroke()), c.display && (d.save(), d.translate(f + c.labelOffset, p ? this.top + 12 : "top" === i.position ? this.bottom - w : this.top + w), d.rotate(-1 * M), d.font = x, d.textAlign = p ? "right" : "center", d.textBaseline = p ? "middle" : "top" === i.position ? "bottom" : "top", d.fillText(t, 0, 0), d.restore())
                                    }
                                }, this), f.display && (d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = _, d.font = D, a = this.left + (this.right - this.left) / 2, s = "bottom" === i.position ? this.bottom - k / 2 : this.top + k / 2, d.fillText(f.labelString, a, s))
                            } else {
                                r = !0;
                                var I = "right" === i.position ? this.left : this.right - 5,
                                    F = "right" === i.position ? this.left + 5 : this.right;
                                if (e.each(this.ticks, function(t, o) {
                                        if (void 0 !== t && null !== t) {
                                            var a = this.getPixelForTick(o);
                                            if (h.display && (o === ("undefined" != typeof this.zeroLineIndex ? this.zeroLineIndex : 0) ? (d.lineWidth = h.zeroLineWidth,
                                                    d.strokeStyle = h.zeroLineColor, r = !0) : r && (d.lineWidth = h.lineWidth, d.strokeStyle = h.color, r = !1), a += e.aliasPixel(d.lineWidth), d.beginPath(), h.drawTicks && (d.moveTo(I, a), d.lineTo(F, a)), h.drawOnChartArea && (d.moveTo(n.left, a), d.lineTo(n.right, a)), d.stroke()), c.display) {
                                                var s, l = this.getPixelForTick(o, h.offsetGridLines);
                                                d.save(), "left" === i.position ? c.mirror ? (s = this.right + c.padding, d.textAlign = "left") : (s = this.right - c.padding, d.textAlign = "right") : c.mirror ? (s = this.left - c.padding, d.textAlign = "right") : (s = this.left + c.padding, d.textAlign = "left"), d.translate(s, l + c.labelOffset), d.rotate(-1 * M), d.font = x, d.textBaseline = "middle", d.fillText(t, 0, 0), d.restore()
                                            }
                                        }
                                    }, this), f.display) {
                                    a = "left" === i.position ? this.left + k / 2 : this.right - k / 2, s = this.top + (this.bottom - this.top) / 2;
                                    var E = "left" === i.position ? -.5 * Math.PI : .5 * Math.PI;
                                    d.save(), d.translate(a, s), d.rotate(E), d.textAlign = "center", d.fillStyle = _, d.font = D, d.textBaseline = "middle", d.fillText(f.labelString, 0, 0), d.restore()
                                }
                            }
                            if (h.drawBorder) {
                                d.lineWidth = h.lineWidth, d.strokeStyle = h.color;
                                var L = this.left,
                                    R = this.right,
                                    $ = this.top,
                                    W = this.bottom,
                                    H = e.aliasPixel(d.lineWidth);
                                this.isHorizontal() ? ($ = W = "top" === i.position ? this.bottom : this.top, $ += H, W += H) : (L = R = "left" === i.position ? this.right : this.left, L += H, R += H), d.beginPath(), d.moveTo(L, $), d.lineTo(R, W), d.stroke()
                            }
                        }
                    }
                })
            }
        }, {}],
        31: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.scaleService = {
                    constructors: {},
                    defaults: {},
                    registerScaleType: function(t, n, i) {
                        this.constructors[t] = n, this.defaults[t] = e.clone(i)
                    },
                    getScaleConstructor: function(t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                    },
                    getScaleDefaults: function(n) {
                        return this.defaults.hasOwnProperty(n) ? e.scaleMerge(t.defaults.scale, this.defaults[n]) : {}
                    },
                    updateScaleDefaults: function(t, n) {
                        var i = this.defaults;
                        i.hasOwnProperty(t) && (i[t] = e.extend(i[t], n))
                    },
                    addScalesToLayout: function(n) {
                        e.each(n.scales, function(e) {
                            t.layoutService.addBox(n, e)
                        })
                    }
                }
            }
        }, {}],
        32: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.global.title = {
                    display: !1,
                    position: "top",
                    fullWidth: !0,
                    fontStyle: "bold",
                    padding: 10,
                    text: ""
                };
                var n = e.noop;
                t.Title = t.Element.extend({
                    initialize: function(n) {
                        e.extend(this, n), this.options = e.configMerge(t.defaults.global.title, n.options), this.legendHitBoxes = []
                    },
                    beforeUpdate: n,
                    update: function(t, e, n) {
                        return this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this.margins = n, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeBuildLabels(), this.buildLabels(), this.afterBuildLabels(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
                    },
                    afterUpdate: n,
                    beforeSetDimensions: n,
                    setDimensions: function() {
                        this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0, this.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: n,
                    beforeBuildLabels: n,
                    buildLabels: n,
                    afterBuildLabels: n,
                    beforeFit: n,
                    fit: function() {
                        var n = this,
                            i = (n.ctx, e.getValueOrDefault),
                            r = n.options,
                            o = t.defaults.global,
                            a = r.display,
                            s = i(r.fontSize, o.defaultFontSize),
                            l = n.minSize;
                        n.isHorizontal() ? (l.width = n.maxWidth, l.height = a ? s + 2 * r.padding : 0) : (l.width = a ? s + 2 * r.padding : 0, l.height = n.maxHeight), n.width = l.width, n.height = l.height
                    },
                    afterFit: n,
                    isHorizontal: function() {
                        var t = this.options.position;
                        return "top" === t || "bottom" === t
                    },
                    draw: function() {
                        var n = this,
                            i = n.ctx,
                            r = e.getValueOrDefault,
                            o = n.options,
                            a = t.defaults.global;
                        if (o.display) {
                            var s, l, d = r(o.fontSize, a.defaultFontSize),
                                u = r(o.fontStyle, a.defaultFontStyle),
                                c = r(o.fontFamily, a.defaultFontFamily),
                                h = e.fontString(d, u, c),
                                f = 0,
                                p = n.top,
                                g = n.left,
                                m = n.bottom,
                                v = n.right;
                            i.fillStyle = r(o.fontColor, a.defaultFontColor), i.font = h, n.isHorizontal() ? (s = g + (v - g) / 2, l = p + (m - p) / 2) : (s = "left" === o.position ? g + d / 2 : v - d / 2, l = p + (m - p) / 2, f = Math.PI * ("left" === o.position ? -.5 : .5)), i.save(), i.translate(s, l), i.rotate(f), i.textAlign = "center", i.textBaseline = "middle", i.fillText(o.text, 0, 0), i.restore()
                        }
                    }
                })
            }
        }, {}],
        33: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    return e && (n.isArray(e) ? t = t.concat(e) : t.push(e)), t
                }
                var n = t.helpers;
                t.defaults.global.tooltips = {
                    enabled: !0,
                    custom: null,
                    mode: "single",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    yAlign: "center",
                    xAlign: "center",
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    callbacks: {
                        beforeTitle: n.noop,
                        title: function(t, e) {
                            var n = "";
                            return t.length > 0 && (t[0].xLabel ? n = t[0].xLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                        },
                        afterTitle: n.noop,
                        beforeBody: n.noop,
                        beforeLabel: n.noop,
                        label: function(t, e) {
                            var n = e.datasets[t.datasetIndex].label || "";
                            return n + ": " + t.yLabel
                        },
                        afterLabel: n.noop,
                        afterBody: n.noop,
                        beforeFooter: n.noop,
                        footer: n.noop,
                        afterFooter: n.noop
                    }
                }, t.Tooltip = t.Element.extend({
                    initialize: function() {
                        var e = t.defaults.global,
                            i = this._options,
                            r = i.tooltips;
                        n.extend(this, {
                            _model: {
                                xPadding: r.xPadding,
                                yPadding: r.yPadding,
                                xAlign: r.yAlign,
                                yAlign: r.xAlign,
                                bodyColor: r.bodyColor,
                                _bodyFontFamily: n.getValueOrDefault(r.bodyFontFamily, e.defaultFontFamily),
                                _bodyFontStyle: n.getValueOrDefault(r.bodyFontStyle, e.defaultFontStyle),
                                _bodyAlign: r.bodyAlign,
                                bodyFontSize: n.getValueOrDefault(r.bodyFontSize, e.defaultFontSize),
                                bodySpacing: r.bodySpacing,
                                titleColor: r.titleColor,
                                _titleFontFamily: n.getValueOrDefault(r.titleFontFamily, e.defaultFontFamily),
                                _titleFontStyle: n.getValueOrDefault(r.titleFontStyle, e.defaultFontStyle),
                                titleFontSize: n.getValueOrDefault(r.titleFontSize, e.defaultFontSize),
                                _titleAlign: r.titleAlign,
                                titleSpacing: r.titleSpacing,
                                titleMarginBottom: r.titleMarginBottom,
                                footerColor: r.footerColor,
                                _footerFontFamily: n.getValueOrDefault(r.footerFontFamily, e.defaultFontFamily),
                                _footerFontStyle: n.getValueOrDefault(r.footerFontStyle, e.defaultFontStyle),
                                footerFontSize: n.getValueOrDefault(r.footerFontSize, e.defaultFontSize),
                                _footerAlign: r.footerAlign,
                                footerSpacing: r.footerSpacing,
                                footerMarginTop: r.footerMarginTop,
                                caretSize: r.caretSize,
                                cornerRadius: r.cornerRadius,
                                backgroundColor: r.backgroundColor,
                                opacity: 0,
                                legendColorBackground: r.multiKeyBackground
                            }
                        })
                    },
                    getTitle: function() {
                        var t = this._options.tooltips.callbacks.beforeTitle.apply(this, arguments),
                            n = this._options.tooltips.callbacks.title.apply(this, arguments),
                            i = this._options.tooltips.callbacks.afterTitle.apply(this, arguments),
                            r = [];
                        return r = e(r, t), r = e(r, n), r = e(r, i)
                    },
                    getBeforeBody: function() {
                        var t = this._options.tooltips.callbacks.beforeBody.apply(this, arguments);
                        return n.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getBody: function(t, e) {
                        var i = [];
                        return n.each(t, function(t) {
                            n.pushAllIfDefined(this._options.tooltips.callbacks.beforeLabel.call(this, t, e), i), n.pushAllIfDefined(this._options.tooltips.callbacks.label.call(this, t, e), i), n.pushAllIfDefined(this._options.tooltips.callbacks.afterLabel.call(this, t, e), i)
                        }, this), i
                    },
                    getAfterBody: function() {
                        var t = this._options.tooltips.callbacks.afterBody.apply(this, arguments);
                        return n.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getFooter: function() {
                        var t = this._options.tooltips.callbacks.beforeFooter.apply(this, arguments),
                            n = this._options.tooltips.callbacks.footer.apply(this, arguments),
                            i = this._options.tooltips.callbacks.afterFooter.apply(this, arguments),
                            r = [];
                        return r = e(r, t), r = e(r, n), r = e(r, i)
                    },
                    getAveragePosition: function(t) {
                        if (!t.length) return !1;
                        var e = [],
                            i = [];
                        n.each(t, function(t) {
                            if (t && t.hasValue()) {
                                var n = t.tooltipPosition();
                                e.push(n.x), i.push(n.y)
                            }
                        });
                        for (var r = 0, o = 0, a = 0; a < e.length; a++) r += e[a], o += i[a];
                        return {
                            x: Math.round(r / e.length),
                            y: Math.round(o / e.length)
                        }
                    },
                    update: function(t) {
                        if (this._active.length) {
                            this._model.opacity = 1;
                            var e, i = this._active[0],
                                r = [],
                                o = [];
                            if ("single" === this._options.tooltips.mode) {
                                var a = i._yScale || i._scale;
                                o.push({
                                    xLabel: i._xScale ? i._xScale.getLabelForIndex(i._index, i._datasetIndex) : "",
                                    yLabel: a ? a.getLabelForIndex(i._index, i._datasetIndex) : "",
                                    index: i._index,
                                    datasetIndex: i._datasetIndex
                                }), e = this.getAveragePosition(this._active)
                            } else n.each(this._data.datasets, function(t, e) {
                                if (this._chartInstance.isDatasetVisible(e)) {
                                    var n = this._chartInstance.getDatasetMeta(e),
                                        r = n.data[i._index];
                                    if (r) {
                                        var a = i._yScale || i._scale;
                                        o.push({
                                            xLabel: r._xScale ? r._xScale.getLabelForIndex(r._index, r._datasetIndex) : "",
                                            yLabel: a ? a.getLabelForIndex(r._index, r._datasetIndex) : "",
                                            index: i._index,
                                            datasetIndex: e
                                        })
                                    }
                                }
                            }, this), n.each(this._active, function(t) {
                                t && r.push({
                                    borderColor: t._view.borderColor,
                                    backgroundColor: t._view.backgroundColor
                                })
                            }, null), e = this.getAveragePosition(this._active);
                            n.extend(this._model, {
                                title: this.getTitle(o, this._data),
                                beforeBody: this.getBeforeBody(o, this._data),
                                body: this.getBody(o, this._data),
                                afterBody: this.getAfterBody(o, this._data),
                                footer: this.getFooter(o, this._data)
                            }), n.extend(this._model, {
                                x: Math.round(e.x),
                                y: Math.round(e.y),
                                caretPadding: n.getValueOrDefault(e.padding, 2),
                                labelColors: r
                            });
                            var s = this.getTooltipSize(this._model);
                            this.determineAlignment(s), n.extend(this._model, this.getBackgroundPoint(this._model, s))
                        } else this._model.opacity = 0;
                        return t && this._options.tooltips.custom && this._options.tooltips.custom.call(this, this._model), this
                    },
                    getTooltipSize: function(t) {
                        var e = this._chart.ctx,
                            i = {
                                height: 2 * t.yPadding,
                                width: 0
                            },
                            r = t.body.length + t.beforeBody.length + t.afterBody.length;
                        return i.height += t.title.length * t.titleFontSize, i.height += (t.title.length - 1) * t.titleSpacing, i.height += t.title.length ? t.titleMarginBottom : 0, i.height += r * t.bodyFontSize, i.height += r ? (r - 1) * t.bodySpacing : 0, i.height += t.footer.length ? t.footerMarginTop : 0, i.height += t.footer.length * t.footerFontSize, i.height += t.footer.length ? (t.footer.length - 1) * t.footerSpacing : 0, e.font = n.fontString(t.titleFontSize, t._titleFontStyle, t._titleFontFamily), n.each(t.title, function(t) {
                            i.width = Math.max(i.width, e.measureText(t).width)
                        }), e.font = n.fontString(t.bodyFontSize, t._bodyFontStyle, t._bodyFontFamily), n.each(t.beforeBody.concat(t.afterBody), function(t) {
                            i.width = Math.max(i.width, e.measureText(t).width)
                        }), n.each(t.body, function(n) {
                            i.width = Math.max(i.width, e.measureText(n).width + ("single" !== this._options.tooltips.mode ? t.bodyFontSize + 2 : 0))
                        }, this), e.font = n.fontString(t.footerFontSize, t._footerFontStyle, t._footerFontFamily), n.each(t.footer, function(t) {
                            i.width = Math.max(i.width, e.measureText(t).width)
                        }), i.width += 2 * t.xPadding, i
                    },
                    determineAlignment: function(t) {
                        this._model.y < t.height ? this._model.yAlign = "top" : this._model.y > this._chart.height - t.height && (this._model.yAlign = "bottom");
                        var e, n, i, r, o, a = this,
                            s = (this._chartInstance.chartArea.left + this._chartInstance.chartArea.right) / 2,
                            l = (this._chartInstance.chartArea.top + this._chartInstance.chartArea.bottom) / 2;
                        "center" === this._model.yAlign ? (e = function(t) {
                            return s >= t
                        }, n = function(t) {
                            return t > s
                        }) : (e = function(e) {
                            return e <= t.width / 2
                        }, n = function(e) {
                            return e >= a._chart.width - t.width / 2
                        }), i = function(e) {
                            return e + t.width > a._chart.width
                        }, r = function(e) {
                            return e - t.width < 0
                        }, o = function(t) {
                            return l >= t ? "top" : "bottom"
                        }, e(this._model.x) ? (this._model.xAlign = "left", i(this._model.x) && (this._model.xAlign = "center", this._model.yAlign = o(this._model.y))) : n(this._model.x) && (this._model.xAlign = "right", r(this._model.x) && (this._model.xAlign = "center", this._model.yAlign = o(this._model.y)))
                    },
                    getBackgroundPoint: function(t, e) {
                        var n = {
                            x: t.x,
                            y: t.y
                        };
                        return "right" === t.xAlign ? n.x -= e.width : "center" === t.xAlign && (n.x -= e.width / 2), "top" === t.yAlign ? n.y += t.caretPadding + t.caretSize : "bottom" === t.yAlign ? n.y -= e.height + t.caretPadding + t.caretSize : n.y -= e.height / 2, "center" === t.yAlign ? "left" === t.xAlign ? n.x += t.caretPadding + t.caretSize : "right" === t.xAlign && (n.x -= t.caretPadding + t.caretSize) : "left" === t.xAlign ? n.x -= t.cornerRadius + t.caretPadding : "right" === t.xAlign && (n.x += t.cornerRadius + t.caretPadding), n
                    },
                    drawCaret: function(t, e, i) {
                        var r, o, a, s, l, d, u = this._view,
                            c = this._chart.ctx;
                        "center" === u.yAlign ? ("left" === u.xAlign ? (r = t.x, o = r - u.caretSize, a = r) : (r = t.x + e.width, o = r + u.caretSize, a = r), l = t.y + e.height / 2, s = l - u.caretSize, d = l + u.caretSize) : ("left" === u.xAlign ? (r = t.x + u.cornerRadius, o = r + u.caretSize, a = o + u.caretSize) : "right" === u.xAlign ? (r = t.x + e.width - u.cornerRadius, o = r - u.caretSize, a = o - u.caretSize) : (o = t.x + e.width / 2, r = o - u.caretSize, a = o + u.caretSize), "top" === u.yAlign ? (s = t.y, l = s - u.caretSize, d = s) : (s = t.y + e.height, l = s + u.caretSize, d = s));
                        var h = n.color(u.backgroundColor);
                        c.fillStyle = h.alpha(i * h.alpha()).rgbString(), c.beginPath(), c.moveTo(r, s), c.lineTo(o, l), c.lineTo(a, d), c.closePath(), c.fill()
                    },
                    drawTitle: function(t, e, i, r) {
                        if (e.title.length) {
                            i.textAlign = e._titleAlign, i.textBaseline = "top";
                            var o = n.color(e.titleColor);
                            i.fillStyle = o.alpha(r * o.alpha()).rgbString(), i.font = n.fontString(e.titleFontSize, e._titleFontStyle, e._titleFontFamily), n.each(e.title, function(n, r) {
                                i.fillText(n, t.x, t.y), t.y += e.titleFontSize + e.titleSpacing, r + 1 === e.title.length && (t.y += e.titleMarginBottom - e.titleSpacing)
                            })
                        }
                    },
                    drawBody: function(t, e, i, r) {
                        i.textAlign = e._bodyAlign, i.textBaseline = "top";
                        var o = n.color(e.bodyColor);
                        i.fillStyle = o.alpha(r * o.alpha()).rgbString(), i.font = n.fontString(e.bodyFontSize, e._bodyFontStyle, e._bodyFontFamily), n.each(e.beforeBody, function(n) {
                            i.fillText(n, t.x, t.y), t.y += e.bodyFontSize + e.bodySpacing
                        }), n.each(e.body, function(o, a) {
                            "single" !== this._options.tooltips.mode && (i.fillStyle = n.color(e.legendColorBackground).alpha(r).rgbaString(), i.fillRect(t.x, t.y, e.bodyFontSize, e.bodyFontSize), i.strokeStyle = n.color(e.labelColors[a].borderColor).alpha(r).rgbaString(), i.strokeRect(t.x, t.y, e.bodyFontSize, e.bodyFontSize), i.fillStyle = n.color(e.labelColors[a].backgroundColor).alpha(r).rgbaString(), i.fillRect(t.x + 1, t.y + 1, e.bodyFontSize - 2, e.bodyFontSize - 2), i.fillStyle = n.color(e.bodyColor).alpha(r).rgbaString()), i.fillText(o, t.x + ("single" !== this._options.tooltips.mode ? e.bodyFontSize + 2 : 0), t.y), t.y += e.bodyFontSize + e.bodySpacing
                        }, this), n.each(e.afterBody, function(n) {
                            i.fillText(n, t.x, t.y), t.y += e.bodyFontSize
                        }), t.y -= e.bodySpacing
                    },
                    drawFooter: function(t, e, i, r) {
                        if (e.footer.length) {
                            t.y += e.footerMarginTop, i.textAlign = e._footerAlign, i.textBaseline = "top";
                            var o = n.color(e.footerColor);
                            i.fillStyle = o.alpha(r * o.alpha()).rgbString(), i.font = n.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), n.each(e.footer, function(n) {
                                i.fillText(n, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing
                            })
                        }
                    },
                    draw: function() {
                        var t = this._chart.ctx,
                            e = this._view;
                        if (0 !== e.opacity) {
                            var i = e.caretPadding,
                                r = this.getTooltipSize(e),
                                o = {
                                    x: e.x,
                                    y: e.y
                                },
                                a = Math.abs(e.opacity < .001) ? 0 : e.opacity;
                            if (this._options.tooltips.enabled) {
                                var s = n.color(e.backgroundColor);
                                t.fillStyle = s.alpha(a * s.alpha()).rgbString(), n.drawRoundedRectangle(t, o.x, o.y, r.width, r.height, e.cornerRadius), t.fill(), this.drawCaret(o, r, a, i), o.x += e.xPadding, o.y += e.yPadding, this.drawTitle(o, e, t, a), this.drawBody(o, e, t, a), this.drawFooter(o, e, t, a)
                            }
                        }
                    }
                })
            }
        }, {}],
        34: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    n = t.defaults.global;
                n.elements.arc = {
                    backgroundColor: n.defaultColor,
                    borderColor: "#fff",
                    borderWidth: 2
                }, t.elements.Arc = t.Element.extend({
                    inLabelRange: function(t) {
                        var e = this._view;
                        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                    },
                    inRange: function(t, n) {
                        var i = this._view;
                        if (i) {
                            for (var r = e.getAngleFromPoint(i, {
                                    x: t,
                                    y: n
                                }), o = r.angle, a = r.distance, s = i.startAngle, l = i.endAngle; s > l;) l += 2 * Math.PI;
                            for (; o > l;) o -= 2 * Math.PI;
                            for (; s > o;) o += 2 * Math.PI;
                            var d = o >= s && l >= o,
                                u = a >= i.innerRadius && a <= i.outerRadius;
                            return d && u
                        }
                        return !1
                    },
                    tooltipPosition: function() {
                        var t = this._view,
                            e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                            n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                        return {
                            x: t.x + Math.cos(e) * n,
                            y: t.y + Math.sin(e) * n
                        }
                    },
                    draw: function() {
                        var t = this._chart.ctx,
                            e = this._view,
                            n = e.startAngle,
                            i = e.endAngle;
                        t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                    }
                })
            }
        }, {}],
        35: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    n = t.defaults.global;
                t.defaults.global.elements.line = {
                    tension: .4,
                    backgroundColor: n.defaultColor,
                    borderWidth: 3,
                    borderColor: n.defaultColor,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    fill: !0
                }, t.elements.Line = t.Element.extend({
                    lineToNextPoint: function(t, e, n, i, r) {
                        var o = this._chart.ctx;
                        e._view.skip ? i.call(this, t, e, n) : t._view.skip ? r.call(this, t, e, n) : 0 === e._view.tension ? o.lineTo(e._view.x, e._view.y) : o.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, e._view.controlPointPreviousX, e._view.controlPointPreviousY, e._view.x, e._view.y)
                    },
                    draw: function() {
                        function t(t) {
                            a._view.skip || s._view.skip ? t && o.lineTo(i._view.scaleZero.x, i._view.scaleZero.y) : o.bezierCurveTo(s._view.controlPointNextX, s._view.controlPointNextY, a._view.controlPointPreviousX, a._view.controlPointPreviousY, a._view.x, a._view.y)
                        }
                        var i = this,
                            r = this._view,
                            o = this._chart.ctx,
                            a = this._children[0],
                            s = this._children[this._children.length - 1];
                        o.save(), this._children.length > 0 && r.fill && (o.beginPath(), e.each(this._children, function(t, n) {
                            var i = e.previousItem(this._children, n),
                                a = e.nextItem(this._children, n);
                            0 === n ? (this._loop ? o.moveTo(r.scaleZero.x, r.scaleZero.y) : o.moveTo(t._view.x, r.scaleZero), t._view.skip ? this._loop || o.moveTo(a._view.x, this._view.scaleZero) : o.lineTo(t._view.x, t._view.y)) : this.lineToNextPoint(i, t, a, function(t, e, n) {
                                this._loop ? o.lineTo(this._view.scaleZero.x, this._view.scaleZero.y) : (o.lineTo(t._view.x, this._view.scaleZero), o.moveTo(n._view.x, this._view.scaleZero))
                            }, function(t, e) {
                                o.lineTo(e._view.x, e._view.y)
                            })
                        }, this), this._loop ? t(!0) : (o.lineTo(this._children[this._children.length - 1]._view.x, r.scaleZero), o.lineTo(this._children[0]._view.x, r.scaleZero)), o.fillStyle = r.backgroundColor || n.defaultColor, o.closePath(), o.fill());
                        var l = n.elements.line;
                        o.lineCap = r.borderCapStyle || l.borderCapStyle, o.setLineDash && o.setLineDash(r.borderDash || l.borderDash), o.lineDashOffset = r.borderDashOffset || l.borderDashOffset, o.lineJoin = r.borderJoinStyle || l.borderJoinStyle, o.lineWidth = r.borderWidth || l.borderWidth, o.strokeStyle = r.borderColor || n.defaultColor, o.beginPath(), e.each(this._children, function(t, n) {
                            var i = e.previousItem(this._children, n),
                                r = e.nextItem(this._children, n);
                            0 === n ? o.moveTo(t._view.x, t._view.y) : this.lineToNextPoint(i, t, r, function(t, e, n) {
                                o.moveTo(n._view.x, n._view.y)
                            }, function(t, e) {
                                o.moveTo(e._view.x, e._view.y)
                            })
                        }, this), this._loop && this._children.length > 0 && t(), o.stroke(), o.restore()
                    }
                })
            }
        }, {}],
        36: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    n = t.defaults.global,
                    i = n.defaultColor;
                n.elements.point = {
                    radius: 3,
                    pointStyle: "circle",
                    backgroundColor: i,
                    borderWidth: 1,
                    borderColor: i,
                    hitRadius: 1,
                    hoverRadius: 4,
                    hoverBorderWidth: 1
                }, t.elements.Point = t.Element.extend({
                    inRange: function(t, e) {
                        var n = this._view;
                        return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                    },
                    inLabelRange: function(t) {
                        var e = this._view;
                        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
                    },
                    tooltipPosition: function() {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y,
                            padding: t.radius + t.borderWidth
                        }
                    },
                    draw: function() {
                        var t, r, o, a, s, l, d = this._view,
                            u = this._chart.ctx,
                            c = d.pointStyle,
                            h = d.radius,
                            f = d.x,
                            p = d.y;
                        if (!d.skip) {
                            if ("object" == typeof c && (t = c.toString(), "[object HTMLImageElement]" === t || "[object HTMLCanvasElement]" === t)) return void u.drawImage(c, f - c.width / 2, p - c.height / 2);
                            if (!(isNaN(h) || 0 >= h)) {
                                switch (u.strokeStyle = d.borderColor || i, u.lineWidth = e.getValueOrDefault(d.borderWidth, n.elements.point.borderWidth), u.fillStyle = d.backgroundColor || i, c) {
                                    default: u.beginPath(),
                                    u.arc(f, p, h, 0, 2 * Math.PI),
                                    u.closePath(),
                                    u.fill();
                                    break;
                                    case "triangle":
                                            u.beginPath(),
                                        r = 3 * h / Math.sqrt(3),
                                        s = r * Math.sqrt(3) / 2,
                                        u.moveTo(f - r / 2, p + s / 3),
                                        u.lineTo(f + r / 2, p + s / 3),
                                        u.lineTo(f, p - 2 * s / 3),
                                        u.closePath(),
                                        u.fill();
                                        break;
                                    case "rect":
                                            l = 1 / Math.SQRT2 * h,
                                        u.fillRect(f - l, p - l, 2 * l, 2 * l),
                                        u.strokeRect(f - l, p - l, 2 * l, 2 * l);
                                        break;
                                    case "rectRot":
                                            u.translate(f, p),
                                        u.rotate(Math.PI / 4),
                                        l = 1 / Math.SQRT2 * h,
                                        u.fillRect(-l, -l, 2 * l, 2 * l),
                                        u.strokeRect(-l, -l, 2 * l, 2 * l),
                                        u.setTransform(1, 0, 0, 1, 0, 0);
                                        break;
                                    case "cross":
                                            u.beginPath(),
                                        u.moveTo(f, p + h),
                                        u.lineTo(f, p - h),
                                        u.moveTo(f - h, p),
                                        u.lineTo(f + h, p),
                                        u.closePath();
                                        break;
                                    case "crossRot":
                                            u.beginPath(),
                                        o = Math.cos(Math.PI / 4) * h,
                                        a = Math.sin(Math.PI / 4) * h,
                                        u.moveTo(f - o, p - a),
                                        u.lineTo(f + o, p + a),
                                        u.moveTo(f - o, p + a),
                                        u.lineTo(f + o, p - a),
                                        u.closePath();
                                        break;
                                    case "star":
                                            u.beginPath(),
                                        u.moveTo(f, p + h),
                                        u.lineTo(f, p - h),
                                        u.moveTo(f - h, p),
                                        u.lineTo(f + h, p),
                                        o = Math.cos(Math.PI / 4) * h,
                                        a = Math.sin(Math.PI / 4) * h,
                                        u.moveTo(f - o, p - a),
                                        u.lineTo(f + o, p + a),
                                        u.moveTo(f - o, p + a),
                                        u.lineTo(f + o, p - a),
                                        u.closePath();
                                        break;
                                    case "line":
                                            u.beginPath(),
                                        u.moveTo(f - h, p),
                                        u.lineTo(f + h, p),
                                        u.closePath();
                                        break;
                                    case "dash":
                                            u.beginPath(),
                                        u.moveTo(f, p),
                                        u.lineTo(f + h, p),
                                        u.closePath()
                                }
                                u.stroke()
                            }
                        }
                    }
                })
            }
        }, {}],
        37: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = (t.helpers, t.defaults.global);
                e.elements.rectangle = {
                    backgroundColor: e.defaultColor,
                    borderWidth: 0,
                    borderColor: e.defaultColor,
                    borderSkipped: "bottom"
                }, t.elements.Rectangle = t.Element.extend({
                    draw: function() {
                        function t(t) {
                            return l[(u + t) % 4]
                        }
                        var e = this._chart.ctx,
                            n = this._view,
                            i = n.width / 2,
                            r = n.x - i,
                            o = n.x + i,
                            a = n.base - (n.base - n.y),
                            s = n.borderWidth / 2;
                        n.borderWidth && (r += s, o -= s, a += s), e.beginPath(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth;
                        var l = [
                                [r, n.base],
                                [r, a],
                                [o, a],
                                [o, n.base]
                            ],
                            d = ["bottom", "left", "top", "right"],
                            u = d.indexOf(n.borderSkipped, 0); - 1 === u && (u = 0), e.moveTo.apply(e, t(0));
                        for (var c = 1; 4 > c; c++) e.lineTo.apply(e, t(c));
                        e.fill(), n.borderWidth && e.stroke()
                    },
                    height: function() {
                        var t = this._view;
                        return t.base - t.y
                    },
                    inRange: function(t, e) {
                        var n = this._view;
                        return !!n && (n.y < n.base ? t >= n.x - n.width / 2 && t <= n.x + n.width / 2 && e >= n.y && e <= n.base : t >= n.x - n.width / 2 && t <= n.x + n.width / 2 && e >= n.base && e <= n.y)
                    },
                    inLabelRange: function(t) {
                        var e = this._view;
                        return !!e && (t >= e.x - e.width / 2 && t <= e.x + e.width / 2)
                    },
                    tooltipPosition: function() {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    }
                })
            }
        }, {}],
        38: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    n = {
                        position: "bottom"
                    },
                    i = t.Scale.extend({
                        determineDataLimits: function() {
                            this.minIndex = 0, this.maxIndex = this.chart.data.labels.length - 1;
                            var t;
                            void 0 !== this.options.ticks.min && (t = e.indexOf(this.chart.data.labels, this.options.ticks.min), this.minIndex = -1 !== t ? t : this.minIndex), void 0 !== this.options.ticks.max && (t = e.indexOf(this.chart.data.labels, this.options.ticks.max), this.maxIndex = -1 !== t ? t : this.maxIndex), this.min = this.chart.data.labels[this.minIndex], this.max = this.chart.data.labels[this.maxIndex]
                        },
                        buildTicks: function() {
                            this.ticks = 0 === this.minIndex && this.maxIndex === this.chart.data.labels.length - 1 ? this.chart.data.labels : this.chart.data.labels.slice(this.minIndex, this.maxIndex + 1)
                        },
                        getLabelForIndex: function(t) {
                            return this.ticks[t]
                        },
                        getPixelForValue: function(t, e, n, i) {
                            var r = Math.max(this.maxIndex + 1 - this.minIndex - (this.options.gridLines.offsetGridLines ? 0 : 1), 1);
                            if (this.isHorizontal()) {
                                var o = this.width - (this.paddingLeft + this.paddingRight),
                                    a = o / r,
                                    s = a * (e - this.minIndex) + this.paddingLeft;
                                return this.options.gridLines.offsetGridLines && i && (s += a / 2), this.left + Math.round(s)
                            }
                            var l = this.height - (this.paddingTop + this.paddingBottom),
                                d = l / r,
                                u = d * (e - this.minIndex) + this.paddingTop;
                            return this.options.gridLines.offsetGridLines && i && (u += d / 2), this.top + Math.round(u)
                        },
                        getPixelForTick: function(t, e) {
                            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e)
                        },
                        getValueForPixel: function(t) {
                            var e, n = Math.max(this.ticks.length - (this.options.gridLines.offsetGridLines ? 0 : 1), 1),
                                i = this.isHorizontal(),
                                r = i ? this.width - (this.paddingLeft + this.paddingRight) : this.height - (this.paddingTop + this.paddingBottom),
                                o = r / n;
                            return this.options.gridLines.offsetGridLines && (t -= o / 2), t -= i ? this.paddingLeft : this.paddingTop, e = 0 >= t ? 0 : Math.round(t / o)
                        }
                    });
                t.scaleService.registerScaleType("category", i, n)
            }
        }, {}],
        39: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    n = {
                        position: "left",
                        ticks: {
                            callback: function(t, n, i) {
                                var r = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                                Math.abs(r) > 1 && t !== Math.floor(t) && (r = t - Math.floor(t));
                                var o = e.log10(Math.abs(r)),
                                    a = "";
                                if (0 !== t) {
                                    var s = -1 * Math.floor(o);
                                    s = Math.max(Math.min(s, 20), 0), a = t.toFixed(s)
                                } else a = "0";
                                return a
                            }
                        }
                    },
                    i = t.Scale.extend({
                        determineDataLimits: function() {
                            function t(t) {
                                return l ? t.xAxisID === n.id : t.yAxisID === n.id
                            }
                            var n = this,
                                i = n.options,
                                r = i.ticks,
                                o = n.chart,
                                a = o.data,
                                s = a.datasets,
                                l = n.isHorizontal();
                            if (n.min = null, n.max = null, i.stacked) {
                                var d = {},
                                    u = !1,
                                    c = !1;
                                e.each(s, function(r, a) {
                                    var s = o.getDatasetMeta(a);
                                    void 0 === d[s.type] && (d[s.type] = {
                                        positiveValues: [],
                                        negativeValues: []
                                    });
                                    var l = d[s.type].positiveValues,
                                        h = d[s.type].negativeValues;
                                    o.isDatasetVisible(a) && t(s) && e.each(r.data, function(t, e) {
                                        var r = +n.getRightValue(t);
                                        isNaN(r) || s.data[e].hidden || (l[e] = l[e] || 0, h[e] = h[e] || 0, i.relativePoints ? l[e] = 100 : 0 > r ? (c = !0, h[e] += r) : (u = !0, l[e] += r))
                                    })
                                }), e.each(d, function(t) {
                                    var i = t.positiveValues.concat(t.negativeValues),
                                        r = e.min(i),
                                        o = e.max(i);
                                    n.min = null === n.min ? r : Math.min(n.min, r), n.max = null === n.max ? o : Math.max(n.max, o)
                                })
                            } else e.each(s, function(i, r) {
                                var a = o.getDatasetMeta(r);
                                o.isDatasetVisible(r) && t(a) && e.each(i.data, function(t, e) {
                                    var i = +n.getRightValue(t);
                                    isNaN(i) || a.data[e].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i))
                                })
                            });
                            if (r.beginAtZero) {
                                var h = e.sign(n.min),
                                    f = e.sign(n.max);
                                0 > h && 0 > f ? n.max = 0 : h > 0 && f > 0 && (n.min = 0)
                            }
                            void 0 !== r.min ? n.min = r.min : void 0 !== r.suggestedMin && (n.min = Math.min(n.min, r.suggestedMin)), void 0 !== r.max ? n.max = r.max : void 0 !== r.suggestedMax && (n.max = Math.max(n.max, r.suggestedMax)), n.min === n.max && (n.max++, r.beginAtZero || n.min--)
                        },
                        buildTicks: function() {
                            var n, i = this,
                                r = i.options,
                                o = r.ticks,
                                a = e.getValueOrDefault,
                                s = i.isHorizontal(),
                                l = i.ticks = [];
                            if (s) n = Math.min(o.maxTicksLimit ? o.maxTicksLimit : 11, Math.ceil(i.width / 50));
                            else {
                                var d = a(o.fontSize, t.defaults.global.defaultFontSize);
                                n = Math.min(o.maxTicksLimit ? o.maxTicksLimit : 11, Math.ceil(i.height / (2 * d)))
                            }
                            n = Math.max(2, n);
                            var u, c = o.fixedStepSize && o.fixedStepSize > 0 || o.stepSize && o.stepSize > 0;
                            if (c) u = a(o.fixedStepSize, o.stepSize);
                            else {
                                var h = e.niceNum(i.max - i.min, !1);
                                u = e.niceNum(h / (n - 1), !0)
                            }
                            var f = Math.floor(i.min / u) * u,
                                p = Math.ceil(i.max / u) * u,
                                g = (p - f) / u;
                            g = e.almostEquals(g, Math.round(g), u / 1e3) ? Math.round(g) : Math.ceil(g), l.push(void 0 !== o.min ? o.min : f);
                            for (var m = 1; g > m; ++m) l.push(f + m * u);
                            l.push(void 0 !== o.max ? o.max : p), s || l.reverse(), i.max = e.max(l), i.min = e.min(l), o.reverse ? (l.reverse(), i.start = i.max, i.end = i.min) : (i.start = i.min, i.end = i.max)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        convertTicksToLabels: function() {
                            var e = this;
                            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
                        },
                        getPixelForValue: function(t) {
                            var e, n, i = this,
                                r = i.paddingLeft,
                                o = i.paddingBottom,
                                a = i.start,
                                s = +i.getRightValue(t),
                                l = i.end - a;
                            return i.isHorizontal() ? (n = i.width - (r + i.paddingRight), e = i.left + n / l * (s - a), Math.round(e + r)) : (n = i.height - (i.paddingTop + o), e = i.bottom - o - n / l * (s - a), Math.round(e))
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                n = e.isHorizontal(),
                                i = e.paddingLeft,
                                r = e.paddingBottom,
                                o = n ? e.width - (i + e.paddingRight) : e.height - (e.paddingTop + r),
                                a = (n ? t - e.left - i : e.bottom - r - t) / o;
                            return e.start + (e.end - e.start) * a
                        },
                        getPixelForTick: function(t, e) {
                            return this.getPixelForValue(this.ticksAsNumbers[t], null, null, e)
                        }
                    });
                t.scaleService.registerScaleType("linear", i, n)
            }
        }, {}],
        40: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    n = {
                        position: "left",
                        ticks: {
                            callback: function(t, n, i) {
                                var r = t / Math.pow(10, Math.floor(e.log10(t)));
                                return 1 === r || 2 === r || 5 === r || 0 === n || n === i.length - 1 ? t.toExponential() : ""
                            }
                        }
                    },
                    i = t.Scale.extend({
                        determineDataLimits: function() {
                            function t(t) {
                                return d ? t.xAxisID === n.id : t.yAxisID === n.id
                            }
                            var n = this,
                                i = n.options,
                                r = i.ticks,
                                o = n.chart,
                                a = o.data,
                                s = a.datasets,
                                l = e.getValueOrDefault,
                                d = n.isHorizontal();
                            if (n.min = null, n.max = null, i.stacked) {
                                var u = {};
                                e.each(s, function(r, a) {
                                    var s = o.getDatasetMeta(a);
                                    o.isDatasetVisible(a) && t(s) && (void 0 === u[s.type] && (u[s.type] = []), e.each(r.data, function(t, e) {
                                        var r = u[s.type],
                                            o = +n.getRightValue(t);
                                        isNaN(o) || s.data[e].hidden || (r[e] = r[e] || 0, i.relativePoints ? r[e] = 100 : r[e] += o)
                                    }))
                                }), e.each(u, function(t) {
                                    var i = e.min(t),
                                        r = e.max(t);
                                    n.min = null === n.min ? i : Math.min(n.min, i), n.max = null === n.max ? r : Math.max(n.max, r)
                                })
                            } else e.each(s, function(i, r) {
                                var a = o.getDatasetMeta(r);
                                o.isDatasetVisible(r) && t(a) && e.each(i.data, function(t, e) {
                                    var i = +n.getRightValue(t);
                                    isNaN(i) || a.data[e].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i))
                                })
                            });
                            n.min = l(r.min, n.min), n.max = l(r.max, n.max), n.min === n.max && (0 !== n.min && null !== n.min ? (n.min = Math.pow(10, Math.floor(e.log10(n.min)) - 1), n.max = Math.pow(10, Math.floor(e.log10(n.max)) + 1)) : (n.min = 1, n.max = 10))
                        },
                        buildTicks: function() {
                            for (var t = this, n = t.options, i = n.ticks, r = e.getValueOrDefault, o = t.ticks = [], a = r(i.min, Math.pow(10, Math.floor(e.log10(t.min)))); a < t.max;) {
                                o.push(a);
                                var s = Math.floor(e.log10(a)),
                                    l = Math.floor(a / Math.pow(10, s)) + 1;
                                10 === l && (l = 1, ++s), a = l * Math.pow(10, s)
                            }
                            var d = r(i.max, a);
                            o.push(d), t.isHorizontal() || o.reverse(), t.max = e.max(o), t.min = e.min(o), i.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                        },
                        convertTicksToLabels: function() {
                            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForTick: function(t, e) {
                            return this.getPixelForValue(this.tickValues[t], null, null, e)
                        },
                        getPixelForValue: function(t) {
                            var n, i, r = this,
                                o = r.start,
                                a = +r.getRightValue(t),
                                s = e.log10(r.end) - e.log10(o),
                                l = r.paddingTop,
                                d = r.paddingBottom,
                                u = r.paddingLeft;
                            return r.isHorizontal() ? 0 === a ? i = r.left + u : (n = r.width - (u + r.paddingRight), i = r.left + n / s * (e.log10(a) - e.log10(o)), i += u) : 0 === a ? i = r.top + l : (n = r.height - (l + d), i = r.bottom - d - n / s * (e.log10(a) - e.log10(o))), i
                        },
                        getValueForPixel: function(t) {
                            var n, i, r = this,
                                o = e.log10(r.end) - e.log10(r.start);
                            return r.isHorizontal() ? (i = r.width - (r.paddingLeft + r.paddingRight), n = r.start * Math.pow(10, (t - r.left - r.paddingLeft) * o / i)) : (i = r.height - (r.paddingTop + r.paddingBottom), n = Math.pow(10, (r.bottom - r.paddingBottom - t) * o / i) / r.start), n
                        }
                    });
                t.scaleService.registerScaleType("logarithmic", i, n)
            }
        }, {}],
        41: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    n = t.defaults.global,
                    i = {
                        display: !0,
                        animate: !0,
                        lineArc: !1,
                        position: "chartArea",
                        angleLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1
                        },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2
                        },
                        pointLabels: {
                            fontSize: 10,
                            callback: function(t) {
                                return t
                            }
                        }
                    },
                    r = t.Scale.extend({
                        getValueCount: function() {
                            return this.chart.data.labels.length
                        },
                        setDimensions: function() {
                            var t = this.options;
                            this.width = this.maxWidth, this.height = this.maxHeight, this.xCenter = Math.round(this.width / 2), this.yCenter = Math.round(this.height / 2);
                            var i = e.min([this.height, this.width]),
                                r = e.getValueOrDefault(t.ticks.fontSize, n.defaultFontSize);
                            this.drawingArea = t.display ? i / 2 - (r / 2 + t.ticks.backdropPaddingY) : i / 2
                        },
                        determineDataLimits: function() {
                            if (this.min = null, this.max = null, e.each(this.chart.data.datasets, function(t, n) {
                                    if (this.chart.isDatasetVisible(n)) {
                                        var i = this.chart.getDatasetMeta(n);
                                        e.each(t.data, function(t, e) {
                                            var n = +this.getRightValue(t);
                                            isNaN(n) || i.data[e].hidden || (null === this.min ? this.min = n : n < this.min && (this.min = n), null === this.max ? this.max = n : n > this.max && (this.max = n))
                                        }, this)
                                    }
                                }, this), this.options.ticks.beginAtZero) {
                                var t = e.sign(this.min),
                                    n = e.sign(this.max);
                                0 > t && 0 > n ? this.max = 0 : t > 0 && n > 0 && (this.min = 0)
                            }
                            void 0 !== this.options.ticks.min ? this.min = this.options.ticks.min : void 0 !== this.options.ticks.suggestedMin && (this.min = Math.min(this.min, this.options.ticks.suggestedMin)), void 0 !== this.options.ticks.max ? this.max = this.options.ticks.max : void 0 !== this.options.ticks.suggestedMax && (this.max = Math.max(this.max, this.options.ticks.suggestedMax)), this.min === this.max && (this.min--, this.max++)
                        },
                        buildTicks: function() {
                            this.ticks = [];
                            var t = e.getValueOrDefault(this.options.ticks.fontSize, n.defaultFontSize),
                                i = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * t)));
                            i = Math.max(2, i);
                            var r = e.niceNum(this.max - this.min, !1),
                                o = e.niceNum(r / (i - 1), !0),
                                a = Math.floor(this.min / o) * o,
                                s = Math.ceil(this.max / o) * o,
                                l = Math.ceil((s - a) / o);
                            this.ticks.push(void 0 !== this.options.ticks.min ? this.options.ticks.min : a);
                            for (var d = 1; l > d; ++d) this.ticks.push(a + d * o);
                            this.ticks.push(void 0 !== this.options.ticks.max ? this.options.ticks.max : s), this.max = e.max(this.ticks), this.min = e.min(this.ticks), this.options.ticks.reverse ? (this.ticks.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), this.zeroLineIndex = this.ticks.indexOf(0)
                        },
                        convertTicksToLabels: function() {
                            t.Scale.prototype.convertTicksToLabels.call(this), this.pointLabels = this.chart.data.labels.map(this.options.pointLabels.callback, this)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        fit: function() {
                            var t, i, r, o, a, s, l, d, u, c, h, f, p = this.options.pointLabels,
                                g = e.getValueOrDefault(p.fontSize, n.defaultFontSize),
                                m = e.getValueOrDefault(p.fontStyle, n.defaultFontStyle),
                                v = e.getValueOrDefault(p.fontFamily, n.defaultFontFamily),
                                y = e.fontString(g, m, v),
                                b = e.min([this.height / 2 - g - 5, this.width / 2]),
                                x = this.width,
                                w = 0;
                            for (this.ctx.font = y, i = 0; i < this.getValueCount(); i++) t = this.getPointPosition(i, b), r = this.ctx.measureText(this.pointLabels[i] ? this.pointLabels[i] : "").width + 5,
                                0 === i || i === this.getValueCount() / 2 ? (o = r / 2, t.x + o > x && (x = t.x + o, a = i), t.x - o < w && (w = t.x - o, l = i)) : i < this.getValueCount() / 2 ? t.x + r > x && (x = t.x + r, a = i) : i > this.getValueCount() / 2 && t.x - r < w && (w = t.x - r, l = i);
                            u = w, c = Math.ceil(x - this.width), s = this.getIndexAngle(a), d = this.getIndexAngle(l), h = c / Math.sin(s + Math.PI / 2), f = u / Math.sin(d + Math.PI / 2), h = e.isNumber(h) ? h : 0, f = e.isNumber(f) ? f : 0, this.drawingArea = Math.round(b - (f + h) / 2), this.setCenterPoint(f, h)
                        },
                        setCenterPoint: function(t, e) {
                            var n = this.width - e - this.drawingArea,
                                i = t + this.drawingArea;
                            this.xCenter = Math.round((i + n) / 2 + this.left), this.yCenter = Math.round(this.height / 2 + this.top)
                        },
                        getIndexAngle: function(t) {
                            var e = 2 * Math.PI / this.getValueCount();
                            return t * e - Math.PI / 2
                        },
                        getDistanceFromCenterForValue: function(t) {
                            if (null === t) return 0;
                            var e = this.drawingArea / (this.max - this.min);
                            return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
                        },
                        getPointPosition: function(t, e) {
                            var n = this.getIndexAngle(t);
                            return {
                                x: Math.round(Math.cos(n) * e) + this.xCenter,
                                y: Math.round(Math.sin(n) * e) + this.yCenter
                            }
                        },
                        getPointPositionForValue: function(t, e) {
                            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                        },
                        getBasePosition: function() {
                            var t = this,
                                e = t.min,
                                n = t.max;
                            return t.getPointPositionForValue(0, t.beginAtZero ? 0 : 0 > e && 0 > n ? n : e > 0 && n > 0 ? e : 0)
                        },
                        draw: function() {
                            if (this.options.display) {
                                var t = this.ctx;
                                if (e.each(this.ticks, function(i, r) {
                                        if (r > 0 || this.options.reverse) {
                                            var o = this.getDistanceFromCenterForValue(this.ticks[r]),
                                                a = this.yCenter - o;
                                            if (this.options.gridLines.display)
                                                if (t.strokeStyle = this.options.gridLines.color, t.lineWidth = this.options.gridLines.lineWidth, this.options.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, o, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                                else {
                                                    t.beginPath();
                                                    for (var s = 0; s < this.getValueCount(); s++) {
                                                        var l = this.getPointPosition(s, this.getDistanceFromCenterForValue(this.ticks[r]));
                                                        0 === s ? t.moveTo(l.x, l.y) : t.lineTo(l.x, l.y)
                                                    }
                                                    t.closePath(), t.stroke()
                                                }
                                            if (this.options.ticks.display) {
                                                var d = e.getValueOrDefault(this.options.ticks.fontColor, n.defaultFontColor),
                                                    u = e.getValueOrDefault(this.options.ticks.fontSize, n.defaultFontSize),
                                                    c = e.getValueOrDefault(this.options.ticks.fontStyle, n.defaultFontStyle),
                                                    h = e.getValueOrDefault(this.options.ticks.fontFamily, n.defaultFontFamily),
                                                    f = e.fontString(u, c, h);
                                                if (t.font = f, this.options.ticks.showLabelBackdrop) {
                                                    var p = t.measureText(i).width;
                                                    t.fillStyle = this.options.ticks.backdropColor, t.fillRect(this.xCenter - p / 2 - this.options.ticks.backdropPaddingX, a - u / 2 - this.options.ticks.backdropPaddingY, p + 2 * this.options.ticks.backdropPaddingX, u + 2 * this.options.ticks.backdropPaddingY)
                                                }
                                                t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = d, t.fillText(i, this.xCenter, a)
                                            }
                                        }
                                    }, this), !this.options.lineArc) {
                                    t.lineWidth = this.options.angleLines.lineWidth, t.strokeStyle = this.options.angleLines.color;
                                    for (var i = this.getValueCount() - 1; i >= 0; i--) {
                                        if (this.options.angleLines.display) {
                                            var r = this.getPointPosition(i, this.getDistanceFromCenterForValue(this.options.reverse ? this.min : this.max));
                                            t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(r.x, r.y), t.stroke(), t.closePath()
                                        }
                                        var o = this.getPointPosition(i, this.getDistanceFromCenterForValue(this.options.reverse ? this.min : this.max) + 5),
                                            a = e.getValueOrDefault(this.options.pointLabels.fontColor, n.defaultFontColor),
                                            s = e.getValueOrDefault(this.options.pointLabels.fontSize, n.defaultFontSize),
                                            l = e.getValueOrDefault(this.options.pointLabels.fontStyle, n.defaultFontStyle),
                                            d = e.getValueOrDefault(this.options.pointLabels.fontFamily, n.defaultFontFamily),
                                            u = e.fontString(s, l, d);
                                        t.font = u, t.fillStyle = a;
                                        var c = this.pointLabels.length,
                                            h = this.pointLabels.length / 2,
                                            f = h / 2,
                                            p = f > i || i > c - f,
                                            g = i === f || i === c - f;
                                        0 === i ? t.textAlign = "center" : i === h ? t.textAlign = "center" : h > i ? t.textAlign = "left" : t.textAlign = "right", g ? t.textBaseline = "middle" : p ? t.textBaseline = "bottom" : t.textBaseline = "top", t.fillText(this.pointLabels[i] ? this.pointLabels[i] : "", o.x, o.y)
                                    }
                                }
                            }
                        }
                    });
                t.scaleService.registerScaleType("radialLinear", r, i)
            }
        }, {}],
        42: [function(t, e) {
            "use strict";
            var n = t("moment");
            n = "function" == typeof n ? n : window.moment, e.exports = function(t) {
                var e = t.helpers,
                    i = {
                        units: [{
                            name: "millisecond",
                            steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                        }, {
                            name: "second",
                            steps: [1, 2, 5, 10, 30]
                        }, {
                            name: "minute",
                            steps: [1, 2, 5, 10, 30]
                        }, {
                            name: "hour",
                            steps: [1, 2, 3, 6, 12]
                        }, {
                            name: "day",
                            steps: [1, 2, 5]
                        }, {
                            name: "week",
                            maxStep: 4
                        }, {
                            name: "month",
                            maxStep: 3
                        }, {
                            name: "quarter",
                            maxStep: 4
                        }, {
                            name: "year",
                            maxStep: !1
                        }]
                    },
                    r = {
                        position: "bottom",
                        time: {
                            parser: !1,
                            format: !1,
                            unit: !1,
                            round: !1,
                            displayFormat: !1,
                            isoWeekday: !1,
                            displayFormats: {
                                millisecond: "h:mm:ss.SSS a",
                                second: "h:mm:ss a",
                                minute: "h:mm:ss a",
                                hour: "MMM D, hA",
                                day: "ll",
                                week: "ll",
                                month: "MMM YYYY",
                                quarter: "[Q]Q - YYYY",
                                year: "YYYY"
                            }
                        },
                        ticks: {
                            autoSkip: !1
                        }
                    },
                    o = t.Scale.extend({
                        initialize: function() {
                            if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                            t.Scale.prototype.initialize.call(this)
                        },
                        getLabelMoment: function(t, e) {
                            return this.labelMoments[t][e]
                        },
                        getMomentStartOf: function(t) {
                            return "week" === this.options.time.unit && this.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(this.options.time.isoWeekday) : t.clone().startOf(this.tickUnit)
                        },
                        determineDataLimits: function() {
                            this.labelMoments = [];
                            var t = [];
                            this.chart.data.labels && this.chart.data.labels.length > 0 ? (e.each(this.chart.data.labels, function(e) {
                                var n = this.parseTime(e);
                                n.isValid() && (this.options.time.round && n.startOf(this.options.time.round), t.push(n))
                            }, this), this.firstTick = n.min.call(this, t), this.lastTick = n.max.call(this, t)) : (this.firstTick = null, this.lastTick = null), e.each(this.chart.data.datasets, function(i, r) {
                                var o = [],
                                    a = this.chart.isDatasetVisible(r);
                                "object" == typeof i.data[0] && null !== i.data[0] ? e.each(i.data, function(t) {
                                    var e = this.parseTime(this.getRightValue(t));
                                    e.isValid() && (this.options.time.round && e.startOf(this.options.time.round), o.push(e), a && (this.firstTick = null !== this.firstTick ? n.min(this.firstTick, e) : e, this.lastTick = null !== this.lastTick ? n.max(this.lastTick, e) : e))
                                }, this) : o = t, this.labelMoments.push(o)
                            }, this), this.options.time.min && (this.firstTick = this.parseTime(this.options.time.min)), this.options.time.max && (this.lastTick = this.parseTime(this.options.time.max)), this.firstTick = (this.firstTick || n()).clone(), this.lastTick = (this.lastTick || n()).clone()
                        },
                        buildTicks: function() {
                            this.ctx.save();
                            var n = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                                r = e.getValueOrDefault(this.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                                o = e.getValueOrDefault(this.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                                a = e.fontString(n, r, o);
                            if (this.ctx.font = a, this.ticks = [], this.unitScale = 1, this.scaleSizeInUnits = 0, this.options.time.unit) this.tickUnit = this.options.time.unit || "day", this.displayFormat = this.options.time.displayFormats[this.tickUnit], this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0), this.unitScale = e.getValueOrDefault(this.options.time.unitStepSize, 1);
                            else {
                                var s = this.isHorizontal() ? this.width - (this.paddingLeft + this.paddingRight) : this.height - (this.paddingTop + this.paddingBottom),
                                    l = this.tickFormatFunction(this.firstTick, 0, []),
                                    d = this.ctx.measureText(l).width,
                                    u = Math.cos(e.toRadians(this.options.ticks.maxRotation)),
                                    c = Math.sin(e.toRadians(this.options.ticks.maxRotation));
                                d = d * u + n * c;
                                var h = s / d;
                                this.tickUnit = "millisecond", this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0), this.displayFormat = this.options.time.displayFormats[this.tickUnit];
                                for (var f = 0, p = i.units[f]; f < i.units.length;) {
                                    if (this.unitScale = 1, e.isArray(p.steps) && Math.ceil(this.scaleSizeInUnits / h) < e.max(p.steps)) {
                                        for (var g = 0; g < p.steps.length; ++g)
                                            if (p.steps[g] >= Math.ceil(this.scaleSizeInUnits / h)) {
                                                this.unitScale = e.getValueOrDefault(this.options.time.unitStepSize, p.steps[g]);
                                                break
                                            }
                                        break
                                    }
                                    if (p.maxStep === !1 || Math.ceil(this.scaleSizeInUnits / h) < p.maxStep) {
                                        this.unitScale = e.getValueOrDefault(this.options.time.unitStepSize, Math.ceil(this.scaleSizeInUnits / h));
                                        break
                                    }++f, p = i.units[f], this.tickUnit = p.name;
                                    var m = this.firstTick.diff(this.getMomentStartOf(this.firstTick), this.tickUnit, !0),
                                        v = this.getMomentStartOf(this.lastTick.clone().add(1, this.tickUnit)).diff(this.lastTick, this.tickUnit, !0);
                                    this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0) + m + v, this.displayFormat = this.options.time.displayFormats[p.name]
                                }
                            }
                            var y;
                            if (this.options.time.min ? y = this.getMomentStartOf(this.firstTick) : (this.firstTick = this.getMomentStartOf(this.firstTick), y = this.firstTick), !this.options.time.max) {
                                var b = this.getMomentStartOf(this.lastTick);
                                0 !== b.diff(this.lastTick, this.tickUnit, !0) && (this.lastTick = this.getMomentStartOf(this.lastTick.add(1, this.tickUnit)))
                            }
                            this.smallestLabelSeparation = this.width, e.each(this.chart.data.datasets, function(t, e) {
                                for (var n = 1; n < this.labelMoments[e].length; n++) this.smallestLabelSeparation = Math.min(this.smallestLabelSeparation, this.labelMoments[e][n].diff(this.labelMoments[e][n - 1], this.tickUnit, !0))
                            }, this), this.options.time.displayFormat && (this.displayFormat = this.options.time.displayFormat), this.ticks.push(this.firstTick.clone());
                            for (var x = 1; x <= this.scaleSizeInUnits; ++x) {
                                var w = y.clone().add(x, this.tickUnit);
                                if (this.options.time.max && w.diff(this.lastTick, this.tickUnit, !0) >= 0) break;
                                x % this.unitScale === 0 && this.ticks.push(w)
                            }
                            var _ = this.ticks[this.ticks.length - 1].diff(this.lastTick, this.tickUnit);
                            (0 !== _ || 0 === this.scaleSizeInUnits) && (this.options.time.max ? (this.ticks.push(this.lastTick.clone()), this.scaleSizeInUnits = this.lastTick.diff(this.ticks[0], this.tickUnit, !0)) : (this.ticks.push(this.lastTick.clone()), this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0))), this.ctx.restore()
                        },
                        getLabelForIndex: function(t, e) {
                            var n = this.chart.data.labels && t < this.chart.data.labels.length ? this.chart.data.labels[t] : "";
                            return "object" == typeof this.chart.data.datasets[e].data[0] && (n = this.getRightValue(this.chart.data.datasets[e].data[t])), this.options.time.tooltipFormat && (n = this.parseTime(n).format(this.options.time.tooltipFormat)), n
                        },
                        tickFormatFunction: function(t, n, i) {
                            var r = t.format(this.displayFormat),
                                o = this.options.ticks,
                                a = e.getValueOrDefault(o.callback, o.userCallback);
                            return a ? a(r, n, i) : r
                        },
                        convertTicksToLabels: function() {
                            this.tickMoments = this.ticks, this.ticks = this.ticks.map(this.tickFormatFunction, this)
                        },
                        getPixelForValue: function(t, e, n) {
                            var i = t && t.isValid && t.isValid() ? t : this.getLabelMoment(n, e);
                            if (i) {
                                var r = i.diff(this.firstTick, this.tickUnit, !0),
                                    o = r / this.scaleSizeInUnits;
                                if (this.isHorizontal()) {
                                    var a = this.width - (this.paddingLeft + this.paddingRight),
                                        s = (a / Math.max(this.ticks.length - 1, 1), a * o + this.paddingLeft);
                                    return this.left + Math.round(s)
                                }
                                var l = this.height - (this.paddingTop + this.paddingBottom),
                                    d = (l / Math.max(this.ticks.length - 1, 1), l * o + this.paddingTop);
                                return this.top + Math.round(d)
                            }
                        },
                        getPixelForTick: function(t, e) {
                            return this.getPixelForValue(this.tickMoments[t], null, null, e)
                        },
                        getValueForPixel: function(t) {
                            var e = this.isHorizontal() ? this.width - (this.paddingLeft + this.paddingRight) : this.height - (this.paddingTop + this.paddingBottom),
                                i = (t - (this.isHorizontal() ? this.left + this.paddingLeft : this.top + this.paddingTop)) / e;
                            return i *= this.scaleSizeInUnits, this.firstTick.clone().add(n.duration(i, this.tickUnit).asSeconds(), "seconds")
                        },
                        parseTime: function(t) {
                            return "string" == typeof this.options.time.parser ? n(t, this.options.time.parser) : "function" == typeof this.options.time.parser ? this.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? n(t) : t.isValid && t.isValid() ? t : "string" != typeof this.options.time.format && this.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), this.options.time.format(t)) : n(t, this.options.time.format)
                        }
                    });
                t.scaleService.registerScaleType("time", o, r)
            }
        }, {
            moment: 6
        }]
    }, {}, [7]), "undefined" == typeof Tablesaw && (Tablesaw = {
        i18n: {
            modes: ["Stack", "Swipe", "Toggle"],
            columns: 'Col<span class="a11y-sm">umn</span>s',
            columnBtnText: "Columns",
            columnsDialogError: "No eligible columns.",
            sort: "Sort"
        },
        mustard: "querySelector" in document && (!window.blackberry || window.WebKitPoint) && !window.operamini
    }), Tablesaw.config || (Tablesaw.config = {}), Tablesaw.mustard && jQuery(document.documentElement).addClass("tablesaw-enhanced"),
    function(t) {
        var e = "table",
            n = {
                toolbar: "tablesaw-bar"
            },
            i = {
                create: "tablesawcreate",
                destroy: "tablesawdestroy",
                refresh: "tablesawrefresh"
            },
            r = "stack",
            o = "table[data-tablesaw-mode],table[data-tablesaw-sortable]",
            a = function(e) {
                if (!e) throw new Error("Tablesaw requires an element.");
                this.table = e, this.$table = t(e), this.mode = this.$table.attr("data-tablesaw-mode") || r, this.init()
            };
        a.prototype.init = function() {
            this.$table.attr("id") || this.$table.attr("id", e + "-" + Math.round(1e4 * Math.random())), this.createToolbar();
            var t = this._initCells();
            this.$table.trigger(i.create, [this, t])
        }, a.prototype._initCells = function() {
            var e, n = this.table.querySelectorAll("thead tr"),
                i = this;
            return t(n).each(function() {
                var r = 0;
                t(this).children().each(function() {
                    var t = parseInt(this.getAttribute("colspan"), 10),
                        o = ":nth-child(" + (r + 1) + ")";
                    if (e = r + 1, t)
                        for (var a = 0; a < t - 1; a++) r++, o += ", :nth-child(" + (r + 1) + ")";
                    this.cells = i.$table.find("tr").not(n[0]).not(this).children().filter(o), r++
                })
            }), e
        }, a.prototype.refresh = function() {
            this._initCells(), this.$table.trigger(i.refresh)
        }, a.prototype.createToolbar = function() {
            var e = this.$table.prev().filter("." + n.toolbar);
            e.length || (e = t("<div>").addClass(n.toolbar).insertBefore(this.$table)), this.$toolbar = e, this.mode && this.$toolbar.addClass("mode-" + this.mode)
        }, a.prototype.destroy = function() {
            this.$table.prev().filter("." + n.toolbar).each(function() {
                this.className = this.className.replace(/\bmode\-\w*\b/gi, "")
            });
            var r = this.$table.attr("id");
            t(document).unbind("." + r), t(window).unbind("." + r), this.$table.trigger(i.destroy, [this]), this.$table.removeData(e)
        }, t.fn[e] = function() {
            return this.each(function() {
                var n = t(this);
                if (!n.data(e)) {
                    var i = new a(this);
                    n.data(e, i)
                }
            })
        }, t(document).on("enhance.tablesaw", function(n) {
            Tablesaw.mustard && t(n.target).find(o)[e]()
        })
    }(jQuery),
    function(t, e) {
        var n = {
                stackTable: "tablesaw-stack",
                cellLabels: "tablesaw-cell-label",
                cellContentLabels: "tablesaw-cell-content"
            },
            i = {
                obj: "tablesaw-stack"
            },
            r = {
                labelless: "data-tablesaw-no-labels",
                hideempty: "data-tablesaw-hide-empty"
            },
            o = function(t) {
                this.$table = e(t), this.labelless = this.$table.is("[" + r.labelless + "]"), this.hideempty = this.$table.is("[" + r.hideempty + "]"), this.labelless || (this.allHeaders = this.$table.find("th")), this.$table.data(i.obj, this)
            };
        o.prototype.init = function(t) {
            if (this.$table.addClass(n.stackTable), !this.labelless) {
                var i = e(this.allHeaders),
                    o = this.hideempty;
                i.each(function() {
                    var i = e(this),
                        a = e(this.cells).filter(function() {
                            return !(e(this).parent().is("[" + r.labelless + "]") || o && e(this).is(":empty"))
                        }),
                        s = a.not(this).filter("thead th").length && " tablesaw-cell-label-top",
                        l = i.find(".tablesaw-sortable-btn"),
                        d = l.length ? l.html() : i.html();
                    if ("" !== d)
                        if (s) {
                            var u = parseInt(e(this).attr("colspan"), 10),
                                c = "";
                            u && (c = "td:nth-child(" + u + "n + " + t + ")"), a.filter(c).prepend("<b class='" + n.cellLabels + s + "'>" + d + "</b>")
                        } else a.wrapInner("<span class='" + n.cellContentLabels + "'></span>"), a.prepend("<b class='" + n.cellLabels + "'>" + d + "</b>")
                })
            }
        }, o.prototype.destroy = function() {
            this.$table.removeClass(n.stackTable), this.$table.find("." + n.cellLabels).remove(), this.$table.find("." + n.cellContentLabels).each(function() {
                e(this).replaceWith(this.childNodes)
            })
        }, e(document).on("tablesawcreate", function(t, e, n) {
            if ("stack" === e.mode) {
                var i = new o(e.table);
                i.init(n)
            }
        }), e(document).on("tablesawdestroy", function(t, n) {
            "stack" === n.mode && e(n.table).data(i.obj).destroy()
        })
    }(this, jQuery),
    function(t) {
        t(function() {
            t(document).trigger("enhance.tablesaw")
        })
    }(jQuery), Chart.defaults.global.defaultFontFamily = "'Open Sans','Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById("transactions-chart");
Chart.defaults.global.maintainAspectRatio = !1, null !== ctx && makeTransactionsChart(), $(".app-chart").each(function(t, e) {
        new Chart(e, {
            type: "line",
            defaultFontSize: 18,
            data: {
                labels: $(e).parent("div").data("dates"),
                datasets: [{
                    fill: !1,
                    pointRadius: 0,
                    borderWidth: 1,
                    borderColor: "rgba(118, 159, 198, 0.5)",
                    lineTension: .1,
                    data: $(e).parent("div").data("success")
                }]
            },
            options: {
                legend: {
                    display: !1
                },
                scales: {
                    yAxes: [{
                        display: !1,
                        ticks: {
                            beginAtZero: !0
                        }
                    }],
                    xAxes: [{
                        display: !1
                    }]
                }
            }
        })
    }), window.matchMedia = window.matchMedia || function(t) {
        "use strict";
        var e, n = t.documentElement,
            i = n.firstElementChild || n.firstChild,
            r = t.createElement("body"),
            o = t.createElement("div");
        return o.id = "mq-test-1", o.style.cssText = "position:absolute;top:-100em", r.style.background = "none", r.appendChild(o),
            function(t) {
                return o.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(r, i), e = 42 === o.offsetWidth, n.removeChild(r), {
                    matches: e,
                    media: t
                }
            }
    }(document),
    function(t) {
        "use strict";

        function e() {
            w(!0)
        }
        var n = {};
        if (t.respond = n, n.update = function() {}, n.mediaQueriesSupported = t.matchMedia && t.matchMedia("only all").matches, !n.mediaQueriesSupported) {
            var i, r, o, a = t.document,
                s = a.documentElement,
                l = [],
                d = [],
                u = [],
                c = {},
                h = 30,
                f = a.getElementsByTagName("head")[0] || s,
                p = a.getElementsByTagName("base")[0],
                g = f.getElementsByTagName("link"),
                m = [],
                v = function() {
                    for (var e = 0; g.length > e; e++) {
                        var n = g[e],
                            i = n.href,
                            r = n.media,
                            o = n.rel && "stylesheet" === n.rel.toLowerCase();
                        i && o && !c[i] && (n.styleSheet && n.styleSheet.rawCssText ? (b(n.styleSheet.rawCssText, i, r), c[i] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(i) && !p || i.replace(RegExp.$1, "").split("/")[0] === t.location.host) && m.push({
                            href: i,
                            media: r
                        }))
                    }
                    y()
                },
                y = function() {
                    if (m.length) {
                        var e = m.shift();
                        _(e.href, function(n) {
                            b(n, e.href, e.media), c[e.href] = !0, t.setTimeout(function() {
                                y()
                            }, 0)
                        })
                    }
                },
                b = function(t, e, n) {
                    var i = t.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),
                        r = i && i.length || 0;
                    e = e.substring(0, e.lastIndexOf("/"));
                    var o = function(t) {
                            return t.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + e + "$2$3")
                        },
                        a = !r && n;
                    e.length && (e += "/"), a && (r = 1);
                    for (var s = 0; r > s; s++) {
                        var u, c, h, f;
                        a ? (u = n, d.push(o(t))) : (u = i[s].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1, d.push(RegExp.$2 && o(RegExp.$2))), h = u.split(","), f = h.length;
                        for (var p = 0; f > p; p++) c = h[p], l.push({
                            media: c.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) && RegExp.$2 || "all",
                            rules: d.length - 1,
                            hasquery: c.indexOf("(") > -1,
                            minw: c.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                            maxw: c.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                        })
                    }
                    w()
                },
                x = function() {
                    var t, e = a.createElement("div"),
                        n = a.body,
                        i = !1;
                    return e.style.cssText = "position:absolute;font-size:1em;width:1em", n || (n = i = a.createElement("body"), n.style.background = "none"), n.appendChild(e), s.insertBefore(n, s.firstChild), t = e.offsetWidth, i ? s.removeChild(n) : n.removeChild(e), t = o = parseFloat(t)
                },
                w = function(e) {
                    var n = "clientWidth",
                        c = s[n],
                        p = "CSS1Compat" === a.compatMode && c || a.body[n] || c,
                        m = {},
                        v = g[g.length - 1],
                        y = (new Date).getTime();
                    if (e && i && h > y - i) return t.clearTimeout(r), void(r = t.setTimeout(w, h));
                    i = y;
                    for (var b in l)
                        if (l.hasOwnProperty(b)) {
                            var _ = l[b],
                                k = _.minw,
                                S = _.maxw,
                                C = null === k,
                                D = null === S,
                                M = "em";
                            k && (k = parseFloat(k) * (k.indexOf(M) > -1 ? o || x() : 1)), S && (S = parseFloat(S) * (S.indexOf(M) > -1 ? o || x() : 1)), _.hasquery && (C && D || !(C || p >= k) || !(D || S >= p)) || (m[_.media] || (m[_.media] = []), m[_.media].push(d[_.rules]))
                        }
                    for (var T in u) u.hasOwnProperty(T) && u[T] && u[T].parentNode === f && f.removeChild(u[T]);
                    for (var O in m)
                        if (m.hasOwnProperty(O)) {
                            var A = a.createElement("style"),
                                P = m[O].join("\n");
                            A.type = "text/css", A.media = O, f.insertBefore(A, v.nextSibling), A.styleSheet ? A.styleSheet.cssText = P : A.appendChild(a.createTextNode(P)), u.push(A)
                        }
                },
                _ = function(t, e) {
                    var n = k();
                    n && (n.open("GET", t, !0), n.onreadystatechange = function() {
                        4 !== n.readyState || 200 !== n.status && 304 !== n.status || e(n.responseText)
                    }, 4 !== n.readyState && n.send(null))
                },
                k = function() {
                    var e = !1;
                    try {
                        e = new t.XMLHttpRequest
                    } catch (n) {
                        e = new t.ActiveXObject("Microsoft.XMLHTTP")
                    }
                    return function() {
                        return e
                    }
                }();
            v(), n.update = v, t.addEventListener ? t.addEventListener("resize", e, !1) : t.attachEvent && t.attachEvent("onresize", e)
        }
    }(this),
    function(t) {
        var e = 0,
            n = function() {
                return (new Date).getTime() + e++
            },
            i = function(t) {
                return "[" + t + "]$1"
            },
            r = function(t) {
                return "_" + t + "_$1"
            },
            o = function(e, n, i) {
                return e ? "function" == typeof e ? (n && console.warn("association-insertion-traversal is ignored, because association-insertion-node is given as a function."), e(i)) : "string" == typeof e ? n ? i[n](e) : "this" == e ? i : t(e) : void 0 : i.parent()
            };
        t(document).on("click", ".add_fields", function(e) {
            e.preventDefault();
            var a = t(this),
                s = a.data("association"),
                l = a.data("associations"),
                d = a.data("association-insertion-template"),
                u = a.data("association-insertion-method") || a.data("association-insertion-position") || "before",
                c = a.data("association-insertion-node"),
                h = a.data("association-insertion-traversal"),
                f = parseInt(a.data("count"), 10),
                p = new RegExp("\\[new_" + s + "\\](.*?\\s)", "g"),
                g = new RegExp("_new_" + s + "_(\\w*)", "g"),
                m = n(),
                v = d.replace(p, i(m)),
                y = [];
            for (v == d && (p = new RegExp("\\[new_" + l + "\\](.*?\\s)", "g"), g = new RegExp("_new_" + l + "_(\\w*)", "g"), v = d.replace(p, i(m))), v = v.replace(g, r(m)), y = [v], f = isNaN(f) ? 1 : Math.max(f, 1), f -= 1; f;) m = n(), v = d.replace(p, i(m)), v = v.replace(g, r(m)), y.push(v), f -= 1;
            var b = o(c, h, a);
            b && 0 != b.length || console.warn("Couldn't find the element to insert the template. Make sure your `data-association-insertion-*` on `link_to_add_association` is correct."), t.each(y, function(e, n) {
                var i = t(n);
                b.trigger("cocoon:before-insert", [i]);
                b[u](i);
                b.trigger("cocoon:after-insert", [i])
            })
        }), t(document).on("click", ".remove_fields.dynamic, .remove_fields.existing", function(e) {
            var n = t(this),
                i = n.data("wrapper-class") || "nested-fields",
                r = n.closest("." + i),
                o = r.parent();
            e.preventDefault(), o.trigger("cocoon:before-remove", [r]);
            var a = o.data("remove-timeout") || 0;
            setTimeout(function() {
                n.hasClass("dynamic") ? r.remove() : (n.prev("input[type=hidden]").val("1"), r.hide()), o.trigger("cocoon:after-remove", [r])
            }, a)
        }), t(document).on("ready page:load", function() {
            t(".remove_fields.existing.destroyed").each(function() {
                var e = t(this),
                    n = e.data("wrapper-class") || "nested-fields";
                e.closest("." + n).hide()
            })
        })
    }(jQuery),
    function(t, e) {
        "function" == typeof define && define.amd ? define("sifter", e) : "object" == typeof exports ? module.exports = e() : t.Sifter = e()
    }(this, function() {
        var t = function(t, e) {
            this.items = t, this.settings = e || {
                diacritics: !0
            }
        };
        t.prototype.tokenize = function(t) {
            if (t = r(String(t || "").toLowerCase()), !t || !t.length) return [];
            var e, n, i, a, l = [],
                d = t.split(/ +/);
            for (e = 0, n = d.length; e < n; e++) {
                if (i = o(d[e]), this.settings.diacritics)
                    for (a in s) s.hasOwnProperty(a) && (i = i.replace(new RegExp(a, "g"), s[a]));
                l.push({
                    string: d[e],
                    regex: new RegExp(i, "i")
                })
            }
            return l
        }, t.prototype.iterator = function(t, e) {
            var n;
            n = a(t) ? Array.prototype.forEach || function(t) {
                for (var e = 0, n = this.length; e < n; e++) t(this[e], e, this)
            } : function(t) {
                for (var e in this) this.hasOwnProperty(e) && t(this[e], e, this)
            }, n.apply(t, [e])
        }, t.prototype.getScoreFunction = function(t, e) {
            var n, r, o, a, s;
            n = this, t = n.prepareSearch(t, e), o = t.tokens, r = t.options.fields, a = o.length, s = t.options.nesting;
            var l = function(t, e) {
                    var n, i;
                    return t ? (t = String(t || ""), i = t.search(e.regex), i === -1 ? 0 : (n = e.string.length / t.length, 0 === i && (n += .5), n)) : 0
                },
                d = function() {
                    var t = r.length;
                    return t ? 1 === t ? function(t, e) {
                        return l(i(e, r[0], s), t)
                    } : function(e, n) {
                        for (var o = 0, a = 0; o < t; o++) a += l(i(n, r[o], s), e);
                        return a / t
                    } : function() {
                        return 0
                    }
                }();
            return a ? 1 === a ? function(t) {
                return d(o[0], t)
            } : "and" === t.options.conjunction ? function(t) {
                for (var e, n = 0, i = 0; n < a; n++) {
                    if (e = d(o[n], t), e <= 0) return 0;
                    i += e
                }
                return i / a
            } : function(t) {
                for (var e = 0, n = 0; e < a; e++) n += d(o[e], t);
                return n / a
            } : function() {
                return 0
            }
        }, t.prototype.getSortFunction = function(t, n) {
            var r, o, a, s, l, d, u, c, h, f, p;
            if (a = this, t = a.prepareSearch(t, n), p = !t.query && n.sort_empty || n.sort, h = function(t, e) {
                    return "$score" === t ? e.score : i(a.items[e.id], t, n.nesting)
                }, l = [], p)
                for (r = 0, o = p.length; r < o; r++)(t.query || "$score" !== p[r].field) && l.push(p[r]);
            if (t.query) {
                for (f = !0, r = 0, o = l.length; r < o; r++)
                    if ("$score" === l[r].field) {
                        f = !1;
                        break
                    }
                f && l.unshift({
                    field: "$score",
                    direction: "desc"
                })
            } else
                for (r = 0, o = l.length; r < o; r++)
                    if ("$score" === l[r].field) {
                        l.splice(r, 1);
                        break
                    } for (c = [], r = 0, o = l.length; r < o; r++) c.push("desc" === l[r].direction ? -1 : 1);
            return d = l.length, d ? 1 === d ? (s = l[0].field, u = c[0], function(t, n) {
                return u * e(h(s, t), h(s, n))
            }) : function(t, n) {
                var i, r, o;
                for (i = 0; i < d; i++)
                    if (o = l[i].field, r = c[i] * e(h(o, t), h(o, n))) return r;
                return 0
            } : null
        }, t.prototype.prepareSearch = function(t, e) {
            if ("object" == typeof t) return t;
            e = n({}, e);
            var i = e.fields,
                r = e.sort,
                o = e.sort_empty;
            return i && !a(i) && (e.fields = [i]), r && !a(r) && (e.sort = [r]), o && !a(o) && (e.sort_empty = [o]), {
                options: e,
                query: String(t || "").toLowerCase(),
                tokens: this.tokenize(t),
                total: 0,
                items: []
            }
        }, t.prototype.search = function(t, e) {
            var n, i, r, o, a = this;
            return i = this.prepareSearch(t, e), e = i.options, t = i.query, o = e.score || a.getScoreFunction(i), t.length ? a.iterator(a.items, function(t, r) {
                n = o(t), (e.filter === !1 || n > 0) && i.items.push({
                    score: n,
                    id: r
                })
            }) : a.iterator(a.items, function(t, e) {
                i.items.push({
                    score: 1,
                    id: e
                })
            }), r = a.getSortFunction(i, e), r && i.items.sort(r), i.total = i.items.length, "number" == typeof e.limit && (i.items = i.items.slice(0, e.limit)), i
        };
        var e = function(t, e) {
                return "number" == typeof t && "number" == typeof e ? t > e ? 1 : t < e ? -1 : 0 : (t = l(String(t || "")), e = l(String(e || "")), t > e ? 1 : e > t ? -1 : 0)
            },
            n = function(t) {
                var e, n, i, r;
                for (e = 1, n = arguments.length; e < n; e++)
                    if (r = arguments[e])
                        for (i in r) r.hasOwnProperty(i) && (t[i] = r[i]);
                return t
            },
            i = function(t, e, n) {
                if (t && e) {
                    if (!n) return t[e];
                    for (var i = e.split("."); i.length && (t = t[i.shift()]););
                    return t
                }
            },
            r = function(t) {
                return (t + "").replace(/^\s+|\s+$|/g, "")
            },
            o = function(t) {
                return (t + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
            },
            a = Array.isArray || "undefined" != typeof $ && $.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            s = {
                a: "[a\u1e00\u1e01\u0102\u0103\xc2\xe2\u01cd\u01ce\u023a\u2c65\u0226\u0227\u1ea0\u1ea1\xc4\xe4\xc0\xe0\xc1\xe1\u0100\u0101\xc3\xe3\xc5\xe5\u0105\u0104\xc3\u0105\u0104]",
                b: "[b\u2422\u03b2\u0392B\u0e3f\ud800\udf01\u16d2]",
                c: "[c\u0106\u0107\u0108\u0109\u010c\u010d\u010a\u010bC\u0304c\u0304\xc7\xe7\u1e08\u1e09\u023b\u023c\u0187\u0188\u0255\u1d04\uff23\uff43]",
                d: "[d\u010e\u010f\u1e0a\u1e0b\u1e10\u1e11\u1e0c\u1e0d\u1e12\u1e13\u1e0e\u1e0f\u0110\u0111D\u0326d\u0326\u0189\u0256\u018a\u0257\u018b\u018c\u1d6d\u1d81\u1d91\u0221\u1d05\uff24\uff44\xf0]",
                e: "[e\xc9\xe9\xc8\xe8\xca\xea\u1e18\u1e19\u011a\u011b\u0114\u0115\u1ebc\u1ebd\u1e1a\u1e1b\u1eba\u1ebb\u0116\u0117\xcb\xeb\u0112\u0113\u0228\u0229\u0118\u0119\u1d92\u0246\u0247\u0204\u0205\u1ebe\u1ebf\u1ec0\u1ec1\u1ec4\u1ec5\u1ec2\u1ec3\u1e1c\u1e1d\u1e16\u1e17\u1e14\u1e15\u0206\u0207\u1eb8\u1eb9\u1ec6\u1ec7\u2c78\u1d07\uff25\uff45\u0258\u01dd\u018f\u0190\u03b5]",
                f: "[f\u0191\u0192\u1e1e\u1e1f]",
                g: "[g\u0262\u20b2\u01e4\u01e5\u011c\u011d\u011e\u011f\u0122\u0123\u0193\u0260\u0120\u0121]",
                h: "[h\u0124\u0125\u0126\u0127\u1e28\u1e29\u1e96\u1e96\u1e24\u1e25\u1e22\u1e23\u0266\u02b0\u01f6\u0195]",
                i: "[i\xcd\xed\xcc\xec\u012c\u012d\xce\xee\u01cf\u01d0\xcf\xef\u1e2e\u1e2f\u0128\u0129\u012e\u012f\u012a\u012b\u1ec8\u1ec9\u0208\u0209\u020a\u020b\u1eca\u1ecb\u1e2c\u1e2d\u0197\u0268\u0268\u0306\u1d7b\u1d96\u0130iI\u0131\u026a\uff29\uff49]",
                j: "[j\u0237\u0134\u0135\u0248\u0249\u029d\u025f\u02b2]",
                k: "[k\u0198\u0199\ua740\ua741\u1e30\u1e31\u01e8\u01e9\u1e32\u1e33\u1e34\u1e35\u03ba\u03f0\u20ad]",
                l: "[l\u0141\u0142\u013d\u013e\u013b\u013c\u0139\u013a\u1e36\u1e37\u1e38\u1e39\u1e3c\u1e3d\u1e3a\u1e3b\u013f\u0140\u023d\u019a\u2c60\u2c61\u2c62\u026b\u026c\u1d85\u026d\u0234\u029f\uff2c\uff4c]",
                n: "[n\u0143\u0144\u01f8\u01f9\u0147\u0148\xd1\xf1\u1e44\u1e45\u0145\u0146\u1e46\u1e47\u1e4a\u1e4b\u1e48\u1e49N\u0308n\u0308\u019d\u0272\u0220\u019e\u1d70\u1d87\u0273\u0235\u0274\uff2e\uff4e\u014a\u014b]",
                o: "[o\xd8\xf8\xd6\xf6\xd3\xf3\xd2\xf2\xd4\xf4\u01d1\u01d2\u0150\u0151\u014e\u014f\u022e\u022f\u1ecc\u1ecd\u019f\u0275\u01a0\u01a1\u1ece\u1ecf\u014c\u014d\xd5\xf5\u01ea\u01eb\u020c\u020d\u0555\u0585]",
                p: "[p\u1e54\u1e55\u1e56\u1e57\u2c63\u1d7d\u01a4\u01a5\u1d71]",
                q: "[q\ua756\ua757\u02a0\u024a\u024b\ua758\ua759q\u0303]",
                r: "[r\u0154\u0155\u024c\u024d\u0158\u0159\u0156\u0157\u1e58\u1e59\u0210\u0211\u0212\u0213\u1e5a\u1e5b\u2c64\u027d]",
                s: "[s\u015a\u015b\u1e60\u1e61\u1e62\u1e63\ua7a8\ua7a9\u015c\u015d\u0160\u0161\u015e\u015f\u0218\u0219S\u0308s\u0308]",
                t: "[t\u0164\u0165\u1e6a\u1e6b\u0162\u0163\u1e6c\u1e6d\u01ae\u0288\u021a\u021b\u1e70\u1e71\u1e6e\u1e6f\u01ac\u01ad]",
                u: "[u\u016c\u016d\u0244\u0289\u1ee4\u1ee5\xdc\xfc\xda\xfa\xd9\xf9\xdb\xfb\u01d3\u01d4\u0170\u0171\u016c\u016d\u01af\u01b0\u1ee6\u1ee7\u016a\u016b\u0168\u0169\u0172\u0173\u0214\u0215\u222a]",
                v: "[v\u1e7c\u1e7d\u1e7e\u1e7f\u01b2\u028b\ua75e\ua75f\u2c71\u028b]",
                w: "[w\u1e82\u1e83\u1e80\u1e81\u0174\u0175\u1e84\u1e85\u1e86\u1e87\u1e88\u1e89]",
                x: "[x\u1e8c\u1e8d\u1e8a\u1e8b\u03c7]",
                y: "[y\xdd\xfd\u1ef2\u1ef3\u0176\u0177\u0178\xff\u1ef8\u1ef9\u1e8e\u1e8f\u1ef4\u1ef5\u024e\u024f\u01b3\u01b4]",
                z: "[z\u0179\u017a\u1e90\u1e91\u017d\u017e\u017b\u017c\u1e92\u1e93\u1e94\u1e95\u01b5\u01b6]"
            },
            l = function() {
                var t, e, n, i, r = "",
                    o = {};
                for (n in s)
                    if (s.hasOwnProperty(n))
                        for (i = s[n].substring(2, s[n].length - 1), r += i, t = 0, e = i.length; t < e; t++) o[i.charAt(t)] = n;
                var a = new RegExp("[" + r + "]", "g");
                return function(t) {
                    return t.replace(a, function(t) {
                        return o[t]
                    }).toLowerCase()
                }
            }();
        return t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("microplugin", e) : "object" == typeof exports ? module.exports = e() : t.MicroPlugin = e()
    }(this, function() {
        var t = {};
        t.mixin = function(t) {
            t.plugins = {}, t.prototype.initializePlugins = function(t) {
                var n, i, r, o = this,
                    a = [];
                if (o.plugins = {
                        names: [],
                        settings: {},
                        requested: {},
                        loaded: {}
                    }, e.isArray(t))
                    for (n = 0, i = t.length; n < i; n++) "string" == typeof t[n] ? a.push(t[n]) : (o.plugins.settings[t[n].name] = t[n].options, a.push(t[n].name));
                else if (t)
                    for (r in t) t.hasOwnProperty(r) && (o.plugins.settings[r] = t[r], a.push(r));
                for (; a.length;) o.require(a.shift())
            }, t.prototype.loadPlugin = function(e) {
                var n = this,
                    i = n.plugins,
                    r = t.plugins[e];
                if (!t.plugins.hasOwnProperty(e)) throw new Error('Unable to find "' + e + '" plugin');
                i.requested[e] = !0, i.loaded[e] = r.fn.apply(n, [n.plugins.settings[e] || {}]), i.names.push(e)
            }, t.prototype.require = function(t) {
                var e = this,
                    n = e.plugins;
                if (!e.plugins.loaded.hasOwnProperty(t)) {
                    if (n.requested[t]) throw new Error('Plugin has circular dependency ("' + t + '")');
                    e.loadPlugin(t)
                }
                return n.loaded[t]
            }, t.define = function(e, n) {
                t.plugins[e] = {
                    name: e,
                    fn: n
                }
            }
        };
        var e = {
            isArray: Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
        };
        return t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], e) : "object" == typeof exports ? module.exports = e(require("jquery"), require("sifter"), require("microplugin")) : t.Selectize = e(t.jQuery, t.Sifter, t.MicroPlugin)
    }(this, function(t, e, n) {
        "use strict";
        var i = function(t, e) {
            if ("string" != typeof e || e.length) {
                var n = "string" == typeof e ? new RegExp(e, "i") : e,
                    i = function(t) {
                        var e = 0;
                        if (3 === t.nodeType) {
                            var r = t.data.search(n);
                            if (r >= 0 && t.data.length > 0) {
                                var o = t.data.match(n),
                                    a = document.createElement("span");
                                a.className = "highlight";
                                var s = t.splitText(r),
                                    l = (s.splitText(o[0].length), s.cloneNode(!0));
                                a.appendChild(l), s.parentNode.replaceChild(a, s), e = 1
                            }
                        } else if (1 === t.nodeType && t.childNodes && !/(script|style)/i.test(t.tagName))
                            for (var d = 0; d < t.childNodes.length; ++d) d += i(t.childNodes[d]);
                        return e
                    };
                return t.each(function() {
                    i(this)
                })
            }
        };
        t.fn.removeHighlight = function() {
            return this.find("span.highlight").each(function() {
                this.parentNode.firstChild.nodeName;
                var t = this.parentNode;
                t.replaceChild(this.firstChild, this), t.normalize()
            }).end()
        };
        var r = function() {};
        r.prototype = {
            on: function(t, e) {
                this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(e)
            },
            off: function(t, e) {
                var n = arguments.length;
                return 0 === n ? delete this._events : 1 === n ? delete this._events[t] : (this._events = this._events || {}, void(t in this._events != !1 && this._events[t].splice(this._events[t].indexOf(e), 1)))
            },
            trigger: function(t) {
                if (this._events = this._events || {}, t in this._events != !1)
                    for (var e = 0; e < this._events[t].length; e++) this._events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        }, r.mixin = function(t) {
            for (var e = ["on", "off", "trigger"], n = 0; n < e.length; n++) t.prototype[e[n]] = r.prototype[e[n]]
        };
        var o = /Mac/.test(navigator.userAgent),
            a = 65,
            s = 13,
            l = 27,
            d = 37,
            u = 38,
            c = 80,
            h = 39,
            f = 40,
            p = 78,
            g = 8,
            m = 46,
            v = 16,
            y = o ? 91 : 17,
            b = o ? 18 : 17,
            x = 9,
            w = 1,
            _ = 2,
            k = !/android/i.test(window.navigator.userAgent) && !!document.createElement("input").validity,
            S = function(t) {
                return "undefined" != typeof t
            },
            C = function(t) {
                return "undefined" == typeof t || null === t ? null : "boolean" == typeof t ? t ? "1" : "0" : t + ""
            },
            D = function(t) {
                return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            },
            M = {};
        M.before = function(t, e, n) {
            var i = t[e];
            t[e] = function() {
                return n.apply(t, arguments), i.apply(t, arguments)
            }
        }, M.after = function(t, e, n) {
            var i = t[e];
            t[e] = function() {
                var e = i.apply(t, arguments);
                return n.apply(t, arguments), e
            }
        };
        var T = function(t) {
                var e = !1;
                return function() {
                    e || (e = !0, t.apply(this, arguments))
                }
            },
            O = function(t, e) {
                var n;
                return function() {
                    var i = this,
                        r = arguments;
                    window.clearTimeout(n), n = window.setTimeout(function() {
                        t.apply(i, r)
                    }, e)
                }
            },
            A = function(t, e, n) {
                var i, r = t.trigger,
                    o = {};
                t.trigger = function() {
                    var n = arguments[0];
                    return e.indexOf(n) === -1 ? r.apply(t, arguments) : void(o[n] = arguments)
                }, n.apply(t, []), t.trigger = r;
                for (i in o) o.hasOwnProperty(i) && r.apply(t, o[i])
            },
            P = function(t, e, n, i) {
                t.on(e, n, function(e) {
                    for (var n = e.target; n && n.parentNode !== t[0];) n = n.parentNode;
                    return e.currentTarget = n, i.apply(this, [e])
                })
            },
            I = function(t) {
                var e = {};
                if ("selectionStart" in t) e.start = t.selectionStart, e.length = t.selectionEnd - e.start;
                else if (document.selection) {
                    t.focus();
                    var n = document.selection.createRange(),
                        i = document.selection.createRange().text.length;
                    n.moveStart("character", -t.value.length), e.start = n.text.length - i, e.length = i
                }
                return e
            },
            F = function(t, e, n) {
                var i, r, o = {};
                if (n)
                    for (i = 0, r = n.length; i < r; i++) o[n[i]] = t.css(n[i]);
                else o = t.css();
                e.css(o)
            },
            E = function(e, n) {
                if (!e) return 0;
                var i = t("<test>").css({
                    position: "absolute",
                    top: -99999,
                    left: -99999,
                    width: "auto",
                    padding: 0,
                    whiteSpace: "pre"
                }).text(e).appendTo("body");
                F(n, i, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
                var r = i.width();
                return i.remove(), r
            },
            L = function(t) {
                var e = null,
                    n = function(n, i) {
                        var r, o, a, s, l, d, u, c;
                        n = n || window.event || {}, i = i || {}, n.metaKey || n.altKey || (i.force || t.data("grow") !== !1) && (r = t.val(), n.type && "keydown" === n.type.toLowerCase() && (o = n.keyCode, a = o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || 32 === o, o === m || o === g ? (c = I(t[0]), c.length ? r = r.substring(0, c.start) + r.substring(c.start + c.length) : o === g && c.start ? r = r.substring(0, c.start - 1) + r.substring(c.start + 1) : o === m && "undefined" != typeof c.start && (r = r.substring(0, c.start) + r.substring(c.start + 1))) : a && (d = n.shiftKey, u = String.fromCharCode(n.keyCode), u = d ? u.toUpperCase() : u.toLowerCase(), r += u)), s = t.attr("placeholder"), !r && s && (r = s), l = E(r, t) + 4, l !== e && (e = l, t.width(l), t.triggerHandler("resize")))
                    };
                t.on("keydown keyup update blur", n), n()
            },
            R = function(t) {
                var e = document.createElement("div");
                return e.appendChild(t.cloneNode(!0)), e.innerHTML
            },
            $ = function(t, e) {
                e || (e = {});
                var n = "Selectize";
                console.error(n + ": " + t), e.explanation && (console.group && console.group(), console.error(e.explanation), console.group && console.groupEnd())
            },
            W = function(n, i) {
                var r, o, a, s, l = this;
                s = n[0], s.selectize = l;
                var d = window.getComputedStyle && window.getComputedStyle(s, null);
                if (a = d ? d.getPropertyValue("direction") : s.currentStyle && s.currentStyle.direction, a = a || n.parents("[dir]:first").attr("dir") || "", t.extend(l, {
                        order: 0,
                        settings: i,
                        $input: n,
                        tabIndex: n.attr("tabindex") || "",
                        tagType: "select" === s.tagName.toLowerCase() ? w : _,
                        rtl: /rtl/i.test(a),
                        eventNS: ".selectize" + ++W.count,
                        highlightedValue: null,
                        isOpen: !1,
                        isDisabled: !1,
                        isRequired: n.is("[required]"),
                        isInvalid: !1,
                        isLocked: !1,
                        isFocused: !1,
                        isInputHidden: !1,
                        isSetup: !1,
                        isShiftDown: !1,
                        isCmdDown: !1,
                        isCtrlDown: !1,
                        ignoreFocus: !1,
                        ignoreBlur: !1,
                        ignoreHover: !1,
                        hasOptions: !1,
                        currentResults: null,
                        lastValue: "",
                        caretPos: 0,
                        loading: 0,
                        loadedSearches: {},
                        $activeOption: null,
                        $activeItems: [],
                        optgroups: {},
                        options: {},
                        userOptions: {},
                        items: [],
                        renderCache: {},
                        onSearchChange: null === i.loadThrottle ? l.onSearchChange : O(l.onSearchChange, i.loadThrottle)
                    }), l.sifter = new e(this.options, {
                        diacritics: i.diacritics
                    }), l.settings.options) {
                    for (r = 0, o = l.settings.options.length; r < o; r++) l.registerOption(l.settings.options[r]);
                    delete l.settings.options
                }
                if (l.settings.optgroups) {
                    for (r = 0, o = l.settings.optgroups.length; r < o; r++) l.registerOptionGroup(l.settings.optgroups[r]);
                    delete l.settings.optgroups
                }
                l.settings.mode = l.settings.mode || (1 === l.settings.maxItems ? "single" : "multi"), "boolean" != typeof l.settings.hideSelected && (l.settings.hideSelected = "multi" === l.settings.mode), l.initializePlugins(l.settings.plugins), l.setupCallbacks(), l.setupTemplates(), l.setup()
            };
        return r.mixin(W), "undefined" != typeof n ? n.mixin(W) : $("Dependency MicroPlugin is missing", {
            explanation: 'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'
        }), t.extend(W.prototype, {
            setup: function() {
                var e, n, i, r, a, s, l, d, u, c, h = this,
                    f = h.settings,
                    p = h.eventNS,
                    g = t(window),
                    m = t(document),
                    x = h.$input;
                if (l = h.settings.mode, d = x.attr("class") || "", e = t("<div>").addClass(f.wrapperClass).addClass(d).addClass(l), n = t("<div>").addClass(f.inputClass).addClass("items").appendTo(e), i = t('<input type="text" autocomplete="off" />').appendTo(n).attr("tabindex", x.is(":disabled") ? "-1" : h.tabIndex), s = t(f.dropdownParent || e), r = t("<div>").addClass(f.dropdownClass).addClass(l).hide().appendTo(s), a = t("<div>").addClass(f.dropdownContentClass).appendTo(r), (c = x.attr("id")) && (i.attr("id", c + "-selectized"), t("label[for='" + c + "']").attr("for", c + "-selectized")), h.settings.copyClassesToDropdown && r.addClass(d), e.css({
                        width: x[0].style.width
                    }), h.plugins.names.length && (u = "plugin-" + h.plugins.names.join(" plugin-"), e.addClass(u), r.addClass(u)), (null === f.maxItems || f.maxItems > 1) && h.tagType === w && x.attr("multiple", "multiple"), h.settings.placeholder && i.attr("placeholder", f.placeholder), !h.settings.splitOn && h.settings.delimiter) {
                    var _ = h.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                    h.settings.splitOn = new RegExp("\\s*" + _ + "+\\s*")
                }
                x.attr("autocorrect") && i.attr("autocorrect", x.attr("autocorrect")), x.attr("autocapitalize") && i.attr("autocapitalize", x.attr("autocapitalize")), h.$wrapper = e, h.$control = n, h.$control_input = i, h.$dropdown = r, h.$dropdown_content = a, r.on("mouseenter", "[data-selectable]", function() {
                    return h.onOptionHover.apply(h, arguments)
                }), r.on("mousedown click", "[data-selectable]", function() {
                    return h.onOptionSelect.apply(h, arguments)
                }), P(n, "mousedown", "*:not(input)", function() {
                    return h.onItemSelect.apply(h, arguments)
                }), L(i), n.on({
                    mousedown: function() {
                        return h.onMouseDown.apply(h, arguments)
                    },
                    click: function() {
                        return h.onClick.apply(h, arguments)
                    }
                }), i.on({
                    mousedown: function(t) {
                        t.stopPropagation()
                    },
                    keydown: function() {
                        return h.onKeyDown.apply(h, arguments)
                    },
                    keyup: function() {
                        return h.onKeyUp.apply(h, arguments)
                    },
                    keypress: function() {
                        return h.onKeyPress.apply(h, arguments)
                    },
                    resize: function() {
                        h.positionDropdown.apply(h, [])
                    },
                    blur: function() {
                        return h.onBlur.apply(h, arguments)
                    },
                    focus: function() {
                        return h.ignoreBlur = !1, h.onFocus.apply(h, arguments)
                    },
                    paste: function() {
                        return h.onPaste.apply(h, arguments)
                    }
                }), m.on("keydown" + p, function(t) {
                    h.isCmdDown = t[o ? "metaKey" : "ctrlKey"], h.isCtrlDown = t[o ? "altKey" : "ctrlKey"], h.isShiftDown = t.shiftKey
                }), m.on("keyup" + p, function(t) {
                    t.keyCode === b && (h.isCtrlDown = !1), t.keyCode === v && (h.isShiftDown = !1), t.keyCode === y && (h.isCmdDown = !1)
                }), m.on("mousedown" + p, function(t) {
                    if (h.isFocused) {
                        if (t.target === h.$dropdown[0] || t.target.parentNode === h.$dropdown[0]) return !1;
                        h.$control.has(t.target).length || t.target === h.$control[0] || h.blur(t.target)
                    }
                }), g.on(["scroll" + p, "resize" + p].join(" "), function() {
                    h.isOpen && h.positionDropdown.apply(h, arguments)
                }), g.on("mousemove" + p, function() {
                    h.ignoreHover = !1
                }), this.revertSettings = {
                    $children: x.children().detach(),
                    tabindex: x.attr("tabindex")
                }, x.attr("tabindex", -1).hide().after(h.$wrapper), t.isArray(f.items) && (h.setValue(f.items), delete f.items), k && x.on("invalid" + p, function(t) {
                    t.preventDefault(), h.isInvalid = !0, h.refreshState()
                }), h.updateOriginalInput(), h.refreshItems(), h.refreshState(), h.updatePlaceholder(), h.isSetup = !0, x.is(":disabled") && h.disable(), h.on("change", this.onChange), x.data("selectize", h), x.addClass("selectized"), h.trigger("initialize"), f.preload === !0 && h.onSearchChange("")
            },
            setupTemplates: function() {
                var e = this,
                    n = e.settings.labelField,
                    i = e.settings.optgroupLabelField,
                    r = {
                        optgroup: function(t) {
                            return '<div class="optgroup">' + t.html + "</div>"
                        },
                        optgroup_header: function(t, e) {
                            return '<div class="optgroup-header">' + e(t[i]) + "</div>"
                        },
                        option: function(t, e) {
                            return '<div class="option">' + e(t[n]) + "</div>"
                        },
                        item: function(t, e) {
                            return '<div class="item">' + e(t[n]) + "</div>"
                        },
                        option_create: function(t, e) {
                            return '<div class="create">Add <strong>' + e(t.input) + "</strong>&hellip;</div>"
                        }
                    };
                e.settings.render = t.extend({}, r, e.settings.render)
            },
            setupCallbacks: function() {
                var t, e, n = {
                    initialize: "onInitialize",
                    change: "onChange",
                    item_add: "onItemAdd",
                    item_remove: "onItemRemove",
                    clear: "onClear",
                    option_add: "onOptionAdd",
                    option_remove: "onOptionRemove",
                    option_clear: "onOptionClear",
                    optgroup_add: "onOptionGroupAdd",
                    optgroup_remove: "onOptionGroupRemove",
                    optgroup_clear: "onOptionGroupClear",
                    dropdown_open: "onDropdownOpen",
                    dropdown_close: "onDropdownClose",
                    type: "onType",
                    load: "onLoad",
                    focus: "onFocus",
                    blur: "onBlur"
                };
                for (t in n) n.hasOwnProperty(t) && (e = this.settings[n[t]], e && this.on(t, e))
            },
            onClick: function(t) {
                var e = this;
                e.isFocused || (e.focus(), t.preventDefault())
            },
            onMouseDown: function(e) {
                var n = this,
                    i = e.isDefaultPrevented();
                t(e.target);
                if (n.isFocused) {
                    if (e.target !== n.$control_input[0]) return "single" === n.settings.mode ? n.isOpen ? n.close() : n.open() : i || n.setActiveItem(null), !1
                } else i || window.setTimeout(function() {
                    n.focus()
                }, 0)
            },
            onChange: function() {
                this.$input.trigger("change")
            },
            onPaste: function(e) {
                var n = this;
                return n.isFull() || n.isInputHidden || n.isLocked ? void e.preventDefault() : void(n.settings.splitOn && setTimeout(function() {
                    var e = n.$control_input.val();
                    if (e.match(n.settings.splitOn))
                        for (var i = t.trim(e).split(n.settings.splitOn), r = 0, o = i.length; r < o; r++) n.createItem(i[r])
                }, 0))
            },
            onKeyPress: function(t) {
                if (this.isLocked) return t && t.preventDefault();
                var e = String.fromCharCode(t.keyCode || t.which);
                return this.settings.create && "multi" === this.settings.mode && e === this.settings.delimiter ? (this.createItem(), t.preventDefault(), !1) : void 0
            },
            onKeyDown: function(t) {
                var e = (t.target === this.$control_input[0], this);
                if (e.isLocked) return void(t.keyCode !== x && t.preventDefault());
                switch (t.keyCode) {
                    case a:
                        if (e.isCmdDown) return void e.selectAll();
                        break;
                    case l:
                        return void(e.isOpen && (t.preventDefault(), t.stopPropagation(), e.close()));
                    case p:
                        if (!t.ctrlKey || t.altKey) break;
                    case f:
                        if (!e.isOpen && e.hasOptions) e.open();
                        else if (e.$activeOption) {
                            e.ignoreHover = !0;
                            var n = e.getAdjacentOption(e.$activeOption, 1);
                            n.length && e.setActiveOption(n, !0, !0)
                        }
                        return void t.preventDefault();
                    case c:
                        if (!t.ctrlKey || t.altKey) break;
                    case u:
                        if (e.$activeOption) {
                            e.ignoreHover = !0;
                            var i = e.getAdjacentOption(e.$activeOption, -1);
                            i.length && e.setActiveOption(i, !0, !0)
                        }
                        return void t.preventDefault();
                    case s:
                        return void(e.isOpen && e.$activeOption && (e.onOptionSelect({
                            currentTarget: e.$activeOption
                        }), t.preventDefault()));
                    case d:
                        return void e.advanceSelection(-1, t);
                    case h:
                        return void e.advanceSelection(1, t);
                    case x:
                        return e.settings.selectOnTab && e.isOpen && e.$activeOption && (e.onOptionSelect({
                            currentTarget: e.$activeOption
                        }), e.isFull() || t.preventDefault()), void(e.settings.create && e.createItem() && t.preventDefault());
                    case g:
                    case m:
                        return void e.deleteSelection(t)
                }
                return !e.isFull() && !e.isInputHidden || (o ? t.metaKey : t.ctrlKey) ? void 0 : void t.preventDefault()
            },
            onKeyUp: function(t) {
                var e = this;
                if (e.isLocked) return t && t.preventDefault();
                var n = e.$control_input.val() || "";
                e.lastValue !== n && (e.lastValue = n, e.onSearchChange(n), e.refreshOptions(), e.trigger("type", n))
            },
            onSearchChange: function(t) {
                var e = this,
                    n = e.settings.load;
                n && (e.loadedSearches.hasOwnProperty(t) || (e.loadedSearches[t] = !0, e.load(function(i) {
                    n.apply(e, [t, i])
                })))
            },
            onFocus: function(t) {
                var e = this,
                    n = e.isFocused;
                return e.isDisabled ? (e.blur(), t && t.preventDefault(), !1) : void(e.ignoreFocus || (e.isFocused = !0, "focus" === e.settings.preload && e.onSearchChange(""), n || e.trigger("focus"), e.$activeItems.length || (e.showInput(), e.setActiveItem(null), e.refreshOptions(!!e.settings.openOnFocus)), e.refreshState()))
            },
            onBlur: function(t, e) {
                var n = this;
                if (n.isFocused && (n.isFocused = !1, !n.ignoreFocus)) {
                    if (!n.ignoreBlur && document.activeElement === n.$dropdown_content[0]) return n.ignoreBlur = !0, void n.onFocus(t);
                    var i = function() {
                        n.close(), n.setTextboxValue(""), n.setActiveItem(null), n.setActiveOption(null), n.setCaret(n.items.length), n.refreshState(), e && e.focus && e.focus(), n.ignoreFocus = !1, n.trigger("blur")
                    };
                    n.ignoreFocus = !0, n.settings.create && n.settings.createOnBlur ? n.createItem(null, !1, i) : i()
                }
            },
            onOptionHover: function(t) {
                this.ignoreHover || this.setActiveOption(t.currentTarget, !1)
            },
            onOptionSelect: function(e) {
                var n, i, r = this;
                e.preventDefault && (e.preventDefault(), e.stopPropagation()), i = t(e.currentTarget), i.hasClass("create") ? r.createItem(null, function() {
                    r.settings.closeAfterSelect && r.close()
                }) : (n = i.attr("data-value"), "undefined" != typeof n && (r.lastQuery = null, r.setTextboxValue(""), r.addItem(n), r.settings.closeAfterSelect ? r.close() : !r.settings.hideSelected && e.type && /mouse/.test(e.type) && r.setActiveOption(r.getOption(n))))
            },
            onItemSelect: function(t) {
                var e = this;
                e.isLocked || "multi" === e.settings.mode && (t.preventDefault(), e.setActiveItem(t.currentTarget, t))
            },
            load: function(t) {
                var e = this,
                    n = e.$wrapper.addClass(e.settings.loadingClass);
                e.loading++, t.apply(e, [function(t) {
                    e.loading = Math.max(e.loading - 1, 0), t && t.length && (e.addOption(t), e.refreshOptions(e.isFocused && !e.isInputHidden)), e.loading || n.removeClass(e.settings.loadingClass), e.trigger("load", t)
                }])
            },
            setTextboxValue: function(t) {
                var e = this.$control_input,
                    n = e.val() !== t;
                n && (e.val(t).triggerHandler("update"), this.lastValue = t)
            },
            getValue: function() {
                return this.tagType === w && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
            },
            setValue: function(t, e) {
                var n = e ? [] : ["change"];
                A(this, n, function() {
                    this.clear(e), this.addItems(t, e)
                })
            },
            setActiveItem: function(e, n) {
                var i, r, o, a, s, l, d, u, c = this;
                if ("single" !== c.settings.mode) {
                    if (e = t(e), !e.length) return t(c.$activeItems).removeClass("active"), c.$activeItems = [], void(c.isFocused && c.showInput());
                    if (i = n && n.type.toLowerCase(), "mousedown" === i && c.isShiftDown && c.$activeItems.length) {
                        for (u = c.$control.children(".active:last"), a = Array.prototype.indexOf.apply(c.$control[0].childNodes, [u[0]]), s = Array.prototype.indexOf.apply(c.$control[0].childNodes, [e[0]]), a > s && (d = a, a = s, s = d), r = a; r <= s; r++) l = c.$control[0].childNodes[r], c.$activeItems.indexOf(l) === -1 && (t(l).addClass("active"), c.$activeItems.push(l));
                        n.preventDefault()
                    } else "mousedown" === i && c.isCtrlDown || "keydown" === i && this.isShiftDown ? e.hasClass("active") ? (o = c.$activeItems.indexOf(e[0]), c.$activeItems.splice(o, 1), e.removeClass("active")) : c.$activeItems.push(e.addClass("active")[0]) : (t(c.$activeItems).removeClass("active"), c.$activeItems = [e.addClass("active")[0]]);
                    c.hideInput(), this.isFocused || c.focus()
                }
            },
            setActiveOption: function(e, n, i) {
                var r, o, a, s, l, d = this;
                d.$activeOption && d.$activeOption.removeClass("active"), d.$activeOption = null, e = t(e), e.length && (d.$activeOption = e.addClass("active"), !n && S(n) || (r = d.$dropdown_content.height(), o = d.$activeOption.outerHeight(!0), n = d.$dropdown_content.scrollTop() || 0, a = d.$activeOption.offset().top - d.$dropdown_content.offset().top + n, s = a, l = a - r + o, a + o > r + n ? d.$dropdown_content.stop().animate({
                    scrollTop: l
                }, i ? d.settings.scrollDuration : 0) : a < n && d.$dropdown_content.stop().animate({
                    scrollTop: s
                }, i ? d.settings.scrollDuration : 0)))
            },
            selectAll: function() {
                var t = this;
                "single" !== t.settings.mode && (t.$activeItems = Array.prototype.slice.apply(t.$control.children(":not(input)").addClass("active")), t.$activeItems.length && (t.hideInput(), t.close()), t.focus())
            },
            hideInput: function() {
                var t = this;
                t.setTextboxValue(""), t.$control_input.css({
                    opacity: 0,
                    position: "absolute",
                    left: t.rtl ? 1e4 : -1e4
                }), t.isInputHidden = !0
            },
            showInput: function() {
                this.$control_input.css({
                    opacity: 1,
                    position: "relative",
                    left: 0
                }), this.isInputHidden = !1
            },
            focus: function() {
                var t = this;
                t.isDisabled || (t.ignoreFocus = !0, t.$control_input[0].focus(), window.setTimeout(function() {
                    t.ignoreFocus = !1, t.onFocus()
                }, 0))
            },
            blur: function(t) {
                this.$control_input[0].blur(), this.onBlur(null, t)
            },
            getScoreFunction: function(t) {
                return this.sifter.getScoreFunction(t, this.getSearchOptions())
            },
            getSearchOptions: function() {
                var t = this.settings,
                    e = t.sortField;
                return "string" == typeof e && (e = [{
                    field: e
                }]), {
                    fields: t.searchField,
                    conjunction: t.searchConjunction,
                    sort: e
                }
            },
            search: function(e) {
                var n, i, r, o = this,
                    a = o.settings,
                    s = this.getSearchOptions();
                if (a.score && (r = o.settings.score.apply(this, [e]), "function" != typeof r)) throw new Error('Selectize "score" setting must be a function that returns a function');
                if (e !== o.lastQuery ? (o.lastQuery = e, i = o.sifter.search(e, t.extend(s, {
                        score: r
                    })), o.currentResults = i) : i = t.extend(!0, {}, o.currentResults), a.hideSelected)
                    for (n = i.items.length - 1; n >= 0; n--) o.items.indexOf(C(i.items[n].id)) !== -1 && i.items.splice(n, 1);
                return i
            },
            refreshOptions: function(e) {
                var n, r, o, a, s, l, d, u, c, h, f, p, g, m, v, y;
                "undefined" == typeof e && (e = !0);
                var b = this,
                    x = t.trim(b.$control_input.val()),
                    w = b.search(x),
                    _ = b.$dropdown_content,
                    k = b.$activeOption && C(b.$activeOption.attr("data-value"));
                for (a = w.items.length, "number" == typeof b.settings.maxOptions && (a = Math.min(a, b.settings.maxOptions)), s = {}, l = [], n = 0; n < a; n++)
                    for (d = b.options[w.items[n].id], u = b.render("option", d), c = d[b.settings.optgroupField] || "", h = t.isArray(c) ? c : [c], r = 0, o = h && h.length; r < o; r++) c = h[r], b.optgroups.hasOwnProperty(c) || (c = ""), s.hasOwnProperty(c) || (s[c] = document.createDocumentFragment(), l.push(c)), s[c].appendChild(u);
                for (this.settings.lockOptgroupOrder && l.sort(function(t, e) {
                        var n = b.optgroups[t].$order || 0,
                            i = b.optgroups[e].$order || 0;
                        return n - i
                    }), f = document.createDocumentFragment(), n = 0, a = l.length; n < a; n++) c = l[n], b.optgroups.hasOwnProperty(c) && s[c].childNodes.length ? (p = document.createDocumentFragment(), p.appendChild(b.render("optgroup_header", b.optgroups[c])), p.appendChild(s[c]), f.appendChild(b.render("optgroup", t.extend({}, b.optgroups[c], {
                    html: R(p),
                    dom: p
                })))) : f.appendChild(s[c]);
                if (_.html(f), b.settings.highlight && w.query.length && w.tokens.length)
                    for (_.removeHighlight(), n = 0, a = w.tokens.length; n < a; n++) i(_, w.tokens[n].regex);
                if (!b.settings.hideSelected)
                    for (n = 0, a = b.items.length; n < a; n++) b.getOption(b.items[n]).addClass("selected");
                g = b.canCreate(x), g && (_.prepend(b.render("option_create", {
                    input: x
                })), y = t(_[0].childNodes[0])), b.hasOptions = w.items.length > 0 || g, b.hasOptions ? (w.items.length > 0 ? (v = k && b.getOption(k), v && v.length ? m = v : "single" === b.settings.mode && b.items.length && (m = b.getOption(b.items[0])), m && m.length || (m = y && !b.settings.addPrecedence ? b.getAdjacentOption(y, 1) : _.find("[data-selectable]:first"))) : m = y, b.setActiveOption(m), e && !b.isOpen && b.open()) : (b.setActiveOption(null), e && b.isOpen && b.close())
            },
            addOption: function(e) {
                var n, i, r, o = this;
                if (t.isArray(e))
                    for (n = 0, i = e.length; n < i; n++) o.addOption(e[n]);
                else(r = o.registerOption(e)) && (o.userOptions[r] = !0, o.lastQuery = null, o.trigger("option_add", r, e))
            },
            registerOption: function(t) {
                var e = C(t[this.settings.valueField]);
                return "undefined" != typeof e && null !== e && !this.options.hasOwnProperty(e) && (t.$order = t.$order || ++this.order, this.options[e] = t, e)
            },
            registerOptionGroup: function(t) {
                var e = C(t[this.settings.optgroupValueField]);
                return !!e && (t.$order = t.$order || ++this.order, this.optgroups[e] = t, e)
            },
            addOptionGroup: function(t, e) {
                e[this.settings.optgroupValueField] = t, (t = this.registerOptionGroup(e)) && this.trigger("optgroup_add", t, e)
            },
            removeOptionGroup: function(t) {
                this.optgroups.hasOwnProperty(t) && (delete this.optgroups[t], this.renderCache = {}, this.trigger("optgroup_remove", t))
            },
            clearOptionGroups: function() {
                this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear")
            },
            updateOption: function(e, n) {
                var i, r, o, a, s, l, d, u = this;
                if (e = C(e), o = C(n[u.settings.valueField]), null !== e && u.options.hasOwnProperty(e)) {
                    if ("string" != typeof o) throw new Error("Value must be set in option data");
                    d = u.options[e].$order, o !== e && (delete u.options[e], a = u.items.indexOf(e), a !== -1 && u.items.splice(a, 1, o)), n.$order = n.$order || d, u.options[o] = n, s = u.renderCache.item, l = u.renderCache.option, s && (delete s[e], delete s[o]), l && (delete l[e], delete l[o]), u.items.indexOf(o) !== -1 && (i = u.getItem(e), r = t(u.render("item", n)), i.hasClass("active") && r.addClass("active"), i.replaceWith(r)), u.lastQuery = null, u.isOpen && u.refreshOptions(!1)
                }
            },
            removeOption: function(t, e) {
                var n = this;
                t = C(t);
                var i = n.renderCache.item,
                    r = n.renderCache.option;
                i && delete i[t], r && delete r[t], delete n.userOptions[t], delete n.options[t], n.lastQuery = null, n.trigger("option_remove", t), n.removeItem(t, e)
            },
            clearOptions: function() {
                var t = this;
                t.loadedSearches = {}, t.userOptions = {}, t.renderCache = {}, t.options = t.sifter.items = {}, t.lastQuery = null, t.trigger("option_clear"), t.clear()
            },
            getOption: function(t) {
                return this.getElementWithValue(t, this.$dropdown_content.find("[data-selectable]"))
            },
            getAdjacentOption: function(e, n) {
                var i = this.$dropdown.find("[data-selectable]"),
                    r = i.index(e) + n;
                return r >= 0 && r < i.length ? i.eq(r) : t()
            },
            getElementWithValue: function(e, n) {
                if (e = C(e), "undefined" != typeof e && null !== e)
                    for (var i = 0, r = n.length; i < r; i++)
                        if (n[i].getAttribute("data-value") === e) return t(n[i]);
                return t()
            },
            getItem: function(t) {
                return this.getElementWithValue(t, this.$control.children())
            },
            addItems: function(e, n) {
                for (var i = t.isArray(e) ? e : [e], r = 0, o = i.length; r < o; r++) this.isPending = r < o - 1, this.addItem(i[r], n)
            },
            addItem: function(e, n) {
                var i = n ? [] : ["change"];
                A(this, i, function() {
                    var i, r, o, a, s, l = this,
                        d = l.settings.mode;
                    return e = C(e), l.items.indexOf(e) !== -1 ? void("single" === d && l.close()) : void(l.options.hasOwnProperty(e) && ("single" === d && l.clear(n), "multi" === d && l.isFull() || (i = t(l.render("item", l.options[e])), s = l.isFull(), l.items.splice(l.caretPos, 0, e), l.insertAtCaret(i), (!l.isPending || !s && l.isFull()) && l.refreshState(), l.isSetup && (o = l.$dropdown_content.find("[data-selectable]"), l.isPending || (r = l.getOption(e), a = l.getAdjacentOption(r, 1).attr("data-value"), l.refreshOptions(l.isFocused && "single" !== d), a && l.setActiveOption(l.getOption(a))), !o.length || l.isFull() ? l.close() : l.positionDropdown(), l.updatePlaceholder(), l.trigger("item_add", e, i), l.updateOriginalInput({
                        silent: n
                    })))))
                })
            },
            removeItem: function(e, n) {
                var i, r, o, a = this;
                i = e instanceof t ? e : a.getItem(e), e = C(i.attr("data-value")), r = a.items.indexOf(e), r !== -1 && (i.remove(), i.hasClass("active") && (o = a.$activeItems.indexOf(i[0]), a.$activeItems.splice(o, 1)), a.items.splice(r, 1), a.lastQuery = null, !a.settings.persist && a.userOptions.hasOwnProperty(e) && a.removeOption(e, n), r < a.caretPos && a.setCaret(a.caretPos - 1), a.refreshState(), a.updatePlaceholder(), a.updateOriginalInput({
                    silent: n
                }), a.positionDropdown(), a.trigger("item_remove", e, i))
            },
            createItem: function(e, n) {
                var i = this,
                    r = i.caretPos;
                e = e || t.trim(i.$control_input.val() || "");
                var o = arguments[arguments.length - 1];
                if ("function" != typeof o && (o = function() {}), "boolean" != typeof n && (n = !0), !i.canCreate(e)) return o(), !1;
                i.lock();
                var a = "function" == typeof i.settings.create ? this.settings.create : function(t) {
                        var e = {};
                        return e[i.settings.labelField] = t, e[i.settings.valueField] = t, e
                    },
                    s = T(function(t) {
                        if (i.unlock(), !t || "object" != typeof t) return o();
                        var e = C(t[i.settings.valueField]);
                        return "string" != typeof e ? o() : (i.setTextboxValue(""), i.addOption(t), i.setCaret(r), i.addItem(e), i.refreshOptions(n && "single" !== i.settings.mode), void o(t))
                    }),
                    l = a.apply(this, [e, s]);
                return "undefined" != typeof l && s(l), !0
            },
            refreshItems: function() {
                this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput()
            },
            refreshState: function() {
                this.refreshValidityState(), this.refreshClasses()
            },
            refreshValidityState: function() {
                if (!this.isRequired) return !1;
                var t = !this.items.length;
                this.isInvalid = t, this.$control_input.prop("required", t), this.$input.prop("required", !t)
            },
            refreshClasses: function() {
                var e = this,
                    n = e.isFull(),
                    i = e.isLocked;
                e.$wrapper.toggleClass("rtl", e.rtl), e.$control.toggleClass("focus", e.isFocused).toggleClass("disabled", e.isDisabled).toggleClass("required", e.isRequired).toggleClass("invalid", e.isInvalid).toggleClass("locked", i).toggleClass("full", n).toggleClass("not-full", !n).toggleClass("input-active", e.isFocused && !e.isInputHidden).toggleClass("dropdown-active", e.isOpen).toggleClass("has-options", !t.isEmptyObject(e.options)).toggleClass("has-items", e.items.length > 0), e.$control_input.data("grow", !n && !i)
            },
            isFull: function() {
                return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
            },
            updateOriginalInput: function(t) {
                var e, n, i, r, o = this;
                if (t = t || {}, o.tagType === w) {
                    for (i = [], e = 0, n = o.items.length; e < n; e++) r = o.options[o.items[e]][o.settings.labelField] || "", i.push('<option value="' + D(o.items[e]) + '" selected="selected">' + D(r) + "</option>");
                    i.length || this.$input.attr("multiple") || i.push('<option value="" selected="selected"></option>'), o.$input.html(i.join(""))
                } else o.$input.val(o.getValue()), o.$input.attr("value", o.$input.val());
                o.isSetup && (t.silent || o.trigger("change", o.$input.val()))
            },
            updatePlaceholder: function() {
                if (this.settings.placeholder) {
                    var t = this.$control_input;
                    this.items.length ? t.removeAttr("placeholder") : t.attr("placeholder", this.settings.placeholder), t.triggerHandler("update", {
                        force: !0
                    })
                }
            },
            open: function() {
                var t = this;
                t.isLocked || t.isOpen || "multi" === t.settings.mode && t.isFull() || (t.focus(), t.isOpen = !0, t.refreshState(), t.$dropdown.css({
                    visibility: "hidden",
                    display: "block"
                }), t.positionDropdown(), t.$dropdown.css({
                    visibility: "visible"
                }), t.trigger("dropdown_open", t.$dropdown))
            },
            close: function() {
                var t = this,
                    e = t.isOpen;
                "single" === t.settings.mode && t.items.length && (t.hideInput(), t.$control_input.blur()), t.isOpen = !1, t.$dropdown.hide(), t.setActiveOption(null), t.refreshState(), e && t.trigger("dropdown_close", t.$dropdown)
            },
            positionDropdown: function() {
                var t = this.$control,
                    e = "body" === this.settings.dropdownParent ? t.offset() : t.position();
                e.top += t.outerHeight(!0), this.$dropdown.css({
                    width: t.outerWidth(),
                    top: e.top,
                    left: e.left
                })
            },
            clear: function(t) {
                var e = this;
                e.items.length && (e.$control.children(":not(input)").remove(), e.items = [], e.lastQuery = null, e.setCaret(0), e.setActiveItem(null), e.updatePlaceholder(), e.updateOriginalInput({
                    silent: t
                }), e.refreshState(), e.showInput(), e.trigger("clear"))
            },
            insertAtCaret: function(e) {
                var n = Math.min(this.caretPos, this.items.length);
                0 === n ? this.$control.prepend(e) : t(this.$control[0].childNodes[n]).before(e), this.setCaret(n + 1)
            },
            deleteSelection: function(e) {
                var n, i, r, o, a, s, l, d, u, c = this;
                if (r = e && e.keyCode === g ? -1 : 1, o = I(c.$control_input[0]), c.$activeOption && !c.settings.hideSelected && (l = c.getAdjacentOption(c.$activeOption, -1).attr("data-value")), a = [], c.$activeItems.length) {
                    for (u = c.$control.children(".active:" + (r > 0 ? "last" : "first")), s = c.$control.children(":not(input)").index(u), r > 0 && s++, n = 0, i = c.$activeItems.length; n < i; n++) a.push(t(c.$activeItems[n]).attr("data-value"));
                    e && (e.preventDefault(), e.stopPropagation())
                } else(c.isFocused || "single" === c.settings.mode) && c.items.length && (r < 0 && 0 === o.start && 0 === o.length ? a.push(c.items[c.caretPos - 1]) : r > 0 && o.start === c.$control_input.val().length && a.push(c.items[c.caretPos]));
                if (!a.length || "function" == typeof c.settings.onDelete && c.settings.onDelete.apply(c, [a]) === !1) return !1;
                for ("undefined" != typeof s && c.setCaret(s); a.length;) c.removeItem(a.pop());
                return c.showInput(), c.positionDropdown(), c.refreshOptions(!0), l && (d = c.getOption(l), d.length && c.setActiveOption(d)), !0
            },
            advanceSelection: function(t, e) {
                var n, i, r, o, a, s, l = this;
                0 !== t && (l.rtl && (t *= -1), n = t > 0 ? "last" : "first", i = I(l.$control_input[0]), l.isFocused && !l.isInputHidden ? (o = l.$control_input.val().length, a = t < 0 ? 0 === i.start && 0 === i.length : i.start === o, a && !o && l.advanceCaret(t, e)) : (s = l.$control.children(".active:" + n), s.length && (r = l.$control.children(":not(input)").index(s), l.setActiveItem(null), l.setCaret(t > 0 ? r + 1 : r))))
            },
            advanceCaret: function(t, e) {
                var n, i, r = this;
                0 !== t && (n = t > 0 ? "next" : "prev", r.isShiftDown ? (i = r.$control_input[n](), i.length && (r.hideInput(), r.setActiveItem(i), e && e.preventDefault())) : r.setCaret(r.caretPos + t))
            },
            setCaret: function(e) {
                var n = this;
                if (e = "single" === n.settings.mode ? n.items.length : Math.max(0, Math.min(n.items.length, e)), !n.isPending) {
                    var i, r, o, a;
                    for (o = n.$control.children(":not(input)"), i = 0, r = o.length; i < r; i++) a = t(o[i]).detach(), i < e ? n.$control_input.before(a) : n.$control.append(a)
                }
                n.caretPos = e
            },
            lock: function() {
                this.close(), this.isLocked = !0, this.refreshState()
            },
            unlock: function() {
                this.isLocked = !1, this.refreshState()
            },
            disable: function() {
                var t = this;
                t.$input.prop("disabled", !0), t.$control_input.prop("disabled", !0).prop("tabindex", -1), t.isDisabled = !0, t.lock()
            },
            enable: function() {
                var t = this;
                t.$input.prop("disabled", !1), t.$control_input.prop("disabled", !1).prop("tabindex", t.tabIndex), t.isDisabled = !1, t.unlock()
            },
            destroy: function() {
                var e = this,
                    n = e.eventNS,
                    i = e.revertSettings;
                e.trigger("destroy"), e.off(), e.$wrapper.remove(), e.$dropdown.remove(), e.$input.html("").append(i.$children).removeAttr("tabindex").removeClass("selectized").attr({
                    tabindex: i.tabindex
                }).show(), e.$control_input.removeData("grow"), e.$input.removeData("selectize"), t(window).off(n), t(document).off(n), t(document.body).off(n), delete e.$input[0].selectize
            },
            render: function(e, n) {
                var i, r, o = "",
                    a = !1,
                    s = this;
                return "option" !== e && "item" !== e || (i = C(n[s.settings.valueField]), a = !!i), a && (S(s.renderCache[e]) || (s.renderCache[e] = {}), s.renderCache[e].hasOwnProperty(i)) ? s.renderCache[e][i] : (o = t(s.settings.render[e].apply(this, [n, D])), "option" === e || "option_create" === e ? o.attr("data-selectable", "") : "optgroup" === e && (r = n[s.settings.optgroupValueField] || "", o.attr("data-group", r)), "option" !== e && "item" !== e || o.attr("data-value", i || ""), a && (s.renderCache[e][i] = o[0]), o[0])
            },
            clearCache: function(t) {
                var e = this;
                "undefined" == typeof t ? e.renderCache = {} : delete e.renderCache[t]
            },
            canCreate: function(t) {
                var e = this;
                if (!e.settings.create) return !1;
                var n = e.settings.createFilter;
                return t.length && ("function" != typeof n || n.apply(e, [t])) && ("string" != typeof n || new RegExp(n).test(t)) && (!(n instanceof RegExp) || n.test(t))
            }
        }), W.count = 0, W.defaults = {
            options: [],
            optgroups: [],
            plugins: [],
            delimiter: ",",
            splitOn: null,
            persist: !0,
            diacritics: !0,
            create: !1,
            createOnBlur: !1,
            createFilter: null,
            highlight: !0,
            openOnFocus: !0,
            maxOptions: 1e3,
            maxItems: null,
            hideSelected: null,
            addPrecedence: !1,
            selectOnTab: !1,
            preload: !1,
            allowEmptyOption: !1,
            closeAfterSelect: !1,
            scrollDuration: 60,
            loadThrottle: 300,
            loadingClass: "loading",
            dataAttr: "data-data",
            optgroupField: "optgroup",
            valueField: "value",
            labelField: "text",
            optgroupLabelField: "label",
            optgroupValueField: "value",
            lockOptgroupOrder: !1,
            sortField: "$order",
            searchField: ["text"],
            searchConjunction: "and",
            mode: null,
            wrapperClass: "selectize-control",
            inputClass: "selectize-input",
            dropdownClass: "selectize-dropdown",
            dropdownContentClass: "selectize-dropdown-content",
            dropdownParent: null,
            copyClassesToDropdown: !0,
            render: {}
        }, t.fn.selectize = function(e) {
            var n = t.fn.selectize.defaults,
                i = t.extend({}, n, e),
                r = i.dataAttr,
                o = i.labelField,
                a = i.valueField,
                s = i.optgroupField,
                l = i.optgroupLabelField,
                d = i.optgroupValueField,
                u = function(e, n) {
                    var s, l, d, u, c = e.attr(r);
                    if (c)
                        for (n.options = JSON.parse(c), s = 0, l = n.options.length; s < l; s++) n.items.push(n.options[s][a]);
                    else {
                        var h = t.trim(e.val() || "");
                        if (!i.allowEmptyOption && !h.length) return;
                        for (d = h.split(i.delimiter), s = 0, l = d.length; s < l; s++) u = {}, u[o] = d[s], u[a] = d[s], n.options.push(u);
                        n.items = d
                    }
                },
                c = function(e, n) {
                    var u, c, h, f, p = n.options,
                        g = {},
                        m = function(t) {
                            var e = r && t.attr(r);
                            return "string" == typeof e && e.length ? JSON.parse(e) : null
                        },
                        v = function(e, r) {
                            e = t(e);
                            var l = C(e.val());
                            if (l || i.allowEmptyOption)
                                if (g.hasOwnProperty(l)) {
                                    if (r) {
                                        var d = g[l][s];
                                        d ? t.isArray(d) ? d.push(r) : g[l][s] = [d, r] : g[l][s] = r
                                    }
                                } else {
                                    var u = m(e) || {};
                                    u[o] = u[o] || e.text(), u[a] = u[a] || l, u[s] = u[s] || r, g[l] = u, p.push(u), e.is(":selected") && n.items.push(l)
                                }
                        },
                        y = function(e) {
                            var i, r, o, a, s;
                            for (e = t(e), o = e.attr("label"), o && (a = m(e) || {}, a[l] = o, a[d] = o, n.optgroups.push(a)), s = t("option", e), i = 0, r = s.length; i < r; i++) v(s[i], o)
                        };
                    for (n.maxItems = e.attr("multiple") ? null : 1, f = e.children(), u = 0, c = f.length; u < c; u++) h = f[u].tagName.toLowerCase(), "optgroup" === h ? y(f[u]) : "option" === h && v(f[u])
                };
            return this.each(function() {
                if (!this.selectize) {
                    var r, o = t(this),
                        a = this.tagName.toLowerCase(),
                        s = o.attr("placeholder") || o.attr("data-placeholder");
                    s || i.allowEmptyOption || (s = o.children('option[value=""]').text());
                    var l = {
                        placeholder: s,
                        options: [],
                        optgroups: [],
                        items: []
                    };
                    "select" === a ? c(o, l) : u(o, l), r = new W(o, t.extend(!0, {}, n, l, e))
                }
            })
        }, t.fn.selectize.defaults = W.defaults, t.fn.selectize.support = {
            validity: k
        }, W.define("drag_drop", function() {
            if (!t.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
            if ("multi" === this.settings.mode) {
                var e = this;
                e.lock = function() {
                    var t = e.lock;
                    return function() {
                        var n = e.$control.data("sortable");
                        return n && n.disable(), t.apply(e, arguments)
                    }
                }(), e.unlock = function() {
                    var t = e.unlock;
                    return function() {
                        var n = e.$control.data("sortable");
                        return n && n.enable(), t.apply(e, arguments)
                    }
                }(), e.setup = function() {
                    var n = e.setup;
                    return function() {
                        n.apply(this, arguments);
                        var i = e.$control.sortable({
                            items: "[data-value]",
                            forcePlaceholderSize: !0,
                            disabled: e.isLocked,
                            start: function(t, e) {
                                e.placeholder.css("width", e.helper.css("width")), i.css({
                                    overflow: "visible"
                                })
                            },
                            stop: function() {
                                i.css({
                                    overflow: "hidden"
                                });
                                var n = e.$activeItems ? e.$activeItems.slice() : null,
                                    r = [];
                                i.children("[data-value]").each(function() {
                                    r.push(t(this).attr("data-value"))
                                }), e.setValue(r), e.setActiveItem(n)
                            }
                        })
                    }
                }()
            }
        }), W.define("dropdown_header", function(e) {
            var n = this;
            e = t.extend({
                title: "Untitled",
                headerClass: "selectize-dropdown-header",
                titleRowClass: "selectize-dropdown-header-title",
                labelClass: "selectize-dropdown-header-label",
                closeClass: "selectize-dropdown-header-close",
                html: function(t) {
                    return '<div class="' + t.headerClass + '"><div class="' + t.titleRowClass + '"><span class="' + t.labelClass + '">' + t.title + '</span><a href="javascript:void(0)" class="' + t.closeClass + '">&times;</a></div></div>'
                }
            }, e), n.setup = function() {
                var i = n.setup;
                return function() {
                    i.apply(n, arguments), n.$dropdown_header = t(e.html(e)), n.$dropdown.prepend(n.$dropdown_header)
                }
            }()
        }), W.define("optgroup_columns", function(e) {
            var n = this;
            e = t.extend({
                equalizeWidth: !0,
                equalizeHeight: !0
            }, e), this.getAdjacentOption = function(e, n) {
                var i = e.closest("[data-group]").find("[data-selectable]"),
                    r = i.index(e) + n;
                return r >= 0 && r < i.length ? i.eq(r) : t()
            }, this.onKeyDown = function() {
                var t = n.onKeyDown;
                return function(e) {
                    var i, r, o, a;
                    return !this.isOpen || e.keyCode !== d && e.keyCode !== h ? t.apply(this, arguments) : (n.ignoreHover = !0, a = this.$activeOption.closest("[data-group]"), i = a.find("[data-selectable]").index(this.$activeOption), a = e.keyCode === d ? a.prev("[data-group]") : a.next("[data-group]"), o = a.find("[data-selectable]"), r = o.eq(Math.min(o.length - 1, i)), void(r.length && this.setActiveOption(r)))
                }
            }();
            var i = function() {
                    var t, e = i.width,
                        n = document;
                    return "undefined" == typeof e && (t = n.createElement("div"), t.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', t = t.firstChild, n.body.appendChild(t), e = i.width = t.offsetWidth - t.clientWidth, n.body.removeChild(t)), e
                },
                r = function() {
                    var r, o, a, s, l, d, u;
                    if (u = t("[data-group]", n.$dropdown_content), o = u.length, o && n.$dropdown_content.width()) {
                        if (e.equalizeHeight) {
                            for (a = 0, r = 0; r < o; r++) a = Math.max(a, u.eq(r).height());
                            u.css({
                                height: a
                            })
                        }
                        e.equalizeWidth && (d = n.$dropdown_content.innerWidth() - i(), s = Math.round(d / o), u.css({
                            width: s
                        }), o > 1 && (l = d - s * (o - 1), u.eq(o - 1).css({
                            width: l
                        })))
                    }
                };
            (e.equalizeHeight || e.equalizeWidth) && (M.after(this, "positionDropdown", r), M.after(this, "refreshOptions", r))
        }), W.define("remove_button", function(e) {
            e = t.extend({
                label: "&times;",
                title: "Remove",
                className: "remove",
                append: !0
            }, e);
            var n = function(e, n) {
                    n.className = "remove-single";
                    var i = e,
                        r = '<a href="javascript:void(0)" class="' + n.className + '" tabindex="-1" title="' + D(n.title) + '">' + n.label + "</a>",
                        o = function(t, e) {
                            return t + e
                        };
                    e.setup = function() {
                        var a = i.setup;
                        return function() {
                            if (n.append) {
                                var s = t(i.$input.context).attr("id"),
                                    l = (t("#" + s), i.settings.render.item);
                                i.settings.render.item = function() {
                                    return o(l.apply(e, arguments), r)
                                }
                            }
                            a.apply(e, arguments), e.$control.on("click", "." + n.className, function(t) {
                                t.preventDefault(), i.isLocked || i.clear()
                            })
                        }
                    }()
                },
                i = function(e, n) {
                    var i = e,
                        r = '<a href="javascript:void(0)" class="' + n.className + '" tabindex="-1" title="' + D(n.title) + '">' + n.label + "</a>",
                        o = function(t, e) {
                            var n = t.search(/(<\/[^>]+>\s*)$/);
                            return t.substring(0, n) + e + t.substring(n)
                        };
                    e.setup = function() {
                        var a = i.setup;
                        return function() {
                            if (n.append) {
                                var s = i.settings.render.item;
                                i.settings.render.item = function() {
                                    return o(s.apply(e, arguments), r)
                                }
                            }
                            a.apply(e, arguments), e.$control.on("click", "." + n.className, function(e) {
                                if (e.preventDefault(), !i.isLocked) {
                                    var n = t(e.currentTarget).parent();
                                    i.setActiveItem(n), i.deleteSelection() && i.setCaret(i.items.length)
                                }
                            })
                        }
                    }()
                };
            return "single" === this.settings.mode ? void n(this, e) : void i(this, e)
        }), W.define("restore_on_backspace", function(t) {
            var e = this;
            t.text = t.text || function(t) {
                return t[this.settings.labelField]
            }, this.onKeyDown = function() {
                var n = e.onKeyDown;
                return function(e) {
                    var i, r;
                    return e.keyCode === g && "" === this.$control_input.val() && !this.$activeItems.length && (i = this.caretPos - 1, i >= 0 && i < this.items.length) ? (r = this.options[this.items[i]], this.deleteSelection(e) && (this.setTextboxValue(t.text.apply(this, [r])), this.refreshOptions(!0)), void e.preventDefault()) : n.apply(this, arguments)
                }
            }()
        }), W
    }),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
    }(this, function() {
        "use strict";

        function t() {
            return fi.apply(null, arguments)
        }

        function e(t) {
            fi = t
        }

        function n(t) {
            return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
        }

        function i(t) {
            return null != t && "[object Object]" === Object.prototype.toString.call(t)
        }

        function r(t) {
            var e;
            for (e in t) return !1;
            return !0
        }

        function o(t) {
            return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
        }

        function a(t, e) {
            var n, i = [];
            for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
            return i
        }

        function s(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        function l(t, e) {
            for (var n in e) s(e, n) && (t[n] = e[n]);
            return s(e, "toString") && (t.toString = e.toString), s(e, "valueOf") && (t.valueOf = e.valueOf), t
        }

        function d(t, e, n, i) {
            return me(t, e, n, i, !0).utc()
        }

        function u() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null
            }
        }

        function c(t) {
            return null == t._pf && (t._pf = u()), t._pf
        }

        function h(t) {
            if (null == t._isValid) {
                var e = c(t),
                    n = pi.call(e.parsedDateParts, function(t) {
                        return null != t
                    }),
                    i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
                if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return i;
                t._isValid = i
            }
            return t._isValid
        }

        function f(t) {
            var e = d(NaN);
            return null != t ? l(c(e), t) : c(e).userInvalidated = !0, e
        }

        function p(t) {
            return void 0 === t
        }

        function g(t, e) {
            var n, i, r;
            if (p(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), p(e._i) || (t._i = e._i), p(e._f) || (t._f = e._f), p(e._l) || (t._l = e._l), p(e._strict) || (t._strict = e._strict), p(e._tzm) || (t._tzm = e._tzm), p(e._isUTC) || (t._isUTC = e._isUTC), p(e._offset) || (t._offset = e._offset), p(e._pf) || (t._pf = c(e)), p(e._locale) || (t._locale = e._locale), gi.length > 0)
                for (n in gi) i = gi[n], r = e[i], p(r) || (t[i] = r);
            return t
        }

        function m(e) {
            g(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), mi === !1 && (mi = !0, t.updateOffset(this), mi = !1)
        }

        function v(t) {
            return t instanceof m || null != t && null != t._isAMomentObject
        }

        function y(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
        }

        function b(t) {
            var e = +t,
                n = 0;
            return 0 !== e && isFinite(e) && (n = y(e)), n
        }

        function x(t, e, n) {
            var i, r = Math.min(t.length, e.length),
                o = Math.abs(t.length - e.length),
                a = 0;
            for (i = 0; i < r; i++)(n && t[i] !== e[i] || !n && b(t[i]) !== b(e[i])) && a++;
            return a + o
        }

        function w(e) {
            t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }

        function _(e, n) {
            var i = !0;
            return l(function() {
                if (null != t.deprecationHandler && t.deprecationHandler(null, e), i) {
                    for (var r, o = [], a = 0; a < arguments.length; a++) {
                        if (r = "", "object" == typeof arguments[a]) {
                            r += "\n[" + a + "] ";
                            for (var s in arguments[0]) r += s + ": " + arguments[0][s] + ", ";
                            r = r.slice(0, -2)
                        } else r = arguments[a];
                        o.push(r)
                    }
                    w(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), i = !1
                }
                return n.apply(this, arguments)
            }, n)
        }

        function k(e, n) {
            null != t.deprecationHandler && t.deprecationHandler(e, n), vi[e] || (w(n), vi[e] = !0)
        }

        function S(t) {
            return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
        }

        function C(t) {
            var e, n;
            for (n in t) e = t[n], S(e) ? this[n] = e : this["_" + n] = e;
            this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }

        function D(t, e) {
            var n, r = l({}, t);
            for (n in e) s(e, n) && (i(t[n]) && i(e[n]) ? (r[n] = {}, l(r[n], t[n]), l(r[n], e[n])) : null != e[n] ? r[n] = e[n] : delete r[n]);
            for (n in t) s(t, n) && !s(e, n) && i(t[n]) && (r[n] = l({}, r[n]));
            return r
        }

        function M(t) {
            null != t && this.set(t)
        }

        function T(t, e, n) {
            var i = this._calendar[t] || this._calendar.sameElse;
            return S(i) ? i.call(e, n) : i
        }

        function O(t) {
            var e = this._longDateFormat[t],
                n = this._longDateFormat[t.toUpperCase()];
            return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
                return t.slice(1)
            }), this._longDateFormat[t])
        }

        function A() {
            return this._invalidDate
        }

        function P(t) {
            return this._ordinal.replace("%d", t)
        }

        function I(t, e, n, i) {
            var r = this._relativeTime[n];
            return S(r) ? r(t, e, n, i) : r.replace(/%d/i, t)
        }

        function F(t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return S(n) ? n(e) : n.replace(/%s/i, e)
        }

        function E(t, e) {
            var n = t.toLowerCase();
            Di[n] = Di[n + "s"] = Di[e] = t
        }

        function L(t) {
            return "string" == typeof t ? Di[t] || Di[t.toLowerCase()] : void 0
        }

        function R(t) {
            var e, n, i = {};
            for (n in t) s(t, n) && (e = L(n), e && (i[e] = t[n]));
            return i
        }

        function $(t, e) {
            Mi[t] = e
        }

        function W(t) {
            var e = [];
            for (var n in t) e.push({
                unit: n,
                priority: Mi[n]
            });
            return e.sort(function(t, e) {
                return t.priority - e.priority
            }), e
        }

        function H(e, n) {
            return function(i) {
                return null != i ? (j(this, e, i), t.updateOffset(this, n), this) : N(this, e)
            }
        }

        function N(t, e) {
            return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
        }

        function j(t, e, n) {
            t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
        }

        function Y(t) {
            return t = L(t), S(this[t]) ? this[t]() : this
        }

        function z(t, e) {
            if ("object" == typeof t) {
                t = R(t);
                for (var n = W(t), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit])
            } else if (t = L(t), S(this[t])) return this[t](e);
            return this
        }

        function V(t, e, n) {
            var i = "" + Math.abs(t),
                r = e - i.length,
                o = t >= 0;
            return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
        }

        function B(t, e, n, i) {
            var r = i;
            "string" == typeof i && (r = function() {
                return this[i]()
            }), t && (Pi[t] = r), e && (Pi[e[0]] = function() {
                return V(r.apply(this, arguments), e[1], e[2])
            }), n && (Pi[n] = function() {
                return this.localeData().ordinal(r.apply(this, arguments), t)
            })
        }

        function q(t) {
            return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }

        function U(t) {
            var e, n, i = t.match(Ti);
            for (e = 0, n = i.length; e < n; e++) Pi[i[e]] ? i[e] = Pi[i[e]] : i[e] = q(i[e]);
            return function(e) {
                var r, o = "";
                for (r = 0; r < n; r++) o += i[r] instanceof Function ? i[r].call(e, t) : i[r];
                return o
            }
        }

        function G(t, e) {
            return t.isValid() ? (e = Z(e, t.localeData()), Ai[e] = Ai[e] || U(e), Ai[e](t)) : t.localeData().invalidDate()
        }

        function Z(t, e) {
            function n(t) {
                return e.longDateFormat(t) || t
            }
            var i = 5;
            for (Oi.lastIndex = 0; i >= 0 && Oi.test(t);) t = t.replace(Oi, n), Oi.lastIndex = 0, i -= 1;
            return t
        }

        function Q(t, e, n) {
            Zi[t] = S(e) ? e : function(t) {
                return t && n ? n : e
            }
        }

        function X(t, e) {
            return s(Zi, t) ? Zi[t](e._strict, e._locale) : new RegExp(J(t))
        }

        function J(t) {
            return K(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
                return e || n || i || r
            }))
        }

        function K(t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function tt(t, e) {
            var n, i = e;
            for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function(t, n) {
                    n[e] = b(t)
                }), n = 0; n < t.length; n++) Qi[t[n]] = i
        }

        function et(t, e) {
            tt(t, function(t, n, i, r) {
                i._w = i._w || {}, e(t, i._w, i, r)
            })
        }

        function nt(t, e, n) {
            null != e && s(Qi, t) && Qi[t](e, n._a, n, t)
        }

        function it(t, e) {
            return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
        }

        function rt(t, e) {
            return t ? n(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || ar).test(e) ? "format" : "standalone"][t.month()] : this._months
        }

        function ot(t, e) {
            return t ? n(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[ar.test(e) ? "format" : "standalone"][t.month()] : this._monthsShort
        }

        function at(t, e, n) {
            var i, r, o, a = t.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) o = d([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
            return n ? "MMM" === e ? (r = bi.call(this._shortMonthsParse, a), r !== -1 ? r : null) : (r = bi.call(this._longMonthsParse, a), r !== -1 ? r : null) : "MMM" === e ? (r = bi.call(this._shortMonthsParse, a), r !== -1 ? r : (r = bi.call(this._longMonthsParse, a), r !== -1 ? r : null)) : (r = bi.call(this._longMonthsParse, a), r !== -1 ? r : (r = bi.call(this._shortMonthsParse, a), r !== -1 ? r : null))
        }

        function st(t, e, n) {
            var i, r, o;
            if (this._monthsParseExact) return at.call(this, t, e, n);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                if (r = d([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
                if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
                if (!n && this._monthsParse[i].test(t)) return i
            }
        }

        function lt(t, e) {
            var n;
            if (!t.isValid()) return t;
            if ("string" == typeof e)
                if (/^\d+$/.test(e)) e = b(e);
                else if (e = t.localeData().monthsParse(e), "number" != typeof e) return t;
            return n = Math.min(t.date(), it(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
        }

        function dt(e) {
            return null != e ? (lt(this, e), t.updateOffset(this, !0), this) : N(this, "Month")
        }

        function ut() {
            return it(this.year(), this.month())
        }

        function ct(t) {
            return this._monthsParseExact ? (s(this, "_monthsRegex") || ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = dr), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }

        function ht(t) {
            return this._monthsParseExact ? (s(this, "_monthsRegex") || ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (s(this, "_monthsRegex") || (this._monthsRegex = ur), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
        }

        function ft() {
            function t(t, e) {
                return e.length - t.length
            }
            var e, n, i = [],
                r = [],
                o = [];
            for (e = 0; e < 12; e++) n = d([2e3, e]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
            for (i.sort(t), r.sort(t), o.sort(t), e = 0; e < 12; e++) i[e] = K(i[e]), r[e] = K(r[e]);
            for (e = 0; e < 24; e++) o[e] = K(o[e]);
            this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
        }

        function pt(t) {
            return gt(t) ? 366 : 365
        }

        function gt(t) {
            return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
        }

        function mt() {
            return gt(this.year())
        }

        function vt(t, e, n, i, r, o, a) {
            var s = new Date(t, e, n, i, r, o, a);
            return t < 100 && t >= 0 && isFinite(s.getFullYear()) && s.setFullYear(t), s
        }

        function yt(t) {
            var e = new Date(Date.UTC.apply(null, arguments));
            return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
        }

        function bt(t, e, n) {
            var i = 7 + e - n,
                r = (7 + yt(t, 0, i).getUTCDay() - e) % 7;
            return -r + i - 1
        }

        function xt(t, e, n, i, r) {
            var o, a, s = (7 + n - i) % 7,
                l = bt(t, i, r),
                d = 1 + 7 * (e - 1) + s + l;
            return d <= 0 ? (o = t - 1, a = pt(o) + d) : d > pt(t) ? (o = t + 1, a = d - pt(t)) : (o = t, a = d), {
                year: o,
                dayOfYear: a
            }
        }

        function wt(t, e, n) {
            var i, r, o = bt(t.year(), e, n),
                a = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
            return a < 1 ? (r = t.year() - 1, i = a + _t(r, e, n)) : a > _t(t.year(), e, n) ? (i = a - _t(t.year(), e, n), r = t.year() + 1) : (r = t.year(), i = a), {
                week: i,
                year: r
            }
        }

        function _t(t, e, n) {
            var i = bt(t, e, n),
                r = bt(t + 1, e, n);
            return (pt(t) - i + r) / 7
        }

        function kt(t) {
            return wt(t, this._week.dow, this._week.doy).week
        }

        function St() {
            return this._week.dow
        }

        function Ct() {
            return this._week.doy
        }

        function Dt(t) {
            var e = this.localeData().week(this);
            return null == t ? e : this.add(7 * (t - e), "d")
        }

        function Mt(t) {
            var e = wt(this, 1, 4).week;
            return null == t ? e : this.add(7 * (t - e), "d")
        }

        function Tt(t, e) {
            return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
        }

        function Ot(t, e) {
            return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
        }

        function At(t, e) {
            return t ? n(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : this._weekdays
        }

        function Pt(t) {
            return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
        }

        function It(t) {
            return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
        }

        function Ft(t, e, n) {
            var i, r, o, a = t.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) o = d([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
            return n ? "dddd" === e ? (r = bi.call(this._weekdaysParse, a), r !== -1 ? r : null) : "ddd" === e ? (r = bi.call(this._shortWeekdaysParse, a), r !== -1 ? r : null) : (r = bi.call(this._minWeekdaysParse, a), r !== -1 ? r : null) : "dddd" === e ? (r = bi.call(this._weekdaysParse, a), r !== -1 ? r : (r = bi.call(this._shortWeekdaysParse, a), r !== -1 ? r : (r = bi.call(this._minWeekdaysParse, a), r !== -1 ? r : null))) : "ddd" === e ? (r = bi.call(this._shortWeekdaysParse, a), r !== -1 ? r : (r = bi.call(this._weekdaysParse, a), r !== -1 ? r : (r = bi.call(this._minWeekdaysParse, a), r !== -1 ? r : null))) : (r = bi.call(this._minWeekdaysParse, a), r !== -1 ? r : (r = bi.call(this._weekdaysParse, a), r !== -1 ? r : (r = bi.call(this._shortWeekdaysParse, a), r !== -1 ? r : null)))
        }

        function Et(t, e, n) {
            var i, r, o;
            if (this._weekdaysParseExact) return Ft.call(this, t, e, n);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                if (r = d([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
                if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
                if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
                if (!n && this._weekdaysParse[i].test(t)) return i
            }
        }

        function Lt(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? (t = Tt(t, this.localeData()), this.add(t - e, "d")) : e
        }

        function Rt(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d")
        }

        function $t(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
                var e = Ot(t, this.localeData());
                return this.day(this.day() % 7 ? e : e - 7)
            }
            return this.day() || 7
        }

        function Wt(t) {
            return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || jt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = mr), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }

        function Ht(t) {
            return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || jt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (s(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = vr), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }

        function Nt(t) {
            return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || jt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = yr), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }

        function jt() {
            function t(t, e) {
                return e.length - t.length
            }
            var e, n, i, r, o, a = [],
                s = [],
                l = [],
                u = [];
            for (e = 0; e < 7; e++) n = d([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), a.push(i), s.push(r), l.push(o), u.push(i), u.push(r), u.push(o);
            for (a.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++) s[e] = K(s[e]), l[e] = K(l[e]), u[e] = K(u[e]);
            this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
        }

        function Yt() {
            return this.hours() % 12 || 12
        }

        function zt() {
            return this.hours() || 24
        }

        function Vt(t, e) {
            B(t, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), e)
            })
        }

        function Bt(t, e) {
            return e._meridiemParse
        }

        function qt(t) {
            return "p" === (t + "").toLowerCase().charAt(0)
        }

        function Ut(t, e, n) {
            return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }

        function Gt(t) {
            return t ? t.toLowerCase().replace("_", "-") : t
        }

        function Zt(t) {
            for (var e, n, i, r, o = 0; o < t.length;) {
                for (r = Gt(t[o]).split("-"), e = r.length, n = Gt(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
                    if (i = Qt(r.slice(0, e).join("-"))) return i;
                    if (n && n.length >= e && x(r, n, !0) >= e - 1) break;
                    e--
                }
                o++
            }
            return null
        }

        function Qt(t) {
            var e = null;
            if (!kr[t] && "undefined" != typeof module && module && module.exports) try {
                e = br._abbr, require("./locale/" + t), Xt(e)
            } catch (t) {}
            return kr[t]
        }

        function Xt(t, e) {
            var n;
            return t && (n = p(e) ? te(t) : Jt(t, e), n && (br = n)), br._abbr
        }

        function Jt(t, e) {
            if (null !== e) {
                var n = _r;
                return e.abbr = t, null != kr[t] ? (k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = kr[t]._config) : null != e.parentLocale && (null != kr[e.parentLocale] ? n = kr[e.parentLocale]._config : k("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), kr[t] = new M(D(n, e)), Xt(t), kr[t]
            }
            return delete kr[t], null
        }

        function Kt(t, e) {
            if (null != e) {
                var n, i = _r;
                null != kr[t] && (i = kr[t]._config), e = D(i, e), n = new M(e), n.parentLocale = kr[t], kr[t] = n, Xt(t)
            } else null != kr[t] && (null != kr[t].parentLocale ? kr[t] = kr[t].parentLocale : null != kr[t] && delete kr[t]);
            return kr[t]
        }

        function te(t) {
            var e;
            if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return br;
            if (!n(t)) {
                if (e = Qt(t)) return e;
                t = [t]
            }
            return Zt(t)
        }

        function ee() {
            return yi(kr)
        }

        function ne(t) {
            var e, n = t._a;
            return n && c(t).overflow === -2 && (e = n[Ji] < 0 || n[Ji] > 11 ? Ji : n[Ki] < 1 || n[Ki] > it(n[Xi], n[Ji]) ? Ki : n[tr] < 0 || n[tr] > 24 || 24 === n[tr] && (0 !== n[er] || 0 !== n[nr] || 0 !== n[ir]) ? tr : n[er] < 0 || n[er] > 59 ? er : n[nr] < 0 || n[nr] > 59 ? nr : n[ir] < 0 || n[ir] > 999 ? ir : -1, c(t)._overflowDayOfYear && (e < Xi || e > Ki) && (e = Ki), c(t)._overflowWeeks && e === -1 && (e = rr), c(t)._overflowWeekday && e === -1 && (e = or), c(t).overflow = e), t
        }

        function ie(t) {
            var e, n, i, r, o, a, s = t._i,
                l = Sr.exec(s) || Cr.exec(s);
            if (l) {
                for (c(t).iso = !0, e = 0, n = Mr.length; e < n; e++)
                    if (Mr[e][1].exec(l[1])) {
                        r = Mr[e][0], i = Mr[e][2] !== !1;
                        break
                    }
                if (null == r) return void(t._isValid = !1);
                if (l[3]) {
                    for (e = 0, n = Tr.length; e < n; e++)
                        if (Tr[e][1].exec(l[3])) {
                            o = (l[2] || " ") + Tr[e][0];
                            break
                        }
                    if (null == o) return void(t._isValid = !1)
                }
                if (!i && null != o) return void(t._isValid = !1);
                if (l[4]) {
                    if (!Dr.exec(l[4])) return void(t._isValid = !1);
                    a = "Z"
                }
                t._f = r + (o || "") + (a || ""), de(t)
            } else t._isValid = !1
        }

        function re(e) {
            var n = Or.exec(e._i);
            return null !== n ? void(e._d = new Date(+n[1])) : (ie(e), void(e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))))
        }

        function oe(t, e, n) {
            return null != t ? t : null != e ? e : n
        }

        function ae(e) {
            var n = new Date(t.now());
            return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
        }

        function se(t) {
            var e, n, i, r, o = [];
            if (!t._d) {
                for (i = ae(t), t._w && null == t._a[Ki] && null == t._a[Ji] && le(t), t._dayOfYear && (r = oe(t._a[Xi], i[Xi]), t._dayOfYear > pt(r) && (c(t)._overflowDayOfYear = !0), n = yt(r, 0, t._dayOfYear), t._a[Ji] = n.getUTCMonth(), t._a[Ki] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = o[e] = i[e];
                for (; e < 7; e++) t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                24 === t._a[tr] && 0 === t._a[er] && 0 === t._a[nr] && 0 === t._a[ir] && (t._nextDay = !0, t._a[tr] = 0), t._d = (t._useUTC ? yt : vt).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[tr] = 24)
            }
        }

        function le(t) {
            var e, n, i, r, o, a, s, l;
            e = t._w, null != e.GG || null != e.W || null != e.E ? (o = 1, a = 4, n = oe(e.GG, t._a[Xi], wt(ve(), 1, 4).year), i = oe(e.W, 1), r = oe(e.E, 1), (r < 1 || r > 7) && (l = !0)) : (o = t._locale._week.dow, a = t._locale._week.doy, n = oe(e.gg, t._a[Xi], wt(ve(), o, a).year), i = oe(e.w, 1), null != e.d ? (r = e.d, (r < 0 || r > 6) && (l = !0)) : null != e.e ? (r = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : r = o), i < 1 || i > _t(n, o, a) ? c(t)._overflowWeeks = !0 : null != l ? c(t)._overflowWeekday = !0 : (s = xt(n, i, r, o, a), t._a[Xi] = s.year, t._dayOfYear = s.dayOfYear)
        }

        function de(e) {
            if (e._f === t.ISO_8601) return void ie(e);
            e._a = [], c(e).empty = !0;
            var n, i, r, o, a, s = "" + e._i,
                l = s.length,
                d = 0;
            for (r = Z(e._f, e._locale).match(Ti) || [], n = 0; n < r.length; n++) o = r[n], i = (s.match(X(o, e)) || [])[0], i && (a = s.substr(0, s.indexOf(i)), a.length > 0 && c(e).unusedInput.push(a), s = s.slice(s.indexOf(i) + i.length), d += i.length), Pi[o] ? (i ? c(e).empty = !1 : c(e).unusedTokens.push(o), nt(o, i, e)) : e._strict && !i && c(e).unusedTokens.push(o);
            c(e).charsLeftOver = l - d, s.length > 0 && c(e).unusedInput.push(s), e._a[tr] <= 12 && c(e).bigHour === !0 && e._a[tr] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[tr] = ue(e._locale, e._a[tr], e._meridiem), se(e), ne(e)
        }

        function ue(t, e, n) {
            var i;
            return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && e < 12 && (e += 12), i || 12 !== e || (e = 0), e) : e
        }

        function ce(t) {
            var e, n, i, r, o;
            if (0 === t._f.length) return c(t).invalidFormat = !0, void(t._d = new Date(NaN));
            for (r = 0; r < t._f.length; r++) o = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], de(e), h(e) && (o += c(e).charsLeftOver, o += 10 * c(e).unusedTokens.length, c(e).score = o, (null == i || o < i) && (i = o, n = e));
            l(t, n || e)
        }

        function he(t) {
            if (!t._d) {
                var e = R(t._i);
                t._a = a([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                    return t && parseInt(t, 10)
                }), se(t)
            }
        }

        function fe(t) {
            var e = new m(ne(pe(t)));
            return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
        }

        function pe(t) {
            var e = t._i,
                i = t._f;
            return t._locale = t._locale || te(t._l), null === e || void 0 === i && "" === e ? f({
                nullInput: !0
            }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), v(e) ? new m(ne(e)) : (n(i) ? ce(t) : o(e) ? t._d = e : i ? de(t) : ge(t), h(t) || (t._d = null), t))
        }

        function ge(e) {
            var i = e._i;
            void 0 === i ? e._d = new Date(t.now()) : o(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? re(e) : n(i) ? (e._a = a(i.slice(0), function(t) {
                return parseInt(t, 10)
            }), se(e)) : "object" == typeof i ? he(e) : "number" == typeof i ? e._d = new Date(i) : t.createFromInputFallback(e)
        }

        function me(t, e, o, a, s) {
            var l = {};
            return "boolean" == typeof o && (a = o, o = void 0), (i(t) && r(t) || n(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = s, l._l = o, l._i = t, l._f = e, l._strict = a, fe(l)
        }

        function ve(t, e, n, i) {
            return me(t, e, n, i, !1)
        }

        function ye(t, e) {
            var i, r;
            if (1 === e.length && n(e[0]) && (e = e[0]), !e.length) return ve();
            for (i = e[0], r = 1; r < e.length; ++r) e[r].isValid() && !e[r][t](i) || (i = e[r]);
            return i
        }

        function be() {
            var t = [].slice.call(arguments, 0);
            return ye("isBefore", t)
        }

        function xe() {
            var t = [].slice.call(arguments, 0);
            return ye("isAfter", t)
        }

        function we(t) {
            var e = R(t),
                n = e.year || 0,
                i = e.quarter || 0,
                r = e.month || 0,
                o = e.week || 0,
                a = e.day || 0,
                s = e.hour || 0,
                l = e.minute || 0,
                d = e.second || 0,
                u = e.millisecond || 0;
            this._milliseconds = +u + 1e3 * d + 6e4 * l + 1e3 * s * 60 * 60, this._days = +a + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = te(), this._bubble()
        }

        function _e(t) {
            return t instanceof we
        }

        function ke(t) {
            return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t)
        }

        function Se(t, e) {
            B(t, 0, 0, function() {
                var t = this.utcOffset(),
                    n = "+";
                return t < 0 && (t = -t, n = "-"), n + V(~~(t / 60), 2) + e + V(~~t % 60, 2)
            })
        }

        function Ce(t, e) {
            var n = (e || "").match(t) || [],
                i = n[n.length - 1] || [],
                r = (i + "").match(Fr) || ["-", 0, 0],
                o = +(60 * r[1]) + b(r[2]);
            return "+" === r[0] ? o : -o
        }

        function De(e, n) {
            var i, r;
            return n._isUTC ? (i = n.clone(), r = (v(e) || o(e) ? e.valueOf() : ve(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + r), t.updateOffset(i, !1), i) : ve(e).local()
        }

        function Me(t) {
            return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
        }

        function Te(e, n) {
            var i, r = this._offset || 0;
            return this.isValid() ? null != e ? ("string" == typeof e ? e = Ce(qi, e) : Math.abs(e) < 16 && (e *= 60), !this._isUTC && n && (i = Me(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), r !== e && (!n || this._changeInProgress ? Ve(this, He(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : Me(this) : null != e ? this : NaN
        }

        function Oe(t, e) {
            return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
        }

        function Ae(t) {
            return this.utcOffset(0, t)
        }

        function Pe(t) {
            return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Me(this), "m")), this
        }

        function Ie() {
            if (this._tzm) this.utcOffset(this._tzm);
            else if ("string" == typeof this._i) {
                var t = Ce(Bi, this._i);
                0 === t ? this.utcOffset(0, !0) : this.utcOffset(Ce(Bi, this._i))
            }
            return this
        }

        function Fe(t) {
            return !!this.isValid() && (t = t ? ve(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
        }

        function Ee() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function Le() {
            if (!p(this._isDSTShifted)) return this._isDSTShifted;
            var t = {};
            if (g(t, this), t = pe(t), t._a) {
                var e = t._isUTC ? d(t._a) : ve(t._a);
                this._isDSTShifted = this.isValid() && x(t._a, e.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function Re() {
            return !!this.isValid() && !this._isUTC
        }

        function $e() {
            return !!this.isValid() && this._isUTC
        }

        function We() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }

        function He(t, e) {
            var n, i, r, o = t,
                a = null;
            return _e(t) ? o = {
                ms: t._milliseconds,
                d: t._days,
                M: t._months
            } : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (a = Er.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = {
                y: 0,
                d: b(a[Ki]) * n,
                h: b(a[tr]) * n,
                m: b(a[er]) * n,
                s: b(a[nr]) * n,
                ms: b(ke(1e3 * a[ir])) * n
            }) : (a = Lr.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = {
                y: Ne(a[2], n),
                M: Ne(a[3], n),
                w: Ne(a[4], n),
                d: Ne(a[5], n),
                h: Ne(a[6], n),
                m: Ne(a[7], n),
                s: Ne(a[8], n)
            }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = Ye(ve(o.from), ve(o.to)), o = {}, o.ms = r.milliseconds, o.M = r.months), i = new we(o), _e(t) && s(t, "_locale") && (i._locale = t._locale), i
        }

        function Ne(t, e) {
            var n = t && parseFloat(t.replace(",", "."));
            return (isNaN(n) ? 0 : n) * e
        }

        function je(t, e) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
        }

        function Ye(t, e) {
            var n;
            return t.isValid() && e.isValid() ? (e = De(e, t), t.isBefore(e) ? n = je(t, e) : (n = je(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                milliseconds: 0,
                months: 0
            }
        }

        function ze(t, e) {
            return function(n, i) {
                var r, o;
                return null === i || isNaN(+i) || (k(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, r = He(n, i), Ve(this, r, t), this
            }
        }

        function Ve(e, n, i, r) {
            var o = n._milliseconds,
                a = ke(n._days),
                s = ke(n._months);
            e.isValid() && (r = null == r || r, o && e._d.setTime(e._d.valueOf() + o * i), a && j(e, "Date", N(e, "Date") + a * i), s && lt(e, N(e, "Month") + s * i), r && t.updateOffset(e, a || s))
        }

        function Be(t, e) {
            var n = t.diff(e, "days", !0);
            return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
        }

        function qe(e, n) {
            var i = e || ve(),
                r = De(i, this).startOf("day"),
                o = t.calendarFormat(this, r) || "sameElse",
                a = n && (S(n[o]) ? n[o].call(this, i) : n[o]);
            return this.format(a || this.localeData().calendar(o, this, ve(i)))
        }

        function Ue() {
            return new m(this)
        }

        function Ge(t, e) {
            var n = v(t) ? t : ve(t);
            return !(!this.isValid() || !n.isValid()) && (e = L(p(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
        }

        function Ze(t, e) {
            var n = v(t) ? t : ve(t);
            return !(!this.isValid() || !n.isValid()) && (e = L(p(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
        }

        function Qe(t, e, n, i) {
            return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
        }

        function Xe(t, e) {
            var n, i = v(t) ? t : ve(t);
            return !(!this.isValid() || !i.isValid()) && (e = L(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
        }

        function Je(t, e) {
            return this.isSame(t, e) || this.isAfter(t, e)
        }

        function Ke(t, e) {
            return this.isSame(t, e) || this.isBefore(t, e)
        }

        function tn(t, e, n) {
            var i, r, o, a;
            return this.isValid() ? (i = De(t, this), i.isValid() ? (r = 6e4 * (i.utcOffset() - this.utcOffset()), e = L(e), "year" === e || "month" === e || "quarter" === e ? (a = en(this, i), "quarter" === e ? a /= 3 : "year" === e && (a /= 12)) : (o = this - i, a = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - r) / 864e5 : "week" === e ? (o - r) / 6048e5 : o), n ? a : y(a)) : NaN) : NaN
        }

        function en(t, e) {
            var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                o = t.clone().add(r, "months");
            return e - o < 0 ? (n = t.clone().add(r - 1, "months"), i = (e - o) / (o - n)) : (n = t.clone().add(r + 1, "months"), i = (e - o) / (n - o)), -(r + i) || 0
        }

        function nn() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function rn() {
            var t = this.clone().utc();
            return 0 < t.year() && t.year() <= 9999 ? S(Date.prototype.toISOString) ? this.toDate().toISOString() : G(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : G(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function on(e) {
            e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
            var n = G(this, e);
            return this.localeData().postformat(n)
        }

        function an(t, e) {
            return this.isValid() && (v(t) && t.isValid() || ve(t).isValid()) ? He({
                to: this,
                from: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }

        function sn(t) {
            return this.from(ve(), t)
        }

        function ln(t, e) {
            return this.isValid() && (v(t) && t.isValid() || ve(t).isValid()) ? He({
                from: this,
                to: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }

        function dn(t) {
            return this.to(ve(), t)
        }

        function un(t) {
            var e;
            return void 0 === t ? this._locale._abbr : (e = te(t), null != e && (this._locale = e), this)
        }

        function cn() {
            return this._locale
        }

        function hn(t) {
            switch (t = L(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function fn(t) {
            return t = L(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
        }

        function pn() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }

        function gn() {
            return Math.floor(this.valueOf() / 1e3)
        }

        function mn() {
            return new Date(this.valueOf())
        }

        function vn() {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
        }

        function yn() {
            var t = this;
            return {
                years: t.year(),
                months: t.month(),
                date: t.date(),
                hours: t.hours(),
                minutes: t.minutes(),
                seconds: t.seconds(),
                milliseconds: t.milliseconds()
            }
        }

        function bn() {
            return this.isValid() ? this.toISOString() : null
        }

        function xn() {
            return h(this)
        }

        function wn() {
            return l({}, c(this))
        }

        function _n() {
            return c(this).overflow
        }

        function kn() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }

        function Sn(t, e) {
            B(0, [t, t.length], 0, e)
        }

        function Cn(t) {
            return On.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function Dn(t) {
            return On.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function Mn() {
            return _t(this.year(), 1, 4)
        }

        function Tn() {
            var t = this.localeData()._week;
            return _t(this.year(), t.dow, t.doy)
        }

        function On(t, e, n, i, r) {
            var o;
            return null == t ? wt(this, i, r).year : (o = _t(t, i, r), e > o && (e = o), An.call(this, t, e, n, i, r))
        }

        function An(t, e, n, i, r) {
            var o = xt(t, e, n, i, r),
                a = yt(o.year, 0, o.dayOfYear);
            return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
        }

        function Pn(t) {
            return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
        }

        function In(t) {
            var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add(t - e, "d")
        }

        function Fn(t, e) {
            e[ir] = b(1e3 * ("0." + t))
        }

        function En() {
            return this._isUTC ? "UTC" : ""
        }

        function Ln() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function Rn(t) {
            return ve(1e3 * t)
        }

        function $n() {
            return ve.apply(null, arguments).parseZone()
        }

        function Wn(t) {
            return t
        }

        function Hn(t, e, n, i) {
            var r = te(),
                o = d().set(i, e);
            return r[n](o, t)
        }

        function Nn(t, e, n) {
            if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e) return Hn(t, e, n, "month");
            var i, r = [];
            for (i = 0; i < 12; i++) r[i] = Hn(t, i, n, "month");
            return r
        }

        function jn(t, e, n, i) {
            "boolean" == typeof t ? ("number" == typeof e && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, "number" == typeof e && (n = e, e = void 0), e = e || "");
            var r = te(),
                o = t ? r._week.dow : 0;
            if (null != n) return Hn(e, (n + o) % 7, i, "day");
            var a, s = [];
            for (a = 0; a < 7; a++) s[a] = Hn(e, (a + o) % 7, i, "day");
            return s
        }

        function Yn(t, e) {
            return Nn(t, e, "months")
        }

        function zn(t, e) {
            return Nn(t, e, "monthsShort")
        }

        function Vn(t, e, n) {
            return jn(t, e, n, "weekdays")
        }

        function Bn(t, e, n) {
            return jn(t, e, n, "weekdaysShort")
        }

        function qn(t, e, n) {
            return jn(t, e, n, "weekdaysMin")
        }

        function Un() {
            var t = this._data;
            return this._milliseconds = Ur(this._milliseconds), this._days = Ur(this._days), this._months = Ur(this._months), t.milliseconds = Ur(t.milliseconds), t.seconds = Ur(t.seconds), t.minutes = Ur(t.minutes), t.hours = Ur(t.hours), t.months = Ur(t.months), t.years = Ur(t.years), this
        }

        function Gn(t, e, n, i) {
            var r = He(e, n);
            return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble()
        }

        function Zn(t, e) {
            return Gn(this, t, e, 1)
        }

        function Qn(t, e) {
            return Gn(this, t, e, -1)
        }

        function Xn(t) {
            return t < 0 ? Math.floor(t) : Math.ceil(t)
        }

        function Jn() {
            var t, e, n, i, r, o = this._milliseconds,
                a = this._days,
                s = this._months,
                l = this._data;
            return o >= 0 && a >= 0 && s >= 0 || o <= 0 && a <= 0 && s <= 0 || (o += 864e5 * Xn(ti(s) + a), a = 0, s = 0), l.milliseconds = o % 1e3, t = y(o / 1e3), l.seconds = t % 60, e = y(t / 60), l.minutes = e % 60, n = y(e / 60), l.hours = n % 24, a += y(n / 24), r = y(Kn(a)), s += r, a -= Xn(ti(r)), i = y(s / 12), s %= 12, l.days = a, l.months = s, l.years = i, this
        }

        function Kn(t) {
            return 4800 * t / 146097
        }

        function ti(t) {
            return 146097 * t / 4800
        }

        function ei(t) {
            var e, n, i = this._milliseconds;
            if (t = L(t), "month" === t || "year" === t) return e = this._days + i / 864e5, n = this._months + Kn(e), "month" === t ? n : n / 12;
            switch (e = this._days + Math.round(ti(this._months)), t) {
                case "week":
                    return e / 7 + i / 6048e5;
                case "day":
                    return e + i / 864e5;
                case "hour":
                    return 24 * e + i / 36e5;
                case "minute":
                    return 1440 * e + i / 6e4;
                case "second":
                    return 86400 * e + i / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * e) + i;
                default:
                    throw new Error("Unknown unit " + t)
            }
        }

        function ni() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12)
        }

        function ii(t) {
            return function() {
                return this.as(t)
            }
        }

        function ri(t) {
            return t = L(t), this[t + "s"]()
        }

        function oi(t) {
            return function() {
                return this._data[t]
            }
        }

        function ai() {
            return y(this.days() / 7)
        }

        function si(t, e, n, i, r) {
            return r.relativeTime(e || 1, !!n, t, i)
        }

        function li(t, e, n) {
            var i = He(t).abs(),
                r = uo(i.as("s")),
                o = uo(i.as("m")),
                a = uo(i.as("h")),
                s = uo(i.as("d")),
                l = uo(i.as("M")),
                d = uo(i.as("y")),
                u = r < co.s && ["s", r] || o <= 1 && ["m"] || o < co.m && ["mm", o] || a <= 1 && ["h"] || a < co.h && ["hh", a] || s <= 1 && ["d"] || s < co.d && ["dd", s] || l <= 1 && ["M"] || l < co.M && ["MM", l] || d <= 1 && ["y"] || ["yy", d];
            return u[2] = e, u[3] = +t > 0, u[4] = n, si.apply(null, u)
        }

        function di(t) {
            return void 0 === t ? uo : "function" == typeof t && (uo = t, !0)
        }

        function ui(t, e) {
            return void 0 !== co[t] && (void 0 === e ? co[t] : (co[t] = e, !0))
        }

        function ci(t) {
            var e = this.localeData(),
                n = li(this, !t, e);
            return t && (n = e.pastFuture(+this, n)), e.postformat(n)
        }

        function hi() {
            var t, e, n, i = ho(this._milliseconds) / 1e3,
                r = ho(this._days),
                o = ho(this._months);
            t = y(i / 60), e = y(t / 60), i %= 60, t %= 60, n = y(o / 12), o %= 12;
            var a = n,
                s = o,
                l = r,
                d = e,
                u = t,
                c = i,
                h = this.asSeconds();
            return h ? (h < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (s ? s + "M" : "") + (l ? l + "D" : "") + (d || u || c ? "T" : "") + (d ? d + "H" : "") + (u ? u + "M" : "") + (c ? c + "S" : "") : "P0D"
        }
        var fi, pi;
        pi = Array.prototype.some ? Array.prototype.some : function(t) {
            for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
                if (i in e && t.call(this, e[i], i, e)) return !0;
            return !1
        };
        var gi = t.momentProperties = [],
            mi = !1,
            vi = {};
        t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
        var yi;
        yi = Object.keys ? Object.keys : function(t) {
            var e, n = [];
            for (e in t) s(t, e) && n.push(e);
            return n
        };
        var bi, xi = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            wi = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            _i = "Invalid date",
            ki = "%d",
            Si = /\d{1,2}/,
            Ci = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            Di = {},
            Mi = {},
            Ti = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            Oi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Ai = {},
            Pi = {},
            Ii = /\d/,
            Fi = /\d\d/,
            Ei = /\d{3}/,
            Li = /\d{4}/,
            Ri = /[+-]?\d{6}/,
            $i = /\d\d?/,
            Wi = /\d\d\d\d?/,
            Hi = /\d\d\d\d\d\d?/,
            Ni = /\d{1,3}/,
            ji = /\d{1,4}/,
            Yi = /[+-]?\d{1,6}/,
            zi = /\d+/,
            Vi = /[+-]?\d+/,
            Bi = /Z|[+-]\d\d:?\d\d/gi,
            qi = /Z|[+-]\d\d(?::?\d\d)?/gi,
            Ui = /[+-]?\d+(\.\d{1,3})?/,
            Gi = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            Zi = {},
            Qi = {},
            Xi = 0,
            Ji = 1,
            Ki = 2,
            tr = 3,
            er = 4,
            nr = 5,
            ir = 6,
            rr = 7,
            or = 8;
        bi = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
            var e;
            for (e = 0; e < this.length; ++e)
                if (this[e] === t) return e;
            return -1
        }, B("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), B("MMM", 0, 0, function(t) {
            return this.localeData().monthsShort(this, t)
        }), B("MMMM", 0, 0, function(t) {
            return this.localeData().months(this, t)
        }), E("month", "M"), $("month", 8), Q("M", $i), Q("MM", $i, Fi), Q("MMM", function(t, e) {
            return e.monthsShortRegex(t)
        }), Q("MMMM", function(t, e) {
            return e.monthsRegex(t)
        }), tt(["M", "MM"], function(t, e) {
            e[Ji] = b(t) - 1
        }), tt(["MMM", "MMMM"], function(t, e, n, i) {
            var r = n._locale.monthsParse(t, i, n._strict);
            null != r ? e[Ji] = r : c(n).invalidMonth = t
        });
        var ar = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
            sr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            lr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            dr = Gi,
            ur = Gi;
        B("Y", 0, 0, function() {
            var t = this.year();
            return t <= 9999 ? "" + t : "+" + t
        }), B(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), E("year", "y"), $("year", 1), Q("Y", Vi), Q("YY", $i, Fi), Q("YYYY", ji, Li), Q("YYYYY", Yi, Ri), Q("YYYYYY", Yi, Ri), tt(["YYYYY", "YYYYYY"], Xi), tt("YYYY", function(e, n) {
            n[Xi] = 2 === e.length ? t.parseTwoDigitYear(e) : b(e)
        }), tt("YY", function(e, n) {
            n[Xi] = t.parseTwoDigitYear(e)
        }), tt("Y", function(t, e) {
            e[Xi] = parseInt(t, 10)
        }), t.parseTwoDigitYear = function(t) {
            return b(t) + (b(t) > 68 ? 1900 : 2e3)
        };
        var cr = H("FullYear", !0);
        B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), E("week", "w"), E("isoWeek", "W"), $("week", 5), $("isoWeek", 5), Q("w", $i), Q("ww", $i, Fi), Q("W", $i), Q("WW", $i, Fi), et(["w", "ww", "W", "WW"], function(t, e, n, i) {
            e[i.substr(0, 1)] = b(t)
        });
        var hr = {
            dow: 0,
            doy: 6
        };
        B("d", 0, "do", "day"), B("dd", 0, 0, function(t) {
            return this.localeData().weekdaysMin(this, t)
        }), B("ddd", 0, 0, function(t) {
            return this.localeData().weekdaysShort(this, t)
        }), B("dddd", 0, 0, function(t) {
            return this.localeData().weekdays(this, t)
        }), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), E("day", "d"), E("weekday", "e"), E("isoWeekday", "E"), $("day", 11), $("weekday", 11), $("isoWeekday", 11), Q("d", $i), Q("e", $i), Q("E", $i), Q("dd", function(t, e) {
            return e.weekdaysMinRegex(t)
        }), Q("ddd", function(t, e) {
            return e.weekdaysShortRegex(t)
        }), Q("dddd", function(t, e) {
            return e.weekdaysRegex(t)
        }), et(["dd", "ddd", "dddd"], function(t, e, n, i) {
            var r = n._locale.weekdaysParse(t, i, n._strict);
            null != r ? e.d = r : c(n).invalidWeekday = t
        }), et(["d", "e", "E"], function(t, e, n, i) {
            e[i] = b(t)
        });
        var fr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            pr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            gr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            mr = Gi,
            vr = Gi,
            yr = Gi;
        B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, Yt), B("k", ["kk", 2], 0, zt), B("hmm", 0, 0, function() {
            return "" + Yt.apply(this) + V(this.minutes(), 2)
        }), B("hmmss", 0, 0, function() {
            return "" + Yt.apply(this) + V(this.minutes(), 2) + V(this.seconds(), 2)
        }), B("Hmm", 0, 0, function() {
            return "" + this.hours() + V(this.minutes(), 2)
        }), B("Hmmss", 0, 0, function() {
            return "" + this.hours() + V(this.minutes(), 2) + V(this.seconds(), 2)
        }), Vt("a", !0), Vt("A", !1), E("hour", "h"), $("hour", 13), Q("a", Bt), Q("A", Bt), Q("H", $i), Q("h", $i), Q("HH", $i, Fi), Q("hh", $i, Fi), Q("hmm", Wi), Q("hmmss", Hi), Q("Hmm", Wi), Q("Hmmss", Hi), tt(["H", "HH"], tr), tt(["a", "A"], function(t, e, n) {
            n._isPm = n._locale.isPM(t), n._meridiem = t
        }), tt(["h", "hh"], function(t, e, n) {
            e[tr] = b(t), c(n).bigHour = !0
        }), tt("hmm", function(t, e, n) {
            var i = t.length - 2;
            e[tr] = b(t.substr(0, i)), e[er] = b(t.substr(i)), c(n).bigHour = !0
        }), tt("hmmss", function(t, e, n) {
            var i = t.length - 4,
                r = t.length - 2;
            e[tr] = b(t.substr(0, i)), e[er] = b(t.substr(i, 2)), e[nr] = b(t.substr(r)), c(n).bigHour = !0
        }), tt("Hmm", function(t, e) {
            var n = t.length - 2;
            e[tr] = b(t.substr(0, n)), e[er] = b(t.substr(n))
        }), tt("Hmmss", function(t, e) {
            var n = t.length - 4,
                i = t.length - 2;
            e[tr] = b(t.substr(0, n)), e[er] = b(t.substr(n, 2)), e[nr] = b(t.substr(i))
        });
        var br, xr = /[ap]\.?m?\.?/i,
            wr = H("Hours", !0),
            _r = {
                calendar: xi,
                longDateFormat: wi,
                invalidDate: _i,
                ordinal: ki,
                ordinalParse: Si,
                relativeTime: Ci,
                months: sr,
                monthsShort: lr,
                week: hr,
                weekdays: fr,
                weekdaysMin: gr,
                weekdaysShort: pr,
                meridiemParse: xr
            },
            kr = {},
            Sr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Cr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Dr = /Z|[+-]\d\d(?::?\d\d)?/,
            Mr = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            Tr = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            Or = /^\/?Date\((\-?\d+)/i;
        t.createFromInputFallback = _("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
        }), t.ISO_8601 = function() {};
        var Ar = _("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var t = ve.apply(null, arguments);
                return this.isValid() && t.isValid() ? t < this ? this : t : f()
            }),
            Pr = _("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var t = ve.apply(null, arguments);
                return this.isValid() && t.isValid() ? t > this ? this : t : f()
            }),
            Ir = function() {
                return Date.now ? Date.now() : +new Date
            };
        Se("Z", ":"), Se("ZZ", ""), Q("Z", qi), Q("ZZ", qi), tt(["Z", "ZZ"], function(t, e, n) {
            n._useUTC = !0, n._tzm = Ce(qi, t)
        });
        var Fr = /([\+\-]|\d\d)/gi;
        t.updateOffset = function() {};
        var Er = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Lr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
        He.fn = we.prototype;
        var Rr = ze(1, "add"),
            $r = ze(-1, "subtract");
        t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Wr = _("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
            return void 0 === t ? this.localeData() : this.locale(t)
        });
        B(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), B(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), Sn("gggg", "weekYear"), Sn("ggggg", "weekYear"), Sn("GGGG", "isoWeekYear"), Sn("GGGGG", "isoWeekYear"), E("weekYear", "gg"), E("isoWeekYear", "GG"), $("weekYear", 1), $("isoWeekYear", 1), Q("G", Vi), Q("g", Vi), Q("GG", $i, Fi), Q("gg", $i, Fi), Q("GGGG", ji, Li), Q("gggg", ji, Li), Q("GGGGG", Yi, Ri), Q("ggggg", Yi, Ri), et(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
            e[i.substr(0, 2)] = b(t)
        }), et(["gg", "GG"], function(e, n, i, r) {
            n[r] = t.parseTwoDigitYear(e)
        }), B("Q", 0, "Qo", "quarter"), E("quarter", "Q"), $("quarter", 7), Q("Q", Ii), tt("Q", function(t, e) {
            e[Ji] = 3 * (b(t) - 1)
        }), B("D", ["DD", 2], "Do", "date"), E("date", "D"), $("date", 9), Q("D", $i), Q("DD", $i, Fi), Q("Do", function(t, e) {
            return t ? e._ordinalParse : e._ordinalParseLenient
        }), tt(["D", "DD"], Ki), tt("Do", function(t, e) {
            e[Ki] = b(t.match($i)[0], 10)
        });
        var Hr = H("Date", !0);
        B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), E("dayOfYear", "DDD"), $("dayOfYear", 4), Q("DDD", Ni), Q("DDDD", Ei), tt(["DDD", "DDDD"], function(t, e, n) {
            n._dayOfYear = b(t)
        }), B("m", ["mm", 2], 0, "minute"), E("minute", "m"), $("minute", 14), Q("m", $i), Q("mm", $i, Fi), tt(["m", "mm"], er);
        var Nr = H("Minutes", !1);
        B("s", ["ss", 2], 0, "second"), E("second", "s"), $("second", 15), Q("s", $i), Q("ss", $i, Fi), tt(["s", "ss"], nr);
        var jr = H("Seconds", !1);
        B("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), B(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), B(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), B(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), B(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), B(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), B(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), E("millisecond", "ms"), $("millisecond", 16), Q("S", Ni, Ii), Q("SS", Ni, Fi), Q("SSS", Ni, Ei);
        var Yr;
        for (Yr = "SSSS"; Yr.length <= 9; Yr += "S") Q(Yr, zi);
        for (Yr = "S"; Yr.length <= 9; Yr += "S") tt(Yr, Fn);
        var zr = H("Milliseconds", !1);
        B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
        var Vr = m.prototype;
        Vr.add = Rr, Vr.calendar = qe, Vr.clone = Ue, Vr.diff = tn, Vr.endOf = fn, Vr.format = on, Vr.from = an, Vr.fromNow = sn, Vr.to = ln, Vr.toNow = dn, Vr.get = Y, Vr.invalidAt = _n, Vr.isAfter = Ge, Vr.isBefore = Ze, Vr.isBetween = Qe, Vr.isSame = Xe, Vr.isSameOrAfter = Je, Vr.isSameOrBefore = Ke, Vr.isValid = xn, Vr.lang = Wr, Vr.locale = un, Vr.localeData = cn, Vr.max = Pr, Vr.min = Ar, Vr.parsingFlags = wn, Vr.set = z, Vr.startOf = hn, Vr.subtract = $r, Vr.toArray = vn, Vr.toObject = yn, Vr.toDate = mn, Vr.toISOString = rn, Vr.toJSON = bn, Vr.toString = nn, Vr.unix = gn, Vr.valueOf = pn, Vr.creationData = kn, Vr.year = cr, Vr.isLeapYear = mt, Vr.weekYear = Cn, Vr.isoWeekYear = Dn, Vr.quarter = Vr.quarters = Pn, Vr.month = dt, Vr.daysInMonth = ut, Vr.week = Vr.weeks = Dt, Vr.isoWeek = Vr.isoWeeks = Mt, Vr.weeksInYear = Tn, Vr.isoWeeksInYear = Mn, Vr.date = Hr, Vr.day = Vr.days = Lt, Vr.weekday = Rt, Vr.isoWeekday = $t, Vr.dayOfYear = In, Vr.hour = Vr.hours = wr, Vr.minute = Vr.minutes = Nr, Vr.second = Vr.seconds = jr, Vr.millisecond = Vr.milliseconds = zr, Vr.utcOffset = Te, Vr.utc = Ae, Vr.local = Pe, Vr.parseZone = Ie, Vr.hasAlignedHourOffset = Fe, Vr.isDST = Ee, Vr.isLocal = Re, Vr.isUtcOffset = $e, Vr.isUtc = We, Vr.isUTC = We, Vr.zoneAbbr = En, Vr.zoneName = Ln, Vr.dates = _("dates accessor is deprecated. Use date instead.", Hr), Vr.months = _("months accessor is deprecated. Use month instead", dt), Vr.years = _("years accessor is deprecated. Use year instead", cr), Vr.zone = _("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Oe), Vr.isDSTShifted = _("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Le);
        var Br = Vr,
            qr = M.prototype;
        qr.calendar = T, qr.longDateFormat = O, qr.invalidDate = A, qr.ordinal = P, qr.preparse = Wn, qr.postformat = Wn, qr.relativeTime = I, qr.pastFuture = F, qr.set = C, qr.months = rt, qr.monthsShort = ot, qr.monthsParse = st, qr.monthsRegex = ht, qr.monthsShortRegex = ct, qr.week = kt, qr.firstDayOfYear = Ct, qr.firstDayOfWeek = St, qr.weekdays = At, qr.weekdaysMin = It, qr.weekdaysShort = Pt, qr.weekdaysParse = Et, qr.weekdaysRegex = Wt, qr.weekdaysShortRegex = Ht, qr.weekdaysMinRegex = Nt, qr.isPM = qt, qr.meridiem = Ut, Xt("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === b(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            }
        }), t.lang = _("moment.lang is deprecated. Use moment.locale instead.", Xt), t.langData = _("moment.langData is deprecated. Use moment.localeData instead.", te);
        var Ur = Math.abs,
            Gr = ii("ms"),
            Zr = ii("s"),
            Qr = ii("m"),
            Xr = ii("h"),
            Jr = ii("d"),
            Kr = ii("w"),
            to = ii("M"),
            eo = ii("y"),
            no = oi("milliseconds"),
            io = oi("seconds"),
            ro = oi("minutes"),
            oo = oi("hours"),
            ao = oi("days"),
            so = oi("months"),
            lo = oi("years"),
            uo = Math.round,
            co = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            ho = Math.abs,
            fo = we.prototype;
        fo.abs = Un, fo.add = Zn, fo.subtract = Qn, fo.as = ei, fo.asMilliseconds = Gr, fo.asSeconds = Zr, fo.asMinutes = Qr, fo.asHours = Xr, fo.asDays = Jr, fo.asWeeks = Kr, fo.asMonths = to, fo.asYears = eo, fo.valueOf = ni, fo._bubble = Jn, fo.get = ri, fo.milliseconds = no, fo.seconds = io, fo.minutes = ro, fo.hours = oo, fo.days = ao, fo.weeks = ai, fo.months = so, fo.years = lo, fo.humanize = ci, fo.toISOString = hi, fo.toString = hi, fo.toJSON = hi, fo.locale = un, fo.localeData = cn, fo.toIsoString = _("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", hi), fo.lang = Wr, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), Q("x", Vi), Q("X", Ui), tt("X", function(t, e, n) {
            n._d = new Date(1e3 * parseFloat(t, 10))
        }), tt("x", function(t, e, n) {
            n._d = new Date(b(t))
        }), t.version = "2.15.1", e(ve), t.fn = Br, t.min = be, t.max = xe, t.now = Ir, t.utc = d, t.unix = Rn, t.months = Yn, t.isDate = o, t.locale = Xt, t.invalid = f, t.duration = He, t.isMoment = v, t.weekdays = Vn, t.parseZone = $n, t.localeData = te, t.isDuration = _e, t.monthsShort = zn, t.weekdaysMin = qn, t.defineLocale = Jt, t.updateLocale = Kt, t.locales = ee, t.weekdaysShort = Bn, t.normalizeUnits = L, t.relativeTimeRounding = di, t.relativeTimeThreshold = ui, t.calendarFormat = Be, t.prototype = Br;
        var po = t;
        return po
    }),
    function(t) {
        "use strict";
        if ("function" == typeof define && define.amd) define(["jquery", "moment"], t);
        else if ("object" == typeof exports) t(require("jquery"), require("moment"));
        else {
            if ("undefined" == typeof jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
            if ("undefined" == typeof moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
            t(jQuery, moment)
        }
    }(function(t, e) {
        "use strict";
        if (!e) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
        var n = function(n, i) {
            var r, o, a, s, l, d = {},
                u = e().startOf("d"),
                c = u.clone(),
                h = !0,
                f = !1,
                p = !1,
                g = 0,
                m = [{
                    clsName: "days",
                    navFnc: "M",
                    navStep: 1
                }, {
                    clsName: "months",
                    navFnc: "y",
                    navStep: 1
                }, {
                    clsName: "years",
                    navFnc: "y",
                    navStep: 10
                }, {
                    clsName: "decades",
                    navFnc: "y",
                    navStep: 100
                }],
                v = ["days", "months", "years", "decades"],
                y = ["top", "bottom", "auto"],
                b = ["left", "right", "auto"],
                x = ["default", "top", "bottom"],
                w = {
                    up: 38,
                    38: "up",
                    down: 40,
                    40: "down",
                    left: 37,
                    37: "left",
                    right: 39,
                    39: "right",
                    tab: 9,
                    9: "tab",
                    escape: 27,
                    27: "escape",
                    enter: 13,
                    13: "enter",
                    pageUp: 33,
                    33: "pageUp",
                    pageDown: 34,
                    34: "pageDown",
                    shift: 16,
                    16: "shift",
                    control: 17,
                    17: "control",
                    space: 32,
                    32: "space",
                    t: 84,
                    84: "t",
                    "delete": 46,
                    46: "delete"
                },
                _ = {},
                k = function(t) {
                    if ("string" != typeof t || t.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
                    switch (t) {
                        case "y":
                            return a.indexOf("Y") !== -1;
                        case "M":
                            return a.indexOf("M") !== -1;
                        case "d":
                            return a.toLowerCase().indexOf("d") !== -1;
                        case "h":
                        case "H":
                            return a.toLowerCase().indexOf("h") !== -1;
                        case "m":
                            return a.indexOf("m") !== -1;
                        case "s":
                            return a.indexOf("s") !== -1;
                        default:
                            return !1
                    }
                },
                S = function() {
                    return k("h") || k("m") || k("s")
                },
                C = function() {
                    return k("y") || k("M") || k("d")
                },
                D = function() {
                    var e = t("<thead>").append(t("<tr>").append(t("<th>").addClass("prev").attr("data-action", "previous").append(t("<span>").addClass(i.icons.previous))).append(t("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", i.calendarWeeks ? "6" : "5")).append(t("<th>").addClass("next").attr("data-action", "next").append(t("<span>").addClass(i.icons.next)))),
                        n = t("<tbody>").append(t("<tr>").append(t("<td>").attr("colspan", i.calendarWeeks ? "8" : "7")));
                    return [t("<div>").addClass("datepicker-days").append(t("<table>").addClass("table-condensed").append(e).append(t("<tbody>"))), t("<div>").addClass("datepicker-months").append(t("<table>").addClass("table-condensed").append(e.clone()).append(n.clone())), t("<div>").addClass("datepicker-years").append(t("<table>").addClass("table-condensed").append(e.clone()).append(n.clone())), t("<div>").addClass("datepicker-decades").append(t("<table>").addClass("table-condensed").append(e.clone()).append(n.clone()))]
                },
                M = function() {
                    var e = t("<tr>"),
                        n = t("<tr>"),
                        r = t("<tr>");
                    return k("h") && (e.append(t("<td>").append(t("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: "Increment Hour"
                    }).addClass("btn").attr("data-action", "incrementHours").append(t("<span>").addClass(i.icons.up)))), n.append(t("<td>").append(t("<span>").addClass("timepicker-hour").attr({
                        "data-time-component": "hours",
                        title: "Pick Hour"
                    }).attr("data-action", "showHours"))), r.append(t("<td>").append(t("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: "Decrement Hour"
                    }).addClass("btn").attr("data-action", "decrementHours").append(t("<span>").addClass(i.icons.down))))), k("m") && (k("h") && (e.append(t("<td>").addClass("separator")), n.append(t("<td>").addClass("separator").html(":")), r.append(t("<td>").addClass("separator"))), e.append(t("<td>").append(t("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: "Increment Minute"
                    }).addClass("btn").attr("data-action", "incrementMinutes").append(t("<span>").addClass(i.icons.up)))), n.append(t("<td>").append(t("<span>").addClass("timepicker-minute").attr({
                        "data-time-component": "minutes",
                        title: "Pick Minute"
                    }).attr("data-action", "showMinutes"))), r.append(t("<td>").append(t("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: "Decrement Minute"
                    }).addClass("btn").attr("data-action", "decrementMinutes").append(t("<span>").addClass(i.icons.down))))), k("s") && (k("m") && (e.append(t("<td>").addClass("separator")), n.append(t("<td>").addClass("separator").html(":")), r.append(t("<td>").addClass("separator"))), e.append(t("<td>").append(t("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: "Increment Second"
                    }).addClass("btn").attr("data-action", "incrementSeconds").append(t("<span>").addClass(i.icons.up)))), n.append(t("<td>").append(t("<span>").addClass("timepicker-second").attr({
                        "data-time-component": "seconds",
                        title: "Pick Second"
                    }).attr("data-action", "showSeconds"))), r.append(t("<td>").append(t("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: "Decrement Second"
                    }).addClass("btn").attr("data-action", "decrementSeconds").append(t("<span>").addClass(i.icons.down))))), o || (e.append(t("<td>").addClass("separator")), n.append(t("<td>").append(t("<button>").addClass("btn btn-primary").attr({
                        "data-action": "togglePeriod",
                        tabindex: "-1",
                        title: "Toggle Period"
                    }))), r.append(t("<td>").addClass("separator"))), t("<div>").addClass("timepicker-picker").append(t("<table>").addClass("table-condensed").append([e, n, r]))
                },
                T = function() {
                    var e = t("<div>").addClass("timepicker-hours").append(t("<table>").addClass("table-condensed")),
                        n = t("<div>").addClass("timepicker-minutes").append(t("<table>").addClass("table-condensed")),
                        i = t("<div>").addClass("timepicker-seconds").append(t("<table>").addClass("table-condensed")),
                        r = [M()];
                    return k("h") && r.push(e), k("m") && r.push(n), k("s") && r.push(i), r
                },
                O = function() {
                    var e = [];
                    return i.showTodayButton && e.push(t("<td>").append(t("<a>").attr({
                        "data-action": "today",
                        title: i.tooltips.today
                    }).append(t("<span>").addClass(i.icons.today)))), !i.sideBySide && C() && S() && e.push(t("<td>").append(t("<a>").attr({
                        "data-action": "togglePicker",
                        title: "Select Time"
                    }).append(t("<span>").addClass(i.icons.time)))), i.showClear && e.push(t("<td>").append(t("<a>").attr({
                        "data-action": "clear",
                        title: i.tooltips.clear
                    }).append(t("<span>").addClass(i.icons.clear)))), i.showClose && e.push(t("<td>").append(t("<a>").attr({
                        "data-action": "close",
                        title: i.tooltips.close
                    }).append(t("<span>").addClass(i.icons.close)))), t("<table>").addClass("table-condensed").append(t("<tbody>").append(t("<tr>").append(e)))
                },
                A = function() {
                    var e = t("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
                        n = t("<div>").addClass("datepicker").append(D()),
                        r = t("<div>").addClass("timepicker").append(T()),
                        a = t("<ul>").addClass("list-unstyled"),
                        s = t("<li>").addClass("picker-switch" + (i.collapse ? " accordion-toggle" : "")).append(O());
                    return i.inline && e.removeClass("dropdown-menu"), o && e.addClass("usetwentyfour"), k("s") && !o && e.addClass("wider"), i.sideBySide && C() && S() ? (e.addClass("timepicker-sbs"), "top" === i.toolbarPlacement && e.append(s), e.append(t("<div>").addClass("row").append(n.addClass("col-md-6")).append(r.addClass("col-md-6"))), "bottom" === i.toolbarPlacement && e.append(s), e) : ("top" === i.toolbarPlacement && a.append(s), C() && a.append(t("<li>").addClass(i.collapse && S() ? "collapse in" : "").append(n)), "default" === i.toolbarPlacement && a.append(s), S() && a.append(t("<li>").addClass(i.collapse && C() ? "collapse" : "").append(r)), "bottom" === i.toolbarPlacement && a.append(s), e.append(a))
                },
                P = function() {
                    var e, r = {};
                    return e = n.is("input") || i.inline ? n.data() : n.find("input").data(), e.dateOptions && e.dateOptions instanceof Object && (r = t.extend(!0, r, e.dateOptions)), t.each(i, function(t) {
                        var n = "date" + t.charAt(0).toUpperCase() + t.slice(1);
                        void 0 !== e[n] && (r[t] = e[n])
                    }), r
                },
                I = function() {
                    var e, r = (f || n).position(),
                        o = (f || n).offset(),
                        a = i.widgetPositioning.vertical,
                        s = i.widgetPositioning.horizontal;
                    if (i.widgetParent) e = i.widgetParent.append(p);
                    else if (n.is("input")) e = n.after(p).parent();
                    else {
                        if (i.inline) return void(e = n.append(p));
                        e = n, n.children().first().after(p)
                    }
                    if ("auto" === a && (a = o.top + 1.5 * p.height() >= t(window).height() + t(window).scrollTop() && p.height() + n.outerHeight() < o.top ? "top" : "bottom"), "auto" === s && (s = e.width() < o.left + p.outerWidth() / 2 && o.left + p.outerWidth() > t(window).width() ? "right" : "left"), "top" === a ? p.addClass("top").removeClass("bottom") : p.addClass("bottom").removeClass("top"), "right" === s ? p.addClass("pull-right") : p.removeClass("pull-right"), "relative" !== e.css("position") && (e = e.parents().filter(function() {
                            return "relative" === t(this).css("position")
                        }).first()), 0 === e.length) throw new Error("datetimepicker component should be placed within a relative positioned container");
                    p.css({
                        top: "top" === a ? "auto" : r.top + n.outerHeight(),
                        bottom: "top" === a ? r.top + n.outerHeight() : "auto",
                        left: "left" === s ? e === n ? 0 : r.left : "auto",
                        right: "left" === s ? "auto" : e.outerWidth() - n.outerWidth() - (e === n ? 0 : r.left)
                    })
                },
                F = function(t) {
                    "dp.change" === t.type && (t.date && t.date.isSame(t.oldDate) || !t.date && !t.oldDate) || n.trigger(t)
                },
                E = function(t) {
                    "y" === t && (t = "YYYY"), F({
                        type: "dp.update",
                        change: t,
                        viewDate: c.clone()
                    })
                },
                L = function(t) {
                    p && (t && (l = Math.max(g, Math.min(3, l + t))), p.find(".datepicker > div").hide().filter(".datepicker-" + m[l].clsName).show())
                },
                R = function() {
                    var e = t("<tr>"),
                        n = c.clone().startOf("w").startOf("d");
                    for (i.calendarWeeks === !0 && e.append(t("<th>").addClass("cw").text("#")); n.isBefore(c.clone().endOf("w"));) e.append(t("<th>").addClass("dow").text(n.format("dd"))), n.add(1, "d");
                    p.find(".datepicker-days thead").append(e)
                },
                $ = function(t) {
                    return i.disabledDates[t.format("YYYY-MM-DD")] === !0
                },
                W = function(t) {
                    return i.enabledDates[t.format("YYYY-MM-DD")] === !0
                },
                H = function(t) {
                    return i.disabledHours[t.format("H")] === !0
                },
                N = function(t) {
                    return i.enabledHours[t.format("H")] === !0
                },
                j = function(e, n) {
                    if (!e.isValid()) return !1;
                    if (i.disabledDates && "d" === n && $(e)) return !1;
                    if (i.enabledDates && "d" === n && !W(e)) return !1;
                    if (i.minDate && e.isBefore(i.minDate, n)) return !1;
                    if (i.maxDate && e.isAfter(i.maxDate, n)) return !1;
                    if (i.daysOfWeekDisabled && "d" === n && i.daysOfWeekDisabled.indexOf(e.day()) !== -1) return !1;
                    if (i.disabledHours && ("h" === n || "m" === n || "s" === n) && H(e)) return !1;
                    if (i.enabledHours && ("h" === n || "m" === n || "s" === n) && !N(e)) return !1;
                    if (i.disabledTimeIntervals && ("h" === n || "m" === n || "s" === n)) {
                        var r = !1;
                        if (t.each(i.disabledTimeIntervals, function() {
                                if (e.isBetween(this[0], this[1])) return r = !0, !1
                            }), r) return !1
                    }
                    return !0
                },
                Y = function() {
                    for (var e = [], n = c.clone().startOf("y").startOf("d"); n.isSame(c, "y");) e.push(t("<span>").attr("data-action", "selectMonth").addClass("month").text(n.format("MMM"))), n.add(1, "M");
                    p.find(".datepicker-months td").empty().append(e)
                },
                z = function() {
                    var e = p.find(".datepicker-months"),
                        n = e.find("th"),
                        r = e.find("tbody").find("span");
                    n.eq(0).find("span").attr("title", i.tooltips.prevYear), n.eq(1).attr("title", i.tooltips.selectYear), n.eq(2).find("span").attr("title", i.tooltips.nextYear), e.find(".disabled").removeClass("disabled"), j(c.clone().subtract(1, "y"), "y") || n.eq(0).addClass("disabled"), n.eq(1).text(c.year()), j(c.clone().add(1, "y"), "y") || n.eq(2).addClass("disabled"), r.removeClass("active"), u.isSame(c, "y") && !h && r.eq(u.month()).addClass("active"), r.each(function(e) {
                        j(c.clone().month(e), "M") || t(this).addClass("disabled")
                    })
                },
                V = function() {
                    var t = p.find(".datepicker-years"),
                        e = t.find("th"),
                        n = c.clone().subtract(5, "y"),
                        r = c.clone().add(6, "y"),
                        o = "";
                    for (e.eq(0).find("span").attr("title", i.tooltips.nextDecade), e.eq(1).attr("title", i.tooltips.selectDecade), e.eq(2).find("span").attr("title", i.tooltips.prevDecade), t.find(".disabled").removeClass("disabled"), i.minDate && i.minDate.isAfter(n, "y") && e.eq(0).addClass("disabled"), e.eq(1).text(n.year() + "-" + r.year()), i.maxDate && i.maxDate.isBefore(r, "y") && e.eq(2).addClass("disabled"); !n.isAfter(r, "y");) o += '<span data-action="selectYear" class="year' + (n.isSame(u, "y") && !h ? " active" : "") + (j(n, "y") ? "" : " disabled") + '">' + n.year() + "</span>", n.add(1, "y");
                    t.find("td").html(o)
                },
                B = function() {
                    var t = p.find(".datepicker-decades"),
                        n = t.find("th"),
                        r = e(c.isBefore(e({
                            y: 1999
                        })) ? {
                            y: 1899
                        } : {
                            y: 1999
                        }),
                        o = r.clone().add(100, "y"),
                        a = "";
                    for (n.eq(0).find("span").attr("title", i.tooltips.prevCentury), n.eq(2).find("span").attr("title", i.tooltips.nextCentury), t.find(".disabled").removeClass("disabled"), (r.isSame(e({
                            y: 1900
                        })) || i.minDate && i.minDate.isAfter(r, "y")) && n.eq(0).addClass("disabled"), n.eq(1).text(r.year() + "-" + o.year()), (r.isSame(e({
                            y: 2e3
                        })) || i.maxDate && i.maxDate.isBefore(o, "y")) && n.eq(2).addClass("disabled"); !r.isAfter(o, "y");) a += '<span data-action="selectDecade" class="decade' + (r.isSame(u, "y") ? " active" : "") + (j(r, "y") ? "" : " disabled") + '" data-selection="' + (r.year() + 6) + '">' + (r.year() + 1) + " - " + (r.year() + 12) + "</span>", r.add(12, "y");
                    a += "<span></span><span></span><span></span>", t.find("td").html(a)
                },
                q = function() {
                    var n, r, o, a, s = p.find(".datepicker-days"),
                        l = s.find("th"),
                        d = [];
                    if (C()) {
                        for (l.eq(0).find("span").attr("title", i.tooltips.prevMonth), l.eq(1).attr("title", i.tooltips.selectMonth), l.eq(2).find("span").attr("title", i.tooltips.nextMonth), s.find(".disabled").removeClass("disabled"), l.eq(1).text(c.format(i.dayViewHeaderFormat)), j(c.clone().subtract(1, "M"), "M") || l.eq(0).addClass("disabled"), j(c.clone().add(1, "M"), "M") || l.eq(2).addClass("disabled"), n = c.clone().startOf("M").startOf("w").startOf("d"), a = 0; a < 42; a++) 0 === n.weekday() && (r = t("<tr>"), i.calendarWeeks && r.append('<td class="cw">' + n.week() + "</td>"), d.push(r)), o = "", n.isBefore(c, "M") && (o += " old"), n.isAfter(c, "M") && (o += " new"), n.isSame(u, "d") && !h && (o += " active"), j(n, "d") || (o += " disabled"), n.isSame(e(), "d") && (o += " today"), 0 !== n.day() && 6 !== n.day() || (o += " weekend"), r.append('<td data-action="selectDay" data-day="' + n.format("L") + '" class="day' + o + '">' + n.date() + "</td>"), n.add(1, "d");
                        s.find("tbody").empty().append(d), z(), V(), B()
                    }
                },
                U = function() {
                    var e = p.find(".timepicker-hours table"),
                        n = c.clone().startOf("d"),
                        i = [],
                        r = t("<tr>");
                    for (c.hour() > 11 && !o && n.hour(12); n.isSame(c, "d") && (o || c.hour() < 12 && n.hour() < 12 || c.hour() > 11);) n.hour() % 4 === 0 && (r = t("<tr>"), i.push(r)), r.append('<td data-action="selectHour" class="hour' + (j(n, "h") ? "" : " disabled") + '">' + n.format(o ? "HH" : "hh") + "</td>"), n.add(1, "h");
                    e.empty().append(i)
                },
                G = function() {
                    for (var e = p.find(".timepicker-minutes table"), n = c.clone().startOf("h"), r = [], o = t("<tr>"), a = 1 === i.stepping ? 5 : i.stepping; c.isSame(n, "h");) n.minute() % (4 * a) === 0 && (o = t("<tr>"), r.push(o)), o.append('<td data-action="selectMinute" class="minute' + (j(n, "m") ? "" : " disabled") + '">' + n.format("mm") + "</td>"), n.add(a, "m");
                    e.empty().append(r)
                },
                Z = function() {
                    for (var e = p.find(".timepicker-seconds table"), n = c.clone().startOf("m"), i = [], r = t("<tr>"); c.isSame(n, "m");) n.second() % 20 === 0 && (r = t("<tr>"),
                        i.push(r)), r.append('<td data-action="selectSecond" class="second' + (j(n, "s") ? "" : " disabled") + '">' + n.format("ss") + "</td>"), n.add(5, "s");
                    e.empty().append(i)
                },
                Q = function() {
                    var t, e, n = p.find(".timepicker span[data-time-component]");
                    o || (t = p.find(".timepicker [data-action=togglePeriod]"), e = u.clone().add(u.hours() >= 12 ? -12 : 12, "h"), t.text(u.format("A")), j(e, "h") ? t.removeClass("disabled") : t.addClass("disabled")), n.filter("[data-time-component=hours]").text(u.format(o ? "HH" : "hh")), n.filter("[data-time-component=minutes]").text(u.format("mm")), n.filter("[data-time-component=seconds]").text(u.format("ss")), U(), G(), Z()
                },
                X = function() {
                    p && (q(), Q())
                },
                J = function(t) {
                    var e = h ? null : u;
                    return t ? (t = t.clone().locale(i.locale), 1 !== i.stepping && t.minutes(Math.round(t.minutes() / i.stepping) * i.stepping % 60).seconds(0), void(j(t) ? (u = t, c = u.clone(), r.val(u.format(a)), n.data("date", u.format(a)), h = !1, X(), F({
                        type: "dp.change",
                        date: u.clone(),
                        oldDate: e
                    })) : (i.keepInvalid || r.val(h ? "" : u.format(a)), F({
                        type: "dp.error",
                        date: t
                    })))) : (h = !0, r.val(""), n.data("date", ""), F({
                        type: "dp.change",
                        date: !1,
                        oldDate: e
                    }), void X())
                },
                K = function() {
                    var e = !1;
                    return p ? (p.find(".collapse").each(function() {
                        var n = t(this).data("collapse");
                        return !n || !n.transitioning || (e = !0, !1)
                    }), e ? d : (f && f.hasClass("btn") && f.toggleClass("active"), p.hide(), t(window).off("resize", I), p.off("click", "[data-action]"), p.off("mousedown", !1), p.remove(), p = !1, F({
                        type: "dp.hide",
                        date: u.clone()
                    }), r.blur(), d)) : d
                },
                tt = function() {
                    J(null)
                },
                et = {
                    next: function() {
                        var t = m[l].navFnc;
                        c.add(m[l].navStep, t), q(), E(t)
                    },
                    previous: function() {
                        var t = m[l].navFnc;
                        c.subtract(m[l].navStep, t), q(), E(t)
                    },
                    pickerSwitch: function() {
                        L(1)
                    },
                    selectMonth: function(e) {
                        var n = t(e.target).closest("tbody").find("span").index(t(e.target));
                        c.month(n), l === g ? (J(u.clone().year(c.year()).month(c.month())), i.inline || K()) : (L(-1), q()), E("M")
                    },
                    selectYear: function(e) {
                        var n = parseInt(t(e.target).text(), 10) || 0;
                        c.year(n), l === g ? (J(u.clone().year(c.year())), i.inline || K()) : (L(-1), q()), E("YYYY")
                    },
                    selectDecade: function(e) {
                        var n = parseInt(t(e.target).data("selection"), 10) || 0;
                        c.year(n), l === g ? (J(u.clone().year(c.year())), i.inline || K()) : (L(-1), q()), E("YYYY")
                    },
                    selectDay: function(e) {
                        var n = c.clone();
                        t(e.target).is(".old") && n.subtract(1, "M"), t(e.target).is(".new") && n.add(1, "M"), J(n.date(parseInt(t(e.target).text(), 10))), S() || i.keepOpen || i.inline || K()
                    },
                    incrementHours: function() {
                        var t = u.clone().add(1, "h");
                        j(t, "h") && J(t)
                    },
                    incrementMinutes: function() {
                        var t = u.clone().add(i.stepping, "m");
                        j(t, "m") && J(t)
                    },
                    incrementSeconds: function() {
                        var t = u.clone().add(1, "s");
                        j(t, "s") && J(t)
                    },
                    decrementHours: function() {
                        var t = u.clone().subtract(1, "h");
                        j(t, "h") && J(t)
                    },
                    decrementMinutes: function() {
                        var t = u.clone().subtract(i.stepping, "m");
                        j(t, "m") && J(t)
                    },
                    decrementSeconds: function() {
                        var t = u.clone().subtract(1, "s");
                        j(t, "s") && J(t)
                    },
                    togglePeriod: function() {
                        J(u.clone().add(u.hours() >= 12 ? -12 : 12, "h"))
                    },
                    togglePicker: function(e) {
                        var n, r = t(e.target),
                            o = r.closest("ul"),
                            a = o.find(".in"),
                            s = o.find(".collapse:not(.in)");
                        if (a && a.length) {
                            if (n = a.data("collapse"), n && n.transitioning) return;
                            a.collapse ? (a.collapse("hide"), s.collapse("show")) : (a.removeClass("in"), s.addClass("in")), r.is("span") ? r.toggleClass(i.icons.time + " " + i.icons.date) : r.find("span").toggleClass(i.icons.time + " " + i.icons.date)
                        }
                    },
                    showPicker: function() {
                        p.find(".timepicker > div:not(.timepicker-picker)").hide(), p.find(".timepicker .timepicker-picker").show()
                    },
                    showHours: function() {
                        p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-hours").show()
                    },
                    showMinutes: function() {
                        p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-minutes").show()
                    },
                    showSeconds: function() {
                        p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-seconds").show()
                    },
                    selectHour: function(e) {
                        var n = parseInt(t(e.target).text(), 10);
                        o || (u.hours() >= 12 ? 12 !== n && (n += 12) : 12 === n && (n = 0)), J(u.clone().hours(n)), et.showPicker.call(d)
                    },
                    selectMinute: function(e) {
                        J(u.clone().minutes(parseInt(t(e.target).text(), 10))), et.showPicker.call(d)
                    },
                    selectSecond: function(e) {
                        J(u.clone().seconds(parseInt(t(e.target).text(), 10))), et.showPicker.call(d)
                    },
                    clear: tt,
                    today: function() {
                        j(e(), "d") && J(e())
                    },
                    close: K
                },
                nt = function(e) {
                    return !t(e.currentTarget).is(".disabled") && (et[t(e.currentTarget).data("action")].apply(d, arguments), !1)
                },
                it = function() {
                    var n, o = {
                        year: function(t) {
                            return t.month(0).date(1).hours(0).seconds(0).minutes(0)
                        },
                        month: function(t) {
                            return t.date(1).hours(0).seconds(0).minutes(0)
                        },
                        day: function(t) {
                            return t.hours(0).seconds(0).minutes(0)
                        },
                        hour: function(t) {
                            return t.seconds(0).minutes(0)
                        },
                        minute: function(t) {
                            return t.seconds(0)
                        }
                    };
                    return r.prop("disabled") || !i.ignoreReadonly && r.prop("readonly") || p ? d : (void 0 !== r.val() && 0 !== r.val().trim().length ? J(ot(r.val().trim())) : i.useCurrent && h && (r.is("input") && 0 === r.val().trim().length || i.inline) && (n = e(), "string" == typeof i.useCurrent && (n = o[i.useCurrent](n)), J(n)), p = A(), R(), Y(), p.find(".timepicker-hours").hide(), p.find(".timepicker-minutes").hide(), p.find(".timepicker-seconds").hide(), X(), L(), t(window).on("resize", I), p.on("click", "[data-action]", nt), p.on("mousedown", !1), f && f.hasClass("btn") && f.toggleClass("active"), p.show(), I(), i.focusOnShow && !r.is(":focus") && r.focus(), F({
                        type: "dp.show"
                    }), d)
                },
                rt = function() {
                    return p ? K() : it()
                },
                ot = function(t) {
                    return t = void 0 === i.parseInputDate ? e.isMoment(t) || t instanceof Date ? e(t) : e(t, s, i.useStrict) : i.parseInputDate(t), t.locale(i.locale), t
                },
                at = function(t) {
                    var e, n, r, o, a = null,
                        s = [],
                        l = {},
                        u = t.which,
                        c = "p";
                    _[u] = c;
                    for (e in _) _.hasOwnProperty(e) && _[e] === c && (s.push(e), parseInt(e, 10) !== u && (l[e] = !0));
                    for (e in i.keyBinds)
                        if (i.keyBinds.hasOwnProperty(e) && "function" == typeof i.keyBinds[e] && (r = e.split(" "), r.length === s.length && w[u] === r[r.length - 1])) {
                            for (o = !0, n = r.length - 2; n >= 0; n--)
                                if (!(w[r[n]] in l)) {
                                    o = !1;
                                    break
                                }
                            if (o) {
                                a = i.keyBinds[e];
                                break
                            }
                        }
                    a && (a.call(d, p), t.stopPropagation(), t.preventDefault())
                },
                st = function(t) {
                    _[t.which] = "r", t.stopPropagation(), t.preventDefault()
                },
                lt = function(e) {
                    var n = t(e.target).val().trim(),
                        i = n ? ot(n) : null;
                    return J(i), e.stopImmediatePropagation(), !1
                },
                dt = function() {
                    r.on({
                        change: lt,
                        blur: i.debug ? "" : K,
                        keydown: at,
                        keyup: st,
                        focus: i.allowInputToggle ? it : ""
                    }), n.is("input") ? r.on({
                        focus: it
                    }) : f && (f.on("click", rt), f.on("mousedown", !1))
                },
                ut = function() {
                    r.off({
                        change: lt,
                        blur: blur,
                        keydown: at,
                        keyup: st,
                        focus: i.allowInputToggle ? K : ""
                    }), n.is("input") ? r.off({
                        focus: it
                    }) : f && (f.off("click", rt), f.off("mousedown", !1))
                },
                ct = function(e) {
                    var n = {};
                    return t.each(e, function() {
                        var t = ot(this);
                        t.isValid() && (n[t.format("YYYY-MM-DD")] = !0)
                    }), !!Object.keys(n).length && n
                },
                ht = function(e) {
                    var n = {};
                    return t.each(e, function() {
                        n[this] = !0
                    }), !!Object.keys(n).length && n
                },
                ft = function() {
                    var t = i.format || "L LT";
                    a = t.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(t) {
                        var e = u.localeData().longDateFormat(t) || t;
                        return e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(t) {
                            return u.localeData().longDateFormat(t) || t
                        })
                    }), s = i.extraFormats ? i.extraFormats.slice() : [], s.indexOf(t) < 0 && s.indexOf(a) < 0 && s.push(a), o = a.toLowerCase().indexOf("a") < 1 && a.replace(/\[.*?\]/g, "").indexOf("h") < 1, k("y") && (g = 2), k("M") && (g = 1), k("d") && (g = 0), l = Math.max(g, l), h || J(u)
                };
            if (d.destroy = function() {
                    K(), ut(), n.removeData("DateTimePicker"), n.removeData("date")
                }, d.toggle = rt, d.show = it, d.hide = K, d.disable = function() {
                    return K(), f && f.hasClass("btn") && f.addClass("disabled"), r.prop("disabled", !0), d
                }, d.enable = function() {
                    return f && f.hasClass("btn") && f.removeClass("disabled"), r.prop("disabled", !1), d
                }, d.ignoreReadonly = function(t) {
                    if (0 === arguments.length) return i.ignoreReadonly;
                    if ("boolean" != typeof t) throw new TypeError("ignoreReadonly () expects a boolean parameter");
                    return i.ignoreReadonly = t, d
                }, d.options = function(e) {
                    if (0 === arguments.length) return t.extend(!0, {}, i);
                    if (!(e instanceof Object)) throw new TypeError("options() options parameter should be an object");
                    return t.extend(!0, i, e), t.each(i, function(t, e) {
                        if (void 0 === d[t]) throw new TypeError("option " + t + " is not recognized!");
                        d[t](e)
                    }), d
                }, d.date = function(t) {
                    if (0 === arguments.length) return h ? null : u.clone();
                    if (!(null === t || "string" == typeof t || e.isMoment(t) || t instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
                    return J(null === t ? null : ot(t)), d
                }, d.format = function(t) {
                    if (0 === arguments.length) return i.format;
                    if ("string" != typeof t && ("boolean" != typeof t || t !== !1)) throw new TypeError("format() expects a sting or boolean:false parameter " + t);
                    return i.format = t, a && ft(), d
                }, d.dayViewHeaderFormat = function(t) {
                    if (0 === arguments.length) return i.dayViewHeaderFormat;
                    if ("string" != typeof t) throw new TypeError("dayViewHeaderFormat() expects a string parameter");
                    return i.dayViewHeaderFormat = t, d
                }, d.extraFormats = function(t) {
                    if (0 === arguments.length) return i.extraFormats;
                    if (t !== !1 && !(t instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
                    return i.extraFormats = t, s && ft(), d
                }, d.disabledDates = function(e) {
                    if (0 === arguments.length) return i.disabledDates ? t.extend({}, i.disabledDates) : i.disabledDates;
                    if (!e) return i.disabledDates = !1, X(), d;
                    if (!(e instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
                    return i.disabledDates = ct(e), i.enabledDates = !1, X(), d
                }, d.enabledDates = function(e) {
                    if (0 === arguments.length) return i.enabledDates ? t.extend({}, i.enabledDates) : i.enabledDates;
                    if (!e) return i.enabledDates = !1, X(), d;
                    if (!(e instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
                    return i.enabledDates = ct(e), i.disabledDates = !1, X(), d
                }, d.daysOfWeekDisabled = function(t) {
                    if (0 === arguments.length) return i.daysOfWeekDisabled.splice(0);
                    if ("boolean" == typeof t && !t) return i.daysOfWeekDisabled = !1, X(), d;
                    if (!(t instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
                    if (i.daysOfWeekDisabled = t.reduce(function(t, e) {
                            return e = parseInt(e, 10), e > 6 || e < 0 || isNaN(e) ? t : (t.indexOf(e) === -1 && t.push(e), t)
                        }, []).sort(), i.useCurrent && !i.keepInvalid) {
                        for (var e = 0; !j(u, "d");) {
                            if (u.add(1, "d"), 7 === e) throw "Tried 7 times to find a valid date";
                            e++
                        }
                        J(u)
                    }
                    return X(), d
                }, d.maxDate = function(t) {
                    if (0 === arguments.length) return i.maxDate ? i.maxDate.clone() : i.maxDate;
                    if ("boolean" == typeof t && t === !1) return i.maxDate = !1, X(), d;
                    "string" == typeof t && ("now" !== t && "moment" !== t || (t = e()));
                    var n = ot(t);
                    if (!n.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + t);
                    if (i.minDate && n.isBefore(i.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + n.format(a));
                    return i.maxDate = n, i.useCurrent && !i.keepInvalid && u.isAfter(t) && J(i.maxDate), c.isAfter(n) && (c = n.clone().subtract(i.stepping, "m")), X(), d
                }, d.minDate = function(t) {
                    if (0 === arguments.length) return i.minDate ? i.minDate.clone() : i.minDate;
                    if ("boolean" == typeof t && t === !1) return i.minDate = !1, X(), d;
                    "string" == typeof t && ("now" !== t && "moment" !== t || (t = e()));
                    var n = ot(t);
                    if (!n.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + t);
                    if (i.maxDate && n.isAfter(i.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + n.format(a));
                    return i.minDate = n, i.useCurrent && !i.keepInvalid && u.isBefore(t) && J(i.minDate), c.isBefore(n) && (c = n.clone().add(i.stepping, "m")), X(), d
                }, d.defaultDate = function(t) {
                    if (0 === arguments.length) return i.defaultDate ? i.defaultDate.clone() : i.defaultDate;
                    if (!t) return i.defaultDate = !1, d;
                    "string" == typeof t && ("now" !== t && "moment" !== t || (t = e()));
                    var n = ot(t);
                    if (!n.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + t);
                    if (!j(n)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
                    return i.defaultDate = n, (i.defaultDate && i.inline || "" === r.val().trim() && void 0 === r.attr("placeholder")) && J(i.defaultDate), d
                }, d.locale = function(t) {
                    if (0 === arguments.length) return i.locale;
                    if (!e.localeData(t)) throw new TypeError("locale() locale " + t + " is not loaded from moment locales!");
                    return i.locale = t, u.locale(i.locale), c.locale(i.locale), a && ft(), p && (K(), it()), d
                }, d.stepping = function(t) {
                    return 0 === arguments.length ? i.stepping : (t = parseInt(t, 10), (isNaN(t) || t < 1) && (t = 1), i.stepping = t, d)
                }, d.useCurrent = function(t) {
                    var e = ["year", "month", "day", "hour", "minute"];
                    if (0 === arguments.length) return i.useCurrent;
                    if ("boolean" != typeof t && "string" != typeof t) throw new TypeError("useCurrent() expects a boolean or string parameter");
                    if ("string" == typeof t && e.indexOf(t.toLowerCase()) === -1) throw new TypeError("useCurrent() expects a string parameter of " + e.join(", "));
                    return i.useCurrent = t, d
                }, d.collapse = function(t) {
                    if (0 === arguments.length) return i.collapse;
                    if ("boolean" != typeof t) throw new TypeError("collapse() expects a boolean parameter");
                    return i.collapse === t ? d : (i.collapse = t, p && (K(), it()), d)
                }, d.icons = function(e) {
                    if (0 === arguments.length) return t.extend({}, i.icons);
                    if (!(e instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
                    return t.extend(i.icons, e), p && (K(), it()), d
                }, d.tooltips = function(e) {
                    if (0 === arguments.length) return t.extend({}, i.tooltips);
                    if (!(e instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object");
                    return t.extend(i.tooltips, e), p && (K(), it()), d
                }, d.useStrict = function(t) {
                    if (0 === arguments.length) return i.useStrict;
                    if ("boolean" != typeof t) throw new TypeError("useStrict() expects a boolean parameter");
                    return i.useStrict = t, d
                }, d.sideBySide = function(t) {
                    if (0 === arguments.length) return i.sideBySide;
                    if ("boolean" != typeof t) throw new TypeError("sideBySide() expects a boolean parameter");
                    return i.sideBySide = t, p && (K(), it()), d
                }, d.viewMode = function(t) {
                    if (0 === arguments.length) return i.viewMode;
                    if ("string" != typeof t) throw new TypeError("viewMode() expects a string parameter");
                    if (v.indexOf(t) === -1) throw new TypeError("viewMode() parameter must be one of (" + v.join(", ") + ") value");
                    return i.viewMode = t, l = Math.max(v.indexOf(t), g), L(), d
                }, d.toolbarPlacement = function(t) {
                    if (0 === arguments.length) return i.toolbarPlacement;
                    if ("string" != typeof t) throw new TypeError("toolbarPlacement() expects a string parameter");
                    if (x.indexOf(t) === -1) throw new TypeError("toolbarPlacement() parameter must be one of (" + x.join(", ") + ") value");
                    return i.toolbarPlacement = t, p && (K(), it()), d
                }, d.widgetPositioning = function(e) {
                    if (0 === arguments.length) return t.extend({}, i.widgetPositioning);
                    if ("[object Object]" !== {}.toString.call(e)) throw new TypeError("widgetPositioning() expects an object variable");
                    if (e.horizontal) {
                        if ("string" != typeof e.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
                        if (e.horizontal = e.horizontal.toLowerCase(), b.indexOf(e.horizontal) === -1) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + b.join(", ") + ")");
                        i.widgetPositioning.horizontal = e.horizontal
                    }
                    if (e.vertical) {
                        if ("string" != typeof e.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
                        if (e.vertical = e.vertical.toLowerCase(), y.indexOf(e.vertical) === -1) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + y.join(", ") + ")");
                        i.widgetPositioning.vertical = e.vertical
                    }
                    return X(), d
                }, d.calendarWeeks = function(t) {
                    if (0 === arguments.length) return i.calendarWeeks;
                    if ("boolean" != typeof t) throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
                    return i.calendarWeeks = t, X(), d
                }, d.showTodayButton = function(t) {
                    if (0 === arguments.length) return i.showTodayButton;
                    if ("boolean" != typeof t) throw new TypeError("showTodayButton() expects a boolean parameter");
                    return i.showTodayButton = t, p && (K(), it()), d
                }, d.showClear = function(t) {
                    if (0 === arguments.length) return i.showClear;
                    if ("boolean" != typeof t) throw new TypeError("showClear() expects a boolean parameter");
                    return i.showClear = t, p && (K(), it()), d
                }, d.widgetParent = function(e) {
                    if (0 === arguments.length) return i.widgetParent;
                    if ("string" == typeof e && (e = t(e)), null !== e && "string" != typeof e && !(e instanceof t)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
                    return i.widgetParent = e, p && (K(), it()), d
                }, d.keepOpen = function(t) {
                    if (0 === arguments.length) return i.keepOpen;
                    if ("boolean" != typeof t) throw new TypeError("keepOpen() expects a boolean parameter");
                    return i.keepOpen = t, d
                }, d.focusOnShow = function(t) {
                    if (0 === arguments.length) return i.focusOnShow;
                    if ("boolean" != typeof t) throw new TypeError("focusOnShow() expects a boolean parameter");
                    return i.focusOnShow = t, d
                }, d.inline = function(t) {
                    if (0 === arguments.length) return i.inline;
                    if ("boolean" != typeof t) throw new TypeError("inline() expects a boolean parameter");
                    return i.inline = t, d
                }, d.clear = function() {
                    return tt(), d
                }, d.keyBinds = function(t) {
                    return i.keyBinds = t, d
                }, d.debug = function(t) {
                    if ("boolean" != typeof t) throw new TypeError("debug() expects a boolean parameter");
                    return i.debug = t, d
                }, d.allowInputToggle = function(t) {
                    if (0 === arguments.length) return i.allowInputToggle;
                    if ("boolean" != typeof t) throw new TypeError("allowInputToggle() expects a boolean parameter");
                    return i.allowInputToggle = t, d
                }, d.showClose = function(t) {
                    if (0 === arguments.length) return i.showClose;
                    if ("boolean" != typeof t) throw new TypeError("showClose() expects a boolean parameter");
                    return i.showClose = t, d
                }, d.keepInvalid = function(t) {
                    if (0 === arguments.length) return i.keepInvalid;
                    if ("boolean" != typeof t) throw new TypeError("keepInvalid() expects a boolean parameter");
                    return i.keepInvalid = t, d
                }, d.datepickerInput = function(t) {
                    if (0 === arguments.length) return i.datepickerInput;
                    if ("string" != typeof t) throw new TypeError("datepickerInput() expects a string parameter");
                    return i.datepickerInput = t, d
                }, d.parseInputDate = function(t) {
                    if (0 === arguments.length) return i.parseInputDate;
                    if ("function" != typeof t) throw new TypeError("parseInputDate() sholud be as function");
                    return i.parseInputDate = t, d
                }, d.disabledTimeIntervals = function(e) {
                    if (0 === arguments.length) return i.disabledTimeIntervals ? t.extend({}, i.disabledTimeIntervals) : i.disabledTimeIntervals;
                    if (!e) return i.disabledTimeIntervals = !1, X(), d;
                    if (!(e instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter");
                    return i.disabledTimeIntervals = e, X(), d
                }, d.disabledHours = function(e) {
                    if (0 === arguments.length) return i.disabledHours ? t.extend({}, i.disabledHours) : i.disabledHours;
                    if (!e) return i.disabledHours = !1, X(), d;
                    if (!(e instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");
                    if (i.disabledHours = ht(e), i.enabledHours = !1, i.useCurrent && !i.keepInvalid) {
                        for (var n = 0; !j(u, "h");) {
                            if (u.add(1, "h"), 24 === n) throw "Tried 24 times to find a valid date";
                            n++
                        }
                        J(u)
                    }
                    return X(), d
                }, d.enabledHours = function(e) {
                    if (0 === arguments.length) return i.enabledHours ? t.extend({}, i.enabledHours) : i.enabledHours;
                    if (!e) return i.enabledHours = !1, X(), d;
                    if (!(e instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");
                    if (i.enabledHours = ht(e), i.disabledHours = !1, i.useCurrent && !i.keepInvalid) {
                        for (var n = 0; !j(u, "h");) {
                            if (u.add(1, "h"), 24 === n) throw "Tried 24 times to find a valid date";
                            n++
                        }
                        J(u)
                    }
                    return X(), d
                }, d.viewDate = function(t) {
                    if (0 === arguments.length) return c.clone();
                    if (!t) return c = u.clone(), d;
                    if (!("string" == typeof t || e.isMoment(t) || t instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
                    return c = ot(t), E(), d
                }, n.is("input")) r = n;
            else if (r = n.find(i.datepickerInput), 0 === r.size()) r = n.find("input");
            else if (!r.is("input")) throw new Error('CSS class "' + i.datepickerInput + '" cannot be applied to non input element');
            if (n.hasClass("input-group") && (f = 0 === n.find(".datepickerbutton").size() ? n.find(".input-group-addon") : n.find(".datepickerbutton")), !i.inline && !r.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
            return t.extend(!0, i, P()), d.options(i), ft(), dt(), r.prop("disabled") && d.disable(), r.is("input") && 0 !== r.val().trim().length ? J(ot(r.val().trim())) : i.defaultDate && void 0 === r.attr("placeholder") && J(i.defaultDate), i.inline && it(), d
        };
        t.fn.datetimepicker = function(e) {
            return this.each(function() {
                var i = t(this);
                i.data("DateTimePicker") || (e = t.extend(!0, {}, t.fn.datetimepicker.defaults, e), i.data("DateTimePicker", n(i, e)))
            })
        }, t.fn.datetimepicker.defaults = {
            format: !1,
            dayViewHeaderFormat: "MMMM YYYY",
            extraFormats: !1,
            stepping: 1,
            minDate: !1,
            maxDate: !1,
            useCurrent: !0,
            collapse: !0,
            locale: e.locale(),
            defaultDate: !1,
            disabledDates: !1,
            enabledDates: !1,
            icons: {
                time: "glyphicon glyphicon-time",
                date: "glyphicon glyphicon-calendar",
                up: "glyphicon glyphicon-chevron-up",
                down: "glyphicon glyphicon-chevron-down",
                previous: "glyphicon glyphicon-chevron-left",
                next: "glyphicon glyphicon-chevron-right",
                today: "glyphicon glyphicon-screenshot",
                clear: "glyphicon glyphicon-trash",
                close: "glyphicon glyphicon-remove"
            },
            tooltips: {
                today: "Go to today",
                clear: "Clear selection",
                close: "Close the picker",
                selectMonth: "Select Month",
                prevMonth: "Previous Month",
                nextMonth: "Next Month",
                selectYear: "Select Year",
                prevYear: "Previous Year",
                nextYear: "Next Year",
                selectDecade: "Select Decade",
                prevDecade: "Previous Decade",
                nextDecade: "Next Decade",
                prevCentury: "Previous Century",
                nextCentury: "Next Century"
            },
            useStrict: !1,
            sideBySide: !1,
            daysOfWeekDisabled: !1,
            calendarWeeks: !1,
            viewMode: "days",
            toolbarPlacement: "default",
            showTodayButton: !1,
            showClear: !1,
            showClose: !1,
            widgetPositioning: {
                horizontal: "auto",
                vertical: "auto"
            },
            widgetParent: null,
            ignoreReadonly: !1,
            keepOpen: !1,
            focusOnShow: !0,
            inline: !1,
            keepInvalid: !1,
            datepickerInput: ".datepickerinput",
            keyBinds: {
                up: function(t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") ? this.date(n.clone().subtract(7, "d")) : this.date(n.clone().add(this.stepping(), "m"))
                    }
                },
                down: function(t) {
                    if (!t) return void this.show();
                    var n = this.date() || e();
                    t.find(".datepicker").is(":visible") ? this.date(n.clone().add(7, "d")) : this.date(n.clone().subtract(this.stepping(), "m"))
                },
                "control up": function(t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") ? this.date(n.clone().subtract(1, "y")) : this.date(n.clone().add(1, "h"))
                    }
                },
                "control down": function(t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") ? this.date(n.clone().add(1, "y")) : this.date(n.clone().subtract(1, "h"))
                    }
                },
                left: function(t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") && this.date(n.clone().subtract(1, "d"))
                    }
                },
                right: function(t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") && this.date(n.clone().add(1, "d"))
                    }
                },
                pageUp: function(t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") && this.date(n.clone().subtract(1, "M"))
                    }
                },
                pageDown: function(t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") && this.date(n.clone().add(1, "M"))
                    }
                },
                enter: function() {
                    this.hide()
                },
                escape: function() {
                    this.hide()
                },
                "control space": function(t) {
                    t.find(".timepicker").is(":visible") && t.find('.btn[data-action="togglePeriod"]').click()
                },
                t: function() {
                    this.date(e())
                },
                "delete": function() {
                    this.clear()
                }
            },
            debug: !1,
            allowInputToggle: !1,
            disabledTimeIntervals: !1,
            disabledHours: !1,
            enabledHours: !1,
            viewDate: !1
        }
    }), $(function() {
        "use strict";
        var t, e = $(".search__input"),
            n = "--active";
        $.fn.textWidth = function(t, e) {
            $.fn.textWidth.fakeEl || ($.fn.textWidth.fakeEl = $('<span style="display: none;">').appendTo(document.body));
            var n = t || this.val() || this.text();
            return n = $.fn.textWidth.fakeEl.text(n).html(), n = n.replace(/\s/g, "&nbsp;"), $.fn.textWidth.fakeEl.html(n).css("font", e || this.css("font")), $.fn.textWidth.fakeEl.width()
        };
        var i = function(t) {
                $("." + t).addClass(t + n)
            },
            r = function(t) {
                $("." + t).removeClass(t + n)
            };
        e.on("focus", function() {
            i("search__icon")
        }), e.on("blur", function() {
            r("search__icon")
        }), e.on("keydown", function() {
            r("search__hint")
        });
        var o = function() {
            i("search__hint")
        };
        e.on("keyup", function() {
            clearTimeout(t), e.val().length && ($(".search__hint").css("left", e.textWidth() + 75), t = setTimeout(o, 250))
        })
    }), $(function() {
        $(".datetimepicker").datetimepicker({
            debug: !1,
            format: "YYYY-MM-DD HH:mm:ss"
        })
    }), $(function() {
        $(".field-unit--has-many select").selectize({})
    }), $(function() {
        var t = {
                space: 32,
                enter: 13
            },
            e = function(e) {
                "click" != e.type && e.keyCode != t.space && e.keyCode != t.enter || e.target.href || (window.location = $(e.target).closest("tr").data("url"))
            };
        $("table").on("click", ".table__row", e), $("table").on("keydown", ".table__row", e)
    }), Chart.defaults.global.defaultFontFamily = "'Open Sans','Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById("app-chart");
Chart.defaults.global.maintainAspectRatio = !1, null !== ctx && makeAppChart();
var handler = StripeCheckout.configure({
    key: "pk_live_L0iXG1Tz0woJct5yHxkDKAT3",
    image: "images/logo-square.jpg",
    locale: "auto",
    token: function(t) {
        $("#purchase-form #stripeToken").val(t.id), $("#purchase-form #stripeEmail").val(t.email), $("#purchase-form").submit()
    }
});
$(".buy-button").on("click", function(t) {
    bundleData = $(t.target).data(), $("#purchase-form #bundleType").val(bundleData.bundleType), handler.open({
        name: bundleData.credits + " credits for $" + bundleData.amount / 100,
        description: "Hover, LLC",
        zipCode: !0,
        amount: bundleData.amount
    }), t.preventDefault()
}), $(window).on("popstate", function() {
    handler.close()
});
