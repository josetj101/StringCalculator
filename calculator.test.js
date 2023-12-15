const Add = require('./calculator');

describe('String Calculator', () => {
  test('Validate Add function', () => {
    expect(Add).toBeDefined();
  });
  test('Validate Add is a function', () => {
    expect(Add).toBeFunction();
  });
  test('Validate Add function to input only string', () => {
    expect(() => Add(0)).toThrowWithMessage(TypeError, 'Invalid input');
  });
  test('Validate empty string input to return 0', () => {
    expect(Add('')).toBe(0);
  });
  test('Validate single number string to return the number', () => {
    expect(Add('5')).toBe(5);
  });
  test('Validate mulitple number separated by comma to return sum', () => {
    expect(Add('1,2')).toBe(3);
  });
  test('Validate multiple number separated by newline char to return sum', () => {
    expect(Add('1\n2,3')).toBe(6);
  });
  test('Validate new delimiter support for string', () => {
    expect(Add('//;\n1;2')).toBe(3);
  });
});