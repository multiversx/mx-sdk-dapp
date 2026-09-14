export const normalizeAllowedOrigins = (allowedOrigins?: string[]) => {
  const origins = new Set<string>();

  if (!Array.isArray(allowedOrigins)) {
    return origins;
  }

  allowedOrigins.forEach((value) => {
    try {
      const { origin } = new URL(value);

      if (origin === 'null') {
        throw new Error('Opaque origin');
      }

      origins.add(origin);
    } catch {
      console.error(
        `WebviewClient: ignoring invalid allowed origin "${value}"`
      );
    }
  });

  return origins;
};
