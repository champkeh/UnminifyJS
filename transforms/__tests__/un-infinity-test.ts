jest.autoMockOff()

const {defineInlineTest} = require('jscodeshift/dist/testUtils');

const transform = require('../un-infinity')


describe('un-infinity', () => {
    defineInlineTest(transform, null, '1 / 0', 'Infinity', '1/0 => Infinity')
    defineInlineTest(transform, null, '-1 / 0', '-Infinity', '-1/0 => -Infinity')
})

export {}
