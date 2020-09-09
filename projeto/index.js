console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')

const readline = require('readline-sync')
const resposta = readline.question("Insira o valor:")

console.log(resposta);