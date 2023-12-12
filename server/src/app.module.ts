import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { validateEnvVars } from './env';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development', '.env.test', '.env'],
      validate: validateEnvVars,
    }),
    DatabaseModule,
    AuthModule,
  ],
})
export class AppModule {}
