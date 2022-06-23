import classNames from 'classnames';

export function getGeneratedClasses(
  className: string,
  shouldRenderDefaultCss: boolean,
  defaultStyles: Record<string, string>
) {
  if (typeof classNames != 'function') {
    return {};
  }
  return Object.entries(defaultStyles).reduce(
    (acc, [key, defaultClassNames]) => {
      acc[key] = classNames?.(
        `${className}_${key}`,
        shouldRenderDefaultCss && (defaultClassNames as string)
      );
      return acc;
    },
    {} as Record<string, string>
  );
}
