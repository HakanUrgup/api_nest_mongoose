import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { SensorType, SensorTypeDocument } from './schemas/sensortype.schema';

@Injectable()
export class SensorsTypeRepository {
  constructor(
    @InjectModel(SensorType.name)
    private sensorTypeModel: Model<SensorTypeDocument>,
  ) {}

  async find(): Promise<SensorType[]> {
    return this.sensorTypeModel.find();
  }

  async create(sensorType: SensorType): Promise<SensorType> {
    const newSensorType = new this.sensorTypeModel(sensorType);
    return newSensorType.save();
  }

  async deleteMany() {
    return this.sensorTypeModel.deleteMany();
  }
}
