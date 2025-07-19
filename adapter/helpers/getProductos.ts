import { strapi } from "../strapi";

export const getProductos = async () => {
    const response = await strapi("product-categories?populate=cover");
    return response;
}