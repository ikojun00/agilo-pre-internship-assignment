import qGetAllProducts from "../types/queries/GetAllProducts";

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

const graphqlRequest = async (query: string) => {
  return await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query: query }),
  });
};

const getAllProducts = async () => {
  try {
    const response = await graphqlRequest(qGetAllProducts);
    const body = (await response.json()) as {
      data: any;
    };

    const products = body.data.agiloCollection.items.map((item: any) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      oldPrice: item.oldPrice,
      image: item.imagesCollection.items,
    }));
    console.log(products);

    return products;
  } catch (error) {
    console.log(error);

    return [];
  }
};

const ContentfulService = {
  getAllProducts,
};

export default ContentfulService;
