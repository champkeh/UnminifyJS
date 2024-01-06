import {StringLiteral, Transform} from "jscodeshift"
import {isValidIdentifier} from "../utils/node-helper";

const transformer: Transform = (file, api) => {
    const {j} = api
    const root = j(file.source)

    root.find(j.MemberExpression, {property: {type: 'StringLiteral'}})
        .filter(path => isValidIdentifier((path.node.property as StringLiteral).value))
        .forEach(path => {
            path.node.computed = false
            path.node.property = j.identifier((path.node.property as StringLiteral).value)
        })

    return root.toSource()
}

export default transformer
