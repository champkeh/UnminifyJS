import j, {ArrayExpression, ASTPath, BinaryExpression, Node, ObjectExpression, ObjectProperty} from "jscodeshift";


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

/**
 * 判断节点是否是常量节点，用于链式赋值的分解
 * 常量节点包括：
 *   - 所有的字面量，Literal
 *   - 标识符，Identifier
 *   - 仅包含字面量和标识符的数组
 *   - 仅包含字面量和标识符的对象
 * @param node
 */
export function nodeIsLiteral(node: Node | null): boolean {
    if (node === null) {
        // 数组中可能包含 null 元素
        return true
    }
    const {type} = node
    if (type.endsWith('Literal') || type === 'Identifier') {
        return true
    } else if (type === 'ArrayExpression') {
        return (node as ArrayExpression).elements.every(v => nodeIsLiteral(v))
    } else if (type === 'ObjectExpression') {
        return (node as ObjectExpression).properties.every(prop =>
            prop.type === 'ObjectProperty' &&
            !prop.computed &&
            nodeIsLiteral(prop.value)
        )
    } else {
        return false
    }
}
