/*jslint
    node
*/

const {authenticate} = require("../auth/authenticate");
const register = require("../auth/routes/register.js");
const login = require("../auth/routes/login.js");
const getLanguages = require("../auth/routes/languages.js");

module.exports = function (server) {
    "use strict";
    server.post("/api/register", register);
    server.post("/api/login", login);
    server.get("/api/languages", authenticate, getLanguages);
};
