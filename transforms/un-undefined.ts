import {Transform} from "jscodeshift"

const transformer: Transform = (file, api) => {
    const {j} = api
    const root = j(file.source)

    // void 0 => undefined
    root.find(j.UnaryExpression, {
        operator: 'void',
        prefix: true,
        argument: {
            value: 0
        }
    }).replaceWith(j.identifier("undefined"))

    return root.toSource()
}

export default transformer
