let j = require('jscodeshift')

// 需要使用 babylon 解析器
j = j.withParser('babylon')

function isValidIdentifier(name) {
    return /^[0-9a-zA-Z$]+$/.test(name)
}

const source = `
obj[a]
obj['a']
obj['a']['b']['c']
obj['a']['b+']['c']
obj['a']['b+']['c']()
obj['a']['1']['c']()
`

const root = j(source)


function handle(root) {

    root
        .find(j.MemberExpression, {property: {type: 'StringLiteral'}})
        .forEach(path => {
            const memberExpr = path.value
            const propValue = memberExpr.property.value

            debugger

            if (/^\d+$/.test(propValue)) {
                // 纯数字
                memberExpr.property = j.numericLiteral(Number(propValue))
            } else if (/^[^0-9][0-9a-zA-Z$]*$/.test(propValue)) {
                // 合法标识符
                memberExpr.property = j.identifier(propValue)
                memberExpr.computed = false
            } else {

            }
        })
}

handle(root)


console.log(root.toSource())
