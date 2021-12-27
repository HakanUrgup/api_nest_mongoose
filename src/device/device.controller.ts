import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

import { Device } from './schemas/device.schema';
import { DevicesService } from './device.service';

@Controller('api/device')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get(':DeviceId')
  async getDevice(@Param('DeviceId') DeviceId: string): Promise<Device> {
    return await this.devicesService.getDeviceById(DeviceId);
  }

  @Get()
  async getDevices(): Promise<Device[]> {
    return await this.devicesService.getDevices();
  }

  @Post()
  async createDevice(
    @Body() createDeviceDto: CreateDeviceDto,
  ): Promise<Device> {
    return await this.devicesService.createDevice(
      createDeviceDto._id,
      createDeviceDto.deviceName,
      createDeviceDto.hwaddr,
      createDeviceDto.description,
    );
  }

  @Put(':deviceId')
  async updateDevice(
    @Param('deviceId') deviceId: string,
    @Body() updateDeviceDto: UpdateDeviceDto,
  ): Promise<Device> {
    return await this.devicesService.updateDevice(deviceId, updateDeviceDto);
  }

  @Delete(':deviceId')
  async deleteDevice(@Param('deviceId') deviceId: string) {
    return await this.devicesService.deleteDevice(deviceId);
  }

  @Delete()
  async deleteAll() {
    return await this.devicesService.deleteAll();
  }
}
