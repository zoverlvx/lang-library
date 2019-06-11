const {authenticate} = require("../auth/authenticate");
const tokenService = require("../auth/tokenService");
const register = require("../auth/register.js");
const login = require("../auth/login.js");

module.exports = server => {
    server.post("/api/register", register);
    server.post("/api/login", login);
    // server.get("/api/languages", authenticate, getLanguages);
}


