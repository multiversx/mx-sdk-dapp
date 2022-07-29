export const isContract = (
  initiator: string | undefined,
  numberOfCharactersForScAddress: number
) =>
  Boolean(
    initiator &&
      numberOfCharactersForScAddress > 0 &&
      initiator
        .substring('erd1'.length)
        .startsWith('q'.repeat(numberOfCharactersForScAddress))
  );
