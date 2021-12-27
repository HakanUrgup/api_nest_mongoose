import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema()
export class Device {
  @Prop({ type: String })
  _id;

  @Prop({ type: String })
  deviceName;

  @Prop({ type: String, unique: true })
  hwaddr;

  @Prop({ type: String })
  description;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
