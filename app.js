const Express = require('express');
const Authenticate = require('./utill/jwt.utill');
const app = Express();
require('dotenv').config();
const jwt = require('jsonwebtoken');

app.use(Express.json());

app.get('/', (req, res) => {
    res.status(200).send("Server is ruuning !!!");
});

app.get('/token', (req, res) => {
    let token = jwt.sign({}, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
    res.status(200).send({
        auth_token: token
    });
});


app.use(Authenticate.auth);

app.use('/api', require('./route/user.route'));

app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    console.log(`server ruuning on ${process.env.PORT} port`);
});


/*
1. JWT with every Routes
2. pivot queries api
3. pagination api
4. filter multi column filter and multiselect
*/