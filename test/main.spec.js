import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { assertType } from '@voxpelli/typed-utils';

import { main } from '../index.js';

describe('something', () => {
  it('should work', async () => {
    await main();

    // Example usage of @voxpelli/typed-utils for type checking
    const value = 'example';
    assertType(value, 'string');

    // Example usage of node:assert/strict for type checking
    const value2 = 'example';
    assert.equal(value2, 'example');
  });
});
