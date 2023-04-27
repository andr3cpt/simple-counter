// Select the main elements from the DOM

const counter = document.querySelector('.counter')
const counterDisplay = document.querySelector('.counter-display')
const counterControls = document.querySelector('.counter-controls')

// Set the initial display value to 0

counterDisplay.innerText = '0'

// Create the minus, plus and reset buttons

const minusBtn = document.createElement('div')
minusBtn.classList.add('minus-btn')
minusBtn.innerText = '-'
counterControls.appendChild(minusBtn)

const plusBtn = document.createElement('div')
plusBtn.classList.add('plus-btn')
plusBtn.innerText = '+'
counterControls.appendChild(plusBtn)

const resetBtn = document.createElement('div')
resetBtn.classList.add('reset-btn')
resetBtn.innerText = 'reset'
counterControls.appendChild(resetBtn)

// Initialize the counter variable to 0

let count = 0

// Create functions to decrease, increase and reset the counter

function countDown() {
    if (count !== 0) {  // Prevents the counter from going below 0
        count--
    } 
}

function countUp() {
    count++
}

function reset() {
    count = 0
}

// Create the event listeners for when each button is clicked

minusBtn.addEventListener('click', () => {
    countDown()
    counterDisplay.textContent = count
})

plusBtn.addEventListener('click', () => {
    countUp()
    counterDisplay.textContent = count
})

resetBtn.addEventListener('click', () => {
    reset()
    counterDisplay.textContent = count
})