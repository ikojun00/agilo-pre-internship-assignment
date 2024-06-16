const qGetProductsByCategory = (category: string) => `query {
  agiloCollection(where: { first: true, category: "${category}" }) {
    items {
      id
      name
      price
      oldPrice
      imagesCollection {
        items {
          url
        }
      }
    }
  }
}`;

export default qGetProductsByCategory;
