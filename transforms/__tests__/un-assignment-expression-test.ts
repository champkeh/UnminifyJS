jest.autoMockOff()

const {defineTest} = require('jscodeshift/dist/testUtils');

describe('un-assignment-expression', () => {
    defineTest(__dirname, 'un-assignment-expression')
})

export {}
