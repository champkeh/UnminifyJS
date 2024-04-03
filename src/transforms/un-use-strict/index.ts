import {Transform} from "jscodeshift"
import {formatCode} from "@/utils/formatter";

const transformer: Transform = function unUseStrict(file, api) {
    const {j} = api
    const root = j(file.source)

    root.find(j.Directive).remove()

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
