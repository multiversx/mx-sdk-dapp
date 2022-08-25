import React from 'react';
import { MAINNET_EGLD_LABEL } from 'constants/index';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';
import { FormatAmountType } from 'UI/types/formatAmount.types';

let deprecationMessageDisplayed = false;

/**
 * !!! This function is deprecated. Please use formatAmount instead.
 * @param props.egldLabel  if not provided, will fallback on **EGLD**
 */
export const Denominate = (props: FormatAmountType) => {
  if (!deprecationMessageDisplayed) {
    console.warn(
      '!!! Be aware !!! The "Denominate" component is deprecated. Please use "FormatAmount" instead.'
    );

    deprecationMessageDisplayed = true;
  }

  const egldLabel = props.egldLabel || MAINNET_EGLD_LABEL;

  const formatAmountProps = { ...props, egldLabel };

  return <FormatAmount {...formatAmountProps} />;
};
