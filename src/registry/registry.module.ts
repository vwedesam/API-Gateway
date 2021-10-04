/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { RegistryController } from "./registry.controller";
import { RegistryService } from "./registry.service";

@Module({
    imports: [],
    controllers: [RegistryController],
    providers: [RegistryService],
    exports: [RegistryService]
})
export class RegistryModule {}
