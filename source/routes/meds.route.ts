// routes/userRoutes.ts
import express, { Router } from 'express';
// @ts-ignore
import medsController from '../controllers/meds.controller';

class UserRoutes {
    private router: Router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('/', medsController.getMeds);
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default new UserRoutes();
