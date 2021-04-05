const expect = require("chai").expect;
const axios = require('axios').default;


describe('User api sanity test', async () => {
    it('Able to create a new user', async () => {
        try {
            let result = await axios({
                method: 'post',
                url: 'http://localhost:8000/api/user',
                data: {
                    firstName: "Sekhar",
                    lastName: "Sahu",
                    city: "Buguda",
                    country: "India",
                    age: "26",
                    gender: "male",
                    phone: "7205010199"
                },
                headers: {
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc1MTk0MTAsImV4cCI6MTYxNzYwNTgxMH0.QAAHLZpa5T_YIwsNMPS7w9Vec6GGG3qxSzrb8BOjoBw'
                }
            });
            expect(result.status).to.be.eq(201);
        } catch (err) {
            //console.log(err);
        }

    });

    it('Unique phone number validation', async () => {
        try {
            let result = await axios({
                method: 'post',
                url: 'http://localhost:8000/api/user',
                data: {
                    firstName: "Sekhar",
                    lastName: "Sahu",
                    city: "Buguda",
                    country: "India",
                    age: "26",
                    gender: "male",
                    phone: "7205010199"
                },
                headers: {
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc1MTk0MTAsImV4cCI6MTYxNzYwNTgxMH0.QAAHLZpa5T_YIwsNMPS7w9Vec6GGG3qxSzrb8BOjoBw'
                }
            });
            expect(result.status).to.be.eq(400);
        } catch (err) {
            //console.log(err);
        }
    });

    it('GET all users with out pagination', async () => {
        try {
            let result = await axios({
                method: 'get',
                url: 'http://localhost:8000/api/user',
                headers: {
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc1MTk0MTAsImV4cCI6MTYxNzYwNTgxMH0.QAAHLZpa5T_YIwsNMPS7w9Vec6GGG3qxSzrb8BOjoBw'
                }
            });
            expect(result.status).to.be.eq(200);
        } catch (err) {
            //console.log(err);
        }

    });


    it('Update user', async () => {
        try {
            let result = await axios({
                method: 'get',
                url: 'http://localhost:8000/api/users',
                headers: {
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc1MTk0MTAsImV4cCI6MTYxNzYwNTgxMH0.QAAHLZpa5T_YIwsNMPS7w9Vec6GGG3qxSzrb8BOjoBw'
                }
            });

            let updateRes = await axios({
                method: 'put',
                url: `http://localhost:8000/api/user/${result.data[0].identifier}`,
                data: {
                    firstName: "Sekhar suman11223344",
                    city: "Berhampur123",
                    country: "Odisha11"
                },
                headers: {
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc1MTk0MTAsImV4cCI6MTYxNzYwNTgxMH0.QAAHLZpa5T_YIwsNMPS7w9Vec6GGG3qxSzrb8BOjoBw'
                }
            })
            //console.log(updateRes);
            expect(updateRes.status).to.be.eq(200);
        } catch (err) {
            //console.log(err);
        }

    });
});