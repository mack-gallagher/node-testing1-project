const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { '   name ': 'mack', 'age ': 21 };
    const result = utils.trimProperties(input);
    const expected = { '   name ': 'mack', 'age ': 21 };
    expect(input).toEqual(expected);
  })

})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { '   name ': 'mack', 'age ': 21 };
    const expected = { name: 'mack', age: 21 };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toMatchObject(expected);
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { '   name ': 'mack', 'age ': 21 };
    const result = utils.trimPropertiesMutation(input);
    expect(result).toBe(input);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [
                    { integer: 1 },
                    { integer: 2 },
                    { integer: 3 },
                    { integer: 6 },
                    { integer: 5 },
                  ];
    const expected = { number: 6 };
    const result = utils.findLargestInteger(input);
    expect(result).toEqual(expected);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const initial_count = counter.countDown();
    expect(initial_count).toEqual(3);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
    const second_call = counter.countDown();
    expect(second_call).toEqual(2);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    for (let i = 3; i > -2; i--) {
      counter.countDown();
    }
    const final_value = counter.countDown();
    expect(final_value).toEqual(0);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const first_call = seasons.next();
    const expected = "summer";
    expect(first_call).toEqual(expected);
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    const second_call = seasons.next();
    const expected = "fall";
    expect(second_call).toEqual(expected);
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    for (let i = 0; i < 2; i++) {
      seasons.next();
    }
    const third_call = seasons.next();
    const expected = "winter";
    expect(third_call).toEqual(expected);
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 3; i++) {
      seasons.next();
    }
    const fourth_call = seasons.next();
    const expected = "spring";
    expect(fourth_call).toEqual(expected);
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 0; i < 4; i++) {
      seasons.next();
    }
    const fifth_call = seasons.next();
    const expected = "summer";
    expect(fifth_call).toEqual(expected);
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    const fortieth_call = seasons.next();
    const expected = "spring";
    expect(fortieth_call).toEqual(expected);
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const expected_miles = 30;
    const actual_miles = focus.drive(30);
    expect(actual_miles).toEqual(expected_miles);
  })
  test('[16] driving the car uses gas', () => {
    const expected_gallons_used = 1;
    const initial_tank = focus.tank;
    focus.drive(30);
    const end_tank = focus.tank;
    const actual_gallons_used = initial_tank - end_tank;
    expect(actual_gallons_used).toBeCloseTo(expected_gallons_used);
  })
  test('[17] refueling allows to keep driving', () => {
    const expected_gallons_remaining = 1;
    focus.drive(30 * 20);
    focus.refuel(20);
    focus.drive(30 * 19);
    const actual_gallons_remaining = focus.tank;
    expect(actual_gallons_remaining).toBeCloseTo(expected_gallons_remaining);
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    const expected_gallons_remaining = focus.tank;
    focus.refuel(30);
    const actual_gallons_remaining = focus.tank;
    expect(actual_gallons_remaining).toBeCloseTo(expected_gallons_remaining);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const expected = true;
    const actual = await utils.isEvenNumberAsync(2);
    expect(actual).toEqual(expected);
  })
  test('[20] resolves false if passed an odd number', async () => {
    const expected = false;
    const actual = await utils.isEvenNumberAsync(3);
    expect(actual).toEqual(expected);
  })
})
