const t = require("@babel/types");


module.exports = function () {
    return {
        visitor: {
            NumericLiteral(path) {
                const value = path.node.value;

                if (!isNaN(value) && path.node.extra.raw !== String(value)) {
                    path.replaceWith(t.addComment(t.numericLiteral(value), 'trailing', ` ${path.node.extra.raw} `));
                    path.skip()
                }
            }
        }
    }
}
