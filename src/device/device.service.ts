import { Injectable } from '@nestjs/common';
import { UpdateDeviceDto } from './dto/update-device.dto';

import { Device } from './schemas/device.schema';
import { DevicesRepository } from './device.repository';

@Injectable()
export class DevicesService {
  constructor(private readonly devicesRepository: DevicesRepository) {}

  async getDeviceById(deviceId: string): Promise<Device> {
    return await this.devicesRepository.findOne({ _id: deviceId });
  }

  async getDevices(): Promise<Device[]> {
    return await this.devicesRepository.find({});
  }

  async createDevice(
    _id: string,
    deviceName: string,
    hwaddr: string,
    description: string,
  ): Promise<Device> {
    return await this.devicesRepository.create({
      _id,
      deviceName,
      hwaddr,
      description,
    });
  }

  async updateDevice(
    deviceId: string,
    deviceUpdates: UpdateDeviceDto,
  ): Promise<Device> {
    return await this.devicesRepository.findOneAndUpdate(
      { _id: deviceId },
      deviceUpdates,
    );
  }

  async deleteDevice(deviceId: string) {
    return await this.devicesRepository.deleteOne({ _id: deviceId });
  }

  async deleteAll() {
    return await this.devicesRepository.deleteMany();
  }
}
