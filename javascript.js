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

/* 

variables for operation
----------------------------

*/
let operator = "";
let num1;
let num2;
let entered = "";

const display = document.getElementById("display");

const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

const clearBtn = document.getElementById("clear");
const plus = document.getElementById("add");
const minus = document.getElementById("subtract");
const times = document.getElementById("multiply");
const devideBy = document.getElementById("divide");
const equal = document.getElementById("equal");

one.addEventListener("click", () => {
    display.textContent += "1";
    entered += "1";
})

two.addEventListener("click", () => {
    display.textContent += "2";
     entered += "2";
})

three.addEventListener("click", () => {
    display.textContent += "3";
     entered += "3";
})

four.addEventListener("click", () => {
    display.textContent += "4";
    entered += "4";
})

five.addEventListener("click", ()=> {
    display.textContent += "5";
    entered += "5";
})

six.addEventListener("click", ()=>{
    display.textContent += "6";
    entered += "6";

})

seven.addEventListener("click", () => {
    display.textContent += "7";
    entered += "7";
})

eight.addEventListener("click", () => {
    display.textContent += "8";
    entered += "8";
})

nine.addEventListener("click", () => {
    display.textContent += "9";
    entered += "9";
})

zero.addEventListener("click", ()=> {
    display.textContent += "0";
    entered += "0";
})

clearBtn.addEventListener("click", ()=>{
    display.textContent = "";
    entered = "";
})

equal.addEventListener("click", () => {
    display.textContent = entered;
    console.log(entered);
    
})
