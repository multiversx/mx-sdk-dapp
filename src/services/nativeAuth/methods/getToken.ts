import { encodeValue } from '../helpers/encodeValue';

export const getToken = ({
  address,
  token,
  signature
}: {
  address: string;
  token: string;
  signature: string;
}): string => {
  const encodedAddress = encodeValue(address);
  const encodedToken = encodeValue(token);
  const accessToken = `${encodedAddress}.${encodedToken}.${signature}`;
  return accessToken;
};
