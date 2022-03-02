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

ImagesSchema.virtual("thubmnail").get(function () {
  return this.url.replace("/upload", "/upload/w/200");
});
