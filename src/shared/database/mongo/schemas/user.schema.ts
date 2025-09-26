import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";

import { UserStatus } from "src/common/enumus/user.enum";
import { Document } from 'mongoose';   
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ enum: UserRole, default: UserRole.USER })
  role: UserRole;


  @Prop({ type : String , enum: UserStatus, default: UserStatus.ACTIVE }) 
    status: UserStatus;

}
export const UserSchema = SchemaFactory.createForClass(User);