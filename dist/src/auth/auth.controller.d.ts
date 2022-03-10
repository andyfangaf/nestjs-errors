import { AuthService } from "./auth.service";
import { Response } from "express";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    validate(res: Response, token: string): Promise<Response<any, Record<string, any>>>;
}
