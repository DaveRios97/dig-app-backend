import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Coworking } from 'src/entities/coworking.entity';
import { CoworkingDto } from 'src/dtos/coworking.dto';
import { LocationDto } from 'src/dtos/location.dto';
import { Location } from 'src/entities/location.entity';

@Injectable()
export class CoworkingsService {
  /** It creates a CoworkingService instance */
  constructor(
    @InjectRepository(Coworking) private coworkingRepo: Repository<Coworking>,
    @InjectRepository(Location) private locationrepo: Repository<Location>,
  ) {}

  /** Get all of the Coworkings from DataBase */
  getAll(): object {
    return this.coworkingRepo.find({
      relations: ['location'],
    });
  }

  /** Finds a Coworking by its id */
  async findOne(id: string): Promise<Coworking> {
    return await this.coworkingRepo.findOne({ where: { id } });
  }

  /** Creates a Coworking on DataBase */
  async create(body: CoworkingDto): Promise<Coworking> {
    const newCoworking = this.coworkingRepo.create(body);
    if (body.location) {
      newCoworking.location = await this.createLocation(body.location);
    }
    return this.coworkingRepo.save(newCoworking);
  }

  createLocation(body: LocationDto): Promise<Location> {
    const newLocation = this.locationrepo.create(body);
    return this.locationrepo.save(newLocation);
  }

  /** Updates Coworking by Id */
  async update(id: string, body: object): Promise<Coworking> {
    const coworking = await this.coworkingRepo.findOne({ where: { id } });
    this.coworkingRepo.merge(coworking, body);
    return this.coworkingRepo.save(coworking);
  }

  /** Deletes a Corworking by Id */
  detele(id: string) {
    return this.coworkingRepo.delete(id);
  }
}
