const fs = require("node:fs/promises")
const path = require("node:path")

function writeToFile(file, content) {
    return fs.writeFile(path.resolve(__dirname, file), content)
}

module.exports = {
    writeToFile,
}
