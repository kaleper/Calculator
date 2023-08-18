let button = document.querySelectorAll("button");
let screen = document.querySelector(".screen");
let decimal = document.querySelector("[data-type='decimal']");
let userOperator = document.querySelectorAll("[data-type='operator']");
// let equals = document.querySelector("[data-type='equals']");
let clear = document.querySelector("[data-type='clear']");
let del = document.querySelector("[data-type='delete']");

// let operand = [];
let tempArray = [];
let result = 0;
// removed variables
// let tempExpressionFiltered = [];
// let tempExpression = [];
// let previousNum = [];
let currentNum = [];
let expression = [];

decimal.addEventListener("click", decimalDisplay);
button.forEach(button => button.addEventListener("click", addToExpression)); 
// button.forEach(numbersClicked=> numbersClicked.addEventListener("click", addToExpression));
// userOperator.forEach(operatorClicked => operatorClicked.addEventListener("click", chosenOperator));
// equals.addEventListener ("click", operate);
clear.addEventListener("click", clearScreen);
del.addEventListener("click", deleteNumber);

function clearScreen () {
    screen.innerText = "";
    tempArray = [];
    expression = [];
}

function deleteNumber () {
    // i don't think this if statement is needed since it'll delete nothing already
    // if (tempArray.length > 0)
    // why does this work if tempArray is temporarily a string?
    tempArray = tempArray.slice (0, -1);
    screen.innerText = tempArray;
    
}

// function chosenOperator () {
//     if (this.innerText == "+") {
//         chosenOperator = add;
//     } else if (this.innerText == "-") {
//         chosenOperator = subtract;
//     } else if (this.innerText == "*") {
//         chosenOperator =  multiply;
//     } else if (this.innerText == "/") {
//         chosenOperator = divide;
//     }
// }


function addToExpression () { 

// The temp array here is the screen. The expression is eventually what is being evaluated. Expression array contains floating point numbers and operators in a string.

// parseFloat here might be redundant, consider removing later.

// tempExpression() and tempExpression filtered was a redundancy removed as tempArray is sufficient with modifications added. I was looking to have tempExpression filter out for only numbers and act as an intermediary for tempArray. However using !isNaN filters out more effectively. I removed operand() as well since  the expression() name makes more sense defining it's purpose.

//will need to fix when user presses multiple operators as it bugs the expression

// fix operate section next. A change is that previously the operate contained the equals "onclick" but now the function is called in add to Expression

    if (!isNaN(parseFloat(this.innerText)) || this.innerText === ".") {
        tempArray += this.innerText;
    } 
    
    else if (this.innerText === "+" || this.innerText === "-" ||  this.innerText === "*" || this.innerText === "/") 
        // why do i even need this line below?  if not empty, user has entered a number, means we need to push the number to the expression.
        { if (tempArray !== "") {
        expression.push(parseFloat(tempArray), this.innerText);
        tempArray = "";
        }
        // if last element is a number, can safely add operator to expression array (else statement). if not a number and we already have an operator, (if) replaces the operator with a new operator.
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
    
// function addToExpression () {

//     tempExpression.push(this.innerText);

//     tempExpressionFiltered = tempExpression.filter(item => !item.includes ("+") && !item.includes ("-") && !item.includes ("*") && !item.includes ("/") && !item.includes ("=") && !item.includes ("clear") && !item.includes ("delete") && !item.includes ("."))

//     if (tempExpressionFiltered.length >=1) {
//         tempArray = tempExpressionFiltered.join("")
//     }
    
//     tempArray = parseFloat(tempArray);
    
//     if (tempExpression.includes( "+") || tempExpression.includes ("-") || tempExpression.includes ("*") || tempExpression.includes ("/")|| tempExpression.includes ("=")) {
//         //if statement below ensures if user presses an operator twice that 0 isn't passed into operand
//         if (tempArray >=1) { 
//             operand.push(tempArray);
//             tempExpression.length = 0;
//             tempExpressionFiltered.length = 0;
//             tempArray = 0;
            
//             if (operand.length <= 2) {
//             previousNum = operand [0]
//             currentNum = operand[1]

//             } else {
//             previousNum = operand[operand.length -1];
//             currentNum = result
//             }
//         }
//     }
// }

// change decimalDisplay code for better readability
    function decimalDisplay() {
    // this glitches and puts two decimals
    //     if (!tempArray.includes('.')) {
    //         tempArray += ".";
    //         screen.innerText = tempArray;
    //     }
    // }
     if (screen.innerHTML.includes('.')) {
        decimal.disabled; 
     } else {
        screen.innerText += this.innerText;
        
     }
    }

// made redundant as code is now pushed in addToExpression function
// function buttonDisplay() {
//     if (this.innerText != "*" &&
//         this.innerText != "/" &&
//         this.innerText != "+" &&
//         this.innerText != "-" &&
//         this.innerText != "=" &&
//         this.innerText != "clear" &&
//         this.innerText != "delete" &&
//         this.innerText != ".") {
//             screen.innerText += this.innerText;
//             }
// }

// redundant, added code in operate() function

// function add () {
//     result = previousNum + currentNum;
//     return previousNum + currentNum;
   
// }
// function subtract () {
//     result = previousNum - currentNum;
//     return previousNum - currentNum;
// }
// function multiply () {
//     result = previousNum * currentNum;
//     return previousNum * currentNum;
// }
// function divide () {
//     result = previousNum / currentNum;
//     return previousNum / currentNum; 
// }

function operate () {
    result = expression[0];
    //Skips the first number. Iterates through expression and takes only the operator as the operator is placed in odd indexes of expression[]. 
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

// function operate () {
//     screen.innerText = (operand.reduce(chosenOperator));
//     currentNum = result;
// }


// let button = document.querySelectorAll("button");
// let screen = document.querySelector(".screen");
// let decimal = document.querySelector("[data-type='decimal']");
// let equals = document.querySelector("[data-type='equals']");
// let clear = document.querySelector("[data-type='clear']");
// let del = document.querySelector("[data-type='delete']");

// let expression = [];
// let tempArray = "";
// let result = 0;
// let currentNum = 0;

// decimal.addEventListener("click", decimalDisplay);
// button.forEach(button => button.addEventListener("click", addToExpression));
// equals.addEventListener("click", operate);
// clear.addEventListener("click", clearScreen);
// del.addEventListener("click", deleteNumber);

// function clearScreen() {
//     screen.innerText = "";
//     expression = [];
//     tempArray = "";
// }

// function deleteNumber() {
//     if (tempArray.length > 0) {
//         tempArray = tempArray.slice(0, -1);
//         screen.innerText = tempArray;
//     }
// }

// function addToExpression() {
//     if (!isNaN(parseFloat(this.innerText)) || this.innerText === ".") {
//         tempArray += this.innerText;
//         screen.innerText = tempArray;
//     } else if (this.getAttribute("data-type") === "operator") {
//         expression.push(parseFloat(tempArray), this.innerText);
//         tempArray = "";
//     } else if (this.getAttribute("data-type") === "equals") {
//         expression.push(parseFloat(tempArray));
//         operate();
//         expression = [];
//         tempArray = result.toString();
//         screen.innerText = tempArray;
//     }
// }

// function decimalDisplay() {
//     if (!tempArray.includes('.')) {
//         tempArray += ".";
//         screen.innerText = tempArray;
//     }
// }

// function operate() {
//     result = expression[0];
//     for (let i = 1; i < expression.length; i += 2) {
//         if (expression[i] === "+") {
//             result += expression[i + 1];
//         } else if (expression[i] === "-") {
//             result -= expression[i + 1];
//         } else if (expression[i] === "*") {
//             result *= expression[i + 1];
//         } else if (expression[i] === "/") {
//             result /= expression[i + 1];
//         }
//     }
//     currentNum = result;
// }



