let operand1 = '0';
let operand2 = '';
let operator = '';
let endVal = '';
let expression = [];

const expressionDisp = document.querySelector('#expression');
const numDisplay = document.querySelector('#numDisplay');
const numBtn = document.querySelectorAll('.numBtn')

document.onkeydown = function (e) {
    if (e.key == 'Backspace') {
        if (operand1.length <= 1) {
            operand1 = '0';
        } else {
            operand1 = operand1.slice(0, operand1.length - 1);
        }
    } else if (isFinite(e.key)) {
        if (operand1.charAt(0) == 0) {
            operand1 = e.key;
        } else {
            operand1 += e.key;  
        }
    }
    updateDisplay(numDisplay, operand1)
}

function removeChar() {
    return
}

function clear() {
    operator = ""
    expression = ""
}

function updateDisplay(display, info) {
    display.innerHTML = info;
}

function toggleNeg() {
    if (operand1) return
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function operate(a, b) {



    switch(operator) {
        case '/':
            return num1 = divide(a, b);
        case '%':
            return num1 = modulo(a, b);
        case '*':
            return num1 = multiply(a, b);
        case '+':
            return num1 = add(a, b);
        case '-':
            return num1 = subtract(a, b);
        default:
            alert("An error has occurred.")
    }
}

