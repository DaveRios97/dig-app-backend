import { BadRequestException, Injectable } from '@nestjs/common';
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
    const allCoworkjings = this.coworkingRepo
      .find({
        relations: ['location'],
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new BadRequestException(`${err.message || 'Unexpected Error'}`);
      });
    return allCoworkjings;
  }

  /** Finds a Coworking by its id */
  async findOne(id: string): Promise<Coworking> {
    const coworking = await this.coworkingRepo
      .findOne({
        where: { id },
        relations: ['location'],
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new BadRequestException(`${err.message || 'Unexpected Error'}`);
      });
    return coworking;
  }

  /** Creates a Coworking on DataBase */
  async create(body: CoworkingDto): Promise<Coworking> {
    const newCoworking = this.coworkingRepo.create(body);
    // Refactor to mandatori
    if (body.location) {
      newCoworking.location = await this.createLocation(body.location);
    }

    const coworking = this.coworkingRepo
      .save(newCoworking)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new BadRequestException(`${err.message || 'Unexpected Error'}`);
      });
    return coworking;
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

  //#region Aditional validations relationships

  /** Creates a location on DataBase */
  createLocation(body: LocationDto): Promise<Location> {
    const newLocation = this.locationrepo.create(body);
    const location = this.locationrepo
      .save(newLocation)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new BadRequestException(`${err.message || 'Unexpected Error'}`);
      });
    return location;
  }
  //#endregion
}
