import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('zero logits', () => {
  assert.ok(Math.abs(api.logSumExp([0, 0]) - Math.log(2)) < 1e-14);
});
test('known sum', () => {
  assert.ok(Math.abs(api.logSumExp([Math.log(2), Math.log(3)]) - Math.log(5)) < 1e-14);
});
test('large positive', () => {
  assert.ok(Math.abs(api.logSumExp([1000, 1000]) - 1000 - Math.log(2)) < 1e-12);
});
test('large negative', () => {
  assert.ok(Math.abs(api.logSumExp([-1000, -1000]) + 1000 - Math.log(2)) < 1e-12);
});
test('singleton and extreme', () => {
  assert.equal(api.logSumExp([23]), 23);
  assert.equal(api.logSumExp([-Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE);
});
test('invalid sample', () => {
  assert.throws(() => api.logSumExp([]));
  assert.throws(() => api.logSumExp([NaN]));
  assert.throws(() => api.logSumExp([, 1]));
});
