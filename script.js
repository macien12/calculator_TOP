let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let display = document.getElementById('display');
let numberButton = document.querySelectorAll('.number-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');
let eqlButton = document.querySelector('.equal-btn');
let btnBackspace = document.querySelector('.backspace');
let btnDecimal = document.querySelector('.comma-btn');
let btnClear = document.querySelector('.clearSpanTwo');
let shouldResetScreen = false;
let fromEqual = false;

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

        if (fromEqual) {
            firstNumber = "";
            secondNumber = "";
            currentOperator = "";
            fromEqual = false;
        }

        if (shouldResetScreen) {
            display.textContent = "";
            firstNumber = "";
            shouldResetScreen = false;
        }
        firstNumber += e.target.textContent; 
        display.textContent = firstNumber;
    });
});



btnClear.addEventListener ("click", (e) =>{
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    display.textContent = "0";
    fromEqual = false;
} )


operatorButtons.forEach (button => {
    button.addEventListener('click', (e) => {
        

        if (shouldResetScreen && !fromEqual) {
            currentOperator = e.target.textContent;
            return; 
        }

        if (currentOperator !== "" && secondNumber !== "" && !fromEqual) {
            let result = operate(currentOperator, secondNumber, firstNumber);

            result = Math.round(result * 100000) / 100000; 
            
            display.textContent = result;
            secondNumber = String(result); 
        } 

        else if (!fromEqual) {
            secondNumber = firstNumber;
        }

        currentOperator = e.target.textContent;
        shouldResetScreen = true;
        fromEqual = false;
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
    if (!currentOperator || !firstNumber || !secondNumber) return;
        let result = operate(currentOperator, secondNumber, firstNumber);
        result = Math.round (result * 100000) / 100000;
        display.textContent = result;
        secondNumber = String(result);
        shouldResetScreen = true;
        fromEqual = true;
})

btnBackspace.addEventListener ("click", (e) => {
    if (fromEqual) return;
    firstNumber = firstNumber.slice(0, -1); 
    if (firstNumber === ""){
        display.textContent = "0";
    } else {
        display.textContent = firstNumber;
    }
})

btnDecimal.addEventListener ('click', (e) => {
    if (fromEqual) {
        firstNumber = "";
        secondNumber = "";
        currentOperator = "";
        fromEqual = false;
    }

    
    if (shouldResetScreen) {
        display.textContent = "";
        firstNumber = ""; 
        shouldResetScreen = false;
    }


    if (firstNumber.includes(".")) return;

   
    if (firstNumber === "") {
        firstNumber = "0.";
    } else {
        firstNumber += ".";
    }


    display.textContent = firstNumber;
})

window.addEventListener('keydown', (e) => {

    if (e.key === '/' || e.key === 'Enter') {
        e.preventDefault();
    }


    if (e.key >= '0' && e.key <= '9') {
        numberButton.forEach(button => {
            if (button.textContent === e.key) {
                button.click();
            }
        });
    }


    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        operatorButtons.forEach(button => {
            if (button.textContent === e.key) {
                button.click();
            }
        });
    }

 
    if (e.key === 'Enter' || e.key === '=') {
        eqlButton.click();
    }


    if (e.key === 'Backspace') {
        btnBackspace.click();
    }


    if (e.key === 'Escape') {
        btnClear.click();
    }


    if (e.key === '.' || e.key === ',') {
        btnDecimal.click();
    }
});