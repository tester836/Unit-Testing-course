import Calculator from '../../app/calculator';
import {expect} from 'chai';

describe('Calculator positive scenarios', function() {
  it('Should Add Two Positive Numbers', function() {
    expect(Calculator.addNumbers(10 + 6)).to.be.equal(16);
  });

  it('Should Add Two Negative Numbers', function() {
    expect(Calculator.addNumbers(-1 + -5)).to.be.equal(-6);
  });

  it('Should Add Negative Number and Positive number', function() {
    expect(Calculator.addNumbers(1 + -5)).to.be.equal(-4);
  });

  it('Should Add Two Positive Double Numbers', function() {
    expect(Calculator.addNumbers(14.234 + 5.1)).to.be.equal(19.334);
  });

  it('Should Add Two Negative Double Numbers', function() {
    expect(Calculator.addNumbers(-11.34 + -5.11)).to.be.equal(-16.44);
  });

  it('Should Add Two Zero Numbers', function() {
    expect(Calculator.addNumbers(0 + 0)).to.be.equal(0);
  });

  it('Should Add Number and Zero Number', function() {
    expect(Calculator.addNumbers(3.33 + 0)).to.be.equal(3.33);
  });


  it('Should Multiply Two Positive Numbers', function() {
    expect(Calculator.multiplyNumbers(10 * 6)).to.be.equal(60);
  });

  it('Should Multiply Two Negative Numbers', function() {
    expect(Calculator.multiplyNumbers(-1 * -5)).to.be.equal(5);
  });

  it('Should Multiply Negative Number and Positive number', function() {
    expect(Calculator.multiplyNumbers(1 * -5)).to.be.equal(-5);
  });

  it('Should Multiply Two Positive Double Numbers', function() {
    expect(Calculator.multiplyNumbers(14.234 * 5.1)).to.be.equal(72.5934);
  });

  it('Should Multiply Two Negative Double Numbers', function() {
    expect(Calculator.multiplyNumbers(-11.34 * -5.11)).to.be.equal(57.9474);
  });

  it('Should Multiply Two Zero Numbers', function() {
    expect(Calculator.addNumbers(0 * 0)).to.be.equal(0);
  });

  it('Should Multiply Number and Zero Number', function() {
    expect(Calculator.addNumbers(3.33 * 0)).to.be.equal(0);
  });
});
