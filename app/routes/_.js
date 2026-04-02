export const get = async () => {
    const items = await Bloggify.services.items.list()
    return { items }
}