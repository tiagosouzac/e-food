import { Test } from '@nestjs/testing';
import { AppModule } from '../../../src/app.module';
import { UserService } from '../user.service';
import { PrismaService } from '../../../src/database/prisma.service';
import { BadRequestException } from '@nestjs/common';

describe('User service', () => {
  let userService: UserService;
  let prismaService: PrismaService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    userService = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    await prismaService.cleanDatabase();
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
    expect(prismaService).toBeDefined();
  });

  describe('create', () => {
    it('should not create a user with an invalid email', async () => {
      const userData = {
        email: 'name@email',
        password: '1234Abcd@',
        passwordConfirmation: '1234Abcd@',
      };

      const response = userService.create(userData);

      expect(response).rejects.toThrow(BadRequestException);

      const errorMessage = JSON.parse(
        await response.catch((e) => e.response.message),
      );

      expect(errorMessage.errors).toContain('Invalid email');
    });

    it('should not create a user with an weak password', async () => {
      const userData = {
        email: 'name@email.com',
        password: 'weak',
        passwordConfirmation: 'weak',
      };

      const response = userService.create(userData);

      expect(response).rejects.toThrow(BadRequestException);

      const errorMessage = JSON.parse(
        await response.catch((e) => e.response.message),
      );

      expect(errorMessage.errors).toContain(
        'The password must contain at least one uppercase letter and one special character',
      );

      expect(errorMessage.errors).toContain(
        'The password must be at least 8 characters long',
      );
    });

    it('should not create a user with an invalid password confirmation', async () => {
      const userData = {
        email: 'name@email.com',
        password: 'weak',
        passwordConfirmation: 'weak2',
      };

      const response = userService.create(userData);

      expect(response).rejects.toThrow(BadRequestException);

      const errorMessage = JSON.parse(
        await response.catch((e) => e.response.message),
      );

      expect(errorMessage.errors).toContain('Passwords do not match');
    });

    it('should not create the user if the email is already registered', async () => {
      const userData = {
        email: 'name@email.com',
        password: 'Strong@Password',
        passwordConfirmation: 'Strong@Password',
      };

      await userService.create(userData);

      const response = userService.create(userData);
      expect(response).rejects.toThrow(BadRequestException);

      const errorMessage = await response.catch((e) => e.response.message);
      expect(errorMessage).toContain('User already exists');
    });

    it('should create a user with a valid email and password', async () => {
      const userData = {
        email: 'name@email.com',
        password: 'Strong@Password',
        passwordConfirmation: 'Strong@Password',
      };

      const expected = {
        id: expect.any(String),
        email: userData.email,
        created_at: expect.any(Date),
        updated_at: null,
      };

      const response = userService.create(userData);
      expect(response).resolves.not.toThrow();

      const user = await response;
      expect(user).toEqual(expected);
    });

    it('should not return the password in the response after user creation', async () => {
      const userData = {
        email: 'name@email.com',
        password: 'Strong@Password',
        passwordConfirmation: 'Strong@Password',
      };

      const user = await userService.create(userData);
      expect(user).not.toHaveProperty('password');
    });
  });

  describe('findByEmail', () => {
    it('should not find a user by an invalid email', async () => {
      const userData = {
        email: 'name@email.com',
        password: 'Strong@Password',
        passwordConfirmation: 'Strong@Password',
      };

      await userService.create(userData);

      const response = await userService.findByEmail('invalid@email.com');
      expect(response).toBeNull();
    });

    it('should find a user by email', async () => {
      const userData = {
        email: 'name@email.com',
        password: 'Strong@Password',
        passwordConfirmation: 'Strong@Password',
      };

      await userService.create(userData);

      const user = await userService.findByEmail(userData.email);

      expect(user).toEqual({
        id: expect.any(String),
        email: userData.email,
        password: expect.any(String),
        created_at: expect.any(Date),
        updated_at: null,
      });
    });
  });
});
