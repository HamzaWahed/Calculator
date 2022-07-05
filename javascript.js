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