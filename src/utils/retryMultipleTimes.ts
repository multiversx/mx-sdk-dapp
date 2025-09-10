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

      return await executeAsyncCall(cb, options, args, retries + 1);
    }

    console.error(`Failed after ${options.retries} retries:`, error);
    throw error;
  }
};

export const retryMultipleTimes =
  (
    cb: (...args: any[]) => any,
    options: Options = { retries: 5, delay: 500 }
  ) =>
  async (...args: any[]) => {
    return await executeAsyncCall(cb, options, args);
  };
