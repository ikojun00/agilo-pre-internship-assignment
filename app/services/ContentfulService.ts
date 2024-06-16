import qGetAllProducts from "../types/queries/GetAllProducts";
import qGetProductsByCategory from "../types/queries/GetProductsByCategory";

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

const productsCollection = (data: any) => {
  return data.agiloCollection.items.map((item: any) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    oldPrice: item.oldPrice,
    image: item.imagesCollection.items,
  }));
};

const getAllProducts = async () => {
  try {
    const response = await graphqlRequest(qGetAllProducts);
    const body = (await response.json()) as {
      data: any;
    };

    return productsCollection(body.data);
  } catch (error) {
    console.log(error);

    return [];
  }
};

const getProductsByCategory = async (category: string) => {
  try {
    const response = await graphqlRequest(qGetProductsByCategory(category));
    const body = (await response.json()) as {
      data: any;
    };
    return productsCollection(body.data);
  } catch (error) {
    console.log(error);

    return [];
  }
};

const ContentfulService = {
  getAllProducts,
  getProductsByCategory,
};

export default ContentfulService;
