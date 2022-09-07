export function truncate(
  text: string | undefined,
  length: number,
  end: string | undefined = '...'
) {
  if (isNaN(length)) {
    length = 10;
  }

  if (!end) {
    end = '...';
  }

  const showWholeText =
    text != null &&
    (text.length <= length || text.length - end.length <= length);

  if (showWholeText) {
    return text;
  }

  return String(text).substring(0, length - end.length) + end;
}
