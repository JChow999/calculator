let operand1 = '';
let operand2 = '';
let operator = '';
let endVal = '';

const expression = document.querySelector('#expression');
const numDisplay = document.querySelector('#numDisplay');
const numBtn = document.querySelectorAll('.numBtn')

document.onkeydown = function (e) {
    const keyIsNum = isFinite(e.key);
    if (keyIsNum) {
        operand1 += e.key;
        updateDisplay(numDisplay, operand1)
    }
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

