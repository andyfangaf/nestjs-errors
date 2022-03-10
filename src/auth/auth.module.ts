import { HttpBearerStrategy } from './http-bearer.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule],
  providers: [HttpBearerStrategy, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
