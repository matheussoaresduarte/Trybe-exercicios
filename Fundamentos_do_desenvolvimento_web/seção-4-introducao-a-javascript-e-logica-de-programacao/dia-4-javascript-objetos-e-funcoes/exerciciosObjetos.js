let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
//================================================
//modelo refaturado como objeto

let player = {
    name : "Marta",
    lastName : "Silva",
    age : 34,
    medals : {
        golden : 2,
        silver : 3,
    }
}
console.log(player);

// CASO 2 - usando o for in

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names) {
    console.log(names[key]);
  };

  // CASO 3 - usando o for in

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
    console.log(key,":", car[key]);
  }

  