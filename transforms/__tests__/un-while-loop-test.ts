jest.autoMockOff()

const {defineTest} = require('jscodeshift/dist/testUtils');

describe('un-while-loop', () => {
    defineTest(__dirname, 'un-while-loop')
})

export {}
