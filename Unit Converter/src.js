const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById ("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click",function(){
    unitConverter()
})

function unitConverter(){
    const unit = inputEl.value
    const meterToFeet= unit * 3.281 
    const feetToMeter = unit / 3.281 
    const litersToGallons = unit *  0.264
    const gallonsToLiters = unit /  0.264
    const kilogramsToPounds = unit * 2.204
    const poundsToKilograms = unit  / 2.204
    lengthEl.innerHTML = `
    <p> ${unit} meters =  ${meterToFeet.toFixed(3)} feet | ${unit} feet = ${feetToMeter.toFixed(3)} meters</p>
    `
    volumeEl.innerHTML = `
    <p> ${unit} liters =  ${litersToGallons.toFixed(3)} gallons | ${unit} gallons = ${gallonsToLiters.toFixed(3)} liters</p>
    `
    massEl.innerHTML = `
    <p> ${unit} kilos =  ${kilogramsToPounds.toFixed(3)} pounds | ${unit} pounds = ${poundsToKilograms.toFixed(3)} kilos</p>
    `
}

