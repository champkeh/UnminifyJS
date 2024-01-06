import {Transform} from "jscodeshift"

const transformer: Transform = (file, api) => {
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

    return root.toSource()
}

export default transformer
