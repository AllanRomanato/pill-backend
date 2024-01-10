import { Request, Response } from 'express';
import MedsService from '../service/meds.service';
import HttpError from '../exception/HttpError';

class MedsController {
    async getMeds(req: Request, res: Response): Promise<any> {
        try {
            let service = new MedsService();
            let prod = await service.getMeds(req.query.url);
            res.status(200);
            res.json(prod);
        }catch (error: any) {
            if (error instanceof HttpError){
                res.status(error.errorCode);
                res.json({ message: error.message });
            }else{
                console.error(error);
                res.status(500);
                res.json({ message: "Internal Server Error" });
            }

        }
    }
}

export default new MedsController();
