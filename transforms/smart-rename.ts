import {Transform} from "jscodeshift"
import {formatCode} from "../utils/formatter";

const transformer: Transform = function smartRename(file, api) {
    const {j} = api
    const root = j(file.source)

    // todo

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
