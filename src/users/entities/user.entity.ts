import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Content } from 'src/contents/entities/content.entity';
import { Role } from './roles.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  userToken: string;

  @Prop()
  role: Role[];

  @Prop()
  contentsWatched: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);