export default (expenses) => {
    const amountsArray = expenses.map(expense => expense.amount)
    return amountsArray.reduce((total, amount) => total + amount, 0) / 100
}