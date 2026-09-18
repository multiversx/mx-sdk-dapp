import { DisplayRiskEnum } from 'types/displayRisk.types';

// eslint-disable-next-line no-control-regex
const CONTROL_CHARACTERS = /[\u0000-\u001F\u007F-\u009F]/u;

const BIDI_CONTROLS = /[\u202A-\u202E\u2066-\u2069]/u;

const INVISIBLE_CHARACTERS =
  /[\u00AD\u061C\u115F\u1160\u180E\u200B-\u200F\u2060-\u2064\u3164\uFEFF\uFFA0]|\u034F|\u17B4|\u17B5/u;

const LATIN = /\p{Script=Latin}/u;

const LATIN_LOOKALIKES = /[\p{Script=Cyrillic}\p{Script=Greek}]/u;

const getValueRisk = (value: string): DisplayRiskEnum => {
  if (CONTROL_CHARACTERS.test(value) || BIDI_CONTROLS.test(value)) {
    return DisplayRiskEnum.blocked;
  }

  if (
    INVISIBLE_CHARACTERS.test(value) ||
    (LATIN.test(value) && LATIN_LOOKALIKES.test(value))
  ) {
    return DisplayRiskEnum.suspicious;
  }

  return DisplayRiskEnum.clean;
};

export const getDisplayRisk = (
  ...values: Array<string | null | undefined>
): DisplayRiskEnum => {
  const risks = values
    .filter((value): value is string => typeof value === 'string')
    .map(getValueRisk);

  if (risks.includes(DisplayRiskEnum.blocked)) {
    return DisplayRiskEnum.blocked;
  }

  if (risks.includes(DisplayRiskEnum.suspicious)) {
    return DisplayRiskEnum.suspicious;
  }

  return DisplayRiskEnum.clean;
};
