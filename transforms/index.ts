import {type Transform} from "jscodeshift"
import unBoolean from "./un-boolean"
import unUndefined from "./un-undefined"
import unInfinity from "./un-infinity"
import unNumericLiteral from "./un-numeric-literal"
import unSequenceExpression from "./un-sequence-expression"
import unVariableMerging from "./un-variable-merging"
import unBlock from "./un-block";

const transformer: Transform = (file, api, options) => {
    let source = file.source

    const transformerQueue = [
        unBoolean,
        unUndefined,
        unInfinity,
        unNumericLiteral,
        unBlock,
        unVariableMerging,
        unSequenceExpression,
    ]
    transformerQueue.forEach(transformer => {
        if (typeof source === "undefined") {
            return
        }
        const newSource = transformer({...file, source: source}, api, options)
        source = newSource || source
    })
    return source
};

export default transformer

export const parser = "babylon"
