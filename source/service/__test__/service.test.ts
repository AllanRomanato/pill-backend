import MedsService from "../meds.service";
import Utils from "../../utils/utils";
import ProductInfoExtractor from "../../crawler/meds.crawler";
import HttpError from "../../exception/HttpError";

jest.mock('../../utils/utils');
jest.mock('../../crawler/meds.crawler');

describe('MedsService', () => {
    let medsService: MedsService;

    beforeEach(() => {
        medsService = new MedsService();
    });

    test('getMeds deve retornar o JSON de acordo com a url passada', async () => {
        const mockGetUrl = jest.spyOn(Utils.prototype, 'getUrl');
        mockGetUrl.mockResolvedValue('mocked data');

        const mockExtractInfo = jest.spyOn(ProductInfoExtractor.prototype, 'extractInfo');
        mockExtractInfo.mockReturnValue({
            "productName": "Neosaldina Dipirona 300mg + Mucato de Isometepteno 30mg + Cafeína 30mg 30 drágeas",
            "productImage": "https://img.drogasil.com.br/catalog/product/n/e/neosaldina-30-drageas-01.jpg?width=450&height=450&quality=85&type=resize",
            "gtin13": "7896094999992",
            "brand": "Neosaldina",
            "price": "32.78"
        });

        const urlParam = 'https://www.drogasil.com.br/neosaldina-30-drageas.html';

        const result = await medsService.getMeds(urlParam);

        // Adjust the expected result to match the mocked return value
        expect(result).toEqual({
            "productName": "Neosaldina Dipirona 300mg + Mucato de Isometepteno 30mg + Cafeína 30mg 30 drágeas",
            "productImage": "https://img.drogasil.com.br/catalog/product/n/e/neosaldina-30-drageas-01.jpg?width=450&height=450&quality=85&type=resize",
            "gtin13": "7896094999992",
            "brand": "Neosaldina",
            "price": "32.78"
        });

        // Expect the extractInfo to be called with the resolved value from mockGetUrl
        expect(mockExtractInfo).toHaveBeenCalledWith('mocked data');
    });

    test('getMeds deve soltar HttpError quando o produto nao existe', async () => {
        const invalidUrlParam: any = undefined;

        await expect(medsService.getMeds(invalidUrlParam)).rejects.toThrow(HttpError);
    });
});
