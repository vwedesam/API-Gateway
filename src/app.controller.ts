import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:serviceName/:path')
  index(@Param() params): JSON {
    return params;
  }

  @Get('/regsiter/:serviceName/:serviceHost')
  registerService(@Param() params): string {
    return this.appService.registerService(params);
  }

  @Get('/unregsiter/:serviceName/:serviceHost')
  unregisterService(): string {
    return this.appService.unRegisterService();
  }
}
