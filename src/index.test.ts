import { hello_world } from "./index";

describe("Test", () => {
    test("Hello World test", () => {
        expect(hello_world()).toBe(true);
    });
});
