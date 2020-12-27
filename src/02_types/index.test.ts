import { myBoolean } from "./index";

// Boolean
test("Boolean Variable", () => {
  expect(typeof myBoolean).toBe("boolean");
  expect(myBoolean).toBe(true);
});
