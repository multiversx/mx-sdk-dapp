import { createDataTestIdSelector, walkShadowDom } from './shadowDomTraversal';

/**
 * Recursively searches the document and all shadow roots for the first element
 * matching the given data-testid.
 *
 * @param {import('puppeteer').Page} page - The Puppeteer Page instance.
 * @param {string} dataTestId - The value of the data-testid attribute to search for.
 * @returns {Promise<import('puppeteer').ElementHandle|null>} - Handle to the found element, or null.
 */
export async function getElementByDataTestIdDeepPuppeteer(
  page: any,
  dataTestId: string
) {
  const handle = await page.evaluateHandle(
    (testId: string) =>
      walkShadowDom(document, createDataTestIdSelector(testId)),
    dataTestId
  );

  const element = handle.asElement();

  if (!element) {
    await handle.dispose();
    return null;
  }

  return element;
}
