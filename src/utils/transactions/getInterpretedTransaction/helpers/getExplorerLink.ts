let errorMessageDisplayed = false;

function logError(error: string) {
  if (!errorMessageDisplayed) {
    console.error(error);
    errorMessageDisplayed = true;
  }
}

export function getExplorerLink({
  explorerAddress,
  to
}: {
  explorerAddress: string;
  to: string;
}) {
  try {
    // if a valid url is sent, return the original url
    const url = new URL(to);
    return url.href;
  } catch {
    if (!to.startsWith('/')) {
      logError(`Link not prepended by / : ${to}`);
      to = `/${to}`;
    }
    return explorerAddress ? `${explorerAddress}${to}` : to;
  }
}
