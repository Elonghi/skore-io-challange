import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContentDocument = Content & Document;

@Schema()
export class Content {
  @Prop(
    {
      required: true,
    }
  )
  name: string;
 
  @Prop(
    {
      required: true,
    }
  )
  type: string;

  @Prop(
    {
      required: true,
    }
  )
  description: string;

  constructor(content?: Partial<Content>) {
    this.name = content?.name;
    this.type = content?.type;
    this.description = content?.description;
  }  
}


export const ContentSchema  = SchemaFactory.createForClass(Content);