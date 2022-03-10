"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyGuard = void 0;
const common_1 = require("@nestjs/common");
const shopify_api_1 = require("@shopify/shopify-api");
let ShopifyGuard = class ShopifyGuard {
    canActivate(context) {
        const { SHOPIFY_API_KEY, SHOPIFY_SECRET, HOSTNAME, SHOPIFY_SCOPES } = process.env;
        const hostname = process.env.HOSTNAME.replace(/(^\w+:|^)\/\//, '');
        shopify_api_1.Shopify.Context.initialize({
            API_KEY: SHOPIFY_API_KEY,
            API_SECRET_KEY: SHOPIFY_SECRET,
            SCOPES: [SHOPIFY_SCOPES],
            HOST_NAME: hostname,
            IS_EMBEDDED_APP: false,
            API_VERSION: shopify_api_1.ApiVersion.October21,
        });
        return true;
    }
};
ShopifyGuard = __decorate([
    (0, common_1.Injectable)()
], ShopifyGuard);
exports.ShopifyGuard = ShopifyGuard;
//# sourceMappingURL=shopify.guard.js.map