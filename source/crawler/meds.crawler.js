"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = __importStar(require("cheerio"));
class ProductInfoExtractor {
    constructor() {
    }
    extractInfo(html) {
        const $ = cheerio.load(html);
        const productName = $('meta[property="og:title"]').attr('content');
        const productImage = $('meta[property="og:image"]').attr('content');
        const gtin13 = $('meta[property="product:gtin"]').attr('content');
        const brandName = $('script[type="application/ld+json"]').text();
        const brandData = JSON.parse(brandName);
        const brand = brandData.brand.name;
        if (productName && productImage && gtin13 && brand) {
            return {
                productName,
                productImage,
                gtin13,
                brand,
            };
        }
        throw new Error('Erro ao extrair as informações');
    }
}
exports.default = new ProductInfoExtractor();
