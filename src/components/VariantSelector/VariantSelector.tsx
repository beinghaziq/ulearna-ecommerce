'use client'
// components/VariantSelector.tsx
import { useState } from 'react';

export default function VariantSelector({
  type,
  options,
  selected,
  setSelected,
}: {
  type: 'color' | 'size';
  options: any[];
  selected: string;
  setSelected: (value: string) => void;
}) {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900">
          {type === 'color' ? 'Color' : 'Size'}
        </h2>
      </div>

      {type === 'color' ? (
        <div className="mt-3 flex gap-3">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`relative -m-0.5 flex items-center justify-center rounded-full p-0.5 ring-2 focus:outline-none ${
                selected === option.id ? option.selectedClass : 'ring-transparent'
              }`}
            >
              <span
                className={`h-8 w-8 rounded-full border border-black/10 ${option.class}`}
                aria-hidden="true"
              />
              <span className="sr-only">{option.name}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3 mt-3">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => option.inStock && setSelected(option.id)}
              disabled={!option.inStock}
              className={`flex items-center justify-center rounded-md py-3 px-4 text-sm font-medium uppercase ${
                selected === option.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-900'
              } ${
                option.inStock
                  ? 'hover:bg-gray-50 border border-gray-200'
                  : 'cursor-not-allowed opacity-50 border border-gray-200'
              }`}
            >
              {option.name}
              {!option.inStock && <span className="sr-only"> (Out of stock)</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}