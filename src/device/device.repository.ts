import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Device, DeviceDocument } from './schemas/device.schema';

@Injectable()
export class DevicesRepository {
  constructor(
    @InjectModel(Device.name) private deviceModel: Model<DeviceDocument>,
  ) {}

  async findOne(deviceFilterQuery: FilterQuery<Device>): Promise<Device> {
    return await this.deviceModel.findOne(deviceFilterQuery);
  }

  async find(devicesFilterQuery: FilterQuery<Device>): Promise<Device[]> {
    return await this.deviceModel.find(devicesFilterQuery);
  }

  async create(device: Device): Promise<Device> {
    const newDevice = new this.deviceModel(device);
    return newDevice.save();
  }

  async findOneAndUpdate(
    deviceFilterQuery: FilterQuery<Device>,
    device: Partial<Device>,
  ): Promise<Device> {
    return await this.deviceModel.findOneAndUpdate(deviceFilterQuery, device, {
      new: true,
    });
  }

  async deleteOne(deviceFilterQuery: FilterQuery<Device>) {
    return await this.deviceModel.deleteOne(deviceFilterQuery);
  }

  async deleteMany() {
    return await this.deviceModel.deleteMany();
  }
}
