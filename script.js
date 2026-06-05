let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let display = document.getElementById('display');
let numberButton = document.querySelectorAll('.number-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');
let eqlButton = document.querySelector('.equal-btn');
let shouldResetScreen = false;

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

    if (shouldResetScreen) {
            display.textContent = "";
            shouldResetScreen = false;
        }
        
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
    shouldResetScreen = true;
    });
});

function operate(operator, a, b) {
    let num1 = Number(a);
    let num2 = Number(b);

    if (operator == "+") {
        return addNumbers(num1, num2);
    } else if (operator == "-") {
        return subtractNumbers(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}

eqlButton.addEventListener ("click", (e) => {
        let result = operate(currentOperator, secondNumber, firstNumber);
        display.textContent = result;
})