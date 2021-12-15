import { HandleCloseType } from '../helpers';

export interface SignModalType {
  handleClose: (props?: HandleCloseType) => void;
  error: string;
  setError: (value: React.SetStateAction<string>) => void;
}
