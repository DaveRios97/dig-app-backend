import { Entity, Column } from 'typeorm';

import { BaseEntity } from '../config/base.entity';

/** Class that describes the location of a Coworking */
@Entity({ name: 'locations' })
export class Location extends BaseEntity {
  /** Address */
  @Column({ nullable: false })
  address: string;

  /** Latitude */
  @Column({ nullable: true })
  latitude: string;

  /** Longitude */
  @Column({ nullable: true })
  longitude: string;

  /** Description */
  @Column({ nullable: true })
  description: string;
}
