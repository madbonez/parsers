import {JSDOM} from "jsdom";
import fs from "fs";

const region = 'moscow';

const htmlRootDir = `/Users/artem/workspace/parsers/out/${region}/`;
const urlsFilePath = `/Users/artem/workspace/parsers/out/${region}/urls.txt`;
(async () => {
    const links = fs.readdirSync(htmlRootDir);
    const fullLinks = links.map(link => htmlRootDir + link);

    for (let link of fullLinks) {
        const htmlContent = fs.readFileSync(link, {encoding: 'utf-8'});

        const dom = new JSDOM(htmlContent);
        let hrefs = dom.window.document.querySelectorAll("[data-name=LinkArea] > a");
        const hrefString = Array.from(hrefs).map(href => {
            return href.href.indexOf('https') !== -1 ? href.href : `https://www.cian.ru${href.href}`
        }).join('\n');

        fs.appendFileSync(urlsFilePath, `\n${hrefString}`)
    }
})()
