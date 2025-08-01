import { createDataTestIdSelector, walkShadowDom } from './shadowDomTraversal';

/**
 * Recursively searches the document and all shadow roots for the first element
 * matching the given data-testid using Jest/JSDOM.
 *
 * @param {string} dataTestId - The value of the data-testid attribute to search for.
 * @param {Document|ShadowRoot} root - The root to search from (defaults to document).
 * @returns {Element|null} - The found element, or null.
 */
export function getElementByDataTestIdDeepJest(
  dataTestId: string,
  root: Document | ShadowRoot = document
): Element | null {
  return walkShadowDom(root, createDataTestIdSelector(dataTestId));
}
