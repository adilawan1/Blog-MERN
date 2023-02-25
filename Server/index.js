import express from "express";
import  mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';

import postRoutes from './routes/Posts.js'

const app= express();



app.use(bodyParser.json({limit:"30mb",extended:true}));

app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use(cors());

app.use('/posts',postRoutes);

const CONNECTION_URL = 'mongodb+srv://Adil:asdfghjkl@cluster0.pau0k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology: true })

.then(()=>app.listen(PORT,()=>console.log(`Server running on ${PORT}`)))
.catch((Error)=>console.log(Error.message));

//mongoose.set('useFindAndModify',false);