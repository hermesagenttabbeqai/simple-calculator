import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../public/js/engine.js';

test('addition: 3+4 returns 7', () => {
  assert.strictEqual(calculate('3+4'), 7);
});

test('division: 10/2 returns 5', () => {
  assert.strictEqual(calculate('10/2'), 5);
});

test('power: 2^8 returns 256', () => {
  assert.strictEqual(calculate('2^8'), 256);
});

test('sqrt: sqrt(9) returns 3', () => {
  assert.strictEqual(calculate('sqrt(9)'), 3);
});

test('percentage: 50% returns 0.5', () => {
  assert.strictEqual(calculate('50%'), 0.5);
});

test('division by zero: 5/0 returns "Error"', () => {
  assert.strictEqual(calculate('5/0'), 'Error');
});

test('sqrt of negative: sqrt(-1) returns "Error"', () => {
  assert.strictEqual(calculate('sqrt(-1)'), 'Error');
});

test('decimal multiplication: 2.5*4 returns 10', () => {
  assert.strictEqual(calculate('2.5*4'), 10);
});
