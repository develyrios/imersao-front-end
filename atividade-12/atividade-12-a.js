/*
Atividade 12
Adicione a resposta na linha abaixo de cada exercício
Coloque todo o código do arquivo em uma IIFE.
Em todos os retornos, use o console.log para imprimir o resultado.
*/

(function () {
    /*
    1 - Use o operador typeof para verificar o tipo de uma string, um número e um booleano.
    */

    console.log (typeof "string")
    console.log (typeof 123)
    console.log (typeof true)

    /*
    2 - Crie uma função que recebe o argumento `curso` que recebe uma string.
    Crie uma variável constante dentro da função chamada `escola` que recebe o valor "Todas as Letras".
    Retorne a string concatenada com a variável `escola`. Exemplo: "Curso de JavaScript - Todas as Letras".
    Use template strings para o retorno.
    */

    function retornaCurso(curso) {
        const escola = "Todas as Letras";
        console.log(`Curso de ${curso} - ${escola}`);
    }

    retornaCurso("Dev Front-End")

    /*
    3 - Crie uma função que recebe o argumento `idade` que recebe um número
    e retorne uma string dizendo "Minha idade é `idade`". Use template strings para o retorno.
    */

    function retornaIdade(idade) {
        console.log(`Minha idade é ${idade}`);
    }

    retornaIdade(23)
})();