let button = document.querySelectorAll("button");
let screen = document.querySelector(".screen");
let decimal = document.querySelector("[data-type='decimal']");
let userOperator = document.querySelectorAll("[data-type='operator']");
let equals = document.querySelector("[data-type='equals']");

decimal.addEventListener("click", decimalDisplay);
button.forEach(button => button.addEventListener("click", buttonDisplay)); 
button.forEach(numbersClicked=> numbersClicked.addEventListener("click", addToExpression));
userOperator.forEach(operator1 => operator1.addEventListener("click", chosenOperator));
equals.addEventListener ("click", operate);

let tempExpression = [];
let expression = [];
let firstNumber;
let nextNumber;

function chosenOperator () {
    if (this.innerText == "+") {
        return add()
    } else if (this.innerText == "-") {
        return subtract();
    } else if (this.innerText == "*") {
        return multiply();
    } else if (this.innerText == "/") {
        return divide();
    }
}

function addToExpression () {
    
    tempExpression.push(parseInt(this.innerText));
    expression = tempExpression.filter(Boolean);
    firstNumber = expression[0];
    nextNumber = expression[1];

}

function decimalDisplay() {
     if (screen.innerHTML.includes('.')) {
        decimal.disabled; 
     } else {
        screen.innerText += this.innerText;
     }
}


function buttonDisplay() {
        if (this.innerText != "*" &&
        this.innerText != "/" &&
        this.innerText != "+" &&
        this.innerText != "-" &&
        this.innerText != "=" &&
        this.innerText != "clear" &&
        this.innerText != "delete" &&
        this.innerText != ".") {
            screen.innerText += this.innerText;
        }
}


function add () {
    return firstNumber + nextNumber;
}
function subtract () {
    return firstNumber - nextNumber;
}
function multiply () {
    return firstNumber * nextNumber;
}
function divide () {
    return firstNumber / nextNumber; 
}

function operate () {
    console.log (expression.reduce(chosenOperator))
}
