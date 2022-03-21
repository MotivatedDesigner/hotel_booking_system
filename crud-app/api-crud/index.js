import express, { Router } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import route from './route/routes.js'


const app = express();


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/users', route)

const PORT = 8000;
const URL = 'mongodb+srv://hamza:qsdf123456@cluster0.nf0vo.mongodb.net/CRUDAPP?retryWrites=true&w=majority';


mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true}).then(() =>{
    app.listen(PORT, () => {
        console.log(`server is running successfully on ${PORT}`);
       });        
}).catch(error =>{
    console.log('Error:', error.message);
})
