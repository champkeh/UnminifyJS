jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '..'
import {TestCase} from '#/types'


const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `void 0`,
        output: `undefined`
    },
    {
        name: 'case 2',
        input: `void 1`,
        output: `void 1`
    }
]

describe('un-undefined', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
