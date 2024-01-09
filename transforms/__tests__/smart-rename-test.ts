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
    gql: gql /* oldName: t */,
    dispatchers: dispatchers /* oldName: o */,
    listener: listener /* oldName: i */,
} = n
dispatchers.delete(gql, listener)
`
    },

    {
        name: 'case 2',
        input: `
const {
    gql: t,
    dispatchers: o,
    listener: i
} = n;
o.delete(t, i);

let gql = 1

;() => {
    console.log(t)
}
;() => {
    let dispatchers = 1
    console.log(o)
}`,
        output: `
const {
    gql: _gql /* oldName: t */,
    dispatchers: _dispatchers /* oldName: o */,
    listener: listener /* oldName: i */,
} = n
_dispatchers.delete(_gql, listener)

let gql = 1

;() => {
    console.log(_gql)
}
;() => {
    let dispatchers = 1
    console.log(_dispatchers)
}`
    }
]

describe('smart-rename', () => {
    for (const item of cases) {
        describe(item.name, () => {
            defineInlineTest(transformer, {}, item.input, item.output)
        })
    }
})
