// Números: FizzBuzz

// Implemente uma função chamada fizzBuzz que recebe um número inteiro n e retorna um array com os
// números de 1 a n, mas:

// Substitua números
// divisíveis por 3 por
// "Fizz".

// Substitua números
// divisíveis por 5 por
// "Buzz".

// Substitua números
// divisíveis por 3 e 5
// por "FizzBuzz".

// Exemplo de entrada:

// console.log(fizzBuzz(15));

// Saída esperada:

// [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]


function criandoLista(ultimoNumero){
    let listaDeNumeros = [];
    for (let i = 1; i < ultimoNumero + 1; i++){
        listaDeNumeros.push(i)
    }
    return listaDeNumeros
}

function fizzBuzz(numero){
    const listaDeNumeros = criandoLista(numero);

    const listaAtualizada = listaDeNumeros.map((item) => {
        if (validarNumeroDivisivel(item, 3) && validarNumeroDivisivel(item, 5)){
            return item = "Fizzbuzz"
        } else if (validarNumeroDivisivel(item, 3)){
            return item = "Fizz"
        } else if (validarNumeroDivisivel(item, 5)){
            return item = "Buzz"
        } else {
            return item = item
        }
    })
    
    console.log(listaAtualizada)
}

fizzBuzz(15);


function validarDivisaoPorTresECinco(valor) {
    return valor % 3 === 0 && valor % 5 === 0;
}

function validarNumeroDivisivel(numeroDivisivel, numeroDivisor){
    return numeroDivisivel % numeroDivisor === 0;
}