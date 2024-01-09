import {Transform} from "jscodeshift"
import {formatCode} from "../utils/formatter";
import {addComment, renameInPath, resolveNewName} from "../utils/node-helper";

const transformer: Transform = function smartRename(file, api) {
    const {j} = api
    const root = j(file.source)

    root
        .find(j.VariableDeclarator, {id: {type: 'ObjectPattern'}})
        .forEach(path => {
            const properties = path.get('id', 'properties').value

            for (const property of properties) {
                if (property.value.type !== 'Identifier' || property.key.type !== 'Identifier') {
                    continue
                }
                const oldName = property.value.name
                const keyName = property.key.name
                const newName = resolveNewName(oldName, keyName, path)

                renameInPath(oldName, newName, path)
                addComment(property.value, `oldName: ${oldName}`)
            }
        })

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
