import j, {
    BlockStatement,
    Collection,
    ExpressionStatement,
    SequenceExpression,
    Statement,
    Transform,
    VariableDeclaration,
    VariableDeclarator
} from "jscodeshift"
import {formatCode} from "@/utils/formatter";


// a(), b(), c() => a(); b(); c();
function handleSequenceInTopLevelOrFunctionBody(root: Collection<any>) {
    root.find(j.ExpressionStatement, {expression: {type: 'SequenceExpression'}})
        .replaceWith(path => {
            const sequenceExpression: SequenceExpression = path.node.expression as SequenceExpression
            const expressions = sequenceExpression.expressions

            return expressions.map(expr => j.expressionStatement(expr))
        })
}

// () => (a(), b(), c()) -> () => { a(); b(); return c() }
function handleSequenceInArrowFunctionBody(root: Collection<any>) {
    root.find(j.ArrowFunctionExpression, {body: {type: 'SequenceExpression'}})
        .forEach(path => {
            const sequenceExpression: SequenceExpression = path.node.body as SequenceExpression
            const expressions = sequenceExpression.expressions

            // Convert the sequence expression to a block statement
            const blockStatement = j.blockStatement(expressions.map(expression => j.expressionStatement(expression)))

            // Add a return statement for the last expression in the block
            const blockBodyStatements = blockStatement.body
            let lastExpression = (blockBodyStatements[blockBodyStatements.length - 1] as ExpressionStatement).expression
            blockBodyStatements[blockBodyStatements.length - 1] = j.returnStatement(lastExpression)

            path.node.body = blockStatement
        })
}

// `return a(), b()` -> `a(); return b()`
function handleSequenceInReturn(root: Collection<any>) {
    root.find(j.Function, {body: {type: 'BlockStatement'}})
        .forEach(path => {
            const blockStatement = path.node.body

            j(blockStatement)
                .find(j.ReturnStatement)
                .filter(path => path.node.argument !== null && path.node.argument.type === 'SequenceExpression')
                .replaceWith(returnPath => {

                    // console.log(1111, returnPath.node.loc.start)

                    const sequenceExpression: SequenceExpression = returnPath.node.argument as SequenceExpression
                    const expressions = sequenceExpression.expressions


                    const newStatements: Statement[] = expressions.map(expr => j.expressionStatement(expr))
                    const lastStatement: ExpressionStatement = newStatements[newStatements.length - 1] as ExpressionStatement
                    newStatements[newStatements.length - 1] = j.returnStatement(lastStatement.expression)
                    return newStatements
                })
        })
}

// `throw a(), b()` -> `a(); throw b()`
function handleSequenceInThrow(root: Collection<any>) {
    root.find(j.ThrowStatement, {argument: {type: 'SequenceExpression'}})
        .forEach(path => {
            const sequenceStatement: SequenceExpression = path.node.argument as SequenceExpression
            const expressions = sequenceStatement.expressions
            const lastExpr = expressions[expressions.length - 1]

            const restStatements = expressions.slice(0, -1).map(expr => j.expressionStatement(expr))
            j(path).insertBefore(restStatements)

            path.node.argument = lastExpr
        })
}

// `if (a(), b(), c())` -> `a(); b(); if (c())`
function handleSequenceInIf(root: Collection<any>) {
    root.find(j.IfStatement, {test: {type: 'SequenceExpression'}})
        .forEach(path => {
            const sequenceExpression: SequenceExpression = path.node.test as SequenceExpression
            const expressions = sequenceExpression.expressions

            path.node.test = expressions[expressions.length - 1]

            const statements = expressions.slice(0, -1).map((expr) => j.expressionStatement(expr))
            j(path).insertBefore(statements)
        })
}

// `switch (a(), b(), c())` -> `a(); b(); switch (c())`
function handleSequenceInSwitch(root: Collection<any>) {
    root.find(j.SwitchStatement, {discriminant: {type: 'SequenceExpression'}})
        .forEach(path => {
            const sequenceExpression: SequenceExpression = path.node.discriminant as SequenceExpression
            const expressions = sequenceExpression.expressions

            path.node.discriminant = expressions[expressions.length - 1]

            const statements = expressions.slice(0, -1).map((expr) => j.expressionStatement(expr))
            j(path).insertBefore(statements)
        })
}

// `for (a(), b(); c(); d(), e()) {}` -> `a(); b(); for (; c(); ) { d(); e(); }`
function handleSequenceInForInitUpdate(root: Collection<any>) {
    root
        .find(j.ForStatement, node => {
            return (node.init !== null && node.init.type === 'SequenceExpression') ||
                (node.update !== null && node.update.type === 'SequenceExpression')
        })
        .forEach(path => {
            if (path.node.init && path.node.init.type === 'SequenceExpression') {
                const sequenceExpression = path.node.init
                const expressions = sequenceExpression.expressions

                path.node.init = null
                j(path).insertBefore(expressions.map(expr => j.expressionStatement(expr)))
            }
            if (path.node.update && path.node.update.type === 'SequenceExpression') {
                const sequenceExpression = path.node.update
                const expressions = sequenceExpression.expressions

                path.node.update = null;
                (path.node.body as BlockStatement).body.push(...expressions.map(expr => j.expressionStatement(expr)))
            }
        })
}

// `for (let x = (a(), b(), c()), y = 1; x < 10; x++) {}` -> `a(); b(); for (let x = c(), y = 1; x < 10; x++) {}`
function handleSequenceInForInitDeclarations(root: Collection<any>) {
    root
        .find(j.ForStatement, node => {
            return node.init !== null &&
                node.init.type === 'VariableDeclaration' &&
                node.init.declarations
                    .filter(declarator => declarator.type === 'VariableDeclarator')
                    .some(declarator => (declarator as VariableDeclarator).init?.type === 'SequenceExpression')
        })
        .forEach(path => {
            (path.node.init as VariableDeclaration)?.declarations
                .filter(declarator => declarator.type === 'VariableDeclarator' && declarator.init?.type === 'SequenceExpression')
                .forEach(declarator => {
                    const sequenceExpression: SequenceExpression = (declarator as VariableDeclarator).init as SequenceExpression
                    const expressions = sequenceExpression.expressions;

                    (declarator as VariableDeclarator).init = expressions[expressions.length - 1]
                    j(path).insertBefore(expressions.slice(0, -1).map(expr => j.expressionStatement(expr)))
                })
        })
}

// todo
// `while (a(), b(), c())` -> `a(); b(); while (c())`
// `do { a(), b(), c() } while (d(), e(), f())` -> `a(); b(); do { c() } while (d(), e(), f())`


// `let x = (a(), b(), c())` -> `a(); b(); let x = c()`
// `const x = (a(), b()), y = 1, z = (c(), d())` -> `a(); c(); const x = b(), y = 1, z = d()`
function handleSequenceInVariableDeclarations(root: Collection<any>) {
    root
        .find(j.VariableDeclaration, node => {
            return node.declarations
                .filter(declarator => declarator.type === 'VariableDeclarator')
                .some(declarator => (declarator as VariableDeclarator).init?.type === 'SequenceExpression')
        })
        .forEach(path => {
            path.node.declarations
                .filter(declarator => (declarator as VariableDeclarator).init?.type === 'SequenceExpression')
                .forEach(declarator => {
                    const sequenceExpression: SequenceExpression = (declarator as VariableDeclarator).init as SequenceExpression
                    const expressions = sequenceExpression.expressions;

                    (declarator as VariableDeclarator).init = expressions[expressions.length - 1]
                    j(path).insertBefore(expressions.slice(0, -1).map(expr => j.expressionStatement(expr)))
                })
        })
}


// (a = b())['c'] = d -> a = b(); a['c'] = d

const transformer: Transform = function unSequenceExpression(file, api) {
    const {j} = api
    const root = j(file.source)

    // a(), b(), c() => a(); b(); c();
    handleSequenceInTopLevelOrFunctionBody(root)

    // () => (a(), b(), c()) -> () => { a(); b(); return c() }
    handleSequenceInArrowFunctionBody(root)

    // `return a(), b()` -> `a(); return b()`
    handleSequenceInReturn(root)

    // `throw a(), b()` -> `a(); throw b()`
    handleSequenceInThrow(root)

    // `if (a(), b(), c())` -> `a(); b(); if (c())`
    handleSequenceInIf(root)

    // `switch (a(), b(), c())` -> `a(); b(); switch (c())`
    handleSequenceInSwitch(root)

    // `for (a(), b(); c(); d(), e()) {}` -> `a(); b(); for (; c(); ) { d(); e(); }`
    handleSequenceInForInitUpdate(root)

    // `for (let x = (a(), b(), c()), y = 1; x < 10; x++) {}` -> `a(); b(); for (let x = c(), y = 1; x < 10; x++) {}`
    handleSequenceInForInitDeclarations(root)

    // `let x = (a(), b(), c())` -> `a(); b(); let x = c()`
    // `const x = (a(), b()), y = 1, z = (c(), d())` -> `a(); c(); const x = b(), y = 1, z = d()`
    handleSequenceInVariableDeclarations(root)


    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
