/**
 * A simple calculator contains Add and Multiply methods
 * @class Calculator
 */
class Calculator {
  /**
     * Creates an instance of Calculator.
     * @memberOf Calculator
     */
  constructor() {
  };

  /**
   * @param {Number} a first number
   * @param {Number} b second number
   * @return {Number} addition of two numbers
   * @memberOf Calculator
   */
  addNumbers(a, b) {
    return Number(a + b);
  };

  /**
   * @param {Number} a first number
   * @param {Number} b second number
   * @return {Number} multiplication of two numbers
   * @memberOf Calculator
   */
  multiplyNumbers(a, b) {
    return Number(a * b);
  };
};

module.exports = Calculator;
