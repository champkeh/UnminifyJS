jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '..'
import {TestCase} from '#/types'

const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `!0`,
        output: `true`
    },
    {
        name: 'case 2',
        input: `!1`,
        output: `false`
    },
    {
        name: 'case 3',
        input: `!2`,
        output: `!2`
    }
]

describe('un-boolean', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
