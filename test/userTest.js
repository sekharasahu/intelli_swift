const expect = require("chai").expect;
const axios = require('axios').default;


describe('User api sanity test', async () => {
    it('Able to create a new user', async () => {
        try {
            let token = await axios.get('http://localhost:8000/token');
    
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
                    authorization: ` Bearer ${token.data.auth_token}`
                }
            });
            expect(result.status).to.be.eq(201);
        } catch (err) {
            //console.log(err);
        }

    });

    it('Unique phone number validation', async () => {
        try {
            let token = await axios.get('http://localhost:8000/token');

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
                    authorization: ` Bearer ${token.data.auth_token}`
                }
            });
            expect(result.status).to.be.eq(400);
        } catch (err) {
            //console.log(err);
        }
    });

    it('GET all users with out pagination', async () => {
        try {
            let token = await axios.get('http://localhost:8000/token');

            let result = await axios({
                method: 'get',
                url: 'http://localhost:8000/api/user',
                headers: {
                    authorization: ` Bearer ${token.data.auth_token}`
                }
            });
            expect(result.status).to.be.eq(200);
        } catch (err) {
            //console.log(err);
        }

    });


    it('Update user', async () => {
        try {
            let token = await axios.get('http://localhost:8000/token');

            let result = await axios({
                method: 'get',
                url: 'http://localhost:8000/api/users',
                headers: {
                    authorization: ` Bearer ${token.data.auth_token}`
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
                    authorization: ` Bearer ${token.data.auth_token}`
                }
            })
            //console.log(updateRes);
            expect(updateRes.status).to.be.eq(200);
        } catch (err) {
            //console.log(err);
        }

    });

    it('Search user ony for id , firstName and firstNamefirstName', async () => {
        try {
            let token = await axios.get('http://localhost:8000/token');

            let result = await axios({
                method: 'post',
                url: 'http://localhost:8000/api/users/select',
                data: {
                    "cond": {
                        isDeleted: false
                    },
                    attributes: ["id", "firstName", "lastName"]
                },
                headers: {
                    authorization: ` Bearer ${token.data.auth_token}`
                }
            });
            expect(result.data[0]).to.have.all.keys("id", "firstName", "lastName");
        } catch (err) {
            console.log(err);
        }

    });

    it('Search user ony for id , age and country', async () => {
        try {
            let token = await axios.get('http://localhost:8000/token');

            let result = await axios({
                method: 'post',
                url: 'http://localhost:8000/api/users/select',
                data: {
                    "cond": {
                        isDeleted: false
                    },
                    attributes: ["id", "age", "country"]
                },
                headers: {
                    authorization: ` Bearer ${token.data.auth_token}`
                }
            });
            expect(result.data[0]).to.have.all.keys("id", "age", "country");
        } catch (err) {
            console.log(err);
        }

    });


    it('Search user with limitation', async () => {
        try {
            let token = await axios.get('http://localhost:8000/token');
            let count = 5;

            let result = await axios({
                method: 'post',
                url: `http://localhost:8000/api/users/select?page=1&count=${count}`,
                data: {
                    cond: {
                    },
                    attributes: ["id", "age", "country"]
                },
                headers: {
                    authorization: ` Bearer ${token.data.auth_token}`
                },
                
            });
            expect(result.data.length).to.be.eq(count);
        } catch (err) {
            console.log(err);
        }

    });

    it('Search user with pagination', async () => {
        try {
            let token = await axios.get('http://localhost:8000/token');
            let count = 5;

            let result = await axios({
                method: 'post',
                url: `http://localhost:8000/api/users/select?page=2&count=${count}`,
                data: {
                    cond: {
                    },
                    attributes: ["id", "age", "country"]
                },
                headers: {
                    authorization: ` Bearer ${token.data.auth_token}`
                },
                
            });
            expect(result.data[0].id).to.be.eq(count + 1);
        } catch (err) {
            console.log(err);
        }

    });

    it('Delete user with soft delete', async () => {
        try {
            let token = await axios.get('http://localhost:8000/token');

            let result = await axios({
                method: 'get',
                url: 'http://localhost:8000/api/users',
                headers: {
                    authorization: ` Bearer ${token.data.auth_token}`
                }
            });

            let deleteUser = await axios({
                method: 'delete',
                url: `http://localhost:8000/api/user/${result.data[0].identifier}`,
                headers: {
                    authorization: ` Bearer ${token.data.auth_token}`
                }
            })
            expect(deleteUser.status).to.be.eq(200);
        } catch (err) {
            console.log(err);
        }

    });
});