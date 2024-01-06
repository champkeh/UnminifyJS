import {Transform} from "jscodeshift"

const transformer: Transform = (file, api) => {
    const {j} = api
    const root = j(file.source)

    // 只会处理字面量的赋值
    root.find(j.AssignmentExpression)
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

    return root.toSource()
}

export default transformer
