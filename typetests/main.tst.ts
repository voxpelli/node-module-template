import { describe, expect, it } from 'tstyche';

import { main } from '../index.js';

describe('main export', () => {
  it('should have async main signature', () => {
    expect(main).type.toBeAssignableTo<() => Promise<void>>();
  });
});
