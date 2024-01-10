import express, { Application } from 'express';
import userRoutes from './routes/meds.route';
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from "./config/swagger.config";
import cors from 'cors';

class Server {
    private app: Application = express();
    private port: number = 4200;

    constructor() {
        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    private initializeMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(cors());
    }

    private initializeRoutes(): void {
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        this.app.use('/api/product', userRoutes.getRouter());
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Servidor PILL rodando em http://localhost:${this.port}`);
        });
    }
}

const server = new Server();
server.start();
export default Server;
