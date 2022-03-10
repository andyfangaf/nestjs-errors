import { AuthService } from './auth.service';
declare const HttpBearerStrategy_base: new (...args: any[]) => any;
export declare class HttpBearerStrategy extends HttpBearerStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(token: string): Promise<string | boolean>;
}
export {};
