// Create variables for HTML elements
let button = document.querySelectorAll("button");
let screen = document.querySelector(".screen");
let decimal = document.querySelector("[data-type='decimal']");
let userOperator = document.querySelectorAll("[data-type='operator']");
let clear = document.querySelector("[data-type='clear']");
let del = document.querySelector("[data-type='delete']");

// Arrays and variables to store user input and calculation results
let tempArray = [];
let result = 0;
let currentNum = [];
let expression = [];

// Event listeners for calculator buttons 
decimal.addEventListener("click", decimalDisplay);
button.forEach(button => button.addEventListener("click", addToExpression)); 
clear.addEventListener("click", clearScreen);
del.addEventListener("click", deleteNumber);

// Clears calculator screen
function clearScreen () {
    screen.innerText = "";
    tempArray = [];
    expression = [];
}

// Deletes last entered number 
function deleteNumber () {
    tempArray = tempArray.slice (0, -1);
    screen.innerText = tempArray;
    
}

// Handles button clicks builds to an expression
function addToExpression () { 

     // If the clicked button is a number or decimal point
    if (!isNaN(parseFloat(this.innerText))) {
    
        screen.innerText += this.innerText;
        tempArray += this.innerText;

    } else if (this.innerText === ".") {
            // If decimal already included, will not add another 
            if (!tempArray.includes('.')) {
            screen.innerText += this.innerText;
            tempArray += this.innerText;
            }
    
    // If the clicked button is an operator (+, -, *, /)
    } else if (this.innerText === "+" || this.innerText === "-" ||  this.innerText === "*" || this.innerText === "/") { 
        
        // If current term not empty, push array to expression
        if (tempArray !== "") {
            expression.push(parseFloat(tempArray), this.innerText);
            // Reset tempArray for the next number
            tempArray = "";
        }

        // Adjust the expression if the last element is an operator
        if (expression.length > 0 && isNaN(expression[expression.length - 1])) {
            // Remove last item from expression
            expression[expression.length - 1] = this.innerText;
        } else {
            // Add the operator to the expression
            expression.push(this.innerText);
        }
    }
    // If the clicked button is the equals sign (=)   
    else if (this.innerText === "=") {

        // Add the last entered number to the expression
        expression.push(parseFloat(tempArray));

        // Perform the calculation and store the result
        operate();

        // Clear the expression array for the next calculation
        expression = [];

        // Set tempArray to the calculated result for potential further calculations
        tempArray= result;
    }
    
     // Update the calculator screen with the current content of tempArray
    screen.innerText = tempArray;
}

function decimalDisplay() {
    if (!screen.innerHTML.includes('.')) {
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

