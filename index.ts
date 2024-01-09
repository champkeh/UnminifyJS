import {type Transform} from "jscodeshift"
import {formatCode} from "./utils/formatter"
import unBoolean from "./transforms/un-boolean"
import unUndefined from "./transforms/un-undefined"
import unInfinity from "./transforms/un-infinity"
import unNumericLiteral from "./transforms/un-numeric-literal"
import unSequenceExpression from "./transforms/un-sequence-expression"
import unVariableMerging from "./transforms/un-variable-merging"
import unBlock from "./transforms/un-block";
import unChainAssignment from "./transforms/un-chain-assignment";
import unBracketNotation from "./transforms/un-bracket-notation";
import unWhileLoop from "./transforms/un-while-loop";
import unReturn from "./transforms/un-return";
import unUseStrict from "./transforms/un-use-strict";
import unUseLessStatement from "./transforms/un-useless-statement";
import unConditionals from "./transforms/un-conditionals";
import smartRename from "./transforms/smart-rename";
import unFlipComparisons from "./transforms/un-flip-comparisons";
import assignInIfTest from "./transforms/assign-in-if-test";


const transformer: Transform = (file, api, options) => {
    let source = file.source

    /**
     * 对 transformer 执行顺序有要求：
     */
    const transformerQueue = [
        unUseStrict,
        unUseLessStatement,
        unBoolean,
        unUndefined,
        unInfinity,
        unNumericLiteral,
        unVariableMerging,
        unBlock,
        unSequenceExpression,
        unConditionals,
        assignInIfTest,
        unBlock,
        unChainAssignment,
        unBracketNotation,
        unWhileLoop,
        unReturn,
        smartRename,
        unFlipComparisons,
    ]
    let i = 0
    transformerQueue.forEach(transformer => {
        i++
        if (typeof source === "undefined") {
            return
        }

        // console.log(`${i}/${transformerQueue.length}: ${transformer.name}`)
        const newSource = transformer({...file, source: source}, api, options)
        source = newSource || source
    })

    return formatCode(source)
};

export default transformer

export const parser = "babylon"
