export const capitalizeFirstLetter = (str: string) => {
  return str.length > 1 ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};
