/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  registerService(params): string {
    return params;
  }

  unRegisterService(): string {
    return '';
  }
  
}
