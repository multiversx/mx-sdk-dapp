import { createDataTestIdSelector, walkShadowDom } from './shadowDomTraversal';

/**
 * Recursively searches the document and all shadow roots for the first element
 * matching the given data-testid using Playwright.
 *
 * @param {import('@playwright/test').Page} page - The Playwright Page instance.
 * @param {string} testId - The value of the data-testid attribute to search for.
 * @returns {Promise<import('@playwright/test').Locator|null>} - Locator for the found element, or null.
 */
export async function getElementByDataTestIdDeepPlaywright(
  page: any,
  dataTestId: string
) {
  const element = await page.evaluate(
    (testId: string) =>
      walkShadowDom(document, createDataTestIdSelector(testId)),
    dataTestId
  );

  if (!element) {
    return null;
  }

  return page.locator(createDataTestIdSelector(dataTestId)).first();
}
