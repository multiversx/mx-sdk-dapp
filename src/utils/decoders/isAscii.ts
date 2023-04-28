export const isAscii = (str: string) => !/[^\x00-\x7F]/gm.test(str);
