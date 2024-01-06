jest.autoMockOff()

const {defineInlineTest} = require('jscodeshift/dist/testUtils');

const transform = require('../un-flip-comparisons')


describe('un-flip-comparisons', () => {
    defineInlineTest(transform, null, `if ("dark" === theme) {}`, `if (theme === "dark") {}`)
    defineInlineTest(transform, null, `while (10 < count) {}`, `while (count > 10) {}`)
})

export {}
