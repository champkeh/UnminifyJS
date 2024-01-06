import j, {ASTPath, } from "jscodeshift";


export function pathInStructure<Type>(path: ASTPath, structure: Type | Type[]) {
    if (!Array.isArray(structure)) {
        structure = [structure]
    }
    for (const s of structure) {
        if (j(path).closest(s as any).length > 0) {
            return true
        }
    }
    return false
}

export function pathInTopLevel(path: ASTPath) {
    return !pathInStructure(path, [j.ForStatement, j.IfStatement])
}
