import { myBoolean, myNumber, myString } from "./index";

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

//String
test("String Variable", () => {
  expect(typeof myString).toBe("string");
  expect(myString).toBe("Lorem ipsum");
});