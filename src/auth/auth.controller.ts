import { Controller, Post, Body, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("validate")
  async validate(@Res() res: Response, @Body("token") token: string) {
    const user = await this.authService.validateMagicUser(token);

    return res.status(200).send(user);
  }
}
