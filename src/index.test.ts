import { hello } from "./index";

describe("Test", () => {
    test("Hello World test", () => {
        expect(hello("world")).toBe(true);
        expect(hello("planet")).toBe(false);
    });
});
