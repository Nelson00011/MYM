const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://aylanelson01:U1trUjVDnorwGXeq@cluster0.qkxtg57.mongodb.net/?retryWrites=true&w=majority";

const createUser = async (req, res, next)=>{
    const newUser = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password        
    }
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db();
        const result = db.collection("users").insertOne(newUser);

    } catch(error){
        return  res.json({message: "Could not store data."});
    }
    client.close();
    res.json(newUser);
};

exports.createUser = createUser;