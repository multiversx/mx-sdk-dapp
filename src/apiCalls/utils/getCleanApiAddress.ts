export const getCleanApiAddress = (apiAddress: string) => {
  return apiAddress.endsWith('/') ? apiAddress.slice(0, -1) : apiAddress;
};
