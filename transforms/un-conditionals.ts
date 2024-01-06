// @ts-nocheck

import j, {ASTNode, Collection, ConditionalExpression, Transform} from "jscodeshift"

function collectConditionals(node: ConditionalExpression, conditionals: ConditionalExpression[] = []) {
    conditionals.push(node)
    if (node.alternate.type === 'ConditionalExpression') {
        collectConditionals(node.alternate, conditionals)
    }
    return conditionals
}

// a ? b() : c ? d() : e() ? f() : g()
function handleConditionalExpression(root: Collection<any>) {
    root.find(j.ConditionalExpression)
        .filter(path => path.name === 'expression' && path.node.alternate.type === 'ConditionalExpression')
        .forEach(path => {
            const node = path.node
            const stack: ConditionalExpression[] = []
            collectConditionals(node, stack)

            while (stack.length) {
                const conditionalNode: ConditionalExpression = stack.pop()!

                const ifStatement = j.ifStatement(
                    conditionalNode.test,
                    j.expressionStatement(conditionalNode.consequent),
                    conditionalNode.alternate.type !== 'IfStatement' ? j.expressionStatement(conditionalNode.alternate) : conditionalNode.alternate,
                )

                if (stack.length > 0) {
                    stack[stack.length - 1].alternate = ifStatement as unknown as ConditionalExpression
                }
            }
        })
        .replaceWith(path => {
            const node = path.node
            return j.ifStatement(
                node.test,
                j.expressionStatement(node.consequent),
                node.alternate,
            )
        })
}

// let x = a ? b() : c ? d() : e() ? f() : g()
function handleConditionalDeclaration(root: Collection<any>) {
    root.find(j.VariableDeclaration)
        .filter(path => path.node.declarations.length === 1 && path.node.declarations[0].init && path.node.declarations[0].init.type === 'ConditionalExpression')
        .forEach(path => {
            const variableDeclarator = path.node.declarations[0]
            const kind = path.node.kind

            j(path).insertBefore(j.variableDeclaration(kind, [
                j.variableDeclarator(variableDeclarator.id, null)
            ]))

            j(path).replaceWith(j.expressionStatement(path.node.declarations[0].init))
            j(path)
                .find(j.ConditionalExpression)
                .filter(path => path.name === 'expression' && path.node.alternate.type === 'ConditionalExpression')
                .forEach(path => {
                    const node = path.node
                    const stack = []
                    collectConditionals(node, stack)

                    const identifier = variableDeclarator.id

                    while (stack.length) {
                        const conditionalNode = stack.pop()

                        const ifStatement = j.ifStatement(
                            conditionalNode.test,
                            j.expressionStatement(j.assignmentExpression('=', identifier, conditionalNode.consequent)),
                            conditionalNode.alternate.type === 'IfStatement' ? conditionalNode.alternate : j.expressionStatement(j.assignmentExpression('=', identifier, conditionalNode.alternate)),
                        )

                        if (stack.length > 0) {
                            stack[stack.length - 1].alternate = ifStatement
                        }
                    }
                })
                .replaceWith(path => {
                    const node = path.node
                    const identifier = variableDeclarator.id

                    return j.ifStatement(
                        node.test,
                        j.expressionStatement(j.assignmentExpression('=', identifier, node.consequent)),
                        node.alternate,
                    )
                })
        })
        .replaceWith(path => path.node)
}

const transformer: Transform = (file, api) => {
    const {j} = api
    const root = j(file.source)

    // a ? b() : c ? d() : e() ? f() : g()
    handleConditionalExpression(root)

    // let x = a ? b() : c ? d() : e() ? f() : g()
    handleConditionalDeclaration(root)

    return root.toSource()
}

export default transformer
