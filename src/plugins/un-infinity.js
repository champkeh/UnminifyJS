const t = require("@babel/types");


module.exports = function () {
    return {
        visitor: {
            BinaryExpression(path) {
                if (path.node.operator === '/' && t.isNumericLiteral(path.node.right) && path.node.right.value === 0) {
                    if (t.isNumericLiteral(path.node.left) && path.node.left.value === 1) {
                        path.replaceWith(t.identifier('Infinity'));
                    } else if (t.isUnaryExpression(path.node.left) && path.node.left.operator === '-' && t.isNumericLiteral(path.node.left.argument) && path.node.left.argument.value === 1) {
                        path.replaceWith(t.unaryExpression('-', t.identifier('Infinity')));
                    }
                }
            }
        }
    }
}
