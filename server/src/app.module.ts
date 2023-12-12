import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { validateEnvVars } from './env';
import { DatabaseModule } from './database/database.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development', '.env.test', '.env'],
      validate: validateEnvVars,
    }),
    DatabaseModule,
    AuthModule,
    RestaurantModule,
  ],
})
export class AppModule {}
