import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 5000, createdAt: 15000 }))
store.dispatch(addExpense({ description: 'Rent bill', amount: 109500, createdAt: 9000 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 2100, createdAt: 7800 }))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))