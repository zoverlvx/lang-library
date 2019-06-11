const jwt = require("jsonwebtoken");
console.log(jwt)

module.exports = {
    generateToken
};

function generateToken(user) {
    console.log("user passed to generateToken", user)
    console.log(process.env.JWT_SECRET)
    const payload = {
        subject: user.id,
        username: user.username
    };
    const options = {
        expiresIn: "1d"
    };
    return jwt.sign(payload, process.env.JWT_SECRET, options);
}
