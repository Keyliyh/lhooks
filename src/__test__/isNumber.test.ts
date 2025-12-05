import { isNumber } from '../index';

describe('isNumber', () => {
  it('should work', () => {
    expect(isNumber(1)).toEqual(true);
  });

  it('lyh', () => {
    expect(isNumber('lyh')).toEqual(false);
  });
});
