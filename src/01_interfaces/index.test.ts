import { isExpression } from "@babel/types";
import { IPerson } from "./index";

test("Test IPerson Interface", () => {
  const Person: IPerson = {
    name: "Franz Test",
    age: 29,
  };

  expect(Person.name).toBe("Franz Test");
  expect(Person.age).toBe(29);
});
