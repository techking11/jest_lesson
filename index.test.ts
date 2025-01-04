function bestLaCroixFlavor() {
  return 'grapefruit';
}

/** expect */
test('the best flavor is grapefruit', () => {
  expect(bestLaCroixFlavor()).toBe('grapefruit');
});

/** modifiers */
// not
test('the best flavor is no coconut', () => {
  expect(bestLaCroixFlavor()).not.toBe('coconut');
});

// resolves
test('resolves to lemon', () => {
  return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
});

// resolves using async / await
test('resolves to lemon', async () => {
  await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
  await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');
});

// rejects
test('rejects to octopus', () => {
  return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(
    'octopus'
  );
});

test('rejects to octopus', async () => {
  await expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus');
});

/** matchers */

// toBe
const can = {
  name: 'pamplemousse',
  ounces: 12,
};

describe('the can', () => {
  test('has the 12 ounces', () => {
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse');
  });
});

/** toHaveBeenCalled */

function drinkAll(callback: Function, flavor: string) {
  if (flavor !== 'octopus') {
    callback(flavor);
  }
}

describe('drinkAll', () => {
  test('drinks something lemon-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'lemon');
    expect(drink).toHaveBeenCalled();
  });

  test('does not drink something octopus-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'octopus');
    expect(drink).not.toHaveBeenCalled();
  });
});
