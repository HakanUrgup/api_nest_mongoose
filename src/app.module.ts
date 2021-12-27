import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { DevicesModule } from './device/device.module';
import { SensorsModule } from './sensor/sensor.module';
import { SensorTypesModule } from './sensor/type/sensortype.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    DevicesModule,
    SensorTypesModule,
    SensorsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
