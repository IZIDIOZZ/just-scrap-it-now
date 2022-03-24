import express from "express";
import puppeteer from 'puppeteer'

const router = express.Router();

router.post('/', async (req,res)=>{
    // console.log(req.body)
    // res.send(req.body);
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.amazon.com.br/Xiaomi-Vers%C3%A3o-Global-Lacrada-preta/dp/B07V822TVL')
   
    const element = await page.waitForSelector('#productTitle')
    const value = await element.evaluate(el=> el.textContent);
    console.log('https://www.amazon.com.br/teste'.split('/\//'))
    await browser.close();
    res.send(JSON.stringify(value))

})

export default router;