/* eslint-disable prettier/prettier */
import { All, Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { RegistryService } from './registry/registry.service';

// @UseFilters(HttpExceptionFilter)
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly registryService: RegistryService,
  ) { }

  @Get('/services')
  index() {
    return this.registryService.allServices();
  }

  @All('/:serviceName/:path')
  async getService(@Req() req: Request): Promise<any> {

    const { serviceName, path } = req.params;
    const query  = req.query;
    const headers = req.headers;
    const method: any = req.method;
    const body = req.body || {};

    const url = this.registryService.getService(serviceName);
  
    const response = await this.appService.callServiceWithGetMethod(url, path, method, body, query, headers);

    return response;
  }

  @All('/:serviceName/:version/:path')
  async getService2(@Req() req: Request): Promise<any> {

    const { serviceName, version, path } = req.params;
    const query  = req.query;
    const headers = req.headers;
    const method: any = req.method;
    const body = req.body || {};

    const url = this.registryService.getService(serviceName, version);
  
    const response = await this.appService.callServiceWithGetMethod(url, path, method, body, query, headers);

    return response;
  };
}
