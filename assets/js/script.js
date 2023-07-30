// Select the main elements from the DOM

const counter = document.querySelector('.counter')
const counterDisplay = document.querySelector('.counter-display')
const counterControls = document.querySelector('.counter-controls')

// Set the initial display value to 0

counterDisplay.innerText = '0'

// Declare function to create the minus, plus and reset buttons

function createBtn(tagName, className, innerText) {
    var element = document.createElement(tagName)
    element.classList.add(className)
    element.innerText = innerText
    counterControls.appendChild(element)
}

// Create individual buttons

createBtn('div', 'minus-btn', '-')
createBtn('div', 'plus-btn', '+')
createBtn('div', 'reset-btn', 'reset')

// Initialize the counter variable to 0

let count = 0

// Create eventListeners from the parent component

counterControls.addEventListener('click', (e) => {
    if (e.target.innerText === '-') {
        if (count !== 0) {  // Prevents the counter from going below 0
            count--
        }
    } else if (e.target.innerText === '+') {
        count++
    } else if (e.target.innerText === 'reset') {
        count = 0
    }
    counterDisplay.innerText = count
})
