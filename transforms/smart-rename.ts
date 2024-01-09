import j, {ASTPath, Collection, Property, Transform} from "jscodeshift"
import {formatCode} from "../utils/formatter";
import {addComment, renameInPath, resolveNewName} from "../utils/node-helper";

function renameByProperty(properties: Property[], path: ASTPath) {
    for (const property of properties) {
        if (property.value.type !== 'Identifier' || property.key.type !== 'Identifier') {
            continue
        }
        const oldName = property.value.name
        const keyName = property.key.name
        if (oldName.length >= keyName.length) {
            continue
        }

        const newName = resolveNewName(oldName, keyName, path)

        renameInPath(oldName, newName, path)
        addComment(property.value, `oldName: ${oldName}`)
    }
}

/**
 * 重命名 catch 参数
 * @param root
 */
function renameCatchClauseParam(root: Collection<any>) {
    root
        .find(j.CatchClause, {param: {type: 'Identifier'}})
        .forEach(path => {
            const oldName = path.get('param').value.name
            const newName = resolveNewName(oldName, 'err', path)

            renameInPath(oldName, newName, path)
            addComment(path.get('param').value, `oldName: ${oldName}`)
        })
}

const transformer: Transform = function smartRename(file, api) {
    const {j} = api
    const root = j(file.source)

    root
        .find(j.VariableDeclarator, {id: {type: 'ObjectPattern'}})
        .forEach(path => {
            const properties = path.get('id', 'properties').value

            renameByProperty(properties, path)
        })

    root
        .find(j.ObjectExpression)
        .forEach(path => {
            let properties = path.get('properties').value
            properties = properties.filter((p: Property) => j.ObjectProperty.check(p))

            renameByProperty(properties, path)
        })

    renameCatchClauseParam(root)

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
