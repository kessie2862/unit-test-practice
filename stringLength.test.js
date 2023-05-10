const stringLength = require('./stringLength');

it("should take a string and return it's character count ", () => {
  const result = stringLength('Prosper');
  expect(result).toBe(7);
});
