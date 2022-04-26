/* eslint-disable max-len */
const Calculator = require('../../app/calculator.js');
const {expect} = require('chai');

describe('Calculator', function() {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });
  afterEach(() => {
    calc = null;
  });

  it('Should Add Two Positive Numbers', function() {
    expect(calc.addNumbers(10, 6)).to.be.equal(16);
  });

  it('Should Add Two Negative Numbers', function() {
    expect(calc.addNumbers(-1, -5)).to.be.equal(-6);
  });

  it('Should Add Negative Number and Positive number', function() {
    expect(calc.addNumbers(1, -5)).to.be.equal(-4);
  });

  it('Should Add Two Positive Double Numbers', function() {
    expect(calc.addNumbers(14.234, 5.1)).to.be.equal(19.334);
  });

  it('Should Add Two Negative Double Numbers', function() {
    expect(calc.addNumbers(-11.34, -5.11)).to.be.equal(-16.45);
  });

  it('Should Add Two Zero Numbers', function() {
    expect(calc.addNumbers(0, 0)).to.be.equal(0);
  });

  it('Should Add Number and Zero Number', function() {
    expect(calc.addNumbers(3.33, 0)).to.be.equal(3.33);
  });

  it('Should Add Two Positive Max Safe Numbers', function() {
    expect(calc.addNumbers(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER))
        .to.be.equal(Infinity);
  });

  it('Should Add Two Positive Max Numbers', function() {
    expect(calc.addNumbers(Number.MAX_VALUE, Number.MAX_VALUE))
        .to.be.equal(Infinity);
  });

  it('Should Add Two Negative Max Safe Numbers', function() {
    expect(calc.addNumbers(-Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER))
        .to.be.equal(-Infinity);
  });

  it('Should Add Two Positive Infinity', function() {
    expect(calc.addNumbers(Infinity, Infinity))
        .to.be.equal(Infinity);
  });

  it('Should Add Two Negative Infinity', function() {
    expect(calc.addNumbers(-Infinity, -Infinity))
        .to.be.equal(-Infinity);
  });


  it('Should Multiply Two Positive Numbers', function() {
    expect(calc.multiplyNumbers(10, 6)).to.be.equal(60);
  });

  it('Should Multiply Two Negative Numbers', function() {
    expect(calc.multiplyNumbers(-1, -5)).to.be.equal(5);
  });

  it('Should Multiply Negative Number and Positive number', function() {
    expect(calc.multiplyNumbers(1, -5)).to.be.equal(-5);
  });

  it('Should Multiply Two Positive Double Numbers', function() {
    expect(calc.multiplyNumbers(14.234, 5.1)).to.be.equal(72.5934);
  });

  it('Should Multiply Two Negative Double Numbers', function() {
    expect(calc.multiplyNumbers(-11.34, -5.11)).to.be.equal(57.9474);
  });

  it('Should Multiply Two Zero Numbers', function() {
    expect(calc.multiplyNumbers(0, 0)).to.be.equal(0);
  });

  it('Should Multiply Number and Zero Number', function() {
    expect(calc.multiplyNumbers(3.33, 0)).to.be.equal(0);
  });

  it('Should Add Two Positive Max Safe Numbers', function() {
    expect(calc.multiplyNumbers(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER))
        .to.be.equal(18014398509481982n);
  });

  it('Should Add Two Positive Max Numbers', function() {
    expect(calc.multiplyNumbers(Number.MAX_VALUE, 1))
        .to.be.equal(Infinity);
  });

  it('Should Add Two Negative Max Safe Numbers', function() {
    expect(calc.multiplyNumbers(-Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER))
        .to.be.equal(-18014398509481982n);
  });

  it('Should Add Two Positive Infinity', function() {
    expect(calc.multiplyNumbers(Infinity, Infinity))
        .to.be.equal(Infinity);
  });

  it('Should Add Two Negative Infinity', function() {
    expect(calc.multiplyNumbers(-Infinity, -Infinity))
        .to.be.equal(-Infinity);
  });
});
