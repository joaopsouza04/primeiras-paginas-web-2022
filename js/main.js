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

function colorirMundo() {
  if (imagem == a) {
    imagem = a
  } else {
    imagem = a
  }
}
