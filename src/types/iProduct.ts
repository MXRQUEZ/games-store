interface IProduct {
  name: string;
  id: string | number;
  ageCriteria: string;
  price: string | number;
  rating: number;
  description: string;
  categoryId: string | number;
  img: string;
  date: Date;
}

export default IProduct;
