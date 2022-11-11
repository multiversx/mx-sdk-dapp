export const getTrimmedHash = (address: string, divider = 10): string =>
  `${address.substring(
    0,
    Math.floor(address.length / divider)
  )}...${address.substring(
    address.length - Math.ceil(address.length / divider)
  )}`;
