import j, {ASTPath, BinaryExpression,} from "jscodeshift";


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

export function isValidIdentifier(name: string) {
    return /^[0-9a-zA-Z$]+$/.test(name)
}

export function swipeBinaryExpression(node: BinaryExpression) {
    let tmp = node.left
    node.left = node.right
    node.right = tmp
}
