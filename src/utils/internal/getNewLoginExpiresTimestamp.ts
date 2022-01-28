export function getNewLoginExpiresTimestamp() {
  return new Date().setHours(new Date().getHours() + 24);
}

export default getNewLoginExpiresTimestamp;
