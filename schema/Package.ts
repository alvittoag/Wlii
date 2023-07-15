export interface IPackage {
  id: number;
  max_user: number;
  name: string;
  price: number;
  wifi_selected: {
    name: string;
    provider: string;
    speed: number;
    id: number;
    created_at: string;
  };
}
