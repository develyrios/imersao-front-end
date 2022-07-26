/*
Atividade 13
Adicione a resposta na linha abaixo de cada exercício
Coloque todo o código do arquivo em uma IIFE.
Em todos os retornos, use o console.log para imprimir o resultado.
Use métodos de array e use let e const para variáveis.
*/

(function () {
/*
1 - Declare uma variável que contenha um array com 5 nomes de cidades em strings.
Imprima o tamanho desse array.
*/
    let cidades = ['Crato', 'Juazeiro', 'Barbalha', 'Fortaleza', 'Sobral']
    console.log(cidades.length)
/*
2 - Declare uma variável que contenha um array com 5 nomes de países em strings.
Adicione um país no começo do array.
Adicione um país no fim do array.
Imprima esse array.
*/

    let paises = ['Brasil', 'Cuba', 'Bolivia', 'Chile', 'Argentina']
    paises.unshift('Paraguai')
    paises.push('Uruguai')
    console.log(paises)

/*
3 - Declare uma variável que contenha um array com 5 nomes de livros em strings.
Remova um item no começo do array.
Remova um item no fim do array.
Imprima esse array.
*/

    let livros = ['A Arte Queer do Fracasso', 'Problemas de Gênero', 'Judith Butler e a Teoria Queer', 'História da Sexualidade', 'Foucault e a teoria Queer']
    livros.shift()
    livros.pop()
    console.log(livros)

/*
4 - Declare uma variável que contenha um array com 5 números entre 10 e 99.
Coloque em um novo array 3 desses números.
Imprima esse novo array.
*/

    let numeros = [10, 20, 30, 40, 99]
    let numeros2 = numeros.slice(0,3)
    console.log(numeros2)

/* 
5 - Declare uma variável que contenha um array com 5 vogais em strings.
Coloque esse array ao contrário e una todas essas letras em uma string.
Imprima em um console.log.
*/
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let vogaisJuntas = vogais.reverse().join(' ')
    console.log(vogaisJuntas)
})();