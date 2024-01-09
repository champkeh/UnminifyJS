jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '../un-bracket-notation'
import {TestCase} from '../types'


const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `obj["prop"]`,
        output: `obj.prop`
    },
    {
        name: 'case 2',
        input: `obj["var"]`,
        output: `obj.var`
    },
    {
        name: 'case 3',
        input: `obj["a-b"]`,
        output: `obj["a-b"]`
    },
    {
        name: 'case 4',
        input: `obj["1"]`,
        output: `obj[1]`
    }
]

describe('un-bracket-notation', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
