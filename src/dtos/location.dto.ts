import { IsNotEmpty, IsString } from 'class-validator';

import { ILocation } from 'src/interfaces/location.interface';

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
