let j = require('jscodeshift')
const {UnaryExpression} = require("jscodeshift");

// 需要使用 babylon 解析器
j = j.withParser('babylon')


const source = `
var os;
var isMacOS = "MacOS" === os;
var isWindows = "Windows" === os;
var isLinux = "Linux" === os;

var c = (/^((?!chrome|android).)*safari/i.test(navigator.userAgent.toLowerCase()));

var p = {
    isMacOS: isMacOS,
    isWin: isWindows,
    isLinux: isLinux,
    isSafari: c,
}
`

const root = j(source)


function handle(root) {
    root
        .find(j.VariableDeclarator)
        .filter(path => path.node.id.name === 'c')
        .forEach(path => {
            console.log(path.scope)
            console.log(j(path).closestScope())
        })
        .renameTo('xxx')
}

handle(root)


console.log(root.toSource())
