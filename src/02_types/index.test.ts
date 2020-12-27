import { myBoolean, myNumber } from "./index";

// Boolean
test("Boolean Variable", () => {
  expect(typeof myBoolean).toBe("boolean");
  expect(myBoolean).toBe(true);
});

//Numbers
test("Number Variable", () => {
  expect(typeof myNumber).toBe("number");
  expect(myNumber).toBe(42);
});
