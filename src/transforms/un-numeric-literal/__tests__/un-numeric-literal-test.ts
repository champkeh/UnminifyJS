jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '..'
import {TestCase} from '#/types'


const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `let a = 1e3`,
        output: `let a = 1000 /* 1e3 */`
    },
    {
        name: 'case 2',
        input: `0x10`,
        output: `16 /* 0x10 */`
    }
]

describe('un-numeric-literal', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
