//Crie um irmão para elementoOndeVoceEsta.
let pai = document.getElementById("pai");
let newBrother = document.createElement("section").id = "novoIrmao";
newBrother.innerHTML = "OI pessoal";
pai.appendChild(newBrother);

//Crie um filho para elementoOndeVoceEsta.

let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
let sonOfElementoOndeVoceEsta = document.createElement("section").id ="NovoFilho";
sonOfElementoOndeVoceEsta.innerHTML = "eu sou o novo filho";
elementoOndeVoceEsta.appendChild(sonOfElementoOndeVoceEsta);

//Crie um filho para primeiroFilhoDoFilho

let primeiroFilhoDoFilho = document.getElementByIf("primeiroFilho");
let sonOfPrimeiroFilhoDoFilho = document.createElement('section').id = "filhoDoPrimeiroFilho";
sonOfPrimeiroFilhoDoFilho.innerHTML = "eu sou o filho do primeiro filho";
primeiroFilhoDoFilho.appendChild(sonOfPrimeiroFilhoDoFilho);

//A partir desse filho criado, acesse terceiroFilho.

let terceiroFilho = sonOfPrimeiroFilhoDoFilho
.parentElement
.parentElement
.nextElementSibling;

//============================================================