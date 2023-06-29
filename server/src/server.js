import express from 'express';
import bodyParser from 'body-parser';
import mongoPractice from './mongo';
// import { db, connectToDb } from './db.js';

//COMMENTS app components:
const port = 8000;
const app = express();
app.use(bodyParser.json());


//COMMENTS DATABASE CONNECTION:
//POST, GET, PUT
app.get('/', (req, res)=>{
    res.send(`hello ${req.body.name}`);
})

app.post('/', (req, res)=>{
    mongoPractice.createUser();

    res.send(`hello ${req.body.name}`);
})





//CONFIRMATION OF PORT & Database
connectToDb(() => {
    console.log('Successfully connected to database!');
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});
