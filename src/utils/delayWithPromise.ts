export function delayWithPromise(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
