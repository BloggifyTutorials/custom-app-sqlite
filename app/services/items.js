class Items {
    static create (data) {
        return new Bloggify.models.Item(data).save()
    }
    static list () {
        return Bloggify.models.Item.findAll()
    }
}

export default Items