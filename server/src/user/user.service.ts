import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import {
  CreateUserValidator,
  type CreateUserDto,
} from './validations/create-user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const { email, password } = this.validateCreateUserDto(createUserDto);
    const userExists = await this.findByEmail(email);

    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const { password: _, ...user } = await this.prismaService.user.create({
      data: { email, password: await this.hashPassword(password) },
    });

    return user;
  }

  validateCreateUserDto(createUserDto: CreateUserDto) {
    const result = CreateUserValidator.safeParse(createUserDto);

    if (!result.success && 'error' in result) {
      const { errors } = result.error;
      const errorsMessages = errors.map((error) => error.message);
      throw new BadRequestException(JSON.stringify({ errors: errorsMessages }));
    }

    const { email, password } = result.data;
    return { email, password };
  }

  async hashPassword(password: string) {
    const saltOrRounds = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  async comparePasswords(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
