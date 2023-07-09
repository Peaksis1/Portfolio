import { Facts } from './Facts';

export interface About {
  bio: string;
  age: number;
  country: string;
  address: string;
  contact?: string | number;
  email?: string | number;
  facts?: Facts[];
}
