export const create = async ctx => {
    const item = await Bloggify.services.items.create(ctx.data)
    return { item }
}

export const list = async () => {
    const items = await Bloggify.services.items.list()
    return { items }
}