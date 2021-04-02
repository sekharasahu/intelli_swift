const User = require('../model/user.model');

class UserController {
    static async addUser(req, res) {
        let newUser = await User.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName
        });

        return res.status(201).json(newUser);
    }
}

module.exports = UserController;