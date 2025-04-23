'use client'

import ProductGallery from '@/components/ProductGallery/ProductGallery';
import VariantSelector from '@/components/VariantSelector/VariantSelector';
import AddToCart from '@/components/AddToCart/AddToCart';
import ProductDescription from '@/components/ProductDescription/ProductDescription';
import { useState } from 'react';
import { products } from '@/data/products';

export default function Home() {
  const [selectedColor, setSelectedColor] = useState(products.featured.colors[0].id);
  const [selectedSize, setSelectedSize] = useState(products.featured.sizes[0].id);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <ProductGallery images={products.featured.images} />

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 md:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {products.featured.name}
              </h1>

              <VariantSelector
                type="color"
                options={products.featured.colors}
                selected={selectedColor}
                setSelected={setSelectedColor}
              />

              <VariantSelector
                type="size"
                options={products.featured.sizes}
                selected={selectedSize}
                setSelected={setSelectedSize}
              />

              <AddToCart price={products.featured.price} />

              <ProductDescription
                description={products.featured.description}
                highlights={products.featured.highlights}
                details={products.featured.details}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
