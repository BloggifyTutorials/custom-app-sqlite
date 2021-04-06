const Sequelize = Bloggify.sequelize

module.exports = Sequelize.db.define("Item", {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    charset: "utf8mb4",
    underscored: true
});
