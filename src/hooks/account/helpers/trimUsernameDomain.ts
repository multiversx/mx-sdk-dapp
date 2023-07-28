export const trimUsernameDomain = (username?: string) => {
  if (!username) {
    return;
  }

  const dotExists = username.lastIndexOf('.') > 0;
  const trimmedPartBeforeLastDot = dotExists
    ? username.substring(0, username.lastIndexOf('.'))
    : username;

  return trimmedPartBeforeLastDot;
};
