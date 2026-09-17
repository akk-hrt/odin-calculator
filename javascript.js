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

/* 

variables for operation
----------------------------

*/
let operator = "";
let num1 = 0;
let num2 = 0;

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
