interface TokenImageSourceType {
  assets?: { pngUrl?: string; svgUrl?: string } | null;
  media?: Array<{ thumbnailUrl?: string }> | null;
}

export const getTokenImageUrl = ({ assets, media }: TokenImageSourceType) =>
  assets?.pngUrl ?? media?.[0]?.thumbnailUrl ?? assets?.svgUrl ?? '';
