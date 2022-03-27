import express from 'express';
import bodyParser from 'body-parser';
import scrapRoute from './app/routes.js';
import startDBConnection from './app/database/index.js';

const app  = express();

startDBConnection();

const PORT = 5000;

app.use(bodyParser.json());

app.use('/scrap', scrapRoute);

app.listen(PORT, ()=>console.log(`server running on port: http://localhost:${PORT}`));