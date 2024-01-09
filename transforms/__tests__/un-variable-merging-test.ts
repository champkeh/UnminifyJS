jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '../un-variable-merging'
import {TestCase} from '../../types'


const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `
var a = 1, b = true, c = func(d);`,
        output: `
var a = 1
var b = true
var c = func(d)`
    },
    {
        name: 'case 2',
        input: `
for (var i = 0, j = 0, k = 0; j < 10; k++) {}`,
        output: `
var i = 0
for (var j = 0, k = 0; j < 10; k++) {}`
    }
]

describe('un-variable-merging', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
