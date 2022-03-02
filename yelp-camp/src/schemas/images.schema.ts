import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Images extends Document {
  @Prop({ type: String })
  path: string;

  @Prop({ type: String })
  url: string;
}

export const ImagesSchema = SchemaFactory.createForClass(Images);
