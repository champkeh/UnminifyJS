jest.autoMockOff()

const {defineInlineTest} = require('jscodeshift/dist/testUtils');

const transform = require('../un-bracket-notation')


describe.skip('un-bracket-notation', () => {
    defineInlineTest(transform, null, 'obj["prop"]', 'obj.prop')
    defineInlineTest(transform, null, 'obj["var"]', 'obj.var')
    defineInlineTest(transform, null, 'obj["a-b"]', 'obj["a-b"]')
})

export {}
