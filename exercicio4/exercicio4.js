// Dado um array de números inteiros, escreva uma função chamada sumOfSquares que:
// Use o método map para calcular o quadrado de cada número.
// Use o método reduce para somar todos os quadrados.

const numeros = [1, 2, 3, 4]

const quadradosDosNumeros = numeros.map(numero => numero ** 2);

console.log(quadradosDosNumeros);

const somaDosQuadrados = quadradosDosNumeros.reduce((acumulador, numero) => {return acumulador += numero})

console.log(somaDosQuadrados)