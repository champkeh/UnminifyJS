import {AssignmentExpression, ASTPath, Transform} from "jscodeshift"
import {formatCode} from "@/utils/formatter"
import {nodeIsLiteral} from "@/utils/node-helper"


const transformer: Transform = function unChainAssignment(file, api) {
    const {j} = api
    const root = j(file.source)

    root
        .find(j.ExpressionStatement, {
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                right: {
                    type: 'AssignmentExpression',
                    operator: '=',
                },
            },
        })
        .forEach(path => {
            const stack: ASTPath<AssignmentExpression>[] = []

            // 找到最右边的赋值表达式
            let rightestAssignmentExprPath = path.get('expression')
            stack.push(rightestAssignmentExprPath)
            while (rightestAssignmentExprPath.get('right').value.type === 'AssignmentExpression' && rightestAssignmentExprPath.get('right').value.operator === '=') {
                rightestAssignmentExprPath = rightestAssignmentExprPath.get('right')
                stack.push(rightestAssignmentExprPath)
            }

            let valueNode = rightestAssignmentExprPath.get('right').value

            // 只处理字面量的赋值
            if (!nodeIsLiteral(valueNode)) {
                return
            }

            const stats = []
            while (stack.length) {
                const assignExpr = stack.pop()!.value
                assignExpr.right = valueNode
                const stat = j.expressionStatement(assignExpr)
                stats.push(stat)
            }

            j(path).insertBefore(stats)
            path.prune()
        })

    return formatCode(root.toSource())
}

export default transformer

export const parser = "babylon"
