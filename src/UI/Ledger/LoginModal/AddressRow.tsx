import React from 'react';
import { useSelector } from 'react-redux';
import { networkSelector } from '../../../redux/selectors';
import { getAccount } from '../../../utils';

interface AddressRowType {
  setSelectedAddress: React.Dispatch<React.SetStateAction<string>>;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  selectedAddress: string;
  index: number;
  account: string;
}

const trimHash = (hash: string, keep = 10) => {
  const start = hash.substring(0, keep);
  const end = hash.substring(hash.length - keep);
  return `${start}...${end}`;
};

const noBalance = '...';

const AddressRow = ({
  account,
  index,
  setSelectedAddress,
  selectedAddress,
  setSelectedIndex
}: AddressRowType) => {
  const ref = React.useRef(null);
  const network = useSelector(networkSelector);
  const [balance, setBalance] = React.useState(noBalance);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (checked) {
      setSelectedAddress(account);
      setSelectedIndex(index);
    } else if (selectedAddress === account && !checked) {
      setSelectedAddress('');
      setSelectedIndex(undefined);
    }
  };

  const fetchBalance = () => {
    getAccount(account)
      .then(({ balance }) => {
        if (ref.current !== null) {
          const parsedBalance = parseFloat(balance.toDenominated());
          const formatted = parsedBalance.toLocaleString('en');
          setBalance(`${formatted} ${network.egldLabel}`);
        }
      })
      .catch((e) => {
        console.error('Failed getting account ', e);
      });
  };

  React.useEffect(fetchBalance, []);

  return (
    <tr ref={ref}>
      <td className='text-left'>
        <div className='d-flex align-items-start text-left form-check'>
          <input
            type='radio'
            id={`check_${index}`}
            data-testid={`check_${index}`}
            onChange={handleChange}
            checked={selectedAddress === account}
            className='form-check-input mr-1 cursor-pointer'
          />
          <label
            htmlFor={`check_${index}`}
            data-testid={`label_${index}`}
            className='form-check-label text-nowrap trim-size-xl cursor-pointer m-0'
          >
            <div className='d-flex align-items-center text-nowrap trim'>
              <span>{trimHash(account)}</span>
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
