export function getExplorerLink({
  explorerAddress,
  to
}: {
  explorerAddress: string;
  to: string;
}) {
  if (!to.startsWith('/')) {
    console.error('Link not prepended by / : ', to);
    to = `/${to}`;
  }

  return explorerAddress ? `${explorerAddress}${to}` : to;
}
