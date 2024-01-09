jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '../un-sequence-expression'
import {TestCase} from '../types'


const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `
a(), b(), c();`,
        output: `
a()
b()
c()`
    },

    {
        name: 'case 2',
        input: `
() => (a(), b(), c())`,
        output: `
;() => {
    a()
    b()
    return c()
}`
    },

    {
        name: 'case 3',
        input: `
function foo() {
    return a(), b()
}`,
        output: `
function foo() {
    a()
    return b()
}`
    },

    {
        name: 'case 4',
        input: `
throw a(), b()`,
        output: `
a()
throw b()`
    },

    {
        name: 'case 5',
        input: `
if (a(), b(), c()){}`,
        output: `
a()
b()
if (c()) {
}`
    },

    {
        name: 'case 6',
        input: `
switch (a(), b(), c()){}`,
        output: `
a()
b()
switch (c()) {
}`
    },

    {
        name: 'case 7',
        input: `
for (a(), b(); c(); d(), e()) {}`,
        output: `
a()
b()
for (; c(); ) {
    d()
    e()
}`
    },

    {
        name: 'case 8',
        input: `
for (let x = (a(), b(), c()), y = 1; x < 10; x++) {}`,
        output: `
a()
b()
for (let x = c(), y = 1; x < 10; x++) {}`
    },

    {
        name: 'case 9',
        input: `
let x = (a(), b(), c())`,
        output: `
a()
b()
let x = c()`
    }
]

describe('un-sequence-expression', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
