export const isHexValidCharacters = (str: string) => {
  return str.toLowerCase().match(/[0-9a-f]/g);
};

export const isHexValidLength = (str: string) => {
  return str.length % 2 === 0;
};
