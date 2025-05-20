export const mockWindowLocation = () => {
  if (!window) {
    return;
  }

  const location = window.location;

  // @ts-ignore
  delete window.location;

  // @ts-ignore
  window.location = Object.defineProperties(
    {},
    {
      ...Object.getOwnPropertyDescriptors(location),
      assign: {
        configurable: true,
        value: jest.fn()
      }
    }
  );
};
