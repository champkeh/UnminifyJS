jest.autoMockOff()

import {defineInlineTest} from 'jscodeshift/src/testUtils'
import * as transformer from '..'
import {TestCase} from '#/types'


const cases: TestCase[] = [
    // 数字字面量
    {
        name: '数字字面量',
        input: `a = b.c = d = 1`,
        output: `d = 1
b.c = 1
a = 1`,
    },

    // 布尔字面量
    {
        name: '布尔字面量',
        input: `a = b.c = d = true`,
        output: `d = true
b.c = true
a = true`
    },

    // 字符串字面量
    {
        name: '字符串字面量',
        input: `a = b.c = d = 'cc'`,
        output: `d = "cc"
b.c = "cc"
a = "cc"`
    },

    // 对象字面量
    {
        name: '对象字面量',
        input: `a = b.c = d = {name: 'cc'}`,
        output: `d = {name: "cc"}
b.c = {name: "cc"}
a = {name: "cc"}`
    },

    // 数组字面量
    {
        name: '数组字面量',
        input: `a = b.c = d = [1,2,,,3]`,
        output: `d = [1, 2, , , 3]
b.c = [1, 2, , , 3]
a = [1, 2, , , 3]`
    },

    // 正则字面量
    {
        name: '正则字面量',
        input: `a = b.c = d = /d{3}/`,
        output: `d = /d{3}/
b.c = /d{3}/
a = /d{3}/`
    },

    // 标识符
    {
        name: '标识符',
        input: `a = b.c = d = foo`,
        output: `d = foo
b.c = foo
a = foo`
    },

    {
        name: `存在副作用`,
        input: `a = b = c = foo()`,
        output: `a = b = c = foo()`
    }
]

describe('un-assignment-expression', () => {
    for (const testCase of cases) {
        describe(testCase.name, () => {
            defineInlineTest(transformer, {}, testCase.input, testCase.output)
        })
    }
})
