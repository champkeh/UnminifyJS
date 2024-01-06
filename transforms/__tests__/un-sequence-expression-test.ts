jest.autoMockOff()

const {defineInlineTest} = require('jscodeshift/dist/testUtils');

const transform = require('../un-sequence-expression')


describe('un-sequence-expression', () => {
    // `a(), b(), c()` -> `a(); b(); c();`
    defineInlineTest(transform, null, 'a(), b(), c()', 'a(); b(); c();')

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

    // (a = b())['c'] = d -> a = b(); a['c'] = d
})

export {}
