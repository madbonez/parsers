import {JSDOM} from "jsdom";
import fs from "fs";

const htmlRootDir = '/Users/artem/workspace/parsers/out/items-test-6/';
const mapFileLocation = '/Users/artem/workspace/parsers/out/page-map.txt';

const fileLinkMap = new Map(
    fs.readFileSync(mapFileLocation, {encoding: 'utf-8'}).split('\n').map(row => row.split(' - ').map(i => i.trim()))
);

export function getRowType(row) {
    if (row?.textContent.indexOf('Материал') !== -1) {
        return 'material';
    }
    if (row?.textContent.indexOf('Этажей') !== -1) {
        return 'floors'
    }
    if (row?.textContent.indexOf('Построен') !== -1) {
        return 'builtAt'
    }
}

(async () => {
    const links = fs.readdirSync(htmlRootDir);
    // const fullLinks = links.map(link => htmlRootDir + link);
    // const links = links.map(link => htmlRootDir + link);

    for (let link of links) {
        const htmlContent = fs.readFileSync(htmlRootDir + link, {encoding: 'utf-8'});

        if (htmlContent.indexOf('Checking your browser before accessing') === -1) {
            const doc = new JSDOM(htmlContent);

            const imgUrl = doc.window.document.querySelector('[data-name="OfferGallery"] img')?.src
            const address = doc.window.document.querySelector('address')?.textContent.replace('На карте', '');
            const mkadDistanceRaw = doc.window.document.querySelector('[data-name="Geo"] ul:last-of-type li')?.textContent;
            let mkadDistance;
            if (mkadDistanceRaw?.indexOf(' км от МКАД') !== -1) {
                mkadDistance = mkadDistanceRaw?.substring(mkadDistanceRaw.lastIndexOf(',') + 2, mkadDistanceRaw.indexOf(' км от МКАД'))
            }

            const price = doc.window.document.querySelector('[itemprop="price"]')?.textContent.replace(/\s/g, '').replace('₽', '');

            const houseArea = doc.window.document.querySelectorAll('[data-testid="object-summary-description-info"]')[0]?.querySelector('div')?.textContent;
            const landArea = doc.window.document.querySelectorAll('[data-testid="object-summary-description-info"]')[1]?.querySelector('div')?.textContent;

            const thirdRow = doc.window.document.querySelectorAll('[data-testid="object-summary-description-info"]')[2];
            const fourthRow = doc.window.document.querySelectorAll('[data-testid="object-summary-description-info"]')[3];
            const fifthRow = doc.window.document.querySelectorAll('[data-testid="object-summary-description-info"]')[4];

            let material;
            let floors;
            let builtAt;

            [thirdRow, fourthRow, fifthRow].forEach(row => {
                switch (getRowType(row)) {
                    case 'material':
                        material = row?.querySelector('div')?.textContent;
                        break;
                    case 'floors':
                        floors = row?.querySelector('div')?.textContent;
                        break;
                    case 'builtAt':
                        builtAt = row?.querySelector('div')?.textContent;
                        break;
                }
            })

            const updated = doc.window.document.querySelector("[data-name=\"OfferAdded\"]")?.textContent;
            const stats = doc.window.document.querySelector("[data-name=\"OfferStats\"]")?.textContent;

            let trs = doc.window.document.querySelectorAll("[data-name=\"PriceHistory\"] tr");
            const priceHistory = Array.from(trs).map(tr => Array.from(tr.querySelectorAll('td')).map(td => td?.textContent).join(' - ')).join(':');
            const firstPriceRow = Array.from(trs)[trs.length - 1];
            const publishDate = firstPriceRow?.querySelectorAll('td')?.[0]?.textContent;
            const firstPrice = firstPriceRow?.querySelectorAll('td')?.[1]?.textContent.replace(/ /g, '').replace('₽', '');
            const priceHistoryCount = trs.length;

            const totalDiscount = firstPrice - price;

            const withGas = doc.window.document.querySelector('[data-name="Features"]')?.textContent.indexOf('Газ') !== -1;

            // const header = 'Ссылка;Площадь дома;Площадь участка;Материал;Этажей;Есть газ;Год постройки;Цена;Скидка с первой цены;Фото;Расстояние до мкад;Дата обновления;Дата публикации;Статистика просмотров;История цены;Количество изменений цены;Адрес;'
            const csvRowContent =
                fileLinkMap.get(link) + ';' +
                (houseArea || '')  + ';' +
                (landArea || '')  + ';' +
                (material || '')  + ';' +
                (floors  || '') + ';' +
                (withGas ? 'Да' : 'Нет')  + ';' +
                (builtAt || '') + ';' +
                (price || '') + ';' +
                (totalDiscount || '')  + ';' +
                (imgUrl || '') + ';' +
                (mkadDistance || '')  + ';' +
                (updated || '') + ';' +
                (publishDate || '') + ';' +
                (stats || '') + ';' +
                (priceHistory || '')  + ';' +
                (priceHistoryCount || '') + ';' +
                (address || '') + ';\n';

            fs.appendFileSync('/Users/artem/workspace/parsers/result.csv', csvRowContent)
        } else {
            console.log('Checking your browser before accessing')
        }
    }
})()
