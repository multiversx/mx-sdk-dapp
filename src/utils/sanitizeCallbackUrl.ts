export const sanitizeCallbackUrl = (targetURL: string, vulnerableItems: string[] = ["address"]) => {
  const url = new URL(targetURL);
  const params = new URLSearchParams(url.search);

  vulnerableItems.forEach(vulnerableItem => params.delete(vulnerableItem) )

  const questionMark = Array.from(params.values()).length > 0 ? '?' : '';

  return `${url.origin}${url.pathname}${questionMark}${params.toString()}`;
};
