import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuid } from "uuid";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Review } from "./review.schema";
import { User } from "./user.schema";
import { Images, ImagesSchema } from "./images.schema";
import { LocationSchema, Location } from "./campground.location.schema";

export type CampgroundDocument = Campground & Document;

@Schema({ validateBeforeSave: true })
export class Campground extends Document {
  @Prop({ type: String, default: () => uuid() })
  _id: string;

  @Prop({ unique: true })
  title: string;

  @Prop({ type: LocationSchema, required: true })
  geometry: Location;

  @Prop({ type: [ImagesSchema], required: true })
  images: Images[];

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
