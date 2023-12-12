import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from '../database/repositories/user/user.repository';
import { LoginDto } from './dtos/login.dto';
import { hash, genSalt, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dtos/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login({ email, password }: LoginDto) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException(['User not found']);
    }

    if (!(await this.passwordsMatch(password, user.password))) {
      throw new UnauthorizedException(['Invalid password']);
    }

    const payload = { sub: user.id };
    const access_token = await this.jwtService.signAsync(payload);

    return { access_token };
  }

  async register({ name, email, password, passwordConfirmation }: RegisterDto) {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new ForbiddenException(['User already registered']);
    }

    if (password !== passwordConfirmation) {
      throw new BadRequestException(['Passwords do not match']);
    }

    const hashedPassword = await this.hashPassword(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    const payload = { sub: user.id };
    const access_token = await this.jwtService.signAsync(payload);

    return { access_token };
  }

  async hashPassword(password: string) {
    const salt = await genSalt();
    return await hash(password, salt);
  }

  async passwordsMatch(password: string, hash: string) {
    return await compare(password, hash);
  }
}
