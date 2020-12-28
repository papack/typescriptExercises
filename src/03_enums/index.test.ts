import { myEnum } from "./index";

test("enum", () => {
  expect(myEnum.RED).toBe("#ff0000");
  expect(myEnum.GREEN).toBe("#00ff00");
  expect(myEnum.BLUE).toBe("#0000ff");
});
