/* eslint-disable prettier/prettier */

import { IsAlphanumeric, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

// export class RegistryDto {
//     'serviceName': InnerRegistryDto
// }

export class regsiterServiceDto {

    @IsNotEmpty()
    @IsString()
    serviceName: string;

    @IsOptional()
    @IsString()
    version: string;

    @IsOptional()
    @IsNumber()
    port: number;

    @IsNotEmpty()
    @IsString()
    serviceHost: string;

    @IsOptional()
    @IsAlphanumeric()
    url: string;
}

export class registerQueryDto {

    @IsOptional()
    timeStamp: string;
}

export class serviceDto {
    ['']: {
        name: string;
        version: string;
        port?: number;
        serviceHost: string;
        url: string;
        timeStamp?: string;
    }
}
