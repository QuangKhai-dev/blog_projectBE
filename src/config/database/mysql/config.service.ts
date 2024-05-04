import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MySqlConfigService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return this.configService.get<number>('mysql.port');
  }
  get host(): string {
    return this.configService.get<string>('mysql.host');
  }
  get username(): string {
    return this.configService.get<string>('mysql.username');
  }
  get password(): string {
    return this.configService.get<string>('mysql.password');
  }
  get database(): string {
    return this.configService.get<string>('mysql.database');
  }
}
