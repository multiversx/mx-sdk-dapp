export const mockWindowLocation = () => {
  if (!window) {
    return;
  }

  const location = window.location;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete window.location;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
