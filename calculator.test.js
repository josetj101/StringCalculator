const Add = require('./calculator');

describe('String Calculator', () => {
  test('Validate Add function', () => {
    expect(Add).toBeDefined();
  })
  test('Validate Add is a function', () => {
    expect(Add).toBeFunction();
  })
});