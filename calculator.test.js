const { add, sub, mul, div } = require('./calculator');

describe('Calculator', () => {
  test('add', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('sub', () => {
    expect(sub(5, 2)).toBe(3);
  });

  test('mul', () => {
    expect(mul(4, 6)).toBe(24);
  });

  test('div', () => {
    expect(div(10, 2)).toBe(5);
  });

  test('div by zero throws', () => {
    expect(() => div(1, 0)).toThrow('Cannot divide by zero.');
  });
}); 