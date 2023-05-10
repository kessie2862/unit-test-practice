const reverseString = require('./reverseString');

it('should take a string as an argument and return it reversed.', () => {
  const result = reverseString('Prosper');
  expect(result).toBe('repsorP');
});
