jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '../un-while-loop'
import {TestCase} from '../types'


const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `
for (; ;) {
}`,
        output: `
while (true) {}`
    },
    {
        name: 'case 2',
        input: `
for (; i < 10;) {
    console.log(i);
}`,
        output: `
while (i < 10) {
    console.log(i)
}`
    }
]

describe('un-while-loop', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
