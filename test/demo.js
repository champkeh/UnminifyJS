const babel = require('@babel/parser');
let j = require('jscodeshift')
const fs = require('fs')
const path = require('path')
const recast = require('recast')

j = j.withParser('babylon')

let source = 'let a = 1e3'

const numeric = j.numericLiteral(1000)
console.log(numeric)
const comment = j.commentBlock(' this is comment ', false, true)
console.log(comment)

numeric.comments = [comment]
console.log(numeric)
console.log(recast.print(numeric).code)


function write(file, content) {
    fs.writeFileSync(path.resolve(__dirname, file), content)
}
