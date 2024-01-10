"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
// @ts-ignore
const meds_controller_1 = __importDefault(require("../controllers/meds.controller"));
class UserRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/:url', meds_controller_1.default.getMeds);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = new UserRoutes();
