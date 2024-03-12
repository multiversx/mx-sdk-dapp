export const notInitializedError = (caller: string) => () => {
  throw new Error(`Unable to perform ${caller}, Provider not initialized`);
};
