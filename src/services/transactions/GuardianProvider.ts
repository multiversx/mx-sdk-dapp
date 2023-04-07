import GenericGuardianProvider from '@multiversx/sdk-guardians-provider/out/genericGuardianProvider';
import GuardianProviderFactory from '@multiversx/sdk-guardians-provider/out/guardianProviderFactory';
import { IProviderSpecificHooks } from '@multiversx/sdk-guardians-provider/out/interface';

export class GuardianProvider {
  private static _instance: GenericGuardianProvider;

  constructor() {
    throw new Error(
      'Error: Instantiation failed: Use GuardianProvider.createProvider() instead of new.'
    );
  }

  public static async createProvider(
    address: string,
    apiAddress: string,
    providerSpecificHooks: IProviderSpecificHooks
  ): Promise<GenericGuardianProvider> {
    if (!GuardianProvider._instance) {
      return await GuardianProviderFactory.createProvider(
        address,
        apiAddress,
        providerSpecificHooks
      );
    }
    return GuardianProvider._instance;
  }
}
