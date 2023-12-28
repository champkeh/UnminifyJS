const types = require("@babel/types")

module.exports = function () {
    return {
        visitor: {
            UnaryExpression(path) {
                if (path.node.operator === '!' && types.isNumericLiteral(path.node.argument)) {
                    const value = path.node.argument.value
                    if (value === 0 || value === 1) {
                        path.replaceWith(types.booleanLiteral(!value));
                    }
                }
            }
        }
    }
}
