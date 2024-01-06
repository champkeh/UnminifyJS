import {Transform} from "jscodeshift"

const transformer: Transform = (file, api) => {
    const {j} = api
    const root = j(file.source)

    // 1/0 => Infinity
    root.find(j.BinaryExpression, {
        operator: '/',
        left: {
            value: 1,
        },
        right: {
            value: 0,
        }
    }).replaceWith(j.identifier("Infinity"))

    // -1/0 => -Infinity
    root.find(j.BinaryExpression, {
        operator: '/',
        left: {
            operator: '-',
            prefix: true,
            argument: {
                value: 1
            }
        },
        right: {
            value: 0,
        }
    }).replaceWith(j.unaryExpression("-", j.identifier("Infinity")))

    return root.toSource()
}

export default transformer
