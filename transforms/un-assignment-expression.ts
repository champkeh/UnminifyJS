import {Transform} from "jscodeshift"

const transformer: Transform = (file, api) => {
    const {j} = api
    const root = j(file.source)

    // todo

    return root.toSource()
}

export default transformer
