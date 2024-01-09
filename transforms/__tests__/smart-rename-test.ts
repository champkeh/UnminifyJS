jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '../smart-rename'
import {TestCase} from '../../types'

const cases: TestCase[] = [
    {
        name: 'case 1',
        input: `
const {
    gql: t,
    dispatchers: o,
    listener: i
} = n;
o.delete(t, i);
`,
        output: `
const {
    gql,
    dispatchers,
    listener
} = n;
dispatchers.delete(gql, listener);
`
    }
]

describe.skip('smart-rename', () => {
    for (const item of cases) {
        describe(item.name, () => {
            defineInlineTest(transformer, {}, item.input, item.output)
        })
    }
})
