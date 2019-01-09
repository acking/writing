(function() {
    function e(s) {
        function l(e, t, i, n, o, r) {
            for (; 0 <= o && o < r; o += s) {
                var a = n ? n[o] : o;
                i = t(i, e[a], a, e)
            }
            return i
        }
        return function(e, t, i, n) {
            t = y(t, n, 4);
            var o = !D(e) && v.keys(e),
                r = (o || e).length,
                a = 0 < s ? 0 : r - 1;
            return arguments.length < 3 && (i = e[o ? o[a] : a], a += s), l(e, t, i, o, a, r)
        }
    }

    function t(r) {
        return function(e, t, i) {
            t = b(t, i);
            for (var n = $(e), o = 0 < r ? 0 : n - 1; 0 <= o && o < n; o += r)
                if (t(e[o], o, e)) return o;
            return -1
        }
    }

    function i(r, a, s) {
        return function(e, t, i) {
            var n = 0,
                o = $(e);
            if ("number" == typeof i) 0 < r ? n = 0 <= i ? i : Math.max(i + o, n) : o = 0 <= i ? Math.min(i + 1, o) : i + o + 1;
            else if (s && i && o) return e[i = s(e, t)] === t ? i : -1;
            if (t != t) return 0 <= (i = a(d.call(e, n, o), v.isNaN)) ? i + n : -1;
            for (i = 0 < r ? n : o - 1; 0 <= i && i < o; i += r)
                if (e[i] === t) return i;
            return -1
        }
    }

    function n(e, t) {
        var i = I.length,
            n = e.constructor,
            o = v.isFunction(n) && n.prototype || s,
            r = "constructor";
        for (v.has(e, r) && !v.contains(t, r) && t.push(r); i--;)(r = I[i]) in e && e[r] !== o[r] && !v.contains(t, r) && t.push(r)
    }
    var o = this,
        r = o._,
        a = Array.prototype,
        s = Object.prototype,
        l = Function.prototype,
        c = a.push,
        d = a.slice,
        u = s.toString,
        h = s.hasOwnProperty,
        p = Array.isArray,
        f = Object.keys,
        m = l.bind,
        g = Object.create,
        _ = function() {},
        v = function(e) {
            return e instanceof v ? e : this instanceof v ? void(this._wrapped = e) : new v(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : o._ = v, v.VERSION = "1.8.3";
    var y = function(o, r, e) {
            if (void 0 === r) return o;
            switch (null == e ? 3 : e) {
                case 1:
                    return function(e) {
                        return o.call(r, e)
                    };
                case 2:
                    return function(e, t) {
                        return o.call(r, e, t)
                    };
                case 3:
                    return function(e, t, i) {
                        return o.call(r, e, t, i)
                    };
                case 4:
                    return function(e, t, i, n) {
                        return o.call(r, e, t, i, n)
                    }
            }
            return function() {
                return o.apply(r, arguments)
            }
        },
        b = function(e, t, i) {
            return null == e ? v.identity : v.isFunction(e) ? y(e, t, i) : v.isObject(e) ? v.matcher(e) : v.property(e)
        };
    v.iteratee = function(e, t) {
        return b(e, t, Infinity)
    };
    var w = function(l, c) {
            return function(e) {
                var t = arguments.length;
                if (t < 2 || null == e) return e;
                for (var i = 1; i < t; i++)
                    for (var n = arguments[i], o = l(n), r = o.length, a = 0; a < r; a++) {
                        var s = o[a];
                        c && void 0 !== e[s] || (e[s] = n[s])
                    }
                return e
            }
        },
        x = function(e) {
            if (!v.isObject(e)) return {};
            if (g) return g(e);
            _.prototype = e;
            var t = new _;
            return _.prototype = null, t
        },
        C = function(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        },
        k = Math.pow(2, 53) - 1,
        $ = C("length"),
        D = function(e) {
            var t = $(e);
            return "number" == typeof t && 0 <= t && t <= k
        };
    v.each = v.forEach = function(e, t, i) {
        var n, o;
        if (t = y(t, i), D(e))
            for (n = 0, o = e.length; n < o; n++) t(e[n], n, e);
        else {
            var r = v.keys(e);
            for (n = 0, o = r.length; n < o; n++) t(e[r[n]], r[n], e)
        }
        return e
    }, v.map = v.collect = function(e, t, i) {
        t = b(t, i);
        for (var n = !D(e) && v.keys(e), o = (n || e).length, r = Array(o), a = 0; a < o; a++) {
            var s = n ? n[a] : a;
            r[a] = t(e[s], s, e)
        }
        return r
    }, v.reduce = v.foldl = v.inject = e(1), v.reduceRight = v.foldr = e(-1), v.find = v.detect = function(e, t, i) {
        var n;
        if (void 0 !== (n = D(e) ? v.findIndex(e, t, i) : v.findKey(e, t, i)) && -1 !== n) return e[n]
    }, v.filter = v.select = function(e, n, t) {
        var o = [];
        return n = b(n, t), v.each(e, function(e, t, i) {
            n(e, t, i) && o.push(e)
        }), o
    }, v.reject = function(e, t, i) {
        return v.filter(e, v.negate(b(t)), i)
    }, v.every = v.all = function(e, t, i) {
        t = b(t, i);
        for (var n = !D(e) && v.keys(e), o = (n || e).length, r = 0; r < o; r++) {
            var a = n ? n[r] : r;
            if (!t(e[a], a, e)) return !1
        }
        return !0
    }, v.some = v.any = function(e, t, i) {
        t = b(t, i);
        for (var n = !D(e) && v.keys(e), o = (n || e).length, r = 0; r < o; r++) {
            var a = n ? n[r] : r;
            if (t(e[a], a, e)) return !0
        }
        return !1
    }, v.contains = v.includes = v.include = function(e, t, i, n) {
        return D(e) || (e = v.values(e)), ("number" != typeof i || n) && (i = 0), 0 <= v.indexOf(e, t, i)
    }, v.invoke = function(e, i) {
        var n = d.call(arguments, 2),
            o = v.isFunction(i);
        return v.map(e, function(e) {
            var t = o ? i : e[i];
            return null == t ? t : t.apply(e, n)
        })
    }, v.pluck = function(e, t) {
        return v.map(e, v.property(t))
    }, v.where = function(e, t) {
        return v.filter(e, v.matcher(t))
    }, v.findWhere = function(e, t) {
        return v.find(e, v.matcher(t))
    }, v.max = function(e, n, t) {
        var i, o, r = -Infinity,
            a = -Infinity;
        if (null == n && null != e)
            for (var s = 0, l = (e = D(e) ? e : v.values(e)).length; s < l; s++) i = e[s], r < i && (r = i);
        else n = b(n, t), v.each(e, function(e, t, i) {
            o = n(e, t, i), (a < o || o === -Infinity && r === -Infinity) && (r = e, a = o)
        });
        return r
    }, v.min = function(e, n, t) {
        var i, o, r = Infinity,
            a = Infinity;
        if (null == n && null != e)
            for (var s = 0, l = (e = D(e) ? e : v.values(e)).length; s < l; s++)(i = e[s]) < r && (r = i);
        else n = b(n, t), v.each(e, function(e, t, i) {
            ((o = n(e, t, i)) < a || o === Infinity && r === Infinity) && (r = e, a = o)
        });
        return r
    }, v.shuffle = function(e) {
        for (var t, i = D(e) ? e : v.values(e), n = i.length, o = Array(n), r = 0; r < n; r++)(t = v.random(0, r)) !== r && (o[r] = o[t]), o[t] = i[r];
        return o
    }, v.sample = function(e, t, i) {
        return null == t || i ? (D(e) || (e = v.values(e)), e[v.random(e.length - 1)]) : v.shuffle(e).slice(0, Math.max(0, t))
    }, v.sortBy = function(e, n, t) {
        return n = b(n, t), v.pluck(v.map(e, function(e, t, i) {
            return {
                value: e,
                index: t,
                criteria: n(e, t, i)
            }
        }).sort(function(e, t) {
            var i = e.criteria,
                n = t.criteria;
            if (i !== n) {
                if (n < i || void 0 === i) return 1;
                if (i < n || void 0 === n) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var S = function(a) {
        return function(n, o, e) {
            var r = {};
            return o = b(o, e), v.each(n, function(e, t) {
                var i = o(e, t, n);
                a(r, e, i)
            }), r
        }
    };
    v.groupBy = S(function(e, t, i) {
        v.has(e, i) ? e[i].push(t) : e[i] = [t]
    }), v.indexBy = S(function(e, t, i) {
        e[i] = t
    }), v.countBy = S(function(e, t, i) {
        v.has(e, i) ? e[i]++ : e[i] = 1
    }), v.toArray = function(e) {
        return e ? v.isArray(e) ? d.call(e) : D(e) ? v.map(e, v.identity) : v.values(e) : []
    }, v.size = function(e) {
        return null == e ? 0 : D(e) ? e.length : v.keys(e).length
    }, v.partition = function(e, n, t) {
        n = b(n, t);
        var o = [],
            r = [];
        return v.each(e, function(e, t, i) {
            (n(e, t, i) ? o : r).push(e)
        }), [o, r]
    }, v.first = v.head = v.take = function(e, t, i) {
        if (null != e) return null == t || i ? e[0] : v.initial(e, e.length - t)
    }, v.initial = function(e, t, i) {
        return d.call(e, 0, Math.max(0, e.length - (null == t || i ? 1 : t)))
    }, v.last = function(e, t, i) {
        if (null != e) return null == t || i ? e[e.length - 1] : v.rest(e, Math.max(0, e.length - t))
    }, v.rest = v.tail = v.drop = function(e, t, i) {
        return d.call(e, null == t || i ? 1 : t)
    }, v.compact = function(e) {
        return v.filter(e, v.identity)
    };
    var T = function(e, t, i, n) {
        for (var o = [], r = 0, a = n || 0, s = $(e); a < s; a++) {
            var l = e[a];
            if (D(l) && (v.isArray(l) || v.isArguments(l))) {
                t || (l = T(l, t, i));
                var c = 0,
                    d = l.length;
                for (o.length += d; c < d;) o[r++] = l[c++]
            } else i || (o[r++] = l)
        }
        return o
    };
    v.flatten = function(e, t) {
        return T(e, t, !1)
    }, v.without = function(e) {
        return v.difference(e, d.call(arguments, 1))
    }, v.uniq = v.unique = function(e, t, i, n) {
        v.isBoolean(t) || (n = i, i = t, t = !1), null != i && (i = b(i, n));
        for (var o = [], r = [], a = 0, s = $(e); a < s; a++) {
            var l = e[a],
                c = i ? i(l, a, e) : l;
            t ? (a && r === c || o.push(l), r = c) : i ? v.contains(r, c) || (r.push(c), o.push(l)) : v.contains(o, l) || o.push(l)
        }
        return o
    }, v.union = function() {
        return v.uniq(T(arguments, !0, !0))
    }, v.intersection = function(e) {
        for (var t = [], i = arguments.length, n = 0, o = $(e); n < o; n++) {
            var r = e[n];
            if (!v.contains(t, r)) {
                for (var a = 1; a < i && v.contains(arguments[a], r); a++);
                a === i && t.push(r)
            }
        }
        return t
    }, v.difference = function(e) {
        var t = T(arguments, !0, !0, 1);
        return v.filter(e, function(e) {
            return !v.contains(t, e)
        })
    }, v.zip = function() {
        return v.unzip(arguments)
    }, v.unzip = function(e) {
        for (var t = e && v.max(e, $).length || 0, i = Array(t), n = 0; n < t; n++) i[n] = v.pluck(e, n);
        return i
    }, v.object = function(e, t) {
        for (var i = {}, n = 0, o = $(e); n < o; n++) t ? i[e[n]] = t[n] : i[e[n][0]] = e[n][1];
        return i
    }, v.findIndex = t(1), v.findLastIndex = t(-1), v.sortedIndex = function(e, t, i, n) {
        for (var o = (i = b(i, n, 1))(t), r = 0, a = $(e); r < a;) {
            var s = Math.floor((r + a) / 2);
            i(e[s]) < o ? r = s + 1 : a = s
        }
        return r
    }, v.indexOf = i(1, v.findIndex, v.sortedIndex), v.lastIndexOf = i(-1, v.findLastIndex), v.range = function(e, t, i) {
        null == t && (t = e || 0, e = 0), i = i || 1;
        for (var n = Math.max(Math.ceil((t - e) / i), 0), o = Array(n), r = 0; r < n; r++, e += i) o[r] = e;
        return o
    };
    var E = function(e, t, i, n, o) {
        if (!(n instanceof t)) return e.apply(i, o);
        var r = x(e.prototype),
            a = e.apply(r, o);
        return v.isObject(a) ? a : r
    };
    v.bind = function(e, t) {
        if (m && e.bind === m) return m.apply(e, d.call(arguments, 1));
        if (!v.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var i = d.call(arguments, 2),
            n = function() {
                return E(e, n, t, this, i.concat(d.call(arguments)))
            };
        return n
    }, v.partial = function(o) {
        var r = d.call(arguments, 1),
            a = function() {
                for (var e = 0, t = r.length, i = Array(t), n = 0; n < t; n++) i[n] = r[n] === v ? arguments[e++] : r[n];
                for (; e < arguments.length;) i.push(arguments[e++]);
                return E(o, a, this, this, i)
            };
        return a
    }, v.bindAll = function(e) {
        var t, i, n = arguments.length;
        if (n <= 1) throw new Error("bindAll must be passed function names");
        for (t = 1; t < n; t++) e[i = arguments[t]] = v.bind(e[i], e);
        return e
    }, v.memoize = function(n, o) {
        var r = function(e) {
            var t = r.cache,
                i = "" + (o ? o.apply(this, arguments) : e);
            return v.has(t, i) || (t[i] = n.apply(this, arguments)), t[i]
        };
        return r.cache = {}, r
    }, v.delay = function(e, t) {
        var i = d.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, i)
        }, t)
    }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(i, n, o) {
        var r, a, s, l = null,
            c = 0;
        o || (o = {});
        var d = function() {
            c = !1 === o.leading ? 0 : v.now(), l = null, s = i.apply(r, a), l || (r = a = null)
        };
        return function() {
            var e = v.now();
            c || !1 !== o.leading || (c = e);
            var t = n - (e - c);
            return r = this, a = arguments, t <= 0 || n < t ? (l && (clearTimeout(l), l = null), c = e, s = i.apply(r, a), l || (r = a = null)) : l || !1 === o.trailing || (l = setTimeout(d, t)), s
        }
    }, v.debounce = function(t, i, n) {
        var o, r, a, s, l, c = function() {
            var e = v.now() - s;
            e < i && 0 <= e ? o = setTimeout(c, i - e) : (o = null, n || (l = t.apply(a, r), o || (a = r = null)))
        };
        return function() {
            a = this, r = arguments, s = v.now();
            var e = n && !o;
            return o || (o = setTimeout(c, i)), e && (l = t.apply(a, r), a = r = null), l
        }
    }, v.wrap = function(e, t) {
        return v.partial(t, e)
    }, v.negate = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }, v.compose = function() {
        var i = arguments,
            n = i.length - 1;
        return function() {
            for (var e = n, t = i[n].apply(this, arguments); e--;) t = i[e].call(this, t);
            return t
        }
    }, v.after = function(e, t) {
        return function() {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, v.before = function(e, t) {
        var i;
        return function() {
            return 0 < --e && (i = t.apply(this, arguments)), e <= 1 && (t = null), i
        }
    }, v.once = v.partial(v.before, 2);
    var A = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    v.keys = function(e) {
        if (!v.isObject(e)) return [];
        if (f) return f(e);
        var t = [];
        for (var i in e) v.has(e, i) && t.push(i);
        return A && n(e, t), t
    }, v.allKeys = function(e) {
        if (!v.isObject(e)) return [];
        var t = [];
        for (var i in e) t.push(i);
        return A && n(e, t), t
    }, v.values = function(e) {
        for (var t = v.keys(e), i = t.length, n = Array(i), o = 0; o < i; o++) n[o] = e[t[o]];
        return n
    }, v.mapObject = function(e, t, i) {
        t = b(t, i);
        for (var n, o = v.keys(e), r = o.length, a = {}, s = 0; s < r; s++) a[n = o[s]] = t(e[n], n, e);
        return a
    }, v.pairs = function(e) {
        for (var t = v.keys(e), i = t.length, n = Array(i), o = 0; o < i; o++) n[o] = [t[o], e[t[o]]];
        return n
    }, v.invert = function(e) {
        for (var t = {}, i = v.keys(e), n = 0, o = i.length; n < o; n++) t[e[i[n]]] = i[n];
        return t
    }, v.functions = v.methods = function(e) {
        var t = [];
        for (var i in e) v.isFunction(e[i]) && t.push(i);
        return t.sort()
    }, v.extend = w(v.allKeys), v.extendOwn = v.assign = w(v.keys), v.findKey = function(e, t, i) {
        t = b(t, i);
        for (var n, o = v.keys(e), r = 0, a = o.length; r < a; r++)
            if (t(e[n = o[r]], n, e)) return n
    }, v.pick = function(e, t, i) {
        var n, o, r = {},
            a = e;
        if (null == a) return r;
        v.isFunction(t) ? (o = v.allKeys(a), n = y(t, i)) : (o = T(arguments, !1, !1, 1), n = function(e, t, i) {
            return t in i
        }, a = Object(a));
        for (var s = 0, l = o.length; s < l; s++) {
            var c = o[s],
                d = a[c];
            n(d, c, a) && (r[c] = d)
        }
        return r
    }, v.omit = function(e, t, i) {
        if (v.isFunction(t)) t = v.negate(t);
        else {
            var n = v.map(T(arguments, !1, !1, 1), String);
            t = function(e, t) {
                return !v.contains(n, t)
            }
        }
        return v.pick(e, t, i)
    }, v.defaults = w(v.allKeys, !0), v.create = function(e, t) {
        var i = x(e);
        return t && v.extendOwn(i, t), i
    }, v.clone = function(e) {
        return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
    }, v.tap = function(e, t) {
        return t(e), e
    }, v.isMatch = function(e, t) {
        var i = v.keys(t),
            n = i.length;
        if (null == e) return !n;
        for (var o = Object(e), r = 0; r < n; r++) {
            var a = i[r];
            if (t[a] !== o[a] || !(a in o)) return !1
        }
        return !0
    };
    var M = function(e, t, i, n) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof v && (e = e._wrapped), t instanceof v && (t = t._wrapped);
        var o = u.call(e);
        if (o !== u.call(t)) return !1;
        switch (o) {
            case "[object RegExp]":
            case "[object String]":
                return "" + e == "" + t;
            case "[object Number]":
                return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t
        }
        var r = "[object Array]" === o;
        if (!r) {
            if ("object" != typeof e || "object" != typeof t) return !1;
            var a = e.constructor,
                s = t.constructor;
            if (a !== s && !(v.isFunction(a) && a instanceof a && v.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1
        }
        n = n || [];
        for (var l = (i = i || []).length; l--;)
            if (i[l] === e) return n[l] === t;
        if (i.push(e), n.push(t), r) {
            if ((l = e.length) !== t.length) return !1;
            for (; l--;)
                if (!M(e[l], t[l], i, n)) return !1
        } else {
            var c, d = v.keys(e);
            if (l = d.length, v.keys(t).length !== l) return !1;
            for (; l--;)
                if (c = d[l], !v.has(t, c) || !M(e[c], t[c], i, n)) return !1
        }
        return i.pop(), n.pop(), !0
    };
    v.isEqual = function(e, t) {
        return M(e, t)
    }, v.isEmpty = function(e) {
        return null == e || (D(e) && (v.isArray(e) || v.isString(e) || v.isArguments(e)) ? 0 === e.length : 0 === v.keys(e).length)
    }, v.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    }, v.isArray = p || function(e) {
        return "[object Array]" === u.call(e)
    }, v.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
        v["is" + t] = function(e) {
            return u.call(e) === "[object " + t + "]"
        }
    }), v.isArguments(arguments) || (v.isArguments = function(e) {
        return v.has(e, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function(e) {
        return "function" == typeof e || !1
    }), v.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, v.isNaN = function(e) {
        return v.isNumber(e) && e !== +e
    }, v.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" === u.call(e)
    }, v.isNull = function(e) {
        return null === e
    }, v.isUndefined = function(e) {
        return void 0 === e
    }, v.has = function(e, t) {
        return null != e && h.call(e, t)
    }, v.noConflict = function() {
        return o._ = r, this
    }, v.identity = function(e) {
        return e
    }, v.constant = function(e) {
        return function() {
            return e
        }
    }, v.noop = function() {}, v.property = C, v.propertyOf = function(t) {
        return null == t ? function() {} : function(e) {
            return t[e]
        }
    }, v.matcher = v.matches = function(t) {
        return t = v.extendOwn({}, t),
            function(e) {
                return v.isMatch(e, t)
            }
    }, v.times = function(e, t, i) {
        var n = Array(Math.max(0, e));
        t = y(t, i, 1);
        for (var o = 0; o < e; o++) n[o] = t(o);
        return n
    }, v.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, v.now = Date.now || function() {
        return (new Date).getTime()
    };
    var P = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        O = v.invert(P),
        N = function(t) {
            var i = function(e) {
                    return t[e]
                },
                e = "(?:" + v.keys(t).join("|") + ")",
                n = RegExp(e),
                o = RegExp(e, "g");
            return function(e) {
                return e = null == e ? "" : "" + e, n.test(e) ? e.replace(o, i) : e
            }
        };
    v.escape = N(P), v.unescape = N(O), v.result = function(e, t, i) {
        var n = null == e ? void 0 : e[t];
        return void 0 === n && (n = i), v.isFunction(n) ? n.call(e) : n
    };
    var G = 0;
    v.uniqueId = function(e) {
        var t = ++G + "";
        return e ? e + t : t
    }, v.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/,
        j = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        F = /\\|'|\r|\n|\u2028|\u2029/g,
        z = function(e) {
            return "\\" + j[e]
        };
    v.template = function(r, e, t) {
        !e && t && (e = t), e = v.defaults({}, e, v.templateSettings);
        var i = RegExp([(e.escape || L).source, (e.interpolate || L).source, (e.evaluate || L).source].join("|") + "|$", "g"),
            a = 0,
            s = "__p+='";
        r.replace(i, function(e, t, i, n, o) {
            return s += r.slice(a, o).replace(F, z), a = o + e.length, t ? s += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : i ? s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : n && (s += "';\n" + n + "\n__p+='"), e
        }), s += "';\n", e.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var n = new Function(e.variable || "obj", "_", s)
        } catch (c) {
            throw c.source = s, c
        }
        var o = function(e) {
                return n.call(this, e, v)
            },
            l = e.variable || "obj";
        return o.source = "function(" + l + "){\n" + s + "}", o
    }, v.chain = function(e) {
        var t = v(e);
        return t._chain = !0, t
    };
    var q = function(e, t) {
        return e._chain ? v(t).chain() : t
    };
    v.mixin = function(i) {
        v.each(v.functions(i), function(e) {
            var t = v[e] = i[e];
            v.prototype[e] = function() {
                var e = [this._wrapped];
                return c.apply(e, arguments), q(this, t.apply(v, e))
            }
        })
    }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var i = a[t];
        v.prototype[t] = function() {
            var e = this._wrapped;
            return i.apply(e, arguments), "shift" !== t && "splice" !== t || 0 !== e.length || delete e[0], q(this, e)
        }
    }), v.each(["concat", "join", "slice"], function(e) {
        var t = a[e];
        v.prototype[e] = function() {
            return q(this, t.apply(this._wrapped, arguments))
        }
    }), v.prototype.value = function() {
        return this._wrapped
    }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return v
    })
}).call(this),
    function(e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
            ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).s = e()
        }
    }(function() {
        var n;
        return function r(a, s, l) {
            function c(i, e) {
                if (!s[i]) {
                    if (!a[i]) {
                        var t = "function" == typeof require && require;
                        if (!e && t) return t(i, !0);
                        if (d) return d(i, !0);
                        var n = new Error("Cannot find module '" + i + "'");
                        throw n.code = "MODULE_NOT_FOUND", n
                    }
                    var o = s[i] = {
                        exports: {}
                    };
                    a[i][0].call(o.exports, function(e) {
                        var t = a[i][1][e];
                        return c(t || e)
                    }, o, o.exports, r, a, s, l)
                }
                return s[i].exports
            }
            for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) c(l[e]);
            return c
        }({
            1: [function(e, t) {
                var i = e("./trim"),
                    n = e("./decapitalize");
                t.exports = function(e, t) {
                    return e = i(e).replace(/[-_\s]+(.)?/g, function(e, t) {
                        return t ? t.toUpperCase() : ""
                    }), !0 === t ? n(e) : e
                }
            }, {
                "./decapitalize": 10,
                "./trim": 65
            }],
            2: [function(e, t) {
                var n = e("./helper/makeString");
                t.exports = function(e, t) {
                    e = n(e);
                    var i = t ? e.slice(1).toLowerCase() : e.slice(1);
                    return e.charAt(0).toUpperCase() + i
                }
            }, {
                "./helper/makeString": 20
            }],
            3: [function(e, t) {
                var i = e("./helper/makeString");
                t.exports = function(e) {
                    return i(e).split("")
                }
            }, {
                "./helper/makeString": 20
            }],
            4: [function(e, t) {
                t.exports = function(e, t) {
                    return null == e ? [] : (e = String(e), 0 < (t = ~~t) ? e.match(new RegExp(".{1," + t + "}", "g")) : [e])
                }
            }, {}],
            5: [function(e, t) {
                var i = e("./capitalize"),
                    n = e("./camelize"),
                    o = e("./helper/makeString");
                t.exports = function(e) {
                    return e = o(e), i(n(e.replace(/[\W_]/g, " ")).replace(/\s/g, ""))
                }
            }, {
                "./camelize": 1,
                "./capitalize": 2,
                "./helper/makeString": 20
            }],
            6: [function(e, t) {
                var i = e("./trim");
                t.exports = function(e) {
                    return i(e).replace(/\s\s+/g, " ")
                }
            }, {
                "./trim": 65
            }],
            7: [function(e, t) {
                var i = e("./helper/makeString"),
                    n = "\u0105\xe0\xe1\xe4\xe2\xe3\xe5\xe6\u0103\u0107\u010d\u0109\u0119\xe8\xe9\xeb\xea\u011d\u0125\xec\xed\xef\xee\u0135\u0142\u013e\u0144\u0148\xf2\xf3\xf6\u0151\xf4\xf5\xf0\xf8\u015b\u0219\u015f\u0161\u015d\u0165\u021b\u0163\u016d\xf9\xfa\xfc\u0171\xfb\xf1\xff\xfd\xe7\u017c\u017a\u017e",
                    o = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";
                n += n.toUpperCase(), o = (o += o.toUpperCase()).split(""), n += "\xdf", o.push("ss"), t.exports = function(e) {
                    return i(e).replace(/.{1}/g, function(e) {
                        var t = n.indexOf(e);
                        return -1 === t ? e : o[t]
                    })
                }
            }, {
                "./helper/makeString": 20
            }],
            8: [function(e, t) {
                var i = e("./helper/makeString");
                t.exports = function(e, t) {
                    return e = i(e), t = i(t), 0 === e.length || 0 === t.length ? 0 : e.split(t).length - 1
                }
            }, {
                "./helper/makeString": 20
            }],
            9: [function(e, t) {
                var i = e("./trim");
                t.exports = function(e) {
                    return i(e).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
                }
            }, {
                "./trim": 65
            }],
            10: [function(e, t) {
                var i = e("./helper/makeString");
                t.exports = function(e) {
                    return (e = i(e)).charAt(0).toLowerCase() + e.slice(1)
                }
            }, {
                "./helper/makeString": 20
            }],
            11: [function(e, t) {
                function o(e) {
                    for (var t = e.match(/^[\s\\t]*/gm), i = t[0].length, n = 1; n < t.length; n++) i = Math.min(t[n].length, i);
                    return i
                }
                var r = e("./helper/makeString");
                t.exports = function(e, t) {
                    var i, n = o(e = r(e));
                    return 0 === n ? e : (i = "string" == typeof t ? new RegExp("^" + t, "gm") : new RegExp("^[ \\t]{" + n + "}", "gm"), e.replace(i, ""))
                }
            }, {
                "./helper/makeString": 20
            }],
            12: [function(e, t) {
                var n = e("./helper/makeString"),
                    o = e("./helper/toPositive");
                t.exports = function(e, t, i) {
                    return e = n(e), t = "" + t, 0 <= (i = void 0 === i ? e.length - t.length : Math.min(o(i), e.length) - t.length) && e.indexOf(t, i) === i
                }
            }, {
                "./helper/makeString": 20,
                "./helper/toPositive": 22
            }],
            13: [function(e, t) {
                var i = e("./helper/makeString"),
                    n = e("./helper/escapeChars"),
                    o = "[";
                for (var r in n) o += r;
                o += "]";
                var a = new RegExp(o, "g");
                t.exports = function(e) {
                    return i(e).replace(a, function(e) {
                        return "&" + n[e] + ";"
                    })
                }
            }, {
                "./helper/escapeChars": 17,
                "./helper/makeString": 20
            }],
            14: [function(e, t) {
                t.exports = function() {
                    var e = {};
                    for (var t in this) this.hasOwnProperty(t) && !t.match(/^(?:include|contains|reverse|join|map|wrap)$/) && (e[t] = this[t]);
                    return e
                }
            }, {}],
            15: [function(e, t) {
                var i = e("./makeString");
                t.exports = function(e, t) {
                    return 0 === (e = i(e)).length ? "" : e.slice(0, -1) + String.fromCharCode(e.charCodeAt(e.length - 1) + t)
                }
            }, {
                "./makeString": 20
            }],
            16: [function(e, t) {
                var i = e("./escapeRegExp");
                t.exports = function(e) {
                    return null == e ? "\\s" : e.source ? e.source : "[" + i(e) + "]"
                }
            }, {
                "./escapeRegExp": 18
            }],
            17: [function(e, t) {
                var i = {
                    "\xa2": "cent",
                    "\xa3": "pound",
                    "\xa5": "yen",
                    "\u20ac": "euro",
                    "\xa9": "copy",
                    "\xae": "reg",
                    "<": "lt",
                    ">": "gt",
                    '"': "quot",
                    "&": "amp",
                    "'": "#39"
                };
                t.exports = i
            }, {}],
            18: [function(e, t) {
                var i = e("./makeString");
                t.exports = function(e) {
                    return i(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
                }
            }, {
                "./makeString": 20
            }],
            19: [function(e, t) {
                var i = {
                    nbsp: " ",
                    cent: "\xa2",
                    pound: "\xa3",
                    yen: "\xa5",
                    euro: "\u20ac",
                    copy: "\xa9",
                    reg: "\xae",
                    lt: "<",
                    gt: ">",
                    quot: '"',
                    amp: "&",
                    apos: "'"
                };
                t.exports = i
            }, {}],
            20: [function(e, t) {
                t.exports = function(e) {
                    return null == e ? "" : "" + e
                }
            }, {}],
            21: [function(e, t) {
                t.exports = function(e, t) {
                    if (t < 1) return "";
                    for (var i = ""; 0 < t;) 1 & t && (i += e), t >>= 1, e += e;
                    return i
                }
            }, {}],
            22: [function(e, t) {
                t.exports = function(e) {
                    return e < 0 ? 0 : +e || 0
                }
            }, {}],
            23: [function(e, t) {
                var i = e("./capitalize"),
                    n = e("./underscored"),
                    o = e("./trim");
                t.exports = function(e) {
                    return i(o(n(e).replace(/_id$/, "").replace(/_/g, " ")))
                }
            }, {
                "./capitalize": 2,
                "./trim": 65,
                "./underscored": 67
            }],
            24: [function(e, t) {
                var i = e("./helper/makeString");
                t.exports = function(e, t) {
                    return "" === t || -1 !== i(e).indexOf(t)
                }
            }, {
                "./helper/makeString": 20
            }],
            25: [function(e, t) {
                "use strict";

                function n(e) {
                    if (!(this instanceof n)) return new n(e);
                    this._wrapped = e
                }

                function o(e, i) {
                    "function" == typeof i && (n.prototype[e] = function() {
                        var e = [this._wrapped].concat(Array.prototype.slice.call(arguments)),
                            t = i.apply(null, e);
                        return "string" == typeof t ? new n(t) : t
                    })
                }

                function i(i) {
                    o(i, function(e) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        return String.prototype[i].apply(e, t)
                    })
                }
                for (var r in n.VERSION = "3.3.4", n.isBlank = e("./isBlank"), n.stripTags = e("./stripTags"), n.capitalize = e("./capitalize"), n.decapitalize = e("./decapitalize"), n.chop = e("./chop"), n.trim = e("./trim"), n.clean = e("./clean"), n.cleanDiacritics = e("./cleanDiacritics"), n.count = e("./count"), n.chars = e("./chars"), n.swapCase = e("./swapCase"), n.escapeHTML = e("./escapeHTML"), n.unescapeHTML = e("./unescapeHTML"), n.splice = e("./splice"), n.insert = e("./insert"), n.replaceAll = e("./replaceAll"), n.include = e("./include"), n.join = e("./join"), n.lines = e("./lines"), n.dedent = e("./dedent"), n.reverse = e("./reverse"), n.startsWith = e("./startsWith"), n.endsWith = e("./endsWith"), n.pred = e("./pred"), n.succ = e("./succ"), n.titleize = e("./titleize"), n.camelize = e("./camelize"), n.underscored = e("./underscored"), n.dasherize = e("./dasherize"), n.classify = e("./classify"), n.humanize = e("./humanize"), n.ltrim = e("./ltrim"), n.rtrim = e("./rtrim"), n.truncate = e("./truncate"), n.prune = e("./prune"), n.words = e("./words"), n.pad = e("./pad"), n.lpad = e("./lpad"), n.rpad = e("./rpad"), n.lrpad = e("./lrpad"), n.sprintf = e("./sprintf"), n.vsprintf = e("./vsprintf"), n.toNumber = e("./toNumber"), n.numberFormat = e("./numberFormat"), n.strRight = e("./strRight"), n.strRightBack = e("./strRightBack"), n.strLeft = e("./strLeft"), n.strLeftBack = e("./strLeftBack"), n.toSentence = e("./toSentence"), n.toSentenceSerial = e("./toSentenceSerial"), n.slugify = e("./slugify"), n.surround = e("./surround"), n.quote = e("./quote"), n.unquote = e("./unquote"), n.repeat = e("./repeat"), n.naturalCmp = e("./naturalCmp"), n.levenshtein = e("./levenshtein"), n.toBoolean = e("./toBoolean"), n.exports = e("./exports"), n.escapeRegExp = e("./helper/escapeRegExp"), n.wrap = e("./wrap"), n.map = e("./map"), n.strip = n.trim, n.lstrip = n.ltrim, n.rstrip = n.rtrim, n.center = n.lrpad, n.rjust = n.lpad, n.ljust = n.rpad, n.contains = n.include, n.q = n.quote, n.toBool = n.toBoolean, n.camelcase = n.camelize, n.mapChars = n.map, n.prototype = {
                        value: function() {
                            return this._wrapped
                        }
                    }, n) o(r, n[r]);
                o("tap", function(e, t) {
                    return t(e)
                });
                var a = ["toUpperCase", "toLowerCase", "split", "replace", "slice", "substring", "substr", "concat"];
                for (var s in a) i(a[s]);
                t.exports = n
            }, {
                "./camelize": 1,
                "./capitalize": 2,
                "./chars": 3,
                "./chop": 4,
                "./classify": 5,
                "./clean": 6,
                "./cleanDiacritics": 7,
                "./count": 8,
                "./dasherize": 9,
                "./decapitalize": 10,
                "./dedent": 11,
                "./endsWith": 12,
                "./escapeHTML": 13,
                "./exports": 14,
                "./helper/escapeRegExp": 18,
                "./humanize": 23,
                "./include": 24,
                "./insert": 26,
                "./isBlank": 27,
                "./join": 28,
                "./levenshtein": 29,
                "./lines": 30,
                "./lpad": 31,
                "./lrpad": 32,
                "./ltrim": 33,
                "./map": 34,
                "./naturalCmp": 35,
                "./numberFormat": 38,
                "./pad": 39,
                "./pred": 40,
                "./prune": 41,
                "./quote": 42,
                "./repeat": 43,
                "./replaceAll": 44,
                "./reverse": 45,
                "./rpad": 46,
                "./rtrim": 47,
                "./slugify": 48,
                "./splice": 49,
                "./sprintf": 50,
                "./startsWith": 51,
                "./strLeft": 52,
                "./strLeftBack": 53,
                "./strRight": 54,
                "./strRightBack": 55,
                "./stripTags": 56,
                "./succ": 57,
                "./surround": 58,
                "./swapCase": 59,
                "./titleize": 60,
                "./toBoolean": 61,
                "./toNumber": 62,
                "./toSentence": 63,
                "./toSentenceSerial": 64,
                "./trim": 65,
                "./truncate": 66,
                "./underscored": 67,
                "./unescapeHTML": 68,
                "./unquote": 69,
                "./vsprintf": 70,
                "./words": 71,
                "./wrap": 72
            }],
            26: [function(e, t) {
                var n = e("./splice");
                t.exports = function(e, t, i) {
                    return n(e, t, 0, i)
                }
            }, {
                "./splice": 49
            }],
            27: [function(e, t) {
                var i = e("./helper/makeString");
                t.exports = function(e) {
                    return /^\s*$/.test(i(e))
                }
            }, {
                "./helper/makeString": 20
            }],
            28: [function(e, t) {
                var i = e("./helper/makeString"),
                    n = [].slice;
                t.exports = function() {
                    var e = n.call(arguments),
                        t = e.shift();
                    return e.join(i(t))
                }
            }, {
                "./helper/makeString": 20
            }],
            29: [function(e, t) {
                var l = e("./helper/makeString");
                t.exports = function(e, t) {
                    "use strict";
                    if ((e = l(e)) === (t = l(t))) return 0;
                    if (!e || !t) return Math.max(e.length, t.length);
                    for (var i = new Array(t.length + 1), n = 0; n < i.length; ++n) i[n] = n;
                    for (n = 0; n < e.length; ++n) {
                        for (var o = n + 1, r = 0; r < t.length; ++r) {
                            var a = o,
                                s = a + 1;
                            s < (o = i[r] + (e.charAt(n) === t.charAt(r) ? 0 : 1)) && (o = s), (s = i[r + 1] + 1) < o && (o = s), i[r] = a
                        }
                        i[r] = o
                    }
                    return o
                }
            }, {
                "./helper/makeString": 20
            }],
            30: [function(e, t) {
                t.exports = function(e) {
                    return null == e ? [] : String(e).split(/\r\n?|\n/)
                }
            }, {}],
            31: [function(e, t) {
                var n = e("./pad");
                t.exports = function(e, t, i) {
                    return n(e, t, i)
                }
            }, {
                "./pad": 39
            }],
            32: [function(e, t) {
                var n = e("./pad");
                t.exports = function(e, t, i) {
                    return n(e, t, i, "both")
                }
            }, {
                "./pad": 39
            }],
            33: [function(e, t) {
                var i = e("./helper/makeString"),
                    n = e("./helper/defaultToWhiteSpace"),
                    o = String.prototype.trimLeft;
                t.exports = function(e, t) {
                    return e = i(e), !t && o ? o.call(e) : (t = n(t), e.replace(new RegExp("^" + t + "+"), ""))
                }
            }, {
                "./helper/defaultToWhiteSpace": 16,
                "./helper/makeString": 20
            }],
            34: [function(e, t) {
                var i = e("./helper/makeString");
                t.exports = function(e, t) {
                    return 0 === (e = i(e)).length || "function" != typeof t ? e : e.replace(/./g, t)
                }
            }, {
                "./helper/makeString": 20
            }],
            35: [function(e, t) {
                t.exports = function(e, t) {
                    if (e == t) return 0;
                    if (!e) return -1;
                    if (!t) return 1;
                    for (var i = /(\.\d+|\d+|\D+)/g, n = String(e).match(i), o = String(t).match(i), r = Math.min(n.length, o.length), a = 0; a < r; a++) {
                        var s = n[a],
                            l = o[a];
                        if (s !== l) {
                            var c = +s,
                                d = +l;
                            return c == c && d == d ? d < c ? 1 : -1 : s < l ? -1 : 1
                        }
                    }
                    return n.length != o.length ? n.length - o.length : e < t ? -1 : 1
                }
            }, {}],
            36: [function(e, t, i) {
                ! function(e) {
                    function m(e) {
                        var t = e,
                            i = m.cache;
                        return i[t] && i.hasOwnProperty(t) || (i[t] = m.parse(t)), m.format.call(null, i[t], arguments)
                    }

                    function g(e) {
                        return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
                    }

                    function _(e, t) {
                        return Array(t + 1).join(e)
                    }
                    var v = {
                        not_string: /[^s]/,
                        number: /[diefg]/,
                        json: /[j]/,
                        not_json: /[^j]/,
                        text: /^[^\x25]+/,
                        modulo: /^\x25{2}/,
                        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
                        key: /^([a-z_][a-z_\d]*)/i,
                        key_access: /^\.([a-z_][a-z_\d]*)/i,
                        index_access: /^\[(\d+)\]/,
                        sign: /^[\+\-]/
                    };
                    m.format = function(e, t) {
                        var i, n, o, r, a, s, l, c = 1,
                            d = e.length,
                            u = "",
                            h = [],
                            p = !0,
                            f = "";
                        for (n = 0; n < d; n++)
                            if ("string" === (u = g(e[n]))) h[h.length] = e[n];
                            else if ("array" === u) {
                            if ((r = e[n])[2])
                                for (i = t[c], o = 0; o < r[2].length; o++) {
                                    if (!i.hasOwnProperty(r[2][o])) throw new Error(m("[sprintf] property '%s' does not exist", r[2][o]));
                                    i = i[r[2][o]]
                                } else i = r[1] ? t[r[1]] : t[c++];
                            if ("function" == g(i) && (i = i()), v.not_string.test(r[8]) && v.not_json.test(r[8]) && "number" != g(i) && isNaN(i)) throw new TypeError(m("[sprintf] expecting number but found %s", g(i)));
                            switch (v.number.test(r[8]) && (p = 0 <= i), r[8]) {
                                case "b":
                                    i = i.toString(2);
                                    break;
                                case "c":
                                    i = String.fromCharCode(i);
                                    break;
                                case "d":
                                case "i":
                                    i = parseInt(i, 10);
                                    break;
                                case "j":
                                    i = JSON.stringify(i, null, r[6] ? parseInt(r[6]) : 0);
                                    break;
                                case "e":
                                    i = r[7] ? i.toExponential(r[7]) : i.toExponential();
                                    break;
                                case "f":
                                    i = r[7] ? parseFloat(i).toFixed(r[7]) : parseFloat(i);
                                    break;
                                case "g":
                                    i = r[7] ? parseFloat(i).toPrecision(r[7]) : parseFloat(i);
                                    break;
                                case "o":
                                    i = i.toString(8);
                                    break;
                                case "s":
                                    i = (i = String(i)) && r[7] ? i.substring(0, r[7]) : i;
                                    break;
                                case "u":
                                    i >>>= 0;
                                    break;
                                case "x":
                                    i = i.toString(16);
                                    break;
                                case "X":
                                    i = i.toString(16).toUpperCase()
                            }
                            v.json.test(r[8]) ? h[h.length] = i : (!v.number.test(r[8]) || p && !r[3] ? f = "" : (f = p ? "+" : "-", i = i.toString().replace(v.sign, "")), s = r[4] ? "0" === r[4] ? "0" : r[4].charAt(1) : " ", l = r[6] - (f + i).length, a = r[6] && 0 < l ? _(s, l) : "", h[h.length] = r[5] ? f + i + a : "0" === s ? f + a + i : a + f + i)
                        }
                        return h.join("")
                    }, m.cache = {}, m.parse = function(e) {
                        for (var t = e, i = [], n = [], o = 0; t;) {
                            if (null !== (i = v.text.exec(t))) n[n.length] = i[0];
                            else if (null !== (i = v.modulo.exec(t))) n[n.length] = "%";
                            else {
                                if (null === (i = v.placeholder.exec(t))) throw new SyntaxError("[sprintf] unexpected placeholder");
                                if (i[2]) {
                                    o |= 1;
                                    var r = [],
                                        a = i[2],
                                        s = [];
                                    if (null === (s = v.key.exec(a))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                    for (r[r.length] = s[1];
                                        "" !== (a = a.substring(s[0].length));)
                                        if (null !== (s = v.key_access.exec(a))) r[r.length] = s[1];
                                        else {
                                            if (null === (s = v.index_access.exec(a))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                            r[r.length] = s[1]
                                        } i[2] = r
                                } else o |= 2;
                                if (3 === o) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                                n[n.length] = i
                            }
                            t = t.substring(i[0].length)
                        }
                        return n
                    };
                    var t = function(e, t, i) {
                        return (i = (t || []).slice(0)).splice(0, 0, e), m.apply(null, i)
                    };
                    void 0 !== i ? (i.sprintf = m, i.vsprintf = t) : (e.sprintf = m, e.vsprintf = t, "function" == typeof n && n.amd && n(function() {
                        return {
                            sprintf: m,
                            vsprintf: t
                        }
                    }))
                }("undefined" == typeof window ? this : window)
            }, {}],
            37: [function(e, t) {
                (function(i) {
                    function e(e, t) {
                        function i() {
                            if (!n) {
                                if (o("throwDeprecation")) throw new Error(t);
                                o("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0
                            }
                            return e.apply(this, arguments)
                        }
                        if (o("noDeprecation")) return e;
                        var n = !1;
                        return i
                    }

                    function o(e) {
                        try {
                            if (!i.localStorage) return !1
                        } catch (_) {
                            return !1
                        }
                        var t = i.localStorage[e];
                        return null != t && "true" === String(t).toLowerCase()
                    }
                    t.exports = e
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            38: [function(e, t) {
                t.exports = function(e, t, i, n) {
                    if (isNaN(e) || null == e) return "";
                    n = "string" == typeof n ? n : ",";
                    var o = (e = e.toFixed(~~t)).split("."),
                        r = o[0],
                        a = o[1] ? (i || ".") + o[1] : "";
                    return r.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + n) + a
                }
            }, {}],
            39: [function(e, t) {
                var r = e("./helper/makeString"),
                    a = e("./helper/strRepeat");
                t.exports = function(e, t, i, n) {
                    e = r(e), t = ~~t;
                    var o = 0;
                    switch (i ? 1 < i.length && (i = i.charAt(0)) : i = " ", n) {
                        case "right":
                            return o = t - e.length, e + a(i, o);
                        case "both":
                            return o = t - e.length, a(i, Math.ceil(o / 2)) + e + a(i, Math.floor(o / 2));
                        default:
                            return o = t - e.length, a(i, o) + e
                    }
                }
            }, {
                "./helper/makeString": 20,
                "./helper/strRepeat": 21
            }],
            40: [function(e, t) {
                var i = e("./helper/adjacent");
                t.exports = function(e) {
                    return i(e, -1)
                }
            }, {
                "./helper/adjacent": 15
            }],
            41: [function(e, t) {
                var r = e("./helper/makeString"),
                    a = e("./rtrim");
                t.exports = function(e, t, i) {
                    if (e = r(e), t = ~~t, i = null != i ? String(i) : "...", e.length <= t) return e;
                    var n = function(e) {
                            return e.toUpperCase() !== e.toLowerCase() ? "A" : " "
                        },
                        o = e.slice(0, t + 1).replace(/.(?=\W*\w*$)/g, n);
                    return ((o = o.slice(o.length - 2).match(/\w\w/) ? o.replace(/\s*\S+$/, "") : a(o.slice(0, o.length - 1))) + i).length > e.length ? e : e.slice(0, o.length) + i
                }
            }, {
                "./helper/makeString": 20,
                "./rtrim": 47
            }],
            42: [function(e, t) {
                var i = e("./surround");
                t.exports = function(e, t) {
                    return i(e, t || '"')
                }
            }, {
                "./surround": 58
            }],
            43: [function(e, t) {
                var o = e("./helper/makeString"),
                    r = e("./helper/strRepeat");
                t.exports = function(e, t, i) {
                    if (e = o(e), t = ~~t, null == i) return r(e, t);
                    for (var n = []; 0 < t; n[--t] = e);
                    return n.join(i)
                }
            }, {
                "./helper/makeString": 20,
                "./helper/strRepeat": 21
            }],
            44: [function(e, t) {
                var r = e("./helper/makeString");
                t.exports = function(e, t, i, n) {
                    var o = new RegExp(t, !0 === n ? "gi" : "g");
                    return r(e).replace(o, i)
                }
            }, {
                "./helper/makeString": 20
            }],
            45: [function(e, t) {
                var i = e("./chars");
                t.exports = function(e) {
                    return i(e).reverse().join("")
                }
            }, {
                "./chars": 3
            }],
            46: [function(e, t) {
                var n = e("./pad");
                t.exports = function(e, t, i) {
                    return n(e, t, i, "right")
                }
            }, {
                "./pad": 39
            }],
            47: [function(e, t) {
                var i = e("./helper/makeString"),
                    n = e("./helper/defaultToWhiteSpace"),
                    o = String.prototype.trimRight;
                t.exports = function(e, t) {
                    return e = i(e), !t && o ? o.call(e) : (t = n(t), e.replace(new RegExp(t + "+$"), ""))
                }
            }, {
                "./helper/defaultToWhiteSpace": 16,
                "./helper/makeString": 20
            }],
            48: [function(e, t) {
                var i = e("./trim"),
                    n = e("./dasherize"),
                    o = e("./cleanDiacritics");
                t.exports = function(e) {
                    return i(n(o(e).replace(/[^\w\s-]/g, "-").toLowerCase()), "-")
                }
            }, {
                "./cleanDiacritics": 7,
                "./dasherize": 9,
                "./trim": 65
            }],
            49: [function(e, t) {
                var r = e("./chars");
                t.exports = function(e, t, i, n) {
                    var o = r(e);
                    return o.splice(~~t, ~~i, n), o.join("")
                }
            }, {
                "./chars": 3
            }],
            50: [function(e, t) {
                var i = e("util-deprecate");
                t.exports = i(e("sprintf-js").sprintf, "sprintf() will be removed in the next major release, use the sprintf-js package instead.")
            }, {
                "sprintf-js": 36,
                "util-deprecate": 37
            }],
            51: [function(e, t) {
                var n = e("./helper/makeString"),
                    o = e("./helper/toPositive");
                t.exports = function(e, t, i) {
                    return e = n(e), t = "" + t, i = null == i ? 0 : Math.min(o(i), e.length), e.lastIndexOf(t, i) === i
                }
            }, {
                "./helper/makeString": 20,
                "./helper/toPositive": 22
            }],
            52: [function(e, t) {
                var n = e("./helper/makeString");
                t.exports = function(e, t) {
                    e = n(e);
                    var i = (t = n(t)) ? e.indexOf(t) : -1;
                    return ~i ? e.slice(0, i) : e
                }
            }, {
                "./helper/makeString": 20
            }],
            53: [function(e, t) {
                var n = e("./helper/makeString");
                t.exports = function(e, t) {
                    e = n(e), t = n(t);
                    var i = e.lastIndexOf(t);
                    return ~i ? e.slice(0, i) : e
                }
            }, {
                "./helper/makeString": 20
            }],
            54: [function(e, t) {
                var n = e("./helper/makeString");
                t.exports = function(e, t) {
                    e = n(e);
                    var i = (t = n(t)) ? e.indexOf(t) : -1;
                    return ~i ? e.slice(i + t.length, e.length) : e
                }
            }, {
                "./helper/makeString": 20
            }],
            55: [function(e, t) {
                var n = e("./helper/makeString");
                t.exports = function(e, t) {
                    e = n(e);
                    var i = (t = n(t)) ? e.lastIndexOf(t) : -1;
                    return ~i ? e.slice(i + t.length, e.length) : e
                }
            }, {
                "./helper/makeString": 20
            }],
            56: [function(e, t) {
                var i = e("./helper/makeString");
                t.exports = function(e) {
                    return i(e).replace(/<\/?[^>]+>/g, "")
                }
            }, {
                "./helper/makeString": 20
            }],
            57: [function(e, t) {
                var i = e("./helper/adjacent");
                t.exports = function(e) {
                    return i(e, 1)
                }
            }, {
                "./helper/adjacent": 15
            }],
            58: [function(e, t) {
                t.exports = function(e, t) {
                    return [t, e, t].join("")
                }
            }, {}],
            59: [function(e, t) {
                var i = e("./helper/makeString");
                t.exports = function(e) {
                    return i(e).replace(/\S/g, function(e) {
                        return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()
                    })
                }
            }, {
                "./helper/makeString": 20
            }],
            60: [function(e, t) {
                var i = e("./helper/makeString");
                t.exports = function(e) {
                    return i(e).toLowerCase().replace(/(?:^|\s|-)\S/g, function(e) {
                        return e.toUpperCase()
                    })
                }
            }, {
                "./helper/makeString": 20
            }],
            61: [function(e, t) {
                function n(e, t) {
                    var i, n, o = e.toLowerCase();
                    for (t = [].concat(t), i = 0; i < t.length; i += 1)
                        if (n = t[i]) {
                            if (n.test && n.test(e)) return !0;
                            if (n.toLowerCase() === o) return !0
                        }
                }
                var o = e("./trim");
                t.exports = function(e, t, i) {
                    return "number" == typeof e && (e = "" + e), "string" != typeof e ? !!e : !!n(e = o(e), t || ["true", "1"]) || !n(e, i || ["false", "0"]) && void 0
                }
            }, {
                "./trim": 65
            }],
            62: [function(e, t) {
                t.exports = function(e, t) {
                    if (null == e) return 0;
                    var i = Math.pow(10, isFinite(t) ? t : 0);
                    return Math.round(e * i) / i
                }
            }, {}],
            63: [function(e, t) {
                var a = e("./rtrim");
                t.exports = function(e, t, i, n) {
                    t = t || ", ", i = i || " and ";
                    var o = e.slice(),
                        r = o.pop();
                    return 2 < e.length && n && (i = a(t) + i), o.length ? o.join(t) + i + r : r
                }
            }, {
                "./rtrim": 47
            }],
            64: [function(e, t) {
                var n = e("./toSentence");
                t.exports = function(e, t, i) {
                    return n(e, t, i, !0)
                }
            }, {
                "./toSentence": 63
            }],
            65: [function(e, t) {
                var i = e("./helper/makeString"),
                    n = e("./helper/defaultToWhiteSpace"),
                    o = String.prototype.trim;
                t.exports = function(e, t) {
                    return e = i(e), !t && o ? o.call(e) : (t = n(t), e.replace(new RegExp("^" + t + "+|" + t + "+$", "g"), ""))
                }
            }, {
                "./helper/defaultToWhiteSpace": 16,
                "./helper/makeString": 20
            }],
            66: [function(e, t) {
                var n = e("./helper/makeString");
                t.exports = function(e, t, i) {
                    return i = i || "...", t = ~~t, (e = n(e)).length > t ? e.slice(0, t) + i : e
                }
            }, {
                "./helper/makeString": 20
            }],
            67: [function(e, t) {
                var i = e("./trim");
                t.exports = function(e) {
                    return i(e).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()
                }
            }, {
                "./trim": 65
            }],
            68: [function(e, t) {
                var i = e("./helper/makeString"),
                    n = e("./helper/htmlEntities");
                t.exports = function(e) {
                    return i(e).replace(/\&([^;]+);/g, function(e, t) {
                        var i;
                        return t in n ? n[t] : (i = t.match(/^#x([\da-fA-F]+)$/)) ? String.fromCharCode(parseInt(i[1], 16)) : (i = t.match(/^#(\d+)$/)) ? String.fromCharCode(~~i[1]) : e
                    })
                }
            }, {
                "./helper/htmlEntities": 19,
                "./helper/makeString": 20
            }],
            69: [function(e, t) {
                t.exports = function(e, t) {
                    return t = t || '"', e[0] === t && e[e.length - 1] === t ? e.slice(1, e.length - 1) : e
                }
            }, {}],
            70: [function(e, t) {
                var i = e("util-deprecate");
                t.exports = i(e("sprintf-js").vsprintf, "vsprintf() will be removed in the next major release, use the sprintf-js package instead.")
            }, {
                "sprintf-js": 36,
                "util-deprecate": 37
            }],
            71: [function(e, t) {
                var i = e("./isBlank"),
                    n = e("./trim");
                t.exports = function(e, t) {
                    return i(e) ? [] : n(e, t).split(t || /\s+/)
                }
            }, {
                "./isBlank": 27,
                "./trim": 65
            }],
            72: [function(e, t) {
                var u = e("./helper/makeString");
                t.exports = function(e, t) {
                    e = u(e);
                    var i, n = (t = t || {}).width || 75,
                        o = t.seperator || "\n",
                        r = t.cut || !1,
                        a = t.preserveSpaces || !1,
                        s = t.trailingSpaces || !1;
                    if (n <= 0) return e;
                    if (r) {
                        var l = 0;
                        for (i = ""; l < e.length;) l % n == 0 && 0 < l && (i += o), i += e.charAt(l), l++;
                        if (s)
                            for (; 0 < l % n;) i += " ", l++;
                        return i
                    }
                    var c = e.split(" "),
                        d = 0;
                    for (i = ""; 0 < c.length;) {
                        if (1 + c[0].length + d > n && 0 < d) {
                            if (a) i += " ", d++;
                            else if (s)
                                for (; d < n;) i += " ", d++;
                            i += o, d = 0
                        }
                        0 < d && (i += " ", d++), i += c[0], d += c[0].length, c.shift()
                    }
                    if (s)
                        for (; d < n;) i += " ", d++;
                    return i
                }
            }, {
                "./helper/makeString": 20
            }]
        }, {}, [25])(25)
    }),
    function() {
        _ && s && _.mixin(s.exports())
    }.call(this), window.Modernizr = function(n, u, a) {
        function o(e) {
            y.cssText = e
        }

        function e(e, t) {
            return o(C.join(e + ";") + (t || ""))
        }

        function r(e, t) {
            return typeof e === t
        }

        function s(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function l(e, t) {
            for (var i in e) {
                var n = e[i];
                if (!s(n, "-") && y[n] !== a) return "pfx" != t || n
            }
            return !1
        }

        function c(e, t, i) {
            for (var n in e) {
                var o = t[e[n]];
                if (o !== a) return !1 === i ? e[n] : r(o, "function") ? o.bind(i || t) : o
            }
            return !1
        }

        function d(e, t, i) {
            var n = e.charAt(0).toUpperCase() + e.slice(1),
                o = (e + " " + $.join(n + " ") + n).split(" ");
            return r(t, "string") || r(t, "undefined") ? l(o, t) : c(o = (e + " " + D.join(n + " ") + n).split(" "), t, i)
        }

        function t() {
            f.input = function(e) {
                for (var t = 0, i = e.length; t < i; t++) A[e[t]] = !!(e[t] in b);
                return A.list && (A.list = !(!u.createElement("datalist") || !n.HTMLDataListElement)), A
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function(e) {
                for (var t, i, n, o = 0, r = e.length; o < r; o++) b.setAttribute("type", i = e[o]), (t = "text" !== b.type) && (b.value = w, b.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && b.style.WebkitAppearance !== a ? (g.appendChild(b), t = (n = u.defaultView).getComputedStyle && "textfield" !== n.getComputedStyle(b, null).WebkitAppearance && 0 !== b.offsetHeight, g.removeChild(b)) : /^(search|tel)$/.test(i) || (t = /^(url|email)$/.test(i) ? b.checkValidity && !1 === b.checkValidity() : b.value != w)), E[e[o]] = !!t;
                return E
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var i, h, p = "2.8.3",
            f = {},
            m = !0,
            g = u.documentElement,
            _ = "modernizr",
            v = u.createElement(_),
            y = v.style,
            b = u.createElement("input"),
            w = ":)",
            x = {}.toString,
            C = " -webkit- -moz- -o- -ms- ".split(" "),
            k = "Webkit Moz O ms",
            $ = k.split(" "),
            D = k.toLowerCase().split(" "),
            S = {
                svg: "http://www.w3.org/2000/svg"
            },
            T = {},
            E = {},
            A = {},
            I = [],
            M = I.slice,
            P = function(e, t, i, n) {
                var o, r, a, s, l = u.createElement("div"),
                    c = u.body,
                    d = c || u.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;)(a = u.createElement("div")).id = n ? n[i] : _ + (i + 1), l.appendChild(a);
                return o = ["&#173;", '<style id="s', _, '">', e, "</style>"].join(""), l.id = _, (c ? l : d).innerHTML += o, d.appendChild(l), c || (d.style.background = "", d.style.overflow = "hidden", s = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), r = t(l, e), c ? l.parentNode.removeChild(l) : (d.parentNode.removeChild(d), g.style.overflow = s), !!r
            },
            O = function(e) {
                var t, i = n.matchMedia || n.msMatchMedia;
                return i ? i(e) && i(e).matches || !1 : (P("@media " + e + " { #" + _ + " { position: absolute; } }", function(e) {
                    t = "absolute" == (n.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                }), t)
            },
            N = function() {
                function e(e, t) {
                    t = t || u.createElement(n[e] || "div");
                    var i = (e = "on" + e) in t;
                    return i || (t.setAttribute || (t = u.createElement("div")), t.setAttribute && t.removeAttribute && (t.setAttribute(e, ""), i = r(t[e], "function"), r(t[e], "undefined") || (t[e] = a), t.removeAttribute(e))), t = null, i
                }
                var n = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return e
            }(),
            G = {}.hasOwnProperty;
        for (var L in h = r(G, "undefined") || r(G.call, "undefined") ? function(e, t) {
                return t in e && r(e.constructor.prototype[t], "undefined")
            } : function(e, t) {
                return G.call(e, t)
            }, Function.prototype.bind || (Function.prototype.bind = function(n) {
                var o = this;
                if ("function" != typeof o) throw new TypeError;
                var r = M.call(arguments, 1),
                    a = function() {
                        if (this instanceof a) {
                            var e = function() {};
                            e.prototype = o.prototype;
                            var t = new e,
                                i = o.apply(t, r.concat(M.call(arguments)));
                            return Object(i) === i ? i : t
                        }
                        return o.apply(n, r.concat(M.call(arguments)))
                    };
                return a
            }), T.flexbox = function() {
                return d("flexWrap")
            }, T.flexboxlegacy = function() {
                return d("boxDirection")
            }, T.canvas = function() {
                var e = u.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d"))
            }, T.canvastext = function() {
                return !(!f.canvas || !r(u.createElement("canvas").getContext("2d").fillText, "function"))
            }, T.webgl = function() {
                return !!n.WebGLRenderingContext
            }, T.touch = function() {
                var t;
                return "ontouchstart" in n || n.DocumentTouch && u instanceof DocumentTouch ? t = !0 : P(["@media (", C.join("touch-enabled),("), _, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                    t = 9 === e.offsetTop
                }), t
            }, T.geolocation = function() {
                return "geolocation" in navigator
            }, T.postmessage = function() {
                return !!n.postMessage
            }, T.websqldatabase = function() {
                return !!n.openDatabase
            }, T.indexedDB = function() {
                return !!d("indexedDB", n)
            }, T.hashchange = function() {
                return N("hashchange", n) && (u.documentMode === a || 7 < u.documentMode)
            }, T.history = function() {
                return !(!n.history || !history.pushState)
            }, T.draganddrop = function() {
                var e = u.createElement("div");
                return "draggable" in e || "ondragstart" in e && "ondrop" in e
            }, T.websockets = function() {
                return "WebSocket" in n || "MozWebSocket" in n
            }, T.rgba = function() {
                return o("background-color:rgba(150,255,150,.5)"), s(y.backgroundColor, "rgba")
            }, T.hsla = function() {
                return o("background-color:hsla(120,40%,100%,.5)"), s(y.backgroundColor, "rgba") || s(y.backgroundColor, "hsla")
            }, T.multiplebgs = function() {
                return o("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(y.background)
            }, T.backgroundsize = function() {
                return d("backgroundSize")
            }, T.borderimage = function() {
                return d("borderImage")
            }, T.borderradius = function() {
                return d("borderRadius")
            }, T.boxshadow = function() {
                return d("boxShadow")
            }, T.textshadow = function() {
                return "" === u.createElement("div").style.textShadow
            }, T.opacity = function() {
                return e("opacity:.55"), /^0.55$/.test(y.opacity)
            }, T.cssanimations = function() {
                return d("animationName")
            }, T.csscolumns = function() {
                return d("columnCount")
            }, T.cssgradients = function() {
                var e = "background-image:",
                    t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                    i = "linear-gradient(left top,#9f9, white);";
                return o((e + "-webkit- ".split(" ").join(t + e) + C.join(i + e)).slice(0, -e.length)), s(y.backgroundImage, "gradient")
            }, T.cssreflections = function() {
                return d("boxReflect")
            }, T.csstransforms = function() {
                return !!d("transform")
            }, T.csstransforms3d = function() {
                var t = !!d("perspective");
                return t && "webkitPerspective" in g.style && P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e) {
                    t = 9 === e.offsetLeft && 3 === e.offsetHeight
                }), t
            }, T.csstransitions = function() {
                return d("transition")
            }, T.fontface = function() {
                var r;
                return P('@font-face {font-family:"font";src:url("https://")}', function(e, t) {
                    var i = u.getElementById("smodernizr"),
                        n = i.sheet || i.styleSheet,
                        o = n ? n.cssRules && n.cssRules[0] ? n.cssRules[0].cssText : n.cssText || "" : "";
                    r = /src/i.test(o) && 0 === o.indexOf(t.split(" ")[0])
                }), r
            }, T.generatedcontent = function() {
                var t;
                return P(["#", _, "{font:0/0 a}#", _, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
                    t = 3 <= e.offsetHeight
                }), t
            }, T.video = function() {
                var e = u.createElement("video"),
                    t = !1;
                try {
                    (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
                } catch (i) {}
                return t
            }, T.audio = function() {
                var e = u.createElement("audio"),
                    t = !1;
                try {
                    (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
                } catch (i) {}
                return t
            }, T.localstorage = function() {
                try {
                    return localStorage.setItem(_, _), localStorage.removeItem(_), !0
                } catch (e) {
                    return !1
                }
            }, T.sessionstorage = function() {
                try {
                    return sessionStorage.setItem(_, _), sessionStorage.removeItem(_), !0
                } catch (e) {
                    return !1
                }
            }, T.webworkers = function() {
                return !!n.Worker
            }, T.applicationcache = function() {
                return !!n.applicationCache
            }, T.svg = function() {
                return !!u.createElementNS && !!u.createElementNS(S.svg, "svg").createSVGRect
            }, T.inlinesvg = function() {
                var e = u.createElement("div");
                return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == S.svg
            }, T.smil = function() {
                return !!u.createElementNS && /SVGAnimate/.test(x.call(u.createElementNS(S.svg, "animate")))
            }, T.svgclippaths = function() {
                return !!u.createElementNS && /SVGClipPath/.test(x.call(u.createElementNS(S.svg, "clipPath")))
            }, T) h(T, L) && (i = L.toLowerCase(), f[i] = T[L](), I.push((f[i] ? "" : "no-") + i));
        return f.input || t(), f.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var i in e) h(e, i) && f.addTest(i, e[i]);
                else {
                    if (e = e.toLowerCase(), f[e] !== a) return f;
                    t = "function" == typeof t ? t() : t, void 0 !== m && m && (g.className += " " + (t ? "" : "no-") + e), f[e] = t
                }
                return f
            }, o(""), v = b = null,
            function(e, a) {
                function i(e, t) {
                    var i = e.createElement("p"),
                        n = e.getElementsByTagName("head")[0] || e.documentElement;
                    return i.innerHTML = "x<style>" + t + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                }

                function s() {
                    var e = v.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function l(e) {
                    var t = _[e[m]];
                    return t || (t = {}, g++, e[m] = g, _[g] = t), t
                }

                function n(e, t, i) {
                    return t || (t = a), d ? t.createElement(e) : (i || (i = l(t)), !(n = i.cache[e] ? i.cache[e].cloneNode() : f.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e)).canHaveChildren || p.test(e) || n.tagUrn ? n : i.frag.appendChild(n));
                    var n
                }

                function t(e, t) {
                    if (e || (e = a), d) return e.createDocumentFragment();
                    for (var i = (t = t || l(e)).frag.cloneNode(), n = 0, o = s(), r = o.length; n < r; n++) i.createElement(o[n]);
                    return i
                }

                function o(t, i) {
                    i.cache || (i.cache = {}, i.createElem = t.createElement, i.createFrag = t.createDocumentFragment, i.frag = i.createFrag()), t.createElement = function(e) {
                        return v.shivMethods ? n(e, t, i) : i.createElem(e)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + s().join().replace(/[\w\-]+/g, function(e) {
                        return i.createElem(e), i.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(v, i.frag)
                }

                function r(e) {
                    e || (e = a);
                    var t = l(e);
                    return !v.shivCSS || c || t.hasCSS || (t.hasCSS = !!i(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || o(e, t), e
                }
                var c, d, u = "3.7.0",
                    h = e.html5 || {},
                    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    g = 0,
                    _ = {};
                ! function() {
                    try {
                        var e = a.createElement("a");
                        e.innerHTML = "<xyz></xyz>", c = "hidden" in e, d = 1 == e.childNodes.length || function() {
                            a.createElement("a");
                            var e = a.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (t) {
                        d = c = !0
                    }
                }();
                var v = {
                    elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: u,
                    shivCSS: !1 !== h.shivCSS,
                    supportsUnknownElements: d,
                    shivMethods: !1 !== h.shivMethods,
                    type: "default",
                    shivDocument: r,
                    createElement: n,
                    createDocumentFragment: t
                };
                e.html5 = v, r(a)
            }(this, u), f._version = p, f._prefixes = C, f._domPrefixes = D, f._cssomPrefixes = $, f.mq = O, f.hasEvent = N, f.testProp = function(e) {
                return l([e])
            }, f.testAllProps = d, f.testStyles = P, f.prefixed = function(e, t, i) {
                return t ? d(e, t, i) : d(e, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + I.join(" ") : ""), f
    }(this, this.document), window.Detectizr = function(l, c, d, t) {
        function u(e, t) {
            var i, n, o;
            if (2 < arguments.length)
                for (i = 1, n = arguments.length; i < n; i += 1) u(e, arguments[i]);
            else
                for (o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
            return e
        }

        function h(e) {
            return -1 < x.browser.userAgent.indexOf(e)
        }

        function p(e) {
            return e.test(x.browser.userAgent)
        }

        function f(e) {
            return e.exec(x.browser.userAgent)
        }

        function o(e) {
            return e.replace(/^\s+|\s+$/g, "")
        }

        function m(e) {
            return null === e || e === t ? "" : String(e).replace(/((\s|\-|\.)+[a-z0-9])/g, function(e) {
                return e.toUpperCase().replace(/(\s|\-|\.)/g, "")
            })
        }

        function i(e, t) {
            var i = t || "",
                n = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(a, " ") : "");
            if (n) {
                for (; 0 <= n.indexOf(" " + i + " ");) n = n.replace(" " + i + " ", " ");
                e.className = t ? o(n) : ""
            }
        }

        function g(e, t, i) {
            e && (e = m(e), t && (_(e + (t = m(t)), !0), i && _(e + t + "_" + i, !0)))
        }

        function _(e, t) {
            e && C && ($.addAllFeaturesAsClass ? C.addTest(e, t) : (t = "function" == typeof t ? t() : t) ? C.addTest(e, !0) : (delete C[e], i(s, e)))
        }

        function v(e, t) {
            var i = (e.version = t).split(".");
            0 < i.length ? (i = i.reverse(), e.major = i.pop(), 0 < i.length ? (e.minor = i.pop(), 0 < i.length ? (i = i.reverse(), e.patch = i.join(".")) : e.patch = "0") : e.minor = "0") : e.major = "0"
        }

        function y() {
            l.clearTimeout(e), e = l.setTimeout(function() {
                r = x.device.orientation, l.innerHeight > l.innerWidth ? x.device.orientation = "portrait" : x.device.orientation = "landscape", _(x.device.orientation, !0), r !== x.device.orientation && _(r, !1)
            }, 10)
        }

        function b(e) {
            var t, i, n, o, r, a = c.plugins;
            for (o = a.length - 1; 0 <= o; o--) {
                for (i = (t = a[o]).name + t.description, n = 0, r = e.length; 0 <= r; r--) - 1 !== i.indexOf(e[r]) && (n += 1);
                if (n === e.length) return !0
            }
            return !1
        }

        function w(e) {
            var t;
            for (t = e.length - 1; 0 <= t; t--) try {
                new ActiveXObject(e[t])
            } catch (i) {}
            return !1
        }

        function n(e) {
            var t, i, n, o, r, a, s;
            if (($ = u({}, $, e || {})).detectDevice) {
                for (x.device = {
                        type: "",
                        model: "",
                        orientation: ""
                    }, n = x.device, p(/googletv|smarttv|smart-tv|internet.tv|netcast|nettv|appletv|boxee|kylo|roku|dlnadoc|roku|pov_tv|hbbtv|ce\-html/) ? (n.type = k[0], n.model = "smartTv") : p(/xbox|playstation.3|wii/) ? (n.type = k[0], n.model = "gameConsole") : p(/ip(a|ro)d/) ? (n.type = k[1], n.model = "ipad") : p(/tablet/) && !p(/rx-34/) || p(/folio/) ? (n.type = k[1], n.model = String(f(/playbook/) || "")) : p(/linux/) && p(/android/) && !p(/fennec|mobi|htc.magic|htcX06ht|nexus.one|sc-02b|fone.945/) ? (n.type = k[1], n.model = "android") : p(/kindle/) || p(/mac.os/) && p(/silk/) ? (n.type = k[1], n.model = "kindle") : p(/gt-p10|sc-01c|shw-m180s|sgh-t849|sch-i800|shw-m180l|sph-p100|sgh-i987|zt180|htc(.flyer|\_flyer)|sprint.atp51|viewpad7|pandigital(sprnova|nova)|ideos.s7|dell.streak.7|advent.vega|a101it|a70bht|mid7015|next2|nook/) || p(/mb511/) && p(/rutem/) ? (n.type = k[1], n.model = "android") : p(/bb10/) ? (n.type = k[1], n.model = "blackberry") : (n.model = f(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/), null !== n.model ? (n.type = k[2], n.model = String(n.model)) : (n.model = "", p(/bolt|fennec|iris|maemo|minimo|mobi|mowser|netfront|novarra|prism|rx-34|skyfire|tear|xv6875|xv6975|google.wireless.transcoder/) ? n.type = k[2] : p(/opera/) && p(/windows.nt.5/) && p(/htc|xda|mini|vario|samsung\-gt\-i8000|samsung\-sgh\-i9/) ? n.type = k[2] : p(/windows.(nt|xp|me|9)/) && !p(/phone/) || p(/win(9|.9|nt)/) || p(/\(windows 8\)/) ? n.type = k[3] : p(/macintosh|powerpc/) && !p(/silk/) ? (n.type = k[3], n.model = "mac") : p(/linux/) && p(/x11/) ? n.type = k[3] : p(/solaris|sunos|bsd/) ? n.type = k[3] : p(/cros/) ? n.type = k[3] : p(/bot|crawler|spider|yahoo|ia_archiver|covario-ids|findlinks|dataparksearch|larbin|mediapartners-google|ng-search|snappy|teoma|jeeves|tineye/) && !p(/mobile/) ? (n.type = k[3], n.model = "crawler") : n.type = k[2])), t = 0, i = k.length; t < i; t += 1) _(k[t], n.type === k[t]);
                $.detectDeviceModel && _(m(n.model), !0)
            }
            if ($.detectScreen && (n.screen = {}, C && C.mq && (C.mq("only screen and (max-width: 240px)") ? (n.screen.size = "veryVerySmall", _("veryVerySmallScreen", !0)) : C.mq("only screen and (max-width: 320px)") ? (n.screen.size = "verySmall", _("verySmallScreen", !0)) : C.mq("only screen and (max-width: 480px)") && (n.screen.size = "small", _("smallScreen", !0)), n.type !== k[1] && n.type !== k[2] || C.mq("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)") && (n.screen.resolution = "high", _("highresolution", !0))), n.type === k[1] || n.type === k[2] ? (l.onresize = function(e) {
                    y(e)
                }, y()) : (n.orientation = "landscape", _(n.orientation, !0))), $.detectOS && (x.os = {}, o = x.os, "" !== n.model && ("ipad" === n.model || "iphone" === n.model || "ipod" === n.model ? (o.name = "ios", v(o, (p(/os\s([\d_]+)/) ? RegExp.$1 : "").replace(/_/g, "."))) : "android" === n.model ? (o.name = "android", v(o, p(/android\s([\d\.]+)/) ? RegExp.$1 : "")) : "blackberry" === n.model ? (o.name = "blackberry", v(o, p(/version\/([^\s]+)/) ? RegExp.$1 : "")) : "playbook" === n.model && (o.name = "blackberry", v(o, p(/os ([^\s]+)/) ? RegExp.$1.replace(";", "") : ""))), o.name || (h("win") || h("16bit") ? (o.name = "windows", h("windows nt 6.3") ? v(o, "8.1") : h("windows nt 6.2") || p(/\(windows 8\)/) ? v(o, "8") : h("windows nt 6.1") ? v(o, "7") : h("windows nt 6.0") ? v(o, "vista") : h("windows nt 5.2") || h("windows nt 5.1") || h("windows xp") ? v(o, "xp") : h("windows nt 5.0") || h("windows 2000") ? v(o, "2k") : h("winnt") || h("windows nt") ? v(o, "nt") : h("win98") || h("windows 98") ? v(o, "98") : (h("win95") || h("windows 95")) && v(o, "95")) : h("mac") || h("darwin") ? (o.name = "mac os", h("68k") || h("68000") ? v(o, "68k") : h("ppc") || h("powerpc") ? v(o, "ppc") : h("os x") && v(o, (p(/os\sx\s([\d_]+)/) ? RegExp.$1 : "os x").replace(/_/g, "."))) : h("webtv") ? o.name = "webtv" : h("x11") || h("inux") ? o.name = "linux" : h("sunos") ? o.name = "sun" : h("irix") ? o.name = "irix" : h("freebsd") ? o.name = "freebsd" : h("bsd") && (o.name = "bsd")), o.name && (_(o.name, !0), o.major && (g(o.name, o.major), o.minor && g(o.name, o.major, o.minor))), p(/\sx64|\sx86|\swin64|\swow64|\samd64/) ? o.addressRegisterSize = "64bit" : o.addressRegisterSize = "32bit", _(o.addressRegisterSize, !0)), $.detectBrowser && (r = x.browser, p(/opera|webtv/) || !p(/msie\s([\d\w\.]+)/) && !h("trident") ? h("firefox") ? (r.engine = "gecko", r.name = "firefox", v(r, p(/firefox\/([\d\w\.]+)/) ? RegExp.$1 : "")) : h("gecko/") ? r.engine = "gecko" : h("opera") ? (r.name = "opera", r.engine = "presto", v(r, p(/version\/([\d\.]+)/) ? RegExp.$1 : p(/opera(\s|\/)([\d\.]+)/) ? RegExp.$2 : "")) : h("konqueror") ? r.name = "konqueror" : h("chrome") ? (r.engine = "webkit", r.name = "chrome", v(r, p(/chrome\/([\d\.]+)/) ? RegExp.$1 : "")) : h("iron") ? (r.engine = "webkit", r.name = "iron") : h("crios") ? (r.name = "chrome", r.engine = "webkit", v(r, p(/crios\/([\d\.]+)/) ? RegExp.$1 : "")) : h("applewebkit/") ? (r.name = "safari", r.engine = "webkit", v(r, p(/version\/([\d\.]+)/) ? RegExp.$1 : "")) : h("mozilla/") && (r.engine = "gecko") : (r.engine = "trident", r.name = "ie", !l.addEventListener && d.documentMode && 7 === d.documentMode ? v(r, "8.compat") : p(/trident.*rv[ :](\d+)\./) ? v(r, RegExp.$1) : v(r, p(/trident\/4\.0/) ? "8" : RegExp.$1)), r.name && (_(r.name, !0), r.major && (g(r.name, r.major), r.minor && g(r.name, r.major, r.minor))), _(r.engine, !0), r.language = c.userLanguage || c.language, _(r.language, !0)), $.detectPlugins) {
                for (r.plugins = [], t = D.length - 1; 0 <= t; t--) a = D[t], s = !1, l.ActiveXObject ? s = w(a.progIds) : c.plugins && (s = b(a.substrs)), s && (r.plugins.push(a.name), _(a.name, !0));
                c.javaEnabled() && (r.plugins.push("java"), _("java", !0))
            }
        }
        var e, r, x = {},
            C = l.Modernizr,
            k = ["tv", "tablet", "mobile", "desktop"],
            $ = {
                addAllFeaturesAsClass: !1,
                detectDevice: !0,
                detectDeviceModel: !0,
                detectScreen: !0,
                detectOS: !0,
                detectBrowser: !0,
                detectPlugins: !0
            },
            D = [{
                name: "adobereader",
                substrs: ["Adobe", "Acrobat"],
                progIds: ["AcroPDF.PDF", "PDF.PDFCtrl.5"]
            }, {
                name: "flash",
                substrs: ["Shockwave Flash"],
                progIds: ["ShockwaveFlash.ShockwaveFlash.1"]
            }, {
                name: "wmplayer",
                substrs: ["Windows Media"],
                progIds: ["wmplayer.ocx"]
            }, {
                name: "silverlight",
                substrs: ["Silverlight"],
                progIds: ["AgControl.AgControl"]
            }, {
                name: "quicktime",
                substrs: ["QuickTime"],
                progIds: ["QuickTime.QuickTime"]
            }],
            a = /[\t\r\n]/g,
            s = d.documentElement;
        return x.detect = function(e) {
            return n(e)
        }, x.init = function() {
            x !== t && (x.browser = {
                userAgent: (c.userAgent || c.vendor || l.opera).toLowerCase()
            }, x.detect())
        }, x.init(), x
    }(this, this.navigator, this.document), window.url = function() {
        function o() {}

        function d(e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        }

        function r(e, t) {
            var i = e.charAt(0),
                n = t.split(i);
            return i === e ? n : n[(e = parseInt(e.substring(1), 10)) < 0 ? n.length + e : e - 1]
        }

        function a(e, t) {
            for (var i = e.charAt(0), n = t.split("&"), o = [], r = {}, a = [], s = e.substring(1), l = 0, c = n.length; l < c; l++)
                if ((o = n[l].match(/(.*?)=(.*)/)) || (o = [n[l], n[l], ""]), "" !== o[1].replace(/\s/g, "")) {
                    if (o[2] = d(o[2] || ""), s === o[1]) return o[2];
                    (a = o[1].match(/(.*)\[([0-9]+)\]/)) ? (r[a[1]] = r[a[1]] || [], r[a[1]][a[2]] = o[2]) : r[o[1]] = o[2]
                } return i === e ? r : r[s]
        }
        return function(e, t) {
            var i, n = {};
            if ("tld?" === e) return o();
            if (t = t || window.location.toString(), !e) return t;
            if (e = e.toString(), i = t.match(/^mailto:([^\/].+)/)) n.protocol = "mailto", n.email = i[1];
            else {
                if ((i = t.match(/(.*?)\/#\!(.*)/)) && (t = i[1] + i[2]), (i = t.match(/(.*?)#(.*)/)) && (n.hash = i[2], t = i[1]), n.hash && e.match(/^#/)) return a(e, n.hash);
                if ((i = t.match(/(.*?)\?(.*)/)) && (n.query = i[2], t = i[1]), n.query && e.match(/^\?/)) return a(e, n.query);
                if ((i = t.match(/(.*?)\:?\/\/(.*)/)) && (n.protocol = i[1].toLowerCase(), t = i[2]), (i = t.match(/(.*?)(\/.*)/)) && (n.path = i[2], t = i[1]), n.path = (n.path || "").replace(/^([^\/])/, "/$1").replace(/\/$/, ""), e.match(/^[\-0-9]+$/) && (e = e.replace(/^([^\/])/, "/$1")), e.match(/^\//)) return r(e, n.path.substring(1));
                if ((i = r("/-1", n.path.substring(1))) && (i = i.match(/(.*?)\.(.*)/)) && (n.file = i[0], n.filename = i[1], n.fileext = i[2]), (i = t.match(/(.*)\:([0-9]+)$/)) && (n.port = i[2], t = i[1]), (i = t.match(/(.*?)@(.*)/)) && (n.auth = i[1], t = i[2]), n.auth && (i = n.auth.match(/(.*)\:(.*)/), n.user = i ? i[1] : n.auth, n.pass = i ? i[2] : void 0), n.hostname = t.toLowerCase(), "." === e.charAt(0)) return r(e, n.hostname);
                o() && ((i = n.hostname.match(o())) && (n.tld = i[3], n.domain = i[2] ? i[2] + "." + i[3] : void 0, n.sub = i[1] || void 0)), n.port = n.port || ("https" === n.protocol ? "443" : "80"), n.protocol = n.protocol || ("443" === n.port ? "https" : "http")
            }
            return e in n ? n[e] : "{}" === e ? n : void 0
        }
    }(), "undefined" != typeof jQuery && jQuery.extend({
        url: function(e, t) {
            return window.url(e, t)
        }
    }),
    function() {
        this.Turbolinks = {
            supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
            visit: function(e, t) {
                return Turbolinks.controller.visit(e, t)
            },
            clearCache: function() {
                return Turbolinks.controller.clearCache()
            },
            setProgressBarDelay: function(e) {
                return Turbolinks.controller.setProgressBarDelay(e)
            }
        }
    }.call(this),
    function() {
        var i, n, l, e, t, o, r, a, s, c = [].slice;
        Turbolinks.copyObject = function(e) {
            var t, i, n;
            for (t in i = {}, e) n = e[t], i[t] = n;
            return i
        }, Turbolinks.closest = function(e, t) {
            return i.call(e, t)
        }, i = null != (s = document.documentElement.closest) ? s : function(e) {
            var t;
            for (t = this; t;) {
                if (t.nodeType === Node.ELEMENT_NODE && n.call(t, e)) return t;
                t = t.parentNode
            }
        }, Turbolinks.defer = function(e) {
            return setTimeout(e, 1)
        }, Turbolinks.throttle = function(i) {
            var n;
            return n = null,
                function() {
                    var e, t;
                    return e = 1 <= arguments.length ? c.call(arguments, 0) : [], null != n ? n : n = requestAnimationFrame((t = this, function() {
                        return n = null, i.apply(t, e)
                    }))
                }
        }, Turbolinks.dispatch = function(e, t) {
            var i, n, o, r, a, s;
            return s = (a = null != t ? t : {}).target, i = a.cancelable, n = a.data, (o = document.createEvent("Events")).initEvent(e, !0, !0 === i), o.data = null != n ? n : {}, o.cancelable && !l && (r = o.preventDefault, o.preventDefault = function() {
                return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                    get: function() {
                        return !0
                    }
                }), r.call(this)
            }), (null != s ? s : document).dispatchEvent(o), o
        }, (a = document.createEvent("Events")).initEvent("test", !0, !0), a.preventDefault(), l = a.defaultPrevented, Turbolinks.match = function(e, t) {
            return n.call(e, t)
        }, n = null != (t = null != (o = null != (r = (e = document.documentElement).matchesSelector) ? r : e.webkitMatchesSelector) ? o : e.msMatchesSelector) ? t : e.mozMatchesSelector, Turbolinks.uuid = function() {
            var e, t, i;
            for (i = "", e = t = 1; t <= 36; e = ++t) i += 9 === e || 14 === e || 19 === e || 24 === e ? "-" : 15 === e ? "4" : 20 === e ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
            return i
        }
    }.call(this),
    function() {
        Turbolinks.Location = function() {
            function e(e) {
                var t, i;
                null == e && (e = ""), (i = document.createElement("a")).href = e.toString(), this.absoluteURL = i.href, (t = i.hash.length) < 2 ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -t), this.anchor = i.hash.slice(1))
            }
            var t, i, n, o;
            return e.wrap = function(e) {
                return e instanceof this ? e : new this(e)
            }, e.prototype.getOrigin = function() {
                return this.absoluteURL.split("/", 3).join("/")
            }, e.prototype.getPath = function() {
                var e, t;
                return null != (e = null != (t = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? t[1] : void 0) ? e : "/"
            }, e.prototype.getPathComponents = function() {
                return this.getPath().split("/").slice(1)
            }, e.prototype.getLastPathComponent = function() {
                return this.getPathComponents().slice(-1)[0]
            }, e.prototype.getExtension = function() {
                var e, t;
                return null != (e = null != (t = this.getLastPathComponent().match(/\.[^.]*$/)) ? t[0] : void 0) ? e : ""
            }, e.prototype.isHTML = function() {
                return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
            }, e.prototype.isPrefixedBy = function(e) {
                var t;
                return t = i(e), this.isEqualTo(e) || o(this.absoluteURL, t)
            }, e.prototype.isEqualTo = function(e) {
                return this.absoluteURL === (null != e ? e.absoluteURL : void 0)
            }, e.prototype.toCacheKey = function() {
                return this.requestURL
            }, e.prototype.toJSON = function() {
                return this.absoluteURL
            }, e.prototype.toString = function() {
                return this.absoluteURL
            }, e.prototype.valueOf = function() {
                return this.absoluteURL
            }, i = function(e) {
                return t(e.getOrigin() + e.getPath())
            }, t = function(e) {
                return n(e, "/") ? e : e + "/"
            }, o = function(e, t) {
                return e.slice(0, t.length) === t
            }, n = function(e, t) {
                return e.slice(-t.length) === t
            }, e
        }()
    }.call(this),
    function() {
        var n = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Turbolinks.HttpRequest = function() {
            function e(e, t, i) {
                this.delegate = e, this.requestCanceled = n(this.requestCanceled, this), this.requestTimedOut = n(this.requestTimedOut, this), this.requestFailed = n(this.requestFailed, this), this.requestLoaded = n(this.requestLoaded, this), this.requestProgressed = n(this.requestProgressed, this), this.url = Turbolinks.Location.wrap(t).requestURL, this.referrer = Turbolinks.Location.wrap(i).absoluteURL, this.createXHR()
            }
            return e.NETWORK_FAILURE = 0, e.TIMEOUT_FAILURE = -1, e.timeout = 60, e.prototype.send = function() {
                var e;
                return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof(e = this.delegate).requestStarted ? e.requestStarted() : void 0) : void 0
            }, e.prototype.cancel = function() {
                return this.xhr && this.sent ? this.xhr.abort() : void 0
            }, e.prototype.requestProgressed = function(e) {
                return e.lengthComputable ? this.setProgress(e.loaded / e.total) : void 0
            }, e.prototype.requestLoaded = function() {
                return this.endRequest((t = this, function() {
                    var e;
                    return 200 <= (e = t.xhr.status) && e < 300 ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText))
                }));
                var t
            }, e.prototype.requestFailed = function() {
                return this.endRequest((e = this, function() {
                    return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.NETWORK_FAILURE)
                }));
                var e
            }, e.prototype.requestTimedOut = function() {
                return this.endRequest((e = this, function() {
                    return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.TIMEOUT_FAILURE)
                }));
                var e
            }, e.prototype.requestCanceled = function() {
                return this.endRequest()
            }, e.prototype.notifyApplicationBeforeRequestStart = function() {
                return Turbolinks.dispatch("turbolinks:request-start", {
                    data: {
                        url: this.url,
                        xhr: this.xhr
                    }
                })
            }, e.prototype.notifyApplicationAfterRequestEnd = function() {
                return Turbolinks.dispatch("turbolinks:request-end", {
                    data: {
                        url: this.url,
                        xhr: this.xhr
                    }
                })
            }, e.prototype.createXHR = function() {
                return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
            }, e.prototype.endRequest = function(e) {
                return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != e && e.call(this), this.destroy()) : void 0
            }, e.prototype.setProgress = function(e) {
                var t;
                return this.progress = e, "function" == typeof(t = this.delegate).requestProgressed ? t.requestProgressed(this.progress) : void 0
            }, e.prototype.destroy = function() {
                var e;
                return this.setProgress(1), "function" == typeof(e = this.delegate).requestFinished && e.requestFinished(), this.delegate = null, this.xhr = null
            }, e
        }()
    }.call(this),
    function() {
        var i = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Turbolinks.ProgressBar = function() {
            function e() {
                this.trickle = i(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement()
            }
            var t;
            return t = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + t + "ms ease-out, opacity " + t / 2 + "ms " + t / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function() {
                return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
            }, e.prototype.hide = function() {
                return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement((e = this, function() {
                    return e.uninstallProgressElement(), e.stopTrickling(), e.visible = !1, e.hiding = !1
                }))) : void 0;
                var e
            }, e.prototype.setValue = function(e) {
                return this.value = e, this.refresh()
            }, e.prototype.installStylesheetElement = function() {
                return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
            }, e.prototype.installProgressElement = function() {
                return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
            }, e.prototype.fadeProgressElement = function(e) {
                return this.progressElement.style.opacity = 0, setTimeout(e, 1.5 * t)
            }, e.prototype.uninstallProgressElement = function() {
                return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
            }, e.prototype.startTrickling = function() {
                return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, t)
            }, e.prototype.stopTrickling = function() {
                return clearInterval(this.trickleInterval), this.trickleInterval = null
            }, e.prototype.trickle = function() {
                return this.setValue(this.value + Math.random() / 100)
            }, e.prototype.refresh = function() {
                return requestAnimationFrame((e = this, function() {
                    return e.progressElement.style.width = 10 + 90 * e.value + "%"
                }));
                var e
            }, e.prototype.createStylesheetElement = function() {
                var e;
                return (e = document.createElement("style")).type = "text/css", e.textContent = this.constructor.defaultCSS, e
            }, e.prototype.createProgressElement = function() {
                var e;
                return (e = document.createElement("div")).className = "turbolinks-progress-bar", e
            }, e
        }()
    }.call(this),
    function() {
        var o = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Turbolinks.BrowserAdapter = function() {
            function e(e) {
                this.controller = e, this.showProgressBar = o(this.showProgressBar, this), this.progressBar = new Turbolinks.ProgressBar
            }
            var i, n, t;
            return t = Turbolinks.HttpRequest, i = t.NETWORK_FAILURE, n = t.TIMEOUT_FAILURE, e.prototype.visitProposedToLocationWithAction = function(e, t) {
                return this.controller.startVisitToLocationWithAction(e, t)
            }, e.prototype.visitStarted = function(e) {
                return e.issueRequest(), e.changeHistory(), e.loadCachedSnapshot()
            }, e.prototype.visitRequestStarted = function(e) {
                return this.progressBar.setValue(0), e.hasCachedSnapshot() || "restore" !== e.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
            }, e.prototype.visitRequestProgressed = function(e) {
                return this.progressBar.setValue(e.progress)
            }, e.prototype.visitRequestCompleted = function(e) {
                return e.loadResponse()
            }, e.prototype.visitRequestFailedWithStatusCode = function(e, t) {
                switch (t) {
                    case i:
                    case n:
                        return this.reload();
                    default:
                        return e.loadResponse()
                }
            }, e.prototype.visitRequestFinished = function() {
                return this.hideProgressBar()
            }, e.prototype.visitCompleted = function(e) {
                return e.followRedirect()
            }, e.prototype.pageInvalidated = function() {
                return this.reload()
            }, e.prototype.showProgressBarAfterDelay = function() {
                return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
            }, e.prototype.showProgressBar = function() {
                return this.progressBar.show()
            }, e.prototype.hideProgressBar = function() {
                return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
            }, e.prototype.reload = function() {
                return window.location.reload()
            }, e
        }()
    }.call(this),
    function() {
        var t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Turbolinks.History = function() {
            function e(e) {
                this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this)
            }
            return e.prototype.start = function() {
                return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0)
            }, e.prototype.stop = function() {
                return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0
            }, e.prototype.push = function(e, t) {
                return e = Turbolinks.Location.wrap(e), this.update("push", e, t)
            }, e.prototype.replace = function(e, t) {
                return e = Turbolinks.Location.wrap(e), this.update("replace", e, t)
            }, e.prototype.onPopState = function(e) {
                var t, i, n, o;
                return this.shouldHandlePopState() && (o = null != (i = e.state) ? i.turbolinks : void 0) ? (t = Turbolinks.Location.wrap(window.location), n = o.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(t, n)) : void 0
            }, e.prototype.onPageLoad = function() {
                return Turbolinks.defer((e = this, function() {
                    return e.pageLoaded = !0
                }));
                var e
            }, e.prototype.shouldHandlePopState = function() {
                return this.pageIsLoaded()
            }, e.prototype.pageIsLoaded = function() {
                return this.pageLoaded || "complete" === document.readyState
            }, e.prototype.update = function(e, t, i) {
                var n;
                return n = {
                    turbolinks: {
                        restorationIdentifier: i
                    }
                }, history[e + "State"](n, null, t)
            }, e
        }()
    }.call(this),
    function() {
        Turbolinks.View = function() {
            function e(e) {
                this.delegate = e, this.element = document.documentElement
            }
            return e.prototype.getRootLocation = function() {
                return this.getSnapshot().getRootLocation()
            }, e.prototype.getElementForAnchor = function(e) {
                return this.getSnapshot().getElementForAnchor(e)
            }, e.prototype.getSnapshot = function() {
                return Turbolinks.Snapshot.fromElement(this.element)
            }, e.prototype.render = function(e, t) {
                var i, n, o;
                return o = e.snapshot, i = e.error, n = e.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, t) : this.renderError(i, t)
            }, e.prototype.markAsPreview = function(e) {
                return e ? this.element.setAttribute("data-turbolinks-preview", "") : this.element.removeAttribute("data-turbolinks-preview")
            }, e.prototype.renderSnapshot = function(e, t, i) {
                return Turbolinks.SnapshotRenderer.render(this.delegate, i, this.getSnapshot(), Turbolinks.Snapshot.wrap(e), t)
            }, e.prototype.renderError = function(e, t) {
                return Turbolinks.ErrorRenderer.render(this.delegate, t, e)
            }, e
        }()
    }.call(this),
    function() {
        var t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Turbolinks.ScrollManager = function() {
            function e(e) {
                this.delegate = e, this.onScroll = t(this.onScroll, this), this.onScroll = Turbolinks.throttle(this.onScroll)
            }
            return e.prototype.start = function() {
                return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
            }, e.prototype.stop = function() {
                return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
            }, e.prototype.scrollToElement = function(e) {
                return e.scrollIntoView()
            }, e.prototype.scrollToPosition = function(e) {
                var t, i;
                return t = e.x, i = e.y, window.scrollTo(t, i)
            }, e.prototype.onScroll = function() {
                return this.updatePosition({
                    x: window.pageXOffset,
                    y: window.pageYOffset
                })
            }, e.prototype.updatePosition = function(e) {
                var t;
                return this.position = e, null != (t = this.delegate) ? t.scrollPositionChanged(this.position) : void 0
            }, e
        }()
    }.call(this),
    function() {
        Turbolinks.SnapshotCache = function() {
            function e(e) {
                this.size = e, this.keys = [], this.snapshots = {}
            }
            var n;
            return e.prototype.has = function(e) {
                return n(e) in this.snapshots
            }, e.prototype.get = function(e) {
                var t;
                if (this.has(e)) return t = this.read(e), this.touch(e), t
            }, e.prototype.put = function(e, t) {
                return this.write(e, t), this.touch(e), t
            }, e.prototype.read = function(e) {
                var t;
                return t = n(e), this.snapshots[t]
            }, e.prototype.write = function(e, t) {
                var i;
                return i = n(e), this.snapshots[i] = t
            }, e.prototype.touch = function(e) {
                var t, i;
                return i = n(e), -1 < (t = this.keys.indexOf(i)) && this.keys.splice(t, 1), this.keys.unshift(i), this.trim()
            }, e.prototype.trim = function() {
                var e, t, i, n, o;
                for (o = [], e = 0, i = (n = this.keys.splice(this.size)).length; e < i; e++) t = n[e], o.push(delete this.snapshots[t]);
                return o
            }, n = function(e) {
                return Turbolinks.Location.wrap(e).toCacheKey()
            }, e
        }()
    }.call(this),
    function() {
        var t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Turbolinks.Controller = function() {
            function e() {
                this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new Turbolinks.History(this), this.view = new Turbolinks.View(this), this.scrollManager = new Turbolinks.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500)
            }
            return e.prototype.start = function() {
                return Turbolinks.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
            }, e.prototype.disable = function() {
                return this.enabled = !1
            }, e.prototype.stop = function() {
                return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
            }, e.prototype.clearCache = function() {
                return this.cache = new Turbolinks.SnapshotCache(10)
            }, e.prototype.visit = function(e, t) {
                var i, n;
                return null == t && (t = {}), e = Turbolinks.Location.wrap(e), this.applicationAllowsVisitingLocation(e) ? this.locationIsVisitable(e) ? (i = null != (n = t.action) ? n : "advance", this.adapter.visitProposedToLocationWithAction(e, i)) : window.location = e : void 0
            }, e.prototype.startVisitToLocationWithAction = function(e, t, i) {
                var n;
                return Turbolinks.supported ? (n = this.getRestorationDataForIdentifier(i), this.startVisit(e, t, {
                    restorationData: n
                })) : window.location = e
            }, e.prototype.setProgressBarDelay = function(e) {
                return this.progressBarDelay = e
            }, e.prototype.startHistory = function() {
                return this.location = Turbolinks.Location.wrap(window.location), this.restorationIdentifier = Turbolinks.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
            }, e.prototype.stopHistory = function() {
                return this.history.stop()
            }, e.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(e, t) {
                return this.restorationIdentifier = t, this.location = Turbolinks.Location.wrap(e), this.history.push(this.location, this.restorationIdentifier)
            }, e.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(e, t) {
                return this.restorationIdentifier = t, this.location = Turbolinks.Location.wrap(e), this.history.replace(this.location, this.restorationIdentifier)
            }, e.prototype.historyPoppedToLocationWithRestorationIdentifier = function(e, t) {
                var i;
                return this.restorationIdentifier = t, this.enabled ? (i = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(e, "restore", {
                    restorationIdentifier: this.restorationIdentifier,
                    restorationData: i,
                    historyChanged: !0
                }), this.location = Turbolinks.Location.wrap(e)) : this.adapter.pageInvalidated()
            }, e.prototype.getCachedSnapshotForLocation = function(e) {
                var t;
                return (t = this.cache.get(e)) ? t.clone() : void 0
            }, e.prototype.shouldCacheSnapshot = function() {
                return this.view.getSnapshot().isCacheable()
            }, e.prototype.cacheSnapshot = function() {
                var e;
                return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), e = this.view.getSnapshot(), this.cache.put(this.lastRenderedLocation, e.clone())) : void 0
            }, e.prototype.scrollToAnchor = function(e) {
                var t;
                return (t = this.view.getElementForAnchor(e)) ? this.scrollToElement(t) : this.scrollToPosition({
                    x: 0,
                    y: 0
                })
            }, e.prototype.scrollToElement = function(e) {
                return this.scrollManager.scrollToElement(e)
            }, e.prototype.scrollToPosition = function(e) {
                return this.scrollManager.scrollToPosition(e)
            }, e.prototype.scrollPositionChanged = function(e) {
                return this.getCurrentRestorationData().scrollPosition = e
            }, e.prototype.render = function(e, t) {
                return this.view.render(e, t)
            }, e.prototype.viewInvalidated = function() {
                return this.adapter.pageInvalidated()
            }, e.prototype.viewWillRender = function(e) {
                return this.notifyApplicationBeforeRender(e)
            }, e.prototype.viewRendered = function() {
                return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
            }, e.prototype.pageLoaded = function() {
                return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
            }, e.prototype.clickCaptured = function() {
                return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
            }, e.prototype.clickBubbled = function(e) {
                var t, i, n;
                return this.enabled && this.clickEventIsSignificant(e) && (i = this.getVisitableLinkForNode(e.target)) && (n = this.getVisitableLocationForLink(i)) && this.applicationAllowsFollowingLinkToLocation(i, n) ? (e.preventDefault(), t = this.getActionForLink(i), this.visit(n, {
                    action: t
                })) : void 0
            }, e.prototype.applicationAllowsFollowingLinkToLocation = function(e, t) {
                return !this.notifyApplicationAfterClickingLinkToLocation(e, t).defaultPrevented
            }, e.prototype.applicationAllowsVisitingLocation = function(e) {
                return !this.notifyApplicationBeforeVisitingLocation(e).defaultPrevented
            }, e.prototype.notifyApplicationAfterClickingLinkToLocation = function(e, t) {
                return Turbolinks.dispatch("turbolinks:click", {
                    target: e,
                    data: {
                        url: t.absoluteURL
                    },
                    cancelable: !0
                })
            }, e.prototype.notifyApplicationBeforeVisitingLocation = function(e) {
                return Turbolinks.dispatch("turbolinks:before-visit", {
                    data: {
                        url: e.absoluteURL
                    },
                    cancelable: !0
                })
            }, e.prototype.notifyApplicationAfterVisitingLocation = function(e) {
                return Turbolinks.dispatch("turbolinks:visit", {
                    data: {
                        url: e.absoluteURL
                    }
                })
            }, e.prototype.notifyApplicationBeforeCachingSnapshot = function() {
                return Turbolinks.dispatch("turbolinks:before-cache")
            }, e.prototype.notifyApplicationBeforeRender = function(e) {
                return Turbolinks.dispatch("turbolinks:before-render", {
                    data: {
                        newBody: e
                    }
                })
            }, e.prototype.notifyApplicationAfterRender = function() {
                return Turbolinks.dispatch("turbolinks:render")
            }, e.prototype.notifyApplicationAfterPageLoad = function(e) {
                return null == e && (e = {}), Turbolinks.dispatch("turbolinks:load", {
                    data: {
                        url: this.location.absoluteURL,
                        timing: e
                    }
                })
            }, e.prototype.startVisit = function(e, t, i) {
                var n;
                return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(e, t, i), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(e)
            }, e.prototype.createVisit = function(e, t, i) {
                var n, o, r, a, s;
                return a = (o = null != i ? i : {}).restorationIdentifier, r = o.restorationData, n = o.historyChanged, (s = new Turbolinks.Visit(this, e, t)).restorationIdentifier = null != a ? a : Turbolinks.uuid(), s.restorationData = Turbolinks.copyObject(r), s.historyChanged = n, s.referrer = this.location, s
            }, e.prototype.visitCompleted = function(e) {
                return this.notifyApplicationAfterPageLoad(e.getTimingMetrics())
            }, e.prototype.clickEventIsSignificant = function(e) {
                return !(e.defaultPrevented || e.target.isContentEditable || 1 < e.which || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
            }, e.prototype.getVisitableLinkForNode = function(e) {
                return this.nodeIsVisitable(e) ? Turbolinks.closest(e, "a[href]:not([target]):not([download])") : void 0
            }, e.prototype.getVisitableLocationForLink = function(e) {
                var t;
                return t = new Turbolinks.Location(e.getAttribute("href")), this.locationIsVisitable(t) ? t : void 0
            }, e.prototype.getActionForLink = function(e) {
                var t;
                return null != (t = e.getAttribute("data-turbolinks-action")) ? t : "advance"
            }, e.prototype.nodeIsVisitable = function(e) {
                var t;
                return !(t = Turbolinks.closest(e, "[data-turbolinks]")) || "false" !== t.getAttribute("data-turbolinks")
            }, e.prototype.locationIsVisitable = function(e) {
                return e.isPrefixedBy(this.view.getRootLocation()) && e.isHTML()
            }, e.prototype.getCurrentRestorationData = function() {
                return this.getRestorationDataForIdentifier(this.restorationIdentifier)
            }, e.prototype.getRestorationDataForIdentifier = function(e) {
                var t;
                return null != (t = this.restorationData)[e] ? t[e] : t[e] = {}
            }, e
        }()
    }.call(this),
    function() {
        var e, t, i;
        Turbolinks.start = function() {
            return t() ? (null == Turbolinks.controller && (Turbolinks.controller = e()), Turbolinks.controller.start()) : void 0
        }, t = function() {
            return null == window.Turbolinks && (window.Turbolinks = Turbolinks), i()
        }, e = function() {
            var e;
            return (e = new Turbolinks.Controller).adapter = new Turbolinks.BrowserAdapter(e), e
        }, (i = function() {
            return window.Turbolinks === Turbolinks
        })() && Turbolinks.start()
    }.call(this),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
    }(function(a, t) {
        function s(e, t, i, n) {
            return !(e.selector != t.selector || e.context != t.context || i && i.$lqguid != t.fn.$lqguid || n && n.$lqguid != t.fn2.$lqguid)
        }
        a.extend(a.fn, {
            livequery: function(i, n) {
                var o, r = this;
                return a.each(l.queries, function(e, t) {
                    if (s(r, t, i, n)) return (o = t) && !1
                }), (o = o || new l(r.selector, r.context, i, n)).stopped = !1, o.run(), r
            },
            expire: function(i, n) {
                var o = this;
                return a.each(l.queries, function(e, t) {
                    s(o, t, i, n) && !o.stopped && l.stop(t.id)
                }), o
            }
        });
        var l = a.livequery = function(e, t, i, n) {
            var o = this;
            return o.selector = e, o.context = t, o.fn = i, o.fn2 = n, o.elements = a([]), o.stopped = !1, o.id = l.queries.push(o) - 1, i.$lqguid = i.$lqguid || l.guid++, n && (n.$lqguid = n.$lqguid || l.guid++), o
        };
        l.prototype = {
            stop: function() {
                var e = this;
                e.stopped || (e.fn2 && e.elements.each(e.fn2), e.elements = a([]), e.stopped = !0)
            },
            run: function() {
                var e = this;
                if (!e.stopped) {
                    var t = e.elements,
                        i = a(e.selector, e.context),
                        n = i.not(t),
                        o = t.not(i);
                    e.elements = i, n.each(e.fn), e.fn2 && o.each(e.fn2)
                }
            }
        }, a.extend(l, {
            guid: 0,
            queries: [],
            queue: [],
            running: !1,
            timeout: null,
            registered: [],
            checkQueue: function() {
                if (l.running && l.queue.length)
                    for (var e = l.queue.length; e--;) l.queries[l.queue.shift()].run()
            },
            pause: function() {
                l.running = !1
            },
            play: function() {
                l.running = !0, l.run()
            },
            registerPlugin: function() {
                a.each(arguments, function(e, t) {
                    if (a.fn[t] && !(0 < a.inArray(t, l.registered))) {
                        var i = a.fn[t];
                        a.fn[t] = function() {
                            var e = i.apply(this, arguments);
                            return l.run(), e
                        }, l.registered.push(t)
                    }
                })
            },
            run: function(e) {
                e !== t ? a.inArray(e, l.queue) < 0 && l.queue.push(e) : a.each(l.queries, function(e) {
                    a.inArray(e, l.queue) < 0 && l.queue.push(e)
                }), l.timeout && clearTimeout(l.timeout), l.timeout = setTimeout(l.checkQueue, 20)
            },
            stop: function(e) {
                e !== t ? l.queries[e].stop() : a.each(l.queries, l.prototype.stop)
            }
        }), l.registerPlugin("append", "prepend", "after", "before", "wrap", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "empty", "remove", "html", "prop", "removeProp"), a(function() {
            l.play()
        })
    }),
    function() {
        window.GD || (window.GD = {}), GD.isRetina = function() {
            return 1 < window.devicePixelRatio
        }, GD.isIE = function() {
            return "ie" === Detectizr.browser.name
        }, GD.isFirefox = function() {
            return "firefox" === Detectizr.browser.name
        }, GD.isMac = function() {
            return /Mac/i.test(navigator.userAgent)
        }, GD.isAndroidDevice = function() {
            return 0 < navigator.userAgent.indexOf("Android")
        }, GD.isOpenInWeiXin = function() {
            return 0 < navigator.userAgent.indexOf("MicroMessenger") && navigator.userAgent.indexOf("WindowsWechat") < 0
        }, GD.isLowVersionIE = function() {
            return "ie" === Detectizr.browser.name && parseInt(Detectizr.browser.version, 10) < 10
        }
    }.call(this);

if (String.locale = "undefined" != typeof I18n ? I18n.locale : "zh-CN", function() {
        GD.transformAttachment = function() {
            var e;
            if (e = ".fields .field-attachment-field", GD.isOpenInWeiXin() && $(e).length) return $(e + " .attachment-field > .jquery-file-upload-file-input").removeAttr("accept")
        }
    }.call(this), function() {
        var n, t;
        n = function() {
            function e(e) {
                this.viewDom = $(e)
            }
            return e.prototype.isSelected = function() {
                return this.checkBoxInput().is(":checked")
            }, e.prototype.apiCode = function() {
                return this.viewDom.data("api-code")
            }, e.prototype.setRank = function(e) {
                return this._updateRank(e), this._toggleActive()
            }, e.prototype.unSetRank = function() {
                return this.checkBoxInput().val(""), this.viewDom.find(".rank").find(".text").text(""), this._toggleActive()
            }, e.prototype._toggleActive = function() {
                return this.viewDom.find(".rank").toggleClass("active", this.isSelected())
            }, e.prototype._updateRank = function(e) {
                return this.checkBoxInput().val(e), this.viewDom.find(".rank").find(".text").text(e)
            }, e.prototype.rank = function() {
                return this.checkBoxInput().data("rank")
            }, e.prototype.dom = function() {
                return this.viewDom
            }, e.prototype.checkBoxInput = function() {
                return this.viewDom.find("input[type=checkbox]")
            }, e.prototype.toggleCheckInput = function() {
                return this.checkBoxInput().prop("checked", !this.checkBoxInput().prop("checked"))
            }, e.prototype.index = function() {
                return parseInt(this.viewDom.data("index"))
            }, e.prototype.updateIndex = function(e) {
                return this.viewDom.data("index", e), this.viewDom.attr("data-index", e)
            }, e.prototype.moveTo = function(e) {
                return this.viewDom.css("left", e + "px")
            }, e
        }(), t = function() {
            function e(e) {
                var i;
                this.dom = e, this.allChoiceViews = _.map(this.dom.find(".sort-choice"), (i = this, function(e) {
                    var t;
                    return (t = new n(e)).checkBoxInput().on("update.rank", function() {
                        return i._resortView()
                    }), t
                })), this._resortView()
            }
            return e.prototype._resortView = function() {
                return this._assignSortChoiceViews(), this._assignUnSortChoiceViews(), this._renderView(), _.each(this._withSortedChoiceViews(), (t = this, function(e) {
                    return t.dom.append(e.dom())
                }));
                var t
            }, e.prototype._resortMobileWebPageView = function() {
                var n, o, r;
                return this.dom.empty(), _.each(this.sortedChoiceViews, (o = this, function(e, t) {
                    var i;
                    return i = _.min([t + 1, o.allChoiceViews.length]), e.setRank(i), e.updateIndex(i), o.dom.append(e.dom())
                })), n = this.sortedChoiceViews.length, _.each(this.unSortedChoiceViews, (r = this, function(e, t) {
                    var i;
                    return i = t + n + 1, e.unSetRank(), e.updateIndex(i), r.dom.append(e.dom())
                }))
            }, e.prototype._assignSortChoiceViews = function() {
                return this.sortedChoiceViews = _.select(this.allChoiceViews, function(e) {
                    return e.isSelected()
                }), this.sortedChoiceViews = _.sortBy(this.sortedChoiceViews, function(e) {
                    return e.rank()
                })
            }, e.prototype._assignUnSortChoiceViews = function() {
                return this.unSortedChoiceViews = _.reject(this.allChoiceViews, function(e) {
                    return e.isSelected()
                })
            }, e.prototype.resort = function(e) {
                if (!this.dom.hasClass("sorting") && e.length) return this.dom.hasClass("sort-field-on-webpage") ? this._resortOnMobileWebPage(e) : this._resortOnPcPage(e)
            }, e.prototype._resortOnMobileWebPage = function(e) {
                var t, i;
                if (t = $(e).data("api-code"), i = this._getSortFieldChoiceViewByApiCode(t)) return i.toggleCheckInput(), this.currentChoiceView = i, this.currentChoicViewIndex = this.currentChoiceView.index(), i.isSelected() ? (this.sortedChoiceViews = this.sortedChoiceViews.concat(i), this.unSortedChoiceViews = this._removeChoiceView(i, this.unSortedChoiceViews)) : (this.sortedChoiceViews = this._removeChoiceView(i, this.sortedChoiceViews), this.unSortedChoiceViews.unshift(i)), this._resortMobileWebPageView()
            }, e.prototype._resortOnPcPage = function(e) {
                var t, i, n;
                if (t = $(e).data("api-code"), i = this._getSortFieldChoiceViewByApiCode(t)) return i.toggleCheckInput(), this.dom.addClass("sorting"), this.currentChoiceView = i, this.currentChoicViewIndex = this.currentChoiceView.index(), i.isSelected() ? (this.sortedChoiceViews = this.sortedChoiceViews.concat(i), this.unSortedChoiceViews = this._removeChoiceView(i, this.unSortedChoiceViews), this._moveTo(this.currentChoicViewIndex, this.sortedChoiceViews.length, i)) : (this._moveTo(this.currentChoicViewIndex, this.sortedChoiceViews.length, i), this.sortedChoiceViews = this._removeChoiceView(i, this.sortedChoiceViews), this.unSortedChoiceViews.unshift(i)), this._renderView(), setTimeout((n = this, function() {
                    return n.dom.removeClass("sorting")
                }), 300)
            }, e.prototype._removeChoiceView = function(t, e) {
                return _.reject(e, function(e) {
                    return e.apiCode() === t.apiCode()
                })
            }, e.prototype._getSortFieldChoiceViewByApiCode = function(t) {
                var e;
                return e = this.sortedChoiceViews.concat(this.unSortedChoiceViews), _.find(e, function(e) {
                    return e.apiCode() === t
                })
            }, e.prototype._withSortedChoiceViews = function() {
                return this.sortedChoiceViews.concat(this.unSortedChoiceViews)
            }, e.prototype._renderView = function() {
                var n, o;
                return _.each(this.sortedChoiceViews, (o = this, function(e, t) {
                    var i;
                    return i = _.min([t + 1, o.allChoiceViews.length]), e.setRank(i), e.updateIndex(i)
                })), n = this.sortedChoiceViews.length, _.each(this.unSortedChoiceViews, function(e, t) {
                    var i;
                    return i = t + n + 1, e.unSetRank(), e.updateIndex(i)
                })
            }, e.prototype._moveTo = function(e, t, i) {
                var n, o, r, a, s;
                if (!(e === t || e > this.allChoiceViews.lengh || t > this.allChoiceViews.length)) return Math.abs(e - t), t < e ? (o = this._distanceChoiceViews(e, t), r = this._distanceViewsHeight(o), n = this._getPrevTopVaule(i), i.moveTo(n - r), _.each(o, (s = this, function(e) {
                    return e.moveTo(s._getPrevTopVaule(e) + i.dom().outerWidth(!0))
                }))) : (o = this._distanceChoiceViews(e, t, !1), r = this._distanceViewsHeight(o), n = this._getPrevTopVaule(i), i.moveTo(n + r), _.each(o, (a = this, function(e) {
                    return e.moveTo(a._getPrevTopVaule(e) - i.dom().outerWidth(!0))
                })))
            }, e.prototype._distanceChoiceViews = function(t, i, e) {
                return null == e && (e = !0), e ? _.select(this.allChoiceViews, function(e) {
                    return e.index() < t && e.index() >= i
                }) : _.select(this.allChoiceViews, function(e) {
                    return e.index() > t && e.index() <= i
                })
            }, e.prototype._distanceViewsHeight = function(e) {
                return _.reduce(e, function(e, t) {
                    return e + t.dom().outerWidth(!0)
                }, 0)
            }, e.prototype._getPrevTopVaule = function(e) {
                var t, i;
                return parseInt(null != (t = e.dom().css("left")) && null != (i = t.split("px")) ? i[0] : void 0)
            }, e
        }(), $(document).on("turbolinks:load", function() {
            console.log(1)
            return $(".sort-choices").livequery(function() {
                console.log(2);
                var e;
                return e = new t($(this)), $(this).on("click", ".sort-choice", function() {
                    return e.resort($(this))
                })
            })
        })
    }.call(this), !pv) var pv = {
    map: function(e, i) {
        var n = {};
        return i ? e.map(function(e, t) {
            return n.index = t, i.call(n, e)
        }) : e.slice()
    }
};


// console.log($("body").livequery());

