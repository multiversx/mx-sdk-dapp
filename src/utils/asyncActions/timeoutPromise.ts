export const timeoutPromise = async (
  promise: Promise<any> | undefined,
  time: number,
  exception: symbol
) => {
  let timer: NodeJS.Timeout;
  return Promise.race([
    promise,
    new Promise((_r, rej) => (timer = setTimeout(rej, time, exception)))
  ]).finally(() => clearTimeout(timer));
};
