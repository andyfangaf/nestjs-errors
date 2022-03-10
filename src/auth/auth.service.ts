import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AuthService {
  async validateMagicUser(didToken: string) {
    return true;
  }
}
