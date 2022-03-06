import IProduct from "@/types/iProduct";

export interface IOrderItem {
  product: IProduct;
  date: Date;
}
