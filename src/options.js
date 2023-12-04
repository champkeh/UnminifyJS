const path = require('path')

function resolvePlugin(pluginPath) {
    return path.resolve(__dirname, 'plugins', pluginPath)
}

const plugins = [
    './un-boolean.js',
    './un-undefined.js',
    './un-sequence-expression.js',
].map(pluginPath => resolvePlugin(pluginPath))


module.exports = {
    sourceType: 'unambiguous',
    plugins: plugins,
    compact: false,
}
