const types = require("@babel/types")


module.exports = function () {
    return {
        visitor: {
            UnaryExpression(path, state) {
                if (path.node.operator === '!' && types.isNumericLiteral(path.node.argument)) {
                    path.replaceWith(types.booleanLiteral(!Boolean(path.node.argument.value)))
                }
            }
        }
    }
}
