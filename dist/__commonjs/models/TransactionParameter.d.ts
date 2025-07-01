import { Address } from '@multiversx/sdk-core';
export declare class TransactionParameter {
    sender: Address;
    receiver: Address;
    functionName: string;
    inputParameters: string[];
    outputParameters: string[];
    constructor(sender: Address, receiver: Address, functionName: string, inputParameters: string[], outputParameters: string[]);
}
//# sourceMappingURL=TransactionParameter.d.ts.map