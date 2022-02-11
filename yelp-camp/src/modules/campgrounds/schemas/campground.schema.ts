import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuid } from "uuid";
import { Document } from "mongoose";

export type CampgroundDocument = Campground & Document;

@Schema({ validateBeforeSave: true })
export class Campground extends Document {
  @Prop({ type: String, default: () => uuid() })
  _id: string;

  @Prop({ unique: true })
  title: string;

  @Prop()
  image: string;

  @Prop({ type: Number, min: 0 })
  price: number;

  @Prop()
  description: string;

  @Prop()
  location: string;
}

export const CampgroundSchema = SchemaFactory.createForClass(Campground);
