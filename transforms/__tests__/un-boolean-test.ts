jest.autoMockOff()

const {defineInlineTest} = require('jscodeshift/dist/testUtils');

const transform = require('../un-boolean')


describe('un-boolean', () => {
    defineInlineTest(transform, null, '!0', 'true', '!0 => true')
    defineInlineTest(transform, null, '!1', 'false', '1! => false')
})

export {}
