import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { validateEnvVars } from './env';
import { PrismaModule } from './database/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development', '.env.test', '.env'],
      validate: validateEnvVars,
    }),
    PrismaModule,
    AuthModule,
  ],
})
export class AppModule {}
