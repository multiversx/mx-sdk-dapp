export const isHexValidCharacters = (str: string) => /^[0-9a-f]+$/i.test(str);

export const isHexValidLength = (str: string) => {
  return str.length % 2 === 0;
};
