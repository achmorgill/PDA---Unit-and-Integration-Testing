var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('test add function', function(){
    calculator.add(2);
    assert.equal(2, calculator.runningTotal);
  });

  it('test subtact function', function(){
    calculator.subtract(2);  
    assert.equal(-2, calculator.runningTotal);
  });

  it('test multiply function', function(){
   
    calculator.multiply(3);
    assert.equal(0, calculator.runningTotal);
  });

  it('test divide function', function(){
    calculator.divide(2);  
    assert.equal(0, calculator.runningTotal);
  });

  it('test numberClick function', function(){
    calculator.numberClick(3);  
    assert.equal(3, calculator.runningTotal);
  });

  it('test operatorClick + function', function() {
    calculator.operatorClick('+');
    assert.equal('+', calculator.previousOperator);
  });

  it('test operatorClick - function', function() {
    calculator.operatorClick('-');
    assert.equal('-', calculator.previousOperator);
  });

  it('test operatorClick / function', function(){
    calculator.operatorClick('/');
    assert.equal('/', calculator.previousOperator);
  });

  it('test operatorClick * function', function(){
    calculator.operatorClick('*');
    assert.equal('*', calculator.previousOperator);
  });



  it('test clearClick function', function(){
    calculator.clearClick();
    assert.equal(null, calculator.previousOperator);
    assert.equal(null, calculator.previousTotal);
    assert.equal(0, calculator.runningTotal)
  });

  it('test -5 - 7', function(){
    calculator.add(-5);
    calculator.operatorClick('=');
    calculator.subtract(7);
    assert.equal(-12, calculator.runningTotal);

  });

  it('test 3 x 5 = 15', function() {
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
  });


  it('test 21/7 = 3', function() {
    calculator.numberClick(21);
    calculator.operatorClick('=');
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  });

  it('test 1 + 4 = 5', function() {
    calculator.numberClick(1);
    calculator.operatorClick('=');
    calculator.add(4);
    assert.equal(5, calculator.runningTotal);
  });

  it('test 7 - 4 = 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('=');
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  });

  it('test concatenating numbers 1230', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(0);
    calculator.operatorClick('=');
    assert.equal(1230, calculator.runningTotal);
  });

  it('test 20 / 10 * 4 + 6 - 2', function(){
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick('=');
    calculator.divide(10);
    calculator.operatorClick('=');
    calculator.multiply(4);
    calculator.operatorClick('=');
    calculator.add(6);
    calculator.operatorClick('=');
    calculator.subtract(2);
    assert.equal(12, calculator.runningTotal);
  });

  it('test 10 / 0 is infinity', function(){
    calculator.numberClick(10);
    calculator.operatorClick('=');
    calculator.divide(0);
    calculator.operatorClick('=');
    assert.equal(Infinity, calculator.runningTotal);
  })



});


