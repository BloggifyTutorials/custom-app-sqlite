module.exports = {
    create: ["post", ctx => {
        return Bloggify.services.items.create(ctx.data)
    }],
    list: ["get", ctx => {
        return Bloggify.services.items.list()
    }]
}
