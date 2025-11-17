import { safeWindow } from 'constants/window.constants';
import { ThemesEnum } from 'types/theme.types';
import { switchTheme } from '../switchTheme';

jest.mock('constants/window.constants', () => {
  const dataset: Record<string, string> = {};
  const mockWindow = {
    document: {
      documentElement: {
        dataset
      }
    }
  };
  return {
    get safeWindow() {
      return mockWindow;
    }
  };
});

describe('switchTheme tests', () => {
  beforeEach(() => {
    const dataset = safeWindow.document.documentElement.dataset;
    Object.keys(dataset).forEach((key) => {
      delete dataset[key as keyof DOMStringMap];
    });
    jest.clearAllMocks();
  });

  it('should set the theme on document element dataset', () => {
    switchTheme(ThemesEnum.dark);
    expect(safeWindow.document.documentElement.dataset.mvxTheme).toBe(
      ThemesEnum.dark
    );
  });

  it('should log an error when switching theme fails', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const originalDocument = safeWindow.document;
    // @ts-ignore - force the document to be undefined to trigger the catch branch
    safeWindow.document = undefined;

    switchTheme(ThemesEnum.dark);

    expect(consoleSpy).toHaveBeenCalledWith('Error switching the theme!');
    // @ts-ignore - restore original document to avoid leaking test state
    safeWindow.document = originalDocument;
    consoleSpy.mockRestore();
  });
});
