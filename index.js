const botaoAlterarTema = document.getElementById('botao-alterar-tema');

const body = document.querySelector('body');

const imagemBotaoTrocaDeTema = document.querySelector('.imagem-botao')

botaoAlterarTema.addEventListener('click', () => {

  const modoEscuroEstaAtivo = body.classList.contains('modo-escuro');

body.classList.toggle('modo-escuro'); //usando esse, não precisa usar o remove e o add.

  if (modoEscuroEstaAtivo) {

   // body.classList.remove('modo-escuro');

    imagemBotaoTrocaDeTema.setAttribute('src', './src/imagens/sun.png')

  } else {

   // body.classList.add('modo-escuro');

    imagemBotaoTrocaDeTema.setAttribute('src', './src/imagens/moon.png')

  }
});

