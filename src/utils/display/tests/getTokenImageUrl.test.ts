import { getTokenImageUrl } from '../getTokenImageUrl';

const pngUrl = 'https://tools.multiversx.com/assets-cdn/tokens/TEST/icon.png';
const svgUrl = 'https://tools.multiversx.com/assets-cdn/tokens/TEST/icon.svg';
const thumbnailUrl = 'https://media.elrond.com/nfts/thumbnail/TEST-01';

describe('getTokenImageUrl', () => {
  it('prefers the png over the svg', () => {
    expect(getTokenImageUrl({ assets: { pngUrl, svgUrl } })).toBe(pngUrl);
  });

  it('prefers the media thumbnail over the svg', () => {
    expect(
      getTokenImageUrl({ assets: { svgUrl }, media: [{ thumbnailUrl }] })
    ).toBe(thumbnailUrl);
  });

  it('falls back to the svg when nothing else is available', () => {
    expect(getTokenImageUrl({ assets: { svgUrl } })).toBe(svgUrl);
  });

  it('returns an empty string when the token has no image', () => {
    expect(getTokenImageUrl({})).toBe('');
    expect(getTokenImageUrl({ assets: null, media: [] })).toBe('');
  });
});
