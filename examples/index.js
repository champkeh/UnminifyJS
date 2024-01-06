let j = require('jscodeshift')
const {UnaryExpression} = require("jscodeshift");

// 需要使用 babylon 解析器
j = j.withParser('babylon')


const source = `
"use strict"

function foo() {
    "use strict"
    const a = 1;
    if (a) {
        return a;
    }
    return void 0;
}
const bar = () => {
    return void foo();
}
`

const root = j(source)


function handle(root) {
    root.find(j.Directive).remove()
}

handle(root)


console.log(root.toSource())
