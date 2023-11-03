const MAX_LENGTH = 12;

const expressionDisp = document.querySelector('#expression');
const numDisplay = document.querySelector('#numDisplay');
const btns = document.querySelectorAll('button')

let numDispLrg = '0';
let expression = [];


btns.forEach(button => 
    button.addEventListener('click', () => updateNumDisp(button.textContent)))

document.onkeydown = function (e) {
    updateNumDisp(e.key)
}

function updateNumDisp(key) {
    console.log(key)
    if (key == 'Backspace') {
        if (numDispLrg.length <= 1) {
            numDispLrg = '0';
        } else {
            numDispLrg = numDispLrg.slice(0, numDispLrg.length - 1);
        }
    } else if (key == '+/-') {
        if (numDispLrg.charAt(0)== '0') {
            return;
        } else if (numDispLrg.charAt(0) == '-') {
            numDispLrg = numDispLrg.slice(1)
        } else {
            numDispLrg = '-' + numDispLrg;
        }
    } else if (isFinite(key)) {
        if (numDispLrg.charAt(0) == 0 && numDispLrg.length < 2) {
            numDispLrg = key;
        } else {
            numDispLrg += key;  
        }
    } else if (key == '.') {
        if (numDispLrg.indexOf('.') == -1) {
            numDispLrg += key;
        }
    } else if (/[+\-\*/%]/.test(key)) {
        expression.push(numDispLrg);
        expression.push(key);
        numDispLrg = "0";
    } else if (key == 'AC') {
        expression = [];
        numDispLrg = "0";
    } else if (key == '=' || key == 'Enter') {
        expression.push(numDispLrg);
        operate();
        numDispLrg = '0';
    }
    
    // For updating the displays
    if (expression.length == 0) {
        updateDisplay(expressionDisp, '0');
    } else {
        updateDisplay(expressionDisp, expression.join(" "))
    }
    updateDisplay(numDisplay, numDispLrg)
}

function updateDisplay(display, info) {
    display.innerHTML = info;
}

function operate() {
    const specialChar = ['/', '%', '*', '+', '-']
    

    for (let n = 0; n < specialChar.length; n++) {
        while (expression.indexOf(specialChar[n]) != -1) {
            let index = expression.indexOf(specialChar[n])
            
            let oper1 = expression[index - 1];
            let oper2 = expression[index + 1]
            let calcOperator = expression[index];

            endVal = calculate(parseFloat(oper1), calcOperator, parseFloat(oper2))
            console.log(endVal)
            expression.splice((index-1), 3, endVal)
        }
    }
}

function calculate(operandOne, operator, operandTwo) {
    switch (operator) {
        case '+':
            return operandOne + operandTwo;
        case '-':
            return operandOne - operandTwo;
        case '*':
            return operandOne * operandTwo;
        case '/':
            return operandOne / operandTwo;
        case '%':
            return operandOne % operandTwo
    }
}
