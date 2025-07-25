import { strapi } from "../strapi";
const { STRAPI_URL } = process.env

export const getProductos = async () => {
    return strapi('product?populate=cover')
        .then(res => {
            const { cover, title } = res.data
            const image = `${STRAPI_URL}${cover[0].url}`
            return {
                image,
                title
            }
        })
}