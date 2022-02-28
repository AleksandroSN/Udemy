import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { CampgroundImagesDTO } from "@shared";
import { v4 as uuid } from "uuid";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Review } from "./review.schema";
import { User } from "./user.schema";

export type CampgroundDocument = Campground & Document;

@Schema({ validateBeforeSave: true })
export class Campground extends Document {
  @Prop({ type: String, default: () => uuid() })
  _id: string;

  @Prop({ unique: true })
  title: string;

  @Prop()
  images: CampgroundImagesDTO[];

  @Prop({ type: Number, min: 0 })
  price: number;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String })
  location: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: Review.name }] })
  reviews: Review[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  author: User;
}

export const CampgroundSchema = SchemaFactory.createForClass(Campground);
