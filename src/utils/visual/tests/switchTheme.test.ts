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
  it('should set the theme on document element dataset', () => {
    switchTheme(ThemesEnum.dark);
    expect(safeWindow.document.documentElement.dataset.mvxTheme).toBe(
      ThemesEnum.dark
    );
  });
});
