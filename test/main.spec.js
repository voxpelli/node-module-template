import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { isType } from '@voxpelli/typed-utils';

import { main } from '../index.js';

describe('something', () => {
  it('should work', async () => {
    await main();

    // Example usage of @voxpelli/typed-utils for type checking
    const value = 'example';
    assert.ok(isType(value, 'string'));
  });
});
