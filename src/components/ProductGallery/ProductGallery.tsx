"use client"

import Image from 'next/image';
import ZoomableImage from './ZoomImage';
import { ChevronRightIcon } from '@/icons/ChevronRightIcon';
import { ChevronLeftIcon } from '@/icons/ChevronLeftIcon';

export default function ProductGallery({ images, selectedImage, setSelectedImage }: { images: string[], selectedImage: number, setSelectedImage: any }) {

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
						onClick={() => setSelectedImage((prev: number) => (prev === 0 ? images.length - 1 : prev - 1))}
						className="absolute left-2 bg-white/80 rounded-full p-2 shadow"
						aria-label="Previous image"
					>
						<ChevronLeftIcon className="h-5 w-5" />
					</button>
					<button
						onClick={() => setSelectedImage((prev: number) => (prev === images.length - 1 ? 0 : prev + 1))}
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
