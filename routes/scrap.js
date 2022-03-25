import express from "express";
import puppeteer from 'puppeteer'
import getSelectorsFromMappedUrl from '../mapped-urls/mapped-url.js'

const router = express.Router();

router.post('/', async (req, res) => {
    const { url } = req.body;
    const value = await getProdutcInformation(getSelectorsFromMappedUrl(url), url);
    res.send(JSON.stringify(value))
})

const getProdutcInformation = async (selectors, url) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url)

        for (var key in selectors) {
            if (selectors.hasOwnProperty(key)) {
                const element = await page.waitForSelector(selectors[key])

                const value = await element.evaluate((el, key) => {
                    const properties = {
                        titulo: el.textContent,
                        imagem: el.getAttribute('src'),
                        preco: el.textContent,
                        descricao: el.textContent,
                    }
                    return properties[key];
                }, key);

                selectors[key] = value;
            }
        }

    } catch (error) {
        console.log('error')
    } finally {
        await browser.close();
    }

    return selectors;
}
export default router;