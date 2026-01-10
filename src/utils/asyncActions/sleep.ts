export async function sleep(time: number) {
  return await new Promise<void>((resolve) => {
    // timeouts are broken in jest, if this is a test env
    // exit the sleep state immediately
    if (process.env.NODE_ENV === 'test') {
      resolve();
    }
    setTimeout(() => resolve(), time);
  });
}
