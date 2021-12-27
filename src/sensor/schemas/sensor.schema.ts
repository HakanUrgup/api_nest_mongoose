import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type SensorDocument = Sensor & Document;

@Schema()
export class Sensor {
  @Prop({ type: String })
  _id;

  @Prop({ type: Number })
  ionum;

  @Prop({ type: String })
  sensorName;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'SensorType' })
  type;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Device' })
  parentDev;
}

export const SensorSchema = SchemaFactory.createForClass(Sensor);
