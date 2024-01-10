import Utils from "../utils/utils";
import ProductInfoExtractor from "../crawler/meds.crawler";
import HttpError from "../exception/HttpError";

class MedsService {

    utilsInstance = new Utils();
    extractor = new ProductInfoExtractor();
    async getMeds(param: any): Promise<ProductInfo>{
        let urlParam: string | undefined = param as string | undefined;

        if (urlParam) {
            let data: string = await this.utilsInstance.getUrl<string>(urlParam);
            return this.extractor.extractInfo(data);
        } else {
            throw new HttpError("Parametro inválido", 400);
        }
    }
}
export default MedsService;