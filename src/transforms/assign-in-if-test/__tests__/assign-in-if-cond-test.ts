jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '../index'
import {TestCase} from '#/types'

const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `
var r
var h
if ((r = navigator.appVersion).indexOf("Win") !== -1) {
    h = "Windows"
} else if (r.indexOf("Mac") !== -1) {
    h = "MacOS"
} else if (r.indexOf("X11") !== -1 || r.indexOf("Linux") !== -1) {
    h = "Linux"
} else {
    h = "Unknown OS"
}
`,
        output: `
var r
var h
r = navigator.appVersion
if (r.indexOf("Win") !== -1) {
    h = "Windows"
} else if (r.indexOf("Mac") !== -1) {
    h = "MacOS"
} else if (r.indexOf("X11") !== -1 || r.indexOf("Linux") !== -1) {
    h = "Linux"
} else {
    h = "Unknown OS"
}
`
    },
]

describe('assign-in-if-test', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
