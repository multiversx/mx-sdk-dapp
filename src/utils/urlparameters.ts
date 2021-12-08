import { Address } from '@elrondnetwork/erdjs';
import { TransactionParameter } from '../models';

export async function tryParseTransactionParameter(
  apiEndpoint: string
): Promise<TransactionParameter | null> {
  const searchParams = new URLSearchParams(window.location.search);
  const txHash = searchParams.get('txHash');
  if (!txHash || txHash === '') {
    return null;
  }
  const fetchResult = await fetch(`${apiEndpoint}/transactions/${txHash}`);
  const json = await fetchResult.json();

  const inputData = json.data;
  if (!inputData) {
    return null;
  }

  const inputDecoded = atob(inputData);
  const inputParameters = inputDecoded.split('@');
  if (inputParameters.length === 0) {
    return null;
  }

  const functionName = inputParameters[0];

  const scResults = json.results;
  if (scResults == null || scResults.length === 0) {
    return null;
  }

  const sender = new Address(json.sender);
  const receiver = new Address(json.receiver);

  const outputData = scResults[0].data;
  const outputDecoded = atob(outputData);

  const outputParameters = outputDecoded.split('@').slice(1);

  return new TransactionParameter(
    sender,
    receiver,
    functionName,
    inputParameters.slice(1),
    outputParameters
  );
}
