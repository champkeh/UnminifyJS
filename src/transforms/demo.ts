import {Transform} from "jscodeshift"

const transform: Transform = (file, api, options) => {
    const {j} = api
    const {source} = file
    const root = j(source)

    return root.toSource()
}

export default transform
