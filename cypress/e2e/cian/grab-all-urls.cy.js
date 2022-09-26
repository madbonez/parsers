/// <reference types="cypress" />

// https://www.cian.ru/export/xls/offers/?currency=2&deal_type=sale&engine_version=2&gas=1&is_dacha=0&maxprice=17000000&minprice=9000000&minsite=19&object_type%5B0%5D=1&offer_type=suburban&p=10&region=4593

const getUrl = (pageNumber = 1) => {
    return `https://www.cian.ru/cat.php?currency=2&deal_type=sale&p=${pageNumber}&engine_version=2&gas=1&is_dacha=0&maxprice=17000000&minprice=9000000&minsite=19&object_type%5B0%5D=1&offer_type=suburban&region=4593`
}

const PAGE_NUMS = 14;

describe('grab all urls', () => {

    it('displays two todo items by default', () => {
        const genArr = Array.from({length: PAGE_NUMS}, (v, k) => k + 1)
        cy.wrap(genArr).each((index) => {
            cy.visit(getUrl(index));
            cy.wait(3000)
            cy.get('[data-name=LinkArea] > a').each((aElement) => {
                cy.writeFile('out/moscow/urls.txt', aElement.get(0)['href'] + "\n", {flag: 'a+'})
            })
            cy.wait(2000);
            const pagination = cy.get('[data-name=Pagination]');
            pagination.scrollIntoView();
            cy.wait(1000);
        });
    })

});
