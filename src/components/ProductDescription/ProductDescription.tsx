'use client'
import { useState } from 'react';

export default function ProductDescription({
  description,
  highlights,
  details,
}: {
  description: string;
  highlights: string[];
  details: string;
}) {
  const [openTab, setOpenTab] = useState<'description' | 'details'>('description');
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-10 border-t border-gray-200 pt-8">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setOpenTab('description')}
          className={`py-4 px-6 font-medium text-sm ${openTab === 'description'
            ? 'border-b-2 border-indigo-500 text-indigo-600'
            : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          Description
        </button>
        <button
          onClick={() => setOpenTab('details')}
          className={`py-4 px-6 font-medium text-sm ${openTab === 'details'
            ? 'border-b-2 border-indigo-500 text-indigo-600'
            : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          Details
        </button>
      </div>

      <div className="mt-6">
        {openTab === 'description' ? (
          <div>
            <p className="text-gray-600 mb-4">{description}</p>

            {expanded && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Highlights</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm text-blue-500 hover:underline mb-2 cursor-pointer"
            >
              {expanded ? 'Hide Highlights' : 'Show Highlights'}
            </button>
          </div>
        ) : (
          <div>
            <p className="text-gray-600">{details}</p>
          </div>
        )}
      </div>
    </div>
  );
}
