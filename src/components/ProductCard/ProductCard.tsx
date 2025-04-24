import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="group relative">
      <div className="absolute top-2 left-2 z-10 flex gap-2">
        {product.isNew && (
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            New
          </span>
        )}
        {product.bestSeller && (
          <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            Bestseller
          </span>
        )}
      </div>

      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/products/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {product.colors.join(', ')}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
      </div>
      <div className="mt-2 flex items-center">
        <div className="flex">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={`h-4 w-4 ${
                product.rating > rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="ml-2 text-xs text-gray-500">
          {product.reviewCount} reviews
        </p>
      </div>
    </div>
  );
}