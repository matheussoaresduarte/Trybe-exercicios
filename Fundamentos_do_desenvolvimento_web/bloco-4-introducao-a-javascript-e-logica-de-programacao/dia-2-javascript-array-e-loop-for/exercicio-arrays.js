// CASO 1 - pegando o valor do array atravez do indice
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[2];


console.log(menuServices);

//CASO 2 - usando indexOf() para achar o valor do indice
 
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf("portfólio");

console.log(indexOfPortfolio);

// CASO 3 - usando o comando .push para adicionar um valor p/array

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push("contato");
console.log(menu3);