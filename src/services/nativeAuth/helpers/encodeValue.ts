const escape = (str: string) => {
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
};

export const encodeValue = (str: string) =>
  escape(Buffer.from(str, 'utf8').toString('base64'));
