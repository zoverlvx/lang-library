/*jslint
 node
*/

const jwt = require("jsonwebtoken");

const jwtKey =
        process.env.JWT_SECRET || "add a .env file to root of project with the JWT_SECRET variable";

function authenticate(req, res, next) {
    "use strict";
    const token = req.get("Authorization");

    if (token) {
        jwt.verify(token, jwtKey, function (err, decoded) {
            if (err) {
                return res.status(401).json({error: err});
            }

            req.decoded = decoded;
            next();
        });
    }

    if (!token) {
        return res.status(401).json({
            error: "No token provided"
        });
    }
}

module.exports = {
    authenticate
};
