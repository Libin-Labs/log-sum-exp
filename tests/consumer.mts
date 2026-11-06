import { logSumExp } from '@lp-labs/log-sum-exp';
if (Math.abs(logSumExp([0, 0]) - Math.log(2)) > 1e-12) throw new Error('Log sum');
// @ts-expect-error invalid argument must be rejected by declarations
logSumExp(['0']);
