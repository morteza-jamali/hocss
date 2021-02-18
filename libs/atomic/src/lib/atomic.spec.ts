import { atomic } from './atomic';

describe('atomic', () => {
  it('should work', () => {
    expect(atomic()).toEqual('atomic');
  });
});
