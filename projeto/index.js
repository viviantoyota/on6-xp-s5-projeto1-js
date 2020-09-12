console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')

const {produtos}=db

produtos.sort((a, b) => b.preco - a.preco)
console.table(produtos)

const readline = require('readline-sync')

const array = new array ()
    const idProduto
    const procurar
    const items
    const vaucher
    const quantidadeDesejada

const comprar = () => {
const identificacao = parseFloat(readline.question("Insira o id do produto: "))

for (id = 0; id < 1000;){
    procurar = produtos.find(item => item.id === idProduto)
    if (procurar) {
        
       return quantidadeDesejada = parseFloat(readline.question("Qual a quantidade desse produto você quer?: "))
    //Nessa parte acima não sabia se ja podia chamar o readline ou se tinha que colocar uma variável se fosse o id existente
    } else {
        
        idProduto = parseInt(readline.question('Id não encontrado, tente novamente: '))
    }
}

const continuarComprando = parseFloat(readline.question("Continuar comprando? S ou N: "))
const aindaComprar = continuar.toLowerCase() 

if (continuarComprando === "n") {
    promoCode = parseInt(readline.question('Digite o valor do seu cupom de desconto: '))        

} else if (continuarComprando = S ){
    
    return identificacao = parseFloat(readline.question("Insira o id do produto: "))

}else (continuarComprando = "s")

    return vaucher = parseFloat(readline.question("Possui Vaucher de Desconto?: "))
    //Nessa parte também fiquei na dúvida de pode fazer isso de chamar um objeto dentro de um if else
}

/*Cintia, estava fazendo meu projeto quinta e meu output começou a dar um problema que eu não consegui identificar,
cheguei a procurar no Google o que poderia ser esse erro e eu não consegui encontrar uma solução...
a única parte que rodou do projeto foi até a parte da tabela dos prdutos e o resto não, muito estranho!
mandei ja mensagem pra Ceci explicando o erro e mandei um print do erro que aparece pra mim ao tentar rodar. 
Com esse problema ficou muito complicado eu saber o que de fato funciona ou não no meu código, então não finalizei
por não saber como prosseguir sem conseguir rodar uma linha...to super preocupada e super chateada de não poder entregar
o projeto!! vou buscar ajuda pra tentar resolver, vi alguns comentários no google que esse erro pode ter a ver com
meu windows, vi de falarem pra mudar pra Linux mas eu não queria... se eu puder mandar o print do erro que aparece
aqui, me passa seu email ou algo se você conseguir me ajudar.. to meio desesperada de não conseguir usar meu vscode nas
próximas aulas!!! vou ver com a Ceci se ela também pode me ajudar.
*/


