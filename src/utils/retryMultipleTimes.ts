import { sleep } from './asyncActions';

interface Options {
  retries: number;
  delay?: number;
}

const executeAsyncCall = async (
  cb: (..._args: any[]) => any,
  options: Options,
  args: any[],
  retries = 0
): Promise<any | null> => {
  try {
    return await cb(...args);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    if (retries < options.retries) {
      if (options?.delay != null) {
        await sleep(options.delay);
      }

      return await executeAsyncCall(cb, options, args, retries + 1);
    }

    return null;
  }
};

export const retryMultipleTimes =
  (
    cb: (..._args: any[]) => any,
    options: Options = { retries: 5, delay: 500 }
  ) =>
  async (...args: any[]) => {
    return await executeAsyncCall(cb, options, args);
  };
