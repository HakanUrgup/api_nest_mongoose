import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateSensorTypeDto } from './dto/create-sensortype.dto';

import { SensorType } from './schemas/sensortype.schema';
import { SensorTypesService } from './sensortype.service';

@Controller('api/sensor/type')
export class SensorTypesController {
  constructor(private readonly sensorsTypeService: SensorTypesService) {}

  @Get()
  async getSensorTypes(): Promise<SensorType[]> {
    return await this.sensorsTypeService.getSensorTypes();
  }

  @Post()
  async createSensorTypes(
    @Body() createSensorTypeDto: CreateSensorTypeDto,
  ): Promise<SensorType> {
    return await this.sensorsTypeService.createSensorType(
      createSensorTypeDto._id,
      createSensorTypeDto.type,
      createSensorTypeDto.description,
      createSensorTypeDto.valuetype,
    );
  }

  @Delete()
  async deleteAll() {
    return await this.sensorsTypeService.deleteAll();
  }
}
