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

  @Get('/:serviceName/:version/:path')
  getService2(@Param() params): JSON {
    return params;
  }
}
