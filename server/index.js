import bodyParser from 'body-parser'
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import postRoutes from './routes/notes.js';

const app = express();

app.use('/notes', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://mansor:Dammam_1973@cluster0.3g2t1.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then( () => {
    app.listen( PORT, () => {
      console.log(`Server running on port: ${PORT}`)
    })
  })
  .catch( (error) => {
    console.log(error.message)
  });

  mongoose.set('useFindAndModify', false);
