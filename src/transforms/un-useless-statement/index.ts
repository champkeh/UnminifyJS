import {Transform} from "jscodeshift"
import { formatCode } from "@/utils/formatter"

const transformer: Transform = function unUselessStatement(file, api) {
    const {j} = api
    const root = j(file.source)

    root
        .find(j.ExpressionStatement, {expression: {type: 'MemberExpression'}})
        .remove()

    root
        .find(j.ExpressionStatement, {expression: {type: 'NewExpression'}})
        .remove()

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
