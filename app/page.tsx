'use client';

import { useEffect, useState } from 'react';
import { Item } from '@/types/item';
import ItemDetailView from '@/components/ItemDetailView';

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch mock data
    fetch('/data/mock-items.json')
      .then((res) => res.json())
      .then((data: Item[]) => {
        setItems(data);
        // Select first item by default
        if (data.length > 0) {
          setSelectedItemId(data[0].id);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading items:', error);
        setLoading(false);
      });
  }, []);

  const selectedItem = items.find((item) => item.id === selectedItemId);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-900">Item Details</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Item List Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-4 py-3 border-b border-gray-200">
                <h2 className="text-sm font-semibold text-gray-900">Items</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItemId(item.id)}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                      selectedItemId === item.id
                        ? 'bg-blue-50 text-blue-900 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Item Detail View */}
          <div className="lg:col-span-3">
            {selectedItem ? (
              <ItemDetailView item={selectedItem} />
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <p className="text-gray-500">Select an item to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

