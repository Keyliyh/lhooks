import { sum } from '../index';

describe('sum', () => {
  it('should work', () => {
    expect(sum(1, 2)).toEqual(3);
  });

  it('1 + 2 = 3', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
