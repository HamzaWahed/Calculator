function add(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    
    return sum;
}

function subtract(){
    let sum=arguments[0];
    for(let i=1;i<arguments.length;i++){
        sum-=arguments[i];
    }

    return sum;
}

function multiply(){
    let sum=arguments[0];
    for(let i=1;i<arguments.length;i++){
        sum*=arguments[i];
    }

    return sum;
}

function divide(){
    let sum=arguments[0];
    for(let i=1;i<arguments.length;i++){
        sum/=arguments[i];
    }

    return sum;
}

function operate(operator, num1, num2){
    return operator(num1,num2);
}

function showNumberHelper(value){
    let num1 = null;
    let num2 = null;
    let operator = null;
    const display = document.querySelector('.display');
    if(value==='='){
        display.innerHTML(operate(operator,num1,num2));
    }

    if(num1 != null && operator == null){
        operator = value;
    }else if(num1 != null && operator != null){
        num2 = value;
    }else{
        num1 = value;
    }
    console.log(num1);
}

function showNumber(){
    const numbers = document.querySelectorAll('.numbers');
    numbers.forEach(element => {
        element.addEventListener('click', event => showNumberHelper(element.innerHTML))
    });
}

function getOperator(){
    const operators = document.querySelectorAll('.operator');
    operators.forEach(element => {
        element.addEventListener('click', event => getOperatorFunction(element.innerHTML))
    });
}

function getOperatorFunction(operator){
    switch(operator){
        case "+":
            return add();
        case "-":
            return subtract();
        case "×":
            return multiply();
        case "÷":
            return divide();
        case "=":
            return "equals";
        case "C":
            return "clear";
    }
}

showNumber();
getOperator();