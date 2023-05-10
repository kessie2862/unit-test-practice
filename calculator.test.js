const calculator = require('./calculator');

// Add method
describe('add method', () => {
  test('adds two positive numbers', () => {
    expect(calculator.add(7, 3)).toBe(10);
  });

  test('adds a positive and a negative number', () => {
    expect(calculator.add(1, -5)).toBe(-4);
  });

  test('adds two negative numbers', () => {
    expect(calculator.add(-4, -3)).toBe(-7);
  });
});

// Subtract method
describe('subtract method', () => {
  test('subtracts a positive number from a larger positive number', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test('subtracts a positive number from a smaller positive number', () => {
    expect(calculator.subtract(2, 5)).toBe(-3);
  });

  test('subtracts a negative number from a positive number', () => {
    expect(calculator.subtract(5, -2)).toBe(7);
  });
});

// Divide method
describe('divide method', () => {
  test('divides a larger positive number by a smaller positive number', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('divides a smaller positive number by a larger positive number', () => {
    expect(calculator.divide(3, 9)).toBeCloseTo(0.333333);
  });

  test('divides a negative number by a positive number', () => {
    expect(calculator.divide(-6, 2)).toBe(-3);
  });
});

// Multiply method
describe('multiply method', () => {
  test('multiplies two positive numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('multiplies a positive and a negative number', () => {
    expect(calculator.multiply(2, -3)).toBe(-6);
  });

  test('multiplies two negative numbers', () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });
});
