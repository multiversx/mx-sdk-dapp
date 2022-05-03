const esdtParts = 2;
const nftParts = 3;

const defaultResult = {
  isEsdt: false,
  isNft: false,
  isEgld: false
};

export function getIdentifierType(identifier?: string): {
  isEsdt: boolean;
  isNft: boolean;
  isEgld: boolean;
} {
  const parts = identifier?.split('-').length;

  if (parts === esdtParts) {
    return {
      ...defaultResult,
      isEsdt: true
    };
  }
  if (parts === nftParts) {
    return {
      ...defaultResult,
      isNft: true
    };
  }
  return {
    ...defaultResult,
    isEgld: true
  };
}
export default getIdentifierType;
