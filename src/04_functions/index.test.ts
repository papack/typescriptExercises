import { mySumFunction } from "./index";

test("function test", () => {
  let a = 1;
  let b = 49857;
  let c = mySumFunction(a, b);

  expect(c).toBe(49858);
});
