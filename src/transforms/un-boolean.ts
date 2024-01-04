import {Transform} from "jscodeshift"


const transform: Transform = (file, api, options) => {
    const {j} = api
    const {source} = file
    const root = j(source)

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

export default transform
