const sqlite3 = require("sqlite3")

module.exports = {
    "title": "Sqlite Custom Application",
    "description": "Custom application built with Bloggify.",
    "domain": "bloggify.org",
    "db_options": {
        "autosync": true,
        "underscored": true
    },
    "plugins": [
        "ajs-components"
    ],
    "server": {
        "session": {
            storeOptions: {
                driver: sqlite3.Database,
                ttl: 1000 * 60 * 60
            }
        }
    }
}
