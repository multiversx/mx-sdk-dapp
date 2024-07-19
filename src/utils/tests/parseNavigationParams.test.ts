import { testAddress } from '__mocks__';
import { parseNavigationParams } from '../parseNavigationParams';

describe('parseNavigationParams tests', () => {
  it('Returns remaining params without signature', () => {
    const search = `?page=1&address=${testAddress}&signature=ff5b42b73bbdfca2103cf69861493b42a5b55ebb8d3ab9dab2909e0e985064a385863e802cffb18e6b523c8b7f8ee2ed883d7d4a3c35b47cb36d195a1130b602`;

    const keepParams = ['signature'];
    const { params, remainingParams } = parseNavigationParams(keepParams, {
      removeParams: ['signature'],
      search
    });
    expect(params).toStrictEqual({
      address: 'erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3',
      page: '1'
    });
    expect(remainingParams).toStrictEqual({
      signature:
        'ff5b42b73bbdfca2103cf69861493b42a5b55ebb8d3ab9dab2909e0e985064a385863e802cffb18e6b523c8b7f8ee2ed883d7d4a3c35b47cb36d195a1130b602'
    });
  });

  it('Keeps original query params for multiple transactions', () => {
    const search =
      '?a=1&signSession=1678975873953&nonce[0]=368&nonce[1]=369&value[0]=0&value[1]=0&receiver[0]=erd1qqqqqqqqqqqqqpgqlgjwk8mpfycxpdf9q2sgzcndtdhdxr5ss0vqgygjmn&receiver[1]=erd1qqqqqqqqqqqqqpgqkhx64czgpc84eftg6q25lrfyv95ndwtcs0vqwusfuh&sender[0]=erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv&sender[1]=erd1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqsf7vvv&gasPrice[0]=1000000000&gasPrice[1]=1000000000&gasLimit[0]=5000000&gasLimit[1]=50000000&data[0]=ESDTTransfer%40555344432d663839646665%4005f5e100%40756e77726170546f6b656e%40455448555344432d656366663464&data[1]=ESDTTransfer%40455448555344432d656366663464%4005f5e100%406372656174655472616e73616374696f6e%40195f0b7d9ab15bbffdcd91b39db618bcee16edd0&chainID[0]=T&chainID[1]=T&version[0]=1&version[1]=1&signature[0]=043db9528587020e613d9e2f0d5bfee6b3477ad99d7aeee5e307244f517902d3374cdc8942dcc68aca564068219d58429d676fcf4ddf62d8fa518c07d0d3a102&signature[1]=a2d8c21d77b650e5618ceb4d3cf56e9224f1b8dd941f4eae71641940bf31341d323b7e8da0a7be533eb7bbb426099a16a24b95a78d24a28d5143cb9b31c57c05&walletProviderStatus=transactionsSigned';

    const { params } = parseNavigationParams([], {
      removeParams: [
        'nonce',
        'value',
        'receiver',
        'sender',
        'signature',
        'gasPrice',
        'gasLimit',
        'chainID',
        'data',
        'version',
        'options',
        // other
        'walletProviderStatus',
        'signSession'
      ],
      search
    });
    expect(params).toStrictEqual({
      a: '1'
    });
  });
});
