const Express = require('express');
const Authenticate = require('./utill/jwt.utill');
const app = Express();
require('dotenv').config();

app.use(Express.json());
app.use(Authenticate.auth);


app.get('', (req, res)=>{
    res.status(200).send("Server is ruuning !!!")
})


app.listen(process.env.PORT, (err)=>{
    if(err) console.log(err);
    console.log(`server ruuning on ${process.env.PORT} port`);
});
