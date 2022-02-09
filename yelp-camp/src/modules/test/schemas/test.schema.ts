import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CatDocument = BGGG & Document;

@Schema()
export class BGGG {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const TestSchema = SchemaFactory.createForClass(BGGG);
