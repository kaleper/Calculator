let button = document.querySelectorAll("button");
let screen = document.querySelector(".screen");
let decimal = document.querySelector("[data-type='decimal']");
let userOperator = document.querySelectorAll("[data-type='operator']");
let equals = document.querySelector("[data-type='equals']");
let clear = document.querySelector("[data-type='clear']");
let del = document.querySelector("[data-type='delete']");

decimal.addEventListener("click", decimalDisplay);
button.forEach(button => button.addEventListener("click", buttonDisplay)); 
button.forEach(numbersClicked=> numbersClicked.addEventListener("click", addToExpression));
userOperator.forEach(operatorClicked => operatorClicked.addEventListener("click", chosenOperator));
equals.addEventListener ("click", operate);
clear.addEventListener("click", clearScreen);
del.addEventListener("click", deleteNumber);

let tempExpression = [];
let firstNumber;
let nextNumber;

function clearScreen () {
    screen.innerText = "";
    operand = [];
}

function deleteNumber () {
    screen.innerText = screen.innerText.slice (0, -1);
    operand.pop()
}

function chosenOperator () {
    if (this.innerText == "+") {
        chosenOperator = add;
    } else if (this.innerText == "-") {
        chosenOperator = subtract;
    } else if (this.innerText == "*") {
        chosenOperator =  multiply;
    } else if (this.innerText == "/") {
        chosenOperator = divide;
    }
}

let operand = [];
let tempArray = [];
let tempExpressionFiltered = [];
function addToExpression () {

    tempExpression.push(this.innerText);

    tempExpressionFiltered = tempExpression.filter(item => !item.includes ("+") && !item.includes ("-") && !item.includes ("*") && !item.includes ("/") && !item.includes ("=") && !item.includes ("clear") && !item.includes ("delete") && !item.includes ("."))

    if (tempExpressionFiltered.length >=1) {
        tempArray = tempExpressionFiltered.join("")
    }
    
    tempArray = parseInt(tempArray);
    
    if (tempExpression.includes( "+") || tempExpression.includes ("-") || tempExpression.includes ("*") || tempExpression.includes ("/")|| tempExpression.includes ("=")) {
// line below ensures that if user presses an operator twice that 0 isn't passed into operand
        if (tempArray >=1) { 
            operand.push(tempArray);
            tempExpression.length = 0;
            tempExpressionFiltered.length = 0;
            tempArray = 0;
           
        }
    }    
    firstNumber = operand[0];
    nextNumber = operand[1];
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
        // stringArr = [...screen.innerText];
        // screenArr = stringArr.map(Number);

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
    screen.innerText = (operand.reduce(chosenOperator));
}
