import React from 'react';
import { getAccountBalance } from 'utils';

interface AddressRowType {
  selectedAddress?: string;
  index: number;
  address: string;
  onSelectAddress: (address: { address: string; index: number } | null) => void;
}

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
  const ref = React.useRef(null);
  const [balance, setBalance] = React.useState(noBalance);
  const isAddressSelected = selectedAddress === address;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (checked) {
      onSelectAddress({ address, index });
    } else if (isAddressSelected && !checked) {
      onSelectAddress(null);
    }
  };

  const fetchBalance = async () => {
    try {
      const balance = await getAccountBalance(address, true);
      setBalance(balance);
    } catch (err) {
      console.error('error fetching balance', balance);
    }
  };

  React.useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <tr ref={ref}>
      <td className='text-left'>
        <div className='d-flex align-items-start text-left form-check'>
          <input
            type='radio'
            id={`check_${index}`}
            data-testid={`check_${index}`}
            onChange={handleChange}
            checked={selectedAddress === address}
            className='form-check-input mr-1 cursor-pointer'
          />
          <label
            htmlFor={`check_${index}`}
            data-testid={`label_${index}`}
            className='form-check-label text-nowrap trim-size-xl cursor-pointer m-0'
          >
            <div className='d-flex align-items-center text-nowrap trim'>
              <span>{trimHash(address)}</span>
            </div>
          </label>
        </div>
      </td>
      <td className='text-left'>{balance}</td>
      <td className='text-left'>{index}</td>
    </tr>
  );
};

export default AddressRow;
