import { useState } from 'react';
import { getScamAddressData } from 'apiCalls';
import { addressIsValid } from 'utils';

interface VerifiedAddressesType {
  [address: string]: { type: string; info: string };
}

let cache: VerifiedAddressesType = {};

export function useVerifyScamAddress() {
  const [verifiedAddresses, setVerifiedAddresses] =
    useState<VerifiedAddressesType>(cache);
  const [fetching, setFetching] = useState(false);

  const verifyScamAddress = async ({
    address,
    addressToVerify = ''
  }: {
    address: string;
    addressToVerify?: string;
  }) => {
    const notSender = address !== addressToVerify;
    const verified = addressToVerify in verifiedAddresses;
    if (
      notSender &&
      addressIsValid(addressToVerify) &&
      !verified &&
      !fetching
    ) {
      setFetching(true);
      try {
        const data = await getScamAddressData(addressToVerify);
        setVerifiedAddresses((existing) => {
          const updated = {
            ...cache,
            ...existing,
            ...(data.scamInfo ? { [addressToVerify]: data.scamInfo } : {})
          };
          cache = { ...updated };
          return updated;
        });
      } catch (err) {
        console.error('Unable to verify address', err);
      }
      setFetching(false);
    }
  };

  return {
    verifiedAddresses,
    verifyScamAddress
  };
}

export default useVerifyScamAddress;
