let j = require('jscodeshift')


console.log(defineTest)

// 需要使用 babylon 解析器
j = j.withParser('babylon')


const source = `
const menu = {
  beverages: {
    soft: {
      water: 2,
      juice: 3,
    },
  },
  happyHour: {
    beverages: {
      soft: {
        water: 1,
        juice: 2,
      },
    },
  },
};
`

function isDirectChildOfObject(parent, child) {
    let current = child.parentPath;
    // Ignoring object expressions
    while (current.node && current.node.type === "ObjectExpression") {
        current = current.parentPath;
    }

    return current.node === parent;
}

const root = j(source)
const rootPaths = root
    .find(j.VariableDeclarator, {
        id: {name: "menu"},
    })

// console.log(rootPaths)
// console.log(rootPaths.get(0).node === rootPaths.paths()[0].node)
// console.log(rootPaths.paths()[0].get(0).get(0).get(0).node === rootPaths.paths()[0].node)
// console.log(rootPaths.paths()[0])
// console.log(rootPaths.paths()[0].get(0))

rootPaths.find(j.ObjectProperty, {key: {name: "beverages"}})
    .filter((path) => isDirectChildOfObject(rootPaths.get(0).node, path))
    .replaceWith((nodePath) => {
        const {node} = nodePath;

        node.key.name = "theFoundBeverage";
        return node;
    });

console.log(root.toSource())
