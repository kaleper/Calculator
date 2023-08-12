let button = document.querySelectorAll("button");
let output = document.querySelector(".output");

button.forEach(button => button.addEventListener("click", buttonDisplay)) 

function buttonDisplay() {
    output.innerText += this.innerText;
}
// alternate version of displaying text 
// for (let i=0; i<button.length; i++) {
// button[i].addEventListener("click", function() {
//     output.innerText += this.innerText;
// });
// }

function add (a,b) {
    return a+b;
}

function subtract (a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide (a,b){
    return a/b; 
}


let firstNumber 
let operator
let nextNumber


function operate (a,b){
    
}
