"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const shopify_guard_1 = require("./shopify.guard");
const shopify_api_1 = require("@shopify/shopify-api");
const shopify_service_1 = require("./shopify.service");
let ShopifyController = class ShopifyController {
    constructor(shopifyService) {
        this.shopifyService = shopifyService;
    }
    async install(shop, req, res) {
        const authRoute = await shopify_api_1.Shopify.Auth.beginAuth(req, res, `${shop}.myshopify.com`, `/shopify/auth/callback`);
        console.log(authRoute);
        res.redirect(authRoute);
    }
    async authCallback(query, req, res) {
        const { code, shop, hmac } = query;
        console.log(query);
        try {
            const session = await shopify_api_1.Shopify.Auth.validateAuthCallback(req, res, query);
            return res.status(common_1.HttpStatus.OK).send(session);
        }
        catch (error) {
            console.log(error);
            return res.status(common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async test() {
        return 'foo';
    }
};
__decorate([
    (0, common_1.Get)('install'),
    __param(0, (0, common_1.Query)('shop')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ShopifyController.prototype, "install", null);
__decorate([
    (0, common_1.Get)('auth/callback'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ShopifyController.prototype, "authCallback", null);
__decorate([
    (0, common_1.Get)('test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShopifyController.prototype, "test", null);
ShopifyController = __decorate([
    (0, common_1.Controller)('shopify'),
    (0, swagger_1.ApiTags)('shopify'),
    (0, common_1.UseGuards)(shopify_guard_1.ShopifyGuard),
    __metadata("design:paramtypes", [shopify_service_1.ShopifyService])
], ShopifyController);
exports.ShopifyController = ShopifyController;
//# sourceMappingURL=shopify.controller.js.map