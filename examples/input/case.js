function M(a, e) {
    var t, M, r, h, o = {
        label: 0,
        sent: function () {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return h = {
        next: i(0),
        throw: i(1),
        return: i(2)
    }, "function" == typeof Symbol && (h[Symbol.iterator] = function () {
        return this
    }), h;

    function i(i) {
        return function (l) {
            return function (i) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; h && (h = 0, i[0] && (o = 0)), o;) try {
                    if (t = 1, M && (r = 2 & i[0] ? M.return : i[0] ? M.throw || ((r = M.return) && r.call(M), 0) : M.next) && !(r = r.call(M, i[1])).done) return r;

                    switch (M = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return o.label++, {value: i[1], done: !1};
                        case 5:
                            o.label++, M = i[1], i = [0];
                            continue;
                        case 7:
                            i = o.ops.pop(), o.trys.pop();
                            continue;
                        default:
                            if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                o = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                o.label = i[1];
                                break
                            }
                            if (6 === i[0] && o.label < r[1]) {
                                o.label = r[1], r = i;
                                break
                            }
                            if (r && o.label < r[2]) {
                                o.label = r[2], o.ops.push(i);
                                break
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue
                    }
                    i = e.call(a, o)
                } catch (a) {
                    i = [6, a], M = 0
                } finally {
                    t = r = 0
                }
                if (5 & i[0]) throw i[1];
                return {value: i[0] ? i[1] : void 0, done: !0}
            }([i, l])
        }
    }
}
