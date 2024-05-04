import { Module } from '@nestjs/common';
import { MySQLModule } from './provider/database/mysql/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MySQLModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
