import { describe, expectTypeOf, test } from "vitest";
import { squared } from "../src/basic.js";

describe("type testing", () => {
  describe("type testing", () => {
    test("basic return type", () => {
      expectTypeOf(squared(1)).toEqualTypeOf<number>();
    });

    // Commenting this describe will not block the test
    describe("type testing", () => {
      test("basic return type", () => {
        expectTypeOf(squared(1)).toEqualTypeOf<number>();
      });
    });
  });

  // Or choosing to comment the describe won't block the test
  describe("type testing", () => {
    test("basic return type", () => {
      expectTypeOf(squared(1)).toEqualTypeOf<number>();
    });
  });
});
