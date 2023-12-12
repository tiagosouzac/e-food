import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '../../entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    return await this.prismaService.user.findUnique({ where: { email } });
  }

  async create(user: User): Promise<User> {
    return await this.prismaService.user.create({ data: user });
  }
}
