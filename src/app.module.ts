import { Module } from '@nestjs/common';
import { MySQLModule } from './provider/database/mysql/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './models/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MySQLModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
