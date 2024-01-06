jest.autoMockOff()

const {defineTest} = require('jscodeshift/dist/testUtils');

describe('un-variable-merging', () => {
    defineTest(__dirname, 'un-variable-merging')
})

export {}
