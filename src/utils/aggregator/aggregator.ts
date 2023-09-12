import {
  AbiRegistry,
  Address,
  Interaction,
  ResultsParser,
  SmartContract,
  TokenTransfer
} from '@multiversx/sdk-core/out';
import { ProxyNetworkProvider } from '@multiversx/sdk-network-providers/out';
import axios from 'axios';
import BigNumber from 'bignumber.js';
import { GAS_PRICE } from 'constants/index';
import { AccountInfoSliceNetworkType } from 'types';
import { getAddress } from 'utils/account';
import { getNetworkConfig } from 'utils/network';
import abi from './aggregator.abi.json';
import { AggregatorConfig, AggregatorStep, SorSwapResponse } from './type';
const DEFAULT_CONFIG: Record<
  string,
  { API: string; CONTRACT: string; WEGLD: string }
> = {
  D: {
    API: 'https://aggregator-devnet.ashswap.io',
    CONTRACT: 'erd1qqqqqqqqqqqqqpgq4g6k2qygj4qlyxkhjmtcn7j9r27humwth2usc90tnn',
    WEGLD: 'WEGLD-d7c6bb'
  },
  '1': {
    API: 'https://aggregator.ashswap.io',
    CONTRACT: 'erd1qqqqqqqqqqqqqpgqglgkaxm73j7mhw5u940fsmmncnayxj884fvs54lnr6',
    WEGLD: 'WEGLD-bd4d79'
  }
};
const MAX_FEE_PERCENT = 100_000;

export class Aggregator {
  api: string;
  fee?: number;
  protocol?: string;
  private resultParser = new ResultsParser();
  private address: Address;
  private contract: SmartContract;
  private abiRegistry: AbiRegistry;
  constructor(config?: AggregatorConfig) {
    this.api = config?.api || this.defaultConfig.API;
    this.protocol = config?.protocol;
    this.fee =
      !!this.protocol && this.protocol !== Address.Zero().bech32()
        ? config?.fee
        : 0;

    this.address = new Address(this.defaultConfig.CONTRACT);
    this.abiRegistry = AbiRegistry.create(abi as any);
    this.contract = new SmartContract({
      address: this.address,
      abi: this.abiRegistry
    });
  }

  private get defaultConfig() {
    return DEFAULT_CONFIG[getNetworkConfig().chainId || '1'];
  }

  private getProxy() {
    const network = getNetworkConfig();
    return new ProxyNetworkProvider(network.apiAddress, {
      timeout: +network.apiTimeout
    });
  }

  private interceptInteraction(interaction: Interaction) {
    const network: AccountInfoSliceNetworkType = getNetworkConfig();
    return interaction
      .withChainID(network.chainId)
      .withGasPrice(GAS_PRICE)
      .withGasLimit(
        Math.min(
          Math.floor(interaction.getGasLimit().valueOf() * 1.2),
          600_000_000
        )
      );
  }

  private async runQuery(interaction: Interaction) {
    const res = await this.getProxy().queryContract(
      interaction.check().buildQuery()
    );
    return this.resultParser.parseQueryResponse(res, interaction.getEndpoint());
  }

  private isEgld(id: string) {
    return id === 'EGLD';
  }

  private getTokenId(id: string) {
    return this.isEgld(id) ? this.defaultConfig.WEGLD : id;
  }

  async getProtocolFeePercent(): Promise<number> {
    if (!this.protocol || this.protocol === Address.Zero().bech32()) return 0;
    const query = this.contract.methods.getProtocolFeePercent([this.protocol]);
    const { firstValue } = await this.runQuery(query);
    return firstValue?.valueOf() || 0;
  }

  async getTokens() {
    const res = await axios.get<
      Array<{ id: string; decimal?: number; coingeckoId?: string }>
    >(`${this.api}/tokens`);
    return res?.data || [];
  }

  async getPaths(from: string, to: string, amount: BigNumber.Value) {
    const fee = this.fee ?? (await this.getProtocolFeePercent());
    this.fee = fee;
    const amt = new BigNumber(amount)
      .multipliedBy(MAX_FEE_PERCENT - fee)
      .idiv(MAX_FEE_PERCENT)
      .toString(10);
    const data = await axios.get<SorSwapResponse>(`${this.api}/aggregate`, {
      params: {
        from: this.getTokenId(from),
        to: this.getTokenId(to),
        amount: amt
      }
    });
    return data.data;
  }

  async aggregate(
    from: string,
    to: string,
    amount: BigNumber.Value,
    slippage: number
  ) {
    const res = await this.getPaths(from, to, amount);
    const swaps = res?.swaps || [];
    const hopTokenIds = res?.tokenAddresses || [];
    const steps: AggregatorStep[] = swaps.map((s) => {
      const step: AggregatorStep = {
        token_in: s.assetIn,
        token_out: s.assetOut,
        amount_in: new BigNumber(s.amount),
        pool_address: s.poolId,
        function_name: s.functionName,
        arguments: s.arguments.map((arg) => Buffer.from(arg, 'base64'))
      };
      return step;
    });

    const hopLimits = hopTokenIds
      .filter((id) => id !== this.getTokenId(to))
      .map((id) => ({ token: id, amount: new BigNumber(0) }));
    const outputLimits = [
      {
        token: this.getTokenId(to),
        amount: new BigNumber(res.returnAmountWithDecimal)
          .multipliedBy(MAX_FEE_PERCENT - slippage)
          .idiv(MAX_FEE_PERCENT)
      }
    ];
    if (this.isEgld(from)) {
      return await this._aggregateEgld(
        amount,
        steps,
        [...hopLimits, ...outputLimits],
        this.protocol
      );
    }
    return await this._aggregateEsdt(
      TokenTransfer.fungibleFromBigInteger(from, amount),
      steps,
      [...hopLimits, ...outputLimits],
      this.isEgld(to),
      this.protocol
    );
  }

  private async _aggregateEgld(
    egldAmount: BigNumber.Value,
    steps: AggregatorStep[],
    limits: { token: string; amount: BigNumber }[],
    protocol?: string
  ) {
    const params: any[] = [steps, limits];
    if (protocol && protocol !== Address.Zero().bech32()) {
      params.push(protocol);
    }
    const interaction = this.contract.methods.aggregateEgld(params);
    interaction
      .withValue(TokenTransfer.egldFromBigInteger(egldAmount))
      .withSender(new Address(await getAddress()));
    interaction.withGasLimit(20_000_000 + steps.length * 15_000_000);
    return this.interceptInteraction(interaction);
  }

  private async _aggregateEsdt(
    esdtPayment: TokenTransfer,
    steps: AggregatorStep[],
    limits: { token: string; amount: BigNumber }[],
    returnEgld: boolean,
    protocol?: string
  ) {
    const params: any[] = [steps, limits, returnEgld];
    if (protocol && protocol !== Address.Zero().bech32()) {
      params.push(protocol);
    }
    const interaction = this.contract.methods.aggregateEsdt(params);
    interaction
      .withSingleESDTTransfer(esdtPayment)
      .withSender(new Address(await getAddress()));
    interaction.withGasLimit(20_000_000 + steps.length * 15_000_000);
    return this.interceptInteraction(interaction);
  }
}
