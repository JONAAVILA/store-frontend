const { STRAPI_URL, STRAPI_TOKEN } = process.env;

export const strapi = (url:string) => {
    return fetch(`${STRAPI_URL}/api/${url}`, {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
    }).then((res) => res.json())
}