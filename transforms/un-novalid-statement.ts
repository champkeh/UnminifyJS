import {Transform} from "jscodeshift"

const transformer: Transform = (file, api) => {
    const {j} = api
    const root = j(file.source)

    root
        .find(j.ExpressionStatement, {expression: {type: 'MemberExpression'}})
        .remove()

    root
        .find(j.ExpressionStatement, {expression: {type: 'NewExpression'}})
        .remove()

    return root.toSource()
}

export default transformer
