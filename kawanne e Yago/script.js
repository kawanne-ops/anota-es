function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.innerText = '💖';

  coracao.style.position = 'fixed';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.top = '100vh';
  coracao.style.fontSize = (Math.random() * 20 + 20) + 'px';
  coracao.style.opacity = Math.random();
  coracao.style.animation = 'subir 5s linear forwards';

  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

setInterval(criarCoracao, 300);
function enviarMensagem() {
  const input = document.getElementById('mensagem');
  const texto = input.value.trim();

  if (texto !== "") {
    const lista = document.getElementById('listaMensagens');
    const novaMsg = document.createElement('p');
    novaMsg.innerText = texto;
    lista.appendChild(novaMsg);
    input.value = "";
  }
}
function enviarMensagem() {
  const input = document.getElementById('mensagem');
  const texto = input.value.trim();

  if (texto !== "") {
    const lista = document.getElementById('listaMensagens');
    const novaMsg = document.createElement('p');
    novaMsg.innerText = texto;
    lista.appendChild(novaMsg);

    // Salvar no Local Storage
    salvarMensagemNoLocalStorage(texto);

    input.value = "";
  }
}
function salvarMensagemNoLocalStorage(mensagem) {
  // Pega as mensagens atuais no storage, ou cria array vazio
  let mensagens = JSON.parse(localStorage.getItem('mensagens')) || [];

  mensagens.push(mensagem);

  localStorage.setItem('mensagens', JSON.stringify(mensagens));
}

function carregarMensagensDoLocalStorage() {
  let mensagens = JSON.parse(localStorage.getItem('mensagens')) || [];
  const lista = document.getElementById('listaMensagens');

  mensagens.forEach(msg => {
    const p = document.createElement('p');
    p.innerText = msg;
    lista.appendChild(p);
  });
}
// Quando a página carregar, executa a função para mostrar as mensagens salvas
window.onload = function() {
  carregarMensagensDoLocalStorage();
};
