import maxBag from '@/labuladong/bag';

test('maxBag', () => {
  expect(maxBag(4, 3, [2, 1, 3], [4, 2, 3])).toBe(6);
});
