let lastId = 0;

export const createTimestampId = (
  isTaken: (id: string) => boolean = () => false
) => {
  let id = Math.max(Date.now(), lastId + 1);

  while (isTaken(String(id))) {
    id++;
  }

  lastId = id;
  return String(id);
};
