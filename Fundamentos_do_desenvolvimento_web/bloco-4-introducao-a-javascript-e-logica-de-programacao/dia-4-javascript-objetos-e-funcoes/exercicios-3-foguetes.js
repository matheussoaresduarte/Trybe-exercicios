//Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [ // propriedade LivrosFavoritos é um array, sua posição [0] contem um objeto, apos acessar a posição do indice ai sim voce podera acessar o objeto, titulo, autor e editora.
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',          
        editora: 'Tordesilhas',
      },
    ],
  };

  // CASO 1 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

  let message  = "O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " Se chama " + leitor.livrosFavoritos[0].titulo + ".";

  //console.log(message);

//===========================================================================================
// CASO 2 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
})
//console.log(leitor.livrosFavoritos);

//===========================================================================================
// CASO 3 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

let favoriteBooksQtd = 0;

for ( let index of leitor.livrosFavoritos) {
    favoriteBooksQtd += 1; 
}
console.log("Julia tem",favoriteBooksQtd, "livros favoritos");
