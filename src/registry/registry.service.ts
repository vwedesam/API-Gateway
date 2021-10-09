/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { registerQueryDto, regsiterServiceDto } from "./registry.dto";


@Injectable()
export class RegistryService {

    private registry = {
        'localhost-v1': {
            name: "localhsot",
            version: 'v1',
            port: 3000,
            host: "http://localhost:37000",
            url: "http://localhost",
        },
        'mock-v1': {
            name: "mock",
            version: 'v1',
            port: null,
            host: "https://mocki.io/v1/",
            url: "https://mocki.io/v1/"
        },
        'task-service-v1': {
            name: "task-service",
            version: 'v1',
            port: 3210,
            host: "http://localhost:3210",
            url: "http://localhost"
        }
    };

    allServices() {
        return this.registry;
    }

    getService(serviceName: string, version = 'v1'): string {
        const service = this.registry[`${serviceName}-${version}`];

        if(!service){
            throw new NotFoundException(`service '${serviceName}', '${version}' request does not exist`); 
        }

        const { url, host, port } = service;
        if (port) {
            return host;
        } else {
            return url;
        }
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

        this.registry[`${serviceName}-${version}`] = service;

        return service;
    }

    unRegisterService(serviceName: string, version = 'v1'): void {
        delete this.registry[`${serviceName}-${version}`];
        return;
    }


}
