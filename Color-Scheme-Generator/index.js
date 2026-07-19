const seedColor = document.getElementById('seed-color');
const colorSelect = document.getElementById('color-selection')
const getColorBtn = document.getElementById('get-color-btn')
const colorList = document.getElementById('color-list')

function renderColors(colors){
    let htmlBody = ''
    
    colors.forEach(color => {
        htmlBody += 
        `
        <div class="box-color">
            <div 
                class="color" 
                style="background-color: ${color.hex.value}"
            >
            </div>
            <p>${color.hex.value}</p>
            
        </div>
        `
    })
    
    colorList.innerHTML = htmlBody
}

getColorBtn.addEventListener('click',function(){
    const mode = colorSelect.value
    const hex = seedColor.value.slice(1)
    
fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
        renderColors(data.colors)
    })
})





