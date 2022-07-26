// Atividade 11
// Adicione a resposta na linha abaixo de cada exercício

// Utilize a tabela do link para auxiliar no exercício 1 e 2:
// http://www.prosangue.sp.gov.br/artigos/quem_doa_pra_quem.html

// 1 - Crie uma função que recebe o argumento `tipoSanguineo` que recebe uma string
// e faça uma condicional com if para retornar uma string falando para qual tipo sanguíneo o tipo recebido doa.
// Faça para tipo `A+`, `A-` e caso a função receba outro tipo sanguíneo, retornar que não está em nossa base.
// Exemplo se receber A+: "A+ doa para A+ e B+".

function tipoSanguineo (sangue) {
    if (sangue === 'A+') {
        return sangue + ' doa para A+ e AB+.';
    }

    else if (sangue === 'A-') {
        return sangue + ' doa para A+, A-, AB+ e AB-.';
    }

    else {
        return 'O tipo sanguíneo ' + sangue + ' não está na nossa base de dados.';
    }
}

tipoSanguineo ('A+')


// 2 - Crie uma função que recebe o argumento `tipoSanguineo` que recebe uma string
// e faça uma condicional com switch para retornar uma string falando para qual tipo sanguíneo o tipo recebido doa.
// Faça para tipo `B+`, `B-` e caso a função receba outro tipo sanguíneo, retornar que não está em nossa base.

function tipoSanguineo (sangue) {
    switch (sangue) {
        case 'B+':
            return 'B+ doa para B+ e AB+.';
            break;

        case 'B-':
            return 'B- doa para B+, B-, AB+ e AB-.';
            break;

        default:
            return 'Esse tipo sanguíneo não está na nossa base de dados.';
    }
}

tipoSanguineo ('A+')

// 3 - Crie uma laço de repetição com for que se inicia com 5 e incrementa de um em um até chegar em 15.

for (var contador = 5; contador <15; contador++) {
    console.log (contador);
}