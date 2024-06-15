const qGetAllProducts = `query {
  agiloCollection(where: { first: true }) {
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

export default qGetAllProducts;
