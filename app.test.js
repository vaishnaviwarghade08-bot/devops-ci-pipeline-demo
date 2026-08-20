const add = require('./app.js');

test('adds 2 + 6 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});
