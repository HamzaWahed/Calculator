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

function appendNumber(){
    let display = document.querySelector('.display');
    for(let i=0;i<arguments.length;i++){
        if(operator!==null){
            num2 += arguments[i]
        }else{
            num1 += arguments[i];
        }   
    }

    if(operator!==null){
        display.innerHTML = num2;
    }else{
        display.innerHTML = num1;
    }
    
}

function displayValue(){
    const btn = document.querySelectorAll('.numbers');
    btn.forEach(element =>
        element.addEventListener('click', event =>
        appendNumber(element.innerHTML)));
}

function displayOperators(){
    const btn = document.querySelectorAll('.operator');
    btn.forEach(element =>
        element.addEventListener('click', event =>
        getOperatorFunction(element.innerHTML)));
}

function getOperatorFunction(value){
    let display = document.querySelector('.display');

    if(operator !== null && value!=="="){
        let result = operate(operator,Number(num1),Number(num2));
        display.innerHTML = result;
        num1=result;
        num2="";
    }

    switch(value){
        case "+":
            operator = add;
            break;
        case "-":
            operator = subtract;
            break;
        case "×":
            operator = multiply;
            break;
        case "÷":
            operator = divide;
            break;
        case "=":
            display.innerHTML = operate(operator,Number(num1),Number(num2));
            break;
        case "C":
            clear();
            break;
    }
}

function clear(){
    let display = document.querySelector('.display');
    display.innerHTML = "";
    num1="";
    num2="";
    operator=null;
}

let num1 = "";
let num2 = "";
let operator = null;
displayValue();
displayOperators();