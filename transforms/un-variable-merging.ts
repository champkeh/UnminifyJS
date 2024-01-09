import j, {Identifier, Transform, VariableDeclaration, VariableDeclarator} from "jscodeshift"
import {formatCode} from "../utils/formatter";

const transformer: Transform = function unVariableMerging(file, api) {
    const {j} = api
    const root = j(file.source)

    // var a = 1, b = true, c = func(d);
    root.find(j.VariableDeclaration, node => node.declarations.length > 1)
        .filter(path => path.name !== 'init')
        .replaceWith(path => {
            const kind = path.node.kind
            return path.node.declarations.map(declarator => j.variableDeclaration(kind, [declarator]))
        })

    // for (var i = 0, j = 0, k = 0; j < 10; k++) {}
    root
        .find(j.ForStatement, node => {
            return node.init !== null &&
                node.init.type === 'VariableDeclaration' &&
                node.init.declarations.length > 1
        })
        .forEach(path => {
            const variableDeclaration: VariableDeclaration = path.node.init as VariableDeclaration
            const kind = variableDeclaration.kind

            const testIdentifiers = path.node.test ? j(path.node.test).find(j.Identifier).nodes().map(node => node.name) : []
            const updateIdentifiers = path.node.update ? j(path.node.update).find(j.Identifier).nodes().map(node => node.name) : []

            const hoistDeclarations: VariableDeclarator[] = []
            variableDeclaration.declarations
                .filter(node => node.type === 'VariableDeclarator')
                .forEach(declarator => {
                    const name = ((declarator as VariableDeclarator).id as Identifier).name
                    if (!testIdentifiers.includes(name) && !updateIdentifiers.includes(name)) {
                        j(path).insertBefore(j.variableDeclaration(kind, [declarator]))
                        hoistDeclarations.push(declarator as VariableDeclarator)
                    }
                })
            variableDeclaration.declarations = variableDeclaration.declarations.filter(declarator => !hoistDeclarations.includes(declarator as VariableDeclarator))
        })

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
