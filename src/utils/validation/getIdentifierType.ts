const esdtParts = 2;
const nftParts = 3;

const result = {
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
      ...result,
      isEsdt: true
    };
  }
  if (parts === nftParts) {
    return {
      ...result,
      isNft: true
    };
  }
  return {
    ...result,
    isEgld: true
  };
}
export default getIdentifierType;
