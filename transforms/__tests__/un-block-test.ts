jest.autoMockOff()

const {defineTest} = require('jscodeshift/dist/testUtils');

describe('un-block', () => {
    defineTest(__dirname, 'un-block')
})

export {}
