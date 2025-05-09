# Calculator 🧮 

## Description ✏️
This is a simple calculator that can perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It is built using JavaScript. 

## Features 🚀
- addition
- subtraction
- multiplication
- division
- power

## Installation ⚙️
This software works with [node.js](https://nodejs.org) **v18.19.1** or higher so make sure to have it installed using 

    node -v 

1. First clone this repo to your machine: 
    
        git clone https://github.com/samueleferrari/ssgs-calc.git

2. Then navigate to the project directory:
    
        cd ssgs-calc

3. Finally install the dependencies:
    
        npm install

## Execution ▶️
You can start the application with (*you can run it from any directories inside ssgs-calc*):

    npm start 
   
## Test 🧪 
This project uses [Jest](https://jestjs.io/) **v29.7.0** as the testing framework. 
Our goal is to achieve and maintain **100% code coverage** across all modules.
To perform the tests (*you can run it from any directories inside ssgs-calc*)

    npm test

### Coverage report 📈
After running the tests, a brief **coverage report** will be displayed in the terminal.
For a more detailed report you can open in your browser the index.html file located at: 

    ./coverage/lcov-report/index.html

## CI 🔁
We have set up a continuous integration (CI) pipeline using GitHub Actions, which automatically executes tests on every push and pull request. 
