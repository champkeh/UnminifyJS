import {Transform} from "jscodeshift"

const transform: Transform = (file, api, options) => {
    const {j} = api
    const {source} = file
    const root = j(source)

    // void 0 => undefined
    const col = root.find(j.UnaryExpression, {
        operator: 'void',
        prefix: true,
        argument: {
            value: 0
        }
    }).replaceWith(j.identifier("undefined"))

    return root.toSource()
}

export default transform
