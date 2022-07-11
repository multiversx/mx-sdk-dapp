import { getGeneratedClasses } from '../../../utils';
import classNames from 'classnames';
import globalStyles from '../../../../assets/sass/main.scss';
import { useMemo } from 'react';

export const useSignStepsClasses = (
  className: string,
  scamReport: string | null = null,
  shouldRenderDefaultCss = true
) => {
  return useMemo(
    () =>
      getGeneratedClasses(className, shouldRenderDefaultCss, {
        formGroup: classNames(
          globalStyles.formGroup,
          globalStyles.textBreak,
          globalStyles.textLeft
        ),
        formLabel: classNames(
          globalStyles.textBreak,
          globalStyles.textSecondary
        ),
        icon: globalStyles.textWhite,
        contentWrapper: classNames(
          globalStyles.dFlex,
          globalStyles.flexColumn,
          globalStyles.justifyContentStart,
          globalStyles.flexRow,
          globalStyles.justifyContentBetween,
          globalStyles.mb3
        ),
        tokenWrapper: classNames(
          globalStyles.mb3,
          globalStyles.mb0,
          globalStyles.dFlex,
          globalStyles.flexColumn,
          globalStyles.alignItemsStart
        ),
        tokenLabel: classNames(
          globalStyles.textSecondary,
          globalStyles.textLeft
        ),
        tokenValue: classNames(
          globalStyles.dFlex,
          globalStyles.alignItemsCenter,
          globalStyles.mt1
        ),
        scamReport: globalStyles.textWarning,
        scamReportIcon: classNames(globalStyles.textWarning, globalStyles.mr1),
        tokenAmountLabel: classNames(
          globalStyles.textSecondary,
          globalStyles.textLeft
        ),
        tokenAmountValue: classNames(
          globalStyles.dFlex,
          globalStyles.alignItemsCenter
        ),
        dataFormGroup: classNames(
          globalStyles.formGroup,
          globalStyles.textLeft
        ),
        errorMessage: classNames(
          globalStyles.textDanger,
          globalStyles.dFlex,
          globalStyles.justifyContentCenter,
          globalStyles.alignItemsCenter
        ),
        buttonsWrapper: classNames(
          globalStyles.dFlex,
          globalStyles.alignItemsCenter,
          globalStyles.justifyContentEnd,
          globalStyles.mt1
        ),
        cancelButton: classNames(
          globalStyles.btn,
          globalStyles.btnDark,
          globalStyles.textWhite,
          globalStyles.dFlex,
          globalStyles.mr2
        ),
        signButton: classNames(
          globalStyles.btn,
          scamReport ? globalStyles.btnWarning : globalStyles.btnPrimary,
          globalStyles.dFlex,
          globalStyles.ml2
        )
      }),
    [className, scamReport, shouldRenderDefaultCss]
  );
};
