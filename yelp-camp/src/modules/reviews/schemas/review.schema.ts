import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ReviewDocument = Review & Document;

@Schema()
export class Review extends Document {
  @Prop()
  body: string;

  @Prop({ type: Number, min: 1 })
  rating: number;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
