export interface ItemDimensions {
  length: number;
  width: number;
  height: number;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  category: string | null;
  dimensions: ItemDimensions | null;
  unit: string | null;
  cbm: number | null;
  sourcingType: string | null;
  timelineType: string | null;
}

