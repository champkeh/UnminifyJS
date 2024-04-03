jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '..'
import {TestCase} from '#/types'


const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `
function foo() {
    const a = 1;
    if (a) {
        return a;
    }
    return void 0;
}`,
        output: `
function foo() {
    const a = 1
    if (a) {
        return a
    }
}`
    },

    {
        name: 'case 2',
        input: `
const bar = () => {
    return void foo();
}`,
        output: `
const bar = () => {
    foo()
}`
    }
]

describe('un-return', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
