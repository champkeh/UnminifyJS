import {Transform} from "jscodeshift"
import {swipeBinaryExpression} from "../utils/node-helper";

const transformer: Transform = (file, api) => {
    const {j} = api
    const root = j(file.source)

    root.find(j.BinaryExpression, {right: {type: 'Identifier'}})
        .filter(path => j(path.node.left).isOfType(j.Literal))
        .forEach(path => {
            const node = path.node
            const operator = node.operator

            switch (operator) {
                case '==':
                case '!=':
                case '===':
                case '!==':
                    swipeBinaryExpression(node)
                    break
                case '>':
                    swipeBinaryExpression(node)
                    node.operator = '<'
                    break
                case '>=':
                    swipeBinaryExpression(node)
                    node.operator = '<='
                    break
                case '<':
                    swipeBinaryExpression(node)
                    node.operator = '>'
                    break
                case '<=':
                    swipeBinaryExpression(node)
                    node.operator = '>='
                    break
            }
        })

    return root.toSource()
}

export default transformer
