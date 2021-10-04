/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query } from "@nestjs/common";
import { registerQueryDto, regsiterServiceDto } from "./registry.dto";
import { RegistryService } from "./registry.service";


@Controller('/service')
export class RegistryController {

    constructor(private readonly registryService: RegistryService) {}

    @Get('register/:serviceName/:serviceHost')
    registerService(@Param() params: regsiterServiceDto, @Query() query: registerQueryDto) {
        return this.registryService.registerService(params, query);
    }

    @Get('register/:serviceName/:serviceHost/:version')
    registerService2(@Param() params: regsiterServiceDto, @Query() query: registerQueryDto) {
        return this.registryService.registerService(params, query);
    }
  
    @Get('register/:serviceName/:serviceHost/:version/:port')
    registerService3(@Param() params: regsiterServiceDto, @Query() query: registerQueryDto) {
      return this.registryService.registerService(params, query);
    }
  
    @Get('unregister/:serviceName/:version')
    unregisterService(@Param() params) {
      return this.registryService.unRegisterService(params);
    }

}
