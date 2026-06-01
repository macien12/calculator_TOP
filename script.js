let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let display = document.getElementById('display');
let numberButton = document.querySelectorAll('.number-btn');

function addNumbers (a, b) {
    return a + b;
}

function subtractNumbers (a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

numberButton.forEach(button => {
    button.addEventListener('click', (e) => {
        firstNumber += e.target.textContent; 
        display.textContent = firstNumber;
    });
});