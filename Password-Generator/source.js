const characters = [
  "A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X","Y", "Z",
  "a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x","y", "z",
  "0", "1", "2", "3", "4", "5","6", "7", "8", "9",
  "~", "`", "!", "@", "#", "$","%", "^", "&", "*", "(", ")",
  "_", "-", "+", "=","{", "[", "}", "]",
  ",", "|", ":", ";","<", ">", ".", "?","/"
]

let firstPasswordEL = document.getElementById("firstpassword-el")
let secondPasswordEL = document.getElementById("secondpassword-el")
let lengthInput = document.getElementById("length-input-el")

function passwordGenerator() {
  let length = Number(lengthInput.value)
  let firstPassword = ""
  let secondPassword = ""
  for (let i = 0; i < length; i++){
    let firstRandomIndex = Math.floor(Math.random() * characters.length)
    let secondRandomIndex = Math.floor(Math.random() * characters.length)

    firstPassword += characters[firstRandomIndex]
    secondPassword += characters[secondRandomIndex]
  }
    firstPasswordEL.textContent = firstPassword
    secondPasswordEL.textContent = secondPassword
}
function copyPassword(element) {
  navigator.clipboard.writeText(element.textContent)
  alert("Password coppied!")
}



passwordGenerator()
