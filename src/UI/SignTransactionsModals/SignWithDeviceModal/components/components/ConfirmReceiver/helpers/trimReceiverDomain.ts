export const trimReceiverDomain = (receiver?: string) => {
  if (!receiver) {
    return;
  }

  const trimmedPartBeforeLastDot = receiver.substring(
    0,
    receiver.lastIndexOf('.')
  );

  return trimmedPartBeforeLastDot;
};
