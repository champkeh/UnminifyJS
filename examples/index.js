let j = require('jscodeshift')
const {SequenceExpression} = require("jscodeshift");

// 需要使用 babylon 解析器
j = j.withParser('babylon')


const source = `
for (var t, e, n = this.length; 0 !== n;) e = Math.floor(Math.random() * n), t = this[n -= 1], this[n] = this[e], this[e] = t;
`

const root = j(source)

function handle(root) {
    root.find(j.ExpressionStatement)
        .filter(path => path.node.expression.type === 'SequenceExpression')
        .replaceWith(path => {
            console.log(path.name)

            const sequenceExpression = path.node.expression
            const expressions = sequenceExpression.expressions

            return expressions.map(expr => j.expressionStatement(expr))
        })
}

handle(root)


console.log(root.toSource())
