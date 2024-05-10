let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}


// We can also use eval function like this

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = 'Error';
//   }
// }


function calculate() {
    let expression = display.value;
    let result = evaluateExpression(expression);
    display.value = result;
}

function evaluateExpression(expression) {  //(dry run) "53+21"
    let numbers = [];
    let operators = [];

    // Variables to keep track of current number being built
    let currentNumber = '';

    // Loop through each character in the expression
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        // If character is a digit, add it to the current number being built
        if (!isNaN(parseInt(char)) || char === '.') {
            currentNumber += char;
        } else {
            // If character is an operator, add current number to numbers array
            // and add operator to operators array
            numbers.push(parseFloat(currentNumber));
            operators.push(char);
            currentNumber = ''; // Reset current number
        }
    }

    // Add the last number to the numbers array
    numbers.push(parseFloat(currentNumber));

    // Perform calculations
    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        let operator = operators[i];
        let nextNumber = numbers[i + 1];

        if (operator === '+') {
            result += nextNumber;
        } else if (operator === '-') {
            result -= nextNumber;
        } else if (operator === '*') {
            result *= nextNumber;
        } else if (operator === '/') {
            if (nextNumber === 0) {
                return 'Error: Division by zero';
            }
            result /= nextNumber;
        }
    }

    return result;
}
