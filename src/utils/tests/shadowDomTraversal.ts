/**
 * Core shadow DOM traversal logic that can be reused across different testing frameworks.
 * Note: Requires browser support for Shadow DOM APIs (customElements, shadowRoot, etc.).
 */

/**
 * Walks a root node (Document or ShadowRoot) depth-first to find elements.
 * @param {Document | ShadowRoot} root - The root node to start searching from
 * @param {string} selector - CSS selector to search for
 * @returns {Element | null} - The found element, or null
 */
export function walkShadowDom(
  root: Document | ShadowRoot,
  selector: string
): Element | null {
  if (!root) {
    throw new Error('walkShadowDom: root is required');
  }

  if (!selector || typeof selector !== 'string') {
    throw new Error('walkShadowDom: selector must be a non-empty string');
  }

  let found: Element | null = null;

  try {
    found = root.querySelector(selector);
  } catch (err) {
    const isSyntaxError =
      err instanceof DOMException && err.name === 'SyntaxError';

    const hasInvalidSelectorMessage =
      err instanceof Error &&
      /syntax error|unrecognized expression/i.test(err.message);

    if (isSyntaxError || hasInvalidSelectorMessage) {
      throw new Error(`walkShadowDom: Invalid CSS selector: '${selector}'`);
    }

    throw err;
  }

  if (found) {
    return found;
  }

  const all: Element[] = Array.from(root.querySelectorAll('*'));

  for (const el of all) {
    if (el.shadowRoot) {
      const inShadow = walkShadowDom(el.shadowRoot, selector);
      if (inShadow) {
        return inShadow;
      }
    }
  }
  return null;
}

/**
 * Helper function to create a data-testid selector
 * @param {string} testId - The data-testid value
 * @returns {string} - CSS selector for the data-testid
 */
export function createDataTestIdSelector(testId: string): string {
  const escape =
    window.CSS && typeof window.CSS.escape === 'function'
      ? window.CSS.escape
      : (s: string) => s.replace(/"/g, '\\"').replace(/'/g, "\\'"); // eslint-disable-line quotes

  return `[data-testid="${escape(testId)}"]`;
}
