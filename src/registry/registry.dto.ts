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
    ip: string;
}

export class registerQueryDto {

    @IsOptional()
    timeStamp: string;
}
