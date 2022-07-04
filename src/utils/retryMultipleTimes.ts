import { sleep } from './asyncActions';

interface Options {
  retries: number;
  delay?: number;
}

export async function retryMultipleTimes(
  cb: any,
  options: Options = { retries: 5, delay: 500 },
  retries = 0
): Promise<any | null> {
  try {
    return await cb;
  } catch (error) {
    if (retries < options.retries) {
      if (options?.delay != null) {
        await sleep(options.delay);
      }

      return retryMultipleTimes(cb, options, retries + 1);
    }

    console.error(error);

    return null;
  }
}
