module.exports = async ctx => {
    const items = await Bloggify.services.items.list()
    return { items }
}
