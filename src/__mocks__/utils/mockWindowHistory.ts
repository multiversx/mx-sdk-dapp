export const mockWindowHistory = () => {
  const history = window?.history;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete window?.history;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window?.history = Object.defineProperties(
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
