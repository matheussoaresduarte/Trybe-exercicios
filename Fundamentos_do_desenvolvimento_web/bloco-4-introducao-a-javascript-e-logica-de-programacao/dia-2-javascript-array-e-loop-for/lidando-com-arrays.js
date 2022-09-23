/*
A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

Utilizando for, descubra qual o maior valor contido no array e imprima-o;

Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

Utilizando for, descubra qual o menor valor contido no array e imprima-o;

Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2. */



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
let media =0;
let highNumber = 0;
let impar = 0;
let lowerNumber = numbers[0];
let finalArray = [];


for( let index = 0; index < numbers.length; index += 1) {
    console.log( numbers[index] );
    sum = sum + numbers [index]; // soma do array
    media = sum / numbers.length ; // realização da media
//---------------------------------------------------------------
if(numbers[index] % 2 !== 0){  //verificação do array para descobriros numeros impares
    impar = impar + 1;
}else {
    console.log("nenhum numero impar encontrado");
}
//----------------------------------------------------------------------------
if(numbers[index] > highNumber) { // condicional para descobrir qual é o numero maior entre todo array
    highNumber = numbers[index];
}
if(numbers[index] <= lowerNumber) { //condicional para descobrir o menor valor no arry numbers
    lowerNumber = numbers[index];

}

}
if(media > 20){
    console.log("valor maior que 20!!");
}else {
    console.log("valor menor que 20!!");
}

for (let index = 1; index <= 25; index += 1) { // divisão de cada resultado por 2
    finalArray.push(index);
    console.log(index / 2);
}

console.log("a soma do array é:", sum );
console.log("a média do array é:", media );
console.log("o maior numero do array é:", highNumber );
console.log("o total de numeros impares no array é:", impar);
console.log("o menor numero do array é:", lowerNumber);
console.log(finalArray);




