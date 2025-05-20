export const trimUsernameDomain = (username?: string) => {
  if (!username) {
    return;
  }

  const elrondSuffixExists = username.lastIndexOf('.elrond') > 0;
  const trimmedPartBeforeLastDot = elrondSuffixExists
    ? username.substring(0, username.lastIndexOf('.'))
    : username;

  return trimmedPartBeforeLastDot;
};
