import React from 'react';

import { Denominate } from 'UI/Denominate';
import { getAccountBalance } from 'utils';

interface AddressRowType {
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

const AddressRow = ({
  address,
  index,
  selectedAddress,
  onSelectAddress
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
      console.error('error fetching balance', balance);
    }
  };

  React.useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <tr>
      <td className='text-left'>
        <div className='d-flex align-items-start text-left form-check'>
          <input
            type='radio'
            id={`check_${index}`}
            data-testid={`check_${index}`}
            onChange={handleChange}
            role='button'
            checked={selectedAddress === address}
            className='form-check-input mr-1'
          />
          <label
            htmlFor={`check_${index}`}
            role='button'
            data-testid={`label_${index}`}
            className='form-check-label text-nowrap trim-size-xl m-0'
          >
            <div className='d-flex align-items-center text-nowrap trim'>
              <span>{trimHash(address)}</span>
            </div>
          </label>
        </div>
      </td>
      <td className='text-left'>
        <Denominate value={balance} />
      </td>
      <td className='text-left'>{index}</td>
    </tr>
  );
};

export default AddressRow;
