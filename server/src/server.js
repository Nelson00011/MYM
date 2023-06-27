import express from 'express';
import { db, connectToDb } from './db.js';

//COMMENTS app components:
const port = 8000;
const app = express();
app.use(express.json());


//COMMENTS DATABASE CONNECTION:
//POST, GET, PUT
app.get('/', (req, res)=>{
    res.send(`hello ${req.body.name}`);
})
app.post('/', (req, res)=>{
    res.send(`hello ${req.body.name}`);
})



//CONFIRMATION OF PORT & Database
connectToDb(() => {
    console.log('Successfully connected to database!');
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});
