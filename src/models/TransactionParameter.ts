import { Address } from '@elrondnetwork/erdjs';

export class TransactionParameter {
  sender: Address;
  receiver: Address;
  functionName: string;
  inputParameters: string[];
  outputParameters: string[];

  constructor(
    sender: Address,
    receiver: Address,
    functionName: string,
    inputParameters: string[],
    outputParameters: string[]
  ) {
    this.sender = sender;
    this.receiver = receiver;
    this.functionName = functionName;
    this.inputParameters = inputParameters;
    this.outputParameters = outputParameters;
  }
}
