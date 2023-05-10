const capitalize = require('./capitalize');

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('prosper')).toBe('Prosper');
    expect(capitalize('kessie')).toBe('Kessie');
    expect(capitalize('microverse')).toBe('Microverse');
    expect(capitalize('')).toBe('');
  });
});
