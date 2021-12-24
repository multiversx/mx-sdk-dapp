const base64Regex =
  /(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)/;

export function isStringBase64(string: string) {
  return base64Regex.test(string);
}

export function encodeToBase64(string: string) {
  return btoa(string);
}

export function decodeBase64(string: string) {
  return atob(string);
}
