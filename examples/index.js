let j = require('jscodeshift')

// 需要使用 babylon 解析器
j = j.withParser('babylon')


const source = `
const {
    gql: t,
    dispatchers: o,
    listener: i
} = n;
o.delete(t, i);

let gql = 1

;() => {
    console.log(t)
}
;() => {
    let dispatchers = 1
    console.log(o)
}
`

function addComment(node, comment) {
    if (!j.Node.check(node)) {
        throw new Error('node 参数类型不正确')
    }
    if (comment) {
        node.comments = node.comments || []
        node.comments.push(j.commentBlock(comment, false, true))
    }
}

function renameInPath(oldName, newName, path) {
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

            if (
                j.JSXAttribute.check(parent) &&
                parent.name === path.node &&
                !parent.computed
            ) {
                // <Foo oldName={oldName} />
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
                ) {

                    path.parent.get('shorthand').replace(false);
                }

                // 需要确保 newName 没有被重新定义


                path.get('name').replace(newName);
            }
        })
}

function resolveNewName(oldName, keyName, path) {
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

            if (
                j.JSXAttribute.check(parent) &&
                parent.name === path.node &&
                !parent.computed
            ) {
                // <Foo oldName={oldName} />
                return false;
            }

            return true;
        })
        .forEach(path => {
            let scope = path.scope;
            while (scope) {
                if (scope.declares(keyName)) {
                    hasDefined = true
                    return;
                }
                scope = scope.parent;
            }
        })
    if (hasDefined) {
        return resolveNewName(oldName, '_' + keyName, path)
    } else {
        return keyName
    }
}


const root = j(source)


function handle(root) {

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

}

handle(root)


console.log(root.toSource())
