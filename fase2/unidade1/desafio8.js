const user = {
    nome:'Marcos',
    transactions:[],
    balance: 0
}

//Adicionar transações
function createTransation(type, value){
        user.transactions.push({
            type: type,
            value: value
    })
    updateBalance(type,value)
}


const credit = 'credit'
const debit = 'debit'

function updateBalance(type,value){
    if(type==credit){
        user.balance += value
    }else{
        user.balance -= value
    }
}

createTransation(credit, 600.0)
createTransation(credit, 900.0)
createTransation(debit, 600.0)
createTransation(credit, 400.0)
createTransation(debit, 100.0)
createTransation(debit, 150.0)
createTransation(debit, 600.0)
createTransation(debit, 80.0)
console.log(user)



/**
 * Relatórios
*/
// console.log(user.transactions.length)

// Função que retorna a maior transação de cada tipo
function getHigherTransactionByType(credit,debit){
    let newTransaction = {type:credit/debit,value:0}
    for(transaction of user.transactions){
        if(transaction.value>newTransaction.value&&transaction.type==credit){
            newTransaction=transaction
        }
    }
    return newTransaction
}

const higerDebit = getHigherTransactionByType(debit)
console.log(higerDebit)
const higerCredit = getHigherTransactionByType(credit)
console.log(higerCredit)
    
// Função que retorna o valor médio de todas as transações
function getAverageTransactionValue(){
    let valorMedio = 0

    for(i=0;i<user.transactions.length;i++){
        valorMedio = (valorMedio + user.transactions[i].value)
    }
    return (valorMedio/user.transactions.length).toFixed(2)
}
const valorMedio = getAverageTransactionValue()
console.log(valorMedio)

// Função que conta quantas operações de cada tipo foram feitas
function getTransactionsCount(){
    let transactionsCount = {credit: 0, debit: 0}
    
    for(transaction of user.transactions){
        if(transaction.type==credit){      
            transactionsCount.credit++
        }else{
            transactionsCount.debit++
        }
    }
    return transactionsCount
}

const transactionsCount = getTransactionsCount()
console.log(transactionsCount)
