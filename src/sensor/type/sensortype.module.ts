import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SensorType, SensorTypeSchema } from './schemas/sensortype.schema';
import { SensorTypesController } from './sensortype.controller';
import { SensorTypesRepository } from './sensortype.repository';
import { SensorTypesService } from './sensortype.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SensorType.name, schema: SensorTypeSchema },
    ]),
  ],
  controllers: [SensorTypesController],
  providers: [SensorTypesService, SensorTypesRepository],
})
export class SensorTypesModule {}
