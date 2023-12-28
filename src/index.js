const fs = require('fs')
const path = require('path')
const {transform: lebabTransform} = require('lebab')
const babel = require('@babel/core')
const options = require('./options')

const lebabOptions = [
    'arrow',
    'arrow-return',
    'for-of',
    'for-each',
    'arg-rest',
    'arg-spread',
    'multi-var',

    'let',
    'class',
    'default-param',
]

const sourceFile = path.resolve(__dirname, '../input/enhance.js')

const result = babel.transformFileSync(sourceFile, options)

const {code, warnings} = lebabTransform(result.code, lebabOptions)

fs.writeFileSync(path.resolve(__dirname, '../output/case.js'), code)

console.log(warnings)
