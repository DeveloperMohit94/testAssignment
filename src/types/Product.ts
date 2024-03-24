export interface Product {
  id: number;
  name: string;
  devices_count?: string;
  isSelected: boolean;
  children?: Product[];
}
