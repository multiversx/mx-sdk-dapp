import { redirect } from './window';

let preventRedirect = false;

export const preventRedirects = (shouldPreventRedirect = true) => {
  preventRedirect = shouldPreventRedirect;
};

export const safeRedirect = ({
  timeout = 0,
  url
}: {
  timeout?: number;
  url: string;
}) => {
  if (!preventRedirect) {
    setTimeout(() => {
      if (!window) {
        return;
      }

      return redirect(url);
    }, timeout);
  }
};
