import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsEmail(undefined, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty({ message: 'Invalid password' })
  password: string;
}
