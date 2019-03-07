// As a user I should be able to perform an operation on two single digit numbers and get the result
var number1 = null;
var number2 = null;
var operator = null;

// As a user, when I click a number button, I expect it to appear in the screen
  // Get all the number buttons
  var numberButtons = document.getElementsByClassName("buttonNum");
  // Get the screen
  var display = document.getElementById("screen");
  // Add click event listeners to the buttons that will get the value of the button
  for (var i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", addNumber);
  }
  // Create a condition to check if there is already an operator, if there is, change the screen's display to that value and log it as number 2, otherwise, log it as number 1
  function addNumber() {
    if(operator) {
      number2 = parseInt(this.innerHTML);
      display.innerHTML = number2;
    }
    else {
      number1 = parseInt(this.innerHTML);
      display.innerHTML = number1;
    }
  }

// As a user, if I have already entered the first number, when I click an operator button, I expect it to appear in the screen
  // Get all the operator buttons
  var operatorButtons = document.getElementsByClassName("operator");
  // Add click event listeners to the buttons that will get the value of the operator
  for (var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", addOperator);
  }
  // Create a condition to check if there is already a first number logged, if there is, change the screen's display to that operator and log the operator I just clicked

  // As a user, if I have already entered the first number and an operator, when I click a number button, I expect that to go into the screen

  function addOperator() {
    if (number1) {
      operator = this.innerHTML;
      display.innerHTML = operator;
    }
  }

// As a user, if I have already entered a valid operation, when I click the equals button, I expect to see the correct result in the screen
  // Get the equals button
  var equalsButton = document.getElementsByClassName("equals")[0];
  // Add click event listener to the equals button
  equalsButton.addEventListener("click", evaluateOperation);
  // Create a condition to check if I have number 1, number 2 and an operator, if so, then perform the operation, then display the result
  function evaluateOperation() {
    if(number1 && number2 && operator) {
      switch(operator) {
        case "+":
          display.innerHTML = number1 + number2
          break;
        case "-":
          display.innerHTML = number1 - number2
          break;
        case "*":
          display.innerHTML = number1 * number2
          break;
        case "/":
          display.innerHTML = number1 / number2
          break;
      }
      display.innerHTML = eval(number1 + operator + number2);
    }
  }

// As a user, if I click the clear button, I expect to see Sparta Calculator in the screen
  // Get the clear button
  var clearButton = document.getElementsByClassName("buttonClear")[0];
  // Add event listener to the clear button that will change the screen's value to Sparta Calculator and reset the values of number 1, number 2 and operator
  clearButton.addEventListener("click", clearData);

  function clearData() {
    display.innerHTML = "Sparta Calculator";
    number1 = null;
    number2 = null;
    operator = null;
  }
