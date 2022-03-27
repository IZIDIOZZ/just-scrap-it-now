import puppeteer from "puppeteer";
import { getSelectorsFromMappedUrl, removeQueryString } from "../utils/mapped-url.js";
import mappedSelectorForUrl from "../mapping/mappedSelectorsUrl.js"
import productRepository from "../repository/productRepository.js";

export const getProductInformation = async (url) => {
    
    const browser = await puppeteer.launch( {args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ]});

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
    const selectors = getSelectorsFromMappedUrl(url);
    const result = {};

    if (selectorsWasNotFound(selectors)) {
        await page.close();
        await browser.close();
        return {
            errorMessage: `Url '${url}' not Mapped to this API`,
            validUrls: getListOfValidUrls()
        };
    }

    const databaseProduct = await productRepository.select(removeQueryString(url));

    if (databaseProduct != null) return databaseProduct;

    await page.goto(url, { waitUntil: 'domcontentloaded' })

    for (var key in selectors) {
        if (selectors.hasOwnProperty(key)) {
            result[key] = await getPropertyValue(selectors, key, page);
        }
    }

    await productRepository.insert(result);

    await page.close();
    await browser.close();
    return result;
}

const selectorsWasNotFound = (selectors) => Object.keys(selectors).length === 0

const getListOfValidUrls = () => {
    return Object.keys(mappedSelectorForUrl);
}

const getPropertyValue = async (selectors, key, page) => {

    const attributeTypeName = selectors[key].attributeType

    if (isUrlProperty(attributeTypeName)) {
        return removeQueryString(await page.url());
    }

    try {
        const element = await page.waitForSelector(selectors[key].selector, { timeout: 2000 });
        return await element.evaluate((el, attributeTypeName) => {
            const attributeTypes = {
                text: el.textContent,
                src: el.getAttribute('src')
            }
            return attributeTypes[attributeTypeName];

        }, attributeTypeName)
        
    } catch (error) {
        return 'no value found'
    }
}

const isUrlProperty = (key) => key === 'url';



