import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RegistryModule } from './registry/registry.module';

@Module({
  imports: [RegistryModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
