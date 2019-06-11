/*jslint
 node
*/

const jwt = require("jsonwebtoken");

function generateToken(user) {
    "use strict";
    const payload = {
        subject: user.id,
        username: user.username
    };
    const options = {
        expiresIn: "1d"
    };
    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = {
    generateToken
};
