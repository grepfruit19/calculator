/**
 * Performs the actual calculation.
 * @param {Number} left
 * @param {String} operator
 * @param {Number} right
 * @returns
 */
function performCalculation(left, operator, right) {
  switch (operator) {
    case "x":
      return left * right;
    case "/":
      return left / right;
    case "+":
      return left + right;
    case "-":
      return left - right;
    default:
      throw new Error(`Received an invalid operator: ${operator}`);
  }
}

/**
 * Pops an operator and its neighboring numbers from an input array,
 * perform the calculation, and then splice that result into a new array.
 * This will first look for an 'x' or '/', and then '+' or '-'.
 * @param {Array} input
 */
function popOperator(input) {
  let operatorIndex;
  let result;
  operatorIndex = input.findIndex((value) => value === "x" || value === "/");
  if (operatorIndex && operatorIndex > -1) {
    result = performCalculation(
      input[operatorIndex - 1],
      input[operatorIndex],
      input[operatorIndex + 1]
    );
  } else {
    operatorIndex = input.findIndex((value) => value === "+" || value === "-");
    result = performCalculation(
      input[operatorIndex - 1],
      input[operatorIndex],
      input[operatorIndex + 1]
    );
  }
  // Replace the contents of that array with the new output
  // Splice modifies the array itself
  input.splice(operatorIndex - 1, 3, result);
  return input;
}

/**
 * Accepts an array of numbers and operators (i.e., '+', '-'), performs calculations
 * until there are no more operators then returns the result as a single Number
 * @param {Array} input
 * @returns {Number} output of the calculations
 */
function calculate(input) {
  // TODO: Input validation, see tests for more details.
  let workingArray = input;
  while (workingArray.length > 1) {
    // Making popOperator its own function could be an over-abstraction,
    // but I think it makes it more extensible later, in case you wanted
    // to handle parentheses or something.
    workingArray = popOperator(workingArray);
  }
  return workingArray[0];
}

module.exports = {
  performCalculation,
  popOperator,
  calculate,
};
