import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class HttpBearerStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(token: string) {
    console.log(token);
    try {
      if (process.env.NODE_ENV === 'development') {
        return process.env.MAGIC_TEST_USER;
      }
      const user = await this.authService.validateMagicUser(token);

      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
