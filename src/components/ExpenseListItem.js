import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
import { startRemoveExpense } from '../actions/expenses'

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div className="list-item__container">
        <Link to={`/edit/${id}`} className="list-item">
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
        </Link>
        <div className="button-container">
            <button
                className="button button--secondary"
                onClick={() => {
                    dispatch(startRemoveExpense({ id }))
                }}
            >
                Remove Expense
        </button>
        </div>
    </div>
)

export default connect()(ExpenseListItem)