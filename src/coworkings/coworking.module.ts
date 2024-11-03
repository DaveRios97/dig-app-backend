import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Coworking } from '../entities/coworking.entity';
import { Location } from '../entities/location.entity';
import { CoworkingsController } from './coworking.controller';
import { CoworkingsService } from './coworking.service';

@Module({
  imports: [TypeOrmModule.forFeature([Coworking, Location])],
  controllers: [CoworkingsController],
  providers: [CoworkingsService],
})
export class CoworkingsModule {}
