import { myBoolean, myNumber, myString, myArray } from "./index";

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

//Arrays
test("Array", () => {
  expect(myArray).toBeInstanceOf(Array);
  expect(myArray.length).toBe(4);

  for (let i = 0; i < myArray.length; i++) {
    expect(myArray[i]).toBe(i + 1);
  }
});
