const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return `fizzbuzz`, `fizz`, `buzz`, or the original number', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 2, expected: 2},
      {a: 1001, expected: 1001},
      {a: 15, expected: 'fizz-buzz'},
      {a: 3, expected: 'fizz'},
      {a: 5, expected: 'buzz'}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
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
