jest.autoMockOff()

const {defineTest} = require('jscodeshift/dist/testUtils');

describe('un-conditionals', () => {
    defineTest(__dirname, 'un-conditionals')
})

export {}
