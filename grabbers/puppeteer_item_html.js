import puppeteer from 'puppeteer';
import UserAgent from "user-agents";
import fs from "fs";

const ALL_LINKS_LOCATION = '/Users/artem/workspace/parsers/out/all-urls.txt';

const getRandomTimeout = (important) => {
    const random = Number(Date.now().toString().slice(-4));
    if (important) {
        return  random < 3000 ? 3000 : random;
    } else {
        return random;
    }
}

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

export function getViewPort() {
    return {
        width: 1000 + Number(Date.now().toString().slice(-2)) * 2,
        height: 800 + Number(Date.now().toString().slice(-2)) * 2
    };
}

(async () => {
    const allLinksText = fs.readFileSync(ALL_LINKS_LOCATION, {encoding: 'utf-8'});
    const allLinks = allLinksText.split('\n').filter(link => !!link);

    for (let index = 0; index < allLinks.length; index++) {
        const link = allLinks[index];

        try {
            const browser = await puppeteer.launch({headless:false});
            const page = await browser.newPage();
            const ua = getUserAgent();
            await page.setUserAgent(ua);
            const viewPort = getViewPort();
            console.log(`viewPort ${viewPort.width}:${viewPort.height}`)
            await page.setViewport(viewPort);

            console.log(link);
            await page.goto(link);

            const userAgent = await page.evaluate(() => navigator.userAgent );
            console.log(userAgent);

            const text = await page.evaluate(() => document.querySelector('*').outerHTML);
            if (text.indexOf('Checking your browser before accessing') !== -1 || text.indexOf('Мы проверяем ваш браузер') !== -1) {
                await page.deleteCookie()
                writeError(ua, index, link)
                changeUserAgent();
            } else {
                writeHtml(link, text);
            }

            console.log(`current index ${index} / ${allLinks.length}`);

            await timeout(getRandomTimeout(true));
            await page.close();
            await browser.close();
            await timeout(getRandomTimeout(false));
        } catch(e) {
            console.log('unexpected error')
            console.log(e)
            fs.writeFileSync(`out/error-log.txt`, `${link}\n`, {flag: 'a'});
        }
    }

    await browser.close();
})();

export function writeHtml(link, text) {
    const contentFileName = Date.now().toString();
    fs.writeFileSync(`out/items/${contentFileName}.html`, text);
    fs.writeFileSync(`out/page-map.txt`, `${contentFileName}.html - ${link}\n`, {flag: 'a'});
    console.log('data had written')
}

export function writeError(ua, index, link) {
    console.log('Error with ua: ' + ua);
    console.log(index, link);
    fs.writeFileSync(`out/error-log.txt`, `${link}\n`, {flag: 'a'});
}

export function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function changeUserAgent() {
    uaUsedCounter = 0;
    userAgentString = new UserAgent().toString();
}
