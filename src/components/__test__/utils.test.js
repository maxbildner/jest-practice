// FROM REACT JEST VIDEO TUTORIAL
// https://www.youtube.com/watch?v=QzznzOlkgGw&list=PLLnpHn493BHEqP3gD1pCJYhxX6v2gBZzj&index=4
// OFFICIAL DOCS
// https://jestjs.io/docs/api#testname-fn-timeout

import { formatNumber } from "../utils";

// test(description, cb, timeout)
// - description (str) = info about what you're testing
// - cb (call back) = code that has expectations to test
// - timeout (milliseconds) = optional. how long to wait before aborting (default is 5 seconds)

// - adds commas/rounds to given decimal. Example:  "1234.213" => "1,234.21"
test("formatNumber properly inserts commas and cuts off decimals to input x decimal places (not rounding)", () => {
  // expect input with no 2nd argument to return comma separated string automatically to 2 decimals (not rounded)
  // - toBe tests compares memory location!! so even if arrays look the same, [1,2].toBe([1,2]) is FALSE!
  expect(formatNumber(1234.567)).toBe("1,234.56");
  expect(formatNumber("1234.567")).toBe("1,234.56");
  expect(formatNumber("1234")).toBe("1,234");
  expect(formatNumber(1234)).toBe("1,234");
  // expect(formatNumber(01234)).toBe("1,234");

  expect(formatNumber("1234.567", 2)).toBe("1,234.56");
  expect(formatNumber(1234.567, 2)).toBe("1,234.56");
  expect(formatNumber("1234.567", 3)).toBe("1,234.567");
  expect(formatNumber("1234.5670", 3)).toBe("1,234.567");
  expect(formatNumber("1234.567891", 5)).toBe("1,234.56789");
  // expect(formatNumber("01234.567891", 5)).toBe("1,234.56789");
  expect(formatNumber("1234567.891234", 5)).toBe("1,234,567.89123");
  expect(formatNumber(1234567.891234, 5)).toBe("1,234,567.89123");
});
