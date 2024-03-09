const transactions = [
    {id: 1, description:'Grocery Shopping', amount: -50},
    {id: 1, description:'Salary Deposit', amount: 2000},
    {id: 1, description:'Utility Bill Payment', amount: -100},
    {id: 1, description:'Online Purchase', amount: -30},
]

// 1. Calculate Total Balance

const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0) //acomulacion por sumatorias

console.log(totalBalance)

// 2. Find the Largest Transaction (Income or Expense)

const largestTransaction = transactions.reduce((maxTransaction, transaction) =>{
    return Math.abs(transaction.amount)> Math.abs(maxTransaction.amount)? transaction : maxTransaction // valor absoluto
}, transactions[0]) 

console.log('Largest Transaction: ', largestTransaction)


const purchaseTransactions = transactions.filter(transaction => transaction.amount < 0) // filtar transacciones

console.log ('Las transacciones de compra son: ', purchaseTransactions )

// 4. Find a transaction by Description

const specificTransaction = transactions.find(transaction => transaction.description === 'Online Purchase' )

console.log ('El resultado de la busqueda es: ', specificTransaction )

// 5. Find the index of a Transaction by Amount

const indextransactionWithAmount = transactions.findIndex(transaction=> transaction.amount === -30)

console.log ('El indice de la transaccion es: ', indextransactionWithAmount )

transactions.forEach(transaction=>{
    if(transaction.amount<0){
        transaction.description=`Expense: ${transaction.description}`
    }else{
        transaction.description=`Income: ${transaction.description}`
    }
})
console.log('Udated Transactions: ',transactions)