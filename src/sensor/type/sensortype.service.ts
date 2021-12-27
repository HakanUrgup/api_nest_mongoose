import { Injectable } from '@nestjs/common';

import { SensorType } from './schemas/sensortype.schema';
import { SensorTypesRepository } from './sensortype.repository';

@Injectable()
export class SensorTypesService {
  constructor(private readonly sensorTypesRepository: SensorTypesRepository) {}

  async getSensorTypes(): Promise<SensorType[]> {
    return await this.sensorTypesRepository.find();
  }

  async createSensorType(
    _id: string,
    type: number,
    description: string,
    valuetype: string,
  ): Promise<SensorType> {
    return await this.sensorTypesRepository.create({
      _id,
      type,
      description,
      valuetype,
    });
  }

  async deleteAll() {
    return await this.sensorTypesRepository.deleteMany();
  }
}
