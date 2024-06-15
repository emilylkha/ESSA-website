const { MongoClient } = require('mongodb');

let dbconnection

module.exports = {
    connectToDB: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/ESSA_database')
        .then((client) => {
            dbconnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbconnection
}