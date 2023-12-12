import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';

@Injectable()
export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<User | null>;
  abstract create(user: User): Promise<User>;
}
