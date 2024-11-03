import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { CoworkingsService } from './coworking.service';
import { CoworkingDto } from '../dtos/coworking.dto';

/** Coworkings Controller */
@Controller('coworkings')
export class CoworkingsController {
  constructor(private readonly coworkingService: CoworkingsService) {}

  /** Get all Coworkings */
  @Get()
  getAllUsers() {
    return this.coworkingService.getAll();
  }

  /** Find one Coworking by Id */
  @Get(':id')
  async getOneUser(@Param('id') id: string) {
    return await this.coworkingService.findOne(id);
  }

  /** Create Coworking */
  @Post()
  async createUser(@Body() body: CoworkingDto) {
    return await this.coworkingService.create(body);
  }

  /** Update Coworking */
  @Put(':id')
  editUser(@Param('id') id: string, @Body() body: CoworkingDto) {
    return this.coworkingService.update(id, body);
  }

  /** Delete Coworking */
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.coworkingService.detele(id);
  }
}
