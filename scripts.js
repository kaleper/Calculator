let button = document.querySelectorAll("button");
let screen = document.querySelector(".screen");
let decimal = document.querySelector("[data-type='decimal']");
let userOperator = document.querySelectorAll("[data-type='operator']");
let clear = document.querySelector("[data-type='clear']");
let del = document.querySelector("[data-type='delete']");

let tempArray = [];
let result = 0;
let currentNum = [];
let expression = [];

decimal.addEventListener("click", decimalDisplay);
button.forEach(button => button.addEventListener("click", addToExpression)); 
clear.addEventListener("click", clearScreen);
del.addEventListener("click", deleteNumber);

function clearScreen () {
    screen.innerText = "";
    tempArray = [];
    expression = [];
}

function deleteNumber () {
    tempArray = tempArray.slice (0, -1);
    screen.innerText = tempArray;
    
}

function addToExpression () { 
    if (!isNaN(parseFloat(this.innerText)) || this.innerText === ".") {
        tempArray += this.innerText;
    } 
    
    else if (this.innerText === "+" || this.innerText === "-" ||  this.innerText === "*" || this.innerText === "/") { 
        
        if (tempArray !== "") {
            expression.push(parseFloat(tempArray), this.innerText);
            tempArray = "";
        }
        if (expression.length > 0 && isNaN(expression[expression.length - 1])) {
            expression[expression.length - 1] = this.innerText;
        } else {
            expression.push(this.innerText);
        }
    }   
    else if (this.innerText === "=") {
        expression.push(parseFloat(tempArray));
        operate();
        expression = [];
        tempArray= result;
    }
    screen.innerText = tempArray;
}

function decimalDisplay() {
    if (screen.innerHTML.includes('.')) {
        decimal.disabled; 
    } else {
        screen.innerText += this.innerText;
    }
}

function operate () {
    result = expression[0];
    
    for (let i = 1; i < expression.length; i += 2) {
        if (expression[i] === "+") {
        result += expression[i+1];
        } else if (expression[i] === "-") {
        result -= expression[i+1];
        } else if (expression[i] === "*") {
        result *= expression[i+1];
        } else if (expression[i] === "/") {
        result /= expression[i+1];
        }
    }
    currentNum = result; 
}

