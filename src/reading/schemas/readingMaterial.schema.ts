import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReadingMaterialDocument = ReadingMaterial & Document;

@Schema()
export class ReadingMaterial extends Document {
  @Prop()
  type: string; // link, text

  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  url: string;

  @Prop()
  lastReadingDate: string;

}

export const ReadingMaterialSchema = SchemaFactory.createForClass(ReadingMaterial);