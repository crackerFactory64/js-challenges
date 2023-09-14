// Write a function that takes 2 numbers as parameters, and adds them together, and returns (in the console or the page) the result. 

function sum(a, b){
    const result = a + b
    document.write(a + " + " + b + " = " + result)
}

// Update your function to take a third parameter, that will change which mathematical operator will be used (+ - * /)

function equation(a, b, operator){
    let result = 0
    if(operator == "+"){
        result = a + b;
    } else if (operator == "-"){
        result = a - b; 
    } else if (operator == "*"){
        result = a * b;
    } else if (operator == "/"){
        result = a / b;
    }

    document.write(a + " " + operator + " " + b +  " = " + result)
}

// Update your function so that a user can give each argument's value in a prompt

function userEquation(){
    const a = parseInt(prompt("Enter first value: "));
    const b = parseInt(prompt("Enter second value: "));
    const operator = prompt("Enter operator (+, -, *, or /): ");

    let result = 0
    if(operator == "+"){
        result = a + b;
    } else if (operator == "-"){
        result = a - b; 
    } else if (operator == "*"){
        result = a * b;
    } else if (operator == "/"){
        result = a / b;
    }

    document.write(a + " " + operator + " " + b +  " = " + result)
}

