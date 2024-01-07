let j = require('jscodeshift')
const {UnaryExpression} = require("jscodeshift");

// 需要使用 babylon 解析器
j = j.withParser('babylon')


const source = `
a = b = c = 1
`

const root = j(source)


function handle(root) {
    root.find(j.AssignmentExpression, node => {
        console.log(j(node).paths()[0].name)
        // return j(node).paths()[0].name === 'expression'
    })
        .filter(path => path.name === 'expression')
        .forEach(path => {
            let node = path.node
            const names = []
            while (node.operator === '=' && node.left.type === 'Identifier') {
                names.push(node.left.name)

                if (node.right.type === 'AssignmentExpression') {
                    node = node.right
                } else {
                    if (j(node.right).isOfType(j.Literal) || j(node.right).isOfType(j.ObjectExpression)) {
                        const statements = names.map(name => j.template.statement`${name} = ${node.right};`)
                        j(path.parent).replaceWith(statements)
                    }
                    break
                }
            }
        })
}

handle(root)


console.log(root.toSource())
