jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '../un-flip-comparisons'
import {TestCase} from '../../types'


const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `if ("dark" === theme) {}`,
        output: `if (theme === "dark") {\n}`
    },
    {
        name: 'case 2',
        input: `while (10 < count) {}`,
        output: `while (count > 10) {}`
    }
]

describe('un-flip-comparisons', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
