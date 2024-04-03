function M(a, e) {
    var t
    var M
    var r
    var h

    var o = {
        label: 0,
        sent: function () {
            if (1 & r[0]) {
                throw r[1]
            }
            return r[1]
        },
        trys: [],
        ops: [],
    }(
        (h = {
            next: i(0),
            throw: i(1),
            return: i(2),
        }),
    )

    typeof Symbol == "function" &&
        (h[Symbol.iterator] = function () {
            return this
        })

    return h

    function i(i) {
        return function (l) {
            return (function (i) {
                if (t) {
                    throw new TypeError("Generator is already executing.")
                }

                while ((h && ((h = 0), i[0] && (o = 0)), o)) {
                    try {
                        t = 1(
                            (r =
                                2 & i[0]
                                    ? M.return
                                    : i[0]
                                      ? M.throw || (r && r.call(M), 0)
                                      : M.next),
                        )

                        r = M.return
                        r = r.call(M, i[1])
                        if (M && r && !r.done) {
                            return r
                        }


                        M = 0
                        r && (i = [2 & i[0], r.value])
                        switch (i[0]) {
                            case 0:
                            case 1:
                                r = i
                                break
                            case 4:
                                o.label++
                                return {value: i[1], done: false}
                            case 5:
                                o.label++
                                M = i[1]
                                i = [0]
                                continue
                            case 7:
                                i = o.ops.pop()
                                o.trys.pop()
                                continue
                            default:
                                r = o.trys
                                r = r.length > 0 && r[r.length - 1]
                                if (!(r, r || (i[0] !== 6 && i[0] !== 2))) {
                                    o = 0
                                    continue
                                }
                                if (
                                    i[0] === 3 &&
                                    (!r || (i[1] > r[0] && i[1] < r[3]))
                                ) {
                                    o.label = i[1]
                                    break
                                }
                                if (i[0] === 6 && o.label < r[1]) {
                                    o.label = r[1]
                                    r = i
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2]
                                    o.ops.push(i)
                                    break
                                }
                                r[2] && o.ops.pop()
                                o.trys.pop()
                                continue
                        }
                        i = e.call(a, o)
                    } catch (err /* oldName: a */) {
                        i = [6, err]
                        M = 0
                    } finally {
                        r = 0
                        t = 0
                    }
                }

                if (5 & i[0]) {
                    throw i[1]
                }
                return {value: i[0] ? i[1] : undefined, done: true}
            })([i, l])
        }
    }
}
