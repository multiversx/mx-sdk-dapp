export function isTokenTransfer({
  tokenId,
  egldLabel
}: {
  tokenId: string | undefined;
  egldLabel: string;
}) {
  return Boolean(tokenId && tokenId !== egldLabel);
}
