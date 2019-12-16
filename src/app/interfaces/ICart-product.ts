import { IProduct } from './IProduct';

export interface ICartProduct {
  prod: IProduct;
  quantity: number;
  totalPrice: number;
}
