const {
  performCalculation,
  popOperator,
  calculate,
} = require("../calculator/calculator");

describe("performCalculation should handle basic calculations", () => {
  test("adds numbers correctly", () => {
    expect(performCalculation(2, "+", 2)).toEqual(4);
  });

  test("subtracts numbers correctly -- produces negative number", () => {
    expect(performCalculation(1, "-", 2)).toEqual(-1);
  });

  test("subtracts numbers correctly -- if one number is negative", () => {
    expect(performCalculation(2, "-", -2)).toEqual(4);
  });

  test("multiplies numbers correctly -- multiply negative number", () => {
    expect(performCalculation(2, "x", -2)).toEqual(-4);
  });

  test("divides numbers correctly", () => {
    expect(performCalculation(2, "/", -2)).toEqual(-1);
  });
});

describe("popOperator should perform a calculation and then return a smaller array", () => {
  test("adds numbers correctly", () => {
    expect(popOperator([2, "+", 2])).toEqual([4]);
  });
});

describe("calculate handles multi-step calculations properly", () => {
  test("handles multi-step calculations", () => {
    expect(calculate([2, "+", 2, "+", 2])).toEqual(6);
  });

  test("handles order of operations correctly", () => {
    // The incorrect order of operations would produce 12.
    expect(calculate([2, "+", 2, "x", 3])).toEqual(8);
  });
});

// I might handle this later.
// describe("throw conditions", () => {
//   test("should throw if two operators in a row", () => {
//     // Not sure if this syntax is correct.
//     expect(calculate([2, "+", "+", 2])).toThrow();
//   });

//   test("should throw if two numbers in a row", () => {
//     // Not sure if this syntax is correct.
//     expect(calculate([2, 2, "+", 2])).toThrow();
//   });

//   test("should throw if it ends with an operator", () => {
//     // Not sure if this syntax is correct.
//     expect(calculate([2, 2, "+", 2])).toThrow();
//   });

//   test("should throw if it starts with an operator", () => {
//     // Not sure if this syntax is correct.
//     expect(calculate([2, 2, "+", 2])).toThrow();
//   });
// });
