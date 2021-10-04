/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { registerQueryDto, regsiterServiceDto } from "./registry.dto";


@Injectable()
export class RegistryService {

    private registry = {
        fakeApi: {
            name: "FakeApi",
            version: 'v1',
            port: 8080,
            host: "https://www.fakeApi.com",
            ip: "",
        }
    };

    allServices() {
        return this.registry;
    }

    registerService(params: regsiterServiceDto, query: registerQueryDto) {

        const { serviceName, serviceHost, version = 'v1', port = '8080' } = params;
        const { timeStamp } = query;

        const service = {
            name: serviceName,
            version,
            port,
            host: serviceHost,
            ip: serviceHost,
            timeStamp
        }

        this.registry[serviceName] = service;

        return service;
    }

    unRegisterService(params): string {
        return params;
    }


}
