const assert = require('assert');
const sum = require('../sum');

try {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(-1, 1), 0);
  console.log('✅ Tests passed');
} catch (err) {
  console.error('❌ Test failed:', err);
  process.exit(1);
}
