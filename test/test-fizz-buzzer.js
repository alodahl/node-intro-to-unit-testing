const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return `fizzbuzz` for multiples of 15', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [ 15, -15, 30, 150];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz-buzz');
    });
  });

  it('should return `fizz` for multiples of 3', function() {

    const normalCases = [ 3, -9, 9, 21];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz');
    });
  });


  it('should return `buzz` for multiples of 5', function() {

    const normalCases = [ 5, -10, 20, 5555];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal(`buzz`);
    });
  });


  it('should return the value of any other number', function() {

    const normalCases = [
      {a: 2, expected: 2},
      {a: 1001, expected: 1001},
      {a: -4, expected: -4}
    ];
    const expected = normalCases.expected
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if arg not a number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['a', true, 'string', [1, 2]];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});
