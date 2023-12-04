const types = require("@babel/types")

module.exports = function () {
    return {
        visitor: {
            SequenceExpression(path, state) {
                if (types.isExpressionStatement(path.parent)) {
                    path.parentPath.replaceWithMultiple(path.node.expressions.map(e => types.expressionStatement(e)))
                    path.skip()
                }
            },
        }
    }
}
