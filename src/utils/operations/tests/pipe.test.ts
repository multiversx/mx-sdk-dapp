import pipe from './../pipe';
describe('pipe tests', () => {
  test('pipe basic test', () => {
    const result = pipe(2)
      .if(false)
      .then(3)

      .if(true)
      .then((current) => current + 2)

      .if(false)
      .then(5)

      .then((current) => current + 2)
      .valueOf();

    expect(result).toStrictEqual(6);
  });
  test('pipe undefined test', () => {
    const result = pipe(undefined)
      .if(true)
      .then((current) => current)
      .then((current) => current)
      .valueOf();

    expect(result).toStrictEqual(undefined);
  });
});
