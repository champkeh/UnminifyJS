import {StringLiteral, Transform} from "jscodeshift"
import {isValidIdentifier} from "../utils/node-helper";
import {formatCode} from "../utils/formatter";

const transformer: Transform = function unBracketNotation(file, api) {
    const {j} = api
    const root = j(file.source)

    root.find(j.MemberExpression, node => {
        return node.property.type === 'StringLiteral' && isValidIdentifier((node.property as StringLiteral).value)
    })
    root.find(j.MemberExpression, {property: {type: 'StringLiteral'}})
        .filter(path => isValidIdentifier((path.node.property as StringLiteral).value))
        .forEach(path => {
            path.node.computed = false
            path.node.property = j.identifier((path.node.property as StringLiteral).value)
        })

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
