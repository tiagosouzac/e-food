import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login() {}

  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  async register() {}
}
