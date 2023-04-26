export const hasEmoji = (str: string) => {
  const emojis = str.match(/(\p{EPres}|\p{ExtPict})/gu);

  return emojis && emojis?.length > 0 ? true : false;
};
