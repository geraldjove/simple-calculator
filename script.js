const numberButton = document.getElementsByClassName('number');
const operatorButton = document.getElementsByClassName('operator');
const mathInput = document.getElementById('mathInput');
let currentInput = "";
let firstInput = "";
let secondInput = "";
let operatorInput = "";
let switchInput = true;


for (i=0; i<numberButton.length; i++) {
    numberButton[i].addEventListener('click', (e)=>{
        currentInput += e.target.value;
        mathInput.value = currentInput;
        if (switchInput) {
            return firstInput = Number(mathInput.value);
        } else {
            return secondInput = Number(mathInput.value);
        }
    })
}

for (i=0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener('click', (e)=>{
        currentInput = "";
        mathInput.value = currentInput;
        operatorInput = e.target.value;
        switchInput = false;
        return operatorInput;
    })
}

function calculate(a, b){
    switch (operatorInput) {
        case '+':
            return mathInput.value = a + b;
        case '-':
            return mathInput.value = a - b;
        case '*':
            return mathInput.value = a * b;
        case '/':
            return mathInput.value = a / b;
        default:
            return mathInput.value = "Invalid operator";
    }
}

function clearCalculator(){
    mathInput.value = "";
    currentInput = "";
    firstInput = "";
    secondInput = "";
    operatorInput = "";
    switchInput = true;
}