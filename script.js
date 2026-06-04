let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let display = document.getElementById('display');
let numberButton = document.querySelectorAll('.number-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');

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

let btnClear = document.querySelector('.clearSpanTwo');

btnClear.addEventListener ("click", (e) =>{
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    display.textContent = "0";
} )


operatorButtons.forEach (button => {
    button.addEventListener('click', (e) => {
    currentOperator = e.target.textContent;
    secondNumber = firstNumber;
    firstNumber = "";
    display.textContent = "";
    });
});

// To do build operate function