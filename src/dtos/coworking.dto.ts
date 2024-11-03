import { Type } from 'class-transformer';
import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

import { Location } from 'src/entities/location.entity';
import { LocationDto } from './location.dto';

/** */
export class CoworkingDto {
  /** */
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  /** */
  @Type(() => LocationDto)
  readonly location: Location;

  @IsString()
  @IsNotEmpty()
  readonly openingTime: string;

  /** */
  @IsString()
  @IsNotEmpty()
  readonly closingTime: string;

  /** */
  @IsUrl()
  @IsNotEmpty()
  readonly mainPhoto: string;
}
