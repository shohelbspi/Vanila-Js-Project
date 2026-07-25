
let numberContainer = document.querySelector('.numberContainer')
let timerValue = document.querySelector('.timerValue')
let scoreValue = document.querySelector('.scoreValue')
let targetValue = document.querySelector('.targetValue')

let circleNumber = 76
let timer = 10
let target;

generateNumbers()
generateTarget()
startTimer()

function restartGame() {
    timerReset();
    generateTarget();
    generateNumbers();
    scoreValue.innerText = 0;
}

function timerReset() {
    timerValue.innerText = timer
    timer = 10;
}

function generateNumbers() {
    numberContainer.innerHTML = ''
    for (let i = 0; i <= circleNumber; i++) {
        let divElem = document.createElement('div')
        divElem.className = 'circle'

        let number = Math.ceil(Math.random() * 10)

        divElem.innerHTML = number
        numberContainer.append(divElem)
    }

}




function startTimer() {
    setInterval(() => {
        if (timer <= 0) {
            numberContainer.innerHTML = `
                <div>Game Over 
                <button onclick=restartGame()>Reset Game</button>
                </div>
                `;
            return;
        }
        timer--;
        timerValue.innerText = timer;
    }, 1000);
}



function generateTarget() {
    target = Math.ceil(Math.random() * 10)
    targetValue.innerText = target;
}



numberContainer.addEventListener('click', function (event) {
    if (event.target.className === 'circle') {
        let number = Number(event.target.innerText);
        console.log(number);


        if (target === number) {
            let sv = Number(scoreValue.innerText)
            sv += 10
            scoreValue.innerText = sv

        }
    }
    generateTarget()
})
