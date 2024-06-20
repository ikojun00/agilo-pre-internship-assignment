const qGetProductById = (id: number) => `query {
    agiloCollection(where: {id: ${id} }) {
      items {
        id
        name
        price
        oldPrice
        desc
        imagesCollection {
          items {
            url
          }
        }
      }
    }
  }`;

export default qGetProductById;
