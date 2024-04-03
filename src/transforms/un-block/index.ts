import {Transform} from "jscodeshift"
import {formatCode} from "@/utils/formatter";

const transformer: Transform = function unBlock(file, api) {
    const {j} = api
    const root = j(file.source)

    root.find(j.IfStatement, node =>
        (node.consequent !== null && node.consequent.type !== 'BlockStatement') ||
        (node.alternate !== null && node.alternate?.type !== 'BlockStatement'))
        .replaceWith(path => {
            const node = path.node
            if (node.consequent && node.consequent.type !== 'BlockStatement') {
                node.consequent = j.blockStatement([node.consequent])
            }
            if (node.alternate && node.alternate.type !== 'BlockStatement') {
                node.alternate = j.blockStatement([node.alternate])
            }
            return j.ifStatement(node.test, node.consequent, node.alternate)
        })

    root.find(j.ForStatement, node => node.body.type !== 'BlockStatement')
        .replaceWith(path => {
            const node = path.node
            return j.forStatement(node.init, node.test, node.update, j.blockStatement([node.body]))
        })

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
