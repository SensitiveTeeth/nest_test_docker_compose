import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string | object {
    const env = process.env.APPID || 'no APPID';
    return env;
  }
}
