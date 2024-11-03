import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from '../config/base.entity';
import { Location } from './location.entity';
import { ICoworking } from '../interfaces/coworking.interface';

/** Class that describes a Corworking */
@Entity({ name: 'coworkings' })
export class Coworking extends BaseEntity implements ICoworking {
  /** Name */
  @Column({ unique: true })
  name: string;

  @OneToOne(() => Location, {
    nullable: true,
  })
  @JoinColumn({ referencedColumnName: 'id' })
  location: Location;

  /** Opening Time */
  @Column()
  openingTime: string;

  /** Closing*/
  @Column()
  closingTime: string;

  /** mainPhoto */
  @Column()
  mainPhoto: string;
}
