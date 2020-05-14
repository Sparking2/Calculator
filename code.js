
function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function operate (o,a,b){

    let operator = o.charCodeAt();
    let result = 0;

    switch(operator){
        //+
        case 43: result = add(a,b); break;
        //-
        case 45: result = subtract(a,b); break;
        //*
        case 42: result = multiply(a,b); break;
        // /
        case 47: result =  divide(a,b); break;
        default: result = 'error';break;
    }

    return result;
}
