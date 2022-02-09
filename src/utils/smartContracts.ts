import { TypedResult } from '@elrondnetwork/erdjs';
import { addressIsValid } from 'utils/account';

const okInHex = '6f6b';
const numInitCharactersForScAddress = 13;

export function scCallsSuccess(scResults?: TypedResult[]) {
  if (!scResults) {
    return true;
  }
  let success = false;
  scResults.forEach((result) => {
    if (result?.data) {
      const decoded = Buffer.from(result.data, 'base64').toString().split('@');
      const hasOkPart = Boolean(decoded.find((part) => part === okInHex));
      if (hasOkPart) {
        success = true;
        return;
      }
    }
  });
  return success;
}
export function isContract(hash: string): boolean {
  return Boolean(
    hash &&
      numInitCharactersForScAddress > 0 &&
      addressIsValid(hash) &&
      hash
        .substr('erd1'.length)
        .startsWith('q'.repeat(numInitCharactersForScAddress))
  );
}
export default isContract;
