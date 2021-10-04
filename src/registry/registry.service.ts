/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";


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

    allServices(){
        return this.registry;
    }

    registerService(params): string {
        return params;
    }

    unRegisterService(params): string {
        return params;
    }


}
