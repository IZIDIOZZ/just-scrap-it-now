import express from 'express';
import bodyParser from 'body-parser';
import scrapRoute from './routes/scrap.js';
import Database from './app/database/index.js';

const app  = express();

const PORT = 5000;

new Database();

app.use(bodyParser.json());

app.use('/scrap', scrapRoute);

app.listen(PORT, ()=>console.log(`server running on port: http://localhost:${PORT}`));