const { numberIsEven } = require("../src/even-number");

test("add function works correctly", () => {
  expect(numberIsEven(2)).toBe(true);
  expect(numberIsEven(15)).toBe(false);
});