import {type Transform} from "jscodeshift"
import {formatCode} from "../utils/formatter"
import unBoolean from "./un-boolean"
import unUndefined from "./un-undefined"
import unInfinity from "./un-infinity"
import unNumericLiteral from "./un-numeric-literal"
import unSequenceExpression from "./un-sequence-expression"
import unVariableMerging from "./un-variable-merging"
import unBlock from "./un-block";
import unChainAssignment from "./un-chain-assignment";
import unBracketNotation from "./un-bracket-notation";
import unWhileLoop from "./un-while-loop";
import unReturn from "./un-return";
import unUseStrict from "./un-use-strict";
import unUseLessStatement from "./un-useless-statement";
import unConditionals from "./un-conditionals";
import smartRename from "./smart-rename";

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
        unChainAssignment,
        unBracketNotation,
        unWhileLoop,
        unReturn,
        unUseStrict,
        unUseLessStatement,
        unConditionals,
        smartRename,
    ]
    transformerQueue.forEach(transformer => {
        if (typeof source === "undefined") {
            return
        }
        console.log(`start running ${transformer.name}...`)
        const newSource = transformer({...file, source: source}, api, options)
        source = newSource || source
    })

    return formatCode(source)
};

export default transformer

export const parser = "babylon"
