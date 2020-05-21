//*****VARIABLES*****//
let screen;
let currentString = '';
let previousString = '';
let operator = '';

//*****FUNCTIONS*****//
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(o, a, b) {

    let operator = o.charCodeAt();
    let result = 0;

    switch (operator) {
        //+
        case 43: result = add(a, b); break;
        //-
        case 45: result = subtract(a, b); break;
        //*
        case 42: result = multiply(a, b); break;
        // /
        case 47: result = divide(a, b); break;
        default: result = 'error'; break;
    }

    return result;
}

function display(number) {
    if (!screen) return;

    currentString += number;
    screen.innerText = currentString;
}

function btnClick(option) {

    switch (option) {
        case 'CE':
            currentString = previousString = '';
            screen.innerText = 0;
            break;
        case 'C':
            break;
        case 'DEL':
            currentString = currentString.slice(0, -1);
            screen.innerText = currentString.length == 0 ? '0' : currentString;
            break;
        case '÷':
            operator = '/';
            previousString = currentString;
            currentString = '';
            screen.innerText = 0;
            break;
        case 'x':
            operator = '*';
            previousString = currentString;
            currentString = '';
            screen.innerText = 0;
            break;
        case '-':
            operator = '-';
            previousString = currentString;
            currentString = '';
            screen.innerText = 0;
            break;
        case '+':
            operator = '+';
            previousString = currentString;
            currentString = '';
            screen.innerText = 0;
            break;
        case '=':
            let result =  operate(operator,Number.parseFloat(previousString),Number.parseFloat(currentString));
            screen.innerText = result.toFixed(2);
            previousString = currentString = '';
            break;
        case '.':
            display('.');
            break;
        case '1':
            display(1);
            break;
        case '2':
            display(2);
            break;
        case '3':
            display(3);
            break;
        case '4':
            display(4);
            break;
        case '5':
            display(5);
            break;
        case '6':
            display(6);
            break;
        case '7':
            display(7);
            break;
        case '8':
            display(8);
            break;
        case '9':
            display(9);
            break;
        case '0':
            display(0);
            break;
        default:
            break;
    }
}

screen = document.getElementById('text-display');