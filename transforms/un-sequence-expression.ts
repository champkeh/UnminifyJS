import {Transform} from "jscodeshift"

const transformer: Transform = (file, api) => {
    const {j} = api
    const root = j(file.source)

    // a(), b(), c() => a(); b(); c();

    return root.toSource()
}

export default transformer
