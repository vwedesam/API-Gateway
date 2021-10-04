import { Controller, Get, Param } from '@nestjs/common';
import { RegistryService } from './registry/registry.service';

@Controller()
export class AppController {
  constructor(private readonly registryService: RegistryService) {}

  @Get('/services')
  index(): unknown {
    return this.registryService.allServices();
  }

  @Get('/:serviceName/:path')
  getService(@Param() params): JSON {
    return params;
  }

  @Get('/regsiter/:serviceName/:serviceHost')
  registerService(@Param() params): string {
    return this.registryService.registerService(params);
  }

  @Get('/unregsiter/:serviceName/:version')
  unregisterService(@Param() params): string {
    return this.registryService.unRegisterService(params);
  }
}
