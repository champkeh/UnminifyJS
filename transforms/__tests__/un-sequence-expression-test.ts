jest.autoMockOff()

const {defineTest} = require('jscodeshift/dist/testUtils');

describe('un-sequence-expression', () => {
    defineTest(__dirname, 'un-sequence-expression')
})

export {}