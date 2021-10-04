/* eslint-disable prettier/prettier */
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { registerQueryDto, regsiterServiceDto } from "./registry.dto";


@Injectable()
export class RegistryService {

    private registry = {
        localhost: {
            name: "localhsot",
            version: 'v1',
            port: 8080,
            host: "http://localhost:8080",
            url: "http://localhost.com",
        }
    };

    constructor(private httpModule: HttpService){}

    allServices() {
        return this.registry;
    }

    registerService(params: regsiterServiceDto, query: registerQueryDto) {

        const { serviceName, serviceHost, version = 'v1', port = null } = params;
        const { timeStamp } = query;

        const service = {
            name: serviceName,
            version,
            port,
            host: port ? `${serviceHost}:${port}` : serviceHost,
            url: serviceHost,
            timeStamp
        }

        this.registry[serviceName] = service;

        return service;
    }

    unRegisterService(params): string {
        return params;
    }


}
