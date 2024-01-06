import {type Transform} from "jscodeshift"
import {format} from "../utils/formatter"
import unBoolean from "./un-boolean"
import unUndefined from "./un-undefined"
import unInfinity from "./un-infinity"
import unNumericLiteral from "./un-numeric-literal"
import unSequenceExpression from "./un-sequence-expression"
import unVariableMerging from "./un-variable-merging"
import unBlock from "./un-block";
import unAssignmentExpression from "./un-assignment-expression";
import unBracketNotation from "./un-bracket-notation";
import unWhileLoop from "./un-while-loop";
import unReturn from "./un-return";
import unUseStrict from "./un-use-strict";
import unNoValidStatement from "./un-novalid-statement";
import unConditionals from "./un-conditionals";

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
        unAssignmentExpression,
        unBracketNotation,
        unWhileLoop,
        unReturn,
        unUseStrict,
        unNoValidStatement,
        unConditionals,
    ]
    transformerQueue.forEach(transformer => {
        if (typeof source === "undefined") {
            return
        }
        const newSource = transformer({...file, source: source}, api, options)
        source = newSource || source
    })

    return format(source)
};

export default transformer

export const parser = "babylon"
