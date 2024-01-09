import {NumericLiteral, Transform} from "jscodeshift"
import {formatCode} from "../utils/formatter";


const transformer: Transform = function unBoolean(file, api) {
    const {j} = api
    const root = j(file.source)

    // !0 => true, !1 => false
    const c = root.find(j.UnaryExpression, {
        operator: '!',
        prefix: true,
        argument: {
            type: 'NumericLiteral',
        },
    })
    c.forEach(path => {
        const v = (path.get('argument').value as NumericLiteral).value
        const is01 = v === 0 || v === 1
        if (!is01) {
            return
        }
        path.replace(j.booleanLiteral(!v))
    })

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
