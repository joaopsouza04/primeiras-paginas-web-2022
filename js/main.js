let divBaixo = document.getElementById('baixos')
let divGuitarra = document.getElementById('guitarras')
let divTeclado = document.getElementById('teclados')
let imagem = document.getElementById('icon')

function mostraDivTodos() {
  divGuitarra.style.display = 'flex'
  divTeclado.style.display = 'flex'
  divBaixo.style.display = 'flex'
}

function escondeDivBaixo() {
  divGuitarra.style.display = 'none'
  divTeclado.style.display = 'none'
  divBaixo.style.display = 'flex'
}

function escondeDivGuitarra() {
  divBaixo.style.display = 'none'
  divTeclado.style.display = 'none'
  divGuitarra.style.display = 'flex'
}

function escondeDivTeclado() {
  divBaixo.style.display = 'none'
  divGuitarra.style.display = 'none'
  divTeclado.style.display = 'flex'
}

function coracao(imagem) {
  if (
    imagem.src ==
    'https://raw.githubusercontent.com/joaopsouza04/primeiras-paginas-web-2022/main/imagens/favorito.ico'
  ) {
    imagem.src =
      'https://raw.githubusercontent.com/joaopsouza04/primeiras-paginas-web-2022/main/imagens/favorito_cheio.ico'
  } else if (
    imagem.src ==
    'https://raw.githubusercontent.com/joaopsouza04/primeiras-paginas-web-2022/main/imagens/favorito_cheio.ico'
  ) {
    imagem.src =
      'https://raw.githubusercontent.com/joaopsouza04/primeiras-paginas-web-2022/main/imagens/favorito.ico'
  } else {
    imagem.src =
      'https://raw.githubusercontent.com/joaopsouza04/primeiras-paginas-web-2022/main/imagens/favorito_cheio.ico'
  }
}
