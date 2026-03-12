'use client';

import Image from 'next/image';
import { useState } from 'react';

interface FadeImageProps {
  src: string;
  alt: string;
  blurDataURL?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  className?: string;
  containerClassName?: string;
}

export default function FadeImage({
  src,
  alt,
  blurDataURL,
  fill,
  width,
  height,
  sizes,
  priority = false,
  loading,
  className = 'object-cover',
  containerClassName = 'relative',
}: FadeImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageClasses = `transition-opacity duration-700 ease-out ${
    isLoaded ? 'opacity-100' : 'opacity-0'
  } ${className}`;

  const containerStyle = blurDataURL
    ? { backgroundImage: `url('${blurDataURL}')` }
    : {};

  const containerClasses = blurDataURL
    ? `${containerClassName} bg-cover bg-center`
    : containerClassName;

  return (
    <div className={containerClasses} style={containerStyle}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        {...(loading && { loading })}
        className={imageClasses}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
