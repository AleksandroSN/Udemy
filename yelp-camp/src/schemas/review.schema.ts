import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { User } from "./user.schema";

export type ReviewDocument = Review & Document;

@Schema()
export class Review extends Document {
  @Prop()
  body: string;

  @Prop({ type: Number, min: 1 })
  rating: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  author: User;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
