import { forEach } from './01_for_each';

const mockCallBack = jest.fn((x) => 42 + x);

test('forEach mock functions', () => {
  forEach([1, 2], mockCallBack);

  // expect mock function was called twice
  expect(mockCallBack.mock.calls).toHaveLength(2);

  // expect the first argument of the first call to the function was 1
  expect(mockCallBack.mock.calls[0][0]).toBe(1);

  // expect the first argument of the second call to the function was 2
  expect(mockCallBack.mock.calls[1][0]).toBe(2);

  // the return value of the first call to the function was 43
  expect(mockCallBack.mock.results[0].value).toBe(43);
});
