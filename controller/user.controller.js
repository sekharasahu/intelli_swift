const User = require('../model/user.model');

class UserController {
    //Create an new user
    static async addUser(req, res) {
        try {
            let newUser = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                city: req.body.city,
                country: req.body.country,
                age: req.body.age,
                gender: req.body.gender,
                phone: req.body.phone,
            });

            return res.status(201).json(newUser);
        } catch (err) {
            return res.status(400).json(err.parent.message);
        }
    }

    //Update data of an user
    static async editUser(req, res) {
        try {
            await User.update(req.body, {
                where: {
                    identifier: req.params.identifier
                }
            });
            return res.status(200).json({
                message: `User with identifier ${req.params.identifier} updated.`
            });
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    //Create an new user
    static async getUsers(req, res) {
        try {
            let users = await User.findAll()

            return res.status(200).json(users);
        } catch (err) {
            return res.status(400).json(err.parent.message);
        }
    }

    //Search users
    static async searchUsers(req, res) {
        let offset = (req.query.page) ? req.query.page : 1;
        let limit = (req.query.count) ? req.query.count : 5;
        try {
            let users = await User.findAll({
                where: req.body.cond,
                attributes: req.body.attributes,
                offset: (parseInt(offset) - 1) * parseInt(limit),
                limit: parseInt(limit)
            })

            return res.status(200).json(users);
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    //Delete an user
    static async deleteUsers(req, res) {
        try {
            await User.update({
                isDeleted: true
            }, {
                where: {
                    identifier: req.params.identifier
                }
            });
            return res.status(200).json({
                message: `User with identifier ${req.params.identifier} deleted.`
            });
        } catch (err) {
            return res.status(400).json(err);
        }
    }
}

module.exports = UserController;