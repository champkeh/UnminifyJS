import {Transform, UnaryExpression} from "jscodeshift"

const transformer: Transform = (file, api) => {
    const {j} = api
    const root = j(file.source)

    root
        .find(j.ReturnStatement, {
            argument: {
                type: 'UnaryExpression',
                operator: 'void',
                prefix: true
            }
        })
        .replaceWith(path => {
            const argument = (path.node.argument as UnaryExpression).argument
            if (argument && argument.type === 'CallExpression') {
                return j.expressionStatement(argument)
            }
        })

    return root.toSource()
}

export default transformer
