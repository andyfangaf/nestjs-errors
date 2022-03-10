import { Request, Response } from 'express';
import { ShopifyService } from './shopify.service';
export declare class ShopifyController {
    private readonly shopifyService;
    constructor(shopifyService: ShopifyService);
    install(shop: string, req: Request, res: Response): Promise<void>;
    authCallback(query: any, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    test(): Promise<string>;
}
