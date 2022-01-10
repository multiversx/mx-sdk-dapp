export function isTokenTransfer({
  tokenId,
  erdLabel
}: {
  tokenId: string | undefined;
  erdLabel: string;
}) {
  return Boolean(tokenId && tokenId !== erdLabel);
}

export default isTokenTransfer;
