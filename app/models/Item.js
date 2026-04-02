const Sequelize = Bloggify.sequelize

export default Sequelize.db.define("Item", {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
