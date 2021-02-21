import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

import postRoutes from './routes/posts.js';


const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


// Use Routes
app.use('/posts', postRoutes);


if(process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

}

const PORT = process.env.PORT || 5000;



mongoose.connect(process.env.CONNECTION_URL || 'mongodb://localhost/social-recipes' , { useNewUrlParser: true, useUnifiedTopology: true })
  .then( () => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`)
    })
  })
  .catch( (error) => {
    console.log(error.message)
  });


  mongoose.set('useFindAndModify', false);
