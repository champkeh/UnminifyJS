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

/**
 * 在节点后面添加注释
 * @param node
 * @param comment
 */
export function addComment(node: Node, comment: string) {
    if (!j.Node.check(node)) {
        throw new Error('node 参数类型不正确')
    }
    if (comment) {
        node.comments = node.comments || []
        node.comments.push(j.commentBlock(` ${comment} `, false, true))
    }
}

/**
 * 在指定作用域(path)中重命名变量
 * @param oldName
 * @param newName
 * @param path
 */
export function renameInPath(oldName: string, newName: string, path: ASTPath) {
    const rootScope = path.scope
    const rootPath = rootScope.path

    j(rootPath)
        .find(j.Identifier, {name: oldName})
        .filter(path => {
            const parent = path.parent.node;

            if (
                j.MemberExpression.check(parent) &&
                parent.property === path.node &&
                !parent.computed
            ) {
                // obj.oldName
                return false;
            }

            if (
                j.Property.check(parent) &&
                parent.key === path.node &&
                !parent.computed
            ) {
                // { oldName: 3 }
                return false;
            }

            if (
                j.ObjectProperty.check(parent) &&
                parent.key === path.node &&
                !parent.computed
            ) {
                // { oldName: 3 }
                return false;
            }

            if (
                j.ObjectMethod.check(parent) &&
                parent.key === path.node &&
                !parent.computed
            ) {
                // { oldName() {} }
                return false;
            }

            if (
                j.MethodDefinition.check(parent) &&
                parent.key === path.node &&
                !parent.computed
            ) {
                // class A { oldName() {} }
                return false;
            }

            if (
                j.ClassMethod.check(parent) &&
                parent.key === path.node &&
                !parent.computed
            ) {
                // class A { oldName() {} }
                return false;
            }

            if (
                j.ClassProperty.check(parent) &&
                parent.key === path.node &&
                !parent.computed
            ) {
                // class A { oldName = 3 }
                return false;
            }

            return true;
        })
        .forEach(path => {
            let scope = path.scope;
            while (scope && scope !== rootScope) {
                if (scope.declares(oldName)) {
                    return;
                }
                scope = scope.parent;
            }
            if (scope) { // identifier must refer to declared variable

                // It may look like we filtered out properties,
                // but the filter only ignored property "keys", not "value"s
                // In shorthand properties, "key" and "value" both have an
                // Identifier with the same structure.
                const parent = path.parent.node;
                if (
                    j.Property.check(parent) &&
                    parent.shorthand &&
                    !parent.method
                )  {

                    path.parent.get('shorthand').replace(false);
                }

                path.get('name').replace(newName);
            }
        })
}

/**
 * 寻找合适的新变量名
 * @param oldName
 * @param newName
 * @param path
 */
export function resolveNewName(oldName: string, newName: string, path: ASTPath) {
    const rootScope = path.scope
    const rootPath = rootScope.path

    let hasDefined = false
    j(rootPath)
        .find(j.Identifier, {name: oldName})
        .filter(path => {
            const parent = path.parent.node;

            if (
                j.MemberExpression.check(parent) &&
                parent.property === path.node &&
                !parent.computed
            ) {
                // obj.oldName
                return false;
            }

            if (
                j.Property.check(parent) &&
                parent.key === path.node &&
                !parent.computed
            ) {
                // { oldName: 3 }
                return false;
            }

            if (
                j.ObjectProperty.check(parent) &&
                parent.key === path.node &&
                !parent.computed
            ) {
                // { oldName: 3 }
                return false;
            }

            if (
                j.ObjectMethod.check(parent) &&
                parent.key === path.node &&
                !parent.computed
            ) {
                // { oldName() {} }
                return false;
            }

            if (
                j.MethodDefinition.check(parent) &&
                parent.key === path.node &&
                !parent.computed
            ) {
                // class A { oldName() {} }
                return false;
            }

            if (
                j.ClassMethod.check(parent) &&
                parent.key === path.node &&
                !parent.computed
            ) {
                // class A { oldName() {} }
                return false;
            }

            if (
                j.ClassProperty.check(parent) &&
                parent.key === path.node &&
                !parent.computed
            ) {
                // class A { oldName = 3 }
                return false;
            }

            return true;
        })
        .forEach(path => {
            let scope = path.scope;
            while (scope) {
                if (scope.declares(newName)) {
                    hasDefined = true
                    return;
                }
                scope = scope.parent;
            }
        })
    if (hasDefined) {
        return resolveNewName(oldName, '_' + newName, path)
    } else {
        return newName
    }
}
