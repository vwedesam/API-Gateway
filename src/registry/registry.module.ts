/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { RegistryService } from "./registry.service";

@Module({
    imports: [],
    providers: [RegistryService],
    exports: [RegistryService]
})
export class RegistryModule {}
