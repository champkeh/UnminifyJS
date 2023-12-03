const types = require("@babel/types")

function unBooleanPlugin(api, options, dirname) {
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

module.exports = unBooleanPlugin
