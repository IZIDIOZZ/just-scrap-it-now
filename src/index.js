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

app.get('/', (req,res)=>{res.send('Scraper Working Fine');})

app.listen(process.env.PORT || 3000, ()=>console.log(`server running on port: ${process.env.PORT}`));