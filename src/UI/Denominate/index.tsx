import React from 'react';
import { MAINNET_EGLD_LABEL } from 'constants/index';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';
import { DenominateType } from 'UI/types/denominate.types';

let deprecationMessageDisplayed = false;

/**
 * !!! This function is deprecated. Please use formatAmount instead.
 * @param props.egldLabel  if not provided, will fallback on **EGLD**
 */
export const Denominate = (props: DenominateType) => {
  if (!deprecationMessageDisplayed) {
    console.warn(
      '!!! Be aware !!! The "Denominate" component is deprecated. Please use "FormatAmount" instead.'
    );

    deprecationMessageDisplayed = true;
  }

  const egldLabel = props.egldLabel || MAINNET_EGLD_LABEL;

  const denominateProps = { ...props, egldLabel };

  return <FormatAmount {...denominateProps} />;
};
