export default ( visibleExpenses ) => {
    return visibleExpenses.map ( ( expense ) => {
        return expense.amount
    } ).reduce ( ( total, amount ) => total + amount, 0 )
}