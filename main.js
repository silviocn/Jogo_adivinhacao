const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector(".screen1") // apenas para facilitar utilização no código (texto menor)
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() *10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', enterReset)

// Funções callback
function handleTryClick(event) {
  event.preventDefault() // evita que o padrão seja executado, que no caso do botão dentro do form é enviar (submit) o formulário

  const inputNumber = document.querySelector("#inputNumber")

  if (inputNumber.value > 10 || inputNumber.value <0 || inputNumber.value == ""){
      alert('Por favor, siga corretamente as instruções!')
      xAttempts--
  } else if (randomNumber == Number(inputNumber.value)) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick () {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() *10)
}

function toggleScreen (){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterReset(e) {
  if(e.key = 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}