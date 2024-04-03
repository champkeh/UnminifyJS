jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '..'
import {TestCase} from '#/types'


const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `let a = 1 / 0`,
        output: `let a = Infinity`
    },
    {
        name: 'case 2',
        input: `let a = -1 / 0`,
        output: `let a = -Infinity`
    }
]

describe('un-infinity', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
