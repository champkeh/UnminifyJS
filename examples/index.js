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
    root.find(j.MemberExpression, node => {
        return node.property.type === 'StringLiteral' && isValidIdentifier((node.property).value)
    })
    root.find(j.MemberExpression, {property: {type: 'StringLiteral'}})
        .filter(path => isValidIdentifier((path.node.property).value))
.forEach(path => {
        path.node.computed = false
        path.node.property = j.identifier((path.node.property).value)
    })
}

handle(root)


console.log(root.toSource())
