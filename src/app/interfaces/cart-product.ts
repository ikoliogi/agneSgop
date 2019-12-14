import { Product } from './product';

export interface CartProduct {
  prod: Product;
  quantity: number;
  totalPrice: number;
}
