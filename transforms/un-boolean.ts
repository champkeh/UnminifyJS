import {Transform} from "jscodeshift"


const transformer: Transform = (file, api) => {
    const {j} = api
    const root = j(file.source)

    // !0 => true
    root.find(j.UnaryExpression, {
        operator: '!',
        prefix: true,
        argument: {value: 0},
    }).replaceWith(j.booleanLiteral(true))

    // !1 => false
    root.find(j.UnaryExpression, {
        operator: '!',
        prefix: true,
        argument: {value: 1},
    }).replaceWith(j.booleanLiteral(false))

    return root.toSource()
}

export default transformer
