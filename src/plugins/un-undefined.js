const types = require("@babel/types");


module.exports = function () {
    return {
        visitor: {
            UnaryExpression(path, state) {
                if (path.node.operator === 'void' && types.isNumericLiteral(path.node.argument)) {
                    path.replaceWith(types.identifier("undefined"))
                }
            }
        }
    }
}
