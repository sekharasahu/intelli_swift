const jwt = require('jsonwebtoken');

class Authenticate {
    //To Authenticate every request comming
    static async auth(req, res, next) {
        let authorization = req.headers.authorization;

        if(authorization) {
            let authToken = authorization.split(' ')[1];
            try {
                let isValid = await jwt.verify(authToken, process.env.JWT_SECRET_KEY);
                next();
            } catch (err) {
                res.status(400).send('Unauthorized');
            }

        } else {
            res.status(400).send('AUth token missing');
        }
    }
}

module.exports = Authenticate;