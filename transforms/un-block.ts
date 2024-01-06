import {Transform} from "jscodeshift"

const transformer: Transform = (file, api) => {
    const {j} = api
    const root = j(file.source)

    root.find(j.IfStatement)
        .filter(path =>
            (path.node.consequent !== null && path.node.consequent.type !== 'BlockStatement') ||
            (path.node.alternate !== null && path.node.alternate?.type !== 'BlockStatement')
        )
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

    root.find(j.ForStatement)
        .filter(path => path.node.body.type !== 'BlockStatement')
        .replaceWith(path => {
            const node = path.node
            return j.forStatement(node.init, node.test, node.update, j.blockStatement([node.body]))
        })

    return root.toSource()
}

export default transformer
