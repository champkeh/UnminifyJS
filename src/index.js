const fs = require('fs')
const path = require('path')
const babel = require('@babel/core')
const preset = require('./plugins/preset')

const sourceCode = fs.readFileSync(path.resolve(__dirname, 'case.js'), {encoding: 'utf-8'})

const result = babel.transformSync(sourceCode, preset)
console.log(result.code)
