import { Stripe } from 'stripe';
export declare class StripeService {
    private readonly stripeClient;
    constructor(stripeClient: Stripe);
    getCheckoutUrl(priceId: string): Promise<Stripe.Response<Stripe.Checkout.Session>>;
    webhooks(req: any, res: any): Promise<any>;
}
