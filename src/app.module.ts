import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RegistryModule } from './registry/registry.module';

@Module({
  imports: [HttpModule, RegistryModule],
  controllers: [AppController],
})
export class AppModule {}
