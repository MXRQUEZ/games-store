import IProduct from "@/types/iProduct";

export interface IOrderItem {
  id: string;
  product: IProduct;
  date: Date;
}
