/* 
Basic math functions
------------------------------------
*/

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;    
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "No, you can't divide by 0!"
    }

    return num1 / num2;
}


function operate(num1, operator, num2){
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2) 
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2)
    } else {
        return "Hooray!";
    }

}

// Variables
let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = "0";
let shouldResetDisplay = false;

// Create Display functions
const display = document.getElementById("display")

function updateDisplay(value) {
    const text = String(value);
    display.textContent = text.slice(0, 12);
}

function clearCalculator() {
    firstNumber = null;
    operator = null;
    secondNumber = null;
    displayValue = "0";

    updateDisplay(displayValue);
}


// Handle Digit Buttons
function inputDigit(digit){
    if (shouldResetDisplay) {
        displayValue = "0";
        shouldResetDisplay = false;
    }

    if (displayValue === "0"){
        displayValue = digit;
    } else {
        displayValue += digit;
    }

    updateDisplay(displayValue);
}

function chooseOperator (nextOperator){
    const currentNumber = Number(displayValue);

    if (firstNumber === null) {
        firstNumber = currentNumber;
    } else if (!shouldResetDisplay) {
        secondNumber = currentNumber;
        const result = operate(firstNumber, operator, secondNumber);

        firstNumber = result;
        updateDisplay(result);
    }

    operator = nextOperator;
    shouldResetDisplay = true;
}

// Handle Equal Button
function calculateResult(){
    if (firstNumber === null || operator === null) {
        return;
    }

    secondNumber = Number(displayValue);
    const result = formatResult(operate(firstNumber, operator, secondNumber));

    updateDisplay(result);

    if (typeof result === "number") {
        firstNumber = result;
    } else {
        firstNumber = null;
    }



    secondNumber = null;
    shouldResetDisplay = true;
}


// Connect the buttons to JS
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.dataset.number !== undefined) {
            inputDigit(button.dataset.number);
        }

        if (button.dataset.operator !== undefined) {
            chooseOperator(button.dataset.operator);
        }

        if (button.hasAttribute("data-equals")){
            calculateResult();
        }

        if (button.hasAttribute("data-clear")){
            clearCalculator();
        }
    })
})


// Handle long decimal results
function formatResult(result) {
    if (typeof result !== "number"){
        return result;
    }

    return Number(result.toFixed(10));
}