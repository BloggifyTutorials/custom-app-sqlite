import sqlite3 from "sqlite3"

export default {
    "title": "Sqlite Custom Application",
    "description": "Custom application built with Bloggify.",
    "domain": "bloggify.org",
    "plugins": [
    ],
    "server": {
        "session": {
            storeOptions: {
                driver: sqlite3.Database,
                ttl: 1000 * 60 * 60
            }
        }
    },
    "test_option": 42
}
