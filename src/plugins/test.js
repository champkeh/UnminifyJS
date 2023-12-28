const t = require("@babel/types")


const calleeName = ['info', 'log', 'debug', 'error'].map(item => `console.${item}`)

module.exports = function () {
    return {
        visitor: {
            CallExpression(path) {
                debugger
                const callee = path.get('callee').toString()
                if (calleeName.includes(callee)) {
                    const {line, column} = path.node.loc.start
                    path.node.arguments.unshift(t.stringLiteral(`filename: (${line}, ${column})`))
                }
            },
        }
    }
}
