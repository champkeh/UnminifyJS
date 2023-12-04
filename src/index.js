const fs = require('fs')
const path = require('path')
const babel = require('@babel/core')
const options = require('./options')

const sourceFile = path.resolve(__dirname, '../input/enhance.js')

const result = babel.transformFileSync(sourceFile, options)

fs.writeFileSync(path.resolve(__dirname, '../output/enhance.js'), result.code)
