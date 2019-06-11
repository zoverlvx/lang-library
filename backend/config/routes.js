/*jslint
    node
*/

// const {authenticate} = require("../auth/authenticate");
const register = require("../auth/register.js");
const login = require("../auth/login.js");

module.exports = function (server) {
    "use strict";
    server.post("/api/register", register);
    server.post("/api/login", login);
    // server.get("/api/languages", authenticate, getLanguages);
};


