import {Transform} from "jscodeshift"
import {swipeBinaryExpression} from "../utils/node-helper";
import {formatCode} from "../utils/formatter";

const transformer: Transform = function unFlipComparisons(file, api) {
    const {j} = api
    const root = j(file.source)

    root.find(j.BinaryExpression)
        .filter(path => {
            const leftNode = path.value.left
            return j.Literal.check(leftNode) ||
                (
                    j.UnaryExpression.check(leftNode) &&
                    leftNode.operator === '-' &&
                    j.Literal.check(leftNode.argument)
                )
        })
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

    return formatCode(root.toSource())

}

export default transformer

export const parser = "babylon"
