import { Type } from 'class-transformer';
import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

import { LocationDto } from './location.dto';

/** Coworking Data Transfer Object */
export class CoworkingDto {
  /** COworking Name */
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly openingTime: string;

  /** Coworking Opening Hour*/
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly closingTime: string;

  /** Coworking Closing Hour */
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly mainPhoto: string;

  /** Coworking Location */
  @Type(() => LocationDto)
  @IsNotEmpty()
  @ApiProperty()
  readonly location: LocationDto;
}

export class UpdateCoworkingDto extends PartialType(CoworkingDto) {}
