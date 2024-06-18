const qGetAllColorVariants = (name: string) => `query {
    agiloCollection(where: {name: "${name}"}) {
      items {
        id
        color
      }
    }
  }`;

export default qGetAllColorVariants;
