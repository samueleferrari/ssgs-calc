const readline = require('readline');
const { sum, sub, mul, divide } = require('./math');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome! You can perform addition, subtraction, multiplication, and division.");

function Operation() {
    console.log("\nPlease select an operation:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");

    rl.question("Enter your choice: ", (answer) => {
        if (answer === '5') {
            console.log("Thanks for using this app.");
            console.log("Goodbye!");
            rl.close();
            return;
        }

        rl.question("Enter the first number: ", (firstNumber) => {
            const n1 = parseFloat(firstNumber);

            rl.question("Enter the second number: ", (secondNumber) => {
                const n2 = parseFloat(secondNumber);
                let result;

                switch (answer) {
                    case '1':
                        result = sum(n1, n2);
                        break;
                    case '2':
                        result = sub(n1, n2);
                        break;
                    case '3':
                        result = mul(n1, n2);
                        break;
                    case '4':
                        if (n2 === 0) {
                            console.log("Error: Division by zero is not allowed.");
                            return Operation();
                        }
                        result = divide(n1, n2);
                        break;
                    default:
                        console.log("Invalid choice. Please select a valid operation.");
                        return Operation();
                }

                console.log(`Result: ${result}`);
                Operation();
            });
        });
    });
}

Operation();