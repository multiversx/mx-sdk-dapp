import { WithStylesImportType } from 'hocs/useStyles';
import { WithClassnameType } from 'UI/types';

export interface SelectOptionType {
  label: string;
  value: string;
}

export interface TransactionDataDecodePropsType
  extends WithClassnameType,
    WithStylesImportType {
  data: string;
  onDecode: (decodedData: string) => void;
  onDecodeError: (errors: string[]) => void;
}
