const types = require("@babel/types");

function unUndefinedPlugin(api, options, dirname) {
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

module.exports = unUndefinedPlugin
