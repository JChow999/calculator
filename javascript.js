const MAX_LENGTH = 12;

const expressionDisp = document.querySelector('#expression');
const numDisplay = document.querySelector('#numDisplay');
const btns = document.querySelectorAll('button')

let numDispVal = '';
let expression = [];


btns.forEach(button => 
    button.addEventListener('click', () => updateNumDisp(button.textContent)))

document.onkeydown = function (e) {
    updateNumDisp(e.key)
}

function updateNumDisp(key) {
    if (key == 'Backspace' || key == 'Del') {
        if (numDispVal.length <= 1) {
            numDispVal = '';
        } else {
            numDispVal = numDispVal.slice(0, numDispVal.length - 1);
        }
    } else if (key == '+/-') {
        if (numDispVal.charAt(0)== '0') {
            return;
        } else if (numDispVal.charAt(0) == '-') {
            numDispVal = numDispVal.slice(1)
        } else {
            numDispVal = '-' + numDispVal;
        }
    } else if (isFinite(key)) {
        if (numDispVal.charAt(0) == 0 && numDispVal.length < 2) {
            numDispVal = key;
        } else {
            numDispVal += key;  
        }
    } else if (key == '.') {
        if (numDispVal.indexOf('.') == -1) {
            numDispVal += key;
        }
    } else if (/[+\-\*/%]/.test(key)) {
        if (expression.length < 1 || numDispVal != "") {
            expression.push(numDispVal);
            expression.push(key)
        } else if (expression.length == 1 && numDispVal == "") {
            expression.push(key)
        } 

        if (/[+\-\*/%]/.test(expression[expression.length - 1])) {
            expression[expression.length - 1] = key;
        } else {
            expression.push(key)
        }
        numDispVal = "";
        
    } else if (key == 'AC') {
        expression = [];
        numDispVal = "";

    } else if (key == '=' || key == 'Enter') {
        if (expression.length < 0) {
            if (numDispVal != '') {
                expression.push(numDispVal);
                operate();
                numDispVal = '';
            } else {
                return
            }
        } else if (isNaN(expression[expression.length - 1])) {
            if (/[+\-\*/%]/.test(expression[expression.length - 1])) {
                expression.push(numDispVal);
                operate();
                numDispVal = '';
            }
                
        }
    }
    
    updateDisplay()
    console.log(`numDispVal:${numDispVal} \nExpression: ${expression}\nKey: ${key}`)
}

function updateDisplay() {
    if (expression.length == 0) {
        expressionDisp.innerHTML = "0";
    } else {
        expressionDisp.innerHTML = expression.join(" ");
    }
    

    if (numDispVal.length == 0) {
        numDisplay.innerHTML = '0'
    }
    else {
        numDisplay.innerHTML = numDispVal
    }
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
