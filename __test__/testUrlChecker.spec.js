import { checkUrl } from "../src/client/js/urlChecker";

describe("Testing the url validator functionality", () => {
  test("Testing the checkUrl() function", () => {
    expect(checkUrl).toBeDefined();
  });
});
