import classNames from 'optionalPackages/classnames';

export function getGeneratedClasses(
  className: string,
  shouldRenderDefaultCss: boolean,
  defaultStyles: Record<string, string>
) {
  return Object.entries(defaultStyles).reduce(
    (acc, [key, defaultClassNames]) => {
      acc[key] = classNames?.(
        shouldRenderDefaultCss && (defaultClassNames as string),
        { [`${className}_${key}`]: Boolean(className) }
      );
      return acc;
    },
    {} as Record<string, string>
  );
}
