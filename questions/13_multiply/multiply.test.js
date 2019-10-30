const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('',null)).toThrow();

    expect(() => multiply([],{})).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(5,4).toBe();

    // test that the returned value is correct
    expect(4,9).toBe(36);

    // test some other values
    expect(6,3).toBe(18);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {

  });
});
