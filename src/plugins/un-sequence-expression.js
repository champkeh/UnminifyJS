const types = require("@babel/types")

// () => (a(), b(), c()) -> () => { a(); b(); return c() }
// `return a(), b()` -> `a(); return b()`
// `if (a(), b(), c())` -> `a(); b(); if (c())`
// `while (a(), b(), c())` -> `a(); b(); while (c())`
// `do { a(), b(), c() } while (d(), e(), f())` -> `a(); b(); do { c() } while (d(), e(), f())`
// `switch (a(), b(), c())` -> `a(); b(); switch (c())`
// `throw a(), b()` -> `a(); throw b()`

// `let x = (a(), b(), c())` -> `a(); b(); let x = c()`
// `const x = (a(), b()), y = 1, z = (c(), d())` -> `a(); c(); const x = b(), y = 1, z = d()`

// `for (a(), b(); c(); d(), e()) {}` -> `a(); b(); for (; c(); ) { d(); e(); }`
// `for (let x = (a(), b(), c()), y = 1; x < 10; x++) {}` -> `a(); b(); for (let x = c(), y = 1; x < 10; x++) {}`
// `a(), b(), c()` -> `a(); b(); c();`
// (a = b())['c'] = d -> a = b(); a['c'] = d

module.exports = function () {
    return {
        visitor: {
            SequenceExpression(path) {
                // debugger

                if (types.isExpressionStatement(path.parent)) {
                    path.parentPath.replaceWithMultiple(path.node.expressions.map(e => types.expressionStatement(e)))
                    path.skip()
                } else if (types.isReturnStatement(path.parent)) {
                    // return a(), b(), c()
                    const nodes = path.node.expressions.slice(0, -1)
                    const blockStatement = path.findParent(path => types.isBlockStatement(path))
                    if (blockStatement) {

                    }
                    const returnPath = path.parent
                    if (returnPath.listKey === 'body') {
                        // return 位于一个 block 里面
                        nodes.forEach(node => {
                            returnPath.insertBefore(node)
                        })
                    }
                }
            },
        }
    }
}
