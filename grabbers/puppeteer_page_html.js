import puppeteer from 'puppeteer';
import UserAgent from "user-agents";
import fs from "fs";

const getRandomTimeout = () => {
    const random = Number(Date.now().toString().slice(-4));
    return  random < 3000 ? 3000 : random;
}

export const PAGE_NUMS = 43;
const region = 'moscow';

const uaNewBatchSize = 4;
let uaUsedCounter = 0;
let userAgentString = new UserAgent().toString();
const getUserAgent = () => {
    if (uaUsedCounter < 4) {
        uaUsedCounter++;
        return userAgentString;
    } else {
        uaUsedCounter = 0;
        userAgentString = new UserAgent().toString();
        return userAgentString;
    }
}

(async () => {
    // prepare for headless chrome
    const browser = await puppeteer.launch();

    for (let pageNum = 43; pageNum <= PAGE_NUMS; pageNum++) {
        const link = getLink(pageNum);

        const page = await browser.newPage();
        const ua = getUserAgent();
        await page.setUserAgent(ua);

        await page.goto(link);
        console.log(link)
        const userAgent = await page.evaluate(() => navigator.userAgent );
        console.log(userAgent);

        await timeout(1000);

        const text = await page.evaluate(() => document.querySelector('*').outerHTML);
        if (text.indexOf('Checking your browser before accessing') !== -1) {
            console.log('Error with ua: ' + ua)
            console.log(pageNum, link)
        } else {
            fs.writeFileSync(`/Users/artem/workspace/parsers/out/${region}/${pageNum}-page.html`, text);
        }

        await page.close();
        await timeout(getRandomTimeout());
    }

    await browser.close();
})();

export function getLink(pageNumber) {
    // return `https://www.cian.ru/cat.php?p=${pageNumber}&currency=2&deal_type=sale&engine_version=2&land_status%5B0%5D=2&land_status%5B1%5D=7&maxprice=20000001&minarea=170&minprice=4999999&minsite=15&object_type%5B0%5D=1&offer_type=suburban&region=4636`;
    // return `https://www.cian.ru/cat.php?p=${pageNumber}&currency=2&deal_type=sale&engine_version=2&land_status%5B0%5D=2&land_status%5B1%5D=7&maxprice=20000001&minarea=170&minprice=4999999&minsite=15&object_type%5B0%5D=1&offer_type=suburban&region=4564`;
    // return `https://www.cian.ru/cat.php?p=${pageNumber}&currency=2&deal_type=sale&engine_version=2&land_status%5B0%5D=2&land_status%5B1%5D=7&maxprice=20000001&minarea=170&minprice=4999999&minsite=15&object_type%5B0%5D=1&offer_type=suburban&region=4619`;
    return `https://www.cian.ru/cat.php?p=${pageNumber}&currency=2&deal_type=sale&engine_version=2&land_status%5B0%5D=2&land_status%5B1%5D=7&maxprice=20000001&minarea=170&minprice=4999999&minsite=15&object_type%5B0%5D=1&offer_type=suburban&region=-1`;
}

export function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
