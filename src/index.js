const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const types = require('@babel/types')
const template = require('@babel/template').default
const fs = require('fs')
const path = require('path')
const Visitors = require('./transformations')
const babel = require('@babel/core')
const preset = require('./plugins/preset')

const sourceCode = fs.readFileSync(path.resolve(__dirname, 'case.js'), {encoding: 'utf-8'})

const result = babel.transformSync(sourceCode, preset)
console.log(result.code)
