import { Injectable } from '@nestjs/common';
import { UpdateSensorDto } from './dto/update-sensor.dto';

import { Sensor } from './schemas/sensor.schema';
import { SensorsRepository } from './sensor.repository';

@Injectable()
export class SensorsService {
  constructor(private readonly sensorsRepository: SensorsRepository) {}

  async getSensorById(sensorId: string): Promise<Sensor> {
    return await this.sensorsRepository.findOne({ _id: sensorId });
  }

  async getSensors(): Promise<Sensor[]> {
    return await this.sensorsRepository.find({});
  }

  async createSensor(
    _id: string,
    ionum: number,
    sensorName: string,
    type: string,
    parentDev: string,
  ): Promise<Sensor> {
    return await this.sensorsRepository.create({
      _id,
      ionum,
      sensorName,
      type,
      parentDev,
    });
  }

  async updateSensor(
    sensorId: string,
    sensorUpdates: UpdateSensorDto,
  ): Promise<Sensor> {
    return await this.sensorsRepository.findOneAndUpdate(
      { _id: sensorId },
      sensorUpdates,
    );
  }

  async deleteSensor(sensorId: string) {
    return await this.sensorsRepository.deleteOne({ _id: sensorId });
  }

  async deleteAll() {
    return await this.sensorsRepository.deleteMany();
  }
}
