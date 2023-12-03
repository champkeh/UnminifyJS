const path = require('path')

function resolvePlugin(pluginPath) {
    return path.resolve(__dirname, pluginPath)
}

const plugins = [
    './un-boolean.js',
    './un-undefined.js',
].map(pluginPath => resolvePlugin(pluginPath))


module.exports = {
    plugins: plugins,
}
