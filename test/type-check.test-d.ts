import { describe, expectTypeOf, test } from 'vitest';
import { squared } from '../src/basic.js';

describe('type testing', () => {
  test('basic return type', () => {
    expectTypeOf(squared(1)).toEqualTypeOf<number>();
  });
});
