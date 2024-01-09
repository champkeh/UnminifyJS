import j, {StringLiteral, Transform} from "jscodeshift"
import {isValidIdentifier} from "../utils/node-helper";
import {formatCode} from "../utils/formatter";

const transformer: Transform = function unBracketNotation(file, api) {
    const {j} = api
    const root = j(file.source)

    root
        .find(j.MemberExpression, {property: {type: 'StringLiteral'}})
        .forEach(path => {
            const memberExpr = path.value
            const propValue = (memberExpr.property as StringLiteral).value

            if (/^\d+$/.test(propValue)) {
                // 纯数字
                memberExpr.property = j.numericLiteral(Number(propValue))
            } else if (/^[^0-9][0-9a-zA-Z$]*$/.test(propValue)) {
                // 合法标识符
                memberExpr.property = j.identifier(propValue)
                memberExpr.computed = false
            } else {
                // 保持不动
            }
        })

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
