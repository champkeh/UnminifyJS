import {Transform, UnaryExpression} from "jscodeshift"
import {formatCode} from "@/utils/formatter";

const transformer: Transform = function unReturn(file, api) {
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

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
