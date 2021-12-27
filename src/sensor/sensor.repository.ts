import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Sensor, SensorDocument } from './schemas/sensor.schema';

@Injectable()
export class SensorsRepository {
  constructor(
    @InjectModel(Sensor.name) private sensorModel: Model<SensorDocument>,
  ) {}

  async findOne(sensorFilterQuery: FilterQuery<Sensor>): Promise<Sensor> {
    return await this.sensorModel
      .findOne(sensorFilterQuery)
      .populate([{ path: 'type' }, { path: 'parentDev' }]);
  }

  async find(sensorsFilterQuery: FilterQuery<Sensor>): Promise<Sensor[]> {
    return await this.sensorModel
      .find(sensorsFilterQuery)
      .populate([{ path: 'type' }, { path: 'parentDev' }]);
  }

  async create(sensor: Sensor): Promise<Sensor> {
    const newSensor = new this.sensorModel(sensor);
    return newSensor.save();
  }

  async findOneAndUpdate(
    sensorFilterQuery: FilterQuery<Sensor>,
    sensor: Partial<Sensor>,
  ): Promise<Sensor> {
    return await this.sensorModel
      .findOneAndUpdate(sensorFilterQuery, sensor, {
        new: true,
      })
      .populate([{ path: 'type' }, { path: 'parentDev' }]);
  }

  async deleteOne(sensorFilterQuery: FilterQuery<Sensor>) {
    return await this.sensorModel.deleteOne(sensorFilterQuery);
  }

  async deleteMany() {
    return await this.sensorModel.deleteMany();
  }
}
