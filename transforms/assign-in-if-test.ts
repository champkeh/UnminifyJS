import {Transform} from "jscodeshift"
import {formatCode} from "../utils/formatter"

// 要求在 un-conditionals 之后
const transformer: Transform = function assignInIfTest(file, api) {
    const {j} = api
    const root = j(file.source)

    root
        .find(j.IfStatement)
        .forEach(path => {
            j(path.get('test'))
                .find(j.AssignmentExpression)
                .forEach(p => {
                    // 把赋值语句插入到 if 语句之前
                    const assignStatement = j.expressionStatement(p.value)
                    j(path).insertBefore(assignStatement)

                    // 把该赋值语句替换为左边的标识符
                    p.replace(p.value.left)
                })
        })

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
