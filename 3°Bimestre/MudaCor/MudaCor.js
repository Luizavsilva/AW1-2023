let nome = prompt("Qual é o seu nome?")
let corFavorita = prompt("Qual é a sua cor favorita?")

var resultado = (`Seu nome é ${nome} e sua cor favorita é ${corFavorita}.`)

var mudanca = document.querySelector("#pessoa")

mudanca.innerText = resultado

mudanca.style.color = corFavorita
mudanca.style.fontSize = "50px"

mudanca.style.textAlign = "center"