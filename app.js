const readline = require('readline');
const { sum, sub, mul, divide } = require('./math');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Wrapper per readline.question che restituisce una Promise
function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
}

console.log("Welcome! You can perform addition, subtraction, multiplication, and division.");

async function Operation() {
    while (true) {
        console.log("\nPlease select an operation:");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Exit");

        const choice = await askQuestion("Enter your choice: ");

        if (choice === '5') {
            console.log("Thanks for using this app.");
            console.log("Goodbye!");
            rl.close();
            break;
        }
        else if(choice > 5 || choice < 1){
            console.log("Invalid choice. Please try again.");
            continue;
        }

        const firstNumber = parseFloat(await askQuestion("Enter the first number: "));
        const secondNumber = parseFloat(await askQuestion("Enter the second number: "));

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            console.log("Invalid number.");
            rl.close();
            break;
        }

        let result;
        switch (choice) {
            case '1':
                result = sum(firstNumber, secondNumber);
                break;
            case '2':
                result = sub(firstNumber, secondNumber);
                break;
            case '3':
                result = mul(firstNumber, secondNumber);
                break;
            case '4':
                if (secondNumber === 0) {
                    console.log("Error: Division by zero is not allowed.");
                    continue;
                }
                result = divide(firstNumber, secondNumber);
                break;
            default:
                console.log("Invalid choice. Please select a valid operation.");
                continue;
        }

        console.log(`Result: ${result}`);
    }
}

Operation();
