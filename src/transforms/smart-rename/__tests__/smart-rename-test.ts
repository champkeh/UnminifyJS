jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '..'
import {TestCase} from '#/types'

const cases: TestCase[] = [
    {
        name: 'case 1',
        skip: true,
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
        skip: true,
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
    },

    {
        name: 'case 3',
        skip: true,
        input: `
;(() => {
    var h
    
    var i = "MacOS" === h
    var isWin = "Windows" === h
    
    var p = {
        isMacOS: i,
        isWin: isWin,
    }
    
    ;(function (a) {
        if (i) {
            console.log(1)
        }
    })()
})()`,
        output: `
;(() => {
    var h

    var isMacOS = "MacOS" === h
    var isWin = "Windows" === h

    var p = {
        isMacOS: isMacOS /* oldName: i */,
        isWin: isWin,
    }

    ;(function (a) {
        if (isMacOS) {
            console.log(1)
        }
    })()
})()`
    },

    {
        name: 'case 4',
        input: `
const mod2 = {}
modulex.copy(mod2, {
    attachFileToItem: () => B_,
    autoUpdateCancelDownload: () => op,
    autoUpdateCheck: () => ip,
    autoUpdateCloseProgressWin: () => dp,
    autoUpdateDownload: () => rp,
    autoUpdateInfo: () => _p,
})

const B_ = () => {}
async function op() {
    np.cancelDownload()
}
async function ip() {
    return await np.check(), np.info
}
async function rp() {
    await np.download()
}
`,
        output: `
const mod2 = {}
modulex.copy(mod2, {
    attachFileToItem: () => B_,
    autoUpdateCancelDownload: () => op,
    autoUpdateCheck: () => ip,
    autoUpdateCloseProgressWin: () => dp,
    autoUpdateDownload: () => rp,
    autoUpdateInfo: () => _p,
})

const B_ = () => {}
async function op() {
    np.cancelDownload()
}
async function ip() {
    return await np.check(), np.info
}
async function rp() {
    await np.download()
}`
    }
]

describe('smart-rename', () => {
    for (const item of cases) {
        if (item.skip) continue
        describe(item.name, () => {
            defineInlineTest(transformer, {}, item.input, item.output)
        })
    }
})
