// Atividade 10
// Adicione a resposta na linha abaixo de cada exercício

// 1 - Crie uma função que recebe o argumento `nome` e retorne uma mensagem escrita "Boas vindas `nome`".

function boasVindas(nome){
    return `Boas vindas ${nome}`;
}

boasVindas('Bev')

// 2 - Crie uma função para calcular troco, onde o primeiro argumento é o valor a ser pago e o segundo é o valor pago pelo cliente em dinheiro.
// Retorne o troco.

function troco(preco,valorPago){
    return valorPago - preco;
}

troco(35,50)

// 3 - Declare uma variável chamada `valor1` que receba o número 2 e a variável `valor2` que receba o número 3.
// Compare se ambos valores são iguais a 2.
// Depois compare se um dos valores é igual a 2.
// Escreva o retorno abaixo.

var valor1 = 2
var valor2 = 3
valor1 === 2 && valor2== 2
false
valor1 === 2 || valor2 === 2
true

// 4 - Declare uma variável chamada `valor3` que receba o número 4.
// Compare se a variável `valor3` é diferente da variável `valor2`.
// Escreva o retorno abaixo.

var valor3 = 4
valor3 != valor2
true