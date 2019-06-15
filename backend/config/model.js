/*jslint
    node
*/

const db = require("../database/dbConfig");

module.exports = function (table) {
    "use strict";
    function findBy(filter) {
        return db(table).where(filter);
    }
    function findById(id) {
        return db(table)
            .select("id", "username")
            .where({id})
            .first();
    }
    function add(user) {
        const newUser = db(table).insert(user);
        return newUser.then((id) => findById(id[0])).catch((error) => error);
    }
    return {
        findBy,
        findById,
        add
    };
};
