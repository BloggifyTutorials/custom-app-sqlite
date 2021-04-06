const { Item } = Bloggify.models;

(async () => {
    Bloggify.log(`Creating items...`)

    for (let i = 0; i < 10; ++i) {
        await (new Item({
            content: Math.random().toString(16)
        }).save())
    }

    Bloggify.log(`Done.`)
})()
