import * as cheerio from 'cheerio';

class ProductInfoExtractor {

    constructor() {
    }

    extractInfo(html: string): ProductInfo {
        let $ = cheerio.load(html);

        let data = $('script[type="application/ld+json"]').text();
        let parsedData = JSON.parse(data);
        let brand = parsedData.brand.name;
        let productName = parsedData.name;
        let productImage = parsedData.image;
        let gtin13 = parsedData.gtin13;
        let price = parsedData.offers.price;

        if (productName && productImage && gtin13 && brand && price) {

            return {
                productName,
                productImage,
                gtin13,
                brand,
                price
            };
        }
        throw new Error('Erro ao extrair as informações');
    }
}

export default ProductInfoExtractor;
