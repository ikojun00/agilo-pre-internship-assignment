import handleImage from "./HandleImage";

export default interface handleItem {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: handleImage[];
}
