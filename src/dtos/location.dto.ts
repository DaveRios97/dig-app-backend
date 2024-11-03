import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

import { ILocation } from '../interfaces/location.interface';

/** */
export class LocationDto implements ILocation {
  /** */
  @IsString()
  @IsNotEmpty()
  address: string;

  /** */
  @IsString()
  latitude: string;

  /** */
  @IsString()
  longitude: string;

  /** */
  @IsString()
  description: string;
}

export class UpdateLocationDto extends PartialType(LocationDto) {}
