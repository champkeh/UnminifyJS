jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '../un-block'
import {TestCase} from '../types'


const cases: TestCase[] = [
    // if statement
    {
        name: 'IF Statement',
        input: `
if (true)
    foo()`,
        output: `
if (true) {
    foo()
}`
    },

    // if-else statement
    {
        name: 'IF-ELSE Statement',
        input: `
if (false)
    foo()
else
    bar()`,
        output: `
if (false) {
    foo()
} else {
    bar()
}`
    },

    // for statement
    {
        name: 'FOR Statement',
        input: `
for (;;) foo()`,
        output: `
for (;;) {
    foo()
}`
    }
]

describe('un-block', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
