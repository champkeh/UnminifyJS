import {Transform} from "jscodeshift"
import {formatCode} from "../utils/formatter"

const transformer: Transform = function demo(file, api) {
    const {j} = api
    const root = j(file.source)

    j.file(
        j.program([
            j.tryStatement(
                j.blockStatement([]),
                j.catchClause(
                    j.identifier('e'),
                    null,
                    j.blockStatement([
                        j.expressionStatement(j.unaryExpression('void', j.identifier('x')))
                    ])
                ))
        ]))

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
