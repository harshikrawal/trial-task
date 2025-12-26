'use client';

import { Item } from '@/types/item';
import ItemFactsPanel from './ItemFactsPanel';

interface ItemDetailViewProps {
  item: Item;
}

export default function ItemDetailView({ item }: ItemDetailViewProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
        <div className="px-6 py-5 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">{item.name}</h1>
        </div>
        <div className="px-6 py-5">
          <p className="text-gray-700 leading-relaxed">{item.description}</p>
        </div>
      </div>
      
      <ItemFactsPanel item={item} />
    </div>
  );
}

