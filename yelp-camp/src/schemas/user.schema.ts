import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, PassportLocalDocument } from "mongoose";

export type UserDocument = User & PassportLocalDocument;
@Schema({ validateBeforeSave: true })
export class User extends Document {
  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true, unique: true })
  username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
