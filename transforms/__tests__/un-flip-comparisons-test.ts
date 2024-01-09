jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '../un-flip-comparisons'
import {TestCase} from '../../types'


const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `if ("dark" === theme) {}`,
        output: `if (theme === "dark") {
}`
    },
    {
        name: 'case 2',
        input: `while (10 < count) {}`,
        output: `while (count > 10) {}`
    },
    {
        name: 'case 3',
        input: `if (-1 !== (r = navigator.appVersion).indexOf("Win")) {}`,
        output: `if ((r = navigator.appVersion).indexOf("Win") !== -1) {
}`
    }
]

describe('un-flip-comparisons', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
