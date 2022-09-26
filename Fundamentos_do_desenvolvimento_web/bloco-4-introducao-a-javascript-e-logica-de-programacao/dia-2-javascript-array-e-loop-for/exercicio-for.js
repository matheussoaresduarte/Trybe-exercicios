// CASO 1 - usando o FOR

/* let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0 ; index< groceryList.length; index =+ 1){
    console.log(groceryList[index]);
} */

//CASO 2 - uso do For/of

//Exemplo 1

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5

//Exemplo 2

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

//Exemplo 3 

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

//Exemplo 4

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for( let nick of names) {
    console.log(nick);
}
