"use client"

import Image from 'next/image';
import { useState } from 'react';
import ZoomableImage from './ZoomImage';

export default function ProductGallery({ images }: { images: string[] }) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col-reverse md:grid md:grid-cols-4 md:gap-6">

            <div className="mt-4 hidden md:flex md:flex-col gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative h-20 w-20 rounded-md overflow-hidden ${selectedImage === index ? 'ring-2 ring-indigo-500' : 'ring-1 ring-gray-200'}`}
                    >
                        <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover object-center"
                            sizes="80px"
                        />
                    </button>
                ))}
            </div>

            <div className="md:col-span-3 relative aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <ZoomableImage src={images[selectedImage]} alt={"Main product image"} />
                <div className="absolute inset-0 flex items-center justify-center md:hidden">
                    <button
                        onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                        className="absolute left-2 bg-white/80 rounded-full p-2 shadow"
                        aria-label="Previous image"
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                    </button>
                    <button
                        onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                        className="absolute right-2 bg-white/80 rounded-full p-2 shadow"
                        aria-label="Next image"
                    >
                        <ChevronRightIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
        </svg>
    );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
        </svg>
    );
}