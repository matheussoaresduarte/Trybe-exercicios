/* 
Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
 */

// PASSO 1 - Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
 let h1BodySon = document.createElement("h1");
 h1BodySon.innerHTML = "Exercício - JavaScript DOM";
  document.body.appendChild(h1BodySon);

 //PASSO 2 - Adicione a tag main com a classe main-content como filho da tag body;
 let mainBodySon = document.createElement("main");
 mainBodySon.className = "main-content";
 document.body.appendChild(mainBodySon);

 //PASSO 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let mainSon = document.createElement("section")
mainSon.className = "center-content";
mainSon.innerHTML = "eu sou o filho da main";
mainBodySon.appendChild(mainSon);

//PASSO 4 -  Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
 let paragraph = document.createElement("p");
 paragraph.innerHTML = "paragrafo filho";
 mainSon.appendChild(paragraph);

 //PASSO 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
 let leftMainSon = document.createElement("section");
 leftMainSon.className = "left-content";
 leftMainSon.innerHTML = "eu sou o filho da main da esquerda";
 mainBodySon.appendChild(leftMainSon);

 //PASSO 6 -  Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let rightMainSon = document.createElement("section");
rightMainSon.className = "right-content";
rightMainSon.innerHTML = "eu sou o filho da main da direita";
mainBodySon.appendChild(rightMainSon);

//PASSO 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let image = document.createElement("img");
image.src = "https://picsum.photos/200";
image.className = "small-image";
leftMainSon.appendChild(image);

// PASSO 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let list = document.createElement("ul");
rightMainSon.appendChild(list);
for (let index = 1; index < 11; index += 1 ){
    let li = document.createElement("li");
    li.innerHTML = index;
    list.appendChild(li);    
}

//PASSO 9 - Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let index = 1; index <= 3; index += 1){
    let tagH3 = document.createElement("h3");
     tagH3.innerHTML = "H3";
    mainBodySon.appendChild(tagH3);
}

// ===Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:===

// Adicione a classe title na tag h1 criada;
h1BodySon.className = "title";

//Adicione a classe description nas 3 tags h3 criadas;
 let classH3MainBodySon = document.getElementsByTagName("h3");
 for (let index = 0; index < classH3MainBodySon.length; index += 1){
    classH3MainBodySon[index].className ="description";
 } 

//Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
mainBodySon.removeChild(leftMainSon);

//Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

let CentralizedRightMainSon = document.getElementsByClassName("right-content")[0];
CentralizedRightMainSon.style.marginRight = "auto";

//Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
list.lastChild.remove();
list.lastChild.remove();
 
