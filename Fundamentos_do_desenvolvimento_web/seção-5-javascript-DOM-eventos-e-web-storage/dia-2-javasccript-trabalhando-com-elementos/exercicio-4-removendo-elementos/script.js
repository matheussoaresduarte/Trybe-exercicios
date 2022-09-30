let pai = document.getElementById('pai');
let todosOsFilhos = pai.childNodes;
for (let index = todosOsFilhos.length - 1; index >= 0; index -= 1) {
  let filhoAtual = todosOsFilhos[index];
  if (filhoAtual.id !== 'elementoOndeVoceEsta') {
    filhoAtual.remove();
  }
}
let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho'); // Recupera o elemento com o id segundoEUltimoFilhoDoFilho
segundoEUltimoFilhoDoFilho.remove(); // Remove o segundo filho do filho
