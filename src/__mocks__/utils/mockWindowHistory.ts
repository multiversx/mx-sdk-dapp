export const mockWindowHistory = () => {
  if (!window) {
    return;
  }

  const history = window.history;

  // @ts-ignore
  delete window.history;

  // @ts-ignore
  window.history = Object.defineProperties(
    {},
    {
      ...Object.getOwnPropertyDescriptors(history),
      pushState: {
        configurable: true,
        value: jest.fn()
      }
    }
  );
};
