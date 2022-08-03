const CONTRACT_ADDRESS_PREFIX = 'erd1';

export const isContract = (
  initiator: string | undefined,
  numberOfCharactersForScAddress: number
) =>
  Boolean(
    initiator &&
      numberOfCharactersForScAddress > 0 &&
      initiator
        .substring(CONTRACT_ADDRESS_PREFIX.length)
        .startsWith('q'.repeat(numberOfCharactersForScAddress))
  );
