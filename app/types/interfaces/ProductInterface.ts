export default interface ProductInterface {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  desc: string;
  category: string;
  image: { url: string }[];
}
