import {Transform} from "jscodeshift"
import {formatCode} from "@/utils/formatter";

const transformer: Transform = function unNumericLiteral(file, api) {
    const {j} = api
    const root = j(file.source)

    // 1e3 => 1000 /* 1e3 */
    // 0x10 => 16 /* 0x10 */

    root
        .find(j.NumericLiteral, node => {
            if (node.extra) {
                const raw = node.extra.raw
                return raw.includes("e") || (raw.startsWith('0') && raw.length > 1)
            }
            return false
        })
        .forEach(path => {
            let raw = ''
            if (path.node.extra) {
                raw = path.node.extra.raw
            } else {
                raw = path.node.value.toString()
            }
            path.node.comments = path.node.comments || []
            path.node.comments.push(j.commentBlock(` ${raw} `, false, true))

            if (path.node.extra) {
                path.node.extra.raw = path.node.value.toString()
            }
        })

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
