import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import expensesTotal from '../selectors/expenses-total'
import visibleExpenses from '../selectors/expenses'
import numeral from 'numeral'

const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const expenseTotalFormatted = numeral(expensesTotal).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{expenseTotalFormatted}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expensesCount: visibleExpenses(state.expenses, state.filters).length,
        expensesTotal: expensesTotal(visibleExpenses(state.expenses, state.filters))
    }
}

export default connect(mapStateToProps)(ExpenseSummary)