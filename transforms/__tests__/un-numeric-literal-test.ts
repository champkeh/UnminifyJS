jest.autoMockOff()

const {defineInlineTest} = require('jscodeshift/dist/testUtils');

const transform = require('../un-numeric-literal')


describe('un-numeric-literal', () => {
    defineInlineTest(transform, null, 'let a = 1e3', '1000/* 1e3 */', '1e3 => 1000/* 1e3 */')
    defineInlineTest(transform, null, '0x10', '16/* 0x10 */', '0x10 => 16/* 0x10 */')
})

export {}
