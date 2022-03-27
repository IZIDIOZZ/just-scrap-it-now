import express from 'express';
import bodyParser from 'body-parser';
import scrapRoute from './app/routes.js';
import startDBConnection from './app/database/index.js';
import cors from 'cors';

const app  = express();

startDBConnection();
app.use(cors());
app.use(bodyParser.json());
app.use('/scrap', scrapRoute);

app.get('/', (res)=>{res.send('Scraper Working Fine');})

app.listen(process.env.APP_PORT, ()=>console.log(`server running on port: http://localhost:${process.env.APP_PORT}`));