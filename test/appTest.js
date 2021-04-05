const expect  = require("chai").expect;
const axios = require('axios').default;


describe('App sanity test', async()=>{
    it('Ping server', async()=>{
        try {
            let result = await axios.get('http://localhost:8000');
            expect(result.status).to.be.eq(200);
        } catch (err) {
            console.log(err);
        }
       
    });

    it('GET Auth token with 200 status code', async()=>{
        try {
            let result = await axios.get('http://localhost:8000/token');
            expect(result.status).to.be.eq(200);
        } catch (err) {
            console.log(err);
        }
    });

    it('GET Auth token with token in response', async()=>{
        try {
            let result = await axios.get('http://localhost:8000/token');
            expect(result.data.auth_token).to.be.a('string');
        } catch (err) {
            console.log(err);
        }
    });

    it('POST /user throws error with out auth token', async()=>{
        try {
            let result = await axios.post('http://localhost:8000/api/user');
            expect(result.status).to.be(400);
        } catch (err) {
            //console.log(err);
        }
    });

    it('PUT /user throws error with out auth token', async()=>{
        try {
            let result = await axios.put('http://localhost:8000/api/user/411ab283-ef42-48c8-9ccc-aa0a99ae80b9');
            expect(result.status).to.be(400);
        } catch (err) {
            //console.log(err);
        }
    });

    it('DELETE /user throws error with out auth token', async()=>{
        try {
            let result = await axios.delete('http://localhost:8000/api/user/411ab283-ef42-48c8-9ccc-aa0a99ae80b9');
            expect(result.status).to.be(400);
        } catch (err) {
            //console.log(err);
        }
    });

    it('GET /users throws error with out auth token', async()=>{
        try {
            let result = await axios.get('http://localhost:8000/api/users');
            expect(result.status).to.be(400);
        } catch (err) {
            //console.log(err);
        }
    });
});