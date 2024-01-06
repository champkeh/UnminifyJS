import {Transform} from "jscodeshift"

const transformer: Transform = (file, api) => {
    const {j} = api
    const root = j(file.source)

    root.find(j.Directive).remove()

    return root.toSource()
}

export default transformer
