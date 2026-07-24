let container = document.querySelector('.container')
let randomBtn = document.querySelector('.randomBtn')
let applyBtn = document.querySelector('.applyBtn')
let colorInput = document.querySelector('#colorInput')
let currentColorValue = document.querySelector('.currentColorValue')


const colorArray = ['red','green','blue','white','black','gray','yellow','pink','tomato','lightseagreen','acqua','cyan','coral','lightcoral']


const randomColorGenerate = function(){
    let randomNumber = Math.floor(Math.random() * colorArray.length)
    return colorArray[randomNumber]
}

let changeColor = function (color) {
    container.style.backgroundColor = color;
    currentColorValue.innerText = color
}

let handleApplyBtnClick = function () {

    let color = colorInput.value
    changeColor(color)
}

function handleRandomBtnClick(){
   let color = randomColorGenerate()
   changeColor(color)
}


applyBtn.addEventListener('click', handleApplyBtnClick)
randomBtn.addEventListener('click',handleRandomBtnClick)


