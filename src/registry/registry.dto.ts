/* eslint-disable prettier/prettier */

export class RegistryDto {
    'serviceName': InnerRegistryDto
}

export class InnerRegistryDto {
    name: string;
    version: string;
    port: number;
    host: string;
    ip: string;
}
