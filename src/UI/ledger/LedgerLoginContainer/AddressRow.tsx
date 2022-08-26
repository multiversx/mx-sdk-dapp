import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';
import { getAccountBalance } from 'utils/account/getAccountBalance';
import { getEgldLabel } from 'utils/network/getEgldLabel';
import { WithClassnameType } from '../../types';

interface AddressRowType extends WithClassnameType {
  selectedAddress?: string;
  index: number;
  address: string;
  onSelectAddress: (address: { address: string; index: number } | null) => void;
}

// TODO: why not use Trim component?
const trimHash = (hash: string, keep = 10) => {
  const start = hash.substring(0, keep);
  const end = hash.substring(hash.length - keep);
  return `${start}...${end}`;
};

const noBalance = '...';

export const AddressRow = ({
  address,
  index,
  selectedAddress,
  onSelectAddress,
  className = 'dapp-ledger-address-row'
}: AddressRowType) => {
  const [balance, setBalance] = React.useState(noBalance);

  const handleChange = (e: React.SyntheticEvent) => {
    const { checked } = e.target as HTMLInputElement;
    if (checked) {
      onSelectAddress({ address, index });
    }
  };

  const fetchBalance = async () => {
    try {
      const balance = await getAccountBalance(address);
      setBalance(balance);
    } catch (err) {
      console.error('error fetching balance', err, balance);
    }
  };

  React.useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <tr className={className}>
      <td className={globalStyles.textLeft}>
        <div
          className={`
            ${globalStyles.flexRow}
            ${globalStyles.alignItemsStart}
            ${globalStyles.textLeft}
            ${globalStyles.formCheck}
          `}
        >
          <input
            type='radio'
            id={`check_${index}`}
            data-testid={`check_${index}`}
            onChange={handleChange}
            role='button'
            checked={selectedAddress === address}
            className={`${globalStyles.formCheckInput} ${globalStyles.mr1}`}
          />
          <label
            htmlFor={`check_${index}`}
            role='button'
            data-testid={`label_${index}`}
            className={`
              ${globalStyles.formCheckLabel}
              ${globalStyles.textNowrap}
              ${globalStyles.m0}
            `}
          >
            <div
              className={`
                ${globalStyles.flexRow}
                ${globalStyles.alignItemsCenter}
                ${globalStyles.textNowrap}
              `}
            >
              <span>{trimHash(address)}</span>
            </div>
          </label>
        </div>
      </td>
      <td className={globalStyles.textLeft}>
        <FormatAmount value={balance} egldLabel={getEgldLabel()} />
      </td>
      <td className={globalStyles.textLeft}>{index}</td>
    </tr>
  );
};
