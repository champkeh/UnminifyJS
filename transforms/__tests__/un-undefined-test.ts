jest.autoMockOff()

const {defineInlineTest} = require('jscodeshift/dist/testUtils');

const transform = require('../un-undefined')


describe('un-undefined', () => {
    defineInlineTest(transform, null, 'void 0', 'undefined', 'void 0 => undefined')
    defineInlineTest(transform, null, 'void 1', 'void 1', 'void 1 => void 1')
})

export {}
