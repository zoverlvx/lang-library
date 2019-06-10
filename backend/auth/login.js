const bcrypt = require("bcryptjs");
const tokenService = require("./tokenService.js");

const Users = require("../config/model.js")("users");

module.exports = function(req, res) {
    const {username, password} = req.body;

    Users.findBy({username})
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = tokenService.generateToken(user);
                req.status(200).json({success: true, token});
            }
            if (!user || !bcrypt.compareSync(password, user.password)) {
                res.status(401).json({success: false, message: "Invalid credentials"});
            }
        }).catch(error => res.status(500).json(error));
}
