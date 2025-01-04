/** toHaveBeenCalledTimes */
function drinkEach(callback: Function, flavour: any) {
  if (flavour) {
    flavour.forEach((element: string) => {
      callback(element);
    });
  }
}

test('drinkEach drinks each drink', () => {
  const drink = jest.fn();
  drinkEach(drink, ['lemon', 'octopus', 'coconut']);
  expect(drink).toHaveBeenCalledTimes(3);
});

/** toHaveBeenCalledWith */
class LaCroix {
  flavour: string;

  constructor(flavour: string) {
    this.flavour = flavour;
  }
}

const registry: LaCroix[] = [];
function register(beverage: LaCroix): void {
  registry.push(beverage);
}

function applyToAll(fn: (beverage: LaCroix) => void): void {
  registry.forEach((beverage) => fn(beverage));
}

test('registeration applies correctly to orange La Croix', () => {
  const beverage = new LaCroix('orange');
  register(beverage);
  const f = jest.fn();
  applyToAll(f);
  expect(f).toHaveBeenCalledWith(beverage);
});
