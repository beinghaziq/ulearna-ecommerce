import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ZoomableImageProps extends Omit<ImageProps, 'src'> {
  src: string | StaticImageData;
}

function ZoomableImage({ src, alt, ...props }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorClass = isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div 
      className={`relative overflow-hidden w-full h-full ${cursorClass}`}
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover object-center transition-transform duration-300 ${
          isZoomed ? 'scale-150' : 'scale-100'
        }`}
        style={{
          transformOrigin: `${position.x}% ${position.y}%`,
        }}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        {...props}
      />
    </div>
  );
}

export default ZoomableImage;
