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
exports.StripeService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_stripe_1 = require("nestjs-stripe");
const stripe_1 = require("stripe");
let StripeService = class StripeService {
    constructor(stripeClient) {
        this.stripeClient = stripeClient;
    }
    async getCheckoutUrl(priceId) {
        const session = await this.stripeClient.checkout.sessions.create({
            mode: 'subscription',
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: `${process.env.NEXT_PUBLIC_ORIGIN}?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_ORIGIN}/settings/billing`,
        });
        return session;
    }
    async webhooks(req, res) {
        let data;
        let eventType;
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
        if (webhookSecret) {
            let event;
            const signature = req.headers['stripe-signature'];
            try {
                event = this.stripeClient.webhooks.constructEvent(req.body, signature, webhookSecret);
            }
            catch (err) {
                console.log(`⚠️  Webhook signature verification failed.`);
                return res.send(400);
            }
            data = event.data;
            eventType = event.type;
        }
        else {
            data = req.body.data;
            eventType = req.body.type;
        }
        switch (eventType) {
            case 'checkout.session.completed':
                console.log('💰 Payment successful!');
                break;
            case 'invoice.paid':
                console.log('💰 Payment successful!');
                break;
            case 'invoice.payment_failed':
                console.log('💰 Payment failed!');
                break;
            default:
        }
    }
};
__decorate([
    __param(0, (0, common_1.Param)('priceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StripeService.prototype, "getCheckoutUrl", null);
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StripeService.prototype, "webhooks", null);
StripeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_stripe_1.InjectStripe)()),
    __metadata("design:paramtypes", [stripe_1.Stripe])
], StripeService);
exports.StripeService = StripeService;
//# sourceMappingURL=stripe.service.js.map