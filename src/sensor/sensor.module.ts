import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sensor, SensorSchema } from './schemas/sensor.schema';
import { SensorsController } from './sensor.controller';
import { SensorsRepository } from './sensor.repository';
import { SensorsService } from './sensor.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sensor.name, schema: SensorSchema }]),
  ],
  controllers: [SensorsController],
  providers: [SensorsService, SensorsRepository],
})
export class SensorsModule {}
