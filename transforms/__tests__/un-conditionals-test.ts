jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '../un-conditionals'
import {TestCase} from '../../types'


const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `
a ? b() : c ? d() : e()`,
        output: `
if (a) b()
else if (c) d()
else e()`
    },

    {
        name: 'case 2',
        input: `
a ? b() : c ? d() : e() ? f() : g()`,
        output: `
if (a) b()
else if (c) d()
else if (e()) f()
else g()`
    },

    {
        name: 'case 3',
        input: `
let x = a ? b() : c ? d() : e() ? f() : g()`,
        output: `
let x

if (a) x = b()
else if (c) x = d()
else if (e()) x = f()
else x = g()`,
    }
]

describe('un-conditionals', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
