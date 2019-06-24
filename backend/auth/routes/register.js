/*jslint
 node
*/

const bcrypt = require("bcryptjs");

const Users = require("../../config/model.js")("users");

module.exports = function (req, res) {
    "use strict";
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then((saved) => res.status(201).json(saved))
        .catch((error) => res.status(500).json(error));
};
