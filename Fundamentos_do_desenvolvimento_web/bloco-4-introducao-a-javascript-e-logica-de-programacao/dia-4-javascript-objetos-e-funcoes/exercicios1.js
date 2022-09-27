// CASO 1 - 

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log("Bem vinda,", info.personagem) ; 

  //=======================================================================
  // CASO 2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

  info["recorrente"] = "sim";

  console.log(info["recorrente"]);

  //=======================================================================
 // CASO 3 - Faça um for/in que mostre todas as chaves do objeto. 

for (let key in info) {
    console.log(key);
}

// CASO 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

for (let index in info) {
    console.log(info[index]);
}

// CASO 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.

let result = []

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "sim"
}

for (let index in info){
    if (info[index] === info2[index]) {
        result.push("ambos recorrentes");
    } else { 
    result.push(info[index] + " e " + info2[index]);
}
}
console.log(result);

