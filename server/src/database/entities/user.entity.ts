import { randomUUID } from 'crypto';

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
}

export class User implements IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  created_at?: Date;

  constructor({ id, name, email, password, created_at }: IUser) {
    this.id = id ?? randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
    this.created_at = created_at ?? new Date();
  }
}
