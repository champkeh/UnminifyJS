import {Transform} from "jscodeshift"
import {formatCode} from "../utils/formatter";

const transformer: Transform = function unWhileLoop(file, api) {
    const {j} = api
    const root = j(file.source)

    root.find(j.ForStatement, {init: null,update: null})
        .replaceWith(path => {
            const node = path.node
            if (node.test === null) {
                return j.whileStatement(j.booleanLiteral(true), node.body)
            } else {
                return j.whileStatement(node.test, node.body)
            }
        })

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
