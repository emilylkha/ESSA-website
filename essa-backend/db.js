import { MongoClient } from 'mongodb';

let dbconnection = null;

export const connectToDB = (cb) => {
    MongoClient.connect(process.env.MONGODB_DATABASE)
        .then((client) => {
            dbconnection = client.db();
            return cb();
        })
        .catch(err => {
            console.log(err);
            return cb(err);
        });
};

export const getDb = () => {
    if (!dbconnection) {
        throw new Error('Database not connected');
    }
    return dbconnection;
};