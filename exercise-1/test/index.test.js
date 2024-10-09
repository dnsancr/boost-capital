import { describe, expect, test } from 'vitest';
import exercise1 from "../src/rules.js";
import { testCases, expectedResults } from './fixtures/testCases.js';

describe('Exercise 1', () => {
  testCases.forEach((input, index) => {
    test(`Test Case ${index + 1}`, () => {
      expect(exercise1(input)).toEqual(expectedResults[index]);
    });
  });
});
