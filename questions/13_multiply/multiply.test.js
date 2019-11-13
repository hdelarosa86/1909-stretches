const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('',null)).toThrow();

    expect(() => multiply([],{})).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(typeof multiply(5,4)).toBe('number');

    // test that the returned value is correct
    expect(multiply(4,9)).toBe(36);

    // test some other values
    expect(multiply(3,4)).toBe(12);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    const num1 =Math.floor(Math.random() * 100);
    const num2 =Math.floor(Math.random() * 100);
    expect(multiply(num1,num2)).toBe(num1*num2);
  });
});
