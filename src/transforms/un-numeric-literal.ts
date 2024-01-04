import {Transform} from "jscodeshift"

const transform: Transform = (file, api, options) => {
    const {j} = api
    const {source} = file
    const root = j(source)

    // 1e3 => 1000 /* 1e3 */
    // 0x10 => 16 /* 0x10 */

    root.find(j.NumericLiteral).filter(path => {
        if (path.node.extra) {
            const raw = path.node.extra.raw
            return raw.includes("e") || (raw.startsWith('0') && raw.length > 1)
        }
        return false
    }).forEach(path => {
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

    return root.toSource()
}

export default transform
