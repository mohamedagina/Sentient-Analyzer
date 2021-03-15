import "babel-polyfill";
import { postUrl } from "../src/client/js/formHandler";

describe("checking if postUrl function is defined", () => {
  test("Testing the postUrl() function", () => {
    expect(postUrl).toBeDefined();
  });
});
