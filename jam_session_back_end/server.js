import 'dotenv/config';
import express from 'express'; // We are using the express library for the web server
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express(); // We need to instantiate an express object to interact with the server in our code
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8000;

import { jamSessionRouter } from './routes/jamsessions';

app.use('/jamsessions', jamSessionRouter);

app.listen(PORT, function () {
  // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
  console.log(
    `Express started on http://localhost:${PORT}; press Ctrl-C to terminate.`
  );
});
