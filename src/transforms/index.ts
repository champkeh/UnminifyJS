import {type Transform} from "jscodeshift"
import unBoolean from "./un-boolean"
import unUndefined from "./un-undefined"
import unInfinity from "./un-infinity"
import unNumericLiteral from "./un-numeric-literal"

const transform: Transform = (file, api, options) => {
    let source = file.source

    const transQueue = [
        unBoolean,
        unUndefined,
        unInfinity,
        unNumericLiteral,
    ]
    transQueue.forEach(trans => {
        if (typeof source === "undefined") {
            return
        }
        const newSource = trans({...file, source: source}, api, options)
        source = newSource || source
    })
    return source
};

export default transform

export const parser = "babylon"
