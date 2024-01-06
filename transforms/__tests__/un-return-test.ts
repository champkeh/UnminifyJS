jest.autoMockOff()

const {defineTest} = require('jscodeshift/dist/testUtils');

describe('un-return', () => {
    defineTest(__dirname, 'un-return')
})

export {}
