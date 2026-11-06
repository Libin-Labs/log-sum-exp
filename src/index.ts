function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function sample(values: readonly number[]): void {
  if (!Array.isArray(values) || !values.length || values.length > 100000)
    throw new RangeError('Sample size1..100000');
  for (const v of values) finite(v);
}
export function logSumExp(values: readonly number[]): number {
  sample(values);
  let max = -Infinity;
  for (const v of values) if (v > max) max = v;
  let sum = 0;
  for (const v of values) sum += Math.exp(v - max);
  const result = max + Math.log(sum);
  if (!Number.isFinite(result)) throw new RangeError('Result overflow');
  return result;
}
