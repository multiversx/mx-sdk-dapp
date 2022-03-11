export function isStringBase64(string: string) {
  try {
    return Buffer.from(string, 'base64').toString() === atob(string);
  } catch (err) {
    return false;
  }
}

export function encodeToBase64(string: string) {
  return btoa(string);
}

export function decodeBase64(string: string) {
  return atob(string);
}
