import { sleep } from './asyncActions';

interface Options {
  retries: number;
  delay?: number;
}

const executeAsyncCall = async (
  cb: (...args: any[]) => any,
  options: Options,
  args: any[],
  retries = 0
): Promise<any | null> => {
  try {
    return await cb(...args);
  } catch (error) {
    if (retries < options.retries) {
      if (options?.delay != null) {
        await sleep(options.delay);
      }

      return executeAsyncCall(cb, options, args, retries + 1);
    }

    return null;
  }
};

export const retryMultipleTimes = (
  cb: (...args: any[]) => any,
  options: Options = { retries: 5, delay: 500 }
) => async (...args: any[]) => {
  return executeAsyncCall(cb, options, args);
};
