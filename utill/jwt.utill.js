const jwt = require('jsonwebtoken');

class Authenticate {
    static async auth(req, res, next) {
        let url = req.url;

        if (url == '') {
            res.status(200).send("Server is ruuning !!!");
        }

        if (url == '/token') {
            let token = jwt.sign({}, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
            res.status(200).send({
                auth_token : token
            });
        }

        console.log(req);




    }
}

module.exports = Authenticate;