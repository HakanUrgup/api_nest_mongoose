import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SensorTypeDocument = SensorType & Document;

@Schema()
export class SensorType {
  @Prop({ type: String })
  _id;

  @Prop({ type: Number, unique: true })
  type;

  @Prop({ type: String })
  description;

  @Prop({ type: String, unique: true })
  valuetype;
}

export const SensorTypeSchema = SchemaFactory.createForClass(SensorType);
