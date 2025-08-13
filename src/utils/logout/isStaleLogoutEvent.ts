interface LogoutEventData {
  address: string;
  ts: number;
  id: string;
}

interface IsStaleLogoutEventParamsType {
  parsedData: LogoutEventData;
  currentAddress: string;
  currentTime?: number;
}

/**
 * Checks if a logout event should be ignored due to being stale or for a different address
 * 
 * @param parsedData - The logout event data from localStorage
 * @param currentAddress - The current user's address
 * @param currentTime - Current timestamp (defaults to Date.now())
 * @returns true if the event should be ignored (is stale or for different address)
 */
export const isStaleLogoutEvent = ({
  parsedData,
  currentAddress,
  currentTime = Date.now()
}: IsStaleLogoutEventParamsType): boolean => {
  const maxTimeDifference = 1000; // 1 second - safeguard against processing outdated logout events
  const isStaleEvent = currentTime - parsedData.ts > maxTimeDifference;
  const isDifferentAddress = parsedData.address !== currentAddress;
  
  return isStaleEvent || isDifferentAddress;
};