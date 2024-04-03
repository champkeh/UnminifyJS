import {Transform} from "jscodeshift"
import {formatCode} from "@/utils/formatter";

const transformer: Transform = function unUndefined(file, api) {
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

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
