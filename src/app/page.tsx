"use client"

import DashboardSlider from "@/components/DashboadSlider/DashboardSlider";
import ProductCard from "@/components/ProductCard/ProductCard";
import { allProducts } from "@/data/products";
import { FilterIcon } from "@/icons/FIlterIcon";

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <DashboardSlider/>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 text-gray-800">
              <FilterIcon className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>
          <div>
            <select
              id="sort"
              name="sort"
              className="mt-1 text-gray-800 block border-gray-600 w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-4">
            <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
              Previous
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded-md bg-indigo-600 text-white">
                1
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
                3
              </button>
            </div>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
