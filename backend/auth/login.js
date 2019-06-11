const bcrypt = require("bcryptjs");
const tokenService = require("./tokenService.js");
console.log(tokenService)

const Users = require("../config/model.js")("users");

module.exports = function(req, res) {
    const {username, password} = req.body;

    Users.findBy({username})
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                console.log("it's working");
                console.log(user);
                console.log(username, password)
                const token = tokenService.generateToken(user);
                console.log(token);
                res.status(200).json({success: true, token});
            }
            if (!user || !bcrypt.compareSync(password, user.password)) {
                res.status(401).json({success: false, message: "Invalid credentials"});
            }
        }).catch(error => res.status(500).json(error));
}
