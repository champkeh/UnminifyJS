const j = require('jscodeshift').withParser('babylon')
const {resolveNewName, renameInPath, addComment} = require("../utils/node-helper");


const source = `
const mod2 = {}
modulex.copy(mod2, {
    attachFileToItem: () => B_,
    autoUpdateCancelDownload: () => op,
    autoUpdateCheck: () => ip,
    autoUpdateCloseProgressWin: () => dp,
    autoUpdateDownload: () => rp,
    autoUpdateInfo: () => _p,
})

const B_ = () => {}
async function op() {
    np.cancelDownload()
}
async function ip() {
    return await np.check(), np.info
}
async function rp() {
    await np.download()
}
`

function renameByProperty(properties, path) {
    for (const property of properties) {
        if (property.value.type !== 'Identifier' || property.key.type !== 'Identifier') {
            continue
        }
        const oldName = property.value.name
        const keyName = property.key.name
        if (oldName.length >= keyName.length) {
            continue
        }

        const newName = resolveNewName(oldName, keyName, path)

        renameInPath(oldName, newName, path)
        addComment(property.value, `oldName: ${oldName}`)
    }
}

const root = j(source)

function handle(root) {

    root
        .find(j.ObjectExpression)
        .forEach(path => {
            let properties = path.get('properties').value
            properties = properties.filter((p) =>
                j.ObjectProperty.check(p) &&
                j.ArrowFunctionExpression.check(p.value) &&
                j.Identifier.check(p.value.body)
            )

            // for (const property of properties) {
            //     console.log(property.value.body.name)
            // }
            renameByProperty(properties, path)
        })


}

handle(root)


console.log(root.toSource())
