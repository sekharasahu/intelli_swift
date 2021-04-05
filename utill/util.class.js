class Util {
    //Method for creating bulk dummy records
    static async createBulkUser(User) {
        const users = [
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124345"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124340"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124341"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124342"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124343"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124344"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124346"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124347"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124348"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124349"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124310"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124311"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124312"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124313"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124314"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124315"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124316"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124317"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124318"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124319"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124320"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124321"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124322"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124323"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124324"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124325"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124326"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124327"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124328"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124329"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124330"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124331"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124332"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124333"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124356"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124100"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124111"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124123"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124400"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124411"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "720501012434212"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010125000"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010125001"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010125002"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010123212"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124390"},
            { "firstName": "Sekhar", "lastName": "Sahu", "city" : "Buguda", "country" : "India", "age" : "26", "gender" : "male", "phone" : "7205010124309"},
        ];

        await User.bulkCreate(users);

    }
}

module.exports =Util;