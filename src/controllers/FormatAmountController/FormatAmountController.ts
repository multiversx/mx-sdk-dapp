import { stringIsInteger, stringIsFloat, formatAmount } from 'lib/sdkDappUtils';
import { FormatAmountControllerPropsType, FormatedAmountType } from './types';

export class FormatAmountController {
  public static getData(
    props: FormatAmountControllerPropsType
  ): FormatedAmountType {
    const { input } = props;

    if (!input || !stringIsInteger(input)) {
      return {
        isValid: false,
        label: this.getLabel(props),
        valueInteger: '0',
        valueDecimal: this.formatDecimalPart('0', props.digits)
      };
    }

    const formattedAmount = formatAmount(props);
    const isValid = stringIsFloat(formattedAmount);
    const [valueInteger, valueDecimal] = formattedAmount.split('.');

    return {
      isValid,
      label: this.getLabel(props),
      valueInteger: valueInteger || '0',
      valueDecimal: this.formatDecimalPart(valueDecimal, props.digits)
    };
  }

  private static getLabel(props: FormatAmountControllerPropsType): string {
    return ` ${props.token ?? props.egldLabel ?? ''}`.trimEnd();
  }

  private static formatDecimalPart(decimalPart = '', digits = 2): string {
    const padded = decimalPart.padEnd(digits, '0').slice(0, digits);
    return `.${padded || '0'.repeat(digits)}`;
  }
}
