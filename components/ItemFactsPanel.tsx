import { Item } from '@/types/item';

interface ItemFactsPanelProps {
  item: Item;
}

export default function ItemFactsPanel({ item }: ItemFactsPanelProps) {
  const formatDimensions = (dimensions: Item['dimensions']): string => {
    if (!dimensions) return '—';
    return `${dimensions.length} × ${dimensions.width} × ${dimensions.height} cm`;
  };

  const formatValue = (value: string | number | null | undefined): string => {
    if (value === null || value === undefined || value === '') {
      return '—';
    }
    return String(value);
  };

  const formatCBM = (cbm: number | null): string => {
    if (cbm === null || cbm === undefined) {
      return '—';
    }
    return `${cbm.toFixed(3)} m³`;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Item Facts <span className="text-sm font-normal text-gray-500">(Read-Only)</span>
        </h2>
      </div>
      <div className="px-6 py-5">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-500 mb-1">Category</dt>
            <dd className="text-sm text-gray-900 font-medium">
              {formatValue(item.category)}
            </dd>
          </div>
          
          <div>
            <dt className="text-sm font-medium text-gray-500 mb-1">Dimensions</dt>
            <dd className="text-sm text-gray-900 font-medium">
              {formatDimensions(item.dimensions)}
            </dd>
          </div>
          
          <div>
            <dt className="text-sm font-medium text-gray-500 mb-1">Unit</dt>
            <dd className="text-sm text-gray-900 font-medium">
              {formatValue(item.unit)}
            </dd>
          </div>
          
          <div>
            <dt className="text-sm font-medium text-gray-500 mb-1">CBM</dt>
            <dd className="text-sm text-gray-900 font-medium">
              {formatCBM(item.cbm)}
            </dd>
          </div>
          
          <div>
            <dt className="text-sm font-medium text-gray-500 mb-1">Sourcing Type</dt>
            <dd className="text-sm text-gray-900 font-medium">
              {formatValue(item.sourcingType)}
            </dd>
          </div>
          
          <div>
            <dt className="text-sm font-medium text-gray-500 mb-1">Timeline Type</dt>
            <dd className="text-sm text-gray-900 font-medium">
              {formatValue(item.timelineType)}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

