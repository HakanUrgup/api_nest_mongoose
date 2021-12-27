import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';

import { Sensor } from './schemas/sensor.schema';
import { SensorsService } from './sensor.service';

@Controller('api/sensor')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {}

  @Get(':SensorId')
  async getSensor(@Param('SensorId') SensorId: string): Promise<Sensor> {
    return await this.sensorsService.getSensorById(SensorId);
  }

  @Get()
  async getSensors(): Promise<Sensor[]> {
    return await this.sensorsService.getSensors();
  }

  @Post()
  async createSensor(
    @Body() createSensorDto: CreateSensorDto,
  ): Promise<Sensor> {
    return await this.sensorsService.createSensor(
      createSensorDto._id,
      createSensorDto.ionum,
      createSensorDto.sensorName,
      createSensorDto.type,
      createSensorDto.parentDev,
    );
  }

  @Put(':sensorId')
  async updateSensor(
    @Param('sensorId') sensorId: string,
    @Body() updateSensorDto: UpdateSensorDto,
  ): Promise<Sensor> {
    return await this.sensorsService.updateSensor(sensorId, updateSensorDto);
  }

  @Delete(':sensorId')
  async deleteSensor(@Param('sensorId') sensorId: string) {
    return await this.sensorsService.deleteSensor(sensorId);
  }

  @Delete()
  async deleteAll() {
    return await this.sensorsService.deleteAll();
  }
}
