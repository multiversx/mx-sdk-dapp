import { isWindowAvailable } from 'utils/isWindowAvailable';

export const getTargetOrigin = () => {
  if (isWindowAvailable()) {
    const ancestorOrigins = window.location.ancestorOrigins;
    const parentOrigin = ancestorOrigins?.[ancestorOrigins.length - 1] ?? '*';

    return parentOrigin;
  }

  return '*';
};

console.log({
  window,
  parent: window?.parent,
  origin: getTargetOrigin()
});
