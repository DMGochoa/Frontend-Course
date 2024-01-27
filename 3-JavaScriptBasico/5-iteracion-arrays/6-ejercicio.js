/*
Ejercicio de analisis de trasacciones

Imagine que tiene una lista de transacciones finansieras y que usted desea
realizarvarias operaciones. Use las siguientes instrucciones como guia para
completar el ejercicio.
1. Calcular el balance total: Use `reduce` para realizar el calculo y mostrar
el balance total de todas las transacciones.
2. Buscar la mayor transaccion: Use `reduce` para encontrar la transaccion con
el mayor monto ingreso o egreso.
3. Filtrar compras: Use filter para obtener y mostrar las transacciones de
compras, es decir, aquellas con un monto negativo.
4. Encontrar la transaccion por descripcion: Use find para encontrar la
transaccion con la descripcion 'Pago de impuestos'.
5. Encontrar el indice de una transaccion por medio del valor.
6. Actualiza las descripciones: Para esto utiliza forEach para actualizar las
transacciones y poder anadir ingreso: o egreso: a la descripcion.
*/

const INPUT_MONEY = 'deposit';
const OUTPUT_MONEY = 'withdrawal';

const transactions = [
    {id: 1, amount: 5, type: OUTPUT_MONEY, description: 'Pago de impuestos'},
    {id: 2, amount: 2, type: INPUT_MONEY, description: 'Pago de nomina'},
    {id: 3, amount: 4, type: OUTPUT_MONEY, description: 'Pago de servicios'},
    {id: 4, amount: 2, type: INPUT_MONEY, description: 'Pago de nomina'},
    {id: 5, amount: 1, type: OUTPUT_MONEY, description: 'Pago de servicios'},
    {id: 6, amount: 5, type: INPUT_MONEY, description: 'Pago de nomina'},
    {id: 7, amount: 5, type: INPUT_MONEY, description: 'Pago de nomina'},
];

// 1. Calcular el balance total: Use `reduce` para realizar el calculo y mostrar

function totalBalance (transactions) {
    const total = transactions.reduce((total, transaction) => {
        switch (transaction.type) {
            case OUTPUT_MONEY:
                total -= transaction.amount;
                break;
            case INPUT_MONEY:
                total += transaction.amount;
                break;
        }
        return total;
    }, 0);
    return total;
}

console.log(totalBalance(transactions));

// 2. Buscar la mayor transaccion: Use `reduce` para encontrar la transaccion con

function maxTransaction (transactions) {
    const max = transactions.reduce((max, transaction) => {
        return transaction.amount > max.amount ? transaction : max;
    }, transactions[0]);
    return max;
}

console.log(maxTransaction(transactions));

// 3. Filtrar compras: Use filter para obtener y mostrar las transacciones de
// compras, es decir, aquellas con un monto negativo.

function filterPurchases (transactions) {
    const purchases = transactions.filter((transaction) => transaction.type === OUTPUT_MONEY);
    return purchases;
}

console.log(filterPurchases(transactions));

// 4. Encontrar la transaccion por descripcion: Use find para encontrar la
// transaccion con la descripcion 'Pago de impuestos'.

function findTransaction (transactions, description) {
    const transaction = transactions.find((transaction) => transaction.description === description);
    return transaction;
}
console.log("##############################################")
console.log(findTransaction(transactions, 'Pago de impuestos'));

// 5. Encontrar el indice de una transaccion por medio del valor.

function findIndexTransaction (transactions, amount) {
    const index = transactions.findIndex((transaction) => transaction.amount === amount);
    return index;
}

console.log(findIndexTransaction(transactions, 4));


// 6. Actualiza las descripciones: Para esto utiliza forEach para actualizar
// las transacciones y poder anadir ingreso: o egreso: a la descripcion.

function updateDescription (transactions) {
    transactions.forEach((transaction) => {
        transaction.description = `${transaction.type}: ${transaction.description}`;
    });
    return transactions;
}
console.log(updateDescription(transactions));
