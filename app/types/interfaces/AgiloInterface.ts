interface AgiloImage {
  items: { url: string }[];
}

export default interface AgiloInterface {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  desc: string;
  category: string;
  color: string;
  imagesCollection: AgiloImage;
}
