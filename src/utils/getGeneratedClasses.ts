import classNames from 'optionalPackages/classnames';

export function getGeneratedClasses(
  className: string,
  shouldRenderDefaultCss: boolean,
  defaultStyles: Record<string, string>
) {
  return Object.entries(defaultStyles).reduce(
    (acc, [key, defaultClassNames]) => {
      acc[key] = classNames?.(
        `${className}_${key}`,
        shouldRenderDefaultCss && (defaultClassNames as string)
      );
      return acc;
    },
    {}
  ) as any;
}
