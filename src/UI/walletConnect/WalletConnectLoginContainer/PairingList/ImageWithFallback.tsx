import React, { useEffect, useState } from 'react';
import PlaceholderImage from 'assets/icons/mvx-icon-rounded.svg';

interface ImageWithFallbackType extends React.ComponentProps<'img'> {
  src: string;
}

export const ImageWithFallback = ({ src, ...props }: ImageWithFallbackType) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  return (
    <>
      {hasError ? (
        <PlaceholderImage className={props?.className ?? ''} />
      ) : (
        <img
          onError={() => {
            setHasError(true);
          }}
          src={src}
          {...props}
        />
      )}
    </>
  );
};
