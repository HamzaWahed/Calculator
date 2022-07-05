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
    const display = document.querySelector('.display');
    display.innerHTML = value;
}

function showNumber(){
    const numbers = document.querySelectorAll('.numbers');
    numbers.forEach(element => {
        element.addEventListener('click', event => showNumberHelper(element.innerHTML))
    });
}