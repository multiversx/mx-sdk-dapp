import { useState } from 'react';

/*
 * Hook that handles the font size of the amount, scaling it down based on the available size, and updating the state when it finished.
 */

export const useHandleAmountReference = () => {
  const [isFontSizeLoading, setIsFontSizeLoading] = useState(true);

  const getElementWidth = (element: HTMLElement) =>
    element.getBoundingClientRect().width;

  const getFontSize = (element: HTMLElement) =>
    parseInt(getComputedStyle(element).getPropertyValue('font-size'));

  const handleAmountReference = (element: HTMLElement | null) => {
    if (!element) {
      return;
    }

    const firstChild = element.firstChild as HTMLElement;
    const sizes = {
      parent: element.offsetWidth,
      firstChild: getFontSize(firstChild)
    };

    if (!firstChild) {
      return;
    }

    while (sizes.parent < getElementWidth(firstChild)) {
      const updatedSize = sizes.firstChild - 0.1;
      const updatedFontSize = { fontSize: `${updatedSize}px` };
      const updatedSizesObject = { firstChild: updatedSize };

      Object.assign(firstChild.style, updatedFontSize);
      Object.assign(sizes, updatedSizesObject);
    }

    setIsFontSizeLoading(false);
  };

  return {
    isFontSizeLoading,
    handleAmountReference
  };
};
