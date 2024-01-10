import axios, { AxiosResponse } from 'axios';
import HttpError from "../exception/HttpError";

class Utils {

    public async getUrl<T>(addr: string): Promise<T> {

        try{
            let response: AxiosResponse<T> = await axios.get(addr);
            return response.data;
        }
        catch (error) {
            throw new HttpError("Produto não encontrado", 404);
        }
    }
}
export default Utils;