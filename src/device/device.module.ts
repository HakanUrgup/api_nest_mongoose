import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Device, DeviceSchema } from './schemas/device.schema';
import { DevicesController } from './device.controller';
import { DevicesRepository } from './device.repository';
import { DevicesService } from './device.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Device.name, schema: DeviceSchema }]),
  ],
  controllers: [DevicesController],
  providers: [DevicesService, DevicesRepository],
})
export class DevicesModule {}
