import { isWindowAvailable } from '../../../utils';

function fallbackCopyTextToClipboard(text: string) {
  let success = false;

  const textArea = document?.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  document?.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document?.execCommand('copy');
    success = true;
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document?.body.removeChild(textArea);

  return success;
}

export async function copyTextToClipboard(text: string) {
  if (!isWindowAvailable()) {
    return false;
  }

  let success = false;

  if (!navigator.clipboard) {
    success = fallbackCopyTextToClipboard(text);
  } else {
    success = await navigator.clipboard.writeText(text).then(
      function done() {
        return true;
      },
      function error(err) {
        console.error('Async: Could not copy text: ', err);
        return false;
      }
    );
  }

  return success;
}
