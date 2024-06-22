const qGetProductById = (id: number) => `query {
    agiloCollection(where: {id: ${id} }) {
      items {
        id
        name
        price
        oldPrice
        desc
        category
        imagesCollection {
          items {
            url
          }
        }
      }
    }
  }`;

export default qGetProductById;
