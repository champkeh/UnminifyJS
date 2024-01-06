Element.prototype.setText = function (t) {
    !function (t, e) {
        if (e instanceof DocumentFragment || e instanceof Node) return t.empty(), void t.appendChild(e);
        String.isString(e) || (e = String(e));
        var n = t.nodeType;
        1 !== n && 9 !== n && 11 !== n || (t.textContent = e)
    }(this, t)

    obj["prop"]
    obj["var"]
    obj['a-b']
}
