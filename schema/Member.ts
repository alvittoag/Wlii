export interface IMember {
  expired: string;
  id: number;
  name_user: string;
  package_id: number;
  code: string;
  package: {
    name: string;
  };
}
