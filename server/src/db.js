import { MongoClient } from 'mongodb';
const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://aylanelson01:U1trUjVDnorwGXeq@cluster0.qkxtg57.mongodb.net/?retryWrites=true&w=majority";
//U1trUjVDnorwGXeq
//MongoDB

let db;

async function connectToDb(cb) {
    const client = new MongoClient('mongodb://127.0.0.1:27017/');
    await client.connect();
    db = client.db('MYM');
    return cb();
}

export {
    db,
    connectToDb,
};