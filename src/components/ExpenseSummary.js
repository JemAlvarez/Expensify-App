import React from 'react'
import { connect } from 'react-redux'
import expensesTotal from '../selectors/expenses-total'
import visibleExpenses from '../selectors/expenses'
import numeral from 'numeral'

const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const expenseTotalFormatted = numeral(expensesTotal).format('$0,0.00')
    return (
        <h1>Viewing {expensesCount} {expenseWord} totalling {expenseTotalFormatted}</h1>
    )
}

const mapStateToProps = (state) => {
    return {
        expensesCount: visibleExpenses(state.expenses, state.filters).length,
        expensesTotal: expensesTotal(visibleExpenses(state.expenses, state.filters))
    }
}

export default connect(mapStateToProps)(ExpenseSummary)