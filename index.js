import express from 'express';
import bodyParser from 'body-parser';

import scrapRoute from './routes/scrap.js';

const app  = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/scrap', scrapRoute);

app.get('/',(req, res)=> res.send('Hello From home page')); 

app.listen(PORT, ()=>console.log(`server running on port: http://localhost:${PORT}`));