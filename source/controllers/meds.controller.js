"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const utils_1 = __importDefault(require("../utils/utils"));
// @ts-ignore
const meds_crawler_1 = __importDefault(require("../crawler/meds.crawler"));
class MedsController {
    getMeds(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const utilsInstance = new utils_1.default();
                let url = req.params.url;
                let data = yield utilsInstance.getUrl(url);
                let prod = meds_crawler_1.default.extractInfo(data);
                res.status(200);
                res.json(prod);
            }
            catch (error) {
                res.status(404);
                res.json({ message: error });
            }
            // res.json({ message: 'Get all users' });
        });
    }
}
exports.default = new MedsController();
